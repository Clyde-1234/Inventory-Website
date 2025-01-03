import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			height: {
				'128': '32rem',
				'192': '48rem'
			},
			width: {
				'256': '64rem'
			}
		}
	},

	plugins: [typography, forms]
} satisfies Config;
