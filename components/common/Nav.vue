<template>
  <nav class="nav">
    <div class="menu-panel">
      <h1 class="logo">
        <nuxt-link tag="span" :to="`/`" />
      </h1>
      <h2>
        Canet's Blog
      </h2>
      <p>웹프론트엔드 개발자의 블로그</p>
      <ul class="menu">
        <li>
          <nuxt-link :to="`/portfolio`">
            소개
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="`/portfolio`">
            포트폴리오
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="`/portfolio`">
            기술
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="`/portfolio`">
            프롤로그
          </nuxt-link>
        </li>
      </ul>
      <div class="link">
        <a href="https://bitbucket.org/akacanet87/">
          <img src="~/assets/images/icon-link-bitbucket.svg" alt="Icon Bitbucket Link" />
        </a>
        <a href="https://stackoverflow.com/users/8481089/canet-robern">
          <img src="~/assets/images/icon-link-stackoverflow.svg" alt="Icon StackOverflow Link" />
        </a>
        <a href="mailto:akacanet87@gmail.com">
          <img src="~/assets/images/icon-link-email.svg" alt="Icon Email Link" />
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {}
  },
}
</script>
<style
  scoped
  lang="scss">
.nav {
  width: auto;
  height: auto;
  background-color: $color-trans;
  padding-top: 72px;
  padding-left: 84px;

  .menu-panel {
    width: 100%;
    height: 600px;
    max-width: $layout-xl;
    padding: 24px 12px;
    background-color: $color-black-95;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    border-radius: 12px;

    h1.logo {
      width: 196px;
      height: 48px;
      margin-top: 32px;
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        width: 100%;
        height: 100%;
        background-image: url(~/assets/images/logo-canet-white.png);
        cursor: pointer;
      }
    }

    h2 {
      margin-top: 36px;
      font-size: 22px;
      font-weight: bold;
      color: $color-white;
      position: relative;

      &:after {
        content: '';
        width: 36px;
        height: 0.05em;
        position: absolute;
        bottom: -10px;
        left: 0;
        right: 0;
        margin: 0 auto;
        background-color: $color-white;
      }
    }

    p {
      margin-top: 24px;
      font-size: 12px;
      color: $color-white;
    }

    ul.menu {
      width: 100%;
      margin-top: 48px;

      li {
        width: 100%;
        padding: 12px 36px;
        display: flex;
        align-items: center;
        justify-content: center;

        a {
          height: 100%;
          color: $color-white;
          font-size: 16px;
          padding-bottom: 4px;
          text-align: center;
          position: relative;

          &:after {
            content: '';
            width: 100%;
            height: 0.05em;
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: $color-white;
            opacity: 0;
            transition: opacity 0.2s ease-in-out;
          }

          &:hover {

            &:after {
              opacity: 1;
              transition: opacity 0.2s ease-in-out;
            }
          }
        }
      }
    }

    .link {
      width: 100%;
      position: absolute;
      bottom: 24px;
      display: flex;
      align-items: center;
      justify-content: center;

      a {
        width: 40px;
        height: 40px;
        padding: 8px;
        position: relative;
        border-radius: 24px;
        opacity: 0.7;
        background-color: $color-white;
        transition: opacity 0.4s ease-in-out;

        &:hover {
          opacity: 1;
          transition: opacity 0.4s ease-in-out;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      a + a {
        margin-left: 8px;
      }
    }
  }
}
</style>
