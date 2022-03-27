// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'slightly-seasoned',
	imageBackground: false,
	openInNewTab: false,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning,',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to sleep,',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'c43a44087e38b80c144c202a7678c6c9', // Write here your API Key
	weatherIcons: 'White', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '47.551',
	defaultLongitude: '-52.721750',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'GitHub',
			icon: 'github',
			link: 'https://github.com',
		},
		{
			id: '2',
			name: 'Reddit',
			icon: 'bot',
			link: 'https://www.reddit.com',
		},
		{
			id: '3',
			name: 'YT',
			icon: 'youtube',
			link: 'https://www.youtube.com',
		},
		{
			id: '4',
			name: 'suckless',
			icon: 'binary',
			link: 'https://suckless.org',
		},
	],

	secondButtonsContainer: [
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'bot',
			id: '1',
			links: [
				{
					name: 'Homepage',
					link: 'https://www.reddit.com',
				},
				{
					name: 'r/unixporn',
					link: 'https://www.reddit.com/r/unixporn',
				},
				{
					name: 'r/linuxmasterrace',
					link: 'https://www.reddit.com/r/linuxmasterrace',
				},
				{
					name: 'r/memes',
					link: 'https://www.reddit.com/r/memes',
				},
			],
		},
		{
			icon: 'binary',
			id: '2',
			links: [
				{
					name: 'suckless homepage',
					link: 'https://suckless.org',
				},
				{
					name: 'dwm',
					link: 'https://dwm.suckless.org',
				},
				{
					name: 'st',
					link: 'https://st.suckless.org',
				},
				{
					name: 'dmenu',
					link: 'https://tools.suckless.org/dmenu',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
	],
};

