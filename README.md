Cookie Clicker Game Project

This project is a React-based interactive game inspired by the popular “cookie clicker” style of gameplay. The app not only meets the core requirements but also includes several advanced features that enhance the user experience and game functionality. Reflecting on this project, I’m particularly pleased with how it aligns with both the core requirements and stretch goals, as well as the development practices used to achieve them. This project has been instrumental in strengthening my React development skills, particularly in using useState and useEffect for responsive state management and real-time updates.

Features

Real-Time State Management

    •	useState & useEffect: The app uses useState and useEffect hooks extensively to handle user interactions, manage cookies per second (CPS), and provide real-time updates within the game.
    •	Auto-Cookie Increment: A setInterval function within useEffect ensures that cookies increase automatically every second, offering users a continuous sense of progress.
    •	Memory Management: Cleanup functions in useEffect help prevent unnecessary memory usage by clearing intervals when they are no longer needed.

Modular Component Structure

    •	Component Files: The app is organised into separate components, including Header, CookieCounter, CookieButton, UpgradeButton, ResetButton, and MutedButton, which keeps the code modular, maintainable, and easy to understand.
    •	Dynamic Rendering: The use of .map() to render upgrade items allows for easy modification of upgrades without requiring changes to the rendering logic, making the app more dynamic and flexible.

Upgrade System

    •	Button Interactivity: The app disables upgrade buttons when the user has insufficient cookies, providing clear feedback on achievable actions.
    •	Backend Integration with Supabase: Supabase is used to fetch upgrade information, with SQL structuring the database. This integration centralises the logic for upgrades, creating a streamlined backend solution.

Data Persistence

    •	Local Storage: The app uses local storage to save the game state, so cookies and CPS are preserved between sessions.
    •	Reset Functionality: A reset button allows users to restart the game and clear all stored data, adding replayability.

User Experience Enhancements

    •	Audio Feedback: Sound effects for the upgrade, cookie click, and reset actions provide immediate auditory feedback, adding a layer of interactivity and immersion. Audio files are organised in a sounds folder within the public directory.
    •	Mute Button: A mute button, implemented as the MutedButton component, allows users to toggle audio on and off, enhancing accessibility and catering to different user preferences.

File Organisation

    •	Public Folder Structure: The app’s images and audio files are separated into distinct folders (images and sounds) within the public directory, keeping assets organised and easy to manage.

UI & Styling

    •	Basic Styling: While the app includes basic styling, there is room for further UI improvements to increase visual appeal. Future design enhancements could make the app more intuitive and engaging.

Areas for Improvement

    •	Comma Formatting for Numbers: An area of improvement is adding commas to the cookie count and CPS displays. After researching solutions, I found that Redux would be a suitable tool for implementing this enhancement, though I currently lack experience with Redux. Learning Redux to achieve this formatting is a future goal for improving the project’s readability and user experience.

Summary

This project has been a valuable learning experience across various development practices, from state management and real-time updates to componentisation and backend integration. Meeting the core and stretch goals has laid a strong foundation for future improvements and additional features. This project has strengthened my React skills and inspired ideas for further enhancements, including improved UI design, number formatting, and a more refined user experience.
