UPDATE:
    BOT-BACKEND:
        FEAT: Created a function to delete images from the cloudinary folder if the event is deleted & updated the relevant logic. 
        
        FIX: Alter some db queries as they were still calling the pgclient in their own component instead of through the prebuilt db utility.

    BOT-DASHBOARD:
        FIX: Failure when trying to click on the button to close the menu, used stopPropagation to stop the mousedown even only if the button is being clicked specifically.

    PORTFOLIO:

    WEATHER-APP:
