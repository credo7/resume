import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import en from "../locales/en";
import ru from "../locales/ru";

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
  const router = useRouter();
  const { locale } = router;
  const t = locale === "ru" ? ru : en;

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
              {t.name}
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
            <span className="inline-block">{t.desc1}</span>
            <span className="inline-block">{t.desc2}</span>
            <span className="inline-block">{t.desc3}</span>
          </div>
          <h2 className="mt-[20px] font-[700] text-[24px]">{t.skillsField}</h2>
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
            {t.projectsField}
          </h2>
          <div className="flex flex-col space-y-3 mb-[20px]">
            <p className="font-[500] text-[24px] my-auto mr-auto min-w-[160px] text-left">
              {t.firstProjectName}
            </p>
            <div className="flex flex-col space-y-3">
              <p className="font-[500]">{t.firstProjectRole}</p>
              <span>{t.firstProjectDesc1}</span>
              <span>{t.firstProjectDesc2}</span>
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
            <p className="font-[500]">{t.secondProjectTags}</p>
            <p className="font-[500]">{t.secondProjectRole}</p>
            <div className="flex flex-col space-y-3">
              <span>{t.secondProjectDesc1}</span>
              <span>{t.secondProjectDesc2}</span>
              <span>{t.secondProjectDesc3}</span>
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
            <p className="font-[500]">{t.thirdProjectRole}</p>
            <div className="flex flex-col space-y-3">
              <span>{t.thirdProjectDesc1}</span>
              <span>{t.thirdProjectDesc2}</span>
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
            <h2 className="font-[700] text-[24px]">{t.educationField}</h2>
            <div className="font-[500] text-[24px]">School 21</div>
            <div className="flex flex-col space-y-3">
              <span className="inline-block">{t.schoolDesc1}</span>
              <span className="inline-block">{t.schoolDesc2}</span>
              <span className="inline-block">{t.schoolDesc3}</span>
              <span className="inline-block">{t.schoolDesc4}</span>
            </div>
            <div className="font-[500] text-[24px]">ILAC Toronto</div>
            <div className="flex flex-col space-y-3">
              <span className="inline-block">{t.ilacDesc1}</span>
              <span className="inline-block">{t.ilacDesc2}</span>
              <span className="inline-block">{t.ilacDesc3}</span>
              <span className="inline-block">{t.ilacDesc4}</span>
              <span className="inline-block">{t.ilacDesc5}</span>
            </div>
            <div className="font-[500] text-[24px]">{t.kfuField}</div>
            <div className="flex flex-col space-y-3">
              <span>{t.kfuDirection}</span>
              <span>{t.kfuCourse}</span>
            </div>
          </div>
          <a className="w-full" href="https://t.me/swagv">
            <div className="fixed bottom-4 w-[min(90vw,686px)] bg-[rgb(26,26,26)] text-white text-center font-[500] py-2 rounded-[8px] text-[20px]">
              {t.writeMe}
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
