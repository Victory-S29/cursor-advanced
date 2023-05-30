import spa1 from "../../imgs/SPA/spa1.png";
import spa2 from "../../imgs/SPA/spa2.png";
import spa3 from "../../imgs/SPA/spa3.png";
import spa4 from "../../imgs/SPA/spa4.png";

import timer1 from "../../imgs/Timer/timer1.png";
import timer2 from "../../imgs/Timer/timer2.png";

import lp1 from "../../imgs/landing-page/lp1.png";
import lp2 from "../../imgs/landing-page/lp2.png";
import lp3 from "../../imgs/landing-page/lp3.png";
import lp4 from "../../imgs/landing-page/lp4.png";

import redux1 from "../../imgs/redux/redux1.png";
import redux2 from "../../imgs/redux/redux2.png";
import redux3 from "../../imgs/redux/redux3.png";

const initialState = {
    projects: {
        "en": [{
            id: 1,
            name: "Timer",
            description: "Сountdown timer",      
            projectDescription: "The project is a countdown timer. The <Timer> component receives various props such as time (initial time), autostart (automatic start flag), step (timer update interval), onTick (function called on each timer update) etc.",
            technologies: [
                "React: Used to create the <Timer> component and manage the timer's state.",
                "JavaScript: Used for the timer logic and working with time.",
                "CSS: Used for styling the <Timer> component and animating the decreasing bar.",
                "Event Handling: Used for handling events such as button clicks (start/pause) and calling functions based on timer events.",
                "Сlass Based:Used to create the <Timer> component, and React class-based lifecycle methods such as componentDidMount"
            ],
            gallery: [timer1, timer2],
        }, {
            id: 2,
            name: "SPA",
            projectDescription: "The project is a Single Page Application (SPA) that consists of the following pages: Home Page: This page displays an image and text that represent general information about the application. Publications Page: This page contains multiple publications and displays them on the page. Photo Gallery Page: This page displays a grid of images, resembling a simulated Instagram feed. Contacts Page: This page includes a list of contacts. There is a menu at the top of the page for navigating between pages.",
            technologies: [
                "React: Used for creating components and managing the application's state.",
                "JavaScript: Used for logic and data manipulation.",
                "CSS: Used for styling components and page layout.",
                "React Router: Used for navigation between pages in a single-page application."
            ],
            description: "Single page application with several pages",
            gallery: [spa1, spa2, spa3, spa4],
        }, {
            id: 3,
            name: "SPA with Redux",
            description: "Single page application with form using Redux",
            gallery: [redux1, redux2, redux3],
            projectDescription: "In this project, a store is created to store publication data with fake information. Each publication contains the following information: author, author's image, author's nickname, publication date, publication text, publication image, number of likes, number of comments, and number of reposts. A form is also created where users can enter data for a new publication. The form includes fields for entering the publication text, image link, and selecting an author from a dropdown list. When the Add button is pressed, the data from the form is dispatched to the store. The functionality and publication data are managed using Redux, which is used for state management in the application. React is used for creating components and interacting with Redux. CSS is used for component styling. On a separate page, all the posts are displayed.",
            technologies: [
                "React: for creating components and interacting with Redux.",
                "Redux: for state management and storing publication data.",
                "JavaScript: for logic and data manipulation.",
                "CSS: for component styling and page layout."
            ],
        }, {
            id: 4,
            name: "Landing page",
            description: "Landing page with adaptive design",
            gallery: [lp1, lp2, lp3, lp4],
            projectDescription: "The completed project is a responsive web page created using the design from Figma. SCSS and CSS were used for styling and component layout.",
            technologies: [
                "HTML: Used to create the structure and layout of the webpage.",
                "CSS: Used for styling components and positioning elements on the page.",
                "SCSS: Used to enhance CSS workflow by utilizing variables, nested styles, mixins, and other features.",
                "Responsive design: Implemented using media queries and responsive classes to ensure optimal display of the page on different devices and screen sizes.",
                "Figma: Used for creating the design, layout, and components of the webpage, helping visualize the final result.",
                "Layout technologies: Include the use of Flexbox and Grid for element positioning, working with relative units of measurement, organizing the page structure, handling fonts, and other layout techniques."
            ],
        }],

        "ua": [{
            id: 1,
            name: "Таймер",
            description: "Таймер зворотнього відліку",
            gallery: [timer1, timer2],
            projectDescription: "Проєкт це таймер зворотнього відліку. Компонента <Timer> приймає різні властивості, такі як час, потребу в автостарті, інтервал, функцію, яка викликається на кожному кроці, та інше",
            technologies: [
                "React: Використовується для створення компонента <Timer> та керування станом таймера.",
                "JavaScript: Використовується для логіки таймера та роботи з часом.",
                "CSS: Використовується для стилізації компонента <Timer> та анімації зменшуючоїся панелі.",
                "Обробка подій: Використовується для обробки подій, таких як натискання кнопок (старт/пауза) та виклик функцій на основі подій таймера",
                "Класовий підхід: Використовується для створення компонента <Timer> та використання методів життєвого циклу на основі класів React, таких як componentDidMount."
            ],
        }, {
            id: 2,
            name: "SPA",
            description: "SPA з декількома сторінками",
            gallery: [spa1, spa2, spa3, spa4],
            projectDescription: "Проєкт є односторінковим додатком (SPA), який містить наступні сторінки: Головна сторінка: На цій сторінці відображається зображення та текст, які представляють загальну інформацію про додаток. Сторінка публікацій: Ця сторінка містить декілька публікацій та відображає їх на сторінці Сторінка з фотографіями: На цій сторінці відображається сітка зображень, що нагадує умовний Інстаграм. Сторінка з контактами: Ця сторінка містить список контактів. Зверху сторінки знаходиться меню, за допомогою якого можна переходити між сторінками",
            technologies: [
                "React: Використовується для створення компонентів та управління станом додатку.",
                "JavaScript: Використовується для логіки та маніпуляцій з даними.",
                "CSS: Використовується для стилізації компонентів та розмітки сторінок.",
                "React Router: Використовується для навігації між сторінками в односторінковому додатку."
            ], 
        }, {
            id: 3,
            name: "SPA з Redux",
            description: "SPA з формою з використанням Redux",
            gallery: [redux1, redux2, redux3],
            projectDescription: "У цьому проекті створено store, в якому зберігаються дані про публікації з фейковими даними. Кожна публікація містить наступну інформацію: автора, зображення автора, нікнейм автора, дату публікації, текст публікації, зображення публікації, кількість лайків, кількість коментарів та кількість перепостів. Також створено форму, в яку можна ввести дані для нової публікації. Форма містить поля для введення тексту публікації, посилання на зображення та вибору автора з випадаючого списку. При натисканні кнопки Додати, дані з форми відправляються в store за допомогою диспетчера (dispatch).  Описані функціональність та дані про публікації зберігаються за допомогою Redux, який використовується для управління станом додатку. React використовується для створення компонентів та взаємодії з Redux. Для стилізації компонентів використовується CSS. На окремій сторінці виводяться всі пости",
            technologies: [
                "JavaScript: для логіки та маніпуляцій з даними.",
                "CSS: для стилізації компонентів та розмітки сторінок.",
                "React: для створення компонентів та взаємодії з Redux.",
                "Redux: для управління станом додатку та збереження даних про публікації."
            ],
        }, {
            id: 4,
            name: "Веб-сторінка",
            description: "Сторінка з адаптивним дизайном",
            gallery: [lp1, lp2, lp3, lp4],
            projectDescription: "Готовий проект є адаптивною веб-сторінкою, створеним з використанням дизайну з Figma. В проекті були використані SCSS та CSS для стилізації і верстки компонентів.",
            technologies: [
                "HTML: використовується для створення структури і розмітки сторінки.",
                "CSS: використовується для стилізації компонентів і розташування елементів на сторінці.",
                "SCSS: використовується для поліпшення роботи з CSS шляхом використання змінних, вкладених стилів, міксинів та інших функцій.",
                "Адаптивний дизайн: використовуються медіа-запити і адаптивні класи для забезпечення оптимального відображення сторінки на різних пристроях і розмірах екрану.",
                "Figma: використовується для створення дизайну, макету та компонентів сторінки, що допомагає візуалізувати кінцевий результат.",
                "Технології верстки: включають в себе розташування елементів за допомогою Flexbox і Grid, використання відносних одиниць вимірювання, організацію структури сторінки, роботу зі шрифтами та інші техніки верстки."
            ],
        }]
    }
}

const ProjectReducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return initialState;
        }
    }
}

export default ProjectReducer;