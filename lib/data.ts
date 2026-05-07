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
  highlights: string[];
  contacts: {
    telegram: string;
    vk: string;
    email: string;
  };
  avatar: string;
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
  name: 'IT-курсовые и дипломы',
  title: 'Курсовые и дипломные проекты для IT-специальностей',
  description:
    'Разрабатываем уникальные IT-курсовые и дипломные проекты: веб, мобильные, десктоп, ML, боты и игры. Сопровождение до защиты.',
  primaryContact: 'https://vk.com/club238456733',
  url: 'http://localhost:3000',
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
    title: 'Только уникальный код',
    description:
      'Никаких шаблонов и копипасты. Каждый проект пишется с нуля под ваше ТЗ и методичку.',
    icon: ShieldCheck,
  },
  {
    title: 'Исходники на GitHub',
    description:
      'Передаём приватный репозиторий с историей коммитов, README и документацией.',
    icon: Github,
  },
  {
    title: 'Сопровождение до защиты',
    description:
      'Отвечаем на вопросы научного руководителя и комиссии, помогаем подготовиться.',
    icon: LifeBuoy,
  },
  {
    title: 'Презентация и доклад',
    description:
      'Готовим слайды, тезисы и раздаточный материал, чтобы защита прошла на отлично.',
    icon: Presentation,
  },
  {
    title: 'Любой антиплагиат',
    description:
      'Текст пояснительной записки проходит «Антиплагиат.ВУЗ», «Руконтекст» и аналогичные.',
    icon: FileCheck2,
  },
  {
    title: 'Бесплатные доработки',
    description:
      'Правки по замечаниям руководителя в рамках исходного ТЗ — без доплат и сюрпризов.',
    icon: Wrench,
  },
];

export const PROCESS: ProcessStep[] = [
  {
    step: '01',
    title: 'Заявка и обсуждение',
    description:
      'Пишете нам во ВКонтакте — за 10–30 минут уточняем тему, требования вуза и сроки.',
  },
  {
    step: '02',
    title: 'ТЗ и оценка',
    description:
      'Составляем чёткое техническое задание и фиксированную стоимость без скрытых платежей.',
  },
  {
    step: '03',
    title: 'Разработка',
    description:
      'Работаем итерациями: показываем прогресс, согласовываем UI и функциональность.',
  },
  {
    step: '04',
    title: 'Сдача и защита',
    description:
      'Передаём исходники, пояснительную записку, презентацию и помогаем с защитой.',
  },
];

export const TEAM: TeamMember[] = [
  {
    name: 'Ширкунов Артём Евгеньевич',
    role: 'Fullstack-разработчик · Тимлид',
    description:
      'Fullstack-разработчик с сильной инженерной базой: проектирую архитектуру, пишу чистый поддерживаемый код и довожу проекты до уверенной защиты. Беру сложные темы, раскладываю их на понятные этапы и делаю так, чтобы у комиссии не оставалось слабых мест.',
    highlights: [
      'Web (React / Next.js / Node.js)',
      'Сильный backend и SQL',
      'Архитектура, Git, Docker',
    ],
    contacts: {
      telegram: 'https://t.me/nvarchar',
      vk: 'https://vk.com/shiae',
      email: 'mailto:sven557929@mail.ru',
    },
    avatar: 'А',
    initials: 'АШ',
  },
  {
    name: 'Ушаков Иван Андреевич',
    role: 'Fullstack-разработчик · ML-инженер',
    description:
      'Разработчик с упором на продуктовый результат: делаю проекты, которые выглядят современно, работают стабильно и впечатляют с первого показа. Сильная сторона — собрать сильную техническую часть и подать ее так, чтобы защита проходила уверенно и без стресса.',
    highlights: [
      'Frontend и UX-подача',
      'Mobile и desktop-решения',
      'AI/ML и автоматизация',
    ],
    contacts: {
      telegram: '@LayoutLord',
      vk: 'https://vk.com/1vanish2',
      email: 'mailto:ivan.email@example.com',
    },
    avatar: 'И',
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
    q: 'В какие сроки вы выполняете курсовые и дипломы?',
    a: 'Курсовые — обычно от 5 до 14 дней, дипломы — от 2 до 6 недель. Точный срок согласуем после ТЗ. Берём срочные заказы при наличии свободных слотов.',
  },
  {
    q: 'Какие гарантии вы даёте?',
    a: 'Договариваемся о фиксированной стоимости и сроке заранее. Бесплатно правим работу по замечаниям руководителя в рамках ТЗ и сопровождаем до защиты.',
  },
  {
    q: 'Пройдёт ли работа антиплагиат?',
    a: 'Да. Код пишется с нуля, текст пояснительной записки оформляется под нужную систему: «Антиплагиат.ВУЗ», «Руконтекст», eTXT и аналогичные.',
  },
  {
    q: 'Сколько стоит ваша работа?',
    a: 'Стоимость договорная и обсуждается индивидуально — она зависит от объёма, темы, сроков и требований вуза. Напишите нам во ВКонтакте, и мы пришлём оценку в течение часа.',
  },
  {
    q: 'Как происходит оплата?',
    a: 'Удобным для вас способом: переводом на карту, СБП или иначе. Можно по этапам: предоплата, демо-версия, финальная сдача.',
  },
  {
    q: 'Сохраняете ли вы конфиденциальность?',
    a: 'Да. По запросу подписываем NDA. Не публикуем ваши работы и не продаём один и тот же код двум клиентам.',
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
  { href: '#faq', label: 'FAQ' },
  { href: '#contacts', label: 'Контакты' },
];
