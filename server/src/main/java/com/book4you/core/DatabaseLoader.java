package com.book4you.core;

import com.book4you.book.Book;
import com.book4you.book.BookRepository;
import com.book4you.category.Category;
import com.book4you.category.CategoryRepository;
import com.book4you.user.User;
import com.book4you.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.FileInputStream;

import static org.springframework.util.ResourceUtils.getFile;

@Component
public class DatabaseLoader implements ApplicationRunner {
    private final BookRepository books;
    private final CategoryRepository categories;
    private final UserRepository users;

    @Autowired
    public DatabaseLoader(BookRepository books, CategoryRepository category, UserRepository users) {
        this.books = books;
        this.categories = category;
        this.users = users;
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        Category[] dummyCategories = {
                new Category("הפופולאריים"),
                new Category("מתח"),
                new Category("הדרכה ופנאי"),
                new Category("ספרי ביכורים"),
                new Category("מדע ופנטזיה"),
                new Category("שירה"),
                new Category("נוער"),
                new Category("רומן ושירה"),
                new Category("יהדות"),
                new Category("אימה"),
                new Category("ילדים"),
                new Category("לימוד")
        };

        Book[][] dummyBooks = {
                {
                        new Book("המלאך הנופל",
                                "דניאל סילבה",
                                "גבריאל אלון חוזר. רסטורטור, מתנקש, מרגל. הוא מתחיל את המסע שלו ברומא, כשגופה של אישה צעירה מתגלית בוותיקן. מות האישה עלול לפתוח קופת שרצים עולמית ולהוביל למאבק קדומים שסופו אפוקליפסה. הדרכים מובילות מרומא לירושלים ולהר הבית, ונדמה כי הפעם גבריאל אלון ייאלץ להילחם באויבים מבית ומחוץ, בשדי העבר ובאסלאם הקיצוני. אם עדיין לא נסחפתם לעולמם של דניאל סילבה וגבריאל אלון, זה המותחן להתחיל בו. אם אתם מכירים ואוהבים את הסופר והגיבור הקבוע שלו, תמצאו פה את כל מה שגרם לכם לחבב אותו מלכתחילה. דניאל סילבה הוא אורח קבוע בראש רשימת רבי־המכר של \"ניו יורק טיימס\" וספריו זכו להצלחה בעולם ובישראל. זה שנים שסדרת גבריאל אלון, שזהו ה־12 במספר בה, מציבה את גיבורה בחזית המאבק בטרור האסלאמי והגלובלי.",
                                76,
                                Image2ByteArray("images/FallingAngel.jpg")),
                        new Book("מיכל הקטנה והמפלצות - תעלומת הזרע הנוצץ",
                                "יעל קנה",
                                "מיכל הקטנה והחברים שלה, פוגו וטריק, זורעים באדמה זרע קטן וקסום. מיכל משקה אותו כל יום, טריק שרה לו שירים, ופוגו רק שואל בחשש: מה יצמח ממנו? שיח עטלפים? ואולי עץ עכבישים? ומה באמת צומח בסופו של דבר מהזרע המסתורי? האם היה כדאי להתעקש ולחכות?",
                                92,
                                Image2ByteArray("images/MichaLittleMonstersMysteryGlitteringSeed.jpg")),
                        new Book("אפיה מהירה",
                                "ארז קומרובסקי",
                                "ספר האפייה המהירה של ארז קומרובסקי הוא ספר בלתי רגיל. כלל אחד, גאוני ופשוט, מנחה אותו: זמן הכנת המאפים אינו עולה על זמן חימום התנור. ההוראות: פשוטות. השמרים: אאוט. הטעם: פנטסטי. חומרי הגלם: מעולים. החיסכון היחיד: בזמן. הרבה זמן! אתם מוזמנים להצטרף למסע בין עוגות נפלאות ולחמים עשירים, לחמניות מגרות ומאפי בוקר משגעים. ארז קומרובסקי הוא מבכירי השפים בישראל. כשפתח את המאפייה שלו בהרצליה, בשנת 1996, שינה את פני הלחם בישראל. כיום הוא מתגורר במתת, שם הקים בית ספר לבישול גלילי.",
                                94,
                                Image2ByteArray("images/FastBaking.jpg")),
                        new Book("איך לא למות",
                                "דר מייקל גרגר וג'ין סטון",
                                "האמת היא שהרפואה מצטיינת בטיפול באירועי חירום אקוטיים, אך חסרת אונים בטיפול וריפוי אמיתי של מחלות כרוניות. כתוצאה מכך, 15 גורמי התמותה המובילים בארה\"ב גובים כל שנה את חייהם של 1.6 מיליון איש ולרפואה הממסדית אין פיתרון. בסגנונו הקליל והמרתק ד\"ר גרגר מייחד פרק שלם לכל אחד מגורמי התחלואה והתמותה המובילים בעולם, כאשר כל פרק מציג את ממצאי המחקר העדכניים על הקשר בין התזונה המערבית ובין התפתחות המחלות ומתווה תוכנית יעילה למניעה ולטיפול. הספר מנפץ מיתוסים רבים ומציג עובדות חדשות ומסקרנות. לדוגמה: -סובלים מיתר לחץ דם? תה היביסקוס עשוי לעזור לכם אפילו יותר מתרופות מובילות להורדת לחץ דם וללא תופעות לוואי. -חולות בסרטן השד? תשמחו בוודאי לשמוע שצריכת סויה אינה מזיקה כלל ואפילו קשורה להישרדות ארוכה יותר. -סובלים ממחלת לב? כדאי לכם לעבור לתזונה המבוססת על מזון צמחי מלא, שהוכחה כיעילה לא רק במניעת מחלת לב, אלא גם בריפוייה. -האם יש לכם סיפור משפחתי של סרטן בלוטת הערמונית? התרחקו מחלב ומוצריו ואכלו זרעי פשתה בכל הזדמנות.",
                                89,
                                Image2ByteArray("images/HowNotToDie.jpg")),
                        new Book("מצפן להורות ראויה מדריך לשיח הבין-דורי",
                                "ניצה ירום",
                                "זו מטלה אחראית ומסובכת להיות הורה בזמננו. המסורת, ואפילו הקשיחות שעליהן גדלנו בילדותנו — התחלפו ברוח בין־דורית משתפת, בצל אמצעים טכנולוגיים שמשנים את מציאות החיים בקצב מהיר. בעולמנו זה הילדים הם ילדים מזן חדש, שמתמצאים בעולם החברתי והטכנולוגי הנוכחי, שלתוכו הם גדלים. מולם עומדים הורים נבוכים, שמכייפים אתם אבל גם לא בטוחים במה שיש להם להציע ואיך לממש את אחריותם לילדיהם. מהרגע שהרך הנולד יוצא לאוויר העולם ולכל אורך הדרך, מציפים את ההורים המוני בעלי כוונות ומסכים (של טלוויזיה ותקשורת) המנסים להכתיב לו: ´כך תעשה´; במקום מערכות התמיכה המסורתיות, חדרו סוכני חיברות ומכירות לחיי היומיום בהתנהלות המשפחה. אלא שאלה פוגעים בתבונת ההורה. הצורך בהבנת הפער הנפשי־תודעתי בין דורות ההורים והילדים כיום והצורך לשיתוף פעולה ביניהם הוא עומד בעיקרו של הספר מצפן להורות ראויה. זהו מצע למחשבה על הורות, ילדות והתבגרות בזמננו, יותר מאשר מאגר עצות פרקטיות. ויתרה מכך, ´רשתות הביטחון´ של העצות הפרקטיות הן מדומות ויכולות לנשל הורים משיקול הדעת ומאמון ביכולותיהם, בשעה שהם מסוגלים ללמוד לסמוך בהתנהלות ההורית על שיקול דעתם ועל דעת שותפיהם למסע — הילדים הראויים שלהם. בספר מביאה ד\"ר ניצה ירום את ניסיונה והתבוננותה כפסיכולוגית קלינית וכפסיכואנליטיקאית, המדריכה שנים רבות פסיכולוגים המטפלים בילדים ובמתבגרים ומדריכים הורים, לאתגר שנדרש לעדכון ההורות כיום. ספר זה מאפשר להורים לפתח מצפן פנימי להבין את עולמו של ילדם המתפתח ולשמור עליו, ויחד אתו לבנות יחסים ומסגרת ידידותית ומשלימה התואמים את רוח הזמן. זהו ספרה התשיעי. ספריה הקודמים ראו אור בעברית ובאנגלית, והיו מיועדים לאנשים במקצועות הטיפוליים. זהו ספרה הראשון המיועד ישירות להורה.",
                                69,
                                Image2ByteArray("images/CompassGuideToInstructProperInterGenerationaDialogue.jpg")),
                        new Book("החיפוש אחר העם העברי תנך ונאורות בגרמניה",
                                "עפרי אילני",
                                "החיפוש אחר העם העברי: תנך ונאורות בגרמניה מציג נקודת מבט לא צפויה על היחס לעם ישראל התנכי בתרבות הגרמנית הנוצרית בעידן הנאורות, ועל המשמעויות שהוענקו במאה השמונה עשרה להיסטוריה העברית הקדומה. דמותו של עם ישראל הקדום שימשה מודל ללאומיות הגרמנית בשלביה המוקדמים, ומשוררים, הוגים ומלומדים גרמנים אימצו את המודל העברי כמופת פואטי, תרבותי ופוליטי. הדימוי של עם ישראל המקראי, כפי שהוא מוכר לנו כיום, התעצב בגרמניה דווקא, במחצית השנייה של המאה השמונה עשרה. תאולוגים ומלומדים גרמנים חקרו את 'הברית הישנה' ודנו באופן היסטורי ואתנוגרפי בעם העברי הקדום. הפרשנות האלגורית, שהייתה מקובלת עד תקופה זו, הוחלפה בהתייחסות לטקסט התנכי כאל תעודה היסטורית, המתארת הוויה אקזוטית מרוחקת. החיפוש אחר העם העברי חושף מתח בין שתי מגמות מתנגשות בתוך מסגרת הלאומיות הנוצרית הגרמנית: האחת ששאפה לטיהור התרבות הגרמנית והנוצרית מהשפעת התנך, והאחרת שביקשה לשוב לברית הישנה, ולשאוב לגיטימציה לקיום נוצרי-לאומי מרעיון הבחירה התנכי.",
                                81,
                                Image2ByteArray("images/TheSearchForTheHebrewBiblePeopleAndEnlightenmentGermany.jpg")),
                        new Book("בוראים סגנון לדור",
                                "יאיר אור",
                                " ספר זה בוחן את דיוני ועד הלשון בתקופה המכרעת של התגבשות העברית החדשה כשפת דיבור וכתיבה, בשנים 1912 עד 1928, ומתמקד באמונות ובאידיאולוגיות המשתקפות בדיונים על השפה: מה היתה תפיסת עולמם של מחדשי השפה? האם התכוונו להחיות את שפת התנך, או שמא התכוונו שהעברית החדשה תהיה שונה מן העברית התנכית? אילו סוגים של עברית החשיבו כראויים, ואילו החשיבו כפסולים? האם שאפו שהעברית תדמה לשפות שמיות אחיות כגון ערבית או ארמית, או שמא העדיפו שהשפה המתחדשת תהיה מערבית ו'אירופית' יותר? אילו פעולות בתחום השפה החשיבו חברי הוועד כדחופות וחשובות במיוחד? האם ניסו להחיות שפה עתיקה או ליצור שפה חדשה? האם היו שמרנים בתפיסותיהם, או שמא היו חדשנים?",
                                80,
                                Image2ByteArray("images/CreatorsGenerationStyle.jpg")),
                        new Book("לונדון אין כניסה להורים",
                                "מדריך",
                                "סדרה חדשה שפותחת צוהר לעולם שלם של סיפורים מעניינים ושל עובדות מרתקות על האנשים, על המקומות, על ההיסטוריה ועל התרבות בכמה מהערים היפות בעולם. זה לא מדריך טיולים. והכניסה להורים אסורה בהחלט! זה סיפורה האמיתי של אחת הערים המפורסמות בעולם - לונדון. בין דפי הספר חבויים סיפורים מרתקים על אנשים מפורסמים וידועים לשמצה, על מקומות מפחידים ותת–קרקעיים, על היסטוריה אפלה ועל כל מיני טיפוסים מוזרים. ויש גם סיפורים מעניינים על אמני גרפיטי, על נסיכים שנרצחו, ועל אנשים מכל העולם. בין השאר, תיפגשו בני מלוכה, תיתקלו בפנקיסטים ובבלשים, ותוכלו להזמין אוכל שונה ומשונה. בספר שלפניכם תכירו את לונדון שאפילו ההורים שלכם אינם מכירים. דליקות ומגיפות * מוסיקת פּּּאנק * צלופחים לארוחת ערב * חיות בר בטיוּבּ * מצבות מפחידות * רציחות מסתוריות * כרכרות וכלבלבים מלכותיים ידעתם שיש אנשים שמתפרנסים מסנפלינג ומניקוי שעונים? הייתם אוכלים צלופח קרוש? מי היה מאמין שעריפת הראש היא עניין של מזל? מה פירוש ´זו הצרה הצרורה שלי´?",
                                59,
                                Image2ByteArray("images/LondonNoEntryForParents.jpg")),
                        new Book("לינקון והיהודים",
                                "יונתן ד' סרנה ובנימין שאפל",
                                "מאה וחמישים שנה אחרי מותו של אברהם לינקון מסופר כאן לראשונה הסיפור המלא על יחסיו המיוחדים במינם עם יהודים. לינקון והיהודים מעניק לקוראים תיאור מרתק של מגעיו של לינקון עם יהודים, והזדמנות להתבונן בכתבי יד נדירים, בתצלומים ובאיורים, רבים מהם מאוסף לינקון של שאפל, המציגים את לינקון באופן שלא זכינו לראותו עד כה.  אברהם לינקון כיהן כנשיא השישה-עשר של ארצות הברית החל משנת 1860 ועד לרציחתו בשנת 1865 ונחשב לאחד המנהיגים המשפיעים ביותר על תולדות ארצות הברית, המזוהה ביותר עם ביטול העבדות ומניעת ההתפלגות בתקופת מלחמת האזרחים. במרוצת ימיו של לינקון עלו היהודים לראשונה על הבמה הלאומית של ארצות הברית. בשנת הולדתו, 1809, חיו בארץ כולה 3000 יהודים בקושי. עד רציחתו בשנת 1865 העלתה ההגירה ההמונית , בעיקר ממרכז אירופה, את מספרם ל150,000 ויותר.",
                                148,
                                Image2ByteArray("images/LincolnAndTheJews.jpg")),
                        new Book("חץ ברשת",
                                "נחמן שי",
                                "ספר זה הוא נקודת מפגש בין שני עולמות, עולם המלחמות ועולם הדיפלומטיה. עולמות אלה השתנו שינוי דרמטי החל מהמחצית השנייה של המאה ה-20. מלחמות קטנות, א־סימטריות, ירשו את מקומן של המלחמות הגדולות, ואילו הדיפלומטיה המסורתית, החשאית, “הקלאסית״, התעשרה והתעדכנה בתכנים ובאמצעים חדשים הקרויים דיפלומטיה ציבורית, ואחריה דיפלומטיה ציבורית חדשה. במלחמה החדשה מונחי החזק והחלש התחלפו. החלש מיטיב לנצל את הרשתות החברתיות החובקות עולם כדי לנהל מלחמה א־סימטרית ומצטיין בגמישות, מקוריות ויצירתיות 'בקרב על התודעה'. ישראל נמצאת בקו הראשון של המלחמה החדשה. דרכי הפעולה הצבאיות שלה לצד כלי הדיפלומטיה הציבורית שפיתחה הם מסקרנים ובעלי חשיבות עקרונית ומעשית רבה. ספר זה רואה אור בעיצומה של האינתיפאדה השלישית, אשר שבה ומאתגרת את ישראל לקרב חדש, גלובלי.",
                                52,
                                Image2ByteArray("images/ArrowNetwork.jpg")),
                        new Book("פוסטפנומנולוגיה וטכנומדע",
                                "דון איידי",
                                "פוסטפנומנולוגיה היא אחד הענפים הבולטים היום בפילוסופיה של טכנולוגיה ומדע. היא מציעה גישה רעננה לחקר תחומים אלו, המשלבת שיטות פילוסופיות כמו פנומנולוגיה ופרגמטיזם, תוך כדי התגברות על מגמות דיסטופיות הרואות בטכנולוגיה ומדע את שורש הרע בעולמנו מצד אחד, לצד מגמות אוטופיות שמניחות שהללו יצילו את האנושות מצד שני. ספר זה מהווה מבוא קצר לפוסט-פנומנולוגיה, כולל רקע היסטורי לפילוסופיה של המדע ועלייתה של הטכנולוגיה בהגות הפילוסופית של המאה ה-20. הספר מתאר את ההתאמות לפנומנולוגיה הקלסית ולפרגמטיזם שיאפשרו ניתוח תופעות מודרניות עכשוויות, ומדגים זאת באמצעות מגוון דוגמאות מתחומי דעת שונים, כגון אסטרונומיה, ארכיאולוגיה, פיזיקה, רפואה ואוקיינוגרפיה. על אף מגוון הנושאים, אשר חלקם נחשבים כקשים להבנה, הספר כתוב בשפה בהירה וקולחת; הוא מנגיש סוגיות מתחום הפילוסופיה, המדע העכשווי והטכנולוגיה לקהל הרחב. הספר מציע שיטות חשיבה חדשניות ומרתקות, ולכן הוא מומלץ לאנשי ונשות טכנולוגיה, מדענים ומדעניות, שמעוניינים לחשוב מחדש את גבולות הדיסציפלינה שבה הם פועלים ולגבש כיווני מחקר חדשניים.",
                                74,
                                Image2ByteArray("images/PostPhenomenologyAndTechnoScience.jpg"))
                },
                {
                        new Book("Children of time",
                                "Adrian Tchaikovsky",
                                "The last remnants of the human race left a dying Earth, desperate to find a new home. Following their ancestors star maps, they discovered the greatest treasure of a past age - a world terraformed and prepared for human life. But all is not right in this new Eden. The planet is not waiting for them, pristine and unoccupied. New masters have turned it from a refuge into mankind´s worst nightmare. Now two civilizations are on a collision course and must fight to survive. As the new fate of humanity hangs in the balance, who are the true heirs of this new Earth",
                                69,
                                Image2ByteArray("images/ChildrenOfTime.jpg")),
                        new Book("The Girl on the train",
                                "Paula Hawkins",
                                "Rachel catches the same commuter train every morning. She knows it will wait at the same signal each time, overlooking a row of back gardens. She’s even started to feel like she knows the people who live in one of the houses. ‘Jess and Jason’, she calls them. Their life – as she sees it – is perfect. If only Rachel could be that happy. And then she sees something shocking. It’s only a minute until the train moves on, but it’s enough. Now everything’s changed. Now Rachel has a chance to become a part of the lives she’s only watched from afar. Now they’ll see; she’s much more than just the girl on the train",
                                59,
                                Image2ByteArray("images/TheGirlOnTheTrain.jpg"))
                },
                {
                        new Book("הקמע 7 - אור האש",
                                "קאזו קיבואישי",
                                "האי אלגוס הוא המקום שבו אפשר לחדור אל תוך זיכרונות אבודים . אמילי, טרליס וּויגו מגיעים לאי, בתקווה שיצליחו לגלות פרטים על ילדותו המסתורית של טרליס ולהיעזר בהם במאבק נגד מלך האלפים. בעוד הקמע של אמילי הולך ומקבל כוחות שמאיימים להשתלט עליה, הסוד האפל הנחשף באלגוס עומד לשנות הכול...",
                                59,
                                Image2ByteArray("images/MascotSevenLightTheFire.jpg")),
                },
                {
                        new Book("דור ה Y - כאילו אין מחר",
                                "תמר ועוז אלמוג",
                                "דור ה-Y הישראלי נולד בשנות השמונים והתשעים של המאה העשרים. אלה צעירים חילונים שגדלו ועוצבו בתקופה של צמיחה כלכלית מואצת, בזמן שהחברה הישראלית נעשתה יזמית, צרכנית, תקשורתית, אינדיווידואלית וגלובלית יותר. זהו דור מתירני, שיוויוני, מלא הומור, מפרגן, פתוח וזורם. הוא מאחר להתבגר, חי בלהקות אורבניות, מהסס להתחייב ולקחת אחריות, ממוקד בעצמו ומנהל את חייו כאילו אין מחר. הם ילידים דיגיטליים שגודלו כנסיכים ונסיכות, עטופים בחום ואהבה ומרופדים במחמאות. הבטיחו להם שאם רק ירצו יוכלו לעוף על החלום שלהם. ה-Yניקים לא ממהרים לפרוש כנפיים משום שהעולם סביבם נעשה נצלני, ציני וחסר יציבות ובשל חששם להתמסד. הם נוהרים לאוניברסיטאות ולמכללות כדי לרכוש תואר ששוויו בשוק העבודה הולך ופוחת ומשקעו האינטלקטואלי מתדלדל. חייהם גדושים בטראומות, כיוון שהם גדלו בצל הטילים ופיגועי הטרור וכיוון שהתקשורת מנגישה אסונות וטרגדיות בזמן אמת. הם עמוסי חרדות, מבולבלים, מתקשים לעמוד בעומסים ומשועבדים למידע ולגירויים מהירים. דור ה-Y שונה כמעט בכל מאפיין מדורות שקדמו לו: הם עובדים אחרת, לומדים אחרת, צורכים תקשורת וחדשות אחרת, מבלים אחרת ומגדלים את ילדיהם אחרת. השפעתם על החברה הישראלית הולכת וגדלה, מערערת את המובן מאליו ומחייבת חשיבה מחוץ לקופסה. מהו הדנ\"א התרבותי של הצעירים היום? מדוע הוא נוצר וכיצד הוא משפיע על מדינת ישראל? ספר זה, המבוסס על מחקר מדעי רחב היקף, מנסה לתת מענה לשאלות הללו.",
                                78,
                                Image2ByteArray("images/GenerationYLikeTheresNoTomorrow.jpg")),
                        new Book("החיים אחריך",
                                "ג'וג'ו מויס",
                                "כאשר סיפור אחד מסתיים, סיפור חדש מתחיל... לואיזה קלרק, הגיבורה הבלתי-נשכחת מ\"ללכת בדרכך\", מרגישה שמשהו מאוד מאוד לא בסדר איתה. לכאורה היא התאוששה ממותו של ויל טריינר, הגבר של חייה. בכסף שהוריש לה רכשה דירה חמודה בלונדון וכביכול התחילה חיים חדשים ומסעירים בעיר הגדולה. אבל למעשה היא לא לומדת, עובדת בעבודה משמימה, ועל בן זוג חדש אין בכלל מה לדבר. תאונה מצערת שפוקדת אותה גורמת לה להתעורר סוף-סוף ולהבין שהיא לא יכולה להמשיך ככה ושמשהו מהותי חייב להשתנות. ואז, לילה אחד, משהו אכן משתנה. מישהו מתדפק על דלתה של לואיזה ועולמה מתהפך. כל מה שחשבה שהיא יודעת על ויל מתנפץ לנגד עיניה. וזה שהוא מת בכלל לא אומר שהוא יצא מחייה. אם תסגור את הדלת, ישובו חייה שלה אל מסלולם הלֵאֶה. אם תפתח אותה: היא מסכנת הכול – אבל גם מקבלת הזדמנות להרפתקה מסעירה ולשינוי שלו היא כה מייחלת. ללכת בדרכך תורגם לעשרות שפות וזיכה את ג´וג´ו מויס במעריצים מכל רחבי העולם. בהחיים אחריךָ יתענגו קוראיה על המשך קורותיה של לואיזה קלרק, שאי-אפשר לא להתאהב בה – שוב.",
                                86,
                                Image2ByteArray("images/LifeAfterYou.jpg")),
                        new Book("מת ברובו",
                                "מקס גלדסטון",
                                "מת ברובו הוא ספרו הראשון של מקס גלדסטון, והספר הראשון ברצף האומנות, ספריו שמתרחשים בעולם פנטסיה שלאחר מלחמת חורמה בין אלים למכשפים, מלחמה שהפכה את סדרי העולם. טארה אברנת´י, שזה עתה קיבלה עבודה במשרד בעלי אוב יוקרתי, נשלחת לנסות להבין מה קרה לאל האש של העיר העתיקה אלט קולואומב, שנראה שמת.",
                                69,
                                Image2ByteArray("images/MostlyDead.jpg"))
                },
                {
                        new Book("כל יום בשעה 11:15",
                                "רבקה נרדי",
                                "\"כבר יותר מחמש שנים שאלינור מחכה מדי יום לשעה אחת עשרה ורבע. זו שעת האהבה שלה,השעה שמעלה בה את תחיית המתים שלה. שעה של התעוררות רוחנית, פיזית, תשוקתית - שעת ההיזכרות שלה בחיים שכמעט איבדה.\" לקראת יום הולדתה השישים חשה אלינור, אשת עסקים מבריקה ובעלת מעמד, שהיא על סף תהום. פגיעות גופה, התמוטטות מפעל חייה ותחושת הפאניקה האוחזות בה עקב כך, מניעות אותה להבין איך קרה, שמהלך החיים השתבש לה באורח כה קיצוני. נדמה לה שהעלאת קורותיה על הכתב עשויה להיות המפתח לגאולתה. היא פונה אל תמרה, מטפלת ותיקה עמה יש לה היכרות מהעבר, שתכתוב את סיפורה. השתיים נפגשות לשיחות טיפוליות שבועיות, המוקדשות לתחנות העיקריות של אלינור, כבסיס וכמסגרת לכתיבת הספר. המפגש בין גיבורת הסיפור ה\"ייקית\" לבין המטפלת, תמרה, בת למשפחה ממזרח אירופה, מתברר עד מהרה, כיותר ממפגש טיפולי-ספרותי, התחום בשעה ובמקום - מתחת לפני השטח, סוערים הרבה רגשות חבויים, שמקורם בפערים תרבותיים, מעמדיים וחברתיים בין השתיים, אלה מחוללים דינמיקה, המחלחלת לחייהן ונגלית לקורא במקביל לתולדותיה של גיבור הספר. תשתית קיומה של אלינור היא האהבה, הכמיהה לה והיעדרותה ההרסנית. כבת למשפחה \"ייקית\" מסובכת, שסבלה מפוליו, מוות מחלות ובגידות וצמחה לנערה מבריקה ויפה, היו לה הרגשות האינטימיים וזהותה הנשית כחידה שצריך לפענחה, עד שמצאה את אהבתה הגדולה. סיפור הקשר בין אלינור לאבנר, שזור בעלילה כחוט השני ומאיר אותה בזוהר של ניצחון. ימיה האינטנסיביים של אלינור, נעים בין ירושלים, פריז,בוסטון ותל אביב. יציאתה עם תמרה מחדר הטיפול לחופשה משותפת, שוברת את כללי המשחק וחושפת את שתיהן, למפגש רגשי-תרבותי מבלבל, המאיים על גורל הסיפור הנכתב. הסיום המפתיע, הופך את מסעה האישי של אלינור לסיפור אוניברסלי מעורר השראה.",
                                84,
                                Image2ByteArray("images/EveryDayAt.jpg"))
                },
                {
                        new Book("בועה בקרקעית הים",
                                "דניאל אדר",
                                "זיוסודרה היה מלך עיר המדינה השוּמֶ\u200Fרית שורופאק בזמן השיטפון הגדול. על פי הטקסטים הישנים ששרדו על לוחות חרס, הוא ניצל, הפליג דרומה עם בני משפחתו עד לדילמון (בחריין של היום) וקיבל שם \"חיים ארוכים\". ארכיאולוגים והיסטוריונים קבעו שהשיטפון הגדול באזור נהר הפרת הדרומי שהטקסטים מתיחסים אליו, התרחש בסביבות שנת 2,900 לפה\"ס. עד כאן מהמקורות הישנים. בבועה בקרקעית הים זיוסודרה כותב בגוף ראשון ומספר כי מאז אותם ימים, עבר ארצות ויבשות, עמים ותרבויות וראה דורות רבים של בני אדם, שונים אך דומים. בשנות ה-2,000 חייו הארוכים מאוד מתקרבים לסופם ומחליט לכתוב לפני מותו את אשר על ליבו, את מה שלמד על בני האדם. באמצעות מפגשים עם אנשים שונים, בארצות ובתקופות שונות על פני כדור הארץ, מבטא את תובנותיו המיוחדות המצדיקות את כינויו שנתנו לו האכדים -אתרה חסיס- \"החכם מאוד\".סיפורו השומרי של זיוסודרה (פירוש שמו: ´בעל החיים הארוכים´) הוליד במהלך השנים שנים גרסאות של הבבלים, האשורים, האכדים, העברים ועוד, ביניהם הסיפור על \"נח\" מספר בראשית. המסר המרכזי של זיוסודרה הוא שכל הרעות החולות של המין האנושי, כל העוולות, המצוקה והסבל, כל המלחמות ושפיכות הדמים, אינם גזירת גורל נצחית ואינם \"טבע\" האדם או העולם. הכל בידי האדם ובמיוחד בידי הפרט!על הפרט מוטלת החובה לשחרר עצמו ממעגלי החשיבה, האמונה וההתנהגות לתוכם נולד ללא בחירה ובדרך כלל ללא ערעור. זיוסודרה משתף ומתאר רגעים מתוך מסע ארוך לא רק בזמן ובקילומטרים, אלא במיוחד מסע ארוך למעמקי התודעה: ממעגלי החיים האינטימיים ביותר של הפרט ועד לחלקו -שאינו מודע לו- ביצירת הסבל, המצוקה והמלחמה בעולם. הגיבור לוקח את הקורא למסע לא תמיד קל ונוח אך במטרה חיובית וראויה שאופטימיות רבה בצידה: לא הכל אבוד וניתן להתחיל לייצר מציאות אחרת, בריאה, מוסרית, שפויה ושוחרת שלום, וניתן לעשות זאת עכשיו. מבחינתו, לא רק שניתן אלא שזו חובתו של כל אדם החי בשנות האלפיים. בועה בקרקעית הים הוא שעון מעורר, קריאה להתעוררות ולמהפכה. מהפכה לא אלימה, מהפכת תודעה והתנהגות, חשיבה ומעשה, התבוננות ושינוי. עצמתו של הספר במציאותיות שלו, בהיצמדותו לעובדות: כל האירועים המתוארים, המקומות והזמנים, מדויקים היסטורית עד לפרט האחרון, למעט אמירותיו שלו על כל אלה והדמויות עמן נפגש בכל זמן ומקום. מדובר בספר המאתגר את הקורא בכל עמוד ללא הנחות או פשרות, שמבטא ביקורת לא קלה על כולנו, אך הירידה למעמקי הקונפליקט האנושי הינה לצורך עליה, עליה גדולה ונחוצה שהגיע זמנה.",
                                78,
                                Image2ByteArray("images/BubbleSeabed.jpg")),
                        new Book("לבנה השחורה",
                                "מירי גודאל כהן",
                                ",אני רואה אותה מעבר לגדר המפרידה. היא עומדת שם וממתינה. ילדה כבת שמונה או תשע, פניה וזרועותיה הדקות מלוכלכות. פרועת שיער ושמלתה מוכתמת. ילדה יפה אך עצובה. היא מביטה בי בדממה ומצפה. רק עיניה דובבות. כן, הילדה הזו היא אני. קוראים לי לבנה ואני לא אוהבת את השם שלי...' באומץ ובכנות גדולה, מעמידה לפנינו המחברת דיוקן מפורט ונוקב, של הדמויות שאיכלסו את ימי ילדותה. המבט של מירי, הוא ישיר וחד ומבוסס תמיד על היכרות קרובה ומעמיקה של מושאי התיאור שלה. בין דפי הספר, נחשפים חיפושי הזהות של ילדה/נערה, על רקע ראשית המדינה, ימי המנדט הבריטי, המלחמה ותקופת הצנע. בין פרק לפרק נפרשת רשת עדינה ועשירה של יחסי גומלין בין הילדה המתבגרת לחברה ולאנשים שסובבים אותה. לצד היכולת לשרטט תיאור אכזרי לפעמים, המעמיד לפנינו את הדמויות במלוא כאבן ועליבותן, מחלחל גם רגש חם ואוהב לתקופה תמימה שאולי לא תשוב עוד.",
                                69,
                                Image2ByteArray("images/BlackWhite.jpg")),
                        new Book("הסוד של פרעה",
                                "קלייב קאסלר",
                                "רחובותיו המנומנמים של האי האיטלקי למפדוזה מתכסים ערפל שחור וכל תושביו מאבדים את הכרתם. הסיכוי להצילם נמצא בידיה של דוקטור רנטה אמברוסיני, רופאה בבית החולים המקומי, שהספיקה להסתתר בחדר אטום ולשדר ממנו קריאות מצוקה הודעותיה נקלטות במשדרים של ׳נומה׳, הסוכנות האמריקנית לחקר מסתרי הימים והאוקיינוסים. קורט אוסטין וג׳ו זוואלה נשלחים אל האי ומחלצים ממנו את הרופאה. אבל חייהם של שאר חמשת אלפים תושבי האי תלויים בזיהוי הרעל שהופץ בערפל השחור ובפיתוח מהיר של חומר נגדי. העקבות מובילים את חברי ׳נומה׳ למי שפיתחו את הערפל השחור והוא משמש בידיהם כנשק יום הדין שמאיים על שלום העולם כולו. בראש הארגון הטרוריסטי עומד טארק שאקיר, מי שפיענח את סודות אימפריית הפרעונים ומתכוון להקים מעצמה גדולה וחזקה אפילו יותר. למען מטרה זו הוא נכון להקריב את כל מי שיקרה בדרכו, כולל המונים מבני עמו, אפילו את הקרובים אליו ביותר. צוות ׳נומה׳ יוצא למלחמה בחלום בלהות שהופך למציאות.",
                                76,
                                Image2ByteArray("images/PharaohsSecret.jpg"))
                },
                {
                        new Book("פרויקט X",
                                "גרג הורביץ",
                                "'האיש משומקום' הוא דמות אגדית ששמה נלחש מפה לאוזן. אומרים שכאשר האנשים הנואשים ביותר פונים אליו, הוא יעשה הכול כדי להגן עליהם. אבל האיש משומקום אינו אגדה. כילד יתום הוא נבחר עבור 'פרויקט X', תוכנית חשאית שמטרתה ליצור לוחמים בלתי פגיעים, שניתן להתכחש להם כיוון שאינם קיימים באופן רשמי. לאחר שעבר הכשרה מיוחדת, הוא ניצל את כישוריו יוצאי הדופן ונעלם. אבל עכשיו מישהו נמצא בעקבותיו. זהו אדם כמותו, חבר 'פרויקט X' שיודע סודות אפלים מעברו וכל רצונו הוא לעצור בעדו. כריכה רכה, 416 עמודים.",
                                68,
                                Image2ByteArray("images/ProjectX.jpg"))
                },
                {
                        new Book("קפה בוץ",
                                "אבישי בן יוסף",
                                "'כשסיים את מלאכתו וקֵ רֵב את החליל אל פיו בקעו ממנו צלילים מופלאים, ניגון שמימי שריחף על כנפי הרוח אל תוך בתיהם של בני הכפר, אשר פסקו ממלאכתם והאזינו בדומייה למנגינה הקסומה. הוא ניגן על האושר, על אהבת אם וילדהּ, על אבלה של אמו ועל צערו על שנבצר ממנו להכיר את אביו, על קציר החיטים ובציר הענבים, על הברקים והרעמים ועל הנחל המפכה ליד ביתו. את כל אלה שזר לרקמה אחת של צלילים, למנגינה שחדרה ללבבות האנשים, הגירה דמעות מעיניהם והקלה את סבלותיהם.' ספר שיצא לאור כמוהו כבית הנפתח לאירוח המזמין עוברי אורח לסעוד את נפשם, להרוות את לבם ולשבח את הטבח. 'קפה בוץ' הוא אוסף סיפורים ומעשיות המגיש ארוחת טעימות מגוונת במקום ארוחה דשנה בת מנה אחת. כותב הספר מתכבד להזמינכם להתארח בספרו ומקווה שיערבו עלילותיו לחככם, ירוו מילותיו צימאונכם ויילגם הקפה עד תום. אבישי בן יוסף גדל בקבוצת חולדה ושרת כלוחם בקומנדו הימי. בסיפוריו נארגים אירועים וחוויות מחייו עם מעשיות דמיוניות וסוריאליסטיות בשתי וערב ובהרמוניה למרקם עלילתי אחיד.",
                                49,
                                Image2ByteArray("images/MudCoffee.jpg")),
                        new Book("כמו שתי טיפות מים",
                                "סקוט טורו",
                                "פול ג´יאניס הוא עורך דין מצליח ומועמד המפלגה הדמוקרטית בבחירות לראשות מחוז קינדל. אחיו התאום שוחרר זה עתה מהכלא, עשרים וחמש שנים אחרי שהודה ברצח חברתו דיטה קרונון. אחיה המיליארדר של דיטה, רפובליקאי קנאי ויריבו המושבע של פול, משוכנע שפול היה מעורב ברצח אחותו ומנסה להוכיח את טענתו בעזרת בדיקות דנ\"א חדשניות. לפי דרישתו יוצאים סוכנת FBI לשעבר ובלש פרטי קשיש למצוא ראיות שיוכיחו את חשדותיו. בתוך זמן קצר הם מוצאים את עצמם לכודים ברשת סבוכה של שקרים והולכות שולל. סקוט טורו, אמן המותחנים המשפטיים, רוקם עלילה בלתי נשכחת על רצח, סקס ובגידה. זהו סיפור על שתי משפחות בקהילת המהגרים היוונית בארצות הברית, שחייהן שזורים לאורך שלושה דורות, וגורלן נראה כלקוח היישר מתוך אחת המיתולוגיות של ארץ מוצאן. סקוט טורו הוא עורך דין פלילי ומחברם של תשעה רבי מכר, ביניהם בחזקת חף מפשע, גיבורים פשוטים ומעבר לספק סביר. ספריו תורגמו ליותר מעשרים וחמש שפות ונמכרו בעשרות מיליוני עותקים ברחבי העולם. סרטים וסדרות טלוויזיה נוצרו בהשראת רבים מספריו, ביניהם הסרט שובר הקופות  בחזקת חף מפשע בכיכובו של הריסון פורד.",
                                98,
                                Image2ByteArray("images/SpittingImage.jpg")),
                        new Book("צוות חשאי",
                                "בראד תור",
                                "סופר רבי המכר של הניו יורק טיימס, מגיע לישראל. כאשר גופה מרוטשת ועליה סימן הגולגולת והעצמות המוצלבות מתגלה על אי קטן בסמוך לחופי ג´ורג´יה, איש אינו מעלה בדעתו שבזאת נפתחת תיבת פנדורה העלולה למוטט את הכלכלה העשירה והחזקה בעולם. אך כשמתברר שמדובר בגופתה של אחת מחמשת המועמדים לרשת את מקומו של ראש הבנק הפדרלי שנפטר זה עתה וששאר ארבעת המועמדים נחטפו באותו יום מבתיהם, שערי הגיהינום נפתחים לרווחה. בראד תור הוא הכוכב החדש בשמי ספרות המתח העולמית וספריו נמצאים דרך קבע בראש רשימות רבי המכר בארהב.",
                                98,
                                Image2ByteArray("images/UndercoverTeam.jpg"))
                },
                {
                        new Book("הנערה מכיכר טיימס",
                                "פאולינה סימונס",
                                "הכירו את לילי קווין. היא בת 24, אין לה פרוטה והיא נאבקת לסיים את לימודיה בקולג´ ולעמוד בתשלומי שכר הדירה שלה – וגם למצוא אהבה. אמנם הדברים המעניינים ביותר בניו־יורק השוקקת קורים דווקא לאנשים הסובבים אותה, אבל לילי אוהבת את חייה חסרי המטרה, והיתה מוכנה להמשיך כך אלמלא איימי, חברתה הטובה ושותפתה לדירה - היתה נעלמת. כאן נכנס לחייה בלש ספנסר אומלי ממשטרת ניו־יורק, שגם לו יש לא מעט שלדים בארון. ואילו סכום כסף גדול שנופל לידיה של לילי, והיה צריך להקל על מצבה, מביא בעקבותיו כוחות אפלים ההולכים ומכתרים אותה. ככל שהחיפושים אחרי איימי נעשים אינטנסיביים יותר, מוצאת לילי את עצמה נלחמת על חייה ונאלצת לבחון מחדש את כל מה שידעה על חברתה ועל משפחתה. הגילויים המזעזעים על האנשים שהיא אוהבת מכריחים אותה לעמוד מול אמיתות שישנו אותה לתמיד. הנערה מכיכר טיימס הוא ספר שצוללים למעמקיו ולא מרפים ממנו עד הדף האחרון. פאולינה סיימונס היא מחברת רבי־המכר ‘פרש הברונזה’, ‘טטיאנה ואלכסנדר’, ‘גן הקיץ’ ו’הדרך לגן עדן’.",
                                98,
                                Image2ByteArray("images/TheGirlFromTimesSquare.jpg"))
                },
                {
                        new Book("עולם אבטחת המידע וההאקינג",
                                "רומן זאיקין",
                                "אבטחת מידע נועדה להגן על הסודיות, השלמות והזמינות של המידע במחשב מבעלי כוונות זדוניות המעוניינים להשיג מידע זה. היום ניתן לראות את תחום אבטחת המידע פורח במגוון תחומים: האינטרנט, השרתים, הרשתות והתכנות. הדרך הטובה ביותר להגן מפני האקרים היא לחשוב כהאקרים ולבחון את התשתיות והסביבה שלכם מנקודת המבט שלהם. בספר זה תלמדו את דרך המחשבה של ההאקרים, תבינו איך פועל המחשב, איך עובדת הרשת, מהן חבילות מידע ואילו פרוטוקולים ושירותים קיימים. מעתה יוכל כל אחד מכם, בין אם אתם מנהלי רשתות ובין אם משתמשים ביתיים, להגן על המידע שלכם מפני הסכנות האורבות בעולם אבטחת המידע. רומן זאיקין הוא מרצה לאבטחת מידע, רשתות ולינוקס, בעל הסמכות בין לאומיות בשלל תחומים ומפתח תוכנה בתחום הסייבר.",
                                75,
                                Image2ByteArray("images/TheWorldOfInformationSecurityAndHacking.jpg")),
                        new Book("קרב מוחות - ההיסטוריה הזדונית של וירוסי המחשב",
                                "רן לוי",
                                "'החוק הראשון של אבטחת מחשבים: אל תקנה מחשב. החוק השני: אם קנית מחשב, אל תפעיל אותו.' (הנוקם האפל, אחד מכותבי הוירוסים המתוחכמים בהיסטוריה). ההיסטוריה של וירוסי המחשב עתיקה כמעט כמו המחשבים עצמם. בתוך שלושים שנה הפכו הוירוסים משעשוע לא מזיק לתוכנות זדוניות רבות עוצמה, שמהלכות אימים על גולשי האינטרנט, על ארגונים עסקיים ועל מדינות שלמות. קרב מוחות, הנשען על ראיונות עם גיבורי פרשות הוירוסים המרתקות ביותר בעולם, לוקח את הקוראים למסע משעשע, מרתק ומטריד, המספר בין השאר על הסטודנט שהשבית את רשת האינטרנט כולה ליומיים, על ילד בן 13 שהביס מומחה אבטחה בעל שם עולמי ועל הרמזים המסתתרים (אולי) בתוך ´סטוקסנט´, התולעת שתקפה את הכור האיראני.",
                                83,
                                Image2ByteArray("images/HistoryOfMaliciousComputerViruses.jpg")),
                        new Book("ויקיליקס - אויב המדינה",
                                "מרסל רוזנבך, הולגר שטארק",
                                "הממשל האמריקני הכריז על ויקיליקס כעל אויב המדינה. החשיפות הסנסציוניות של מסמכים מסווגים מתוך השגרירויות של ארצות הברית ושל דו\"חות סודיים על המלחמות באפגניסטן ובעיראק סומנו כאיום על ביטחון ארצות הברית — ולא רק עליה. ויקיליקס העלה לרשת גם מסמכים שערורייתיים הנוגעים לישראל, לשכנותיה הערביות ולעוד מדינות רבות. אין פלא שוויקיליקס ומייסדו, ג´וליאן אסאנג´, נרדפים על ידי הממסד. כיצד הצליח קומץ של פעילים ברשת, שהתאגדו בסוף 2006, להפחיד את מעצמת העל? מיהו ג´וליאן אסאנג´ ומה מניע אותו? האם יש לאזרחים זכות לדעת את סודות המדינה שלהם? האם ויקיליקס מסמן את עתידה של העיתונות החוקרת או רק את הצד המסוכן ביותר באינטרנט? מרסל רוזנבך והולגר שטארק, עיתונאֵי השבועון \"שפיגל\", פותחים צוהר ייחודי לפעילות של ויקיליקס ומסבירים מדוע היום סודות מדינה אינם בטוחים עוד. השניים עוקבים במשך שנים אחר התפתחותו של הארגון, ונפגשו פעמים רבות עם ג´וליאן אסאנג´. העיתונאי רונן ברגמן פגש אף הוא את ג´וליאן אסאנג´ במקום גלותו באחוזה הכפרית באנגליה וראיין אותו על ראשיתו של הארגון, על תומכיו ובעיקר אויביו ועל המשפט הצפוי לו. ברגמן הוסיף לספר זה הקדמה ופרק מיוחד על חשיפות ויקיליקס שהביכו את ישראל.",
                                71,
                                Image2ByteArray("images/WikileaksEnemyOfTheState.jpg"))
                },
                {
                        new Book("אשפי המספרים",
                                "סטיבן בייקר",
                                "בעידן הטכנולוגי, הדבר שאנו מפיצים הכי הרבה סביבנו הוא מידע. בין אם אנו מדברים בטלפון הסלולרי, משוטטים ברשת או מושיטים את כרטיס האשראי בקופה כדי לקנות את הספר הזה - נותר אחרינו שובל אינסופי של נתונים. בעבר הצטברו נתונים אלו במחסן וירטואלי ענק באין דורש. כיום, המספרים הגדולים יוצאים מן הארון, והרלוונטיות שלהם לחיינו מעולם לא היתה רבה יותר. אפשר שבעתיד הלא–רחוק, מודלים מתמטיים יעזרו לבוס להחליט מי מהעובדים ראוי לקבל העלאה, עשרות משוואות ילמדו את מנהל הסופרמרקט על הרגלי הצריכה שלנו, וטכנולוגיה חטטנית תתאים לנו תעמולת בחירות אישית. מנגד, אלגוריתמים של כריית נתונים יעזרו לוודא שנהיה בריאים יותר, להתאים לנו בני–זוג אידיאליים, ועם קצת מזל גם למנוע את פיגוע הטרור הבא. אשפי המספרים יאיר את עיניכם ולפעמים יפקח אותן לרווחה בתדהמה. סטיבן בייקר, סופר ועיתונאי, יוצא למסע בעולמם של המתמטיקאים ואנשי המחשבים השולטים במידע של חיינו. במבט מעמיק ועם חוש ביקורת בריא, בייקר מציע הצצה מאלפת אל העתיד - על האפשרויות הגלומות בו ועל השאלות שהוא מעורר: מה יהיה על הפרטיות, האם באמת אפשר להכניס התנהגות אנושית למודל מתמטי, והיכן, בתוך סדרות אינסופיות של אפס ואחת, נמצאים גם אנחנו?",
                                88,
                                Image2ByteArray("images/NumbersWizards.jpg"))
                },
                {
                        new Book("המדיניות הכלכלית בישראל במנהרת הזמן",
                                "מאיר חת",
                                "המדיניות הכלכלית בישראל במנהרת הזמן הוא קובץ רשימות ומאמרים שכתב פרופסור מאיר חת במרוצת כיובל שנים. הוא מקיף תחומים רבים של מדיניות כלכלית, בהם מדיניות מונטרית ומערכות הרגולציה לענפיהן. המאמרים מצביעים על טעויות שנעשו בהפעלה או בהימנעות מהפעלה של אמצעי מדיניות שעמדו לרשות הממשלה. לחלק מהטעויות הללו השפעה שנמשכת עד היום. הספר מהווה תרומה להבנת התפתחותו של המשק הישראלי, על הישגיה וכשליה.",
                                118,
                                Image2ByteArray("images/IsraelsEconomicPolicyInTime.jpg")),
                        new Book("אילון מאסק\n" +
                                "היזם הנועז המעצב את עתידנו",
                                "אשלי ואנס",
                                "הצצה נדירה לחייו של אחד היזמים הנועזים והמסקרנים ביותר הפועלים היום בעמק הסיליקון, ועוקב אחר מסעו של אילון מאסק מילדותו הקשה בדרום אפריקה ועד לפסגת עולם העסקים הבינלאומי. הביוגרפיה המקיפה והמרתקת שכתב ואנס מבוססת על יותר מ־30 שעות של שיחות עם מאסק ועל ראיונות עם כ־ 300 איש, בהם בני משפחתו הקרובים של מאסק, חבריו ועובדים בחברות שהקים – פייפאל, טסלה מוטורס, ספייס־אקס וסולאר סיטי – חברות ששינו את פני העולם. על בסיס המידע הרב שליקט משרטט המחבר דיוקן של אדם יחיד במינו, שהרים את התעשייה האמריקאית לשיאים יוצאי דופן של חדשנות אך גם צבר בדרך הרבה מאוד אויבים. באמצעות סיפורו של מאסק מעלה אשלי ואנס שאלה גדולה בהרבה: האם אומת ההמצאות והיצירות, שהובילה את העולם במשך מאה שלמה, תוכל להמשיך לעשות זאת בעידן של תחרות גלובלית? מאסק, קובע ואנס, הוא דמות ייחודית בהיסטוריה של אמריקה, שווה ערך בחשיבותו לממציאים כמו תומס אדיסון, הנרי פורד, הווארד יוז וסטיב ג׳ובס. הוא השקיע את כל מרצו וחלק גדול מהונו ליצירת מוצרים ששומרים על כדור הארץ ולפיתוח תוכנית גיבוי לאנושות – התיישבות קֶבַע על מאדים.",
                                70,
                                Image2ByteArray("images/ElonMusk.jpg")),
                        new Book("לא לאבד את הראש",
                                "אביגדור קלדור",
                                "מחבר הספר, נכה צהל, נפגע בתאונת דרכים בעת שירות מילואים ברצועת עזה. מלבד כריתת רגל שעבר ופגיעות גופניות אחרות, התברר כי הוא נפגע פגיעה חמורה בראשו. תהליך שיקומו, אותו הוא מתאר בספר זה, נמשך למעלה מעשר שנים, כאשר נקודת המאמץ העיקרית היתה 'לא לאבד את הראש!', לשמור ולשקם את כושר הדיבור, החשיבה, הכתיבה. מאבקו הבלתי נלאה לחזור אל עצמו (תוך ידיעה ברורה, שחזרה מלאה היא בלתי אפשרית), הוא נושאו של ספר זה.",
                                73,
                                Image2ByteArray("images/DoNotLoseYourHead.jpg"))
                }
        };

        // Save the data.
        int i = 0;
        for (Category c: dummyCategories) {
            for (Book b: dummyBooks[i]) {
                c.addBook(b);
            }
            i++;
            categories.save(c);
        }

        User[] dummyUsers = {
                new User("nir", "galon", "nirgn", "password", new String[] {"ROLE_USER", "ROLE_ADMIN"})
        };

        // Save the data.
        for (User u: dummyUsers) {
            users.save(u);
        }
    }


    /**
     * Convert an image file to base64 byte array.
     *
     * @param fileName
     * @return
     */
    public byte[] Image2ByteArray(String fileName) {
        FileInputStream fileInputStream=null;
        File file = new File(getClass().getClassLoader().getResource(fileName).getFile());
        byte[] bFile = new byte[(int) file.length()];

        try {
            //convert file into array of bytes
            fileInputStream = new FileInputStream(file);
            fileInputStream.read(bFile);
            fileInputStream.close();
        }catch(Exception e){
            e.printStackTrace();
        }

        return bFile;
    }
}
