var $ = function(elem) {
  return document.getElementById(elem);
}



document.addEventListener('DOMContentLoaded', function () {
	$('playdc').addEventListener("click", function () {
		chrome.tabs.create({url: "http://www.darthcraft.net/play"});
		self.close();
	});
	
	$('viewwebsite').addEventListener("click", function () {
		chrome.tabs.create({url: "http://www.darthcraft.net/"});
		self.close();
	});
  
  // Voting tabs
  $('vote1').addEventListener("click", function () {
		chrome.tabs.create({url: "https://minestatus.net/19018-darthcraft-non-pvp-survival-freebuild-no-lag/vote"});
		self.close();
	});
  $('vote2').addEventListener("click", function () {
		chrome.tabs.create({url: "http://mcserverstatus.com/vote/13153"});
		self.close();
	});
  $('vote3').addEventListener("click", function () {
		chrome.tabs.create({url: "http://mclistserv.com/server/698"});
		self.close();
	});
  
  
  $('facebookpage').addEventListener("click", function () {
		chrome.tabs.create({url: "http://www.facebook.com/DarthCraftServer"});
		self.close();
	});
  $('facebookgroup').addEventListener("click", function () {
		chrome.tabs.create({url: "http://www.facebook.com/groups/DarthCraft/"});
		self.close();
	});
  $('donate').addEventListener("click", function () {
		chrome.tabs.create({url: "http://donate.darthcraft.net"});
		self.close();
	});
  
	
	$('viewforums').addEventListener("click", function () {
		//chrome.tabs.create({url: "http://www.darthcraft.net/play"});
		chrome.tabs.getCurrent(function (tab) {
			alert(tab.id);
			chrome.tabs.update(tab.id, {url: "http://www.darthcraft.net/forums"});
			self.close();
		});
	});
});