import React, { Fragment } from 'react';

import {
  HeaderSection,
  FooterSection,
  FormSection,
  TeaserSection,
} from './layout';

import {
  Button,
  Card,
  Comment,
  Field,
  List,
  ListItem,
  Table,
  TableCell,
  TableFooter,
  TableHeader,
  TableRow,
  VideoPlayer,
} from './components';

import check from './img/icon-check.svg';

function App () {
  let formRef = React.createRef();

  function handleScrollToForm() {
    formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <Fragment>
      <HeaderSection onClickButton={ handleScrollToForm }>
        <div className="row">
          <div className="col-6">
            <h1>Ditt viktigste juridiske arbeidsverktøy</h1>
            <p>Er din bedrift og ansatte fullstendig oppdatert på lover og regelverk innenfor fagfeltet dere jobber? </p>
            <p>Med Lovdata Pro får du varslinger på endringer og oppdateringer i lovverket. Få varslinger på epost i rettsområdet som interesserer din bedrift</p>
            <p>Alt på ett sted- ryddig, relevant og digitalt!</p>
          </div>

          <div className="col-6">
            <VideoPlayer />
          </div>
        </div>
      </HeaderSection>

      <section className="cards-section">
        <div className="container">
          <h2>Lovdata Pro- fordeler</h2>
          <div className="row">
            <div className="col-7">
              <div className="row">
                <div className="col-6">
                  <Card icon="notifications" title="Varslinger" teaser="Bli varslet om endringer i regelverk og nye avgjørelser til lover/paragrafer og rettsområder." />
                </div>
                <div className="col-6">
                  <Card icon="selection" title="Utvalg" teaser="Dra og slipp dokumenter i utvalg. Perfekt til juridiske utdrag." />
                </div>
                <div className="col-6">
                  <Card icon="notes" title="Merknader" teaser="Skriv personlige merknader—“gule lapper”—til lover, forskrifter, enkeltparagrafer og avgjørelser." />
                </div>
                <div className="col-6">
                  <Card icon="groups" title="Grupper" teaser="Del dokumenter og merknader med dine kolleger og andre Lovdata Pro brukere." />
                </div>
              </div>
            </div>
            <div className="col-5">
              <List title="Med Lovdata Pro får du:">
                <ListItem>Varslinger i epost på det rettsområdet som interesserer deg</ListItem>
                <ListItem>Personlige verktøy. Grupperinger, merknader, utdrag, markeringer, huske-funksjon.</ListItem>
                <ListItem>Dele dokumenter med kolleger og andre Lovdata Pro brukere</ListItem>
                <ListItem>Tilgang på rettsavgjørelser – mange titalls tusen dommer, mange år tilbake i tid</ListItem>
                <ListItem>Gode søkemuligheter i lovverket med historiske versjoner</ListItem>
                <ListItem>Oppdaterte kilder, rundskriv, forskrifter, vedtak, juridisk litteratur m.m.</ListItem>
                <ListItem>Inntil 6 personlige brukerlisenser inkludert. </ListItem>
              </List>
              <div>
                <Button primary onClick={ handleScrollToForm }>Få 3 måneder gratis</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TeaserSection>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <h2>Kampanjetilbud</h2>
            <Card
              featured
              icon="calendar"
              title="Få 3 måneder gratis"
              teaser={ [
                'Få 3 måneder gratis med å ',
                <span
                  key="card-teaser-link"
                  className="card__teaser__link"
                  onClick={ handleScrollToForm }>bestille nå</span>
              ]}
            />
          </div>
        </div>
      </TeaserSection>

      <section className="table-section">
        <div className="container">
          <Table>
            <TableRow body={false}>
              <TableHeader></TableHeader>
              <TableHeader bordered>Lovdata Pro</TableHeader>
              <TableHeader bordered>Lovdata.no</TableHeader>
            </TableRow>

            <TableRow>
              <TableCell>Norges lover</TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Sentral forskrifter</TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Lokale forskrifter</TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Statens personalhåndbok</TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Kunngjøringer i Norsk Lovtidend</TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Merknader og markeringer</TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Dele med kolleger</TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Grupperinger</TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Dine egne utdrag</TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Historiske versjoner av gjeldende forskrifter</TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Rettsavgjørelser</TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Publikasjoner og uttalelser</TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Forarbeider og stortingsdokumenter</TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Nemder og utvalg</TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Traktater & EU-domstolen</TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
              <TableCell bordered><img src={check} alt="check" /></TableCell>
            </TableRow>

            <TableRow  body={false}>
              <TableFooter></TableFooter>
              <TableFooter bordered></TableFooter>
              <TableFooter bordered></TableFooter>
            </TableRow>
          </Table>
        </div>
      </section>

      <FormSection refProp={formRef}>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <h3>3 måneder gratis</h3>
            <Field label="Firmanavn (Fylles ut automatisk)" />
            <Field label="Organisasjonsnummer" />
            <Field label="Kontaktperson" />
            <Field label="Telefonnummer" type="phone" />
            <Field label="E-postadresse" type="email" />
            <Button primary>Få 3 måneder gratis</Button>
          </div>
        </div>
      </FormSection>

      <section className="comments-section">
        <Comment
          author="Maria Sivertsen"
          authorImg="Maria Sivertsen"
          company="Elektroskandia Norge AS"
          date="16.05.2019"
        >“Lovdata Pro hjelper oss med å holde vår bedrift oppdatert på endringer i Lovverket. <br />Som Compliance Manager er det viktig å kunne få varslinger på regelverk innenfor vår industri og arbeidsmiljø”.</Comment>
      </section>

      <FooterSection>
        <div className="row">
          <div className="col-10">
            <h2>Dette er Lovdata Pro</h2>
            <p>Lovdata Pro gjør det enklerer for bedrifter å holde seg oppdatert  på endringer i relevant regelverk. Lovdata Pro er et juridisk verktøy som holder dere i bedriften oppdatert på rettsområder og samtidig gir gode søkemuligheter til det relevante dokumentet.</p>
            <p>Tilgang til historiske kilder, rundskriv, rettsavgjørelser, uttalelser og vedtak.</p>
            <p>Enten dine ansatte jobber som jurist, HR, HMS, eller har andre oppgaver der dere jobber med regelverket, vil dere alltid være oppdatert.</p>
            <p>Vil du vite mer om Lovdata Pro</p>
            <Button primary>Klikk her</Button>
          </div>
        </div>
      </FooterSection>
    </Fragment>
  );
}

export default App;
