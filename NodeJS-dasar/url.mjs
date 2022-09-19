import {URL} from "url";

const thisUrl = new URL("https://aksiberbagi.com/campaign/airsantriguntur?influencer=rekomen");


thisUrl.searchParams.append("status", "premium");
console.info(thisUrl.host);
console.info(thisUrl.pathname);
console.info(thisUrl.searchParams);
