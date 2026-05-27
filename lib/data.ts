import {
  Code2,
  Smartphone,
  Monitor,
  Server,
  Brain,
  Bot,
  Gamepad2,
  Database,
  ShieldCheck,
  Github,
  LifeBuoy,
  Presentation,
  FileCheck2,
  Wrench,
  Send,
  MessageCircle,
  Mail,
  type LucideIcon,
} from 'lucide-react';

export type Service = {
  title: string;
  description: string;
  stack: string[];
  icon: LucideIcon;
};

export type Advantage = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type TeamMember = {
  name: string;
  role: string;
  description: string;
  achievements: string[];
  highlights: string[];
  contacts: {
    telegram: string;
    vk: string;
    email: string;
  };
  photo: string;
  initials: string;
};

export type FAQItem = {
  q: string;
  a: string;
};

export type ContactLink = {
  label: string;
  href: string;
  icon: LucideIcon;
  username: string;
};

export const SITE = {
  name: 'Код, который учит',
  title: 'Помощь в написании IT-дипломов и курсовых работ',
  description:
    'Помогаем студентам разобраться в теме, разработать IT-проект по требованиям вуза и уверенно выйти на защиту. Сопровождаем вас на всём пути самостоятельной подготовки.',
  primaryContact: 'https://vk.com/kodimtvoydiplom',
  url: 'http://localhost:3000',
  minPrice: 5000,
  minPriceLabel: 'от 5 000 ₽',
};

export const SERVICES: Service[] = [
  {
    title: 'Веб-приложения',
    description:
      'SPA, многостраничные сайты, админ-панели и SaaS. Чистая архитектура и адаптивный дизайн.',
    stack: ['React', 'Next.js', 'Vue', 'TypeScript', 'Node.js'],
    icon: Code2,
  },
  {
    title: 'Мобильные приложения',
    description:
      'Кроссплатформенные и нативные приложения с продуманным UX и интеграциями.',
    stack: ['Flutter', 'React Native', 'Kotlin', 'Swift'],
    icon: Smartphone,
  },
  {
    title: 'Десктоп и системные',
    description:
      'Приложения для Windows, Linux, macOS — от утилит до клиент-серверных систем.',
    stack: ['C#/.NET', 'WPF', 'Qt', 'C++', 'Electron'],
    icon: Monitor,
  },
  {
    title: 'Backend и API',
    description:
      'REST/GraphQL/WebSocket API, микросервисы, авторизация, очереди и кэширование.',
    stack: ['Node.js', 'Python', 'Go', 'Java', 'PostgreSQL'],
    icon: Server,
  },
  {
    title: 'ML и Data Science',
    description:
      'Модели машинного обучения, нейросети, компьютерное зрение, NLP и аналитика данных.',
    stack: ['Python', 'PyTorch', 'TensorFlow', 'scikit-learn'],
    icon: Brain,
  },
  {
    title: 'Telegram-боты',
    description:
      'Боты любой сложности: от простых ответчиков до маркетплейсов и автоматизаций.',
    stack: ['aiogram', 'telegraf', 'grammY', 'Webhook'],
    icon: Bot,
  },
  {
    title: 'Игры и графика',
    description:
      'Учебные 2D/3D игры, симуляторы, графика и физика на современных движках.',
    stack: ['Unity', 'Unreal', 'Godot', 'OpenGL'],
    icon: Gamepad2,
  },
  {
    title: 'Базы данных',
    description:
      'Проектирование схем, нормализация, оптимизация запросов, миграции и репликация.',
    stack: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
    icon: Database,
  },
];

export const ADVANTAGES: Advantage[] = [
  {
    title: 'Индивидуальный разбор темы',
    description:
      'Никаких шаблонов и пересказов: погружаемся в вашу методичку и предметную область, чтобы вы понимали каждое решение и могли уверенно объяснить его комиссии.',
    icon: ShieldCheck,
  },
  {
    title: 'Понятный пример проекта',
    description:
      'Готовим демонстрационный пример в приватном репозитории на GitHub — с понятной структурой, комментариями и историей коммитов, чтобы вы изучили подход и адаптировали его под себя.',
    icon: Github,
  },
  {
    title: 'Сопровождение до защиты',
    description:
      'Разбираем вопросы научного руководителя и комиссии, репетируем ответы и помогаем спокойно выйти на защиту.',
    icon: LifeBuoy,
  },
  {
    title: 'Подготовка к выступлению',
    description:
      'Подсказываем, как выстроить доклад и слайды, на чём сделать акценты и какие вопросы вероятнее всего зададут — чтобы вы выступали уверенно.',
    icon: Presentation,
  },
  {
    title: 'Разбор пояснительной записки',
    description:
      'Помогаем разобраться со структурой, теоретической частью и оформлением по ГОСТ — подсказываем, как корректно подготовить текст к проверке оригинальности.',
    icon: FileCheck2,
  },
  {
    title: 'Поддержка на доработках',
    description:
      'Если научный руководитель присылает замечания — разбираем их вместе, подсказываем, как улучшить код и текст, и отвечаем на вопросы по теории.',
    icon: Wrench,
  },
];

export const PROCESS: ProcessStep[] = [
  {
    step: '01',
    title: 'Знакомство с темой',
    description:
      'Пишете нам во ВКонтакте — обсуждаем вашу тему, требования вуза и то, на каких этапах нужна поддержка.',
  },
  {
    step: '02',
    title: 'План и материалы',
    description:
      'Готовим учебный план и демонстрационные материалы под ваше направление: показываем, как может быть устроен подобный проект и какие технологии разобрать.',
  },
  {
    step: '03',
    title: 'Разбор кода и улучшения',
    description:
      'Проверяем ваш код, объясняем архитектурные решения, подсказываем, что можно улучшить, и помогаем разобраться со сложными местами.',
  },
  {
    step: '04',
    title: 'Подготовка к защите',
    description:
      'Репетируем ответы на вопросы комиссии, помогаем расставить акценты в докладе и консультируем по теории — чтобы вы вышли на защиту уверенно.',
  },
];

