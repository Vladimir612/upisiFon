import React from "react"
import Title from "../../utils/Title/Title"
import Subtitle from "../../utils/Subtitle/Subtitle"
import * as styles from "./team.module.scss"
import { graphql, useStaticQuery } from "gatsby"
import Person from "./Person/Person"

const Team = () => {
  const data = useStaticQuery(graphql`
    query getTeamImages {
      vlada: file(relativePath: { eq: "aboutPage/vlada.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bojan: file(relativePath: { eq: "aboutPage/bojan.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      natalija: file(relativePath: { eq: "aboutPage/nata.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kaca: file(relativePath: { eq: "aboutPage/kaca.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={styles.team}>
      <Title type="blue" customStyle={{ marginBottom: "0.5rem" }}>
        Ko smo mi?
      </Title>
      <Subtitle type="blue">
        Upoznaj tim koji naporno radi na Binary bioskopu!
      </Subtitle>
      <div className={styles.cards}>
        <Person
          img={data.bojan.childImageSharp.fluid}
          name="Bojan Martinović"
          role="FOUNDER"
          about="Završio je Računarsku gimnaziju u Beogradu, a zatim na Fakultetu Organizacionih Nauka diplomirao 2017. godine kao student generacije sa prosečnom ocenom 10.0. Bojan je još tokom studija, kroz privatne časove koje je držao svojim kolegama, spajao svoju ljubav prema IT-u i prenošenju znanja. Po završetku osnovnih studija na FON-u, opredeljuje se za master program na univerzitetu „Politecnico di Milano”. 2018. godine prelazi sa forme privatnih časova na podučavanje kroz video materijale, te tako osniva Binary Bioskop. Od 2022. godine aktivno se bavi razvojem sistema za pomoć ljudima sa invaliditetom."
          linkedIn="https://www.linkedin.com/in/bojan-martinovi%C4%87-172357176/"
          gmail="martinovic.bojan@yahoo.com"
        />
        <Person
          img={data.natalija.childImageSharp.fluid}
          name="Natalija Aksentijeić"
          role="SALES AND MARKETING"
          about="Završila je Četvrtu gimnaziju u Beogradu, a 2020. godine upisuje smer menadžment na Fakultetu Organizacionih Nauka. Tokom srednje škole, učestvovala je na različitim preduzetničkim takmičenjima između kojih su se izdvojila Poslovni izazov, Učenička kompanija i Preduzetnik u srednjoj. 2019. godine pokreće biznis na Instagramu koji je sakupio 25000 pratilaca i upušta se u marketing vode. Na fakultetu nastavlja da ide na takmičenja i odnosi pobedu na projektu Case Study Show. Učestvuje i u mentorisanju srednjoškolaca u okviru Poslovnog izazova."
          linkedIn="https://www.linkedin.com/in/natalija-aksentijevi%C4%87-5b0a92241/"
          gmail="nacka.nata@gmail.com"
        />
        <Person
          img={data.vlada.childImageSharp.fluid}
          name="Vladimir Lazarević"
          role="SOFTWARE DEVELOPER"
          about="Završio je tehničku školu u Čačku na smeru Elektrotehničar informacionih tehnologija. Nakon srednje škole, upisuje IT smer na Fakultetu Organizacionih Nauka 2020. godine gde ulazi u studentsku organizaciju FONIS. Tokom članstva, dobija priliku da radi na različitim projektima, a na jednom je bio i IT koordinator. Zahvaljujući njegovoj posvećenosti i trudu, bio je zadužen za izgradnju sajtova za klijente u kompaniji Quantox, a takođe je i držao razne privatne časove."
          linkedIn="https://www.linkedin.com/in/vladimir-lazarevic"
          gmail="vladimir.12.lazarevic@gmail.com"
        />

        <Person
          img={data.kaca.childImageSharp.fluid}
          name="Katarina Antić"
          role="CONTENT WRITER"
          about="Završila je Prvu nišku gimnaziju Stevan Sremac u Nišu 2020., a odmah zatim upisuje Fakultet organizacionih nauka na smeru menadžment. Tokom školovanja imala je angažovanja u radu Studentskog parlamenta gde je organizovala brojne humanitarne događaje i turnire. 2019. je sa grupom ljudi vodila projekat za Regionalnu kancelariju za saradnju mladih pod nazivom Net2Flock. Na fakultetu uzima učešće u raznim projektima, jedan od njih jeste Case Study Show gde osvojila prvo mesto u case-u iz oblasti marketinga. Trenutno je angažovana na fakultetu kao student mentor."
          linkedIn="https://www.linkedin.com/in/katarinaantic2001/"
          gmail="katarinaantic396@gmail.com"
        />
      </div>
    </div>
  )
}

export default Team
