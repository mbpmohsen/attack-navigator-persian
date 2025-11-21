import {
    Component,
    ViewChild,
    HostListener,
    OnInit,
    Renderer2,
    Inject,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

import { TabsComponent } from './tabs/tabs.component';
import { ConfigService } from './services/config.service';
import * as globals from './utils/globals';
import { IconsService } from './services/icons.service';
import { deleteCookie, getCookie, hasCookie, setCookie } from './utils/cookies';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    @ViewChild(TabsComponent) tabsComponent;

    navVersion: string = globals.navVersion;
    public user_theme: string;
    title = 'ATT&CK® Navigator';

    // for template if you want to highlight active language buttons
    currentLang: 'en' | 'fa' = 'en';

    @HostListener('window:beforeunload', ['$event'])
    promptNavAway($event: BeforeUnloadEvent) {
        if (!this.configService.getFeature('leave_site_dialog')) { return; }
        // this text only shows in the data, not visible to user as far as I can tell
        // however, if it's not included the window doesn't open.
        $event.returnValue =
            'Are you sure you want to navigate away? Your data may be lost!';
    }

    constructor(
        public configService: ConfigService,
        private iconsService: IconsService,
        public titleService: Title,
        private translate: TranslateService,
        private renderer: Renderer2,
        @Inject(DOCUMENT) private document: Document,
    ) {
        // simple includes polyfill (kept from your original code)
        // eslint-disable-next-line no-extend-native
        Array.prototype.includes = function (value): boolean {
            for (let i = 0; i < this.length; i++) {
                if (this[i] === value) { return true; }
            }
            return false;
        };

        // theme init (unchanged)
        if (hasCookie('is_user_theme_dark') && getCookie('is_user_theme_dark') === 'true') {
            this.user_theme = 'theme-override-dark';
        } else if (getCookie('is_user_theme_dark') === 'false') {
            this.user_theme = 'theme-override-light';
        } else {
            this.user_theme = 'theme-use-system';
        }

        // --- language init ---
        this.translate.setDefaultLang('en');

        let initialLang: 'en' | 'fa' = 'en';

        try {
            if (typeof window !== 'undefined') {
                const savedLang = localStorage.getItem('navigator-lang') as 'en' | 'fa' | null;
                if (savedLang === 'fa' || savedLang === 'en') {
                    initialLang = savedLang;
                } else {
                    const browserLang = this.translate.getBrowserLang();
                    if (browserLang === 'fa') {
                        initialLang = 'fa';
                    }
                }
            }
        } catch {
            // ignore localStorage errors
        }

        this.setLang(initialLang, false);
    }

    ngOnInit() {
        this.iconsService.registerIcons();
        this.titleService.setTitle(this.title);
    }

    themeChangeHandler(theme: string) {
        if (theme === 'system') {
            if (hasCookie('is_user_theme_dark')) { deleteCookie('is_user_theme_dark'); }
            this.user_theme = 'theme-use-system';
        } else {
            this.user_theme = theme === 'dark' ? 'theme-override-dark' : 'theme-override-light';
            setCookie('is_user_theme_dark', theme === 'dark' ? 'true' : 'false', 180);
        }
    }

    /**
     * Change UI language (EN/FA) and update <html dir/lang>.
     * Call this from template: (click)="setLang('fa')" or (click)="setLang('en')"
     */
    setLang(lang: 'en' | 'fa', persist: boolean = true): void {
        this.currentLang = lang;
        this.translate.use(lang);

        if (persist && typeof window !== 'undefined') {
            try {
                localStorage.setItem('navigator-lang', lang);
            } catch {
                // ignore localStorage errors
            }
        }

        const htmlElement = this.document.documentElement;
        this.renderer.setAttribute(htmlElement, 'lang', lang);
        this.renderer.setAttribute(htmlElement, 'dir', lang === 'fa' ? 'rtl' : 'ltr');

        if (lang === 'fa') {
            this.renderer.addClass(htmlElement, 'lang-fa');
            this.renderer.removeClass(htmlElement, 'lang-en');
        } else {
            this.renderer.addClass(htmlElement, 'lang-en');
            this.renderer.removeClass(htmlElement, 'lang-fa');
        }
    }
}
