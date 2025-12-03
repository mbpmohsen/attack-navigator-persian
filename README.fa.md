# ATT&CK® Navigator

ناوبر ATT&CK برای مرور و حاشیه‌نویسی ساده روی ماتریس‌های [ATT&CK](https://attack.mitre.org) طراحی شده است؛ کاری که خیلی‌ها الان با ابزارهایی مثل Excel انجام می‌دهند. ما این ابزار را ساده و عمومی طراحی کرده‌ایم – می‌توانید از Navigator برای نمایش پوشش دفاعی‌تان، برنامه‌ریزی تیم قرمز/آبی، نمایش فراوانی تکنیک‌های کشف‌شده یا هر کاربرد دیگری که مدنظرتان است استفاده کنید. خود Navigator اهمیتی نمی‌دهد چه چیزی را نمایش می‌دهید – فقط اجازه می‌دهد روی سلول‌های ماتریس عملیات انجام دهید (رنگ‌دهی، اضافه کردن توضیح، اختصاص دادن مقدار عددی و غیره). فکر می‌کردیم داشتن یک ابزار ساده که همه بتوانند برای تصویرسازی ماتریس از آن استفاده کنند، کار با ATT&CK را راحت‌تر می‌کند. :contentReference[oaicite:0]{index=0}

قابلیت اصلی Navigator این است که کاربران می‌توانند **لایه‌ها** را تعریف کنند – نماهای سفارشی از دانش ATT&CK؛ برای مثال نمایش فقط تکنیک‌های یک پلتفرم خاص یا برجسته کردن تکنیک‌هایی که یک مهاجم مشخص از آن‌ها استفاده کرده است. لایه‌ها می‌توانند به صورت تعاملی داخل خود Navigator ساخته شوند یا به صورت برنامه‌نویسی تولید شده و سپس داخل Navigator نمایش داده شوند. :contentReference[oaicite:1]{index=1}

## نحوه استفاده (Usage)

ناوبر ATT&CK به صورت آنلاین از طریق GitHub Pages میزبانی می‌شود.  
[نسخه‌ی زنده‌ی فعلی Navigator را می‌توانید اینجا ببینید](https://mitre-attack.github.io/attack-navigator).  
برای مطالعه‌ی بیشتر درباره نحوه استفاده از خود برنامه، به سند [USAGE](/USAGE.md) مراجعه کنید (این محتوا در صفحه راهنمای داخل برنامه نیز آینه شده است).

نسخه 4.0 به بعد Navigator، تمام دامنه‌های ATT&CK را در یک نمونه واحد از برنامه پشتیبانی می‌کند و دیگر نیازی به اجرا کردن نمونه‌های جداگانه برای هر دامنه نیست. علاوه بر این، نسخه‌های قدیمی‌تر ATT&CK نیز می‌توانند در برنامه بارگذاری شوند. Navigator از نسخه‌های 4 به بعد ATT&CK پشتیبانی می‌کند؛ نسخه‌های قدیمی‌تر به دلیل قدیمی بودن مدل داده‌ای، در برنامه کار نمی‌کنند.

نسخه‌های قبلی Navigator نیز از طریق GitHub Pages برای کاربرانی که تجربه‌ی «کلاسیک‌تر» را ترجیح می‌دهند در دسترس است:

| نسخه ATT&CK | نسخه Navigator | دامنه‌ها |  |
|:------------|:---------------|:--------|:-|
| [ATT&CK v7.2](https://attack.mitre.org/resources/versions/) | [Navigator v3.1](https://github.com/mitre-attack/attack-navigator/releases/tag/v3.1) | [Enterprise](https://mitre-attack.github.io/attack-navigator/v3/enterprise/) | [Mobile](https://mitre-attack.github.io/attack-navigator/v3/mobile/) |
| [ATT&CK v6.3](https://attack.mitre.org/resources/versions/) | [Navigator v2.3.2](https://github.com/mitre-attack/attack-navigator/releases/tag/v2.3.2) | [Enterprise](https://mitre-attack.github.io/attack-navigator/v2/enterprise/) | [Mobile](https://mitre-attack.github.io/attack-navigator/v2/mobile/) |

لطفاً برای اطلاع از نحوه نصب و راه‌اندازی Navigator روی سیستم خود، بخش [Install and Run](#install-and-run) را ببینید.

**نکته مهم:** فایل‌های لایه‌ای که هنگام استفاده از نسخه‌ی Navigator میزبانی‌شده روی GitHub Pages آپلود می‌کنید، **روی سرور ذخیره نمی‌شوند**؛ چون Navigator کاملاً یک برنامه‌ی سمت کاربر (client-side) است. با این حال، اگر فایل‌های لایه شما حاوی اطلاعات حساس هستند، همچنان توصیه می‌کنیم Navigator را روی زیرساخت خودتان نصب و اجرا کنید.

برای گزارش باگ‌ها یا مشکلات دیگر، از [GitHub Issue Tracker](https://github.com/mitre-attack/attack-navigator/issues) ما استفاده کنید. همچنین اگر Navigator را به شکل جالبی گسترش داده‌اید، ما از Pull Request‌ها برای اشتراک این قابلیت‌ها با جامعه استقبال می‌کنیم!

*برای اطلاعات بیشتر درباره مشارکت در توسعه Navigator، به [CONTRIBUTING.md](https://github.com/mitre-attack/attack-navigator/blob/master/CONTRIBUTING.md) مراجعه کنید.*

## پیش‌نیازها (Requirements)

* [Node.js v18](https://nodejs.org)
* [AngularCLI v17](https://cli.angular.io)

## مرورگرهای پشتیبانی‌شده

* Chrome
* Firefox
* Internet Explorer 11<sup>[1]</sup>
* Edge
* Opera
* Safari<sup>[2]</sup>

**[1]** در Internet Explorer یک مشکل شناخته‌شده برای قابلیت خروجی SVG وجود دارد. به دلیل [نبود یک قابلیت در SVGElementها](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/children) در این مرورگر، متن در SVGهای خروجی به‌درستی به صورت عمودی در مرکز قرار نمی‌گیرد. برای بهترین نتیجه توصیه می‌کنیم از یک مرورگر مدرن‌تر استفاده کنید.

**[2]** Navigator فقط از نسخه‌های 14 به بعد Safari پشتیبانی می‌کند، چون نسخه‌های قدیمی‌تر ممکن است هنگام انتخاب تب لایه دچار هنگ غیرقابل‌رفع شوند. کاربرانی که از نسخه‌های پشتیبانی‌نشده استفاده می‌کنند هنگام باز کردن برنامه در مورد این احتمال هشدار دریافت خواهند کرد.

## نصب و اجرا (Install and Run)

### بار اول

1. به دایرکتوری **nav-app** بروید.
2. فرمان `npm install` را اجرا کنید.

### اجرای برنامه روی سیستم محلی

1. داخل دایرکتوری **nav-app**، فرمان `ng serve` را اجرا کنید.
2. در مرورگر به آدرس `localhost:4200` بروید.

### کامپایل برای استفاده در جای دیگر

1. داخل دایرکتوری **nav-app**، فرمان `ng build` را اجرا کنید.
2. فایل‌ها را از دایرکتوری `nav-app/dist/` کپی کنید.

_نکته: فرمان `ng build --configuration production` در حال حاضر بدون فلگ‌های اضافه روی Navigator به‌درستی کار نمی‌کند. برای ساخت نسخه production از این دستور استفاده کنید:  
`ng build --configuration production --aot=false --build-optimizer=false`._

### اجرای Navigator به صورت آفلاین

1. مطابق دستورالعمل‌های بالا Navigator را نصب کنید.
2. برای تنظیم Navigator به‌طوری‌که بدون اتصال به اینترنت ماتریس را پر کند، مراحل بخش [Loading content from local files](#loading-content-from-local-files) را دنبال کنید. آخرین فایل‌های داده ATT&CK را می‌توانید از این لینک‌ها دریافت کنید:
    - [Enterprise ATT&CK](https://github.com/mitre-attack/attack-stix-data/raw/master/enterprise-attack/enterprise-attack.json)
    - [Mobile ATT&CK](https://github.com/mitre-attack/attack-stix-data/raw/master/mobile-attack/mobile-attack.json)
    - [ICS ATT&CK](https://github.com/mitre-attack/attack-stix-data/raw/master/ics-attack/ics-attack.json)

## مستندات (Documentation)

هنگام مشاهده Navigator در مرورگر، روی آیکن **?** در گوشه بالا-راست کلیک کنید تا مستندات داخل‌برنامه‌ای نمایش داده شود.

## پوشه Layers

پوشه **layers** شامل مشخصات فرمت لایه، مثال‌های لایه و یک اسکریپت برای تولید برنامه‌نویسی لایه‌ها است. با اضافه شدن اسکریپت‌های جدید، محتوای این مخزن هم بیشتر خواهد شد. همچنین اگر می‌خواهید قابلیت‌های جدیدی را که اضافه کرده‌اید با دیگران به اشتراک بگذارید، می‌توانید Pull Request ارسال کنید.

اطلاعات بیشتر در مورد اینکه لایه‌ها چگونه استفاده و توسعه داده می‌شوند را می‌توانید در مستندات Navigator (که با کلیک روی **?** در داخل برنامه در دسترس است) و در فایل README داخل پوشه **layers** پیدا کنید.

## افزودن گزینه‌های سفارشی به منوی راست‌کلیک (Context Menu)

برای ساخت گزینه‌های سفارشی در منوی راست‌کلیک **ATT&CK® Navigator** با استفاده از داده‌های داخل Navigator، باید شیءهایی به آرایه `custom_context_menu_options` در فایل `nav-app/src/assets/config.json` اضافه کنید. هر شیء باید یک ویژگی **label** داشته باشد (متن قابل‌نمایش در منوی راست‌کلیک) و یک ویژگی **url** که کاربر با کلیک روی گزینه به آن هدایت می‌شود.

برای استفاده از داده‌های تکنیکِ راست‌کلیک‌شده در آدرس URL، می‌توانید پارامترهایی را که داخل دو آکولاد دوبل قرار گرفته‌اند به رشته URL اضافه کنید. به عنوان مثال: استفاده از  
`http://www.someurl.com/{{technique_attackID}}}`  
به عنوان URL در گزینه سفارشی باعث می‌شود اگر تکنیک انتخاب‌شده شناسه ATT&CK برابر `T1098` داشته باشد، کاربر به آدرس  
`http://www.someurl.com/T1098`  
هدایت شود.

جای‌گذاری‌های زیر در URL پردازش خواهند شد:

* `{{technique_attackID}}` با شناسه ATT&CK تکنیک جایگزین می‌شود، مانند `T1234`
* `{{technique_stixID}}` با شناسه STIX تکنیک جایگزین می‌شود، مانند `attack-pattern--12345678-1234-1234-1234-123456789123`
* `{{technique_name}}` با نام تکنیک در حروف کوچک و با جایگزینی فاصله‌ها با خط تیره جایگزین می‌شود، مانند `example-technique-name`
* `{{tactic_attackID}}` با شناسه ATT&CK تاکتیک جایگزین می‌شود، مانند `TA1234`
* `{{tactic_stixID}}` با شناسه STIX تاکتیک جایگزین می‌شود، مانند `x-mitre-tactic--12345678-1234-1234-1234-123456789123`
* `{{tactic_name}}` با نام تاکتیک در حروف کوچک و با جایگزینی فاصله‌ها با خط تیره جایگزین می‌شود، مانند `example-tactic` (این مقدار معادل ویژگی `x_mitre_shortname` تاکتیک نیز هست).

به صورت اختیاری، می‌توانید برای یک گزینه سفارشی فیلدی به نام `subtechnique_url` هم تعریف کنید. این فیلد زمانی استفاده می‌شود که گزینه منو روی یک زیرفناوری (sub-technique) به‌کار رود؛ در این حالت این URL استفاده می‌شود، و در موارد تکنیک عادی، همان `url` استفاده می‌شود. اگر `subtechnique_url` تعریف نشود، جای‌گذاری‌های `technique_` تعریف‌شده در بالا به خود زیرفناوری اشاره خواهند کرد.

جای‌گذاری‌های زیر برای زیرفناوری‌ها پشتیبانی می‌شوند:

* `{{parent_technique_attackID}}` با شناسه ATT&CK تکنیک والد زیرفناوری جایگزین می‌شود، مانند `T1234`
* `{{parent_technique_stixID}}` با شناسه STIX تکنیک والد جایگزین می‌شود، مانند `attack-pattern--12345678-1234-1234-1234-123456789123`
* `{{parent_technique_name}}` با نام تکنیک والد در حروف کوچک و با جایگزینی فاصله‌ها با خط تیره جایگزین می‌شود، مانند `example-technique-name`
* `{{subtechnique_attackID}}` با شناسه ATT&CK زیرفناوری جایگزین می‌شود، مانند `T1234.001`
* `{{subtechnique_attackID_suffix}}` با بخش پس از نقطه در شناسه ATT&CK زیرفناوری جایگزین می‌شود، مانند `001`
* `{{subtechnique_stixID}}` با شناسه STIX زیرفناوری جایگزین می‌شود، مانند `attack-pattern--98765432-9876-9876-9876-987654321987`
* `{{subtechnique_name}}` با نام زیرفناوری در حروف کوچک و با جایگزینی فاصله‌ها با خط تیره جایگزین می‌شود، مانند `example-subtechnique-name`
* `{{tactic_attackID}}` با شناسه ATT&CK تاکتیک جایگزین می‌شود، مانند `TA1234`
* `{{tactic_stixID}}` با شناسه STIX تاکتیک جایگزین می‌شود، مانند `x-mitre-tactic--12345678-1234-1234-1234-123456789123`
* `{{tactic_name}}` با نام تاکتیک در حروف کوچک و با جایگزینی فاصله‌ها با خط تیره جایگزین می‌شود، مانند `example-tactic` (این مقدار نیز معادل ویژگی `x_mitre_shortname` تاکتیک است).

نمونه شیءهای منوی راست‌کلیک سفارشی:

```json
{
    "label": "view technique on ATT&CK website",
    "url": "https://attack.mitre.org/techniques/{{technique_attackID}}",
    "subtechnique_url": "https://attack.mitre.org/techniques/{{parent_technique_attackID}}/{{subtechnique_attackID_suffix}}"
}
