<template>
  <div class="home">
    <h2 class="home__title">¡Bienvenido a Álbumes!</h2>
    <h3 class="home__subtitle">Creá, elegí e imprimí tus propios álbumes para concientizar a la población sobre desastres naturales.</h3>
    <ol class="home__steps">
      <li class="home__step">
        <span>1</span>
        <p>Crea un álbum interactivo con fotos y códigos QR accesibles.</p>
      </li>
      <li class="home__step">
        <span>2</span>
        <p>Elegí entre las más de 10 entrevistas a sobrevivientes de desastres naturales.</p>
      </li>
      <li class="home__step">
        <span>3</span>
        <p>Imprimí tu álbum de fotos junto a los códigos QR relacionados.</p>
      </li>
    </ol>
    <div class="home__login">
      <h4>¡Comenza ya!</h4>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 100vh;

  color: var(--text-secondary);
  font-family: var(--font-secondary);
  padding-top: 3.5rem;
}

.home__title {
  color: var(--text-primary);
  font-family: var(--font-primary);
  font-size: 4rem;
}

.home__subtitle {
  width: min(60ch, 85%);
  margin-top: 2rem;
  font-size: 1.75rem;
}

.home__steps {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;

  gap: 3rem;
  margin-top: 4rem;
}

.home__step {
  width: min(300px, 80%);
}

.home__step > span {
  display: block;
  font-size: 9.25rem;
  font-family: var(--font-quaternary);
}

.home__step > p {
  font-size: 1.5rem;
}

.home__login {
  margin-top: 4rem;
  padding: 3rem;
  width: 100%;
  background-color: var(--bg-secondary);
  flex-grow: 1;
}

.home__login > h4 {
  font-size: 3rem;
}

.home__step > span,
.home__login > h4 {
  background: var(--grad-pink-inv);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
