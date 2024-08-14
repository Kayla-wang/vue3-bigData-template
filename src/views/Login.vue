<!--
 描述: 登录
 作者: kayla wang
 日期: 2024-08-14
-->
<script setup lang="ts">
</script>

<template>
  <vue-particles
      id="tsparticles"
      :options="{
      background: {
          color: {
              value: 'rgba(26, 33, 69, 1)'
          }
      },
      fpsLimit: 120,
      interactivity: {
          events: {
              onClick: {
                  enable: true,
                  mode: 'push'
              },
              onHover: {
                  enable: true,
                  mode: 'repulse'
              },
          },
          modes: {
              bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40
              },
              push: {
                  quantity: 4
              },
              repulse: {
                  distance: 200,
                  duration: 0.4
              }
          }
      },
      particles: {
          color: {
              value: 'rgba(173, 174, 179, 1)'
          },
          links: {
              color: 'rgba(173, 174, 179, 1)',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1
          },
          move: {
              direction: 'none',
              enable: true,
              outModes: 'bounce',
              random: false,
              speed: 6,
              straight: false
          },
          number: {
              density: {
                  enable: true,
              },
              value: 80
          },
          opacity: {
              value: 0.5
          },
          shape: {
              type: 'circle'
          },
          size: {
              value: { min: 1, max: 5 }
          }
      },
      detectRetina: true
  }"
  />
</template>

<style scoped>
</style>
