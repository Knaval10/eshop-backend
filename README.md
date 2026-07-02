### Folder structure

project-root/
│
├── src/
│   ├── config/
│   │   ├── db.config.js
│   │   ├── env.config.js
│   │   ├── logger.config.js
│   │   └── index.js
│   │
│   ├── modules/              # Feature-based modules (recommended)
│   │   ├── user/
│   │   │   ├── user.controller.js
│   │   │   ├── user.service.js
│   │   │   ├── user.model.js
│   │   │   ├── user.routes.js
│   │   │   ├── user.validation.js
│   │   │   └── user.repository.js
│   │   │
│   │   ├── auth/
│   │   │   ├── auth.controller.js
│   │   │   ├── auth.service.js
│   │   │   ├── auth.routes.js
│   │   │   ├── auth.middleware.js
│   │   │   └── auth.utils.js
│   │
│   ├── middlewares/
│   │   ├── error.middleware.js
│   │   ├── auth.middleware.js
│   │   ├── rateLimit.middleware.js
│   │   └── validate.middleware.js
│   │
│   ├── routes/
│   │   └── index.js          # Combines all module routes
│   │
│   ├── services/
│   │   ├── email.service.js
│   │   ├── redis.service.js
│   │   └── externalApi.service.js
│   │
│   ├── utils/
│   │   ├── appError.js
│   │   ├── asyncHandler.js
│   │   ├── responseHandler.js
│   │   └── helpers.js
│   │
│   ├── jobs/                # Background jobs / cron
│   │   ├── email.job.js
│   │   └── cleanup.job.js
│   │
│   ├── jobs/                # Background jobs / cron
│   │   ├── email.job.js
│   │   └── cleanup.job.js
│   │
│   ├── app.js               # Express app setup
│   └── server.js            # Entry point
│
├── tests/
│   ├── unit/
│   ├── integration/
│   └── setup.js
│
├── scripts/
│   ├── seed.js
│   ├── migrate.js
│   └── deploy.sh
│
├── logs/
│
├── uploads/
│
├── .env
├── .gitignore
├── package.json
├── README.md
└── ecosystem.config.js      # PM2 config (optional)