const ru = {
  translation: {
    navBar: {
      brand: 'Hexlet Chat',
      exit: 'Выход',
    },
    channelAdder: {
      channels: 'Каналы',
    },
    channelHeader: {
      messages_zero: '{{count}} сообщений',
      messages_one: '{{count}} сообщение',
      messages_few: '{{count}} сообщения',
      messages_many: '{{count}} сообщений',
    },
    channelList: {
      delete: 'Удалить',
      rename: 'Переименовать',
    },
    messageInput: {
      send: 'Отправить',
    },
    modals: {
      erorrs: {
        min: 'От 3 до 20 символов',
        max: 'От 3 до 20 символов',
        notOneOf: 'Должно быть уникальным',
        required: 'Обязательное поле',
      },
      addChannelModal: {
        title: 'Добавить канал',
        lable: 'Имя Канала',
        cancel: 'Отменить',
        send: 'Отправить',
      },
      removeChannelModal: {
        title: 'Удалить канал',
        body: 'Уверены?',
        cancel: 'Отменить',
        delete: 'Удалить',
      },
      renameChannelModal: {
        title: 'Переименовать канал',
        lable: 'Имя Канала',
        cancel: 'Отменить',
        send: 'Отправить',
      },
    },
    loginPage: {
      title: 'Вход',
      nicknameLable: 'Ваш ник',
      passwordLable: 'Пароль',
      wrongData: 'Неверные имя пользователя или пароль',
      login: 'Войти',
      footerText: 'Нет аккаунта? ',
      footerLink: 'Регистрация',
      fetchError: 'Ошибка соединения',
    },
    signupPage: {
      erorrs: {
        username: {
          min: 'От 3 до 20 символов',
          max: 'От 3 до 20 символов',
          required: 'Обязательное поле',
        },
        password: {
          min: 'Не менее 6 символов',
          required: 'Обязательное поле',
        },
        confirmPassword: 'Пароли должны совпадать',
      },
      title: 'Регистрация',
      usernameLable: 'Имя пользователя',
      passwordLable: 'Пароль',
      confirmPasswordLable: 'Подтвердите пароль',
      registration: 'Зарегистрироваться',
    },
    notFoundPage: {
      h1: 'Страница не найдена',
      span: 'Но вы можете перейти ',
      link: 'на главную страницу',
    },
    toast: {
      addChannel: {
        succes: 'Канал создан',
      },
      renameChannel: {
        succes: 'Канал переименован',
      },
      removeChannel: {
        succes: 'Канал удалён',
      },
    }
  },
};

export default ru;