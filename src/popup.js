var $ = function(elem) {
  return document.getElementById(elem);
}



document.addEventListener('DOMContentLoaded', function () {	
	$('viewwebsite').addEventListener("click", function () {
		chrome.tabs.create({url: "http://www.darthcraft.net/"});
		self.close();
	});
  
  $('viewforums').addEventListener("click", function () {
		chrome.tabs.create({url: "http://www.darthcraft.net/forums"});
		self.close();
	});
  
  // Voting tabs
  $('vote1').addEventListener("click", function () {
		chrome.tabs.create({url: "http://mclistserv.com/server/3961"});
		self.close();
	});
  $('vote2').addEventListener("click", function () {
		chrome.tabs.create({url: "http://minecraftservers.net/server/12259/vote/"});
		self.close();
	});
  $('vote3').addEventListener("click", function () {
		chrome.tabs.create({url: "http://minecraftservers.org/vote/36130"});
		self.close();
	});
  $('vote4').addEventListener("click", function () {
		chrome.tabs.create({url: "http://minecraft-server-list.com/server/66613/vote/"});
		self.close();
	});
  $('vote5').addEventListener("click", function () {
		chrome.tabs.create({url: "http://minecraft-mp.com/server/90971/vote/"});
		self.close();
	});
  $('vote6').addEventListener("click", function () {
		chrome.tabs.create({url: "http://www.minecraftserverland.com/vote/3727"});
		self.close();
	});
  $('vote7').addEventListener("click", function () {
		chrome.tabs.create({url: "http://www.serverpact.com/vote-26522"});
		self.close();
	});
  $('vote8').addEventListener("click", function () {
		chrome.tabs.create({url: "http://topg.org/Minecraft/in-412037"});
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
