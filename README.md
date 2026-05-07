# Лендинг для IT-курсовых и дипломов

Современный одностраничный сайт-визитка для команды Ширкунова Артёма и Ушакова Ивана: разработка курсовых и дипломных проектов для IT-специальностей.

Стек: **Next.js 14 (App Router) + TypeScript + TailwindCSS + Framer Motion**.

---

## Быстрый старт через Docker (рекомендуется)

Требуется установленный **Docker Desktop** (и docker compose v2).

```bash
docker compose up --build
```

Сайт откроется на [http://localhost:3000](http://localhost:3000).

Для остановки:

```bash
docker compose down
```

---

## Локальный запуск без Docker (для разработки)

Требуется **Node.js 20+** и **npm**.

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

Для production-сборки:

```bash
npm run build
npm run start
```

---

## Где править контакты и контент

Все данные собраны в одном файле — [lib/data.ts](lib/data.ts):

- `SITE.primaryContact` — основная ссылка на VK-группу (используется в кнопках hero/navbar/футера).
- `TEAM` — массив с двумя участниками. Для каждого:
  - `name` — ФИО
  - `role` — короткая роль/специализация
  - `description` — текст «обо мне»
  - `highlights` — короткие теги под описанием
  - `contacts.telegram` — ссылка вида `https://t.me/username`
  - `contacts.vk` — ссылка вида `https://vk.com/username`
  - `contacts.email` — ссылка вида `mailto:user@example.com`
- `SERVICES`, `ADVANTAGES`, `PROCESS`, `FAQ`, `TECHNOLOGIES` — соответствующие списки.
- `NAV_LINKS` — пункты верхнего меню.

После изменений достаточно перезапустить `npm run dev` или пересобрать docker-образ:

```bash
docker compose up --build
```

---

## Структура проекта

```
.
├── app/                # Next.js App Router (layout, страница, стили)
├── components/         # секции лендинга и переиспользуемые UI-компоненты
│   └── ui/             # Button, Section, Reveal
├── lib/data.ts         # ВЕСЬ контент сайта — правится тут
├── public/             # статика
├── Dockerfile          # multi-stage сборка (standalone)
├── docker-compose.yml  # запуск одной командой
└── ...
```

---

## Полезные команды

| Команда                     | Что делает                                  |
| --------------------------- | ------------------------------------------- |
| `npm run dev`               | dev-сервер с hot reload                     |
| `npm run build`             | production-сборка                           |
| `npm run start`             | запуск собранной версии                     |
| `docker compose up --build` | сборка и запуск в Docker                    |
| `docker compose down`       | остановка контейнера                        |
| `docker compose logs -f`    | смотреть логи в реальном времени            |

---

## Лицензия

© IT-курсовые и дипломы — все права защищены.
