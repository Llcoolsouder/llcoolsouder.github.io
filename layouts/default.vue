<template>
    <slot />
    <LsFooter 
      :icons="[
      {
        imgSrc: 'images/github-logo.svg',
        altText: 'GitHub profile link',
        href: 'https://github.com/Llcoolsouder' 
      },
      {
        imgSrc: 'images/stackoverflow-logo.svg',
        altText: 'Stack Overflow profile link',
        href: 'https://stackoverflow.com/users/6190865/llsv2-0' 
      },
      {
        imgSrc: 'images/linkedin-logo.svg',
        altText: 'Linkedin profile link',
        href: 'https://www.linkedin.com/in/lonnie-souder-ii/'
      }]" />
</template>