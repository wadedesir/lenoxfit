import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
// Images
import imgBg from "../../assets/images/slides/title-bg-19.jpg";
// Components
import PageTitle from "../../components/PageTitle/PageTitle";
import NavbarSocial from "../../components/Navbar/NavbarSocial";
import FooterOne from "../../components/Footer/FooterOne";
import Loader from "../../components/Loader/Loader";

const ThemeIconsPage = () => (
  <Loader>
    <NavbarSocial data={dataNavbar} type="dark" />
    <PageTitle title="Theme Icons" tagline="Two types of icon" image={imgBg} />
    <section>
      <div className="container">
        <div className="row">
          <h4 className="text-uppercase text-center">
            You can use a set of 100+ ET-Line Icons
          </h4>
        </div>

        <div className="row mt-30">
          <div className="col-md-8 text-center col-md-offset-2">
            <pre>
              <code>&lt;i className="icon-heart"&gt;&lt;/i&gt;</code>
            </pre>
          </div>
        </div>

        <div className="row mt-50">
          <div className="icon-examples">
            <span className="icon-box">
              <span aria-hidden="true" className="icon-mobile"></span>
              &nbsp;icon-mobile
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-laptop"></span>
              &nbsp;icon-laptop
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-desktop"></span>
              &nbsp;icon-desktop
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-tablet"></span>
              &nbsp;icon-tablet
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-phone"></span>
              &nbsp;icon-phone
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-document"></span>
              &nbsp;icon-document
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-documents"></span>
              &nbsp;icon-documents
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-search"></span>
              &nbsp;icon-search
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-clipboard"></span>
              &nbsp;icon-clipboard
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-newspaper"></span>
              &nbsp;icon-newspaper
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-notebook"></span>
              &nbsp;icon-notebook
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-book-open"></span>
              &nbsp;icon-book-open
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-browser"></span>
              &nbsp;icon-browser
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-calendar"></span>
              &nbsp;icon-calendar
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-presentation"></span>
              &nbsp;icon-presentation
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-picture"></span>
              &nbsp;icon-picture
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-pictures"></span>
              &nbsp;icon-pictures
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-video"></span>
              &nbsp;icon-video
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-camera"></span>
              &nbsp;icon-camera
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-printer"></span>
              &nbsp;icon-printer
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-toolbox"></span>
              &nbsp;icon-toolbox
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-briefcase"></span>
              &nbsp;icon-briefcase
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-wallet"></span>
              &nbsp;icon-wallet
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-gift"></span>
              &nbsp;icon-gift
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-bargraph"></span>
              &nbsp;icon-bargraph
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-grid"></span>
              &nbsp;icon-grid
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-expand"></span>
              &nbsp;icon-expand
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-focus"></span>
              &nbsp;icon-focus
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-edit"></span>
              &nbsp;icon-edit
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-adjustments"></span>
              &nbsp;icon-adjustments
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-ribbon"></span>
              &nbsp;icon-ribbon
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-hourglass"></span>
              &nbsp;icon-hourglass
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-lock"></span>
              &nbsp;icon-lock
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-megaphone"></span>
              &nbsp;icon-megaphone
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-shield"></span>
              &nbsp;icon-shield
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-trophy"></span>
              &nbsp;icon-trophy
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-flag"></span>
              &nbsp;icon-flag
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-map"></span>
              &nbsp;icon-map
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-puzzle"></span>
              &nbsp;icon-puzzle
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-basket"></span>
              &nbsp;icon-basket
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-envelope"></span>
              &nbsp;icon-envelope
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-streetsign"></span>
              &nbsp;icon-streetsign
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-telescope"></span>
              &nbsp;icon-telescope
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-gears"></span>
              &nbsp;icon-gears
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-key"></span>
              &nbsp;icon-key
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-paperclip"></span>
              &nbsp;icon-paperclip
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-attachment"></span>
              &nbsp;icon-attachment
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-pricetags"></span>
              &nbsp;icon-pricetags
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-lightbulb"></span>
              &nbsp;icon-lightbulb
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-layers"></span>
              &nbsp;icon-layers
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-pencil"></span>
              &nbsp;icon-pencil
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-tools"></span>
              &nbsp;icon-tools
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-tools-2"></span>
              &nbsp;icon-tools-2
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-scissors"></span>
              &nbsp;icon-scissors
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-paintbrush"></span>
              &nbsp;icon-paintbrush
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-magnifying-glass"></span>
              &nbsp;icon-magnifying-glass
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-circle-compass"></span>
              &nbsp;icon-circle-compass
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-linegraph"></span>
              &nbsp;icon-linegraph
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-mic"></span>
              &nbsp;icon-mic
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-strategy"></span>
              &nbsp;icon-strategy
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-beaker"></span>
              &nbsp;icon-beaker
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-caution"></span>
              &nbsp;icon-caution
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-recycle"></span>
              &nbsp;icon-recycle
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-anchor"></span>
              &nbsp;icon-anchor
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-profile-male"></span>
              &nbsp;icon-profile-male
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-profile-female"></span>
              &nbsp;icon-profile-female
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-bike"></span>
              &nbsp;icon-bike
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-wine"></span>
              &nbsp;icon-wine
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-hotairballoon"></span>
              &nbsp;icon-hotairballoon
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-globe"></span>
              &nbsp;icon-globe
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-genius"></span>
              &nbsp;icon-genius
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-map-pin"></span>
              &nbsp;icon-map-pin
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-dial"></span>
              &nbsp;icon-dial
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-chat"></span>
              &nbsp;icon-chat
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-heart"></span>
              &nbsp;icon-heart
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-cloud"></span>
              &nbsp;icon-cloud
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-upload"></span>
              &nbsp;icon-upload
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-download"></span>
              &nbsp;icon-download
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-target"></span>
              &nbsp;icon-target
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-hazardous"></span>
              &nbsp;icon-hazardous
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-piechart"></span>
              &nbsp;icon-piechart
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-speedometer"></span>
              &nbsp;icon-speedometer
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-global"></span>
              &nbsp;icon-global
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-compass"></span>
              &nbsp;icon-compass
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-lifesaver"></span>
              &nbsp;icon-lifesaver
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-clock"></span>
              &nbsp;icon-clock
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-aperture"></span>
              &nbsp;icon-aperture
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-quote"></span>
              &nbsp;icon-quote
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-scope"></span>
              &nbsp;icon-scope
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-alarmclock"></span>
              &nbsp;icon-alarmclock
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-refresh"></span>
              &nbsp;icon-refresh
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-happy"></span>
              &nbsp;icon-happy
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-sad"></span>
              &nbsp;icon-sad
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-facebook"></span>
              &nbsp;icon-facebook
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-twitter"></span>
              &nbsp;icon-twitter
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-googleplus"></span>
              &nbsp;icon-googleplus
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-rss"></span>
              &nbsp;icon-rss
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-tumblr"></span>
              &nbsp;icon-tumblr
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-linkedin"></span>
              &nbsp;icon-linkedin
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="icon-dribbble"></span>
              &nbsp;icon-dribbble
            </span>
          </div>
        </div>
      </div>
    </section>
    <section className="white-bg">
      <div className="container">
        <div className="row">
          <h4 className="text-uppercase text-center">
            Ionicons v2.0.0 Cheatsheet 733 Icons
          </h4>
        </div>

        <div className="row mt-30">
          <div className="col-md-8 text-center col-md-offset-2">
            <pre>
              <code>&lt;i className="ion-cube"&gt;&lt;/i&gt;</code>
            </pre>
          </div>
        </div>

        <div className="row mt-50">
          <div className="icon-examples">
            <span className="icon-box">
              <span aria-hidden="true" className="ion-alert"></span>
              &nbsp;ion-alert
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-alert-circled"></span>
              &nbsp;ion-alert-circled
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-add"></span>
              &nbsp;ion-android-add
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-android-add-circle"
              ></span>
              &nbsp;ion-android-add-circle
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-android-alarm-clock"
              ></span>
              &nbsp;ion-android-alarm-clock
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-alert"></span>
              &nbsp;ion-android-alert
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-apps"></span>
              &nbsp;ion-android-apps
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-archive"></span>
              &nbsp;ion-android-archive
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-android-arrow-back"
              ></span>
              &nbsp;ion-android-arrow-back
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-android-arrow-down"
              ></span>
              &nbsp;ion-android-arrow-down
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-android-arrow-dropdown"
              ></span>
              &nbsp;ion-android-arrow-dropdown
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-android-arrow-dropdown-circle"
              ></span>
              &nbsp;ion-android-arrow-dropdown-circle
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-android-arrow-dropleft"
              ></span>
              &nbsp;ion-android-arrow-dropleft
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-android-arrow-dropleft-circle"
              ></span>
              &nbsp;ion-android-arrow-dropleft-circle
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-android-arrow-dropright"
              ></span>
              &nbsp;ion-android-arrow-dropright
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-android-arrow-dropright-circle"
              ></span>
              &nbsp;ion-android-arrow-dropright-circle
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-android-arrow-dropup"
              ></span>
              &nbsp;ion-android-arrow-dropup
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-android-arrow-dropup-circle"
              ></span>
              &nbsp;ion-android-arrow-dropup-circle
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-android-arrow-forward"
              ></span>
              &nbsp;ion-android-arrow-forward
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-arrow-up"></span>
              &nbsp;ion-android-arrow-up
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-attach"></span>
              &nbsp;ion-android-attach
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-bar"></span>
              &nbsp;ion-android-bar
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-bicycle"></span>
              &nbsp;ion-android-bicycle
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-boat"></span>
              &nbsp;ion-android-boat
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-boat"></span>
              &nbsp;ion-android-boat
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-bookmark"></span>
              &nbsp;ion-android-bookmark
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-bulb"></span>
              &nbsp;ion-android-bulb
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-bus"></span>
              &nbsp;ion-android-bus
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-calendar"></span>
              &nbsp;ion-android-calendar
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-call"></span>
              &nbsp;ion-android-call
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-camera"></span>
              &nbsp;ion-android-camera
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-cancel"></span>
              &nbsp;ion-android-cancel
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-car"></span>
              &nbsp;ion-android-car
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-cart"></span>
              &nbsp;ion-android-cart
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-chat"></span>
              &nbsp;ion-android-chat
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-checkbox"></span>
              &nbsp;ion-android-checkbox
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-android-checkbox-blank"
              ></span>
              &nbsp;ion-android-checkbox-blank
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-android-checkbox-outline"
              ></span>
              &nbsp;ion-android-checkbox-outline
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-android-checkmark-circle"
              ></span>
              &nbsp;ion-android-checkmark-circle
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-clipboard"></span>
              &nbsp;ion-android-clipboard
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-close"></span>
              &nbsp;ion-android-close
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-cloud"></span>
              &nbsp;ion-android-cloud
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-android-cloud-circle"
              ></span>
              &nbsp;ion-android-cloud-circle
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-android-cloud-done"
              ></span>
              &nbsp;ion-android-cloud-done
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-android-cloud-outline"
              ></span>
              &nbsp;ion-android-cloud-outline
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-android-color-palette"
              ></span>
              &nbsp;ion-android-color-palette
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-compass"></span>
              &nbsp;ion-android-compass
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-contact"></span>
              &nbsp;ion-android-contact
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-contacts"></span>
              &nbsp;ion-android-contacts
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-contract"></span>
              &nbsp;ion-android-contract
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-create"></span>
              &nbsp;ion-android-create
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-delete"></span>
              &nbsp;ion-android-delete
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-desktop"></span>
              &nbsp;ion-android-desktop
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-document"></span>
              &nbsp;ion-android-document
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-done"></span>
              &nbsp;ion-android-done
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-done-all"></span>
              &nbsp;ion-android-done-all
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-download"></span>
              &nbsp;ion-android-download
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-drafts"></span>
              &nbsp;ion-android-drafts
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-exit"></span>
              &nbsp;ion-android-exit
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-expand"></span>
              &nbsp;ion-android-expand
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-favorite"></span>
              &nbsp;ion-android-favorite
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-android-favorite-outline"
              ></span>
              &nbsp;ion-android-favorite-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-film"></span>
              &nbsp;ion-android-film
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-folder"></span>
              &nbsp;ion-android-folder
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-android-folder-open"
              ></span>
              &nbsp;ion-android-folder-open
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-funnel"></span>
              &nbsp;ion-android-funnel
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-globe"></span>
              &nbsp;ion-android-globe
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-hand"></span>
              &nbsp;ion-android-hand
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-hangout"></span>
              &nbsp;ion-android-hangout
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-happy"></span>
              &nbsp;ion-android-happy
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-home"></span>
              &nbsp;ion-android-home
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-image"></span>
              &nbsp;ion-android-image
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-laptop"></span>
              &nbsp;ion-android-laptop
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-list"></span>
              &nbsp;ion-android-list
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-locate"></span>
              &nbsp;ion-android-locate
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-lock"></span>
              &nbsp;ion-android-lock
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-mail"></span>
              &nbsp;ion-android-mail
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-map"></span>
              &nbsp;ion-android-map
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-menu"></span>
              &nbsp;ion-android-menu
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-android-microphone"
              ></span>
              &nbsp;ion-android-microphone
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-android-microphone-off"
              ></span>
              &nbsp;ion-android-microphone-off
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-android-more-horizontal"
              ></span>
              &nbsp;ion-android-more-horizontal
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-android-more-vertical"
              ></span>
              &nbsp;ion-android-more-vertical
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-navigate"></span>
              &nbsp;ion-android-navigate
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-android-notifications"
              ></span>
              &nbsp;ion-android-notifications
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-android-notifications-none"
              ></span>
              &nbsp;ion-android-notifications-none
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-android-notifications-off"
              ></span>
              &nbsp;ion-android-notifications-off
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-open"></span>
              &nbsp;ion-android-open
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-options"></span>
              &nbsp;ion-android-options
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-people"></span>
              &nbsp;ion-android-people
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-person"></span>
              &nbsp;ion-android-person
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-android-person-add"
              ></span>
              &nbsp;ion-android-person-add
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-android-phone-landscape"
              ></span>
              &nbsp;ion-android-phone-landscape
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-android-phone-portrait"
              ></span>
              &nbsp;ion-android-phone-portrait
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-pin"></span>
              &nbsp;ion-android-pin
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-plane"></span>
              &nbsp;ion-android-plane
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-playstore"></span>
              &nbsp;ion-android-playstore
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-print"></span>
              &nbsp;ion-android-print
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-android-radio-button-off"
              ></span>
              &nbsp;ion-android-radio-button-off
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-android-radio-button-on"
              ></span>
              &nbsp;ion-android-radio-button-on
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-refresh"></span>
              &nbsp;ion-android-refresh
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-remove"></span>
              &nbsp;ion-android-remove
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-android-remove-circle"
              ></span>
              &nbsp;ion-android-remove-circle
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-android-restaurant"
              ></span>
              &nbsp;ion-android-restaurant
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-sad"></span>
              &nbsp;ion-android-sad
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-search"></span>
              &nbsp;ion-android-search
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-send"></span>
              &nbsp;ion-android-send
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-settings"></span>
              &nbsp;ion-android-settings
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-share"></span>
              &nbsp;ion-android-share
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-share-alt"></span>
              &nbsp;ion-android-share-alt
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-star"></span>
              &nbsp;ion-android-star
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-star-half"></span>
              &nbsp;ion-android-star-half
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-android-star-outline"
              ></span>
              &nbsp;ion-android-star-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-stopwatch"></span>
              &nbsp;ion-android-stopwatch
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-subway"></span>
              &nbsp;ion-android-subway
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-sunny"></span>
              &nbsp;ion-android-sunny
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-sync"></span>
              &nbsp;ion-android-sync
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-textsms"></span>
              &nbsp;ion-android-textsms
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-time"></span>
              &nbsp;ion-android-time
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-train"></span>
              &nbsp;ion-android-train
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-unlock"></span>
              &nbsp;ion-android-unlock
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-upload"></span>
              &nbsp;ion-android-upload
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-android-volume-down"
              ></span>
              &nbsp;ion-android-volume-down
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-android-volume-mute"
              ></span>
              &nbsp;ion-android-volume-mute
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-android-volume-off"
              ></span>
              &nbsp;ion-android-volume-off
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-volume-up"></span>
              &nbsp;ion-android-volume-up
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-walk"></span>
              &nbsp;ion-android-walk
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-warning"></span>
              &nbsp;ion-android-warning
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-watch"></span>
              &nbsp;ion-android-watch
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-android-wifi"></span>
              &nbsp;ion-android-wifi
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-aperture"></span>
              &nbsp;ion-aperture
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-archive"></span>
              &nbsp;ion-archive
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-arrow-down-a"></span>
              &nbsp;ion-arrow-down-a
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-arrow-down-b"></span>
              &nbsp;ion-arrow-down-b
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-arrow-down-c"></span>
              &nbsp;ion-arrow-down-c
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-arrow-expand"></span>
              &nbsp;ion-arrow-expand
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-arrow-graph-down-left"
              ></span>
              &nbsp;ion-arrow-graph-down-left
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-arrow-graph-down-right"
              ></span>
              &nbsp;ion-arrow-graph-down-right
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-arrow-graph-up-left"
              ></span>
              &nbsp;ion-arrow-graph-up-left
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-arrow-graph-up-right"
              ></span>
              &nbsp;ion-arrow-graph-up-right
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-arrow-left-a"></span>
              &nbsp;ion-arrow-left-a
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-arrow-left-b"></span>
              &nbsp;ion-arrow-left-b
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-arrow-left-c"></span>
              &nbsp;ion-arrow-left-c
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-arrow-move"></span>
              &nbsp;ion-arrow-move
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-arrow-resize"></span>
              &nbsp;ion-arrow-resize
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-arrow-return-left"></span>
              &nbsp;ion-arrow-return-left
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-arrow-return-right"
              ></span>
              &nbsp;ion-arrow-return-right
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-arrow-right-a"></span>
              &nbsp;ion-arrow-right-a
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-arrow-right-b"></span>
              &nbsp;ion-arrow-right-b
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-arrow-right-c"></span>
              &nbsp;ion-arrow-right-c
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-arrow-shrink"></span>
              &nbsp;ion-arrow-shrink
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-arrow-swap"></span>
              &nbsp;ion-arrow-swap
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-arrow-up-a"></span>
              &nbsp;ion-arrow-up-a
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-arrow-up-b"></span>
              &nbsp;ion-arrow-up-b
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-arrow-up-c"></span>
              &nbsp;ion-arrow-up-c
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-asterisk"></span>
              &nbsp;ion-asterisk
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-at"></span>&nbsp;ion-at
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-backspace"></span>
              &nbsp;ion-backspace
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-backspace-outline"></span>
              &nbsp;ion-backspace-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-bag"></span>&nbsp;ion-bag
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-battery-charging"></span>
              &nbsp;ion-battery-charging
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-battery-empty"></span>
              &nbsp;ion-battery-empty
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-battery-full"></span>
              &nbsp;ion-battery-full
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-battery-half"></span>
              &nbsp;ion-battery-half
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-battery-low"></span>
              &nbsp;ion-battery-low
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-beaker"></span>
              &nbsp;ion-beaker
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-beer"></span>
              &nbsp;ion-beer
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-bluetooth"></span>
              &nbsp;ion-bluetooth
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-bonfire"></span>
              &nbsp;ion-bonfire
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-bookmark"></span>
              &nbsp;ion-bookmark
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-bowtie"></span>
              &nbsp;ion-bowtie
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-briefcase"></span>
              &nbsp;ion-briefcase
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-bug"></span>&nbsp;ion-bug
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-calculator"></span>
              &nbsp;ion-calculator
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-calendar"></span>
              &nbsp;ion-calendar
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-camera"></span>
              &nbsp;ion-camera
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-card"></span>
              &nbsp;ion-card
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-cash"></span>
              &nbsp;ion-cash
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-chatbox"></span>
              &nbsp;ion-chatbox
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-chatbox-working"></span>
              &nbsp;ion-chatbox-working
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-chatboxes"></span>
              &nbsp;ion-chatboxes
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-chatbubble"></span>
              &nbsp;ion-chatbubble
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-chatbubble-working"
              ></span>
              &nbsp;ion-chatbubble-working
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-chatbubbles"></span>
              &nbsp;ion-chatbubbles
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-checkmark"></span>
              &nbsp;ion-checkmark
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-checkmark-circled"></span>
              &nbsp;ion-checkmark-circled
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-checkmark-round"></span>
              &nbsp;ion-checkmark-round
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-chevron-down"></span>
              &nbsp;ion-chevron-down
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-chevron-left"></span>
              &nbsp;ion-chevron-left
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-chevron-right"></span>
              &nbsp;ion-chevron-right
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-chevron-up"></span>
              &nbsp;ion-chevron-up
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-clipboard"></span>
              &nbsp;ion-clipboard
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-clock"></span>
              &nbsp;ion-clock
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-close"></span>
              &nbsp;ion-close
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-close-circled"></span>
              &nbsp;ion-close-circled
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-close-round"></span>
              &nbsp;ion-close-round
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-closed-captioning"></span>
              &nbsp;ion-closed-captioning
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-cloud"></span>
              &nbsp;ion-cloud
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-code"></span>
              &nbsp;ion-code
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-code-download"></span>
              &nbsp;ion-code-download
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-code-working"></span>
              &nbsp;ion-code-working
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-coffee"></span>
              &nbsp;ion-coffee
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-compass"></span>
              &nbsp;ion-compass
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-compose"></span>
              &nbsp;ion-compose
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-connection-bars"></span>
              &nbsp;ion-connection-bars
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-contrast"></span>
              &nbsp;ion-contrast
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-crop"></span>
              &nbsp;ion-crop
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-cube"></span>
              &nbsp;ion-cube
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-disc"></span>
              &nbsp;ion-disc
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-document"></span>
              &nbsp;ion-document
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-document-text"></span>
              &nbsp;ion-document-text
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-drag"></span>
              &nbsp;ion-drag
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-earth"></span>
              &nbsp;ion-earth
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-easel"></span>
              &nbsp;ion-easel
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-edit"></span>
              &nbsp;ion-edit
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-egg"></span>&nbsp;ion-egg
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-eject"></span>
              &nbsp;ion-eject
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-email"></span>
              &nbsp;ion-email
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-email-unread"></span>
              &nbsp;ion-email-unread
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-erlenmeyer-flask"></span>
              &nbsp;ion-erlenmeyer-flask
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-erlenmeyer-flask-bubbles"
              ></span>
              &nbsp;ion-erlenmeyer-flask-bubbles
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-eye"></span>&nbsp;ion-eye
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-eye-disabled"></span>
              &nbsp;ion-eye-disabled
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-female"></span>
              &nbsp;ion-female
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-filing"></span>
              &nbsp;ion-filing
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-film-marker"></span>
              &nbsp;ion-film-marker
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-fireball"></span>
              &nbsp;ion-fireball
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-flag"></span>
              &nbsp;ion-flag
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-flame"></span>
              &nbsp;ion-flame
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-flash"></span>
              &nbsp;ion-flash
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-flash-off"></span>
              &nbsp;ion-flash-off
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-folder"></span>
              &nbsp;ion-folder
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-fork"></span>
              &nbsp;ion-fork
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-fork-repo"></span>
              &nbsp;ion-fork-repo
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-forward"></span>
              &nbsp;ion-forward
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-funnel"></span>
              &nbsp;ion-funnel
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-gear-a"></span>
              &nbsp;ion-gear-a
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-gear-b"></span>
              &nbsp;ion-gear-b
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-grid"></span>
              &nbsp;ion-grid
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-hammer"></span>
              &nbsp;ion-hammer
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-happy"></span>
              &nbsp;ion-happy
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-happy-outline"></span>
              &nbsp;ion-happy-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-headphone"></span>
              &nbsp;ion-headphone
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-heart"></span>
              &nbsp;ion-heart
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-heart-broken"></span>
              &nbsp;ion-heart-broken
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-help"></span>
              &nbsp;ion-help
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-help-buoy"></span>
              &nbsp;ion-help-buoy
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-help-circled"></span>
              &nbsp;ion-help-circled
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-home"></span>
              &nbsp;ion-home
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-icecream"></span>
              &nbsp;ion-icecream
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-image"></span>
              &nbsp;ion-image
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-images"></span>
              &nbsp;ion-images
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-information"></span>
              &nbsp;ion-information
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-information-circled"
              ></span>
              &nbsp;ion-information-circled
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ionic"></span>
              &nbsp;ion-ionic
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-alarm"></span>
              &nbsp;ion-ios-alarm
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-alarm-outline"></span>
              &nbsp;ion-ios-alarm-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-albums"></span>
              &nbsp;ion-ios-albums
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-ios-albums-outline"
              ></span>
              &nbsp;ion-ios-albums-outline
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-ios-americanfootball"
              ></span>
              &nbsp;ion-ios-americanfootball
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-ios-americanfootball-outline"
              ></span>
              &nbsp;ion-ios-americanfootball-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-analytics"></span>
              &nbsp;ion-ios-analytics
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-ios-analytics-outline"
              ></span>
              &nbsp;ion-ios-analytics-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-arrow-back"></span>
              &nbsp;ion-ios-arrow-back
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-arrow-down"></span>
              &nbsp;ion-ios-arrow-down
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-arrow-forward"></span>
              &nbsp;ion-ios-arrow-forward
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-arrow-left"></span>
              &nbsp;ion-ios-arrow-left
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-arrow-right"></span>
              &nbsp;ion-ios-arrow-right
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-ios-arrow-thin-down"
              ></span>
              &nbsp;ion-ios-arrow-thin-down
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-ios-arrow-thin-left"
              ></span>
              &nbsp;ion-ios-arrow-thin-left
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-ios-arrow-thin-right"
              ></span>
              &nbsp;ion-ios-arrow-thin-right
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-arrow-thin-up"></span>
              &nbsp;ion-ios-arrow-thin-up
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-arrow-up"></span>
              &nbsp;ion-ios-arrow-up
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-at"></span>
              &nbsp;ion-ios-at
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-at-outline"></span>
              &nbsp;ion-ios-at-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-barcode"></span>
              &nbsp;ion-ios-barcode
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-ios-barcode-outline"
              ></span>
              &nbsp;ion-ios-barcode-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-baseball"></span>
              &nbsp;ion-ios-baseball
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-ios-baseball-outline"
              ></span>
              &nbsp;ion-ios-baseball-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-basketball"></span>
              &nbsp;ion-ios-basketball
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-ios-basketball-outline"
              ></span>
              &nbsp;ion-ios-basketball-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-bell"></span>
              &nbsp;ion-ios-bell
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-bell-outline"></span>
              &nbsp;ion-ios-bell-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-body"></span>
              &nbsp;ion-ios-body
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-body-outline"></span>
              &nbsp;ion-ios-body-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-bolt"></span>
              &nbsp;ion-ios-bolt
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-bolt-outline"></span>
              &nbsp;ion-ios-bolt-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-book"></span>
              &nbsp;ion-ios-book
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-book-outline"></span>
              &nbsp;ion-ios-book-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-bookmarks"></span>
              &nbsp;ion-ios-bookmarks
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-ios-bookmarks-outline"
              ></span>
              &nbsp;ion-ios-bookmarks-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-box"></span>
              &nbsp;ion-ios-box
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-box-outline"></span>
              &nbsp;ion-ios-box-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-briefcase"></span>
              &nbsp;ion-ios-briefcase
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-ios-briefcase-outline"
              ></span>
              &nbsp;ion-ios-briefcase-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-browsers"></span>
              &nbsp;ion-ios-browsers
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-ios-browsers-outline"
              ></span>
              &nbsp;ion-ios-browsers-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-calculator"></span>
              &nbsp;ion-ios-calculator
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-ios-calculator-outline"
              ></span>
              &nbsp;ion-ios-calculator-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-calendar"></span>
              &nbsp;ion-ios-calendar
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-ios-calendar-outline"
              ></span>
              &nbsp;ion-ios-calendar-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-camera"></span>
              &nbsp;ion-ios-camera
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-ios-camera-outline"
              ></span>
              &nbsp;ion-ios-camera-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-cart"></span>
              &nbsp;ion-ios-cart
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-cart-outline"></span>
              &nbsp;ion-ios-cart-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-chatboxes"></span>
              &nbsp;ion-ios-chatboxes
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-ios-chatboxes-outline"
              ></span>
              &nbsp;ion-ios-chatboxes-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-chatbubble"></span>
              &nbsp;ion-ios-chatbubble
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-ios-chatbubble-outline"
              ></span>
              &nbsp;ion-ios-chatbubble-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-checkmark"></span>
              &nbsp;ion-ios-checkmark
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-ios-checkmark-empty"
              ></span>
              &nbsp;ion-ios-checkmark-empty
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-ios-checkmark-outline"
              ></span>
              &nbsp;ion-ios-checkmark-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-circle-filled"></span>
              &nbsp;ion-ios-circle-filled
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-ios-circle-outline"
              ></span>
              &nbsp;ion-ios-circle-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-clock"></span>
              &nbsp;ion-ios-clock
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-clock-outline"></span>
              &nbsp;ion-ios-clock-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-close"></span>
              &nbsp;ion-ios-close
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-close-empty"></span>
              &nbsp;ion-ios-close-empty
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-close-outline"></span>
              &nbsp;ion-ios-close-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-cloud"></span>
              &nbsp;ion-ios-cloud
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-ios-cloud-download"
              ></span>
              &nbsp;ion-ios-cloud-download
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-ios-cloud-download-outline"
              ></span>
              &nbsp;ion-ios-cloud-download-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-cloud-outline"></span>
              &nbsp;ion-ios-cloud-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-cloud-upload"></span>
              &nbsp;ion-ios-cloud-upload
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-ios-cloud-upload-outline"
              ></span>
              &nbsp;ion-ios-cloud-upload-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-cloudy"></span>
              &nbsp;ion-ios-cloudy
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-cloudy-night"></span>
              &nbsp;ion-ios-cloudy-night
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-ios-cloudy-night-outline"
              ></span>
              &nbsp;ion-ios-cloudy-night-outline
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-ios-cloudy-outline"
              ></span>
              &nbsp;ion-ios-cloudy-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-cog"></span>
              &nbsp;ion-ios-cog
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-ios-cog-outline"></span>
              &nbsp;ion-ios-cog-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-social-android"></span>
              &nbsp;ion-social-android
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-social-android-outline"
              ></span>
              &nbsp;ion-social-android-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-social-angular"></span>
              &nbsp;ion-social-angular
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-social-angular-outline"
              ></span>
              &nbsp;ion-social-angular-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-social-apple"></span>
              &nbsp;ion-social-apple
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-social-apple-outline"
              ></span>
              &nbsp;ion-social-apple-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-social-bitcoin"></span>
              &nbsp;ion-social-bitcoin
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-social-bitcoin-outline"
              ></span>
              &nbsp;ion-social-bitcoin-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-social-buffer"></span>
              &nbsp;ion-social-buffer
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-social-buffer-outline"
              ></span>
              &nbsp;ion-social-buffer-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-social-chrome"></span>
              &nbsp;ion-social-chrome
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-social-chrome-outline"
              ></span>
              &nbsp;ion-social-chrome-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-social-codepen"></span>
              &nbsp;ion-social-codepen
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-social-codepen-outline"
              ></span>
              &nbsp;ion-social-codepen-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-social-css3"></span>
              &nbsp;ion-social-css3
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-social-css3-outline"
              ></span>
              &nbsp;ion-social-css3-outline
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-social-designernews"
              ></span>
              &nbsp;ion-social-designernews
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-social-designernews-outline"
              ></span>
              &nbsp;ion-social-designernews-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-social-dribbble"></span>
              &nbsp;ion-social-dribbble
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-social-dribbble-outline"
              ></span>
              &nbsp;ion-social-dribbble-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-social-dropbox"></span>
              &nbsp;ion-social-dropbox
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-social-dropbox-outline"
              ></span>
              &nbsp;ion-social-dropbox-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-social-euro"></span>
              &nbsp;ion-social-euro
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-social-euro-outline"
              ></span>
              &nbsp;ion-social-euro-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-social-facebook"></span>
              &nbsp;ion-social-facebook
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-social-facebook-outline"
              ></span>
              &nbsp;ion-social-facebook-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-social-foursquare"></span>
              &nbsp;ion-social-foursquare
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-social-foursquare-outline"
              ></span>
              &nbsp;ion-social-foursquare-outline
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-social-freebsd-devil"
              ></span>
              &nbsp;ion-social-freebsd-devil
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-social-github"></span>
              &nbsp;ion-social-github
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-social-github-outline"
              ></span>
              &nbsp;ion-social-github-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-social-google"></span>
              &nbsp;ion-social-google
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-social-google-outline"
              ></span>
              &nbsp;ion-social-google-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-social-googleplus"></span>
              &nbsp;ion-social-googleplus
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-social-googleplus-outline"
              ></span>
              &nbsp;ion-social-googleplus-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-social-hackernews"></span>
              &nbsp;ion-social-hackernews
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-social-hackernews-outline"
              ></span>
              &nbsp;ion-social-hackernews-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-social-html5"></span>
              &nbsp;ion-social-html5
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-social-html5-outline"
              ></span>
              &nbsp;ion-social-html5-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-social-instagram"></span>
              &nbsp;ion-social-instagram
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-social-instagram-outline"
              ></span>
              &nbsp;ion-social-instagram-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-social-javascript"></span>
              &nbsp;ion-social-javascript
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-social-javascript-outline"
              ></span>
              &nbsp;ion-social-javascript-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-social-linkedin"></span>
              &nbsp;ion-social-linkedin
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-social-linkedin-outline"
              ></span>
              &nbsp;ion-social-linkedin-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-social-markdown"></span>
              &nbsp;ion-social-markdown
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-social-nodejs"></span>
              &nbsp;ion-social-nodejs
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-social-octocat"></span>
              &nbsp;ion-social-octocat
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-social-pinterest"></span>
              &nbsp;ion-social-pinterest
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-social-pinterest-outline"
              ></span>
              &nbsp;ion-social-pinterest-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-social-python"></span>
              &nbsp;ion-social-python
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-social-reddit"></span>
              &nbsp;ion-social-reddit
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-social-reddit-outline"
              ></span>
              &nbsp;ion-social-reddit-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-social-rss"></span>
              &nbsp;ion-social-rss
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-social-rss-outline"
              ></span>
              &nbsp;ion-social-rss-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-social-sass"></span>
              &nbsp;ion-social-sass
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-social-skype"></span>
              &nbsp;ion-social-skype
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-social-skype-outline"
              ></span>
              &nbsp;ion-social-skype-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-social-snapchat"></span>
              &nbsp;ion-social-snapchat
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-social-snapchat-outline"
              ></span>
              &nbsp;ion-social-snapchat-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-social-tumblr"></span>
              &nbsp;ion-social-tumblr
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-social-tumblr-outline"
              ></span>
              &nbsp;ion-social-tumblr-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-social-tux"></span>
              &nbsp;ion-social-tux
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-social-twitch"></span>
              &nbsp;ion-social-twitch
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-social-twitch-outline"
              ></span>
              &nbsp;ion-social-twitch-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-social-twitter"></span>
              &nbsp;ion-social-twitter
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-social-twitter-outline"
              ></span>
              &nbsp;ion-social-twitter-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-social-usd"></span>
              &nbsp;ion-social-usd
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-social-usd-outline"
              ></span>
              &nbsp;ion-social-usd-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-social-vimeo"></span>
              &nbsp;ion-social-vimeo
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-social-vimeo-outline"
              ></span>
              &nbsp;ion-social-vimeo-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-social-whatsapp"></span>
              &nbsp;ion-social-whatsapp
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-social-whatsapp-outline"
              ></span>
              &nbsp;ion-social-whatsapp-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-social-windows"></span>
              &nbsp;ion-social-windows
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-social-windows-outline"
              ></span>
              &nbsp;ion-social-windows-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-social-wordpress"></span>
              &nbsp;ion-social-wordpress
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-social-wordpress-outline"
              ></span>
              &nbsp;ion-social-wordpress-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-social-yahoo"></span>
              &nbsp;ion-social-yahoo
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-social-yahoo-outline"
              ></span>
              &nbsp;ion-social-yahoo-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-social-yen"></span>
              &nbsp;ion-social-yen
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-social-yen-outline"
              ></span>
              &nbsp;ion-social-yen-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-social-youtube"></span>
              &nbsp;ion-social-youtube
            </span>
            <span className="icon-box">
              <span
                aria-hidden="true"
                className="ion-social-youtube-outline"
              ></span>
              &nbsp;ion-social-youtube-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-soup-can"></span>
              &nbsp;ion-soup-can
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-soup-can-outline"></span>
              &nbsp;ion-soup-can-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-speakerphone"></span>
              &nbsp;ion-speakerphone
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-speedometer"></span>
              &nbsp;ion-speedometer
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-spoon"></span>
              &nbsp;ion-spoon
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-star"></span>
              &nbsp;ion-star
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-stats-bars"></span>
              &nbsp;ion-stats-bars
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-steam"></span>
              &nbsp;ion-steam
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-stop"></span>
              &nbsp;ion-stop
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-thermometer"></span>
              &nbsp;ion-thermometer
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-thumbsdown"></span>
              &nbsp;ion-thumbsdown
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-thumbsup"></span>
              &nbsp;ion-thumbsup
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-toggle"></span>
              &nbsp;ion-toggle
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-toggle-filled"></span>
              &nbsp;ion-toggle-filled
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-transgender"></span>
              &nbsp;ion-transgender
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-trash-a"></span>
              &nbsp;ion-trash-a
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-trash-b"></span>
              &nbsp;ion-trash-b
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-trophy"></span>
              &nbsp;ion-trophy
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-tshirt"></span>
              &nbsp;ion-tshirt
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-tshirt-outline"></span>
              &nbsp;ion-tshirt-outline
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-umbrella"></span>
              &nbsp;ion-umbrella
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-university"></span>
              &nbsp;ion-university
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-unlocked"></span>
              &nbsp;ion-unlocked
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-upload"></span>
              &nbsp;ion-upload
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-usb"></span>&nbsp;ion-usb
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-videocamera"></span>
              &nbsp;ion-videocamera
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-volume-high"></span>
              &nbsp;ion-volume-high
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-volume-low"></span>
              &nbsp;ion-volume-low
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-volume-medium"></span>
              &nbsp;ion-volume-medium
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-volume-mute"></span>
              &nbsp;ion-volume-mute
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-wand"></span>
              &nbsp;ion-wand
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-waterdrop"></span>
              &nbsp;ion-waterdrop
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-wifi"></span>
              &nbsp;ion-wifi
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-wineglass"></span>
              &nbsp;ion-wineglass
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-woman"></span>
              &nbsp;ion-woman
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-wrench"></span>
              &nbsp;ion-wrench
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-xbox"></span>
              &nbsp;ion-xbox
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-settings"></span>
              &nbsp;ion-settings
            </span>
            <span className="icon-box">
              <span aria-hidden="true" className="ion-search"></span>
              &nbsp;ion-search
            </span>
          </div>
        </div>
      </div>
    </section>
    <FooterOne />
  </Loader>
);

export default ThemeIconsPage;
