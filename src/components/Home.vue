<template>
  <header>
    <PageTitle />
  </header>
  <main
    class="container absolute inset-y-1/2 my-auto h-full w-full gap-y-8 flex flex-col justify-center items-center"
  >
    <div class="w-full flex justify-center gap-2 px-4">
      <LevelButton
        :level="'LEVEL 1'"
        :levelType="'( PERCEPTION )'"
        :levelId="'levelOne'"
        :activeLevel="activeLevel"
        @click="changeLevel('levelOne')"
      />
      <LevelButton
        :level="'LEVEL 2'"
        :levelType="'( CONNECTION )'"
        :levelId="'levelTwo'"
        :activeLevel="activeLevel"
        @click="changeLevel('levelTwo')"
      />
      <LevelButton
        :level="'LEVEL 3'"
        :levelType="'( REFLECTION )'"
        :levelId="'levelThree'"
        :activeLevel="activeLevel"
        @click="changeLevel('levelThree')"
      />
    </div>
    <div class="w-full flex flex-col justify-center items-center gap-1">
      <CardNumberPill class="" :card="cardNumber" :length="levelLength" />
      <div class="">
        <DigDeeperCard v-show="digDeeperVisible" />
        <Card class="" :question="currentCard" :level="cardLevel" />
      </div>
    </div>
    <div class="w-full flex justify-center gap-2 px-4">
      <DigDeeperButton
        class=""
        @click="showDigDeeperCard()"
        :digDeeperVisible="digDeeperVisible"
      />
      <PreviousCardButton class="" @click="previousCard()" />
      <NextCardButton class="" @click="nextCard()" />
    </div>
  </main>
  <footer>
    <NavBar :levelId="'home'" :activeTab="'home'" />
  </footer>
</template>
<script>
import Card from "../components/Card.vue";
import PageTitle from "../components/PageTitle.vue";
import LevelButton from "../components/LevelButton.vue";
import NextCardButton from "../components/NextCardButton.vue";
import DigDeeperButton from "../components/DigDeeperButton.vue";
import DigDeeperCard from "../components/DigDeeperCard.vue";
import PreviousCardButton from "../components/PreviousCardButton.vue";
import CardNumberPill from "../components/CardNumberPill.vue";
import NavBar from "../components/NavBar.vue";

