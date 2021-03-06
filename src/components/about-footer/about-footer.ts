import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Http } from '@angular/http';
import { Config } from '../../service/config.service';
declare var open_target_blank: boolean;
declare var wordpress_url: string;
@Component({
  selector: 'about-footer',
  templateUrl: 'about-footer.html'
})
export class AboutFooterComponent {

  data: Object = {};

  constructor(
  	public navCtrl: NavController,
	public  InAppBrowser: InAppBrowser,
	public config: Config,
	public http: Http
	) {
		if(config['text_static']){
	 	this.data['facebook'] = config['text_static']['modern_link_facebook'];
		this.data['google'] = config['text_static']['modern_link_google'];
	 	this.data['twitter'] = config['text_static']['modern_link_twitter'];
		}
  }
	openLink(url: string, external: boolean = false) {
		console.log(url);
	 	if (!url) return;
	 	else this.InAppBrowser.create(url, open_target_blank ? "_blank" : "_system", "location=no");
	}

}
