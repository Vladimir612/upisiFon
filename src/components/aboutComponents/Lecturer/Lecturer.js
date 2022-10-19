import React from "react"
import Title from "../../utils/Title/Title"
import * as styles from "./lecturer.module.scss"

const Lecturer = () => {
  return (
    <section className={styles.lecturer}>
      <Title type="blue">Predavač Daliborka Vujić</Title>
      <p>
        Predavač na pripremama je Daliborka Vujić, profesor Četrnaeste
        beogradske gimnazije, sa višegodišnjim iskustvom u obrazovanju
        srednjoškolaca, kao i u samoj pripremi za prjemni ispit iz matematike.
        Profesorka svojom pristupačnom i postupnom metodom prenošenja znanja,
        približava učenicima i najkompleksnije matematičke oblasti i koncepte,
        čineći ih tako razumljivim i jasnim.
      </p>
      <p>
        Profesorka ostvaruje prijatnu i neposrednu komunikaciju sa učenicima, pa
        je na raspolaganju za sva eventualna pitanja i nedoumice koje učenici
        mogu imati tokom pripreme. Napredak učenika biće propraćen tokom cele
        pripreme kroz zadatke za samostalni rad i probne prijemne ispite koji će
        biti organizovani, a sve u cilju ostvarenja punog potencijala i
        najboljih mogućih rezultata svakog učenika.
      </p>
    </section>
  )
}

export default Lecturer
