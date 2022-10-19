import React from "react"
import Title from "../../utils/Title/Title"
import * as styles from "./prepSection.module.scss"

const PrepSection = () => {
  return (
    <section className={styles.prepSection}>
      <Title type="pink">Priprema za prijemni 2023</Title>
      <p style={{ marginBottom: "2rem" }}>
        Edukativni centar Binary Bioskop organizuje online pripreme za prijemni
        ispit iz matematke za upis na FON 2023/2024. Celokupnu pripremu je,
        putem naše e-learning platforme, moguće pohađati od kuće, a u cilju
        praćenja napretka svih polaznika, koristićemo i kanale komunikacije kao
        što su email i WhatsApp. Osim neograničenog pristupa svim časovima 24/7,
        za sve učenike biće organizovani i probni prijemni ispiti - simulacija
        iskustva koje sve buduće brucoše očekuje na polaganju. Nakon svake
        simulacije, svi polaznici će dobiti svoj broj poena kako bi mogli da
        uvide na kom nivou je njihovo trenutno znanje. Naš tim će biti na
        raspolaganju svim upisanim učenicima tokom cele pripreme. Za praćenje
        vašeg napretka, zadužen je asistent matematike koji je na raspolaganju
        za sva eventualna pitanja i nedoumice koje možete imati. Evaluacija
        učenika biće propraćena tokom cele pripreme kroz zadatke za samostalni
        rad i probne prijemne ispite koji će biti organizovani, a sve u cilju
        ostvarenja punog potencijala i najboljih mogućih rezultata svakog
        učenika.
      </p>
      <p>
        Ovde možete pronaći listu video snimaka koja će vam pomoći da savladate
        oblast polinoma, a ujedno i da se upoznate sa načinom rada. Ukoliko
        želite da rezervišete celu pripremu, možete svoje podatke ostaviti
        klikom na dugme "Kupi pripremu", nakon čega ćemo vas kontaktirati radi
        daljih instrukcija. U tabeli ispod se nalazi cenovnik, a za grupu
        učenika koji se zajedno prijave, nudimo mogućnost da imaju zajedničku
        WhatsApp grupu za komunikaciju sa nama, kao i popuste na cenu pripreme.
      </p>
    </section>
  )
}

export default PrepSection
