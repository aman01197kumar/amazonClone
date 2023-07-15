import styles from "./ManageProfile.module.scss";

function ManageProfile() {
  const left_section = ["create a list", "find a list or registry"];
  const right_section = [
    "accounts",
    "orders",
    "recommondations",
    "browser history",
    "watchlists",
    "video purchases & Rental",
    "Kindle unlimited",
    "content & devices",
    "Subscribe & save items",
    "Memberships & Subscription",
    "Music Library",
    "Switch Accounts",
    "Sign out",
  ];
  return (
    <div className={styles.ManageProfile__profile__container}>
      <div className={styles.ManageProfile__profile__wrapper}>
        <div className={styles.ManageProfile__profile__wrapper__profile}>
          Who's shopping?Select your profile
        </div>
        <div className={styles.ManageProfile__profile__wrapper__manage}>
          Manage profile
        </div>
      </div>
      <div className={styles.ManageProfile__profile__lower__section__wrapper}>
        <section className={styles.ManageProfile__profile__left__section}>
          <div className={styles.ManageProfile__profile__section__header}>
            Your Lists
          </div>
          <div className={styles.ManageProfile__profile__section__content}>
            {left_section.map((item) => {
              return (
                <div
                  className={
                    styles.ManageProfile__profile__section__item__container
                  }
                >
                  {item}
                </div>
              );
            })}
          </div>
        </section>
        <section className={styles.ManageProfile__profile__right__section}>
          <div className={styles.ManageProfile__profile__section__header}>
            Your Account
          </div>
          <div className={styles.ManageProfile__profile__section__content}>
            {right_section.map((item) => {
              return (
                <div
                  className={
                    styles.ManageProfile__profile__section__item__container
                  }
                >
                  {item}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default ManageProfile;
