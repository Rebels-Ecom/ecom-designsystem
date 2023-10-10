import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { IntroBlock } from './intro-block'

const meta: Meta<typeof IntroBlock> = {
    title: 'Design System/Molecules/IntroBlock',
    component: IntroBlock
};

export default meta;
type Story = StoryObj<typeof IntroBlock>;

const IntroBlockStoryTemplate: Story = {
  render: ({ ...args }) => (<IntroBlock {...args} />)
};

export const IntroBlockStory = {
    ...IntroBlockStoryTemplate,
    args: {
        title: 'En extraordnär rom till choklad',
        ingress: 'En trevlig ölupplevelse är mer än bara stunden då drycken når smaklökarna. Det är många delar som ska falla på plats. Från det första intrycket som ett perfekt upphällt öl med vacker skumkrona ger, till smaken av ölets sista droppar. För att helhetsupplevelsen ska få toppbetyg behöver alla detaljer ses över. En av dessa detaljer är valet av glas.',
        richText: (
          <section className="text-center">
            <div className="OutlineElement Ltr BCX9 SCXW202138125" style={{color: '#000000', backgroundColor: '#ffffff', margin: 0, padding: 0 }}>
              <h5 className="Paragraph SCXW202138125 BCX9" style={{ color: 'windowtext', backgroundColor: 'transparent', marginRight: 0,marginLeft: 0, padding: 0, fontSize: '20px' }}>Vi vill stolt presentera&nbsp;våra två nya profilglas, speciellt framtagna för att&nbsp;få varje serverad&nbsp;Mariestads&nbsp;att visa sig från sin allra bästa sida.</h5>
            </div>

            <p className="Paragraph SCXW202138125 BCX9" style={{color: 'windowtext', backgroundColor: 'transparent', marginRight: 0, marginLeft: 0, padding: 0 }}>En trevlig&nbsp;ölupplevelse&nbsp;är mer än bara stunden då drycken når smaklökarna. Det är många delar som ska falla på plats. Från det första intrycket som ett&nbsp;perfekt upphällt&nbsp;öl med vacker skumkrona ger, till smaken av ölets sista droppar. För att helhetsupplevelsen ska få toppbetyg behöver alla detaljer ses över. En av dessa&nbsp;detaljer&nbsp;är valet av glas.</p>
            <p className="Paragraph SCXW202138125 BCX9" style={{color: 'windowtext', backgroundColor: 'transparent', marginRight: 0, marginLeft: 0, padding: 0 }}>I samarbete med en av världens främsta&nbsp;glasdesigner presenterar därför Mariestads stolt sina två nya profilglas. Dessa är speciellt framtagna och designade för att komplettera och förhöja upplevelsen av&nbsp;ett öl från&nbsp;Mariestads.&nbsp;</p>
          </section>
        )
    }
}
