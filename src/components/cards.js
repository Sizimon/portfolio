import ProjectImages from '../images.js';

const cards = [
    {
        id: 1,
        title: 'Gripendor Discord Bot',
        summary: 'A Discord bot for managing and tracking guild activity in gaming communities.',
        description: 'The Gripendor Bot is a Discord bot designed to streamline event management, role tracking, and attendance tracking within a Discord server. It integrates with a PostgreSQL database to store and retrieve data, and it provides a seamless user experience through Discord commands, buttons, and modals. The bot also integrates with Cloudinary for image management and offers a customizable dashboard for server administrators.',
        images: [ProjectImages.gimg1, ProjectImages.gimg2, ProjectImages.gimg3],
        livelink: 'https://szymonsamus.dev/bot-dashboard',
        github: 'https://github.com/Sizimon/attendance-tracker/blob/main/README.md'
    },
    {
        id: 2,
        title: 'Task Manager',
        summary: 'A simple task manager app for tracking tasks and projects.',
        description: 'PLACEHOLDER TEXT',
        images: [ProjectImages.timg1, ProjectImages.timg2, ProjectImages.timg3],
    },
    {
        id: 3,
        title: 'Weather Tracker',
        summary: 'A Weather Tracker web-app with a modern design.',
        description: 'GuruWeather is a modern weather application built with React that provides real-time weather information for any location. It features a visually appealing interface with animations, dynamic backgrounds, and responsive design. The app uses the OpenWeatherMap API to fetch weather data and displays it in an intuitive and user-friendly way.',
        images: [ProjectImages.wimg1, ProjectImages.wimg2, ProjectImages.wimg3],
        livelink: 'https://szymonsamus.dev/weather-app'
    },
];

export default cards;