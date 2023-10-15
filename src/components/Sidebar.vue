<template>
    <sidebar-menu v-model:collapsed="collapsed" :menu="menu" :theme="selectedTheme" :show-one-child="true"
        @update:collapsed="onToggleCollapse" @item-click="onItemClick" />

    <div v-if="isOnMobile && !collapsed" class="sidebar-overlay" @click="collapsed = true" />
    <div id="demo" :class="[{ collapsed: collapsed }, { onmobile: isOnMobile }]">
        <div class="demo">
            <div class="container">

                <slot></slot>
            </div>
        </div>
    </div>
</template>
  
<script>
import { h } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const separator = h('hr', {
    style: {
        borderColor: 'rgba(0, 0, 0, 0.1)',
        margin: '20px',
    },
})

const faIcon = (props) => {
    return {
        element: h('div', [h(FontAwesomeIcon, { size: 'lg', ...props })]),
    }
}

export default {
    name: 'App',
    data() {
        return {
            menu: [
                {
                    header: 'CWC-HRMIS',
                    hiddenOnCollapse: true,
                },
                {
                    href: '/hrmis/dashboard',
                    title: 'Dashboard',
                    icon: faIcon({ icon: 'fa-solid fa-cog' }),

                },
                {
                    href: '',
                    title: 'Recruitment',
                    icon: faIcon({ icon: 'fa-solid fa-list-ul' }),
                    child: [
                        {
                            href: '/hrmis/recruitment/publishing',
                            title: 'Recruitment Publishing',
                            icon: faIcon({ icon: 'fa-solid fa-file-alt', size: 'sm' }),
                        },
                        {
                            href: '/hrmis/recruitment/applicants',
                            title: 'Applicants',
                            icon: faIcon({ icon: 'fa-solid fa-file-alt', size: 'sm' }),
                        },
                    ],
                },
                {
                    href: '',
                    title: 'Personnel',
                    icon: faIcon({ icon: 'fa-solid fa-list-ul' }),
                    child: [
                        {
                            href: '/hrmis/recruitment/publishing',
                            title: 'Recruitment Publishing',
                            icon: faIcon({ icon: 'fa-solid fa-file-alt', size: 'sm' }),
                        },
                        {
                            href: '/hrmis/recruitment/applicants',
                            title: 'Applicants',
                            icon: faIcon({ icon: 'fa-solid fa-file-alt', size: 'sm' }),
                        },
                    ],
                },
                {
                    href: '/hrmis/recruitment',
                    title: 'Reports',
                    icon: faIcon({ icon: 'fa-solid fa-list-ul' }),
                    child: [
                        {
                            href: '/hrmis/recruitment/publishing',
                            title: 'Recruitment Publishing',
                            icon: faIcon({ icon: 'fa-solid fa-file-alt', size: 'sm' }),
                        },
                        {
                            href: '/hrmis/recruitment/applicants',
                            title: 'Applicants',
                            icon: faIcon({ icon: 'fa-solid fa-file-alt', size: 'sm' }),
                        },
                    ],
                },
                {
                    href: '/hrmis',
                    title: 'Attendance',
                    icon: faIcon({ icon: 'fa-solid fa-download' }),
                },
                {
                    title: 'Multiple Level',
                    icon: faIcon({ icon: 'fa-solid fa-list-alt' }),
                    child: [
                        {
                            title: 'page',
                        },
                        {
                            title: 'Level 2 ',
                            child: [
                                {
                                    title: 'page',
                                },
                                {
                                    title: 'Page',
                                },
                            ],
                        },
                        {
                            title: 'Page',
                        },
                        {
                            title: 'Another Level 2',
                            child: [
                                {
                                    title: 'Level 3',
                                    child: [
                                        {
                                            title: 'Page',
                                        },
                                        {
                                            title: 'Page',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
            collapsed: false,
            themes: [
                {
                    name: 'Default theme',
                    input: '',
                },
                {
                    name: 'White theme',
                    input: 'white-theme',
                },
            ],
            selectedTheme: 'white-theme',
            isOnMobile: false,
        }
    },
    mounted() {
        this.onResize()
        window.addEventListener('resize', this.onResize)
    },
    methods: {
        onToggleCollapse(collapsed) {
            console.log('onToggleCollapse')
        },
        onItemClick(event, item) {
            console.log('onItemClick')
        },
        onResize() {
            if (window.innerWidth <= 767) {
                this.isOnMobile = true
                this.collapsed = true
            } else {
                this.isOnMobile = false
                this.collapsed = false
            }
        },
    },
}
</script>
  
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600');

body,
html {
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 28px;
    background-color: #f2f4f7;
    color: #000000;
}

#demo {
    padding-left: 265px;
    transition: 0.5s ease;
}

#demo.collapsed {
    padding-left: 65px;

}

#demo.onmobile {
    padding-left: 65px;
}

.sidebar-overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #000;
    opacity: 0.5;
    z-index: 900;
}

.demo {
    padding: 20px;
}

.container {
    max-width: 900px;
}
</style>
  