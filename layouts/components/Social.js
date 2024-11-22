import {
  IoCall,
  IoGlobeOutline,
  IoLocation,
  IoLogoBehance,
  IoLogoBitbucket,
  IoLogoCodepen,
  IoLogoDiscord,
  IoLogoDribbble,
  IoLogoFacebook,
  IoLogoFoursquare,
  IoLogoGithub,
  IoLogoGitlab,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoMedium,
  IoLogoPinterest,
  IoLogoReddit,
  IoLogoRss,
  IoLogoSkype,
  IoLogoSlack,
  IoLogoSnapchat,
  IoLogoSoundcloud,
  IoLogoTiktok,
  IoLogoTumblr,
  IoLogoTwitter,
  IoLogoVimeo,
  IoLogoVk,
  IoLogoWhatsapp,
  IoLogoYoutube,
  IoMail,
} from "react-icons/io5";
import Link from "next/link";
const Social = ({ source, className }) => {
  const {
    facebook,
    twitter,
    instagram,
    youtube,
    linkedin,
    github,
    gitlab,
    discord,
    slack,
    medium,
    codepen,
    bitbucket,
    dribbble,
    behance,
    pinterest,
    soundcloud,
    tumblr,
    reddit,
    vk,
    whatsapp,
    snapchat,
    vimeo,
    tiktok,
    foursquare,
    rss,
    email,
    phone,
    address,
    skype,
    website,
  } = source;
  return (
    <ul className={className}>
      {facebook && (
        <li className="inline-block">
          <Link
            aria-label="facebook"
            href={facebook}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoFacebook />
          </Link>
        </li>
      )}
      {twitter && (
        <li className="inline-block">
          <Link
            aria-label="twitter"
            href={twitter}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoTwitter />
          </Link>
        </li>
      )}
      {instagram && (
        <li className="inline-block">
          <Link
            aria-label="instagram"
            href={instagram}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoInstagram />
          </Link>
        </li>
      )}
      {youtube && (
        <li className="inline-block">
          <Link
            aria-label="youtube"
            href={youtube}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoYoutube />
          </Link>
        </li>
      )}
      {linkedin && (
        <li className="inline-block">
          <Link
            aria-label="linkedin"
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoLinkedin />
          </Link>
        </li>
      )}
      {github && (
        <li className="inline-block">
          <Link
            aria-label="github"
            href={github}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoGithub />
          </Link>
        </li>
      )}
      {gitlab && (
        <li className="inline-block">
          <Link
            aria-label="gitlab"
            href={gitlab}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoGitlab />
          </Link>
        </li>
      )}
      {discord && (
        <li className="inline-block">
          <Link
            aria-label="discord"
            href={discord}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoDiscord />
          </Link>
        </li>
      )}
      {slack && (
        <li className="inline-block">
          <Link
            aria-label="slack"
            href={slack}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoSlack />
          </Link>
        </li>
      )}
      {medium && (
        <li className="inline-block">
          <Link
            aria-label="medium"
            href={medium}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoMedium />
          </Link>
        </li>
      )}
      {codepen && (
        <li className="inline-block">
          <Link
            aria-label="codepen"
            href={codepen}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoCodepen />
          </Link>
        </li>
      )}
      {bitbucket && (
        <li className="inline-block">
          <Link
            aria-label="bitbucket"
            href={bitbucket}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoBitbucket />
          </Link>
        </li>
      )}
      {dribbble && (
        <li className="inline-block">
          <Link
            aria-label="dribbble"
            href={dribbble}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoDribbble />
          </Link>
        </li>
      )}
      {behance && (
        <li className="inline-block">
          <Link
            aria-label="behance"
            href={behance}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoBehance />
          </Link>
        </li>
      )}
      {pinterest && (
        <li className="inline-block">
          <Link
            aria-label="pinterest"
            href={pinterest}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoPinterest />
          </Link>
        </li>
      )}
      {soundcloud && (
        <li className="inline-block">
          <Link
            aria-label="soundcloud"
            href={soundcloud}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoSoundcloud />
          </Link>
        </li>
      )}
      {tumblr && (
        <li className="inline-block">
          <Link
            aria-label="tumblr"
            href={tumblr}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoTumblr />
          </Link>
        </li>
      )}
      {reddit && (
        <li className="inline-block">
          <Link
            aria-label="reddit"
            href={reddit}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoReddit />
          </Link>
        </li>
      )}
      {vk && (
        <li className="inline-block">
          <Link
            aria-label="vk"
            href={vk}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoVk />
          </Link>
        </li>
      )}
      {whatsapp && (
        <li className="inline-block">
          <Link
            aria-label="whatsapp"
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoWhatsapp />
          </Link>
        </li>
      )}
      {snapchat && (
        <li className="inline-block">
          <Link
            aria-label="snapchat"
            href={snapchat}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoSnapchat />
          </Link>
        </li>
      )}
      {vimeo && (
        <li className="inline-block">
          <Link
            aria-label="vimeo"
            href={vimeo}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoVimeo />
          </Link>
        </li>
      )}
      {tiktok && (
        <li className="inline-block">
          <Link
            aria-label="tiktok"
            href={tiktok}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoTiktok />
          </Link>
        </li>
      )}
      {foursquare && (
        <li className="inline-block">
          <Link
            aria-label="foursquare"
            href={foursquare}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoFoursquare />
          </Link>
        </li>
      )}
      {skype && (
        <li className="inline-block">
          <Link
            aria-label="skype"
            href={skype}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoSkype />
          </Link>
        </li>
      )}
      {website && (
        <li className="inline-block">
          <Link
            aria-label="website"
            href={website}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoGlobeOutline />
          </Link>
        </li>
      )}
      {rss && (
        <li className="inline-block">
          <Link
            aria-label="rss feed"
            href={rss}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoRss />
          </Link>
        </li>
      )}
      {email && (
        <li className="inline-block">
          <Link aria-label="email" href={`mailto:${email}`}>
            <IoMail />
          </Link>
        </li>
      )}
      {phone && (
        <li className="inline-block">
          <Link aria-label="telephone" href={`tel:${phone}`}>
            <IoCall />
          </Link>
        </li>
      )}
      {address && (
        <li className="inline-block">
          <Link
            aria-label="location"
            href={address}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLocation />
          </Link>
        </li>
      )}
    </ul>
  );
};

export default Social;