export default {
  name: "Home",
  components: {
    Card,
    PageTitle,
    LevelButton,
    NextCardButton,
    DigDeeperButton,
    DigDeeperCard,
    PreviousCardButton,
    CardNumberPill,
    NavBar,
  },
  data() {
    return {
      levelOne: [
        "DO YOU THINK I'VE EVER BEEN IN LOVE?",
        "WHAT ABOUT ME IS MOST STRANGE OR UNFAMILIAR?",
        "DO YOU THINK I'VE EVER HAD MY HEART BROKEN?",
        "WHAT DO YOU THINK I'D SPLURGE ON?",
        "WHAT DO YOU THINK MY MAJOR IS?",
        "WHAT DO YOU THINK I'M GOING TO DO IN THE FUTURE (WORK/EMPLOYMENT)?",
        "WHAT WAS YOUR FIRST IMPRESSION OF ME?",
        "DO YOU THINK I LIKE HOT CHEETOS?",
        "DO YOU THINK I LIKE TO READ?",
        "DO YOU THINK I HAVE A SIBLING? OLDER OR YOUNGER?",
        "WHO DO YOU THINK IS MY FAVORITE ARTIST?",
        "WHERE DO YOU THINK I GREW UP?",
        "WHAT DO YOU THINK MY FAVORITE STARBUCKS DRINK IS?",
        "DO YOU THINK I LIKE TACO BELL?",
        "WHAT DO I NEED TO WATCH AS SOON AS I HAVE TIME?",
        "WHAT DO YOU THINK IS THE HARDEST PART OF WHAT I DO FOR A LIVING?",
        "WHAT REALITY SHOW DO YOU THINK I'M MOST LIKELY TO BINGE WATCH? EXPLAIN.",
        "DO I SEEM LIKE A CAT OR DOG PERSON?",
        "WHAT DO MY SHOES TELL YOU ABOUT ME?",
        "DO I SEEM LIKE MORE OF A CREATIVE OR ANALYTICAL TYPE? EXPLAIN.",
        "HOW MANY SPEEDING TICKETS DO YOU THINK I'VE GOTTEN IN MY LIFE?",
        "DO I SEEM LIKE SOMEONE WHO WOULD GET A NAME TATTOOED ON MYSELF?",
        "WHAT DO YOU THINK I'M MOST LIKELY TO SPLURGE ON?",
        "FINISH THE SENTENCE: JUST BY LOOKING AT YOU I'D THINK ____.",
        "WHAT CHARACTER WOULD I PLAY IN A MOVIE?",
        "DO I REMIND YOU OF ANYONE?",
        "WHO DO YOU THINK MY CELEBRITY CRUSH IS?",
        "DO YOU THINK I'VE EVER CHECKED AN EX'S PHONE FOR EVIDENCE?",
        "WHAT'S THE FIRST THING YOU NOTICED ABOUT ME?",
        "DO I SEEM LIKE A COFFEE OR TEA PERSON? SWEETENED OR UNSWEETENED?",
        "WHAT DO YOU THINK MY GO-TO KARAOKE SONG IS?",
        "IF YOU WERE TO BUY ME A PRESENT, KNOWING NOTHING ABOUT ME OTHER THAN WHAT I LOOK LIKE, WHAT WOULD IT BE?",
        "WHAT DOES MY PHONE WALLPAPER TELL YOU ABOUT ME?",
        "DO I LOOK KIND? EXPLAIN.",
        "DO YOU THINK I FALL IN LOVE EASILY? WHY OR WHY NOT?",
        "AS A CHILD, WHAT DO YOU THINK I WANTED TO BE?",
        "DO YOU THINK I'M USUALLY EARLY, ON TIME, OR LATE TO EVENTS? EXPLAIN.",
        "WHAT SUBJECT DO YOU THINK I THRIVED IN AT SCHOOL? DID I FAIL ANY?",
        "WHAT COMPLIMENT DO YOU THINK I HEAR THE MOST?",
        "DO I SEEM LIKE A MORNING PERSON OR A NIGHT OWL? WHY?",
        "WHAT FAST FOOD RESTAURANT DO YOU THINK I'M MOST LIKELY TO DRIVE THROUGH? WHAT'S MY ORDER?",
        "WHAT IS MY BODY LANGUAGE TELLING YOU RIGHT NOW?",
        "WHAT DOES MY INSTAGRAM TELL YOU ABOUT ME?",
        "DO YOU THINK PLANTS THRIVE OR DIE IN MY CARE? EXPLAIN.",
        "ON A SCALE OF 1-10, HOW MESSY DO YOU THINK MY CAR IS? 1 BEING CLEAN, 10 BEING A COMPLETE DISASTER.",
        "DO YOU THINK I WAS POPULAR IN SCHOOL? EXPLAIN.",
        "DO YOU THINK I'VE EVER BEEN FIRED FROM A JOB? IF SO, WHAT FOR?",
        "DO YOU THINK I INTIMIDATE OTHERS? WHY OR WHY NOT?",
        "HOW LIKELY AM I TO GO CAMPING? HOW HIGH MAINTENANCE IS MY SETUP?",
        "WHAT ABOUT ME IS MOST STRANGE OR UNFAMILIAR TO YOU?",
        "IF MYSPACE WERE STILL A THING, WHAT WOULD MY PROFILE SONG BE?",
        "WHAT ABOUT ME INTRIGUES YOU?",
        "WHAT DOES MY STYLE TELL YOU ABOUT ME?",
        "DO YOU THINK I'VE BEEN IN LOVE?",
        "WHAT IS THE WORST ASSUMPTION SOMEONE HAS MADE ABOUT YOU?",
      ],
      levelTwo: [
        "WHAT'S THE LAST THING YOU LIED ABOUT?",
        "WHAT IS YOUR MOST DEFINING CHARACTERISTIC?",
        "ARE YOU LYING TO YOURSELF ABOUT ANYTHING?",
        "HOW ARE YOU, REALLY?",
        "WHAT IS YOUR LEAST FAVORITE PERSONALITY TRAIT IN A PERSON?",
        "WHEN IS THE LAST TIME YOU FELT LUCKY TO BE YOU?",
        "WHICH ONE OF YOUR PARENT'S PERSONALITY TRAITS DO YOU WANT TO KEEP/LET GO OF",
        "WHAT WOULD YOU TELL YOUR YOUNGER SELF AND WHAT HAVE YOU LEARNED FROM THIS LESSON?",
        "WHAT IS THE LAST THING YOU LIED TO YOUR MOM ABOUT?",
        "WHAT'S THE WORST PAIN YOU'VE EVER BEEN IN THAT WASN'T PHYSICAL?",
        "WHAT'S YOUR FATHER'S NAME AND ONE THING ABOUT HIM?",
        "WHAT'S THE MOST UNEXPLAINABLE THING THAT HAS EVER HAPPENED TO YOU?",
        "WHAT WOULD YOUR YOUNGER SELF NOT BELIEVE ABOUT YOUR LIFE TODAY?",
        "WHAT NON-DOMESTIC ANIMAL DESCRIBES YOU AND WHY?",
        "WHAT IS YOUR FAVORITE ADJECTIVE WITH WHICH TO BE DESCRIBED?",
        "WHAT ARE YOU STILL TRYING TO PROVE TO YOURSELF?",
        "WHEN IS THE LAST TIME YOU CRIED?",
        "IF YOU COULD INSTILL ONE PERSONALITY TRAIT IN YOUR CHILD, WHAT WOULD IT BE?",
        "WHAT'S THE HARDEST PART ABOUT DATING YOU?",
        "WHAT'S YOUR FAVORITE SONG LYRIC THAT YOU CAN THINK OF OFF THE TOP OF YOUR HEAD?",
        "THINK OF SOMEONE THAT YOU ADMIRE. WHAT MADE YOU THINK ABOUT THEM SPECIFICALLY?",
        "WHAT'S THE BIGGEST MISTAKE YOU'VE MADE?",
        "WHAT'S A PHRASE THAT YOU SAY THAT YOU WISH YOU WOULD STOP SAYING?",
        "BASED ON WHAT YOU LEARNED REWRITE EACH OTHER'S DATING APP BIOS.",
        "WHAT ARE YOU MOST EXCITED FOR TODAY? BIG OR SMALL.",
        "WHAT WOULD YOU FEEL BEST TO FULLY ACCEPT IN THIS MOMENT? EXPLAIN.",
        "WILDCARD\nSHARE YOUR SCREEN TIME. BOTH PLAYERS",
        "WHAT CAN YOU CREATE DURING THIS TIME WITH EXACTLY WHAT YOU HAVE? BIG OR SMALL.",
        "WHAT'S THE MOST FUN YOU'VE EVER HAD? EXPLAIN.",
        "WILDCARD\nSTARING CONTEST! FIRST TO SMILE OR LOOK AWAY HAS TO SHOW AN EMBARRASSING VIDEO, AT LEAST 3 YEARS OLD.",
        "WHAT MOVIE DO YOU WISH YOU COULD WATCH AGAIN FOR THE FIRST TIME, WHY? EXPLAIN.",
        "WILDCARD\nREVEAL YOUR MOST PLAYED SONG, AT THE MOMENT. EXPLAIN.",
        "WHAT'S THE MOST PAIN YOU'VE EVER BEEN IN THAT WASN'T PHYSICAL?",
        "WHAT'S THE MOST UNEXPLAINABLE THING THAT'S EVER HAPPENED TO YOU?",
        "WHAT HAVE YOU TOLERATED FROM PEOPLE IN THE PAST THAT YOU NO LONGER HAVE SPACE FOR?",
        "WHAT ARE YOU FEELING A LOT OF LATELY?",
        "WHAT DO YOU NEED RIGHT NOW BUT AREN'T COMMUNICATING?",
        "WHAT ARE YOU CURRENTLY WORKING THROUGH THAT OTHERS DON'T SEE?",
        "WHAT WAS YOUR BIGGEST TURNING POINT IN YOUR DATING LIFE?",
        "WHAT ARE YOU OVERTHINKING RIGHT NOW?",
        "WHAT DID YOUR LAST RELATIONSHIP TEACH YOU ABOUT YOURSELF?",
        "WHAT BELIEF ABOUT YOURSELF NO LONGER SERVES YOU?",
        "WILDCARD\nSET AN INTENTION FOR THIS WEEK. STICK TO IT.",
        "WHO IN YOUR LIFE CAN YOU BE MOST VULNERABLE WITH?",
        "WHICH ONE OF YOUR PARENTS' PERSONALITY TRAITS DO YOU WANT TO KEEP/LET GO OF? EXPLAIN.",
        "THINK OF SOMEONE YOU ADMIRE. WHY DID THIS PERSON COME TO MIND?",
        "WHAT IS YOUR FAVORITE PART ABOUT YOURSELF THAT ISN'T PHYSICAL?",
        "WHAT DO YOU NEED TO FORGIVE YOURSELF FOR?",
        "WHAT'S THE HARDEST LESSON YOU'VE LEARNED IN LOVE?",
        "REMINDER\nBE MORE INTERESTED IN UNDERSTANDING OTHERS THAN BEING UNDERSTOOD.",
        "WHEN ASKED 'HOW ARE YOU' HOW OFTEN DO YOU ANSWER TRUTHFULLY?",
        "WILDCARD\nWRITE A NOTE TO YOUR YOUNGER SELVES. AFTER 1 MINUTE, OPEN AND COMPARE.",
        "WHAT IS YOUR MOST TOXIC TRAIT YOU CAN ADMIT TO?",
        "WHAT IS YOUR HEART TELLING YOU?",
        "WHO IN YOUR LIFE DESERVES THE BIGGEST THANK YOU? LET THEM KNOW IF YOU CAN.",
        "I FEEL LOVED WHEN ______.",
        "SELF LOVE IS ______.",
        "WHAT CAN YOU BE KINDER TOWARDS YOURSELF TODAY?",
        "WHAT IS YOUR MOTHER'S NAME AND THE MOST VALUABLE THING SHE HAS TAUGHT YOU THUS FAR?",
        "WHAT HAVE YOU BEEN TAKING FOR GRANTED LATELY?",
        "IS THERE A FEELING YOU MISS?",
        "WILDCARD\nADMIT SOMETHING.",
        "WHAT DO YOU NEED TO HEAR RIGHT NOW?",
        "WHAT ABOUT YOURSELF IS HARD TO ADMIT?",
        "WHAT IS ONE THING YOU CAN DO TO BE A BETTER PERSON?",
        "WHAT DID THIS WEEK/MONTH/YEAR LEAVE YOU WITH?",
        "WHAT LESSON SHOULD YOU HAVE LEARNED BY NOW?",
        "WHAT DATING ADVICE WOULD YOU GIVE YOURSELF?",
        "WHAT TITLE WOULD YOU GIVE THIS CHAPTER IN YOUR LIFE?",
        "WHEN WAS THE LAST TIME YOU FELT MOST YOURSELF?",
        "REMINDER\nLET GO OF YOUR ATTACHMENT TO THE OUTCOME.",
        "WHAT PART OF YOUR LIFE WORKS? WHAT PART OF YOUR LIFE HURTS?",
        "WILDCARD\nPRESS SHUFFLE ON YOUR MUSIC LIBRARY. EXPLAIN THE FIRST SONG THAT COMES UP.",
        "WHAT HAS BEEN YOUR HAPPIEST MEMORY THIS PAST YEAR?",
        "WHAT WOULD YOU NEVER WANT TO CHANGE ABOUT YOURSELF?",
        "WHEN WAS THE LAST TIME YOU WERE ABLE TO USE YOUR PAIN TO HELP SOMEONE ELSE?",
        "ARE YOU MISSING ANYONE RIGHT NOW? DO YOU THINK THEY ARE MISSING YOU?",
        "WHAT DO YOU THINK MY MAIN LOVE LANGUAGE IS?",
        "WHAT IS THE HARDEST TRUTH YOU HAD TO FACE THIS YEAR?",
        "WHAT'S A FEELING YOU'RE UNCOMFORTABLE SHARING WITH ME?",
        "WILDCARD\nSING YOUR FAVORITE SONG LYRICS OFF THE TOP OF YOUR HEAD. BOTH PLAYERS.",
        "A WHAT BROUGHT YOU THE MOST UNEXPECTED JOY RECENTLY?",
        "WHAT WAS THE LESSON FROM YOUR MOST RECENT PAINFUL EXPERIENCE?",
        "I KNOW I'M IN LOVE WHEN ______.",
        "WILDCARD\nDRAW A PICTURE TOGETHER.",
        "WHAT ABOUT ME IS HARDEST FOR YOU TO UNDERSTAND?",
        "WILDCARD\nWHAT IS YOUR FAVORITE MEMORY WE SHARE TOGETHER? BOTH PLAYERS. COMPARE.",
        "HAVE I EVER CHALLENGED YOUR WORLDVIEW? HOW SO?",
        "HAVE YOU CHANGED YOUR MIND ABOUT ANYTHING RECENTLY?",
        "HOW DID YOU GET OVER YOUR FIRST LOVE?",
        "WHAT'S THE BEST LESSON AN EX HAS EVER TAUGHT YOU?",
        "WHAT DO YOU NEED RIGHT NOW, MORE THAN ANYTHING?",
        "WHEN WAS THE LAST TIME YOU FELT LUCKY TO BE YOU?",
        "WHEN DO YOU FEEL MOST OPTIMISTIC? EXPLAIN.",
        "WHAT HAS BEING SINGLE/IN A RELATIONSHIP TAUGHT YOU ABOUT YOURSELF, IF ANYTHING?",
        "WHAT'S BEEN KEEPING YOU SANE LATELY?",
        "HOW WOULD YOU DESCRIBE THE FEELING OF BEING IN LOVE IN ONE WORD?",
        "DO YOU THINK I FALL IN LOVE EASILY? WHY OR A WHY NOT?",
        "WHAT LESSON TOOK YOU THE LONGEST TO UNLEARN?",
        "WHAT DATING ADVICE WOULD YOU GIVE TO YOUR YOUNGER SELF?",
        "HOW OLD DO YOU FEEL, EMOTIONALLY?",
        "WILDCARD\nWRITE DOWN THE THREE MOST IMPORTANT THINGS TO YOU IN A RELATIONSHIP. COMPARE.",
        "WHAT'S THE MOST EMBARRASSING THING THAT'S EVER HAPPENED TO YOU?",
        "WHAT COULD YOU HAVE DONE BETTER IN YOUR PREVIOUS RELATIONSHIP(S)?",
        "WILDCARD\nADMIT A DATING PET PEEVE. COMPARE.",
        "FINISH THE SENTENCE: DATING IS _____.",
        "WHAT DID THE PEOPLE WHO RAISED YOU TEACH YOU ABOUT LOVE?",
        "DESCRIBE YOUR PERFECT DATE.",
        "WILDCARD\nCREATE YOUR OWN QUESTION. ANYTHING. MAKE IT COUNT.",
        "WHAT ARE YOU PASSIONATE ABOUT?",
        "WHAT ARE YOU NOT GIVING ENOUGH TIME TO, CURRENTLY?",
        "WHEN'S THE LAST TIME YOU SURPRISED YOURSELF?",
        "WILDCARD\nTHINK OF A MOVIE THAT ALWAYS MAKES YOU CRY. ON THE COUNT OF 3, SAY YOUR ANSWERS OUT LOUD.",
        "HOW WOULD YOU DESCRIBE YOUR EX IN THREE WORDS? HOW WOULD THEY DESCRIBE YOU?",
        "HOW'S YOUR HEART TODAY, REALLY?",
        "WHAT TYPE OF SOCIAL SITUATION MAKES YOU FEEL MOST AWKWARD?",
        "WHAT TAKES A FRIEND INTO A BEST FRIEND?",
        "WHAT HAVE YOU LET GO OF THIS YEAR THAT'S MADE THE MOST POSITIVE CHANGE?",
        "WHAT QUESTION ARE YOU TRYING TO ANSWER IN YOUR LIFE RIGHT NOW?",
        "WHAT IS THE NICEST THING YOU CAN REMEMBER DOING FOR A FRIEND? PERMISSION TO BRAG.",
        "WHEN WAS THE LAST TIME SOMEONE HAS MADE YOU FEEL SPECIAL ON YOUR BIRTHDAY?",
        "HAS A QUOTE EVER CHANGED YOUR WORLDVIEW?",
        "WILDCARD\nDO YOU NEED ADVICE ON ANYTHING IN YOUR LIFE RIGHT NOW? PERMISSION TO VENT.",
        "WILDCARD\nWRITE DOWN THE THREE MOST IMPORTANT QUALITIES IN A BEST FRIEND. COMPARE.",
        "WHAT'S THE MOST IMPORTANT THING YOU'RE CURRENTLY PUTTING OFF?",
        "WHAT ARE YOU BETTER AT THAN MOST PEOPLE YOU KNOW?",
        "WHAT DO YOU NEED MOST HELP WITH CURRENTLY?",
        "WHAT DO YOU WISH YOU COULD SPEND MORE TIME DOING?",
        "WHAT WAS YOUR ALL-TIME-LOW, AND WHAT HAS IT TAUGHT YOU THE MOST?",
        "WHAT LEAVES YOU THE MOST ENERGIZED, AND WHAT LEAVES YOU THE MOST DRAINED?",
        "WHAT IS YOUR DEFINING CHARACTERISTIC?",
        "WHAT IS THE LAST THING YOUR MOM HAS LIED TO YOU ABOUT?",
        "WHAT HAVE I TOLERATED FROM PEOPLE IN THE PAST THAT I NO LONGER HAVE SPACE FOR?",
        "SOMETHING THAT BROUGHT A SMILE TO MY FACE THIS WEEK WAS ______.",
        "WHAT WAS THE BIGGEST TURNING POINT IN YOUR DATING LIFE?",
        "YOU HURT ME, BUT THANK YOU FOR ______.",
        "WHO IN YOUR LIFE CAN YOU BE YOUR MOST VULNERABLE WITH?",
        "WHICH ONE OF YOUR PARENT'S PERSONALITY TRAITS DO YOU WANT TO KEEP/LET GO OF",
        "DEAR YOUNGER SELF: ______.",
        "WHAT'S YOUR FAVORITE PART OF YOURSELF THAT ISN'T PHYSICAL?",
        "WHAT IS SOMETHING YOU'VE LEARNED ABOUT YOURSELF THIS WEEK?",
        "WHAT WAS THE LESSON IN YOUR MOST RECENT PAINFUL EXPERIENCE?",
        "WHAT'S YOUR FAVORITE SONG LYRIC YOU CAN THINK OF OFF THE TOP OF YOUR HEAD?",
        "IS THERE ANYONE WHO'S CHANGED YOUR LIFE BUT DOESN'T KNOW IT?",
        "WHAT DO YOU NEED TO ACCEPT TODAY?",
        "WHAT'S YOUR MOTHER'S NAME AND THE MOST VALUABLE LESSON SHE'S TAUGHT YOU THUS FAR?",
        "WHAT ARE YOU MOST GRATEFUL FOR IN THIS CURRENT MOMENT?",
        "WHAT HAVE YOU BEEN TAKING FOR GRANTED LATELY?",
        "IF YOU COULD HAVE IT YOUR WAY: WHO WOULD YOU BE WITH? WHERE WOULD YOU BE? AND WHAT WOULD YOU BE DOING?",
        "WHAT DATING ADVICE WOULD YOU GIVE YOUR YOUNGER SELF?",
        "WHAT QUESTION DID THIS YEAR LEAVE YOU WITH?",
        "WHAT ABOUT YOURSELF IS HARDEST TO ADMIT?",
        "WHAT QUESTION ARE YOU TRYING TO ANSWER MOST IN YOUR LIFE RIGHT NOW?",
        "FINISH THE SENTENCES: STRANGERS WOULD DESCRIBE ME AS ______. ONLY I KNOW THAT I AM ______.",
        "HAS A STRANGER EVER CHANGED YOUR LIFE?",
        "WHAT IS THE MOST UNEXPLAINABLE THING THAT'S EVER HAPPENED TO YOU?",
        "DESCRIBE YOUR PERFECT DAY.",
        "WHAT'S BEEN THE BEST COMPLIMENT A STRANGER HAS EVER GIVEN YOU?",
        "WHAT IS A COMPLIMENT YOU WISH YOU RECEIVED MORE FREQUENTLY?",
        "WHAT DO YOU CRAVE MORE OF?",
        "WHAT HAS BEEN YOUR EARLIEST RECOLLECTION OF HAPPINESS?",
        "WHAT ARE YOU MORE AFRAID OF, FAILURE OR SUCCESS? AND WHY?",
        "WHEN WAS THE LAST TIME YOU SURPRISED YOURSELF?",
        "WHAT'S BEEN YOUR HAPPIEST MEMORY THIS PAST YEAR?",
        "DO YOU THINK THE IMAGE YOU HAVE OF YOURSELF MATCHES THE IMAGE PEOPLE SEE YOU AS?",
        "IF YOU HAVE, WHEN WAS THE MOMENT YOU REALIZED YOU WEREN'T INVINCIBLE?",
        "WHAT IS YOUR 1ST LOVE'S NAME AND THE REASON YOU FELL IN LOVE WITH HIM/HER?",
        "WHAT'S YOUR MOTHER'S NAME? AND THE MOST BEAUTIFUL THING ABOUT HER?",
        "IF YOU COULD GET TO KNOW SOMEONE IN YOUR LIFE ON A DEEPER LEVEL, WHO WOULD IT BE AND WHY?",
        "ARE YOU MISSING ANYONE RIGHT NOW? DO YOU THINK THEY ARE MISSING YOU TOO?",
        "WHAT IS A DREAM YOU'VE LET GO OF?",
        "WHAT IS THE LAST THING YOU LIED TO YOUR MOTHER ABOUT?",
        "HAVE YOU EVER TOLD SOMEONE I LOVE YOU BUT DIDN'T MEAN IT? IF SO, WHY?",
        "HOW CAN YOU BECOME A BETTER PERSON?",
        "WILDCARD\nWHO'S BEEN ON YOUR MIND LATELY? SEND THEM A TEXT LETTING THEM KNOW YOU'RE THINKING OF THEM.",
        "IF YOU COULD RELIVE YESTERDAY, WHAT WOULD YOU DO DO DIFFERENTLY?",
        "WHAT SONG REMINDS YOU OF YOUR FIRST HEARTBREAK?",
        "WHAT'S A PIECE OF ADVICE THAT REALLY STUCK WITH YOU?",
        "WHAT'S BEEN YOUR HARDEST GOODBYE?",
        "WHAT DO YOU NOW UNDERSTAND ABOUT LOVE THAT YOU DIDN'T BEFORE?",
        "A QUESTION YOU'RE TOO AFRAID TO ASK:",
        "WHAT TITLE WOULD YOU GIVE THIS CHAPTER OF YOUR LIFE?",
      ],
      levelThree: [
        "WHAT ABOUT ME SURPRISED YOU?",
        "WHAT DO YOU THINK MY SUPERPOWER IS?",
        "WHAT DO YOU THINK OUR MOST IMPORTANT SIMILARITIES ARE?",
        "WHAT DO YOU THINK IS ONE THING I COULD DO THAT WOULD DRASTICALLY IMPROVE MY LIFE?",
        "WHAT WOULD BE THE PERFECT GIFT FOR ME?",
        "HOW WOULD YOU DESCRIBE ME TO A STRANGER?",
        "WHAT DO I NEED TO HEAR RIGHT NOW?",
        "BASED ON WHAT YOU'VE LEARNED ABOUT ME, DOES MY SOCIAL MEDIA PORTRAY ME ACCURATELY?",
        "WHAT IS A LESSON YOU WILL TAKE AWAY FROM OUR CONVERSATION?",
        "WHAT CAN I HELP YOU WITH?",
        "WHAT DO YOU THINK DO I FEAR THE MOST?",
        "WHERE AM I MOST QUALIFIED TO GIVE ADVICE ABOUT?",
        "WHAT ABOUT ME IS THE HARDEST FOR YOU TO UNDERSTAND?",
        "IF WE WERE A BAND WHAT WOULD BE OUR NAME?",
        "ADMIT SOMETHING.",
        "WHAT PARTS OF YOURSELF DO YOU SEE IN ME?",
        "HOW DOES ONE EARN YOUR VULNERABILITY?",
        "DARE YOUR PARTNER TO DO SOMETHING OUT OF THEIR COMFORT ZONE NEXT WEEK.",
        "WHAT DO YOU RECOMMEND I SHOULD LET GO OF?",
        "WHAT HAS THIS CONVERSATION TAUGHT YOU ABOUT YOURSELF?",
        "WHAT DO YOU THINK MY DEFINING CHARACTERISTIC IS?",
        "WHAT QUESTION WERE YOU MOST AFRAID TO ANSWER?",
        "WHY DO YOU THINK WE MET?",
        "WHEN THIS GAME IS OVER, WHAT WILL BE SOMETHING YOU WILL REMEMBER ABOUT ME?",
        "WHAT DO YOU THINK MY WEAKNESS IS?",
        "HOW DO OUR PERSONALITIES COMPLEMENT EACH OTHER?",
        "WHAT DO YOU THINK I SHOULD KNOW ABOUT MYSELF THAT PERHAPS I'M UNAWARE OF?",
        "WHAT WOULD MAKE YOU FEEL CLOSER TO ME?",
        "WHAT DO YOU ADMIRE MOST ABOUT ME?",
        "IN ONE WORD, DESCRIBE HOW YOU FEEL RIGHT NOW.",
        "DO YOU BELIEVE EVERYONE HAS A CALLING? IF SO, DO YOU THINK I'VE FOUND MINE?",
        "WHAT CAN WE CREATE TOGETHER?",
        "WHAT ANSWER OF MINE MADE YOU LIGHT UP?",
        "WHAT'S THE MOST ATTRACTIVE QUALITY ABOUT ME THAT ISN'T PHYSICAL?",
        "IF YOU MADE ME A PLAYLIST, WHAT 3 SONGS WOULD BE ON IT? EXPLAIN.",
        "IS THERE ANYONE WHO HAS CHANGED YOUR LIFE BUT DOESN'T KNOW IT?",
        "HOW CAN I BE THERE FOR YOU?",
        "WHAT DO YOU THINK MY STRENGTH IS?",
        "WHEN WAS THE LAST TIME YOU SURPRISED YOURSELF?",
        "WHAT WOULD YOU LIKE TO LEARN FROM ME?",
        "WHAT CAN I TEACH YOU?",
        "WHO DO I REMIND YOU OF?",
        "IN A WORD, HOW WOULD YOU DESCRIBE OUR CONVERSATION?",
        "YOU HURT ME, BUT I THANK YOU FOR _____.",
        "DEAR YOUNGER SELF: ______.",
        "WHAT IS SOMETHING YOU'VE LEARNED ABOUT YOURSELF THIS WEEK?",
        "WHAT WOULD YOUR YOUNGER SELF NOT BELIEVE ABOUT YOUR LIFE TODAY?",
        "WHAT IS ONE THING YOU THINK I CAN DO THAT WOULD DRAMATICALLY IMPROVE MY LIFE?",
        "DO YOU THINK THE IMAGE YOU HAVE OF YOURSELF MATCHES THE IMAGE PEOPLE SEE YOU AS?",
        "HOW CAN I ADD 1% MORE HAPPINESS TO YOUR LIFE?",
        "WHAT QUESTION WERE YOU MOST AFRAID TO ANSWER, AND WHAT ANSWER WERE YOU MOST AFRAID TO HEAR?",
        "BASED ON WHAT YOU LEARNED ABOUT ME, DOES MY SOCIAL MEDIA ACCURATELY REFLECT WHO I AM? WHY OR WHY NOT?",
        "WHEN THIS GAME IS OVER, WHAT WILL YOU REMEMBER ABOUT ME?",
        "ARE ANY OF YOUR INSECURITIES HURTING SOMEONE ELSE BY ACCIDENT?",
        "DEAR PEOPLE WHO RAISED ME, THANK YOU FOR ______.",
        "WHAT PART OF MY PERSONALITY WASN'T SHOWCASED WHEN YOU FIRST MET ME?",
        "WILDCARD\nWRITE A MOTIVATIONAL REMINDER TO YOUR PARTNER. FOLD AND EXCHANGE. OPEN WHEN NEEDED.",
        "WILDCARD\nBOTH PLAYERS WRITE DOWN YOUR NUMBER ONE GOAL FOR THE NEXT MONTH. EXCHANGE.",
        "WILDCARD\nSHARE A MEANINGFUL HUG WITH YOUR PARTNER. 1 MINUTE.",
        "HOW CAN I BEST BE THERE FOR YOU DURING THIS CHAPTER IN YOUR LIFE?",
        "BASED ON WHAT YOU'VE LEARNED ABOUT ME, DO YOU HAVE ANY NETFLIX RECOMMENDATIONS?",
        "WHAT CAN YOU BE KINDER TOWARDS YOURSELF FOR TODAY?",
        "WHAT'S ONE SMALL THING YOU CAN DO TO BE A BETTER PERSON IN 2019?",
        "WHAT ABOUT ME MOST SURPRISED YOU?",
        "BASED ON WHAT YOU LEARNED ABOUT ME, WHAT BOOK WOULD YOU RECOMMEND I READ?",
        "WHAT ABOUT ME IS HARDEST FOR YOU TO UNDERSTAND?",
        "WHAT AM I MOST QUALIFIED TO GIVE ADVICE ABOUT?",
        "IF WE WERE IN A BAND, WHAT WOULD OUR NAME BE?",
        "WHEN IN THIS GAME DID YOU FEEL MOST CONNECTED TO ME?",
        "HOW DOES ONE EARN YOUR VULNERABILITY? HAVE I EARNED IT? HOW CAN I EARN MORE?",
        "WHAT DO YOU THINK OUR MOST IMPORTANT SIMILARITY IS?",
        "IN ONE WORD, HOW WOULD YOU DESCRIBE OUR CONVERSATION?",
        "WHAT DO YOU THINK I FEAR THE MOST?",
        "WHAT DO YOU RECOMMEND I LET GO OF, IF ANYTHING?",
        "WHAT DO YOU THINK MY DEFINING CHARACTERISTIC IS?",
      ],
      levelOneIndex: 0,
      levelTwoIndex: 0,
      levelThreeIndex: 0,
      levelOneCompleted: false,
      levelTwoCompleted: false,
      levelThreeCompleted: false,
      activeLevel: "levelOne",
      currentCard: "",
      cardLevel: "LEVEL 1: PERCEPTION",
      finalMessage: "YOU HAVE FINISHED THIS LEVEL!",
      lastCard:
        "FINAL CARD\nEACH PLAYER WRITE A MESSAGE TO THE OTHER. FOLD AND EXCHANGE.OPEN ONLY ONCE YOU TWO HAVE PARTED.",
      digDeeperVisible: false,
      cardNumber: 0,
      levelLength: 0,
    };
  },
  created() {
    this.shuffleArray(this.levelOne);
    this.shuffleArray(this.levelTwo);
    this.shuffleArray(this.levelThree);
    this.currentCard = this.getCurrentCard();
    this.cardNumber = this.getCardNumber();
    this.levelLength = this.getLevelLength();
  },
  methods: {
    nextCard() {
      if (this.activeLevel === "levelOne") {
        if (this.levelOneCompleted == false) {
          this.levelOneIndex++;
        }
        if (this.levelOneIndex >= this.levelOne.length) {
          this.digDeeperVisible = false;
          this.currentCard = this.finalMessage;
          this.levelOneCompleted = true;
          return;
        }
      } else if (this.activeLevel === "levelTwo") {
        if (this.levelTwoCompleted == false) {
          this.levelTwoIndex++;
        }
        if (this.levelTwoIndex >= this.levelTwo.length) {
          this.digDeeperVisible = false;
          this.currentCard = this.finalMessage;
          this.levelTwoCompleted = true;
          return;
        }
      } else if (this.activeLevel === "levelThree") {
        if (this.levelThreeCompleted == false) {
          this.levelThreeIndex++;
        }
        if (this.levelThreeIndex >= this.levelThree.length) {
          this.digDeeperVisible = false;
          this.levelThreeCompleted = true;
          this.currentCard = this.lastCard;
          return;
        }
      }
      this.digDeeperVisible = false;
      this.currentCard = this.getCurrentCard();
      this.cardNumber = this.getCardNumber();
      this.levelLength = this.getLevelLength();
    },
    previousCard() {
      if (this.activeLevel === "levelOne") {
        if (this.levelOneIndex === 0) {
          this.digDeeperVisible = false;
          return;
        } else {
          this.levelOneCompleted = false;
          this.levelOneIndex--;
        }
      } else if (this.activeLevel === "levelTwo") {
        if (this.levelTwoIndex === 0) {
          this.digDeeperVisible = false;
          return;
        } else {
          this.levelTwoCompleted = false;
          this.levelTwoIndex--;
        }
      } else if (this.activeLevel === "levelThree") {
        if (this.levelThreeIndex === 0) {
          this.digDeeperVisible = false;
          return;
        } else {
          this.levelThreeCompleted = false;
          this.levelThreeIndex--;
        }
      }
      this.digDeeperVisible = false;
      this.currentCard = this.getCurrentCard();
      this.cardNumber = this.getCardNumber();
      this.levelLength = this.getLevelLength();
    },
    changeLevel(newLevel) {
      this.activeLevel = newLevel;
      this.currentCard = this.getCurrentCard();
      this.cardLevel = this.getCurrentLevel();
      this.cardNumber = this.getCardNumber();
      this.levelLength = this.getLevelLength();
      this.digDeeperVisible = false;
      if (this.levelOneCompleted === true && this.activeLevel === "levelOne") {
        return (this.currentCard = this.finalMessage);
      } else if (
        this.levelTwoCompleted === true &&
        this.activeLevel === "levelTwo"
      ) {
        return (this.currentCard = this.finalMessage);
      } else if (
        this.levelThreeCompleted === true &&
        this.activeLevel === "levelThree"
      ) {
        return (this.currentCard = this.lastCard);
      }
    },
    getCurrentCard() {
      if (
        this.activeLevel === "levelOne" &&
        this.levelOneIndex <= this.levelOne.length
      ) {
        return this.levelOne[this.levelOneIndex];
      }
      if (
        this.activeLevel === "levelTwo" &&
        this.levelTwoIndex <= this.levelTwo.length
      ) {
        return this.levelTwo[this.levelTwoIndex];
      }
      if (
        this.activeLevel === "levelThree" &&
        this.levelThreeIndex <= this.levelThree.length
      ) {
        return this.levelThree[this.levelThreeIndex];
      }
      this.cardNumber = this.getCardNumber();
      this.levelLength = this.getLevelLength();
    },
    getCurrentLevel() {
      if (this.activeLevel === "levelOne") {
        return (this.cardLevel = "LEVEL 1: PERCEPTION");
      } else if (this.activeLevel === "levelTwo") {
        return (this.cardLevel = "LEVEL 2: CONNECTION");
      } else if (this.activeLevel === "levelThree") {
        if (this.levelThreeIndex >= this.levelThree.length) {
          return (this.cardLevel = "FINAL CARD");
        } else {
          return (this.cardLevel = "LEVEL 3: REFLECTION");
        }
      }
      return this.cardLevel;
    },
    showDigDeeperCard() {
      if (this.digDeeperVisible == false) {
        this.digDeeperVisible = true;
      } else {
        this.digDeeperVisible = false;
      }
      if (this.levelOneCompleted === true && this.activeLevel === "levelOne") {
        this.digDeeperVisible = false;
      }
      if (this.levelTwoCompleted === true && this.activeLevel === "levelTwo") {
        this.digDeeperVisible = false;
      }
      if (
        this.levelThreeCompleted === true &&
        this.activeLevel === "levelThree"
      ) {
        this.digDeeperVisible = false;
      }
    },
    getCardNumber() {
      if (this.activeLevel === "levelOne") {
        this.cardNumber = this.levelOneIndex + 1;
      } else if (this.activeLevel === "levelTwo") {
        this.cardNumber = this.levelTwoIndex + 1;
      } else if (this.activeLevel === "levelThree") {
        this.cardNumber = this.levelThreeIndex + 1;
      }
      return this.cardNumber;
    },
    getLevelLength() {
      if (this.activeLevel === "levelOne") {
        this.levelLength = this.levelOne.length;
      } else if (this.activeLevel === "levelTwo") {
        this.levelLength = this.levelTwo.length;
      } else if (this.activeLevel === "levelThree") {
        this.levelLength = this.levelThree.length;
      }
      return this.levelLength;
    },
    shuffleArray(array) {
      // Fisher-Yates shuffle algorithm
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    },
  },
};
</script>
