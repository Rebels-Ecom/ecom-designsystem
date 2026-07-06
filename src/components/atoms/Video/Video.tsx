import { useEffect, useRef, useState, type Ref } from 'react'
import { cn } from '../../../lib/cn'
import { mergeRefs } from '../../../lib/mergeRefs'

export type VideoOpacity = 'light' | 'dark'

export interface VideoTrack {
  /** URL of the WebVTT track file. */
  src: string
  /** Track kind. @default 'captions' */
  kind?: 'captions' | 'subtitles' | 'descriptions' | 'chapters' | 'metadata'
  /** BCP-47 language of the track, e.g. `sv`. */
  srcLang?: string
  /** Human-readable track label shown in the UA menu. */
  label?: string
  /** Whether this is the default track. */
  default?: boolean
}

export interface VideoProps {
  /** Primary video source URL. */
  videoUrl: string
  /** Alternate source used at ≤767px viewports. */
  mobileUrl?: string
  /** Decorative colour scrim laid over the video. */
  videoWithOpacity?: VideoOpacity
  /**
   * Accessible name for the video (1.1.1 / 4.1.2). Describe the content, e.g. "Öl hälls upp".
   */
  label: string
  /** Poster image shown before playback. */
  poster?: string
  /** Caption/subtitle/description `<track>`s (1.2.2–1.2.5). */
  tracks?: VideoTrack[]
  /**
   * Auto-play on mount. Always muted + looped. Suppressed when the user prefers reduced motion
   * (2.3.3), and always accompanied by a pause control (2.2.2). @default true
   */
  autoPlay?: boolean
  /** Accessible label for the control while playing. @default 'Pausa videon' */
  pauseLabel?: string
  /** Accessible label for the control while paused. @default 'Spela videon' */
  playLabel?: string
  /** Extra classes, merged onto the wrapper `<div>` via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<video>`. */
  ref?: Ref<HTMLVideoElement>
}

const opacityClasses: Record<VideoOpacity, string> = {
  light: 'bg-white/30',
  dark: 'bg-black/40',
}

function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Set the muted *property* the instant the node attaches (before effects run). React doesn't reliably
// reflect the `muted` attribute onto the property, and browsers only permit autoplay for muted video —
// so this is what actually lets autoplay start (and keeps audio silent, 1.4.2).
function forceMuted(node: HTMLVideoElement | null) {
  if (node) {
    node.muted = true
    node.defaultMuted = true
  }
}

function PauseGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-5">
      <rect x="6" y="5" width="4" height="14" rx="1" />
      <rect x="14" y="5" width="4" height="14" rx="1" />
    </svg>
  )
}

function PlayGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-5">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

/**
 * Background video atom. Renders a muted, looping `<video>` with an accessible name (`label`).
 * Because auto-playing motion longer than 5s needs a control (WCAG 2.2.2), it always renders a
 * keyboard-operable pause/play button (44px target, visible focus ring, name via `aria-label`).
 * Auto-play is suppressed for users who prefer reduced motion (2.3.3). The video is muted so no
 * audio plays automatically (1.4.2); pass `tracks` for captions/descriptions (1.2.2–1.2.5).
 */
function Video({
  videoUrl,
  mobileUrl,
  videoWithOpacity,
  label,
  poster,
  tracks,
  autoPlay = true,
  pauseLabel = 'Pausa videon',
  playLabel = 'Spela videon',
  className,
  ref,
}: VideoProps) {
  const [source, setSource] = useState(videoUrl)
  // Respect reduced motion from the first paint (2.3.3), so the native `autoPlay` attribute is
  // never set for those users rather than briefly playing and then pausing.
  const [playing, setPlaying] = useState(() => autoPlay && !prefersReducedMotion())
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    // Swap to the mobile source on narrow viewports (legacy behaviour).
    if (typeof window !== 'undefined' && window.innerWidth <= 767 && mobileUrl) {
      setSource(mobileUrl)
    }
  }, [mobileUrl])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (playing) {
      // Programmatic play() can reject (autoplay policy / not yet loaded); ignore — the visible
      // control lets the user start it, and the state stays the source of truth for the label.
      void video.play().catch(() => {})
    } else {
      video.pause()
    }
  }, [playing, source])

  return (
    <div className={cn('relative', className)}>
      <video
        ref={mergeRefs<HTMLVideoElement>(videoRef, ref, forceMuted)}
        aria-label={label}
        poster={poster}
        autoPlay={playing}
        loop
        muted
        playsInline
        preload="auto"
        className="block h-full w-full max-w-full object-cover"
      >
        <source src={source} type="video/mp4" />
        {tracks?.map((track, i) => (
          <track
            key={`track_${i}`}
            src={track.src}
            kind={track.kind ?? 'captions'}
            srcLang={track.srcLang}
            label={track.label}
            default={track.default}
          />
        ))}
      </video>

      {videoWithOpacity && (
        <div aria-hidden="true" className={cn('absolute inset-0 z-10', opacityClasses[videoWithOpacity])} />
      )}

      <button
        type="button"
        onClick={() => setPlaying((current) => !current)}
        aria-label={playing ? pauseLabel : playLabel}
        className={cn(
          'absolute right-2 bottom-2 z-20 inline-flex size-11 items-center justify-center rounded-full bg-black/50 text-text-white',
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary',
        )}
      >
        {playing ? <PauseGlyph /> : <PlayGlyph />}
      </button>
    </div>
  )
}

export { Video }
