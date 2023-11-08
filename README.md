<!-- logo -->

<div align="center">

![Group 48099691](https://github.com/younu-Yun/FE-EarF/assets/87592697/eb341626-4696-4df9-94e0-b0271bf8e50f)

# 지구를 위한 행동! EarF

[<img src="https://img.shields.io/badge/프로젝트 기간-2023.05.29~2023.06.16-green?style=flat&logoColor=white" />]()
<br />
[🌳 웹사이트 바로가기](https://www.eco-earf.com/)

</div>

<br />

## 1-1. 서비스 링크

- ### https://www.eco-earf.com/


<br />
<br />

## 1-2. 미리보기

![5  기록하기](https://github.com/younu-Yun/FE-EarF/assets/87592697/5a280485-c2a8-4d94-9bc1-1f5e9385fb3f)


<br />
<br />

## 2. 서비스 소개

### 지구를 위한 우리들의 지속가능한 행동! 환경보호를 실천하고 기록하고 공유하는 웹페이지! 
### 매일의 기록을 통해 내가 얼마나 지구를 생각하고 있는지 알 수 있어요
<br />

![페르소나](https://github.com/younu-Yun/FE-EarF/assets/87592697/f0dd85a9-6060-4fc1-8f31-4a33bc80b684)
![서비스 목표](https://github.com/younu-Yun/FE-EarF/assets/87592697/324f808b-a050-42ea-82b7-5e43b83bce65)
![서비스 기능명세](https://github.com/younu-Yun/FE-EarF/assets/87592697/11dfcc29-a0db-4d98-95e0-62c602bb296d)

<br />
<br />

## 3. API 문서

### User, Auth

- ### https://documenter.getpostman.com/view/26741774/2s93sgXAzh

### Diary

- ### https://documenter.getpostman.com/view/26747226/2s93shy9AD

### Question

- ### https://documenter.getpostman.com/view/20811195/2s93shyUQx

<br>
<br />


## 4. System Architecture
<img width="1019" alt="Screenshot_2023-06-16_at_4 44 51_PM" src="https://github.com/younu-Yun/FE-EarF/assets/87592697/d46e5bda-5e6d-434b-a802-10317def49eb">

<br />
<br />

## 5. Tech Stack

|**Tech-Stack**|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------ | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| **Frontend** | <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=black"> <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"> <img src="https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=Redux&logoColor=black"> <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"> <img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white"> <img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E"> |
| **Backend**  |                                                                                                                                                                                                                   <img src="https://img.shields.io/badge/nodejs-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=black"> <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white">                                                                                                                                                                                                                    |
| **DB**       |                                                                                                                                                                                                                                                                        <img src="https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white">                                                                                                                                                                                                                                                                         |
| **Others**   |                                                                                                               <img src="https://img.shields.io/badge/GitLab-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white"> <img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white"><img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white"> <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white">                                                                                                                |
| **Dev-Ops**       |                                                                                                                                                                                                                                                                         <img src="https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=NGINX&logoColor=black"> <img src="https://img.shields.io/badge/pm2-2B037A?style=for-the-badge&logo=pm2&logoColor=white">                                                                                                                                                                                                                                                                             |

<br>



## 6. Directory

<details><summary>Backend</summary>

```bash
📦backend
 ┣ 📂controller
 ┣ 📂middlewares
 ┣ 📂models
 ┃ ┣ 📂schemas
 ┃ ┗ 📜index.ts
 ┣ 📂passport
 ┃ ┣ 📂strategies
 ┃ ┗ 📜index.ts
 ┣ 📂public
 ┃ ┗ 📂images
 ┣ 📂routers
 ┣ 📂services
 ┣ 📂utils
 ┣ 📜.gitignore
 ┣ 📜app.ts
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┗ 📜tsconfig.json
```

</details>
<details><summary>Frontend</summary>

```bash
📦frontend
 ┣ 📂public
 ┃ ┗ 📜index.html
 ┣ 📂src
 ┃ ┣ 📂api
 ┃ ┣ 📂assets
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂Calender
 ┃ ┃ ┣ 📂common
 ┃ ┃ ┣ 📂community
 ┃ ┃ ┣ 📂Diary
 ┃ ┃ ┣ 📂mypage
 ┃ ┃ ┗ 📂User
 ┃ ┣ 📂pages
 ┃ ┣ 📂services
 ┃ ┣ 📂store
 ┃ ┣ 📂types
 ┃ ┣ 📂utils
 ┃ ┣ 📜App.tsx
 ┃ ┣ 📜color.scss
 ┃ ┣ 📜index.scss
 ┃ ┣ 📜index.tsx
 ┃ ┗ 📜routes.tsx
 ┣ 📜.eslintrc
 ┣ 📜.gitignore
 ┣ 📜.prettierrc
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┗ 📜tsconfig.json
```

</details>


<br>

## 7. 실행 방법

1. 레포지토리를 클론하고자 하는 디렉토리에서 아래 명령어를 수행

```bash
git clone <레포지토리 주소>
```

2. 클론한 디렉토리에서 frontend, backend디렉토리로 들어가 아래 명령어를 통해 각각각 필요한 module 설치

```bash
npm install
```

3. backend에서 필요한 `.env` 설정

```bash
MONGODB_URI=<mongoDB url>
PORT=<port>
URL=<url>
JWTACCESS=<key>
JWTREFRESH=<key>
MAILER_ID=<google>
MAILER_PWD=<google>
IMAGEDOMAIN=<이미지경로url>
```

4. express 앱과 react앱을 실행

```bash
npm run start
```

<br>

## 8. Team Member

<table width="950">
    <thead>
    </thead>
    <tbody>
    <tr>
        <th>사진</th>
         <td width="100" align="center">
                <img src="https://github.com/younu-Yun/FE-EarF/assets/87592697/a85b9f51-e39a-4131-a3b8-5a12b7784cc1" width="60" height="60">
            </a>
        </td>
        <td width="100" align="center">
                <img src="https://github.com/younu-Yun/FE-EarF/assets/87592697/898f187d-2326-4f17-a183-26f71867c36e" width="60" height="60">
            </a>
        </td>
        <td width="100" align="center">
               <img src="https://github.com/younu-Yun/FE-EarF/assets/87592697/8fa8d8de-52f7-4f21-8dfb-e9e99d47d08b" width="60" height="60">
            </a>
        </td>
        <td width="100" align="center">
                <img src="https://github.com/younu-Yun/FE-EarF/assets/87592697/535a13cf-f2be-41a1-ac51-d34d2884e4a2" width="60" height="60">
            </a>
        </td>
        <td width="100" align="center">
                <img src="https://github.com/younu-Yun/FE-EarF/assets/87592697/ecb31288-8f5f-4589-8b72-f802ad1fc798" width="60" height="60">
            </a>
        </td>
        <td width="100" align="center">
              <img src="https://github.com/younu-Yun/FE-EarF/assets/87592697/4bc70e97-63c5-42e5-ba28-bb6f40f1f479" width="60" height="60">
            </a>
        </td>
        <td width="100" align="center">
               <img src="https://github.com/younu-Yun/FE-EarF/assets/87592697/6f7648c6-e0f1-4e0b-823c-758a0a0e7fe0" width="60" height="60">
            </a>
        </td>
    </tr>
    <tr>
        <th>이름</th>
        <td width="100" align="center">윤우정</td>
        <td width="100" align="center">윤성준</td>
        <td width="100" align="center">이채연</td>
        <td width="100" align="center">진호병</td>
        <td width="100" align="center">김윤중</td>
        <td width="100" align="center">노재열</td>
        <td width="100" align="center">오창현</td>
    </tr>
    <tr>
        <th>역할</th>
        <td width="150" align="center">
            frontend<br>
        </td>
        <td width="150" align="center">
            frontend<br>
        </td>
        <td width="150" align="center">
            frontend<br>
        </td>
         <td width="150" align="center">
            frontend<br>
        </td>
         <td width="150" align="center">
            backend<br>
        </td>
         <td width="150" align="center">
            backend<br>
        </td>
         <td width="150" align="center">
            backend<br>
        </td>
    </tr>
    <tr>
        <th>GitHub</th>
        <td width="100" align="center">
            <a href="https://github.com/younu-Yun">
                <img src="http://img.shields.io/badge/younu-Yun-green?style=social&logo=github"/>
            </a>
        </td>
        <td width="100" align="center">
            <a href="https://github.com/joony0219">
                <img src="http://img.shields.io/badge/joony0219-green?style=social&logo=github"/>
            </a>
        </td>
        <td width="100" align="center">
            <a href="https://github.com/gwanseeum">  
                <img src="http://img.shields.io/badge/gwanseeum-green?style=social&logo=github"/>
            </a>
        </td>
        <td width="100" align="center">
            <a href="https://github.com/bicco2">
                <img src="http://img.shields.io/badge/bicco2-green?style=social&logo=github"/>
            </a>
        </td>
        <td width="100" align="center">
            <a href="https://github.com/YunJ96">
                <img src="http://img.shields.io/badge/YunJ96-green?style=social&logo=github"/>
            </a>
        </td>
         <td width="100" align="center">
            <a href="https://github.com/paikpaik">
                <img src="http://img.shields.io/badge/paikpaik-green?style=social&logo=github"/>
            </a>
          </td>
                   <td width="100" align="center">
            <a href="https://github.com/ChanghyeonO">
                <img src="http://img.shields.io/badge/ChanghyeonO-green?style=social&logo=github"/>
            </a>
          </td>
    </tr>
    </tbody>
</table>

<br />
<br />

## 9. Prize

🏆 엘리스 2차 프로젝트 우수상 수상

<img width="500" src="https://github.com/younu-Yun/FE-EarF/assets/87592697/3b24f298-8d32-478b-99fa-e9c1a206e1ed)https://github.com/younu-Yun/FE-EarF/assets/87592697/3b24f298-8d32-478b-99fa-e9c1a206e1ed"/>


<br>
<br>


