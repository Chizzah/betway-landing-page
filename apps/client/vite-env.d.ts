/// <reference types="vite/client" />

type APIData = {
  headerContent: {
    logo: string;
    login: string;
    signup: string;
  },
  links: string[],
  heroImg: string;
  ctaContent: {
    title: string;
    subTitle: string;
    buttonText: string;
  },
  loginContent: {
    title: string;
    subTitle: string;
    linkText: string;
    formContent: {
      username: string;
      password: string;
      buttonText: string;
      extraText: string;
    }
  },
  signUpContent: {
    title: string;
    subTitle: string;
    linkText: string;
    formContent: {
      email: string;
      password: string;
      firstName: string;
      lastName: string;
      buttonText: string;
      extraText: string;
    }
  }
}

type ActiveLink = "sports" | "live & real" | "casino" | "esports" | "vegas";