export const TEAM: TeamMember[] = [
  {
    name: 'Ширкунов Артём Евгеньевич',
    role: 'Fullstack-разработчик, Senior',
    description:
      'Обычно беру на себя сложные и запутанные темы. Помогаю собрать проект в понятную систему: от архитектуры и базы данных до финальной подготовки к защите, чтобы вы могли уверенно всё объяснить комиссии.',
    achievements: [
      'Молодой учёный',
      'Победитель научной конференции «Молодые исследователи — регионам»',
      'Победитель чемпионата «Профессионалы»',
      'Призёр чемпионата «Арктек дата»',
      'Призёр хакатона IT_One CAREER HACKATHON',
    ],
    highlights: [
      'Web (React / Next.js / Node.js)',
      'Backend и SQL',
      'Архитектура, Git, Docker',
    ],
    contacts: {
      telegram: 'https://t.me/nvarchar',
      vk: 'https://vk.com/shiae',
      email: 'mailto:sven557929@mail.ru',
    },
    photo: '/team/shirkunov.jpg',
    initials: 'АШ',
  },
  {
    name: 'Ушаков Иван Андреевич',
    role: 'Fullstack-разработчик, Senior',
    description:
      'Отвечаю за визуальную часть, удобство и аккуратную подачу проекта. Также занимаюсь технической частью: мобильными и desktop-решениями, автоматизацией и ML.',
    achievements: [
      'Призёр хакатона IT_One CAREER HACKATHON',
      'Двукратный призёр геймтона DatsTeam',
      'Призёр Game Dev Синеус хакатона',
      'Призёр чемпионата Yandex Cup',
    ],
    highlights: [
      'Frontend и UX-подача',
      'Mobile и desktop-решения',
      'AI/ML и автоматизация',
    ],
    contacts: {
      telegram: '@LayoutLord',
      vk: 'https://vk.com/1vanish2',
      email: 'mailto:vancik1024@gmail.com',
    },
    photo: '/team/ushakov.jpg',
    initials: 'УИ',
  },
];

export const TECHNOLOGIES: string[] = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Django', 'FastAPI',
  'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes', 'Flutter',
  'React Native', 'Kotlin', 'Swift', 'C#', '.NET', 'Java', 'Spring',
  'Go', 'Rust', 'PyTorch', 'TensorFlow', 'Unity', 'Unreal', 'Tailwind',
  'GraphQL', 'AWS', 'Linux',
];

export const FAQ: FAQItem[] = [
  {
    q: 'Сколько времени занимает сопровождение?',
    a: 'Длительность зависит от темы, объёма проекта и того, на каком этапе подключаетесь. После короткого знакомства согласуем удобный график сопровождения — чтобы вы спокойно подготовились к защите.',
  },
  {
    q: 'Какие гарантии вы даёте?',
    a: 'Договариваемся о фиксированной стоимости и сроке заранее и сопровождаем вас до успешной защиты, помогая на каждом этапе.',
  },
  {
    q: 'Пройдёт ли работа антиплагиат?',
    a: 'Помогаем разобраться с оформлением пояснительной записки и теоретической части так, чтобы корректно подготовленный текст прошёл проверку оригинальности в «Антиплагиат.ВУЗ», «Руконтекст», eTXT и аналогичных системах.',
  },
  {
    q: 'Сколько стоит ваша помощь?',
    a: 'Минимальная стоимость — от 5 000 ₽. Итоговая цена договорная и зависит от объёма, темы и требований вуза. Напишите нам во ВКонтакте — пришлём оценку в течение часа.',
  },
  {
    q: 'Как происходит оплата?',
    a: 'Удобным для вас способом: переводом на карту, СБП или иначе. Можно по этапам: предоплата, промежуточный разбор, финальное сопровождение.',
  },
  {
    q: 'Сохраняете ли вы конфиденциальность?',
    a: 'Да. По запросу подписываем NDA. Не публикуем материалы, которые готовим под вашу тему, и не передаём их кому-либо ещё.',
  },
];

export const ALL_CONTACT_LINKS = (m: TeamMember): ContactLink[] => [
  {
    label: 'Telegram',
    href: m.contacts.telegram.startsWith('@')
      ? `https://t.me/${m.contacts.telegram.slice(1)}`
      : m.contacts.telegram,
    icon: Send,
    username: m.contacts.telegram.startsWith('@')
      ? m.contacts.telegram
      : '@' + m.contacts.telegram.replace(/^https?:\/\/t\.me\//, ''),
  },
  {
    label: 'ВКонтакте',
    href: m.contacts.vk,
    icon: MessageCircle,
    username: m.contacts.vk.replace(/^https?:\/\//, ''),
  },
  {
    label: 'Email',
    href: m.contacts.email,
    icon: Mail,
    username: m.contacts.email.replace(/^mailto:/, ''),
  },
];

export const NAV_LINKS = [
  { href: '#services', label: 'Услуги' },
  { href: '#process', label: 'Как работаем' },
  { href: '#why', label: 'Почему мы' },
  { href: '#team', label: 'Команда' },
  { href: '#reviews', label: 'Отзывы' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contacts', label: 'Контакты' },
];
