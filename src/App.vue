<template>
  <div id="app">
    <app-header></app-header>
    <app-navigation></app-navigation>  
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '@/components/App/AppHeader'
import AppNavigation from '@/components/App/AppNavigation'
import AppFooter from '@/components/App/AppFooter'

export default {
  name: 'app',
  components: {
    AppHeader,
    AppNavigation,
    AppFooter 
  }
}
</script>

<style lang="postcss">

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

// Default Styles

html,
body {
  background-color: var(--color-concrete);
  color: var(--color-mine-shaft);
  font-family: var(--font-default);
  height: 100%;
  margin: 0;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  text-align: left;
}

* {
  box-sizing: border-box;
}

img {
  max-width: 100%;
}

a {
  color: var(--color-boston-blue);

  &:visited,
  &:hover,
  &:focus {
    color: var(--color-dodger-blue);
  }
}

h1, h2, h3, h4, p {
  line-height: 1.5em;
  margin: var(--spacing) 0 var(--spacing);
}

h1 {
  font-size: 36px;
}

h2 {
  font-size: 28px;
  font-weight: normal;
}

h3 {
  font-size: 24px;
  font-weight: normal;
}

h4 {
  font-size: 18px;
  font-weight: bold;
}

h5 {
  font-size: 16px;
  font-weight: bold;
}

p {
  font-size: 16px;
}

button {
  outline: none;
  border: 1px solid grey;
  background: rgba(0, 0, 0, .15);
  color: #222;
}

input {
  border: 1px solid grey;
  color: #222
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 900px;
  margin: 0 auto;
  padding: var(--spacing);
  text-align: left;
}
</style>
