<template>
  <main class="overscroll-none overflow-hidden">
    <header>
      <PageTitle />
    </header>
    <div class="h-full w-full my-24 space-y-12">
      <div class="flex justify-center gap-4 mx-4">
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
      <div class="flex justify-center align-middle">
        <Card class="" :question="currentCard" :level="cardLevel" />
      </div>
      <div class="relative flex justify-center align-middle gap-4 px-4">
        <DigDeeperButton class="" @click="" />
        <NextCardButton class="" @click="nextCard()" />
      </div>
    </div>
  </main>
  <footer class="flex justify-center absolute inset-x-0 -bottom-4 text-xs">
    Hecho con ❤️ por Oscar Treviño.
  </footer>
</template>
<script>
import Card from "./components/Card.vue";
import PageTitle from "./components/PageTitle.vue";
import LevelButton from "./components/LevelButton.vue";
import NextCardButton from "./components/NextCardButton.vue";
import DigDeeperButton from "./components/DigDeeperButton.vue";

export default {
  name: "App",
  components: {
    Card,
    PageTitle,
    LevelButton,
    NextCardButton,
    DigDeeperButton,
  },
  data() {
    return {
      levelOne: ["Item 1", "Item 2", "Item 3", "Item 4"],
      levelTwo: ["Item 1", "Item 2", "Item 3", "Item 4"],
      levelThree: ["Item 1", "Item 2", "Item 3", "Item 4"],
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
        "EACH PLAYER WRITE A MESSAGE TO THE OTHER. FOLD AND EXCHANGE. OPEN ONLY ONCE YOU TWO HAVE PARTED.",
    };
  },
  created() {
    this.shuffleArray(this.levelOne);
    this.shuffleArray(this.levelTwo);
    this.shuffleArray(this.levelThree);
    this.currentCard = this.getCurrentCard();
  },
  methods: {
    nextCard() {
      if (this.activeLevel === "levelOne") {
        this.levelOneIndex++;
        if (this.levelOneIndex >= this.levelOne.length) {
          this.currentCard = this.finalMessage;
          this.levelOneCompleted = true;
          return;
        }
      } else if (this.activeLevel === "levelTwo") {
        this.levelTwoIndex++;
        if (this.levelTwoIndex >= this.levelTwo.length) {
          this.currentCard = this.finalMessage;
          this.levelTwoCompleted = true;
          return;
        }
      } else if (this.activeLevel === "levelThree") {
        this.levelThreeIndex++;
        if (this.levelThreeIndex >= this.levelThree.length) {
          this.currentCard = this.lastCard;
          this.levelThreeCompleted = true;
          return;
        }
      }
      this.currentCard = this.getCurrentCard();
    },
    changeLevel(newLevel) {
      this.activeLevel = newLevel;
      this.currentCard = this.getCurrentCard();
      this.cardLevel = this.getCurrentLevel();
      if (this.levelOneCompleted === true && this.activeLevel === "levelOne") {
        return (this.currentCard = this.finalMessage);
      }
      if (this.levelTwoCompleted === true && this.activeLevel === "levelTwo") {
        return (this.currentCard = this.finalMessage);
      }
      if (
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
    },
    getCurrentLevel() {
      if (this.activeLevel === "levelOne") {
        return (this.cardLevel = "LEVEL 1: PERCEPTION");
      } else if (this.activeLevel === "levelTwo") {
        return (this.cardLevel = "LEVEL 2: CONNECTION");
      } else if (this.activeLevel === "levelThree") {
        return (this.cardLevel = "LEVEL 3: REFLECTION");
      }
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
