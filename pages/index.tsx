import type { NextPage } from "next";
import Head from "next/head";

const skills = [
  "HTML / CSS / JS",
  "ReactJS / Redux",
  "NEXTJS / TS",
  "Docker / CI / CD",
  "Postgres / Firebase",
  "TypeORM / Prisma",
  "GraphQL / Algorithms",
  "GIT / CMD / SQL",
  "REST API / NodeJs",
  "NestJS / Express",
  "Python / C",
];

const Home: NextPage = () => {
  return (
    <div className="px-[24px]">
      <Head>
        <title>Vitaly</title>
        <meta name="description" content="Vitaly's resume" />
        <script src="https://cdn.tailwindcss.com" />
      </Head>

      <main className="flex items-start justify-center">
        <div className="w-full sm:w-[686px] flex-col pb-[80px]">
          <img
            className="mx-auto sm:mx-0 w-[250px] rounded-full"
            src="ava.jpeg"
          />
          <div className="flex flex-row space-x-4 mt-[20px] mb-[12px]">
            <h2 className="text-[24px] font-[700] text-[rgb(26,26,26)]">
              Виталий Ахметзянов
            </h2>
            <a href="https://t.me/swagv">
              <img
                className="w-8 h-8 hover:scale-[115%] duration-300 cursor-pointer"
                src="telegram.svg"
              />
            </a>
            <a href="https://github.com/credo7">
              <img
                className="w-8 h-8 hover:scale-[115%] duration-300 cursor-pointer"
                src="github.svg"
              />
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-[rgb(26,26,26)]">
            <span className="inline-block">
              Cпециализируюсь во Frontend области, умею пользоваться GitHub,
              писать чистый и понятный код, а также пунктуально и ответственно
              его пушить
            </span>
            <span className="inline-block">
              В данный момент изучаю новые технологии, совершенствую изученные
              навыки и начинаю задумываться о трудоустройстве
            </span>
            <span className="inline-block">
              Главный профессиональный интерес - это развитие, хотел бы получить
              более глубокие знания и опыт работы с крупными проектами, а потом
              применять их в команде
            </span>
          </div>
          <h2 className="mt-[20px] font-[700] text-[24px]">Навыки</h2>
          <div className="mt-[12px]">
            {skills.map((skill, index) => {
              return (
                <span
                  key={index}
                  className="bg-[#eee] rounded-[32px] py-1 px-3 inline-block m-[6px] ml-0"
                >
                  {skill}
                </span>
              );
            })}
          </div>
          <h2 className="mt-[20px] mb-[12px] text-[24px] font-[700] text-[rgb(26,26,26)]">
            Мои проекты
          </h2>
          <div className="flex flex-col space-y-3 mb-[20px]">
            <p className="font-[500] text-[24px] my-auto mr-auto min-w-[160px] text-left">
              Feed
            </p>
            <div className="flex flex-col space-y-3">
              <span>
                Цель проекта - реализовать аналог instagram в modern стиле c
                динамическими данными.
              </span>
              <span>
                Функционал: Подписки, лента, посты, лайки, комментарии к постам,
                редактирование / просмотр / поиск профиля
              </span>
              <span>
                Stack: NextJS, Recoil, TypeScript, Tailwind, Firebase Auth,
                Database, storage, CI / CD, GitHub Pages
              </span>
            </div>
            <div className="flex flex-row sm:ml-auto space-x-4">
              <a
                className="text-[rgb(26,26,26)] border-[1px] border-gray-400 px-4 py-1 rounded-[32px] hover:scale-[115%] duration-300 hover:text-white hover:bg-[rgb(26,26,26)] hover:border-[rgb(26,26,26)]"
                href="https://www.youtube.com/watch?v=y___OOWVqzY"
              >
                Demo
              </a>
              <a
                className="text-[rgb(26,26,26)] border-[1px] border-gray-400 px-4 py-1 rounded-[32px] hover:scale-[115%] duration-300 hover:text-white hover:bg-[rgb(26,26,26)] hover:border-[rgb(26,26,26)]"
                href="https://credo7.github.io/my-feed/"
              >
                Web
              </a>
              <a
                className="text-[rgb(26,26,26)] border-[1px] border-gray-400 px-4 py-1 rounded-[32px] hover:scale-[115%] duration-300 hover:text-white hover:bg-[rgb(26,26,26)] hover:border-[rgb(26,26,26)]"
                href="https://github.com/credo7/my-feed"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-3 mb-[20px]">
            <p className="font-[500] text-[24px] my-auto mr-auto min-w-[160px] text-left">
              ft_transcendence
            </p>
            <p className="font-[500]">
              Веб-приложение · Игра в Пинг-Понг · TypeScript
            </p>
            <div className="flex flex-col space-y-3">
              <span>
                Участие в реализации проекта, с помощью которого пользователи
                смогут играть в пинг-понг между собой в реальном времени.
              </span>
              <span>
                В проекте реализован REST API, система авторизации с JWT
                токенами, дополнительное общение с сервером через веб-сокеты, а
                также все сервисы завернуты в docker контейнеры
              </span>
              <span>Командный проект от школы 21</span>
              <span>Stack: (React, NestJS, PostgreSQL, Docker)</span>
            </div>
            <div className="flex flex-row sm:ml-auto space-x-4">
              <a
                className="text-[rgb(26,26,26)] border-[1px] border-gray-400 px-4 py-1 rounded-[32px] hover:scale-[115%] duration-300 hover:text-white hover:bg-[rgb(26,26,26)] hover:border-[rgb(26,26,26)]"
                href="https://youtu.be/k_7NmJMGW9E"
              >
                Demo
              </a>
              <a
                className="text-[rgb(26,26,26)] border-[1px] border-gray-400 px-4 py-1 rounded-[32px] hover:scale-[115%] duration-300 hover:text-white hover:bg-[rgb(26,26,26)] hover:border-[rgb(26,26,26)]"
                href="http://www.asicmine.ru:8080/"
              >
                Web
              </a>
              <a
                className="text-[rgb(26,26,26)] border-[1px] border-gray-400 px-4 py-1 rounded-[32px] hover:scale-[115%] duration-300 hover:text-white hover:bg-[rgb(26,26,26)] hover:border-[rgb(26,26,26)]"
                href="https://github.com/bandrw/ft_transcendence"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <p className="font-[500] text-[24px] my-auto mr-auto min-w-[160px] text-left">
              Personal Dictionary
            </p>
            <div className="flex flex-col space-y-3">
              <span>
                Цель проекта - реализовать веб-приложение, с помощью которого
                пользователи cмогут добавлять английские слова для дальнейшего
                их изучения
              </span>
              <span>
                В проекте реализован REST API, система авторизации с JWT
                токенами, а также все сервисы завернуты в docker контейнеры.
              </span>
              <span>
                Stack: ReactJs, Redux, TypeScript, SCSS, REST API NestJS, JWT
                Auth, Postgres, TypeORM, Docker
              </span>
            </div>
            <div className="flex flex-row sm:ml-auto space-x-4">
              <a
                className="text-[rgb(26,26,26)] border-[1px] border-gray-400 px-4 py-1 rounded-[32px] hover:scale-[115%] duration-300 hover:text-white hover:bg-[rgb(26,26,26)] hover:border-[rgb(26,26,26)]"
                href="https://www.youtube.com/watch?v=IUhhCpymxhs"
              >
                Demo
              </a>
              <a
                className="text-[rgb(26,26,26)] border-[1px] border-gray-400 px-4 py-1 rounded-[32px] hover:scale-[115%] duration-300 hover:text-white hover:bg-[rgb(26,26,26)] hover:border-[rgb(26,26,26)]"
                href="https://github.com/credo7/englishApp"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="mt-[20px] space-y-3">
            <h2 className="font-[700] text-[24px]">Образование</h2>
            <div className="font-[500] text-[24px]">School 21</div>
            <div className="flex flex-col space-y-3">
              <span className="inline-block">
                Франшиза французской школы программирования "Ecole 42".
              </span>
              <span className="inline-block">
                Опыт разработки интересных проектов
              </span>
              <span className="inline-block">Метод обучения peer-to-peer</span>
              <span className="inline-block">Командные проекты</span>
            </div>
            <div className="font-[500] text-[24px]">ILAC Toronto</div>
            <div className="flex flex-col space-y-3">
              <span className="inline-block">
                Интернациональная языковая академия
              </span>
              <span className="inline-block">
                Написано более 8 research проектов
              </span>
              <span className="inline-block">IELTS от 6.5</span>
              <span className="inline-block">
                Сертификат о степени знания англйиского языка на Advanced
                уровень
              </span>
              <span className="inline-block">Pathway 3.3</span>
            </div>
            <div className="font-[500] text-[24px]">КФУ</div>
            <div className="flex flex-col space-y-3">
              <span>Направление Business-IT</span>
              <span>Заканчиваю 3 курс</span>
            </div>
          </div>
          <a className="w-full" href="https://t.me/swagv">
            <div className="fixed bottom-4 w-[min(90vw,686px)] bg-[rgb(26,26,26)] text-white text-center font-[500] py-2 rounded-[8px] text-[20px]">
              Написать мне
            </div>
          </a>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        
      </footer> */}
    </div>
  );
};

export default Home;
