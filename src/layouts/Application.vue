<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title class="text-center" >
          <router-link
            to="/"
            class="Toolbar" >
            Quasar Blog
          </router-link>
        </q-toolbar-title>
        <div class="q-gutter-sm">
          <q-chip color="white" clickable >
            <q-avatar color="red" size="28px">
              J
            </q-avatar>
            John
            <q-menu
              transition-show="flip-right"
              transition-hide="flip-left"
            >
              <q-list style="min-width: 100px">
                <q-item clickable>
                  <q-item-section>Having fun</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Crazy for transitions</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable>
                  <q-item-section>Mind blown</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-chip>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      overlay
      content-class="bg-grey-2" >
      <q-list>
        <q-item
          clickable
          to="/minha-conta"
          exact >
          <q-item-section avatar >
            <q-icon name="person" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Minha conta</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator />

        <q-item
          clickable
          to="/sobre"
          exact >
          <q-item-section avatar >
            <q-icon name="people" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Sobre nós</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator />

        <q-item-label header>Cateorias</q-item-label>
        <q-item
          clickable
          to="/tecnologia"
          exact >
          <q-item-section avatar >
            <q-icon name="memory" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Tecnologia</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          to="/economia"
          exact >
          <q-item-section avatar >
            <q-icon name="attach_money" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Economia</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          to="/educacao"
          exact >
          <q-item-section avatar >
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Educação</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator />

        <q-item
          clickable
          to="/contato"
          exact >
          <q-item-section avatar >
            <q-icon name="place" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Contato</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style lang="scss" scoped>
  .Toolbar {
    color: white;
    text-decoration: none;
  }
</style>
