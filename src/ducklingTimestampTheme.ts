
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const ducklingTimestampTheme: CustomThemeConfig = {
    name: 'duckling-timestamp-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #1177c5 
		"--color-primary-50": "219 235 246", // #dbebf6
		"--color-primary-100": "207 228 243", // #cfe4f3
		"--color-primary-200": "196 221 241", // #c4ddf1
		"--color-primary-300": "160 201 232", // #a0c9e8
		"--color-primary-400": "88 160 214", // #58a0d6
		"--color-primary-500": "17 119 197", // #1177c5
		"--color-primary-600": "15 107 177", // #0f6bb1
		"--color-primary-700": "13 89 148", // #0d5994
		"--color-primary-800": "10 71 118", // #0a4776
		"--color-primary-900": "8 58 97", // #083a61
		// secondary | #addcff 
		"--color-secondary-50": "243 250 255", // #f3faff
		"--color-secondary-100": "239 248 255", // #eff8ff
		"--color-secondary-200": "235 246 255", // #ebf6ff
		"--color-secondary-300": "222 241 255", // #def1ff
		"--color-secondary-400": "198 231 255", // #c6e7ff
		"--color-secondary-500": "173 220 255", // #addcff
		"--color-secondary-600": "156 198 230", // #9cc6e6
		"--color-secondary-700": "130 165 191", // #82a5bf
		"--color-secondary-800": "104 132 153", // #688499
		"--color-secondary-900": "85 108 125", // #556c7d
		// tertiary | #f0f0f0 
		"--color-tertiary-50": "253 253 253", // #fdfdfd
		"--color-tertiary-100": "252 252 252", // #fcfcfc
		"--color-tertiary-200": "251 251 251", // #fbfbfb
		"--color-tertiary-300": "249 249 249", // #f9f9f9
		"--color-tertiary-400": "245 245 245", // #f5f5f5
		"--color-tertiary-500": "240 240 240", // #f0f0f0
		"--color-tertiary-600": "216 216 216", // #d8d8d8
		"--color-tertiary-700": "180 180 180", // #b4b4b4
		"--color-tertiary-800": "144 144 144", // #909090
		"--color-tertiary-900": "118 118 118", // #767676
		// success | #75da10 
		"--color-success-50": "234 249 219", // #eaf9db
		"--color-success-100": "227 248 207", // #e3f8cf
		"--color-success-200": "221 246 195", // #ddf6c3
		"--color-success-300": "200 240 159", // #c8f09f
		"--color-success-400": "158 229 88", // #9ee558
		"--color-success-500": "117 218 16", // #75da10
		"--color-success-600": "105 196 14", // #69c40e
		"--color-success-700": "88 164 12", // #58a40c
		"--color-success-800": "70 131 10", // #46830a
		"--color-success-900": "57 107 8", // #396b08
		// warning | #daae10 
		"--color-warning-50": "249 243 219", // #f9f3db
		"--color-warning-100": "248 239 207", // #f8efcf
		"--color-warning-200": "246 235 195", // #f6ebc3
		"--color-warning-300": "240 223 159", // #f0df9f
		"--color-warning-400": "229 198 88", // #e5c658
		"--color-warning-500": "218 174 16", // #daae10
		"--color-warning-600": "196 157 14", // #c49d0e
		"--color-warning-700": "164 131 12", // #a4830c
		"--color-warning-800": "131 104 10", // #83680a
		"--color-warning-900": "107 85 8", // #6b5508
		// error | #da1010 
		"--color-error-50": "249 219 219", // #f9dbdb
		"--color-error-100": "248 207 207", // #f8cfcf
		"--color-error-200": "246 195 195", // #f6c3c3
		"--color-error-300": "240 159 159", // #f09f9f
		"--color-error-400": "229 88 88", // #e55858
		"--color-error-500": "218 16 16", // #da1010
		"--color-error-600": "196 14 14", // #c40e0e
		"--color-error-700": "164 12 12", // #a40c0c
		"--color-error-800": "131 10 10", // #830a0a
		"--color-error-900": "107 8 8", // #6b0808
		// surface | #424c67 
		"--color-surface-50": "227 228 232", // #e3e4e8
		"--color-surface-100": "217 219 225", // #d9dbe1
		"--color-surface-200": "208 210 217", // #d0d2d9
		"--color-surface-300": "179 183 194", // #b3b7c2
		"--color-surface-400": "123 130 149", // #7b8295
		"--color-surface-500": "66 76 103", // #424c67
		"--color-surface-600": "59 68 93", // #3b445d
		"--color-surface-700": "50 57 77", // #32394d
		"--color-surface-800": "40 46 62", // #282e3e
		"--color-surface-900": "32 37 50", // #202532
		
	}
}