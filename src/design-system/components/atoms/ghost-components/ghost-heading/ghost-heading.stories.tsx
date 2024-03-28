import React from 'react'
import { GhostHeading } from './ghost-heading'
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof GhostHeading> = {
	title: 'Design System/Atoms/Ghost Components/Ghost Heading',
	component: GhostHeading
};

export default meta;
type Story = StoryObj<typeof GhostHeading>;

const GhostHeadingStoryTemplate: Story = {
	render: ({...args}) => (
		<div style={{ margin: 'auto', maxWidth: '1800px' }}>
			<GhostHeading order={1} margin={args.margin} />
			<GhostHeading order={2} noMargin />
			<GhostHeading order={3} />
			<GhostHeading order={4} />
			<GhostHeading order={5} />
		</div>
	)
}

export const GhostHeadingStory = {
	...GhostHeadingStoryTemplate,
	args: {
		margin: [2.5, 0]
	}
}