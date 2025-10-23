<script lang="ts">
  import { enhance } from "$app/forms";
  import HeadSVG from "./HeadSVG.svelte";

  let status: "idle" | "sending" | "success" | "error" = "idle";
  let errors: Record<string, string> = {};

  // local reactive flags for UI
  let attendingLocal: "yes" | "no" = "yes";
  let plusOneLocal: "yes" | "no" = "no";

  function enhancer() {
    status = "sending";
    return async ({ result, update }: any) => {
      if (result.type === "success") {
        status = "success";
        errors = {};
      } else if (result.type === "failure") {
        status = "error";
        errors = result.data?.errors ?? {};
      } else {
        status = result.type === "redirect" ? "success" : "error";
      }
      await update({ reset: result.type === "success" });
      if (result.type === "success") {
        attendingLocal = "yes";
        plusOneLocal = "no";
      }
    };
  }

  function onSelectAttending(value: "yes" | "no") {
    attendingLocal = value;
    if (value === "no") plusOneLocal = "no";
  }

  function onSelectPlusOne(value: "yes" | "no") {
    plusOneLocal = value;
  }
</script>

<section id="rsvp">
  <div class="footer left">
    <HeadSVG width="8rem" />
    <div class="img-container">
      <img src="/images/footer-02.webp" alt="" class="img-parallax" />
    </div>
    <div>
      <svg
        width="75"
        height="25"
        viewBox="0 0 75 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M38.9976 0C39.4963 0 40.1197 0.131502 40.8677 0.394506C41.0174 0.452951 41.1819 0.423729 41.3615 0.306838C41.541 0.189947 41.7305 0.131502 41.93 0.131502C42.1394 0.131502 42.294 0.224041 42.3938 0.409117C42.4337 0.43834 42.4486 0.54062 42.4387 0.715956C42.4287 0.939996 42.5484 1.58777 42.7977 2.65926L43.1718 4.2519C43.2715 4.6805 43.3214 4.95324 43.3214 5.07013C43.3214 5.12858 43.1917 5.22112 42.9324 5.34775C42.683 5.46464 42.5384 5.48899 42.4985 5.42081L41.5111 3.30216C41.0124 2.44496 40.2743 2.01636 39.2968 2.01636C38.3293 2.01636 37.5863 2.26963 37.0676 2.77615C36.549 3.27294 36.2896 3.96454 36.2896 4.85096C36.2896 5.34775 36.4692 5.81044 36.8282 6.23904C37.5763 7.12546 38.5937 7.56867 39.8803 7.56867H41.6756C41.8053 7.56867 41.8701 7.70505 41.8701 7.97779V9.1467C41.8701 9.41944 41.8053 9.55581 41.6756 9.55581H39.8803C38.7133 9.55581 37.6062 9.92597 36.5589 10.6663C34.7337 11.9618 33.8161 13.6811 33.8061 15.8241C33.8061 16.7008 34.0305 17.5531 34.4794 18.3811C34.9282 19.1993 35.5067 19.9055 36.2148 20.4997C36.923 21.0842 37.7309 21.5566 38.6385 21.917C39.5562 22.2677 40.389 22.443 41.137 22.443C41.8851 22.443 42.5185 22.3651 43.0371 22.2092C43.5558 22.0534 43.9946 21.8488 44.3537 21.5956C44.7227 21.3423 45.0569 21.0452 45.3561 20.7043C45.8648 20.1198 46.2388 19.4672 46.4782 18.7463C46.7275 18.0158 46.8472 17.4459 46.8372 17.0368C46.8372 16.618 46.6477 16.3891 46.2687 16.3501H41.2118C40.0848 16.3501 39.3916 16.4475 39.1323 16.6423C38.8829 16.8274 38.7034 16.993 38.5937 17.1391C38.4939 17.2852 38.4141 17.3583 38.3543 17.3583C38.3044 17.3583 38.2047 17.3339 38.0551 17.2852C37.9154 17.2365 37.8456 17.1927 37.8456 17.1537C37.8456 17.1147 37.9154 16.9443 38.0551 16.6423L38.5338 15.5611C38.7133 15.152 38.838 14.8305 38.9078 14.5967C38.9777 14.3532 39.0624 14.2168 39.1622 14.1876H53.0461C53.7642 14.1876 54.3627 13.9538 54.8414 13.4863C54.8813 13.4473 54.9312 13.3645 54.991 13.2379C55.0608 13.1112 55.1855 13.0479 55.3651 13.0479C55.5546 13.0479 55.6493 13.1161 55.6493 13.2525C55.4798 14.3922 55.2653 15.3029 55.006 15.9848C54.9162 16.2088 54.7367 16.3306 54.4674 16.3501C53.8689 16.3891 53.0561 16.3842 52.0287 16.3355C51.0014 16.277 50.2234 16.277 49.6948 16.3355C49.1662 16.3939 48.9019 16.5741 48.9019 16.8761C48.9019 18.2301 48.5079 19.6328 47.7199 21.0842C46.3036 23.6947 43.9098 25 40.5386 25C39.4714 25 38.3742 24.7857 37.2472 24.3571C36.1201 23.9285 35.1376 23.3343 34.2998 22.5745C33.472 21.8147 32.8137 20.8796 32.325 19.7691C31.8362 18.6489 31.5919 17.5677 31.5919 16.5254C31.5919 15.4734 31.6916 14.5967 31.8911 13.8954C32.2501 12.6291 32.8137 11.5965 33.5817 10.7978C34.3497 9.99903 35.2324 9.26846 36.2298 8.60608V8.51841C35.3122 7.81707 34.7237 7.21313 34.4644 6.7066C34.2051 6.19034 34.0754 5.5864 34.0754 4.8948C34.0754 3.44341 34.5392 2.26476 35.4668 1.35885C36.4044 0.452952 37.5813 0 38.9976 0Z"
          fill="white"
        />
        <path
          d="M53.8899 21.917C53.8899 22.6671 54.1093 23.2564 54.5482 23.685C54.5881 23.7239 54.6728 23.7726 54.8025 23.8311C54.9322 23.8895 54.997 24.0113 54.997 24.1964C54.997 24.3815 54.9322 24.474 54.8025 24.474H49.985C49.8554 24.474 49.7905 24.3912 49.7905 24.2256C49.7905 24.0503 49.8105 23.948 49.8504 23.9188C49.9003 23.8798 49.9651 23.8457 50.0449 23.8165C50.1247 23.7775 50.1895 23.7337 50.2394 23.685C50.7381 23.1979 50.9874 22.6086 50.9874 21.917V17.367H53.8899V21.917Z"
          fill="white"
        />
        <path
          d="M53.8151 0.540619C53.9048 0.540619 53.9896 0.579583 54.0694 0.65751L70.7959 17.9866H70.9007V3.0976C70.9007 2.39626 70.6563 1.80694 70.1676 1.32963C70.1277 1.29067 70.0429 1.24196 69.9132 1.18352C69.7836 1.12507 69.7187 1.00331 69.7187 0.818235C69.7187 0.633158 69.7836 0.540619 69.9132 0.540619L74.8055 0.540619C74.9352 0.540619 75 0.628288 75 0.803624C75 0.969219 74.9751 1.0715 74.9252 1.11046C74.8853 1.13968 74.8255 1.17378 74.7457 1.21274C74.6659 1.24196 74.5611 1.31989 74.4315 1.44652C74.3018 1.57315 74.1622 1.79719 74.0126 2.11864C73.8729 2.44009 73.8031 2.76641 73.8031 3.0976V23.6996C73.8031 24.06 73.7532 24.2792 73.6535 24.3571C73.5637 24.435 73.4141 24.474 73.2047 24.474C72.9952 24.474 72.8257 24.4155 72.696 24.2987L53.8899 4.80713C53.8899 4.80713 53.8151 10.6341 53.8899 12.1303C53.9452 13.236 50.9874 12.8784 50.9874 12.8784V3.0976C50.9874 2.37678 50.753 1.78745 50.2843 1.32963C50.2444 1.29067 50.1596 1.24196 50.0299 1.18352C49.9003 1.12507 49.8354 1.00331 49.8354 0.818235C49.8354 0.633158 49.9003 0.540619 50.0299 0.540619L53.8151 0.540619Z"
          fill="white"
        />
        <path
          d="M5.61041 0.160725C5.74008 0.160725 5.80491 0.248393 5.80491 0.423729C5.80491 0.589324 5.77997 0.691603 5.7301 0.730567C5.69021 0.75979 5.63036 0.793883 5.55057 0.832846C5.47078 0.862069 5.40594 0.901033 5.35607 0.949737C4.8075 1.48549 4.6529 2.08942 4.89228 2.76154L12.4776 19.2724H12.5823L17.3526 8.96259C16.6919 7.50881 15.6975 5.31992 14.3686 2.39626C13.9797 1.50984 13.5957 0.97896 13.2166 0.803624C13.087 0.745178 13.0221 0.623417 13.0221 0.43834C13.0221 0.253263 13.087 0.160725 13.2166 0.160725L18.6326 0.160725C18.7622 0.160725 18.8271 0.248393 18.8271 0.423729C18.8271 0.589324 18.8021 0.691603 18.7522 0.730567C18.7123 0.75979 18.6525 0.793883 18.5727 0.832846C18.4929 0.862069 18.4281 0.901033 18.3782 0.949737C17.8296 1.48549 17.675 2.08942 17.9144 2.76154L25.4997 19.2724H25.6044C25.6044 19.2724 29.1083 8.76388 32.5554 9.13793C30.2573 11.7563 30.3435 13.5399 29.1083 16.5883C27.8732 19.6366 26.8352 22.0803 25.9934 23.9188C25.9435 24.0357 25.6992 24.0941 25.2603 24.0941C24.8215 24.0941 24.5721 24.0357 24.5123 23.9188C24.5123 23.9188 23.7592 22.4089 22.2531 19.3892L18.762 12.0237C17.2197 15.5059 13.7393 22.2412 12.9713 23.9188C12.9214 24.0357 12.677 24.0941 12.2382 24.0941C11.7993 24.0941 11.55 24.0357 11.4901 23.9188C11.4901 23.9188 10.7371 22.4089 9.231 19.3892L5.31119 11.1192C5.31119 11.1192 3.98963 8.21157 1.3465 2.39626C0.95751 1.50984 0.573509 0.97896 0.194494 0.803624C0.0648314 0.745178 0 0.623417 0 0.43834C0 0.253263 0.0648314 0.160725 0.194494 0.160725L5.61041 0.160725Z"
          fill="white"
        />
      </svg>
    </div>
  </div>
  <div class="footer right">
    <div>
      <span class="script">Celebrate</span>
      <h2>With us</h2>
    </div>
    <form method="POST" use:enhance={enhancer} class="rsvp-form">
      <!-- Name -->
      <label class="field">
        <span class="label">what's your name?</span>
        <input name="name" type="text" required placeholder="Your name" />
        {#if errors.name}
          <p class="error">{errors.name}</p>
        {/if}
      </label>

      <!-- Attendance -->
      <fieldset class="pill-group">
        <legend>Will we see you there?</legend>

        <label class="pill">
          <input
            type="radio"
            name="attending"
            value="yes"
            required
            checked
            on:change={() => onSelectAttending("yes")}
          />
          <span>Yes</span>
        </label>

        <label class="pill">
          <input
            type="radio"
            name="attending"
            value="no"
            on:change={() => onSelectAttending("no")}
          />
          <span>No</span>
        </label>

        {#if errors.attending}
          <p class="error">{errors.attending}</p>
        {/if}
      </fieldset>

      <!-- Plus one -->
      <fieldset class="pill-group">
        <legend>Will you be bringing a plus-one?</legend>

        <label class="pill">
          <input
            type="radio"
            name="plusOne"
            value="yes"
            on:change={() => onSelectPlusOne("yes")}
          />
          <span>Yes</span>
        </label>

        <label class="pill">
          <input
            type="radio"
            name="plusOne"
            value="no"
            checked
            on:change={() => onSelectPlusOne("no")}
          />
          <span>No</span>
        </label>

        {#if errors.plusOne}
          <p class="error">{errors.plusOne}</p>
        {/if}
      </fieldset>

      <div class="button-wrapper">
        <svg
          width="16"
          height="100%"
          viewBox="0 0 16 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="8" height="8" fill="currentColor" />
          <rect y="16" width="8" height="8" fill="currentColor" />
          <rect y="32" width="8" height="8" fill="currentColor" />
          <rect x="8" y="8" width="8" height="8" fill="currentColor" />
          <rect x="8" y="24" width="8" height="8" fill="currentColor" />
          <rect x="8" y="40" width="8" height="8" fill="currentColor" />
          <path d="M16 0V48H0V0H16ZM1 47H15V1H1V47Z" fill="currentColor" />
        </svg>

        <button type="submit" class="btn" disabled={status === "sending"}>
          {status === "sending" ? "Submitting…" : "Submit RSVP"}
        </button>
        <svg
          width="16"
          height="100%"
          viewBox="0 0 16 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="8" height="8" fill="currentColor" />
          <rect y="16" width="8" height="8" fill="currentColor" />
          <rect y="32" width="8" height="8" fill="currentColor" />
          <rect x="8" y="8" width="8" height="8" fill="currentColor" />
          <rect x="8" y="24" width="8" height="8" fill="currentColor" />
          <rect x="8" y="40" width="8" height="8" fill="currentColor" />
          <path d="M16 0V48H0V0H16ZM1 47H15V1H1V47Z" fill="currentColor" />
        </svg>
      </div>
    </form>

    {#if status === "success"}
      <p class="success">Thanks for confirming your attendance!</p>
    {:else if status === "error"}
      <p class="error">❌ Oops, something went wrong.</p>
    {/if}
    <span style="font-size: .75rem;"
      >(C) 2025
      <br />WEBSITE BY
      <a href="https://www.sandikalastudio.com" target="_blank"
        >SANDIKALA STUDIO</a
      >
    </span>
  </div>
</section>

<style scoped>
  #rsvp {
    position: relative;
    display: flex;
    width: 100%;
    z-index: 1;
    height: 100vh;
  }

  .img-container {
    width: 15rem;
    aspect-ratio: 1 / 1;
    border: 0.5rem solid white;
    margin: 4rem;
    overflow: hidden;
  }

  .img-parallax {
    width: 100%;
    height: 120%;
    object-fit: cover;
  }

  .footer {
    text-align: center;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
  }

  .footer.right {
    background-color: #0f5ad0;
  }

  .footer.left {
    background-image: url("/images/footer-01.webp");
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .rsvp-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    margin: 5rem 0;
  }

  .field {
    display: grid;
    gap: 0.5rem;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  input[type="text"] {
    padding: 0 1rem;
    font-size: 1rem;
    color: white;
    text-align: center;
    background-color: transparent;
    border: #0f5ad0 1px solid;
    font-family: "Della Respira";
    text-transform: uppercase;
    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease;
  }

  input[type="text"]:focus {
    border-color: white;
    outline: none;
  }

  input[type="text"]::placeholder {
    color: white; /* blue */
    opacity: 0.5;
  }

  fieldset {
    border: none;
    padding: 0;
    margin: 0;
  }
  label,
  legend {
    font-family: "ABC Diatype Mono";
    font-weight: 300;
    text-transform: uppercase;
    font-size: 0.825rem;
    text-align: center;
  }

  .pill-group {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
  }

  .pill input[type="radio"] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    pointer-events: none;
  }

  .pill {
    display: inline-flex;
    align-items: center;
    margin-top: 0.5rem;
    cursor: pointer;
    user-select: none;
    font-family: "Della Respira";
    text-transform: uppercase;
  }

  .pill span {
    display: inline-block;
    padding: 0.5rem 0.75rem;
    color: white;
    border-radius: 9999px;
    font-weight: 600;
    line-height: 1;
    transition:
      background 0.2s ease,
      color 0.2s ease,
      box-shadow 0.2s ease,
      border-color 0.2s ease;
  }

  .pill input[type="radio"]:checked + span {
    border: 1px solid white;
    color: #fff;
  }

  .error {
    color: rgb(253, 253, 253);
    font-size: 0.9rem;
  }
  .success {
    color: rgb(255, 255, 255);
    font-size: 0.95rem;
    margin-top: 1rem;
  }

  .button-wrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .btn {
    display: inline-block;
    font-family: "Della Respira";
    padding: 1rem 2rem;
    border: 1px solid white;
    color: white;
    background-color: transparent;
    text-transform: uppercase;
    text-decoration: none;
    transition: all 0.2s ease;
  }

  .btn:hover {
    background-color: white;
    color: #0f5ad0;
  }

  @media (max-width: 768px) {
    .btn {
      padding: 0.75rem 1.5rem;
    }
    #rsvp {
      flex-direction: column-reverse;
      height: auto;
    }
    .footer {
      width: 100%;
      padding: 4rem 0;
      min-height: 100vh;
      justify-content: space-around;
    }
  }
</style>
