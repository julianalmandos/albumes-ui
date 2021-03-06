<template>
  <div
    :class="['album', { album__selected: isNotNotified }]"
    @click="albumNotified"
  >
    <GalleryThumbnail :thumbnails="thumbnails" />
    <div class="album__information">
      <div class="album__description">
        <h3 class="album__title" tabindex="0">{{ album.name }}</h3>
        <p class="album__date" tabindex="0">
          Armado el día
          <time :datetime="parsedDate">{{ humanReadableDate }}</time>
        </p>
      </div>
      <div class="album__actions">
        <div class="album__edition">
          <router-link :to="{ path: `albums/${album.id}` }">
            <CButton>
              <template #left-icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 7.449-11.985 7.449c-7.18 0-12.015-7.449-12.015-7.449s4.446-6.551 12.015-6.551c7.694 0 11.985 6.551 11.985 6.551zm-7 .449c0-2.761-2.238-5-5-5-2.761 0-5 2.239-5 5 0 2.762 2.239 5 5 5 2.762 0 5-2.238 5-5z"
                  />
                </svg>
              </template>
              Visualizar
            </CButton>
          </router-link>
          <router-link :to="{ path: `albums/edit/${album.id}` }">
            <CButton>
              <template #left-icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M7.127 22.564l-7.126 1.436 1.438-7.125 5.688 5.689zm-4.274-7.104l5.688 5.689 15.46-15.46-5.689-5.689-15.459 15.46z"
                  />
                </svg>
              </template>
              Editar
            </CButton>
          </router-link>
          <CButton @click="downloadAlbum(album.id)">
            <template #left-icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M16 11h5l-9 10-9-10h5v-11h8v11zm1 11h-10v2h10v-2z" />
              </svg>
            </template>
            Descargar
          </CButton>
        </div>
        <div class="album__delete">
          <CButton @click="$emit('deleteAlbum', album.id)" variant="red">
            <template #left-icon>
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>Eliminar</title>
                <path
                  d="M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2m-9-14c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6-5h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-12-2h4v-1h-4v1z"
                />
              </svg>
            </template>
          </CButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CButton from "@/components/CButton.vue";
import GalleryThumbnail from "@/components/GalleryThumbnail.vue";

import api from "@/services/index";
import download from "js-file-download";
import { toUnderScore } from "@/utils/formatters";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Album",

  components: {
    CButton,
    GalleryThumbnail,
  },

  props: {
    album: { type: Object, required: true },
  },

  computed: {
    parsedDate() {
      return this.album.created.split("T")[0].split("-").reverse().join("/");
    },
    humanReadableDate() {
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };

      const date = new Date(this.album.created);

      return date.toLocaleDateString(undefined, options);
    },
    youtubeVideo() {
      return this.album.interviews[0].youtube_video.code;
    },
    thumbnails() {
      const { interviews } = this.album;

      return interviews.map((interview) => {
        const { thumbnail } = interview.youtube_video;

        return {
          img: thumbnail,
          alt: `Entrevista '${interview.name}' del album '${this.album.name}'`,
        };
      });
    },
    albumFilename() {
      const { name } = this.album;
      return toUnderScore(name.toLowerCase());
    },
    isNotNotified() {
      return this.album.id === this.getAlbumId && !this.isAlbumNotified;
    },
    ...mapGetters(["getAlbumId", "isAlbumNotified"]),
  },

  methods: {
    async downloadAlbum() {
      const { id } = this.album;
      const filename = `${this.albumFilename}.zip`;

      const file = await api.downloadAlbum(id);
      download(file, filename);
    },
    ...mapMutations(["albumNotified"]),
  },
};
</script>

<style>
.album {
  display: flex;
  background-color: var(--bg-tertiary);
  padding: 2rem;
  gap: 2rem;
  border-radius: 15px;
  margin: 1rem;
  justify-content: center;
}

.album__selected {
  border: 3px solid var(--bg-navbar);
}

.album__information {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  flex: 2;
  padding: 0.5rem;
}

.album__description {
  text-align: left;
}

.album__title {
  color: var(--text-navbar);
  font-size: clamp(1.25rem, 3vw, 1.75rem);
}

.album__date {
  font-family: var(--font-secondary);
  font-size: 1rem;
  margin-top: 0.5rem;
}

.album__actions {
  display: flex;
  margin-top: 2rem;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}

.album__edition {
  display: flex;
}

.album__edition > * {
  margin-right: 0.5rem;
}

.album__delete {
  display: flex;
  justify-self: flex-end;
}

@media (max-width: 1220px) {
  .album {
    flex-wrap: wrap;
    width: 100%;
  }
}
</style>