(function () {
    function fetchDeviceInfo() {
      const iosImg = document.getElementById("iosImg");
      const androidImg = document.getElementById("androidImg");
      var isMobile = {
        Android: function () {
          return navigator.userAgent.match(/Android/i);
        },
        iOS: function () {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
      };
      var android = false,
        ios = false;
      if (isMobile.Android() && isMobile.Android().length) {
        android = true;
      }
      if (isMobile.iOS() && isMobile.iOS().length) {
        ios = true;
      }

      if(iosImg && androidImg) {
        if (android && !ios) {
          androidImg.classList.remove("hide");
          iosImg.classList.add("hide");
          androidImg.classList.add("show");
        } else if (!android && ios) {
          androidImg.classList.add("hide");
          iosImg.classList.remove("hide");
          iosImg.classList.add("show");
        }
      }
      
    }
  fetchDeviceInfo();
})();
var currentOpenTabTag ="";
function showNotifications() {
  $(".notification-icon")
    .parent(".notification")
    .find(".notification-list-container")
    .show(),
    // $("body").addClass("no-scroll"),
    $(
      ".personal-banking-overlay, .personal-banking-container, .search-overlay"
    ).hide();
  $(".menu-level-2 .right-side-menu .menu-leaf").removeClass("is-active");
  $(".sub-menu-wrapper").removeClass("is-active");
}

function closeNotifications() {
  $(".noti-close-btn")
    .closest(".notification")
    .find(".notification-list-container, .notification-overlay")
    .hide(),
    $("body").removeClass("no-scroll"),
    $(".notification-icon, .menu-search-box, .user-login").show();
}

function closePersonalBanking() {
  $(".personal-banking").removeClass("is-active"),
    $(".personal-close-btn")
      .closest(".personal-banking-wrapper")
      .siblings(".personal-banking-overlay")
      .hide()
      .removeClass("is-active"),
    $(".personal-close-btn")
      .closest(".personal-banking-wrapper")
      .find(".personal-banking-container, .personal-banking-overlay")
      .hide();
}

function closeSerach() {
  $("#search-main, #Search").val(""),
    $(".search-overlay, .overlay-search-box").hide(),
    $("header .menu-search-box #search-main, .mobile .search-box #Search").val(
      ""
    );
  $(".search-overlay").removeClass("is-active"),
    $("body").removeClass("no-scroll"),
    $(".burger-menu").show();
}

function closeRightProduct() {
  $(".find-product-menu").find(".title").removeClass("is-active");
  $(".find-product-menu")
    .find(".find-product-dropdown")
    .removeClass("is-active");
  $(".find-product-menu").siblings(".menu-overlay").hide();
  $(".fp-selectmenu").removeClass("ui-selectmenu-open");
  $(".ui-selectmenu-button").removeClass("ui-selectmenu-button-open");
}

function searchsearchList(searchArray, inputText, ulElement) {
  $(ulElement).html("");
  for (let index = 0; index < searchArray.length; index++) {
    let searchListItem = searchArray[index]["searchList"];
    let searchLinkItem = searchArray[index]["searchLink"];
    if (
      searchListItem.toUpperCase().includes(inputText.toUpperCase()) ||
      inputText == "all"
    ) {
      if (inputText != "all") {
        searchListItem = searchListItem.replace(
          inputText,
          "<b>" + inputText + "</b>"
        );
      }
      $(
        "<li> <a href='" + searchLinkItem + "'>" + searchListItem + "</a></li>"
      ).appendTo(ulElement);
    }
  }
}

function contactUsSlider() {
  !$(".contact-slider").hasClass("slick-initialized") &&
    $(".contact-slider").slick({
      dots: !0,
      infinite: !0,
      autoplay: !0,
      autoplaySpeed: 2e3,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
}
$(function ($) {
  $(document).click(function (e) {
    if ($(document).width() >= 960) {
      var $menu = $(".menu-container");
      let menuClick = $(e.target)
        .closest(".menu-inner")
        .parent()
        .hasClass("menu-level-3");
      if (menuClick) {
        $(".body-overlay").show();
        return true;
      }

      $menu.is(e.target) ||
      0 !== $menu.has(e.target).length ||
      !$(".menu-overlay").hasClass("is-active") ||
      $(".login-overlay").hasClass("is-active")
        ? $menu.is(e.target) ||
          0 !== $menu.has(e.target).length ||
          ($(".primary-menu > li").stop(!0, !0).removeClass("is-active"),
          $(".secondary-menu-wrapper")
            .stop(!0, !0)
            .fadeOut()
            .removeClass("is-active"),
          $(".body-overlay").removeClass("is-active"),
          $(".body-overlay").hide())
        : ($(".menu-overlay").hide(),
          $("body").removeClass("no-scroll"),
          $(".primary-menu > li, .menu-overlay").removeClass("is-active"),
          $(".notification-list-container, .notification-menu-overlay").hide(),
          $(".personal-banking-container, .personal-banking-overlay").hide(),
          $(".personal-banking").removeClass("is-active"));
      var $menu2 = $(".menu-container .overlay-search-box");
      !$menu2.is(e.target) &&
        0 === $menu2.has(e.target).length &&
        $(".menu-overlay").hasClass("is-active") &&
        ($(".search-overlay, .overlay-search-box").hide(),
        $(
          "header .menu-search-box #search-main, .mobile .search-box #Search"
        ).val(""),
        $("#search-main, #Search").val(""),
        $("body").removeClass("no-scroll"));
    }
    var $target = $(e.target);
    if (!$target.closest(".menu-level-2 .right-side-menu .menu-leaf").length) {
      $(".menu-level-2 .right-side-menu .menu-leaf").removeClass("is-active");
      $(".menu-level-2 .right-side-menu .menu-leaf")
        .find(".sub-menu-wrapper")
        .removeClass("is-active");
      if ($(".contact-slider").hasClass("slick-initialized"))
        $(".contact-slider").slick("unslick");
    }
    var $menu1 = $(".main-menu .primary-menu");
    navigator.userAgent.match(/iPad/i) ||
    null != navigator.userAgent.match(/iPad/i)
      ? $menu1.is(e.target) ||
        0 !== $menu1.has(e.target).length ||
        ($(".secondary-menu-wrapper").hide(), $(".body-overlay").hide())
      : !$menu1.is(e.target) &&
        0 === $menu1.has(e.target).length &&
        $(".body-overlay").hasClass("is-active") &&
        ($(".secondary-menu-wrapper").hide(), $(".body-overlay").hide());

    if (
      !$(e.target).closest(".find-product-menu").length &&
      !$(e.target).closest(".fp-selectmenu").length &&
      $(".find-product-dropdown").hasClass("is-active") &&
      !$target.hasClass("ui-selectmenu-text")
    ) {
      closeRightProduct();
    }
  });
  navigator.userAgent.match(/iPad/i) ||
  null != navigator.userAgent.match(/iPad/i)
    ? $(".menu-level-1 .menu-leaf").on("click", function () {
        closeNotifications(),
          closePersonalBanking(),
          closeRightProduct(),
          $(
            ".notification-list-container, .notification-menu-overlay, .search-overlay"
          ).hide(),
          (clickIndex = $(".menu-level-1 .menu-leaf").index($(this))),
          $(this).hasClass("is-active") &&
          $(".menu-level-1 .menu-leaf.is-active").index(
            $(".menu-level-1 .menu-leaf") == clickIndex
          )
            ? ($(this).removeClass("is-active"),
              $(this).find(".sub-menu-wrapper").removeClass("is-active"))
            : ($(".menu-level-1 .menu-leaf").removeClass("is-active"),
              $(".menu-level-1 .menu-leaf")
                .find(".sub-menu-wrapper")
                .removeClass("is-active"),
              $(this).addClass("is-active"),
              $(this).find(".sub-menu-wrapper").addClass("is-active")),
          contactUsSlider();
      })
    : $(
        ".menu-level-1 .menu-leaf, .menu-level-2 .right-side-menu .menu-leaf"
      ).hover(
        function () {
          closeNotifications(),
            closePersonalBanking(),
            closeRightProduct(),
            closeSerach(),
            $(this).addClass("is-active"),
            $(this).find(".sub-menu-wrapper").addClass("is-active"),
            contactUsSlider();
        },
        function () {
          $(this).removeClass("is-active"),
            $(this).find(".sub-menu-wrapper").removeClass("is-active");
          $(".contact-slider").slick("unslick");
        }
      );
  $(window)
    .bind("resize", function () {
      $(document).width() < 479
        ? ($(".notification-icon").on("click", function () {
            $(document).width() < 479 &&
              $(".menu-search-box, .notification-icon, .user-login").hide();
          }),
          $(".noti-close-btn:visible").length > 0 &&
            $(".menu-search-box, .notification-icon, .user-login").hide())
        : $(document).width() >= 479 &&
          $(".menu-search-box, .notification-icon, .user-login").show();
    })
    .trigger("resize"),
    $(".body-overlay").hover(function () {
      $(this).fadeOut();
    });
  $(".menu-close-btn").click(function (e) {
    $(".other-dropdown").removeClass("active"),
      $(".menu-inner .left-side-menu li.active").addClass("current"),
      $(".personal-menu").removeClass("active"),
      $(".menu-level-1").removeClass("active");
  }),
    $(".menu-btn").on("click", function () {
      $(
        ".menu-btn, .right-block, .lang-icon-mob, .languageselect-mob"
      ).toggleClass("hide"),
        $(".countryselect-mob").toggleClass("active"),
        $(".main-menu-wrapper").toggleClass("is-active"),
        $(".menu-list-item .menu-fold").removeClass("is-active"),
        $(".menu-tab-content .menu-tab-item").hide(),
        $(".menu-tab-content .menu-tab-item:eq(0)").show();
    }),
    $(".menu-back-link").on("click", function () {
      $(this).closest(".menu-fold").toggleClass("is-active");
    });
});
// adding subnavigation code here to execute this after scroll
const breadcrumbEl = $(".breadcrumb-nav");
if (breadcrumbEl.length) {
  $('.new-header.mobile.sticky-enable').css({ position: "relative" });
  if ($(window).width() < 991) {
   $('.page-content').css({ 'margin-top': "56px" });
  }
  //update 21/07/2021
  const bcElBottomOffset =
    breadcrumbEl.get(0).offsetTop + breadcrumbEl.get(0).offsetHeight + 30;
  $(window).on("scroll", function () {
    const mainMenuEl = $(".header-menu").get(0);
    if (
      mainMenuEl &&
      window.pageYOffset + mainMenuEl.offsetHeight > bcElBottomOffset
    ) {
      breadcrumbEl.addClass("sticky");
      if($('.sf-search-wrapper').length<=0){
        breadcrumbEl.addClass("nosearch");
      }
    } else {
      breadcrumbEl.removeClass("sticky");
    }
  });
} else {
  $(window).on("scroll", function () {
    $(window).scrollTop() > 130
      ? ($(".new-header.desktop").hasClass("sticky-enable") &&
          $(".new-header.desktop").addClass("sticky"),
        $(".new-header.mobile").hasClass("sticky-enable") &&
          $(".new-header.mobile").addClass("sticky"))
      : ($(".new-header.desktop").removeClass("sticky"),
        $(".new-header.mobile").removeClass("sticky"));
  });
}

$(document).ready(function () {
  $(".mobile-menu-wrapper .menu-tab-lists .menu-tab-list .menu-tab").click(
    function () {
      if ($(this).parent().hasClass("personal-tab")) {
        $(
          ".mobile-menu-wrapper .menu-tab-content .menu-list-item ul:first"
        ).show();
      }
      $(this).parent().find(".menu-tab-ul").toggle("show");
      //$(this).toggleClass('active');
    }
  );
  $("#language-drop li").click(function () {
    var selectedCountryLanguage = $(this).find("a").text();
    $(".languageselect #language span").text(selectedCountryLanguage),
      $("#language-drop").removeClass("is-active");
  });
  //defualt hide first menu in hamburg if offer-header class exist
  offerHeaderDefault();

  function offerHeaderDefault() {    
    if ($("header").hasClass("offer-header")) {
      $(
        ".mobile-menu-wrapper .menu-tab-lists .menu-tab-list .menu-tab"
      ).removeClass("active");
      $(
        ".mobile-menu-wrapper .menu-tab-lists .menu-tab-list .menu-tab-ul"
      ).hide();
      $(
        ".mobile-menu-wrapper .menu-tab-content .menu-list-item ul:first"
      ).hide();
    }
  }
  $(".close-menu").click(function () {
    offerHeaderDefault();
    if (!$(".main-menu-wrapper").hasClass("is-active") && breadcrumbEl.length) {
      $('.new-header.mobile.sticky-enable').css({ position: "relative" });
    }
  });
  $(".burger-menu").click(function () {
    if ($(".main-menu-wrapper").hasClass("is-active") && breadcrumbEl.length > 0 ) {
      $('.new-header.mobile.sticky-enable').css({ position: "fixed" });
    }
  });
  $(".login-overlay .menu-list-item li a")
    .off("click")
    .on("click", function (e) {
      if (!isMobile.iPad()) return;
      const $this = $(this);
      e.preventDefault();
      const dataIpad = $this[0].getAttribute("data-ipad");
      const href = $this[0].getAttribute("href");
      if (dataIpad) {
        window.location.href = dataIpad;
      } else {
        window.location.href = href;
      }
    });
  // below code is used in student ecosystem
  $(document).ready(function () {
    /* horizontal-tab */
    $(".student.horizontal-tab a").click(function () {
      $(this).parents(".student.horizontal-tab").find("li").removeClass("active");
      $(this).parent().addClass("active");
      let currentTab = $(this).attr("href");
      currentOpenTabTag = $(this).attr("tag");
      loadSolutionFilterCards($(this).attr("href"), $(this).attr("tag"));
      onChangeOfSolutionFilter($(this));
      $(this)
        .parents(".studenthorizontal.horizontal-link-tab")
        .find(".solutionpanel.tab-panel")
        .removeClass("active");
      $(currentTab).addClass("active");
      resetStudentForm();
      letsGetStartedCall("#" + $(this).parents().attr("id")); // call lets get started function for student ecosystem
      handleStudentNudges($(this).parents().attr("tag")); // call lets get started function for student nudges ecosystem
      return false;
    });
  });
});

 //27/04/2022 start for stick menu "stick2" inside a div "stickwholediv2"
 function stickmenuforspecificdiv(classname, stickname, scroll) {
  if ($("." + classname).length > 0) {
    var divstart = $("." + classname).offset().top + 50;
    var divheight = $("." + classname).outerHeight();
    var divheight = $("." + classname).outerHeight();
    var divend = divstart + divheight - 100;
    if (
      scroll >= divstart &&
      scroll < divend &&
      $("." + classname).isOnScreen()
    ) {
      $("." + classname + " ." + stickname).addClass("sticky");
    } else {
      $("." + classname + " ." + stickname).removeClass("sticky");
    }
  }
}

$(window).bind("scroll", function () {
  var scroll = $(window).scrollTop();
  stickmenuforspecificdiv("stickwholediv", "stick", scroll);
});

function queryParameters() {
  var result = {},
    param,
    params = document.location.search.split(/\?|\&/);
  params.forEach(function (it) {
    if (!it && it === "") return;
    param = it.split("=");
    result[param[0]] = param[1];
  });
  return result ? result : null;
}

function getQueryParams() {
  return document.location.search;
}

// changes to fix header active tab in case of student ecosystem only start:
function setActiveTabAccordingURL() {
  $(".menu-level-1 .link-area a").each(function() {
    $(this).parent().parent().removeClass("current");
    if(window.location.pathname.indexOf("parent") > -1 && $(this).attr("href").indexOf("parent") > -1) {
      $(this).parent().parent().addClass("current");
      localStorage.setItem("link-name", "PARENT");
      return false;
    }
    else if(window.location.pathname.indexOf("student") > -1 && $(this).attr("href").indexOf("student") > -1) {
      $(this).parent().parent().addClass("current");
      localStorage.setItem("link-name", "STUDENT");
      return false;
    }
    else if(window.location.pathname.indexOf("institute") > -1 && $(this).attr("href").indexOf("institute") > -1) {
      $(this).parent().parent().addClass("current");
      localStorage.setItem("link-name", "INSTITUTE");
      return false;
    }
  });
  // if user lands on solution page
  if(window.location.pathname.indexOf("solutions") > -1) {
    $(".menu-level-1 .link-area a").each(function() {
      $(this).parent().parent().removeClass("current");
    });
    localStorage.removeItem("link-name");
  }
  // if only campus power in url no subchild
  if(!(window.location.pathname.indexOf("campus-power/")> -1 )) {
    localStorage.setItem("link-name", "CAMPUS POWER");
  }
}
// changes to fix header active tab in case of student ecosystem only End:
var FedID = $.cookie("FedID"); // Fetch cookie for FedID
var FedID_NLI = $.cookie("Fed_ID_NLI"); // Fetch cookie for Fed_ID_NLI

$(document).ready(function () {
  addClassesToSegments();
  checkFedIdUser();
  let segmentName = readSegmentCookie("SEGMENT");
  replaceSelectedSegment(segmentName);
});

function checkFedIdUser() {
  if (typeof FedID != "undefined") {
    if (FedID != null) {
      $(".new-user-login").css("display", "none");
    }
  }

  if ($("#notificationIcon").length == 0) {
  } else {
    if (typeof FedID != "undefined") {
      if (FedID != null) {
        $("#notificationIcon").insertAfter($(".user-login"));
        $("#notificationIcon").css("display", "block");
      }
    } else {
      $("#notificationIcon").insertAfter($(".new-user-login"));
      $("#notificationIcon").css("display", "block");
    }
  }
}

// write cookie
function writeCookie(bankingSegment) {
  createSegmentCookie("SEGMENT", bankingSegment, 30);
}

function createSegmentCookie(cookieName, bankingSegment, expireTime) {
  var timestamp = "";
  if (expireTime) {
    var currentDate = new Date();
    currentDate.setTime(
      currentDate.getTime() + expireTime * 24 * 60 * 60 * 1000
    );
    timestamp = "; expires=" + currentDate.toUTCString();
  }
  document.cookie = cookieName + "=" + bankingSegment + timestamp + ";"; // need to add domain here
}

// Read Cookie
function readSegmentCookie(cookieName) {
  var cookieString = cookieName + "=";
  var cookiesArray = document.cookie.split(";");
  for (var i = 0; i < cookiesArray.length; i++) {
    var segmantCookie = cookiesArray[i];
    while (segmantCookie.charAt(0) == " ") {
      segmantCookie = segmantCookie.substring(1, segmantCookie.length);
    }
    if (segmantCookie.indexOf(cookieString) == 0) {
      return segmantCookie.substring(cookieString.length, segmantCookie.length);
    }
  }
  return null;
}

function replaceSelectedSegment(segmentName) {
  if (
    segmentName != "" &&
    segmentName != null &&
    /^[a-zA-Z\d]*$/i.test(segmentName)
  ) {
    if (segmentName == "Personal") {
      segmentName = "PersonalBanking";
    }
    if (segmentName == "Corporate") {
      segmentName = "CorporateBanking";
    }
    if (segmentName == "NRIBANKING") {
      segmentName = "NRIBanking";
    }
    var segmentText = $("." + segmentName).text();
    var segmentHref = $("." + segmentName).attr("href");
    if (
      segmentText != null &&
      segmentText != "" &&
      segmentHref != null &&
      segmentHref != "" &&
      typeof segmentText != "undefined" &&
      typeof segmentHref != "undefined"
    ) {
      $("#loginsection").replaceWith(
        '<a display-text="' +
          segmentName +
          '" class="ic-btn white" id="loginsection" href="' +
          segmentHref +
          '">' +
          segmentText +
          "</a>"
      );
      $("#login-btn").replaceWith(
        '<a id="login-btn" class="ic-btn" href="' +
          segmentHref +
          '" target="_self">LOGIN</a>'
      );
    }
  }
  var loginSection = $("#loginsection").attr("display-text");
  if (loginSection != "" && loginSection != null) {
    loginSection = loginSection.replace(" ", "");
    if ($("a").hasClass(loginSection)) {
      $("a." + loginSection)
        .parent()
        .remove();
    }
  }
}

$(".personal-list li a").on("click", function (e) {
  var anchorText = $(this).text();
  var cookieText = anchorText.replace(/\s+/g, "");
  writeCookie(cookieText);
});

function addClassesToSegments() {
  $(".personal-list li a").each(function () {
    $(this).addClass($(this).text().replace(/\s+/g, ""));
  });
}

$(function($) {
    $(".notification-icon").on("mouseover", function(event) {
            closeRightProduct();
            event.stopPropagation(),
                $(".notification-menu-overlay").is(":visible") ?
                closeNotifications() :
                showNotifications();
        }),
        $(".noti-close-btn").on("click", function() {
            closeNotifications();
        }),
        $(".personal-banking").on("mouseover", function(event) {
            $(".menu-level-2 .right-side-menu .menu-leaf").removeClass("is-active");
            $(".sub-menu-wrapper").removeClass("is-active");
            closeRightProduct();
            event.preventDefault(),
                event.stopPropagation(),
                $(this).addClass("is-active"),
                $(this)
                .parent(".personal-banking-wrapper")
                .siblings(".personal-banking-overlay")
                .show()
                .addClass("is-active"),
                $(this)
                .parent(".personal-banking-wrapper")
                .find(".personal-banking-container")
                .show(),
                $(
                    ".notification-list-container, .notification-menu-overlay, .search-overlay"
                ).hide();
        }),
        $(".personal-close-btn").on("click", function() {
            closePersonalBanking();
        }),
        $(".personal-banking-container").on("mouseleave", function() {
            closePersonalBanking();
        }),
        $(".personal-list a").on("click", function(e) {
            $(".personal-banking a").html(e.currentTarget.text),
                $(".personal-banking-overlay, .personal-banking-container").hide();
        }),
        $(".device-noti-btn").on("click", function() {
            $(this)
                .closest(".notification")
                .siblings(".notification-menu-overlay")
                .show()
                .addClass("is-active"),
                $(".languageselect-mob").addClass("active"),
                $(".languageselect-mob").removeClass("hide"),
                $(".countryselect-mob").addClass("active"),
                $(".notification-list-container").show(),
                $("body").addClass("no-scroll"),
                $(".search-wrapper, .device-noti-btn, .mob-user-login").hide(),
                $(".noti-close-btn .close-icon").show(),
                $(".burger-menu").hide();
            $(".search").hide();
        }),
        $(".noti-close-btn .close-icon").on("click", function() {
            $(".notification-icon, .menu-search-box, .user-login").show(),
                $(".search-wrapper, .device-noti-btn, .mob-user-login").show(),
                $(this)
                .closest(".notification-menu-overlay")
                .hide()
                .removeClass("is-active"),
                $(".languageselect-mob").removeClass("active"),
                $(".languageselect-mob").addClass("hide"),
                $(".countryselect-mob").removeClass("active"),
                $("body").removeClass("no-scroll"),
                $(".burger-menu").show();
            $(".search").show();
        }),
        $(".mob-user-login .ic-btn").on("click", function() {
            $(this).hide(),
                $(".burger-menu").hide(),
                $(".login-overlay, .login-close-btn, .languageselect-mob").show(),
                $(".countryselect-mob").addClass("active"),
                $(".search-wrapper, .notification").hide(),
                $(".languageselect-mob").removeClass("hide");
            $(".countryselect-mob").removeClass("hide");
            $(".search").hide();
        }),
        $(".login-close-btn").on("click", function() {
            $(this).hide(),
                $(".burger-menu").show(),
                $(".search-wrapper, .notification,.mob-user-login .ic-btn").show(),
                $(".languageselect-mob").addClass("hide");
            $(".countryselect-mob").removeClass("active");
            $(".login-overlay").hide();
            $(".search").show();
        }),
        $(".user-login").on("click", function(e) {
            $(this).find(".login-overlay").hasClass("is-active") ?
                ($(this).find(".login-overlay").removeClass("is-active"),
                    $(this).find(".login-overlay").hide()) :
                ($(this).find(".login-overlay").show(),
                    $(this).find(".login-overlay").addClass("is-active"),
                    $(".personal-banking").removeClass("is-active"),
                    $(".personal-banking-overlay").removeClass("is-active").hide(),
                    $(".personal-banking-container").hide(),
                    $(
                        ".notification-list-container, .notification-menu-overlay, .search-overlay"
                    ).hide());
        }),
        $(".login-close-btn").on("click", function() {
            $(".search-wrapper, .notification,.mob-user-login .ic-btn").show();
        }),
        $(".menu-level-1 .other-menu").hover(function(e) {
            e.preventDefault();
        }),
        $(".menu-level-1 .personal-menu").hover(
            function() {},
            function() {
                if ($(".personal-menu").hasClass("active")) {
                    $(".menu-close-btn").trigger("click");
                }
            }
        ),
        $(".menu-level-1 .personal-menu .link-area a").hover(function(e) {
            e.preventDefault();
            $(".menu-level-1-child .menu-leaf").removeClass("is-active");
            $(".other-menu").removeClass("active current");
            $(".menu-level-1-child .sub-menu-wrapper").removeClass("is-active");
            $(".other-dropdown").removeClass("active");
            $(this).closest(".personal-menu").addClass("active");
            $(this)
                .closest(".personal-menu")
                .find(".other-dropdown")
                .addClass("active");
            $(".menu-level-1").addClass("active");
        }),
        $(".menu-level-1-child li").click(function(e) {
            if ($(e.target).closest(".contact-slider").length) return true;
            $(this).hasClass("other-menu") || $(".menu-close-btn").trigger("click");
        }),
        $(".menu-tab").on("click", function() {
            $(".menu-tab-ul").hide(),
                $(".menu-tab").removeClass("active"),
                $(this).addClass("active"),
                $(this).siblings("ul").toggle();
        }),
        $(".menu-tab-list li").on("click", function() {
            $(".menu-tab-list ul li").removeClass("is-active"),
                (clickIndex = $(this).parent("ul").find("li").index($(this))),
                (showDiv = $(this).parent("ul").attr("data-tab")),
                null != showDiv &&
                "" != showDiv &&
                ($(".menu-tab-item").hide(),
                    $("#" + showDiv)
                    .find(".menu-tab-item")
                    .hide(),
                    $("#" + showDiv + " .menu-tab-item:eq(" + clickIndex + ")").show()),
                $(".menu-tab-list ul").hide(),
                $(this).addClass("is-active"),
                "business-tab" == showDiv ?
                $(".business-tab .menuitem-active").html($(this).find("a").html()) :
                "personal-tab" == showDiv &&
                $(".personal-tab .menuitem-active").html($(this).find("a").html());
        }),
        $(".menu-list-item ul li p").on("click", function() {
            $(".menu-tab-list .menu-tab").removeClass("active"),
                $(".menu-tab-list .menu-tab-ul").hide(),
                $(this).siblings(".menu-fold").toggleClass("is-active");
        });

    function removeActiveClass(el) {
        $(".menu-level-1 ul li").removeClass("active current");
    }

    $(".menu-level-1 .link-area a")
        .off("click")
        .on("click", function() {
            $this = $(this);
            removeActiveClass($this);
            localStorage.setItem("link-name", $this.text());

            $this.closest("li").addClass("current");
        });

    $(".menu-level-1 .dropdown-inner ul li a")
        .off("click")
        .on("click", function() {
            $this = $(this);
            $(".menu-level-1 .dropdown-inner")
                .find("li")
                .each(function() {
                    $(this).find("a").removeClass("active");
                });
            localStorage.setItem("link-name", $this.text());
            $this.addClass("active");

            $(".menu-level-1 .other-menu.active .link-area a").html(
                $this.text() + '<span class="open-status"></span>'
            );
        });
});
$(document).ready(function() {
    $(".languageselect-mob span").click(function() {
        $(".languageselect-mob #language-drop").toggleClass("active");
    });
    $(".languageselect-mob #language-drop li").click(function() {
        var selectedCountryLanguage = $(this).find("a").text();
        $(".languageselect-mob span").text(selectedCountryLanguage);
        $(".languageselect-mob #language-drop").removeClass("active");
    });
    $(document).click(function(event) {
        var $target = $(event.target);
        if (!$target.closest(".languageselect-mob span").length &&
            !$target.closest(".languageselect-mob #language-drop").length
        ) {
            $(".languageselect-mob #language-drop").removeClass("active");
        }
    });
});

$(window).on("load", function() {
    var link = localStorage.getItem("link-name");
    if (link) {
        $(".menu-level-1 ul li").removeClass("active current");
        $(".menu-level-1 ul li.other-menu").each(function() {
            var that = $(this);
            if (that.find(".link-area a").text().indexOf(link) >= 0) {
                that.addClass("current");
            } else {
                $(this)
                    .find(".other-dropdown ul li")
                    .each(function() {
                        $(this).find("a").removeClass("active");
                        if ($(this).find("a").text().indexOf(link) >= 0) {
                            that.addClass("current");
                            that
                                .find(".link-area a")
                                .html(link + '<span class="open-status"></span>');
                            $(this).find("a").addClass("active");
                        }
                    });
            }
        });
    }
});
$(function ($) {
  $(".menu-search-box, .icon-search").on("click", function (event) {
    event.stopPropagation(),
      $(".search-overlay, .overlay-search-box, .search-filter-box").show(),
      $(".search-overlay").addClass("is-active"),
      $("#search-main").val(""),
      $("body").addClass("no-scroll"),
      $(".burger-menu").hide(),
      $(
        ".notification-list-container, .notification-menu-overlay, .personal-banking-overlay, .personal-banking-container"
      ).hide();
  }),
    $(".search-btns button.close-btn").on("click", function (event) {
      event.preventDefault(), closeSerach();
    });
  $(".menu-level-2 .right-side-menu .menu-leaf").click(function (event) {
    if ($(document).width() >= 960) {
      $(".sub-menu-wrapper").removeClass("is-active");
      $(".menu-level-2 .right-side-menu .menu-leaf").removeClass("is-active");
      $(this).addClass("is-active");
      $(this).find(".sub-menu-wrapper").addClass("is-active");
      closePersonalBanking();
      contactUsSlider();
    }
  });
});
$(document).ready(function () {
  var searchArray = [
    {
      searchList: "How to open bank account online?",
      searchLink: "https://www.google.com/",
    },
    {
      searchList: "How to Link Aadhar Card to your bank account in 4 simple...",
      searchLink: "https://www.google.com/",
    },
    {
      searchList: "How to access your ICICI Bank Canada account?",
      searchLink: "https://www.google.com/",
    },
    {
      searchList: "How to recharge TataSky DTH with an SMS",
      searchLink: "https://www.google.com/",
    },
    {
      searchList: "How to login to your ICICI Bank Canada account?",
      searchLink: "https://www.google.com/",
    },
  ];
  /* Search Start*/
  $("header .menu-search-box #search-main, .mobile .search-box #Search ").focus(
    function () {
      $(
        "header .menu-search-box #search-main, .mobile header .menu-search-box #Search"
      ).addClass("active");
      $(
        "header .search-listing, .mobile .search-listing ul, .mobile.search-listing ul"
      ).show();
      $(
        "header .menu-search-box #search-main, .mobile .search-box #Search"
      ).val("");

      $("header .search-listing, .mobile .search-listing").addClass("active");
      var inputText = $(this)[0].value;
      if (inputText.length > 0)
        searchsearchList(
          searchArray,
          inputText,
          "header ul.search-list, .mobile ul.search-list"
        );
      else $("header .search-list").html("");
    }
  );

  $("header .menu-search-box input, .mobile .search-box input").keyup(
    function () {
      var inputText = $(this)[0].value;
      if (inputText.length > 0)
        searchsearchList(
          searchArray,
          inputText,
          "header ul.search-list, .mobile ul.search-list"
        );
      else $("header .search-list, .mobile .search-list").html("");
    }
  );

  $(document).click(function (event) {
    var $target = $(event.target);
    //Search list
    if (
      !$target.closest(".search").length &&
      !$target.closest(".search-filter-box").length &&
      !$target.closest(".search-overlay").length
    ) {
      $(
        "header .menu-search-box input, .mobile header .menu-search-box input"
      ).removeClass("active");
      $(
        "header .menu-search-box #search-main, .mobile .search-box #Search"
      ).val("");

      $("header .search-listing, .mobile .search-listing").removeClass(
        "active"
      );
    }

    $(
      "header .search-listing, .mobile .search-listing .search-overlay-area"
    ).click(function () {
      if (
        $("header .search-listing, .mobile .search-listing").hasClass("active")
      ) {
        $(
          "header .menu-search-box input, .mobile header .menu-search-box input"
        ).removeClass("active");
        $("header .search-listing, .mobile .search-listing").removeClass(
          "active"
        );
      }
    });
  });
  /* Search End*/

  $(".search-overlay").click(function () {
    $("header .menu-search-box #search-main, .mobile .search-box #Search").val(
      ""
    );
  });

  $(document).on(
    "click",
    "header .search-list li, .mobile .search-list li",
    function () {
      $(
        "header .menu-search-box #search-main, .mobile .search-box #Search"
      ).val($(this).text());
      $("header .search-overlay").hide();
    }
  );
});

$(function ($) {
    $(".mob-user-login .ic-btn, .burger-menu, .device-noti-btn").on("click", function () {
        $(".cus-icon").addClass("active1");
        $(".logo").addClass("logo-active");
    }),
    $(".login-close-btn, .close-menu, .noti-close-btn").on("click", function () {
        $(".cus-icon").removeClass("active1");
        $(".logo").removeClass("logo-active");
    });
})
$(function ($) {
  navigator.userAgent.match(/iPad/i) ||
  null != navigator.userAgent.match(/iPad/i)
    ? $("ul.primary-menu").on(
        "touchstart",
        function () {
          $(".body-overlay").show().addClass("is-active");
        },
        function () {
          $(".body-overlay").hide().removeClass("is-active");
        }
      )
    : $("ul.primary-menu").hover(
        function () {
          //$(".body-overlay").show().addClass("is-active"),
          closeRightProduct();
          closeNotifications(), closePersonalBanking(), closeSerach();
        },
        function () {
          $(".body-overlay").hide().removeClass("is-active");
        }
      ),
    navigator.userAgent.match(/iPad/i) ||
    null != navigator.userAgent.match(/iPad/i)
      ? $("ul.primary-menu > li").on("click", function () {
          $(".menu-level-1-child .menu-leaf").removeClass("is-active"),
            $(".menu-level-1-child .sub-menu-wrapper").removeClass("is-active"),
            $(".menu-level-1-child .sub-menu-wrapper").removeClass("is-active"),
            $(".menu-close-btn").trigger("click"),
            $(this).hasClass("is-active")
              ? ($(".secondary-menu-wrapper").removeClass("is-active"),
                $(".secondary-menu-wrapper").hide())
              : ($(".secondary-menu-wrapper").removeClass("is-active"),
                $(".secondary-menu-wrapper").hide(),
                $(this).find(".secondary-menu-wrapper").addClass("is-active"),
                $(this).find(".secondary-menu-wrapper").show());
        })
      : $("ul.primary-menu > li").hover(
          function () {
            $(this).hasClass("is-active") ||
              ($(".secondary-menu-wrapper")
                .stop(!0, !0)
                .slideUp()
                .removeClass("is-active"),
              $(".primary-menu > li").stop(!0, !0).removeClass("is-active")),
              $(".body-overlay").hasClass("is-active")
                ? $(this)
                    .find(".secondary-menu-wrapper")
                    .stop(!0, !0)
                    .toggle()
                    .toggleClass("is-active")
                : $(this)
                    .find(".secondary-menu-wrapper")
                    .stop(!0, !0)
                    .slideToggle(1e3)
                    .toggleClass("is-active"),
              $(this).stop(!0, !0).toggleClass("is-active");

            if ($(this).find(".secondary-menu-wrapper").length > 0) {
              $(".body-overlay").show().addClass("is-active");
            } else {
              $(".body-overlay").hide().removeClass("is-active");
            }
          },
          function () {
            $(".secondary-menu-wrapper")
              .stop(!0, !0)
              .slideUp()
              .removeClass("is-active"),
              $(".primary-menu > li").stop(!0, !0).removeClass("is-active");
          }
        ),
    navigator.userAgent.match(/iPad/i) ||
    null != navigator.userAgent.match(/iPad/i)
      ? $(".secondary-menu > li").on("click", function () {
          var listItem = $(this).index();
          ($parent = $(this).closest(".menu-container")),
            $parent.find(".secondary-menu > li").removeClass("active"),
            $(this).addClass("active"),
            $parent.find(".second-menu-tab-item").each(function (i) {
              i == listItem
                ? ($(this).show(),
                  $(this)
                    .parent(".secondary-menu-wrapper")
                    .addClass("is-active"),
                  $(this).parent(".secondary-menu-wrapper").show())
                : $(this).hide();
            });
        })
      : $(".secondary-menu > li").hover(function () {
          var listItem = $(this).index();
          ($parent = $(this).closest(".menu-container")),
            $parent.find(".secondary-menu > li").removeClass("active"),
            $(this).addClass("active"),
            $parent.find(".second-menu-tab-item").each(function (i) {
              i == listItem ? $(this).show() : $(this).hide();
            });
        });
  $(".menu-level-3 .find-product-menu .title").click(function (event) {
    if (event.target !== this) return; // Do nothing
    closeNotifications();
    closePersonalBanking();
    closeSerach();
    $(this).toggleClass("is-active");
    $(this).siblings(".find-product-dropdown").toggleClass("is-active");
    $(this).parent().siblings(".menu-overlay").toggle();
  });
  $(".menu-level-3  .find-pro-select").selectmenu({
    classes: {
      "ui-selectmenu-menu": "fp-selectmenu",
    },
  });
});

$(document).ready(function () {
  $("#dropDown").selectmenu({
    change: function () {
      if ($(this).val() != "") {
        window.location = $(this).val();
      }
    },
  });

  // on document completed parsing HTML (but sub-resources such as scripts, images, stylesheets and frames are still loading)
  if ($(".scrollContainerWrapper").length > 0) {
    if (document.readyState === "interactive") {
      if (location.hash !== "") {
        scrollToElement(location.hash);
      } else {
        window.scrollTo(0, 0);
      }
    }
  }
});

// scroll on anchor tag click of #Href with in rightColumnContainer class
$('.scrollContainerWrapper a[href*="#"]').click(function (event) {
  if (
    location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") &&
    location.hostname === this.hostname
  ) {
    // window.location.hash = this.hash; -- reloading the page
    // history.pushState(null, null, this.hash);
    event.preventDefault();
    scrollToElement(this.hash);
  }
});

function scrollToElement(hash) {
  const target = $(hash);
  //   target = target.length ? target : $("[name=" + this.hash.slice(1) + "]"); // use name in case
  if (target.length) {
    let offSetPadding = 0;
    let desktopHeader = $(".new-header.desktop")[0];
    if (desktopHeader) {
      let desktopHeaderHeight = desktopHeader.offsetHeight;
      const extraDesktopHeight =
        $(".new-header.desktop.sticky-enable.sticky").length !== 0
          ? 0
          : desktopHeaderHeight;
      // double the header height
      desktopHeaderHeight = desktopHeaderHeight + extraDesktopHeight;
      // here we are selecting 2nd search box i.e mobile version since, first search box is for header
        const mobileHeaderHeight =
        ($(".new-header.mobile")[0]?desktopHeader.offsetHeight:0) +
        ($(".new-header.mobile > .search")[0]?desktopHeader.offsetHeight:0);
      offSetPadding =
        desktopHeaderHeight === 0 ? mobileHeaderHeight : desktopHeaderHeight;
    }
    const extraPadding = 8;
    $("html, body").animate(
      {
        scrollTop: target.offset().top - offSetPadding - extraPadding,
      },
      500
    );
  }
}
(function ($, $document) {
  $document.on("dialog-ready", function () {
    var COMPOSITE_MULTIFIELD_SELECTOR =
        "coral-multifield[data-granite-coral-multifield-composite]",
      FILE_REFERENCE_PARAM = "fileReference",
      registry = $(window).adaptTo("foundation-registry"),
      ALLOWED_MIME_TYPE = "image/jpeg",
      adapters = registry.get("foundation.adapters");

    var fuAdapter = _.reject(adapters, function (adapter) {
      return (
        adapter.type !== "foundation-field" ||
        adapter.selector !== "coral-fileupload.cq-FileUpload"
      );
    });

    if (_.isEmpty(fuAdapter)) {
      return;
    }

    fuAdapter = fuAdapter[0];

    var orignFn = fuAdapter.adapter;

    fuAdapter.adapter = function (el) {
      return Object.assign(orignFn.call(el), {
        getName: function () {
          return el.name;
        },
        setName: function (name) {
          var prefix = name.substr(0, name.lastIndexOf(el.name));

          el.name = name;

          $("input[type='hidden'][data-cq-fileupload-parameter]", el).each(
            function (i, el) {
              if (
                $(el).data("data-cq-fileupload-parameter") !== "filemovefrom"
              ) {
                this.setAttribute("name", prefix + this.getAttribute("name"));
              }
            }
          );
        },
      });
    };

    $document.on("foundation-contentloaded", function (e) {
      var composites = $(COMPOSITE_MULTIFIELD_SELECTOR, e.target);

      composites.each(function () {
        Coral.commons.ready(this, function (el) {
          addThumbnails(el);
        });
      });
    });

    function addThumbnails(multifield) {
      var $multifield = $(multifield),
        dataPath = $multifield.closest(".cq-dialog").attr("action"),
        mfName = $multifield.attr("data-granite-coral-multifield-name");

      dataPath = dataPath + "/" + getStringAfterLastSlash(mfName);

      $.ajax({
        url: dataPath + ".2.json",
        cache: false,
      }).done(handler);

      function handler(mfData) {
        multifield.items.getAll().forEach(function (item, i) {
          var $mfItem = $(item),
            $fileUpload = $mfItem.find("coral-fileupload");

          if (_.isEmpty($fileUpload)) {
            return;
          }

          var itemName = getJustItemName($fileUpload.attr("name"));

          if (
            _.isEmpty(mfData[itemName]) ||
            _.isEmpty(mfData[itemName][FILE_REFERENCE_PARAM])
          ) {
            return;
          }

          var imagePath = mfData[itemName][FILE_REFERENCE_PARAM];

          $fileUpload.trigger(
            $.Event("assetselected", {
              path: imagePath,
              group: "",
              mimetype: ALLOWED_MIME_TYPE, // workaround to add thumbnail
              param: "",
              thumbnail: getThumbnailHtml(imagePath),
            })
          );
        });
      }

      function getThumbnailHtml(path) {
        return (
          "<img class='cq-dd-image' src='" +
          path +
          "/_jcr_content/renditions/cq5dam.thumbnail.319.319.png'>"
        );
      }

      function getJustItemName(itemName) {
        itemName = itemName.substr(
          itemName.indexOf(mfName) + mfName.length + 1
        );

        itemName = itemName.substring(0, itemName.indexOf("/"));

        return itemName;
      }
    }

    function getStringAfterLastSlash(str) {
      if (!str || str.indexOf("/") == -1) {
        return "";
      }

      return str.substr(str.lastIndexOf("/") + 1);
    }
  });
})(jQuery, jQuery(document));

$(document).ready(function () {
  $(".countryselect-mob #country").click(function () {
    $(".countryselect-mob #country-drop").toggleClass("active");
  });
  $(".countryselect-mob #country-drop li").click(function () {
    var selectedCountryImage = $(this).find("img").attr("src");
    $(".countryselect-mob #country")
      .find("img")
      .attr("src", selectedCountryImage);
    $(".countryselect-mob #country-drop").removeClass("active");
  });
  $(document).click(function (event) {
    var $target = $(event.target);
    if (
      !$target.closest(".countryselect-mob #country").length &&
      !$target.closest(".countryselect-mob #country-drop").length
    ) {
      $(".countryselect-mob #country-drop").removeClass("active");
    }
  });
  $(".countryselect li").click(function () {
    var selectedCountryImage = $(this).find("img").attr("src");
    $(".countryselect #country").find("img").attr("src", selectedCountryImage),
      $("#country-drop").removeClass("is-active");
  });
});
$(function ($) {
  $(".menu-leaf.countryselect").hover(
    function () {
      closeNotifications(),
        closePersonalBanking(),
        closeRightProduct(),
        closeSerach(),
        $(this).addClass("is-active"),
        $(this).find(".sub-menu-wrapper").addClass("is-active"),
        contactUsSlider();
    },
    function () {
      $(this).removeClass("is-active"),
        $(this).find(".sub-menu-wrapper").removeClass("is-active");
      $(".contact-slider").slick("unslick");
    }
  );
});

function toogleFooter() {
  $(".accordion-identifier").unbind("click"),
    $(".accordion-identifier").on("click", function () {
      $(window).width() <= 768 &&
        ($(this).next(".acc-default").slideToggle(this),
        $(this).toggleClass("collapsible-arrows"));
    });
}
$(this).closest("#include-footer") &&
  ($("select").selectmenu(),
  $("#group-websites1, #group-websites2").selectmenu({
    change: function () {
      if ("" != $(this).val()) {
        var url = $(this).val();
        window.open(url, "_blank");
      }
    },
  }));
var timeout = 0;
function setDropdownPostition() {
  var eTop,
    eTopWindow =
      $(".ui-selectmenu-button-open").offset().top - $(window).scrollTop(),
    bottomSpace = $(window).height() - eTopWindow,
    menuHeight = $(".ui-selectmenu-open ul").height();
  const menuButton = document.querySelector(".ui-selectmenu-button-open"),
    menuWrapper = document.querySelector(".ui-selectmenu-open");
  bottomSpace > menuHeight
    ? Popper.createPopper(menuButton, menuWrapper, { placement: "bottom" })
    : Popper.createPopper(menuButton, menuWrapper, { placement: "top" });
}
$(window).on("load resize orientationchange", function () {
  clearInterval(timeout),
    $(window).width() >= 991
      ? ($(".acc-default").show(),
        $(".acc-label").removeClass("accordion-identifier"))
      : ($(".acc-default").hide(),
        $(".acc-label").addClass("accordion-identifier"),
        (timeout = setTimeout(function () {}, 250)));
}),
  $(
    ".top-menu-list-wrapper .menu-list, .bottom-menu-list-wrapper .menu-links,.footer .primary-inner"
  ).on("click", function () {
    $(window).width() < 991 &&
      (!$(this).find(".acc-default:visible").length > 0 &&
        ($(".top-menu-list-wrapper, .bottom-menu-list-wrapper")
          .find(".acc-default:visible")
          .slideToggle(this),
        $(".top-menu-list-wrapper, .bottom-menu-list-wrapper")
          .find(".collapsible-arrows")
          .toggleClass("collapsible-arrows")),
      $(this).find(".acc-default").slideToggle(this),
      $(this).find(".accordion-identifier").toggleClass("collapsible-arrows"));
  }),
  $(".ui-selectmenu-button").click(function () {
    $(".ui-selectmenu-button-open").length > 0 && setDropdownPostition();
  });

$(document).ready(function () {
  benefitShortCardSlider();
});

function benefitShortCardSlider() {
  $(".benefit-short-card .cards-list-carousel").slick({
    dots: !0,
    arrows: !0,
    infinite: !0,
    autoplay: !0,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, dots: !1 } },
      { breakpoint: 767, settings: { slidesToShow: 2, dots: !0, arrows: !1 } },
      { breakpoint: 560, settings: { slidesToShow: 1, dots: !0, arrows: !1 } },
    ],
  });
}

const cardListItem = $(".benefit-short-card .card-list-item-carousel");
/* 26/02/2021 end */
if (cardListItem) {
  cardListItem.slick({
    dots: !0,
    arrows: !0,
    infinite: !0,
    autoplay: !0,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, dots: !1 } },
      {
        breakpoint: 767,
        settings: { slidesToShow: 2, dots: !0, arrows: !1 },
      },
      {
        breakpoint: 560,
        settings: { slidesToShow: 1, dots: !0, arrows: !1 },
      },
    ],
  });
}

$(window).on("load resize orientationchange", function () {
  $(".benefit-short-card .card-list-item-carousel .card-list").equalHeights();
});

$(window).on("load", function () {
  $(".mscroll").mCustomScrollbar();
});

function iframeHeight() {
  $(".banner-slider .video-media iframe").height($(".image-media").height()),
    $(".banner-slider .video-media video").height($(".image-media").height());
}

function setClassTagline() {
  setTimeout(function () {
    $(".banner-list .tagline").addClass("banner-nudge-active");
  }, 1e3);
}
//MCCM Post event : start
if($(document).width() > 991 && $(".d-img.unica-banner").length > 0){	
  //$(".banner-slider").on("beforeChange", function (e, i, n, a) { 
  $(".banner-slider").on("afterChange init", function (e, slick) {

    $(".slick-active .d-img.unica-banner a.postEvent span.presentation-post-event-mccm").attr("class","presentation-post-event");
      BannerPostEvent();	
    $(".slick-active .d-img.unica-banner a.postEvent span.presentation-post-event").remove();
    
  });
} else if($(document).width() < 991 && $(".m-img.unica-banner").length > 0){
  //$(".banner-slider").on("beforeChange", function (e, i, n, a) { 
  $(".banner-slider").on("afterChange init", function (e, slick) {

    $(".slick-active .m-img.unica-banner a.postEvent span.presentation-post-event-mccm").attr("class","presentation-post-event");
      BannerPostEvent();	
    $(".slick-active .m-img.unica-banner a.postEvent span.presentation-post-event").remove();
    });
}
var bannerSlider;
if($(document).width() < 991){
   bannerSlider = $(".banner-slider.hero-mobile.i-home-banner").slick({
    dots: !0,
    infinite: !0,
    autoplay: !0,
    autoplaySpeed: 5000,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{ breakpoint: 991, settings: { adaptiveHeight: !0 } }],
  });
  if($('.banner-slider.hero-mobile.hero-desktop').length ===0){
    $(".banner-slider.hero-desktop").remove();
  }
}else{
   bannerSlider = $(".banner-slider.hero-desktop.i-home-banner").slick({
    dots: !0,
    infinite: !0,
    autoplay: !0,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{ breakpoint: 991, settings: { adaptiveHeight: !0 } }],
  });
  if($('.banner-slider.hero-mobile.hero-desktop').length ===0){
    $(".banner-slider.hero-mobile").remove();
  }
}

function BannerPostEvent(){
  if($(".unica-banner .presentation-post-event").length > 0){
    $(".unica-banner .presentation-post-event").each(function(i){
      var link =$(this).attr("data-presentation"); 
      $.ajax({
        url : link,
        success : function (data){
        },
        error : function (jqXHR, statusText, errorThrown){
          consoleLog(errorThrown);
        }
      });
    });
  }
}




// HIT Optimization CODE -------- AAM 55
let viewedBannerNames = "";

function isHomePage() {
  const urlPath = window.location.pathname.split("/").pop();
  if (
    window.location.pathname === "/" ||
    window.location.pathname === "/homepage" ||
    urlPath === "homepage" ||
    urlPath === "homepage.html"
  ) {
    return true;
  }
  return false;
}

// When user tries to open banner in new tab instead of self
if(isHomePage()){
  $("a").bind('click', function(e) {
    if (e.ctrlKey || $(this).attr("target")==="_blank"){
       dataLayer.push({
           event: "custom_event",
           eventCategory: "home-page-banners",
           eventAction: "hp-banner-view",
           eventLabel: "NA",
           bannerName: viewedBannerNames,
       });
     }
   });
}

window.addEventListener("beforeunload", function() {
    if (isHomePage()) {
        dataLayer.push({
            event: "custom_event",
            eventCategory: "home-page-banners",
            eventAction: "hp-banner-view",
            eventLabel: "NA",
            bannerName: viewedBannerNames,
        });
    }
});
bannerSlider.on('afterChange', function(event, slick, currentSlide, nextSlide){
  if(isHomePage()){
    let isImgSelected = false;
    const totalBanners = $(".i-home-banner .banner-list.slick-slide").not(".slick-cloned").length;
    if(!(totalBanners === viewedBannerNames.split("|").length)){
      $($(".i-home-banner .banner-list.slick-slide").not(".slick-cloned")[currentSlide]).find("img").each(function (j) {
        if($(this).is(":visible") === true && isImgSelected===false){
          const bannerName = $(this).attr("src").split("/").pop().split(".")[0]; //image name
          viewedBannerNames = viewedBannerNames+"|"+bannerName
          isImgSelected = true;
        }
      });
    }
  }
});
// END --- AAM 55

bannerSlider.on(
  "beforeChange",
  function (event, slick, currentSlide, nextSlide) {
    $(".banner-list .tagline").removeClass("banner-nudge-active");
    setClassTagline();
    const nextSlick = $(slick.$slides[nextSlide]);
    slick = $(slick.$slider);

    // playPauseVideo(slick);
    playPauseVideo(slick, nextSlick, "pause");
  }
);
$(document).ready(function () {
  // HIT Optimization - AAM 55
  if(isHomePage()){
    let isImgSelected = false; 
    $(".i-home-banner .banner-list.slick-slide.slick-active").not(".slick-cloned").find("img").each(function (j) {
      if($(this).is(":visible") === true && isImgSelected===false){
        const bannerName = $(this).attr("src").split("/").pop().split(".")[0]; //image name
        viewedBannerNames = bannerName;
        isImgSelected = true;
      }
    });
  } // END - HIT Optimazation

  iframeHeight();
  setClassTagline();
  var nudgeDataUrl = "https://asia-south1-quantum-flood-755.cloudfunctions.net/nudge-all-product";
  $(".banner-list .media").each(function () {
      var d = "";
      var f = "";
      var bannertype = $(this).children("input#bannertype").val();
      var bannervariant = $(this).children("input#bannervariant").val();
      d = bannertype;
      f = bannervariant;
      if (typeof d != "undefined" && typeof f != "undefined") {
          if (d != null && d != "" && f != null && f != "") {
              $.ajax({
                  dataType: "json",
                  url: nudgeDataUrl,
                  data: { product:d, variant:f },
                  type: "POST",
                  success: function (b) {
                     
                      if(b && b.message){
                      var i = b.message;
                   
                      $(".banner-list .media .tagline." + d + " .anchornudge").append("<p>" + i + "</p>");
                      $(".banner-list .media .tagline." + d + " .anchornudge").css("color", "#FFFFFF");
                      $(".banner-list .media .tagline." + d).css("display", "block");
                      }

                  },
                  error: function () {
                      console.log("defaultnudgeapi calling unsuccessful");
                  },
              });
              
          }
      }
  });
});
var timeout = 0;
$(window).resize(function () {
  clearInterval(timeout),
    (timeout = setTimeout(function () {
      iframeHeight();
    }, 100));
});

/* you tube video play   start*/

function postMessageToPlayer(player, command) {
  if (player == null || command == null) return;
  player.contentWindow.postMessage(JSON.stringify(command), "*");
}

// When the slide is changing
function playPauseVideo(slick, nextSlick, control) {
  var currentSlide, slideType, player, nextSliderType;

  nextSliderType = nextSlick.attr("class").split(" ")[1];
  currentSlide = slick.find(".slick-current");
  slideType = currentSlide.attr("class").split(" ")[1];

  if (!(slideType === "youtube" || nextSliderType === "youtube")) {
    return;
  }
  player = currentSlide.find("iframe").get(0)
    ? currentSlide.find("iframe").get(0)
    : nextSlick.find("iframe").get(0);
  if (nextSliderType === "youtube") {
    control = "play";
  }

  if (slideType === "youtube" || nextSliderType === "youtube") {
    switch (control) {
      case "play":
        postMessageToPlayer(player, {
          event: "command",
          func: "mute",
        });
        postMessageToPlayer(player, {
          event: "command",
          func: "playVideo",
        });
        break;
      case "pause":
        postMessageToPlayer(player, {
          event: "command",
          func: "pauseVideo",
        });
        break;
    }
  }
}
/* you tube video play  end*/
var vidClip = $("#myVideo");

$.each(vidClip, function () {
  this.controls = !1;
});
var lazyLoadInstance = new LazyLoad({ elements_selector: ".lazy" });
new WOW().init();
if (vidClip[0]) {
  vidClip[0].play();
}

bannerSlider.on("init", function (slick) {
  slick = $(slick.currentTarget);
  setTimeout(function () {
    playPauseVideo(slick, "play");
  }, 1000);
});

function setCardsHeight() {
  var heights = [],
    divHeight = "",
    maxHeight = "";
  $(".card-lists .card-item").each(function (index) {
    (sectionInner = $(this)),
      (heights = []),
      (divHeight = $(this).height()),
      heights.push(divHeight);
  }),
    (maxHeight = Math.max.apply(null, heights)),
    $(".card-lists .card-item").height(maxHeight);
}
$(".card-section .card-lists").slick({
  dots: !1,
  arrows: !1,
  infinite: !1,
  autoplay: !1,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  margin: 10,
  asNavFor: ".card-nav",
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        arrows: !0,
        slidesToShow: 3,
        autoplay: !0,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        dots: !0,
        autoplay: !0,
        arrows: !1,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        dots: !0,
        autoplay: !0,
        arrows: !1,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        autoplay: !1,
        dots: !0,
        centerMode: !0,
        centerPadding: "20px",
      },
    },
  ],
}),
  $(".card-nav").slick({
    infinite: !1,
    variableWidth: !0,
    slidesToScroll: 1,
    asNavFor: ".card-lists",
    dots: !1,
    centerMode: !1,
    focusOnSelect: !0,
  }),
  $(".card-nav > div").click(function () {
    $(".card-section .card-lists").slick("slickGoTo", $(this).index());
  }),
  $(".offer-slider").slick({
    dots: !0,
    infinite: !0,
    autoplay: !0,
    autoplaySpeed: 2e3,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  }),
  $(document).ready(function () {
    $(".card-lists.card-other-lists .card-item").eq(2).addClass('faster-card');
    $(".card-section .card-item").equalHeights(),
      $(window).width() <= 768 &&
        ($(".card-section .card-item").removeClass("wow slideInLeft"),
        $(".card-section .card-item").removeClass("wow slideInRight"));
  }),
  $(window).on("load", function () {
    $(".mscroll").mCustomScrollbar();
    $(".card-section .bill-list").click(function () {
      $(".card-section").addClass("bill-list-hover");
      $(".find-right-product-section").addClass("active");
      $(".ask-ipal").addClass("active");
    });
    $(document).click(function (event) {
      var $target = $(event.target);
      if (!$target.closest(".bill-list").length) {
        $(".card-section").removeClass("bill-list-hover");
        $(".find-right-product-section").removeClass("active");
        $(".ask-ipal").removeClass("active");
      }
    });
  }),
  $(window).on("load resize orientationchange", function () {
    $(".card-section .card-item").equalHeights();
  }),
  new WOW().init(),
  $(window).on("resize", function () {
    setTimeout(setCardsHeight, 2e3);
  });

$(window).resize(function () {
  var w_width = $(window).width();
  if (w_width > 991) {
    $(".card-section .bill-list").hover(
      function () {
        $(".card-section").addClass("bill-list-hover");
        $(".find-right-product-section.desktop-section").addClass("active");
      },
      function () {
        $(".card-section").removeClass("bill-list-hover");
        $(".find-right-product-section.desktop-section").removeClass("active");
      }
    );
  }
});

if (
  !navigator.userAgent.match(/iPad/i) &&
  navigator.userAgent.match(/iPad/i) == null
) {
  $(".card-section .bill-list").hover(function () {
    $(".card-section").toggleClass("bill-list-hover");
    $(".find-right-product-section.desktop-section").toggleClass("active");
  });
}

/* 09/11/2021 */
$(".offer-ul-slider").slick({
  dots: false,
  infinite: false,
  autoplay: false,
  autoplaySpeed: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 1260,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }]
});

$(".openvideo.impbile").on("click", function (e) {
  e.preventDefault();
  $(".video-popup.imobile").show(); // show popup on cross button click
  return false;
});
/* 15-03-2021 start */
/* lazy */
var lazyLoadInstance = new LazyLoad({
  elements_selector: ".lazy",
});
/* 15-03-2021 end */
$(document).ready(function(){
  (function addRootclass() {
      if ($(".tabswithcarousel .slider").length > 0) {
        $('body').addClass("atm-landing-page");
      }
    })();
})
if($('.digitalbanking-content').length > 0) {
    var current = 1;
    var interval;
    let isClicked = false;
    $(".digitalbanking-ul li").on("click", function(e) {
        var dataSrc = $(this).attr("id");
        $(this).closest(".digitalbanking").find(".digital-img").attr("src", dataSrc);
    });
    
    $(".digitalbanking-ul li").on("click", function() {
        $(".digitalbanking-ul li").removeClass("active");
        $(this).toggleClass("active");
    
        var index = this.getAttribute("index");
        current = parseInt(index);
        var divs = $(".digitalbanking-media .media-list").hide();
        divs.eq(current).fadeIn("normal");
        current++;
        if (current === divs.length) {
            isClicked = true;
        } else {
            isClicked = false;
        }
        startAnimation();
    });
    
    /* qrcode */
    $(".qrcodebox .qrcode-icon").click(function() {
        $(this).next(".qrcode-popup").show();
        clearInterval(interval);
        $(".digitalbanking-ul li").removeClass("active");
    });
    $(".qrcode-popup .close").click(function() {
        $(".qrcode-popup").hide();
        startAnimation();
        $(".digitalbanking-ul li").eq(0).addClass("active");
    });
    
    /* digitalbanking  */
    function startAnimation() {
        clearInterval(interval);
        interval = setInterval(function() {
            var divs = $(".digitalbanking-media .media-list").hide();
            var ulList = $(".digitalbanking-ul li").removeClass("active");
            if (isClicked && divs.length == current) {
                current = 0;
            }
            divs.eq(current).fadeIn("normal");
            ulList.eq(current).addClass("active");
            if (current < divs.length - 1) current++;
            else current = 0;
        }, 10000);
    }
    startAnimation();
}
(function () {
  $(".banner-component .banner-slider .banner-slide .media-list").slick({
    dots: !0,
    arrows: !1,
    infinite: 1,
    autoplay: 1,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  $(".banner-slider .banner-video .media-list").slick({
    dots: !0,
    arrows: !1,
    infinite: !0,
    autoplay: !0,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: { adaptiveHeight: !1 },
      },
    ],
  });
  $(".banner-slider .banner-multiple-video .video-right").slick({
    dots: !0,
    arrows: !1,
    infinite: !0,
    autoplay: !0,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          arrows: !1,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: !1,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".banner-component .banner-slider .banner-slide.full-width-slider").slick({
    dots: !0,
    arrows: !1,
    infinite: !1,
    autoplay: !1,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{ breakpoint: 767, settings: { adaptiveHeight: !0 } }],
  });

  $(".banner-slider .img-description").slick({
    dots: !0,
    arrows: !1,
    infinite: !1,
    autoplay: !1,
    autoplaySpeed: 1000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: { arrows: !1 },
      },
    ],
  });
})();
var lazyLoadInstance = new LazyLoad({
  elements_selector: ".lazy",
});

$(document).ready(function() {
    $(".service-offerd-slider")
        .not(".slick-initialized")
        .slick({
            dots: true,
            arrows: true,
            infinite: false,
            autoplay: false,
            autoplaySpeed: 2000,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    },
                },
                {
                    breakpoint: 640,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    },
                },
            ],
        });
});
setTimeout(function() {
    $(".service-offerd-slider .item").equalHeights();
}, 500)
// below code is to remove playback video after closing pop up
$(".close.crossel").click(function (e) {
  var $videoEl =
    $(".cross-sell-popup.ifsc-page-cross-sell-popup").length > 0 &&
    $(".cross-sell-popup.ifsc-page-cross-sell-popup").find("iframe");
  $videoEl.attr("src", $videoEl.attr("src"));
});

$(document).ready(function () {
    const ukExchRate = $("#UKRates_Popups_Rates");
    if (ukExchRate.length > 0) {
  
      $.ajax({
        type: "GET",
        url: "/content/icicibank.exchangerate.json",
        contentType: "application/json;charset=utf-8",
        data: {
          CountryCode: "UK",
        },
        success: function (response, textStatus, xhr) {
          if (typeof response === "string") {
            response = JSON.parse(response);
          }
          if(xhr.status === 200 && xhr.readyState ===4){
            var h = (response && response.Rates.length > 0) ? response.Rates[0].Rate : '91.46';
            if(h && h>0){
            ukExchRate.text(h); 
            }
           
          }
        },
        error: function (xhr) {
          //Do Something to handle error
          ukExchRate.text("91.46"); 
        },
      });
    }
  });
  
if($('.cookieTextArea').length > 0) {
    var cookieTextArea = $(".cookieTextArea");
    var timeInterval = parseInt($("#privacyPolicyTimeInterval").val());
    if (cookieTextArea.length > 0) {
        if (cookieTextArea.length > 0 && $(document).width() > 980 && $.cookie("cookieNote") != "hide") {
            cookieTextArea.insertBefore("header.new-header");
            cookieTextArea.css("display", "block");
            cookieTextArea.delay(timeInterval).slideUp()
        } else {
            if ($(document).width() < 980 && $.cookie("cookieNote") != "hide") {
                cookieTextArea.insertBefore("footer");
                cookieTextArea.css("display", "block");
                cookieTextArea.delay(timeInterval).slideUp()
            }
        }
        $(".cookieBandClose").click(function(e) {
            e.preventDefault();
            var dateobj = new Date();
            var str = "";
            dateobj.setTime(dateobj.getTime() + 1);
            str += dateobj.toGMTString();
            $.cookie("cookieNote", "hide", {
                expires: 10,
                path: "/"
            });
            cookieTextArea.remove()
        })
    }
}

    function setBlogHeight() {
        var heights = [],
            height = "",
            maxHeight = "";
        $(".blog-section .slick-slide .card-inner").each((function() {
            height = $(this).find(".image").outerHeight() + $(this).find(".content").outerHeight(), heights.push(height)
        })), maxHeight = Math.max.apply(null, heights), $(".blog-section .slick-slide .card-inner").each((function() {
            $(this).height(maxHeight)
        }))
    }
    $(".blog-slider").slick({
        dots: !0,
        infinite: !0,
        autoplay: !1,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 991,
            settings: {
                arrows: !1,
                slidesToShow: 2
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                arrows: !1,
                dots: !0,
                centerMode: !0,
                centerPadding: "15px",
                infinite: !0
            }
        }]
    }), $(window).on("load", (function() {
        setBlogHeight()
    })), $(window).on("resize", (function() {
        setTimeout(setBlogHeight, 2e3)
    })), (new WOW).init();
$(window).resize(function () {
  if($('.whatsapp-link').length > 0) {
  WhatsappShow();
  }
});

function WhatsappShow() {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 1900 && $(document).width() < 991) {
      $(".whatsapp-link").hide();
    } else {
      $(".whatsapp-link").show();
    }
  });
}

(function () {
  $(".handpicked-slider").not(".slick-initialized").slick({
    dots: true,
    arrows: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
})();

if($('.scrolltop').length > 0) {
  $(".scrolltop-btn").click(function () {
    return (
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        "slow"
      ),
      !1
    );
  }),
    $(window).on("scroll", function () {
      let height = $("#scrollTo-height").data("height");
      if ($(window).scrollTop() > height) {
        $(".scrolltop").show();
      } else {
        $(".scrolltop").hide();
      }
    });
} 
(function () {
  var refer_data = {};
  var selectedProdArray = [];
  //code change 02/02/2021
  function validateReferVoucherForm() {
    let enable_submit_btn = true;
    const friend_name = $(".friend_name").val();
    const friend_mobile_number = $(".friend_mobile_number").val();
    const friend_email = $(".friend_email").val();
    if (friend_name == "" || selectedProdArray.length == 0) {
      refer_data = {
        name: friend_name,
        mobile_number: friend_mobile_number,
        email: friend_email,
        product: selectedProdArray,
      };
      enable_submit_btn = false;
    }
  }
  //code change 02/02/2021 end
  function createContinueAppCard() {
    var tvc_apiresponse;
    const constinueEl = document.getElementById('continue-html');
    var continueURL =
      "https://asia-south1-quantum-flood-755.cloudfunctions.net/dropoffwidget?FedID="+ FedID_NLI;
      if(constinueEl) {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        var apiResponseVar = this.responseText!=="" && JSON.parse(this.responseText);
        var d = JSON.stringify(apiResponseVar);
        
        tvc_apiresponse = apiResponseVar && apiResponseVar.payload && apiResponseVar.payload[0];
        const elResArray = constinueEl && JSON.parse(constinueEl.innerText);
        if(elResArray && elResArray.length > 0) {
          let productFound = tvc_apiresponse && elResArray.find(function(value) {
            if(value.productKey == String(tvc_apiresponse)) {
              return value;
            }
          });
          productFound ? document.getElementById('continue-app').innerHTML += productFound.cardDetail : document.getElementById('continue-app').innerHTML += elResArray[0].cardDetail;
        }
      }
    });
    xhr.open("GET", continueURL);
    xhr.setRequestHeader("apikey", "6dmSNHi5hezjxwXm");
    xhr.send(continueURL);
    }
  }
  $(document).ready(function () {
    if($('.logout-top').length > 0) {
    $('.logout-top').length > 0 && createContinueAppCard();
    $(".amazon-box").addClass("hide");
    $("#product-select-button").remove();
    $(".logout-banner-select select[multiple]").multiselect({
      columns: 1,
      search: false,
      texts: {
        placeholder: "Select a product",
      },
      showCheckbox: true,
      onOptionClick: function (element, option) {
        if (option.checked) {
          selectedProdArray.push(option.value);
        } else {
          const index = selectedProdArray.indexOf(option.value);
          if (index > -1) {
            selectedProdArray.splice(index, 1);
          }
        }
        validateReferVoucherForm();
      },
    });

    $(".ms-options-wrap > .ms-options > ul input[type='checkbox']").click(
      function () {
        var countchecked = $(
          ".ms-options-wrap > .ms-options > ul input[type='checkbox']:checked"
        ).length;
        if (countchecked >= 5) {
          $(".ms-options-wrap > .ms-options > ul input[type='checkbox']")
            .not(":checked")
            .attr("disabled", true);
        } else {
          $(".ms-options-wrap > .ms-options > ul input[type='checkbox']")
            .not(":checked")
            .attr("disabled", false);
        }
      }
    );

    $("form").on("focus", "input[type=number]", function (e) {
      $(this).on("wheel.disableScroll", function (e) {
        e.preventDefault();
      });
    });

    $("#agree").click(function () {
      if (this.checked) {
        $("#refer-submit").removeClass("disable");
      } else {
        $("#refer-submit").addClass("disable");
      }
    });

    $("#refer-submit").on("click", function (e) {
      e.preventDefault();
      var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      const friend_name = $(".friend_name").val();
      const friend_mobile_number = $(".friend_mobile_number").val();
      const friend_email = $(".friend_email").val();
      var inValidCount = 0;

      if (friend_name == "") {
        $("#fname-err").removeClass("hide");
        inValidCount++;
      } else {
        $("#fname-err").addClass("hide");
      }

      if (friend_mobile_number.length < 10) {
        $("#mobile-err").removeClass("hide");
        inValidCount++;
      } else {
        $("#mobile-err").addClass("hide");
      }

      if (friend_email != "") {
        if (!regEmail.test(friend_email)) {
          $("#email-err").removeClass("hide");
          inValidCount++;
        } else {
          $("#email-err").addClass("hide");
        }
      }

      if (selectedProdArray.length == 0) {
        $("#product-err").removeClass("hide");
        inValidCount++;
      } else {
        $("#product-err").addClass("hide");
      }

      if (inValidCount == 0) {
        //$('.voucher-content').addClass('hide');
        // $('.amazon-box').removeClass('hide');
        // window.scrollTo(0, 0);

        /*Custom code*/
        var formajax = $(".voucher-box").find("form").attr("ajax-page");
        var productId = [];
        productId = selectedProdArray;
        var customerName = $(".voucher-box")
          .find("form div input.friend_name")
          .val();
        var words = customerName.split(" ");
        if (words.length == 1) {
          var customerFirstName = customerName;
          var customerLastName = customerName;
        } else {
          var customerFirstName = customerName.substr(
            0,
            customerName.indexOf(" ")
          );
          var k = customerName.substr(customerName.indexOf(" "));
          var customerLastName = k.replace(/ /g, "");
        }

        var customerContactNo = $(".voucher-box")
          .find("form div input.friend_mobile_number")
          .val();
        var customerEmailId = $(".voucher-box")
          .find("form div input.friend_email")
          .val();
        var callbackRequest;

        if (
          (typeof formajax != "undefined" &&
            typeof productId != "undefined" &&
            typeof customerFirstName != "undefined" &&
            typeof customerLastName != "undefined" &&
            typeof customerContactNo != "undefined") ||
          typeof customerEmailId != "undefined"
        ) {
          if (
            (formajax != null &&
              formajax != "" &&
              productId != null &&
              productId != "" &&
              customerFirstName != null &&
              customerFirstName != "" &&
              customerLastName != null &&
              customerLastName != "" &&
              customerContactNo != null &&
              customerContactNo != "") ||
            customerEmailId != null ||
            customerEmailId != ""
          ) {
            callbackRequest =
              formajax +
              "apiname=save&productCode=" +
              productId +
              "&custName=" +
              customerFirstName +
              "&lastName=" +
              customerLastName +
              "&custMobNo=" +
              customerContactNo +
              "&custEmail=" +
              customerEmailId;
          }
        }
        if (typeof callbackRequest != "undefined") {
          if (callbackRequest != null && callbackRequest != "") {
            $.ajax({
              dataType: "json",
              url: callbackRequest,
              type: "GET",
              success: function (response) {
                getCallbackResults = response.getCallbackResults;

                var successFlag = 0;
                if (getCallbackResults) {
                  for (var i = 0; i < getCallbackResults.length; i++) {
                    var crmServiceResponce = getCallbackResults[i].IsSuccess;
                    var message = getCallbackResults[i].Message;
                    var crmItemKey = getCallbackResults[i].ItemKey;

                    if (
                      typeof message != "undefined" &&
                      typeof crmItemKey != "undefined" &&
                      typeof crmServiceResponce != "undefined"
                    ) {
                      if (
                        message != null &&
                        message != "" &&
                        crmItemKey != null &&
                        crmItemKey != "" &&
                        crmServiceResponce != null &&
                        crmServiceResponce != ""
                      ) {
                        if (message == "Success") {
                          successFlag++;
                        }
                      }
                    }
                  }
                }
                if (successFlag != 0 && productId.length >= successFlag) {
                  $(".voucher-content").addClass("hide");
                  $(".amazon-box").removeClass("hide");
                  $(".lt-card.voucher-box").css("background-color", "#fff2eb");
                  $("#refer-error-txt").text("Error while submitting form");
                } else {
                  $(".voucher-box").find("form p.note").removeClass("hide");
                  $("#refer-form").trigger("reset");
                }
              },
              error: function () {
                if (inValidCount == 0) {
                  $(".voucher-box").find("form p.note").removeClass("hide");
                  // $("#refer-submit").addClass("disable");
                  $("#refer-form").trigger("reset");
                  $("#refer-error-txt").text("Error while submitting form");
                }
                executed = false;
              },
            });
          }
        }
      }
    });

    $("#product-select").selectmenu({
      change: validateReferVoucherForm,
    });
  }
  });

  function copyCode(elementId, btnId, type) {
    var copyText = document.getElementById(elementId);
    var textArea = document.createElement("textarea");
    if (type == "input") {
      copyText.disabled = false;
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      copyText.disabled = true;
    } else {
      textArea.value = copyText.textContent;
      document.body.appendChild(textArea);
      textArea.select();
    }
    document.execCommand("Copy");
    var selection = window.getSelection
      ? window.getSelection()
      : document.selection
      ? document.selection
      : null;
    if (!!selection)
      selection.empty ? selection.empty() : selection.removeAllRanges();
    textArea.remove();
    $("#" + btnId).html("copied");
  }

  $(window).resize(function () {
    lbCardsSlick();
    ltCardsSlick();
  });

  function lbCardsSlick() {
    if ($(window).width() > 991) {
      if ($(".lb-cards").hasClass("slick-initialized")) {
        $(".lb-cards").slick("unslick");
      }
      return true;
    }
  }

  function ltCardsSlick() {
    // code change 02/02/2021
    if ($(window).width() > 991) {
      if ($(".lt-cards").hasClass("slick-initialized")) {
        $(".lt-cards").slick("unslick");
      }
      return true;
    }
    $(".lt-cards").slick({
      dots: true,
      arrows: false,
      infinite: false,
      autoplay: false,
      adaptiveHeight: false,
      centerMode: true,
      slidesToShow: 1,
      centerPadding: "10px",
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      margin: 10,
      asNavFor: ".card-navs",
    }),
      $(".card-navs").slick({
        infinite: false,
        arrows: false,
        variableWidth: true,
        slidesToScroll: 2,
        asNavFor: ".lt-cards",
        dots: false,
        centerMode: false,
        focusOnSelect: true,
      }),
      // code added on 08/06/2021
      $(".lb-cards").slick({
        dots: false,
        arrows: false,
        infinite: false,
        autoplay: false,
        adaptiveHeight: false,
        centerMode: true,
        slidesToShow: 1,
        centerPadding: "10px",
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        margin: 10,
      }),
      // code added on 08/06/2021 end
      $(".logout-top .card-navs > div").click(function () {
        $(".lt-cards").slick("slickGoTo", $(this).index());
      });

    // code added on 08/06/2021
    // $('.lt-cards').slick('slickRemove', 0);
    $(".lt-cards").on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        $(".rate-icon").removeClass("active");
        $(".share-icon").removeClass("active");
        $(".refer-icon").removeClass("active");

        if (nextSlide == 0) {
          $(".rate-icon").addClass("active");
        } else if (nextSlide == 1) {
          $(".share-icon").addClass("active");
        } else if (nextSlide == 2) {
          $(".refer-icon").addClass("active");
        }
      }
    );
    // code change end 08/06/2021

    equalizeSliderHeight(".lt-cards");
  }
  /*code change 02/02/2021*/
  $(".letters_validate").on("input", function (e) {
    this.value = this.value.replace(/[^a-zA-Z .]/g, "");
  });
  $(".numbers_validate").on("keypress", function (e) {
    return numberValidate(e);
  });
  /*code change 02/02/2021 end*/
  // allow only charachters and space
  function lettersValidate(e) {
    e = e ? e : window.event;
    var clipboardData = e.clipboardData
      ? e.clipboardData
      : window.clipboardData;
    var key = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
    var str =
      e.type && e.type == "paste"
        ? clipboardData.getData("Text")
        : String.fromCharCode(key);

    return /^[a-zA-Z\s]*$/.test(str);
  }

  function numberValidate(e) {
    if (e.currentTarget.value.length >= 10) {
      return false;
    }

    e = e ? e : window.event;
    var clipboardData = e.clipboardData
      ? e.clipboardData
      : window.clipboardData;
    var key = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
    var str =
      e.type && e.type == "paste"
        ? clipboardData.getData("Text")
        : String.fromCharCode(key);

    return /^\d+$/.test(str);
  }

  function equalizeSliderHeight(slider) {
    const slides = $(slider).find(".slick-slide");
    let maxheight = 0;
    slides.each(function (index) {
      maxheight =
        maxheight > slides[index].clientHeight
          ? maxheight
          : slides[index].clientHeight;
    });
    slides.each(function (index) {
      $(this).css({ height: maxheight });
    });
  }

  $(window).on("load resize orientationchange", function () {
    $(".lb-cards .lb-card").equalHeights();
  })

  /*  02/07/2021 */
  $(window).on("unload", function () {
    $(".ms-options-wrap > .ms-options > ul input[type='checkbox']").off(
      "click"
    );
    $(".more_TNC").off("click");
    $("#agree").off("click");
    $(".logout-top .card-navs > div").off("click");
  });
})();
let ticker = 1;
let nseEl;
$(document).ready(function () {
  nseEl = $(".share-value-iframe .share-value");
  let nseDisable;
  if($("#interest-rates").attr("data-disableNSETicker")){
      nseDisable = JSON.parse(
        $("#interest-rates").attr("data-disableNSETicker")
      );
    }
  if (!nseDisable) {
    loadNseTicker();
  }

  /** Animating numbers **/
  $(
    (function ($, win) {
      $.fn.inViewport = function (cb) {
        return this.each(function (i, el) {
          function visPx() {
            var H = $(this).height(),
              r = el.getBoundingClientRect(),
              t = r.top,
              b = r.bottom;
            return cb.call(el, Math.max(0, t > 0 ? H - t : b < H ? b : H));
          }
          visPx();
          $(win).on("resize scroll", visPx);
        });
        $(".animate-element");
      };
    })(jQuery, window)
  );
  $(".rates-slider").slick({
    dots: !0,
    arrows: !1,
    infinite: !0,
    autoplay: !0,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 767, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  });
});
let nseUrl = $("#interest-rates").attr("data-nseURL");
function loadNseTicker() {
  $.ajax({
    dataType: "JSON",
    url: nseUrl,
    type: "GET",
    success: function (response) {
      let nseResponseObj = response.find(function (e) {
        return e.exchange == "NSE";
      });
      $(".share-value").removeClass("hide");
      const el = $(".share-value .price");
      el.text(nseResponseObj["Current"]);
      animateNumbers(el);
      localStorage.setItem("nseTicker", nseResponseObj["Current"]);
    },
    error: function (err) {
      let nseTickerValue = localStorage.getItem("nseTicker");
      $(".share-value").removeClass("hide");
      const el = $(".share-value .price");
      el.text(nseTickerValue);
      animateNumbers(el);
      ticker++;
      if (ticker < 3) {
        setTimeout(function () {
          loadNseTicker();
        }, 200);
      }
    },
  });
}

/* price */
function animateNumbers(priceEl) {
  priceEl.inViewport(function (px) {
    if (px > 0 && !this.initNumAnim) {
      this.initNumAnim = true;
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 2000,
            step: function (now) {
              $(this).text(now.toFixed(2));
              $(this).text(Math.round(now * 100) / 100);
            },
          }
        );
    }
  });
}

$(document).ready(function() {
    /* browse-product-slider */
    if($(".browse-product-slider").length > 0) {
        $(".browse-product-slider").slick({
            dots: false,
            arrows: true,
            infinite: false,
            autoplay: false,
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                },
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            }, ],
        });
    }
});

$(document).ready(function () {
  loadOnlyCallback();
});
function loadOnlyCallback() {
  /* form-slider' */
  !$(".loan-forms .form-slider").hasClass("slick-initialized") &&
    $(".loan-forms .form-slider").slick({
      dots: true,
      infinite: false,
      autoplay: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            dots: true,
            infinite: false,
            autoplay: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
          },
        },
      ],
      onInit: function () {
        $(".slick-next .slick-arraow").css("pointer-events", "none");
      },
    });

  function deactiveArrow() {
    $(".form-slider .slick-arrow").addClass("arrow-disable");
  }

  function activateArrow() {
    $(".form-slider .slick-arrow").removeClass("arrow-disable");
  }

  function showFormError() {
    $(".form-slider .slick-active").find(".form-group-inner").addClass("error");
  }

  var disableEventsClass = "disable-el";
  function disableSlickDots(index) {
    $("#offer-form .slick-dots li").eq(index).addClass(disableEventsClass);
    $("#offer-form-mob .slick-dots li").eq(index).addClass(disableEventsClass);
  }

  function enableSlickDot(index) {
    $("#offer-form .slick-dots li").eq(index).removeClass(disableEventsClass);
    $("#offer-form-mob .slick-dots li")
      .eq(index)
      .removeClass(disableEventsClass);
  }

  function validateMobile($this) {
    flag = false;
    msg = "";
    mobile = $($this).val();
    if ($.trim(mobile) == "") {
      disableSlickDots(2);
    } else if (!$.isNumeric(mobile)) {
      showFormError();
      msg = "Please enter valid Mobile number";
      $($this).addClass("error");
      disableSlickDots(2);
    } else if (mobile.length < 10) {
      showFormError();
      msg = "Please enter valid Mobile number";
      $($this).addClass("error");
      disableSlickDots(2);
    } else {
      $($this).removeClass("error");
      $(".form-slider .slick-active")
        .find(".form-group-inner")
        .removeClass("error");
      activateArrow();
      enableSlickDot(2);
      flag = true;
    }
    $(".error-msg").html(msg);
    return flag;
  }

  function validateName($this) {
    flag = false;
    msg = "";
    var regName = /^[a-zA-Z ]+$/;
    name = $($this).val();
    if ($.trim(name) == "") {
      disableSlickDots(1);
      disableSlickDots(2);
    } else if (!regName.test(name)) {
      showFormError();
      msg = "Please enter valid first Name";
      $($this).addClass("error");
      disableSlickDots(1);
      disableSlickDots(2);
    } else {
      $($this).removeClass("error");
      $(".form-slider .slick-active")
        .find(".form-group-inner")
        .removeClass("error");
      activateArrow();
      enableSlickDot(1);
      $(".slick-dots").show();
      flag = true;
    }
    $(".error-msg").html(msg);
    return flag;
  }

  function validateEmail($this) {
    flag = false;
    msg = "";
    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    email = $($this).val();
    $(".slick-arrow").removeClass("active-btn-submit");
    $(".cust-btn-submit").removeClass("active-btn-submit");
    if ($.trim(email) == "") {
    } else if (!regEmail.test(email)) {
      showFormError();
      msg = "Please enter valid Email ID";
      $($this).addClass("error");
      // disableSlickDots(0);
    } else {
      $($this).removeClass("error");
      $(".form-slider .slick-active")
        .find(".form-group-inner")
        .removeClass("error");
      activateArrow();
      $(".slick-dots").show();
      flag = true;
      $(".slick-arrow").addClass("active-btn-submit");
      $(".cust-btn-submit").addClass("active-btn-submit");
    }
    $(".error-msg").html(msg);
    return flag;
  }

  var timeout = 0;

  clearInterval(timeout);

  $(".form-slider").on("afterChange", function (event, slick, currentSlide) {
    $(".slick-arrow").show();
    $(".cust-btn-submit").hide();
    if (currentSlide == 3) {
      if (!validateMobile($(".input-mobile")))
        $(".form-slider").slickGoTo(parseInt(0));
      else if (!validateName($(".input-name")))
        $(".form-slider").slickGoTo(parseInt(1));
      else if (!validateEmail($(".input-email")))
        $(".form-slider").slickGoTo(parseInt(2));
      else {
        $("#offer-form-mob").trigger("reset");
        $("#offer-form").trigger("reset");
      }
    }
    if (currentSlide == 0) {
      if (!validateName($(".input-name"))) deactiveArrow();
      else activateArrow();
      $(".slick-arrow").removeClass("btn-submit active-btn-submit");
      $(".cust-btn-submit").removeClass("active-btn-submit");
    } else if (currentSlide == 1) {
      if (!validateMobile($(".input-mobile"))) deactiveArrow();
      else activateArrow();
      $(".cust-btn-submit").removeClass("active-btn-submit");
      $(".slick-arrow").removeClass("btn-submit active-btn-submit");
    } else if (currentSlide == 2) {
      $(".slick-arrow").val("Submit");
      $(".slick-arrow").text("Submit");
      $(".slick-arrow").addClass("btn-submit");
      if (!validateEmail($(".input-email"))) deactiveArrow();
      else activateArrow();
      //Custom cust-btn-submit with active-btn-submit added
      if ($(".cust-btn-submit").length <= 0) {
        $(
          '<button class="cust-btn-submit" type="button" aria-disabled="true" value="Submit">Submit</button>'
        ).insertAfter(".form-slider .slick-next");
      } else {
        $(".cust-btn-submit").show();
      }
      $(".slick-arrow").hide();
    } else {
      $("#offer-form").trigger("reset");
      $("#offer-form-mob").trigger("reset");
    }
  });

  $("form input").on("keyup", function () {
    deactiveArrow();
    if ($(this).hasClass("input-mobile")) {
      validateMobile($(this));
    } else if ($(this).hasClass("input-name")) {
      validateName($(this));
    } else if ($(this).hasClass("input-email")) {
      validateEmail($(this));
    }
  });

  deactiveArrow();
  disableSlickDots(1);
  disableSlickDots(2);

  //$(".form-slider .slick-dots li").last().hide();

  $(".slick-arrow").on("click", function (e) {
    if ($(this).hasClass("arrow-disable")) {
      e.preventDefault();
    }
  });

  if ($(".lead-callback").length > 0) {
    $(document).on("click", "button.cust-btn-submit", function () {
      $(this).addClass("activeCall");
      getOnlyCallback();
    });
  }

  function getOnlyCallback() {
    var executed = false;
    if (!executed) {
      executed = true;
      console.log("send response from here");
      var formajax = $(".activeCall")
        .parent()
        .parent()
        .parent()
        .parent()
        .parent()
        .find("#offer-form")
        .attr("ajax-page");
      console.log("formajax: " + formajax);
      var productId =
        $(".activeCall")
          .parent()
          .parent()
          .parent()
          .parent()
          .parent()
          .find("#productId")
          .val() || $("#productId").text();
      console.log("productId: " + productId);

      var customerName = $(".activeCall")
        .parent()
        .parent()
        .parent()
        .parent()
        .parent()
        .find("#offer-form")
        .find("#name")
        .val();

      var words = customerName.split(" ");

      if (words.length == 1) {
        var customerFirstName = customerName;
        var customerLastName = customerName;
      } else {
        var customerFirstName = customerName.substr(
          0,
          customerName.indexOf(" ")
        );
        var k = customerName.substr(customerName.indexOf(" "));
        var customerLastName = k.replace(/ /g, "");
      }

      var customerContactNo = $(".activeCall")
        .parent()
        .parent()
        .parent()
        .parent()
        .parent()
        .find("#offer-form")
        .find("#mobile")
        .val();
      var customerEmailId = $(".activeCall")
        .parent()
        .parent()
        .parent()
        .parent()
        .parent()
        .find("#offer-form")
        .find("#email")
        .val();
      console.log("customerFirstName: " + customerFirstName);
      console.log("customerContactNo: " + customerContactNo);
      console.log("customerEmailId: " + customerEmailId);
      var callbackRequest;
      if (
        typeof formajax != "undefined" &&
        typeof productId != "undefined" &&
        typeof customerFirstName != "undefined" &&
        typeof customerLastName != "undefined" &&
        typeof customerContactNo != "undefined" &&
        typeof customerEmailId != "undefined"
      ) {
        if (
          formajax != null &&
          formajax != "" &&
          productId != null &&
          productId != "" &&
          customerFirstName != null &&
          (customerFirstName != "") & (customerLastName != null) &&
          customerLastName != "" &&
          customerContactNo != null &&
          customerContactNo != "" &&
          customerEmailId != null &&
          customerEmailId != ""
        ) {
          callbackRequest =
            formajax +
            "apiname=save&productCode=" +
            productId +
            "&custName=" +
            customerFirstName +
            "&lastName=" +
            customerLastName +
            "&custMobNo=" +
            customerContactNo +
            "&custEmail=" +
            customerEmailId;
        }
      }
      if (typeof callbackRequest != "undefined") {
        if (callbackRequest != null && callbackRequest != "") {
          $.ajax({
            dataType: "json",
            url: callbackRequest,
            type: "GET",
            success: function (response) {
              getCallbackResults = response.getCallbackResults;
              console.log(
                "Get callback response json :" +
                  response.getCallbackResults.length
              );
              console.log("Get callback response :" + getCallbackResults);
              var successFlag = 0;
              for (var i = 0; i < getCallbackResults.length; i++) {
                var crmServiceResponce = getCallbackResults[i].IsSuccess;
                var message = getCallbackResults[i].Message;
                var crmItemKey = getCallbackResults[i].ItemKey;
                console.log("Get callback message :" + message);
                console.log("Get callback CRM ID :" + crmItemKey);
                if (
                  typeof message != "undefined" &&
                  typeof crmItemKey != "undefined" &&
                  typeof crmServiceResponce != "undefined"
                ) {
                  if (
                    message != null &&
                    message != "" &&
                    crmItemKey != null &&
                    crmItemKey != "" &&
                    crmServiceResponce != null &&
                    crmServiceResponce != ""
                  ) {
                    if (message == "Success") {
                      successFlag++;
                      console.log(
                        "You have successfully registered to get a callback from out expert."
                      );
                      $("form.offer-form").css("display", "none");
                      $(".loan-forms .content .success-msg").css(
                        "display",
                        "inline-block"
                      );
                      $(".loan-forms .content .success-msg p").css(
                        "display",
                        "inline-block"
                      );
                    }
                  }
                }
              }
            },
            error: function () {
              console.log("Get callback response calling unsuccessful");
              executed = false;
            },
          });
        }
      }
    }
  }
}

$(document).ready(function() {
    $(".search-filter-slider").slick({
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    })
});
if($('.section.ways-to-bank-section').length > 0) {
$('.way-to-bank-slider').not('.slick-initialized').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
});
$(function($) {
    $('#ways-to-bank-tabs ul li a').on('click', function(e) {
        $('.way-to-bank-slider').not('.slick-initialized').slick('refresh');
    })
});
}
$(document).ready(function () {
    var cashbackOffers=[];
    var cashbackUrl = $("#cashBackURL").val();
    var compareBuyUrl = $("#compareBuyURL").val();
    var compareBuySliderDiv = "<div class='trending-deals-slider'>";
    var cashbackSliderDiv = "<div class='trending-deals-slider'>";
    $.ajax({
		dataType: "json",
        url: cashbackUrl,
        type: "GET",
        success: function (res) {
            cashbackOffers = res.data;
            for (var j = 0; j < cashbackOffers.length; j++) {
                var name = cashbackOffers[j].attributes.name;
                var description = cashbackOffers[j].attributes.short_description;
                var storeIdentifier = cashbackOffers[j].attributes.unique_identifier;
                var imgurl = cashbackOffers[j].attributes.image_url;
				var activeateUrl;
				var storeUrl;
			
				activeateUrl = "/offers/cashback-and-buy/cashback-and-buy.page?redirectURL=/stores/"+storeIdentifier+"";
				storeUrl = "/offers/cashback-and-buy/cashback-and-buy.page?storeUrl=/stores/"+storeIdentifier+"";
                cashbackSliderDiv +=
                    "<div class='deal-card'><div class='deal-inner'><div class='image'><a target='blank' href='"+ storeUrl +"'><img style='height: 50px; width: 90px;' src='" +
                    imgurl +
                    "'></a></div><div class='offer'><a target='blank' href='"+ storeUrl +"'>" +
                    name +
                    "</a></div><div class='description'>" +
                    description +
                    "</div><div class='buttons'><a href='"+ activeateUrl +"' class='ic-btn'>Activate now</a></div></div></div>";
            }
            cashbackSliderDiv = cashbackSliderDiv + "</div>";
            $("#cashbackOffers").append(cashbackSliderDiv);
            $("#cashbackOffers").css("display", "block");
            $("#cashbackOffers .trending-deals-slider").slick({
                dots: true,
                infinite: true,
                autoplay: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    { breakpoint: 1025, settings: { slidesToShow: 2 } },
                    { breakpoint: 767, settings: { slidesToShow: 1, arrows: false, dots: true } },
                    { breakpoint: 640, settings: { slidesToShow: 1, arrows: false, dots: true, centerMode: true, centerPadding: "15px", infinite: true } },
                ],
            });
            setTimeout(function () {$("#cashback .trending-deals-slider .deal-card").equalHeights()});
        },
        error: function () {
            console.log("cashbackOffersApi calling unsuccessful");
        },
    });
    $.ajax({
        dataType: "json",
        url: compareBuyUrl,
        type: "GET",
        success: function (data) {
            comparebuyOffers = data.products;
            for (var k = 0; k < comparebuyOffers.length; k++) {
                var ribbonLabel = comparebuyOffers[k]["ribbonLabel"];
                var title = comparebuyOffers[k]["title"];
                var imgSrc = comparebuyOffers[k]["imageUrl"];
                var vendorUrl = comparebuyOffers[k]["vendorRedirectUrl"];
                var detailsUrl = comparebuyOffers[k]["productDetailPageUrl"];
                var cta1 = comparebuyOffers[k]["CTA_Name_1"];
                var cta2 = comparebuyOffers[k]["CTA_Name_2"];
                var maxprice = comparebuyOffers[k]["maxprice"];
                var minprice = comparebuyOffers[k]["minprice"];
                var tagName = comparebuyOffers[k]["tagname"];
                if (typeof FedID != "undefined") {
                    if (FedID != null && FedID != "") {
                        vendorUrl = vendorUrl + "&" + tagName + "=" + FedID;
                       compareBuySliderDiv +=
						"<div class='deal-card'><div class='deal-inner'><div class='offer-strip'><p>" +
						ribbonLabel +
						"</p></div><div class='img-offer-wrapper'><div class='image'><a href='" + vendorUrl + "'><img src='" +
						imgSrc +
						"'/></a></div><div class='offer'><div class='name' style='font-size:medium;'><a href='" + vendorUrl + "'>" +
						title +
						"</a></div><div classs='price-wrapper'><span class='new-price'> " +
						minprice +
						"</span><span class='old-price'> " +
						maxprice +
						"</span></div></div></div><div class='buttons'><a href='" +
						vendorUrl +
						"' class='ic-btn'>" +
						cta1 +
						"</a><a href='" +
						detailsUrl +
						"' class='ic-more'>" +
						cta2 +
						"</a></div></div></div>";
                    } else {
                        
                        vendorUrl = "https://nli.icicibank.com/NewRetailWeb/paymeTryHome.htm?paymid=XXXXXXXXXX";
					
						compareBuySliderDiv +=
						"<div class='deal-card'><div class='deal-inner'><div class='offer-strip'><p>" +
						ribbonLabel +
						"</p></div><div class='img-offer-wrapper'><div class='image'><a href='" + detailsUrl + "'><img src='" +
						imgSrc +
						"'/></a></div><div class='offer'><div class='name' style='font-size:medium;'><a href='" + detailsUrl + "'>" +
						title +
						"</a></div><div classs='price-wrapper'><span class='new-price'> " +
						minprice +
						"</span><span class='old-price'> " +
						maxprice +
						"</span></div></div></div><div class='buttons'><a href='" +
						detailsUrl +
						"' class='ic-btn'>" +
						cta2 +
						"</a></div></div></div>";
                    }
                } else {
                   
					compareBuySliderDiv +=
					"<div class='deal-card'><div class='deal-inner'><div class='offer-strip'><p>" +
					ribbonLabel +
					"</p></div><div class='img-offer-wrapper'><div class='image'><a href='" + detailsUrl + "'><img src='" +
					imgSrc +
					"'/></a></div><div class='offer'><div class='name' style='font-size:medium;'><a href='" + detailsUrl + "'>" +
					title +
					"</a></div><div classs='price-wrapper'><span class='new-price'> " +
					minprice +
					"</span><span class='old-price'> " +
					maxprice +
					"</span></div></div></div><div class='buttons'><a href='" +
					detailsUrl +
					"' class='ic-btn'>" +
					cta2 +
					"</a></div></div></div>";
                }
            }
            compareBuySliderDiv = compareBuySliderDiv + "</div>";
            $("#comparebuy").append(compareBuySliderDiv);
            $("#comparebuy").css("display", "block");
           
            $("#comparebuy .trending-deals-slider").slick({
                dots: true,
                infinite: true,
                autoplay: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    { breakpoint: 1025, settings: { slidesToShow: 2 } },
                    { breakpoint: 767, settings: { slidesToShow: 1, arrows: false, dots: true } },
                    { breakpoint: 640, settings: { slidesToShow: 1, arrows: false, dots: true, centerMode: true, centerPadding: "15px", infinite: true } },
                ],
            });
            setTimeout(function () {$("#compareandbuy .trending-deals-slider .deal-card").equalHeights()});
        },
        error: function () {
            console.log("compareBuyOffersApi calling unsuccessful");
        },
    });
});

$(document).ready(function () {
  if ($(window).width() < 991) {
    $("body").toggleClass(
      "notification-enabled",
      $(".download-notification").length &&
        $(".download-notification").is(":visible")
        ? true
        : false
    );
  }
  $(".download-notification .close").click(function () {
    $("body").removeClass("notification-enabled");
    $(".download-notification").hide();
  });
});

function downloadapp() {
  if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
    var m = $(".smartphone-btn").attr("data-ios-url");
    var l = $(".image-src").attr("data-ios-src");
    var o = $(".image-src").attr("data-ios-alt");
    $(".smartphone-btn").attr("href", m);
    $(".image-src").attr("src", l);
    $(".image-src").attr("alt", o);
    setTimeout(function () {
      $("body").removeClass("notification-enabled");
      $(".download-notification").hide();
    }, 15000);
  } else {
    if (navigator.userAgent.match(/(Android)/)) {
      var q = $(".smartphone-btn").attr("data-android-url");
      var n = $(".image-src").attr("data-android-src");
      var p = $(".image-src").attr("data-android-alt");
      $(".smartphone-btn").attr("href", q);
      $(".image-src").attr("src", n);
      $(".image-src").attr("alt", p);
      setTimeout(function () {
        $("body").removeClass("notification-enabled");
        $(".download-notification").hide();
      }, 15000);
    } else {
    }
  }
  $(".smartphone-btn").click(function (s) {
    s.preventDefault();
    var r = this;
    setTimeout(function () {
      window.location = r.getAttribute("href");
    }, 25);
    window.location = "imobileapp://";
  });
}
$(window).on("load resize", function () {
  downloadapp();
});

if($('.popup-section.disclaimer-popup').length > 0) {
  $(".disclaimer-popup .close").on("click", function () {
    $(".disclaimer-popup").hide();
  });
  var oldModelHref;
  $(".static-modal-launcher").on("click", function (e) {
    e.preventDefault();
    $(".disclaimer-popup").show();
    var j = $(this).attr("href");
    var i = $(".disclaimer-popup .popup-inner-content");
    var newPopup = false;
    
    if(oldModelHref !== j){
      oldModelHref = j.slice();
      newPopup = true;
      i.empty();
    }else{
      oldModelHref = j.slice();
      $(".disclaimer-popup").show();
    }
    if (newPopup) {
      $.ajax({
        url: j,
        success: function (aL) {
          i.html($(aL).find(".disclaimer-modal-content"));
            $(".disclaimer-popup").show();
        },
      });
    }
  });
}
!(function () {
    const $selectMainCategory = $("#intSelectOne");
    const $selectSubCategory = $("#intSelectTwo");
    const domainUrl = document.location.origin;
    const rightProductDiv = document.getElementById("find-right-product");
    const findProductServletPath = document.getElementById('find-product-servlet-path');
    const servletURL = findProductServletPath && findProductServletPath.getAttribute("data-frpServletPath");
    const dataExpPath = findProductServletPath && findProductServletPath.getAttribute("data-expPath");
    const frpURL = domainUrl + servletURL + '?expPath=' + dataExpPath;
    $(document).ready(function () {
      if(servletURL && dataExpPath) {
      $.getJSON(frpURL, function (result) {
        $selectMainCategory.selectmenu(); // #state-dropdown, #city-dropdown, #branch-dropdown
        $selectSubCategory.selectmenu();
        result && result.ProductList && createDropdown(result.ProductList);
      }).fail(function () {});
    }
    });
   
    function createDropdown(productList) {
        var filterArray = [];
        var currentURL = window.location.href;
        if(currentURL.indexOf('/nri-banking/nri-banking') > -1){
              var currentURL = window.location.href;
              if(currentURL.indexOf('/nri-banking/nri-banking') > -1){
                var subCategoryfilter =  productList.filter(function(data) {
                  return data.SubCategory == 'Regular';
                });
            }
            if(currentURL.indexOf('/nri-banking/nri-banking') > -1){
                var mainCategoryfilter =  productList.filter(function(data) {
                  return data.SubCategory != 'Regular';
                });
            }
              var filterArray = $.merge(subCategoryfilter, mainCategoryfilter);
             
              productList = filterArray;
      
            const uniqueCategory = [];
              productList.forEach(function (itm) {
                !uniqueCategory.includes(itm.MainCategory) &&
                  uniqueCategory.push(itm.MainCategory) &&
                  $selectMainCategory.append(
                    $("<option>", { value: itm.MainCategory, text: itm.MainCategory })
                  );
              });
        }
        else{
          const uniqueCategory = [];
          productList = rearrangeProductList(productList);
              productList.forEach(function (itm) {
                !uniqueCategory.includes(itm.MainCategory) &&
                  uniqueCategory.push(itm.MainCategory) &&
                  $selectMainCategory.append(
                    $("<option>", { value: itm.MainCategory, text: itm.MainCategory })
                  );
              });
        }

        function rearrangeProductList(orignalList) {
          let defaultMainCategory = $("#defaultMainCategory").text().trim();
          let defaultSubCategory = $("#defaultSubCategory").text().trim();

          let defaultMainArray = orignalList.filter(function(data) {
            return data.MainCategory === defaultMainCategory;
          });

          let defaultSubArray = defaultMainArray.filter(function(data) {
            return data.SubCategory === defaultSubCategory;
          });

          let notDefaultMainArray = orignalList.filter(function(data) {
            return data.MainCategory !== defaultMainCategory;
          });

          let notDefaultSubArray = defaultMainArray.filter(function(data) {
            return data.SubCategory !== defaultSubCategory;
          });

          var arrangedSubArray = $.merge(defaultSubArray, notDefaultSubArray);
          var arrangedMainArray = $.merge(arrangedSubArray, notDefaultMainArray);

          return arrangedMainArray;
        }
      document.getElementById("intSelectOne") ? document.getElementById("intSelectOne").selectedIndex = "1" : null;
      $selectMainCategory.selectmenu("refresh");
      const selectedMainValue = document.querySelector('#intSelectOne') ? document.querySelector('#intSelectOne').value : null;
      if(selectedMainValue) {
        productList.forEach(function (itm) {
          if (itm.MainCategory == selectedMainValue) {
              $selectSubCategory.append(
                $("<option>", { value: itm.SubCategory, text: itm.SubCategory })
              );
          }
        });
        document.getElementById("intSelectTwo") ? document.getElementById("intSelectTwo").selectedIndex = "1" : null;
        $selectSubCategory.selectmenu("refresh");
      }
     const selectedSubValue = document.querySelector('#intSelectTwo') ? document.querySelector('#intSelectTwo').value : null;
     if(selectedSubValue) {
      const selectedProductLink = productList.find(function(value) {
        if(value.SubCategory === selectedSubValue) {
          return value;
        }
      }).Link;
      const xhttp = new XMLHttpRequest();
            xhttp.onload = function () {
              let parseText = new DOMParser().parseFromString(this.responseText, 'text/html');
              let innerDom =  `<div class="container"> ${$(parseText).find('.container')[0].innerHTML} </div>`;
              rightProductDiv? rightProductDiv.innerHTML = innerDom : null;
              document.dispatchEvent(startloadEvent);
              deepLinking();
            }
            if(typeof(Event) === 'function') {var startloadEvent = new Event("start-product");}
            else{
              var startloadEvent  = document.createEvent('Event');
              startloadEvent.initEvent("start-product", true, true);
            }
            xhttp.open("GET",domainUrl+selectedProductLink+".html");
            xhttp.send();
     }
      $selectMainCategory.on("selectmenuchange", function (event, mainCategory) {
        let uniqueSubCategory = [];
        let filteredSubCategory = [];
        const selectedMainCategory = mainCategory.item.value;
        $selectSubCategory
          .html($("<option>", { text: " Select " }))
          .selectmenu("refresh");
        productList.forEach(function (itm) {
          if (itm.MainCategory == selectedMainCategory) {
            filteredSubCategory.push(itm);
            if (!uniqueSubCategory.includes(itm.SubCategory)) {
              uniqueSubCategory.push(itm.SubCategory);
              $selectSubCategory.append(
                $("<option>", { value: itm.SubCategory, text: itm.SubCategory })
              );
            }
          }
        });
        $selectSubCategory.selectmenu("refresh");
        if(filteredSubCategory.length === 1) {
          $selectSubCategory.trigger( "selectmenuchange",filteredSubCategory );
          document.getElementById("intSelectTwo").selectedIndex = "1";
          $selectSubCategory.selectmenu("refresh");
        }
      });
      const productLoader =  document.getElementById("find-product-loader");
      $selectSubCategory.on("selectmenuchange", function (event, subCategory) {
        productLoader ? productLoader.classList.remove("hide") : null;
        const selectedSubCategory = subCategory.item ? subCategory.item.value : subCategory.SubCategory;
       
        const selectedProductLink = productList.find(function(value) {
          if(value.SubCategory == selectedSubCategory){
            return value;
          }
        }).Link;
        const xhttp = new XMLHttpRequest();
              xhttp.onload = function () {
                let parseText = new DOMParser().parseFromString(this.responseText, 'text/html');
                let innerDom =  `<div class="container"> ${$(parseText).find('.container')[0].innerHTML} </div>`;
                productLoader ? productLoader.classList.add("hide") : null;
                rightProductDiv? rightProductDiv.innerHTML = innerDom : null;
                if(typeof(Event) === 'function') {var startloadEvent = new Event("start-product");}
                else{
                  var startloadEvent  = document.createEvent('Event');
                  startloadEvent.initEvent("start-product", true, true);
                }
                document.dispatchEvent(startloadEvent);
                deepLinking();
              }
              xhttp.open("GET",domainUrl+selectedProductLink+".html");
              xhttp.send();
      });
    }
  })();
  
$(document).ready(function () {
  initCardSlick();

  $(".orange-hub-filter-section .sort-dropdown span").click(function () {
    $(this).addClass("active");
    $(".sort-dropdown .dropdown-wrapper").toggle();
  });
  $(".orange-hub-filter-section .sort-tools .sort-dropdown li").click(function () {
    $(".sort-tools .sort-dropdown li").removeClass("active");
    $(this).addClass("active");
    $(".sort-dropdown span").removeClass("active");
    $(".sort-tools .sort-dropdown span").text($(this).text());
    $(".sort-dropdown .dropdown-wrapper").hide();
  });

  $(".orange-hub-filter-section .sort-tools .title").click(function () {
    $(".sort-dropdown .dropdown-wrapper").toggle("show");
  });

  $(".orangebook-download .orangebook-cards-slider")
    .not(".slick-initialized")
    .slick({
      dots: false,
      arrows: true,
      infinite: false,
      autoplay: false,
      autoplaySpeed: 2000,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 767,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },

        {
          breakpoint: 557,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "15px",
          },
        },
      ],
    });

  /* filter */
  $(".orange-hub-filter-section .sidebar-content li div").click(function (event) {
    if (event.target !== this) return;
    if ($(event.target).closest(".mCSB_draggerContainer").length > 0) return;
    if (
      $(this).parent().hasClass("active") &&
      $(this).parent().hasClass("dropdown")
    ) {
      $(this).parent().find(".dropdown-list").slideToggle();
      $(this).parent().removeClass("active");
      return;
    } else {
      $(".dropdown-list").hide();
      $(this).parent().find(".dropdown-list").slideDown();
    }
    $(".sidebar-content li div").parent().removeClass("active");
    $(this).parent().addClass("active");
    if ($(this).parent().hasClass("dropdown")) {
      $(this).parent().find(".dropdown-list li").removeClass("active");
      $(this).parent().find(".dropdown-list li").first().addClass("active");
    } else {
      if ($(window).width() < 991) $(".sidebar-header .close").click();
    }
  });

  $(".orange-hub-filter-section .sidebar-content .selection-filters .dropdown-list li").click(function (event) {
    $(".sidebar-content .dropdown-list li").removeClass("active");
    $(this).addClass("active");
    if ($(window).width() < 991) $(".sidebar-header .close").click();
  });

  /* scrollbar */
  $('.orangebook-dropdown .dropdown-list').mCustomScrollbar();
  $('.orangebook-ul ul').mCustomScrollbar();
  $(window).bind("scroll", function () {
    if($(".orangebook-lists ").length == 0){
      return;
    }
    if ($(window).width() < 991) {
      let filterSectionEl = $(".filter-section");
      let headerEl1 = $(".new-header.mobile.sticky-enable .device-menu-top");
      let headerEl2 = $(".new-header.mobile.sticky-enable .search");
      let headerHeight = headerEl1.length
        ? headerEl1.get(0).offsetHeight +
          (headerEl2.length ? headerEl2.get(0).offsetHeight : 0)
        : 0;
      if (filterSectionEl.length) {
        let filterSectionOffTop =
          filterSectionEl.get(0).offsetTop - headerHeight;
        if (window.pageYOffset > filterSectionOffTop) {
          $(".filter-top").addClass("filter-sticky");
        } else {
          $(".filter-top").removeClass("filter-sticky");
        }
      }
    } else if ($(window).width() > 991) {
      $(".filter-top").removeClass("filter-sticky");
      $(".search-container").removeClass("filter-sticky");
    }

    //Lazy Loading Effect
    $(".orangebook-lists .orangebook-list").each(function (index) {
      if ($(".card-loading").length > 0) return;

      if ($(this).isOnScreen() && $(this).hasClass("hidden-card")) {
        var thisElement = $(this);
        thisElement.removeClass("hidden-card");
        thisElement.addClass("card-loading");
        setTimeout(function () {
          thisElement.removeClass("card-loading");
          thisElement.addClass("auto-height");
        }, 2000);
      }
    });
  });
});

$(window).on("load orientationchange", function () {
  initCardSlick();
});

function initCardSlick() {
  if ($(window).width() > 560) {
    if ($(".orangebook-card-m-slider").hasClass("slick-initialized")) {
      $(".orangebook-card-m-slider").slick("unslick");
    }
    return true;
  }

  $(".orangebook-card-m-slider").not(".slick-initialized").slick({
    dots: true,
    arrows: false,
    infinite: true,
    centerMode: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "15px",
  });
}

/* podcast */
$(function () {

  $(document).on("click", ".podcast-play-btn", function (e) {
    e.preventDefault();
    $(".podcast-popup").show();
    audio.src = e.target.getAttribute("data-value");
  
    audio.play();
  });

  $(".podcast-popup .close-icon").click(function (e) {
    $(".podcast-popup").hide();
    audio.pause();
  });

  const audio = $("audio")[0];
  let durUpdated = false;

  $(".audioPlayer .play-icon").click(function (e) {
    e.preventDefault();

    $(this).toggleClass("pause-icon");

    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });
if(audio){
  audio.onplay = function () {
    durUpdated = false;
  };

  audio.ontimeupdate = function () {
    $(".progress").css(
      "width",
      (audio.currentTime / audio.duration) * 100 + "%"
    );
    $(".start-time").text(formatTime(audio.currentTime));
    !durUpdated &&
      audio.duration &&
      $(".total").text(formatTime(audio.duration)) &&
      (durUpdated = true);
  };

  audio.onended = function () {
    $(this).toggleClass("play-icon");
  };
}
  $(".progress-bar").click(function (e) {
    e.preventDefault();
    audio.currentTime = (e.offsetX / $(this).width()) * audio.duration;
  });

  function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    seconds = seconds >= 10 ? seconds : "0" + seconds;
    return minutes + ":" + seconds;
  }
});

/*filter*/
$(".orange-hub-filter-section .toggle-checkbox-ul-more").click(function () {
  $(this).hide();
  $(".checkbox-ul-more").show();
});

function resetFilter() {
  if ($(".filter-top.filter-sticky").length > 0) {
    $(".feature-video-inner").show();
    $(".announcement-section").show();
    $(".filter-inner-container").removeClass("active");
    $(".filter-top").removeClass("filter-selected");
    $(".filter-top").removeClass("filter-sticky");
    $(".filter-cat").hide();
  }
}

$(".orange-hub-filter-section .sidebar-header .close, .sidebar-footer .apply").click(function () {
  closeSidebarFilter();
});
function closeSidebarFilter() {
  $(".sidebar-content").removeClass("active");
  $(".filter-top").removeClass("filter-selected");
  $(".filter-top").removeClass("filter-sticky");
  resetFilter();
  $("body").removeClass("no-scroll");
  if ($(window).width() < 991) {
    $("html, body").animate({
      scrollTop:
        $(".filter-section").offset().top -
        ($(".new-header.mobile").height() +
          $(".new-header.mobile .search").height() +
          10),
    });
  } else {
    $("html, body").animate({
      scrollTop: $(".filter-section").offset().top,
    });
  }
}
$(".orange-hub-filter-section .sidebar-footer .clear-all").click(function () {
  $(".sidebar-content .checkbox-list input").prop("checked", false);
  $(".sidebar-content .checkbox-list input")
    .closest("li")
    .removeClass("active");
  closeSidebarFilter();
});

$(".orange-hub-filter-section .filter-top .filter-icon").click(function () {
  $(".filter-cat").show();
  if (!$(".filter-top").hasClass("filter-sticky")) {
    $(".filter-top").addClass("filter-sticky");
  }
  $(".filter-top").addClass("filter-selected");
  $(".sidebar-content").addClass("active");
  $("body").addClass("no-scroll");
  $(".filter-cat").addClass("active");

});

$(document).on("click", ".filter-cat .filter-clear", function () {
  $(".filter-inner-container").removeClass("active");
  $(".filter-top").removeClass("filter-selected");
  $(".filter-top").removeClass("filter-sticky");
  $(".search-container").removeClass("filter-sticky");
  $(".filter-cat").hide();
});

$("#subcribe-form").on("submit", function (e) {
  e.preventDefault();
  var fname = document.forms["subcribe-form"]["name"].value;
  var email = document.forms["subcribe-form"]["email"].value;
  var isValid = true;
  var $fnameEl;
  $("#subcribe-form .error").removeClass("error");
  $("#subcribe-form .error-txt").hide();
  var fnameInvalid = !/^[a-zA-Z ]*$/g.test(fname);
  if (fname == null || fname == "") {
     $fnameEl = $("#subcribe-form #name");
    $fnameEl.addClass("error");
    $("#subcribe-form #fname-err").show();
    isValid = false;
  }
  if (fnameInvalid) {
     $fnameEl = $("#subcribe-form #name");
    $fnameEl.addClass("error");
    $("#subcribe-form #fname-num-err").show();
    isValid = false;
  }
  if (email == null || email == "" || !/(.+)@(.+){2,}\.(.+){2,}/.test(email)) {
    var $emailEl = $("#subcribe-form #email");
    $emailEl.addClass("error");
    $("#subcribe-form #email-err").show();
    isValid = false;
  }
  if (isValid) {
    
    $("#subcribe-form")[0].reset();
  }
});

var activeInnertab;
handleOninnerTabChange();
document.addEventListener("start-product", function () {
  handleOninnerTabChange();
});

function handleOninnerTabChange() {
  
  setTimeout(function () {
    var tabList =  $(".tabpanel-inner .product-tabs ul li");
    $.each(tabList, function() {
      $("." + $(this).attr("id") + "-leftpanel").hide();
      $("." + $(this).attr("id") + "-rightPanel").hide();
    });
    activeInnertab = $(".tabpanel-inner .product-tabs ul li.active").attr("id");
    if (activeInnertab) {
      $("." + activeInnertab + "-leftpanel").show();
      $("." + activeInnertab + "-rightPanel").show();
    }
  }, 0);
}

$(document).off("start-product");
!(function () {
  var cardsData = { cards: [] };
  const domainUrl = location.origin;
  const filterEl = $(".orange-hub-filter-section");

  let searchPath, cardGroupCount;
  if (filterEl.length > 0) {
    searchPath = filterEl.attr("data-searchpath");
    cardGroupCount = filterEl.attr("data-cardGroupCount");
  }
  let start = 0;
  let loader = $("#initialLoading");

  function fetchblogsData() {
    return fetch(
      domainUrl +
        "/content/icicibank.blogsearch.json?searchPath=" +
        searchPath +
        "&start=" +
        start +
        "&orderby=publishdate"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data && data["cards"]) {
          cardsData = data;
        }
        sortCards(cardsData["cards"]);
      })
      .catch(function () {
        loader.removeClass("card-loading");
      });
  }
  let tempArray = [];
  let bgfilters = [];
  if (searchPath) {
    fetchblogsData();
  }
  function sortCards(dataArray) {
    setTimeout(function () {
      var sortId = $(".sort-dropdown .dropdown-inner li.active").attr("id");
      if (sortId == "latest") {
        dataArray.sort(custom_sort_date);
        dataArray.reverse();
      } else if (sortId == "oldest") {
        dataArray.sort(custom_sort_date);
      } else if (sortId == "viewed") {
        dataArray.sort(custom_sort_view);
        dataArray.reverse();
      } else if (sortId == "liked") {
        dataArray.sort(custom_sort_like);
        dataArray.reverse();
      }
      createOrangeList(dataArray);
    }, 500);
  }

  function custom_sort_date(a, b) {
    return (
      new Date(a.publishdate).getTime() - new Date(b.publishdate).getTime()
    );
  }

  function custom_sort_view(a, b) {
    var viewsOne = a.viewers,
      viewsTwo = b.viewers;
    if (viewsOne == undefined) viewsOne = 0;
    if (viewsTwo == undefined) viewsTwo = 0;

    return parseInt(viewsOne) - parseInt(viewsTwo);
  }

  function custom_sort_like(a, b) {
    var likeOne = a.likes,
      likeTwo = b.likes;
    if (likeOne == undefined) likeOne = 0;
    if (likeTwo == undefined) likeTwo = 0;

    return parseInt(likeOne) - parseInt(likeTwo);
  }

  //Filter from search box input
  $(".orange-hub-filter-section .filter-content .search-box-area input").focus(
    function () {
      $(".filter-content .search-box-area input").val("");
    }
  );
  $(".orange-hub-filter-section .filter-content .search-box-area input").keyup(
    function () {
      var inputText = $(this)[0].value;
      if (inputText.length > 0) {
        var titleArray = searchItems(cardsData["cards"], "title", inputText);
        var resultArray = titleArray;
        // var resultArray = titleArray.concat(descArray, brandArray);
        resultArray = uniqueData(resultArray, "cardId");
        sortCards(resultArray);
      } else sortCards(cardsData["cards"]);
    }
  );

  function uniqueData(array, property) {
    var unique = {};
    var distinct = [];
    for (var i in array) {
      if (typeof unique[array[i][property]] == "undefined") {
        distinct.push(array[i]);
      }
      unique[array[i][property]] = 0;
    }
    return distinct;
  }

  function handleAllChecklist() {
    $(".filter-content .filter-cat").show();
    $(".filter-content .filter-cat").addClass("active");
    if ($(window).width() > 991) {
      createFilterArray();
    }
  }

  $(document).on(
    "click",
    ".orange-hub-filter-section .sidebar-content .type-checkbox-list input",
    function () {
      $(".sidebar-content .volume-checkbox-list input").prop("checked", false);
      handleAllChecklist();
    }
  );

  $(document).on(
    "click",
    ".orange-hub-filter-section .sidebar-content .volume-checkbox-list input",
    function () {
      $(".sidebar-content .type-checkbox-list input").prop("checked", false);
      handleAllChecklist();
    }
  );

  function createFilterArray() {
    bgfilters = [];
    $.each($(".sidebar-content .checkbox-list input:checked"), function () {
      if (bgfilters.indexOf($(this).val()) == -1) bgfilters.push($(this).val());
    });
    if (bgfilters.length == 0) {
      if ($(window).width() <= 991) {
        // $('.feature-offer-section').show();
        // $('.announcement-section').show();
        $(".filter-inner-container").removeClass("active");
        $(".filter-top").removeClass("filter-selected");
        $(".filter-top").removeClass("filter-sticky");
      }
      $(".filter-content .filter-cat").hide();
      $(".filter-content .filter-cat").removeClass("active");
      sortCards(cardsData["cards"]);
      generateFilterTags("#filterTags", "");
    } else {
      generateFilterTags("#filterTags", bgfilters);
      renderOfferCards();
    }
  }

  /**
   *Filter close remove from list
   */
  $(document).on(
    "click",
    ".orange-hub-filter-section  .filter-cat img",
    function () {
      var removefilterId = $(this).closest("span").attr("data-filter");
      $("[value=" + removefilterId + "]").prop("checked", false);
      $("[value=" + removefilterId + "]")
        .closest("li")
        .removeClass("active");
      createFilterArray();
    }
  );

  $(document).on(
    "click",
    ".orange-hub-filter-section  .filter-cat .filter-clear",
    function () {
      $(".sidebar-content .checkbox-list input").prop("checked", false);
      $(".sidebar-content .checkbox-list input")
        .closest("li")
        .removeClass("active");
      createFilterArray();
    }
  );

  $(".orange-hub-filter-section  .sidebar-header .close").click(function () {
    $(".filter-content .filter-cat").hide();
    $(".filter-content .filter-cat").removeClass("active");
    $(".sidebar-content .checkbox-list input").prop("checked", false);
    $(".sidebar-content .checkbox-list input")
      .closest("li")
      .removeClass("active");
    $(this).parent().removeClass("active");
  });

  $(
    ".orange-hub-filter-section .sidebar-footer .apply, .orange-hub-filter-section  .sidebar-footer .clear-all"
  ).click(function () {
    setTimeout(function () {
      createFilterArray();
    }, 500);
  });

  $(".orange-hub-filter-section .sort-dropdown .dropdown-inner li").click(
    function () {
      if (tempArray.length > 0) sortCards(tempArray);
      else sortCards(cardsData["cards"]);
    }
  );

  //Filter cards from sidebar selection category
  $(
    ".orange-hub-filter-section .sidebar-content .selection-filters li div"
  ).click(function (event) {
    if (event.target !== this) return; // Do nothing
    if ($(event.target).closest(".mCSB_draggerContainer").length > 0) return;
    clearCheckFilters();
    if ($(this).parent().hasClass("dropdown")) {
      renderOfferCards(
        $(this).siblings(".dropdown-list").find("li:first").attr("id")
      );
    } else renderOfferCards($(this).parent().attr("id"));
  });

  //Filter video from sidebar selection sub-category
  $(
    ".orange-hub-filter-section  .sidebar-content .selection-filters .dropdown-list li"
  ).click(function (event) {
    clearCheckFilters();
    renderOfferCards($(this).attr("id"));
  });

  $(".orangebook-dropdown .menu-item").click(function (event) {
    clearCheckFilters();
    renderOfferCards("all");
  });

  function clearCheckFilters() {
    $(".sidebar-content .checkbox-list input").prop("checked", false);
    $(".filter-content .filter-cat").show();
    $(".filter-content .filter-cat").addClass("active");
    createFilterArray();
  }

  function renderOfferCards(filterId) {
    tempArray = [];
    if (filterId == "all") {
      sortCards(cardsData["cards"]);
    } else {
      for (let index = 0; index < cardsData["cards"].length; index++) {
        var element = cardsData["cards"][index];
        if (
          element["categoryid"].toLowerCase() == filterId ||
          element["subcategory"].toLowerCase() == filterId ||
          element["typeid"].toLowerCase() == filterId
        ) {
          tempArray.push(element);
        }
        if (
          bgfilters.indexOf(element["volumeId"].toLowerCase()) != -1 ||
          bgfilters.indexOf(element["typeid"].toLowerCase()) != -1
        ) {
          tempArray.push(element);
        }
      }
      sortCards(tempArray);
    }
  }

  function intToString(value) {
    if (!value) {
      return 0;
    }

    if (value && value.length <= 3) {
      return value;
    }

    var suffixes = ["", "K", "M", "B", "T"];
    var suffixNum = Math.floor(("" + value).length / 3);
    var shortValue = parseFloat(
      (suffixNum != 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(
        2
      )
    );
    if (shortValue % 1 != 0) {
      shortValue = shortValue.toFixed(1);
    }
    return shortValue + suffixes[suffixNum];
  }

  function getTimePassed(publishDate) {
    // Set the date we're counting down to
    var countDownDate = new Date(publishDate).getTime();
    var now = new Date().getTime();
    var distance = now - countDownDate;

    // Time calculations for days, hours, minutes and seconds
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var months = Math.floor(days / 31);
    var years = Math.floor(months / 12);

    var message = "";
    if (years == 1) message = years + " Year Ago";
    else if (years > 0) message = years + " Years Ago";
    else if (months == 1) message = months + " Month Ago";
    else if (months > 0) message = months + " Months Ago";
    else if (days == 1) message = days + " Day Ago";
    else if (days > 1 && days < 7) message = days + " Days Ago";
    else if (days >= 7) {
      var weeks = Math.round(days / 7);
      if (weeks == 1) message = weeks + " Week Ago";
      else message = weeks + " Weeks Ago";
    } else if (hours == 1) message = hours + " Hour Ago";
    else if (hours > 0) message = hours + " Hours Ago";
    else message = minutes + " Minutes Ago";

    return message;
  }

  function createOrangeList(cardData) {
    let htmlMarkup = "";
    for (let index = 0, len = cardData.length; index < len; index++) {
      if (index % cardGroupCount == 0) {
        if (index >= cardGroupCount)
          htmlMarkup += '<div class="orangebook-list hidden-card">';
        else htmlMarkup += '<div class="orangebook-list">';
      }

      htmlMarkup += generateHTML(
        cardData[index]["image"],
        cardData[index]["type"],
        cardData[index]["readTime"] + "mins Read",
        getTimePassed(cardData[index]["publishdate"]),
        cardData[index]["link"],
        cardData[index]["title"],
        cardData[index]["tags"],
        intToString(cardData[index]["viewers"]),
        intToString(cardData[index]["likes"]),
        cardData[index]["video"],
        cardData[index]["videoDuration"],
        cardData[index]["podcast"],
        cardData[index]["podcastDuration"],
        cardData[index]["imagealtText"],
        index
      );
      if (index % cardGroupCount == cardGroupCount - 1) {
        htmlMarkup += "</div>";
      }
    }

    //Display result
    if (htmlMarkup.length > 0) {
      $("#orangeListWrapper").html(htmlMarkup);
      $(".filter-top .sort-tools").removeClass("disable-sorting");
      // getRemainingTime();
    } else {
      $("#orangeListWrapper").html('<div class="no-result"></div>');
      $(".filter-top .sort-tools").addClass("disable-sorting");
    }
    loader.removeClass("card-loading");
  }

  function generateHTML(
    cardImage,
    cardType,
    readTime,
    timeAgo,
    pageLink,
    cardTitle,
    tagsArr,
    viewers,
    likes,
    cardVideo,
    cardVideoDuration,
    cardPodcast,
    cardPodcastDuration,
    imagealtText,
    index
  ) {
    var lowerCaseCardType = cardType.toLowerCase();
    var whatsapplnk =
        "https://api.whatsapp.com/send?url=" +
        pageLink +
        "?rel=0&text=" +
        cardTitle,
      fblink =
        "https://www.facebook.com/sharer/sharer.php?u=" +
        document.domain+pageLink +
        "?rel=0&text=" +
        cardTitle,
      twitterlink =
        "https://twitter.com/intent/tweet?url=" +
        pageLink +
        "?rel=0&text=" +
        cardTitle,
      linkdinlink =
        "https://www.linkedin.com/shareArticle?mini=true?url=" +
        pageLink +
        "?rel=0&text=" +
        cardTitle;
    tagsArr = tagsArr.split(",");
    // remove cardImage hardcoding after dam migration
    // cardImage = "/content/dam/icicibank/blog-img.jpg";
    var tagsHtml = tagsArr
      .map(function (tag) {
        if (tag) {
          return '<div class="tag">' + tag + "</div>";
        } else return "";
      })
      .join("");
    var html =
      '<div class="orangebook-card"><div class="card-inner"><div class="media">' +
      (lowerCaseCardType === "video" || lowerCaseCardType === "webinar"
        ? '<img src="' +
          cardImage +
          '" alt="" loading="lazy"><a href="' +
          cardVideo +
          '" class="play-btn"></a>'
        : lowerCaseCardType === "podcast"
        ? '<img src="assets/images/orange-hub/podcast-img.jpg" alt="" loading="lazy"><a href="#" data-value="' +
          cardPodcast +
          '" class="play-btn podcast-play-btn"></a>'
        : '<a href="' +
          pageLink +
          '" target="_blank">' +
          '<img src="' +
          cardImage +
          '" alt="' +
          imagealtText +
          '" loading="lazy"></a>') +
      '</div><div class="content">\n\
        <div class="card-top">\n\
            <div class="blue-tag">' +
      (cardType === "Webinar" ? "Video" : cardType) +
      '</div>\n\
        <div class="date">' +
      (lowerCaseCardType === "video" || lowerCaseCardType === "webinar"
        ? cardVideoDuration + " | " + timeAgo
        : lowerCaseCardType === "podcast"
        ? cardPodcastDuration + " | " + timeAgo
        : readTime + " | " + timeAgo) +
      '</div>\n\
        </div><a href="' +
      (lowerCaseCardType === "video" || lowerCaseCardType === "webinar"
        ? cardVideo
        : pageLink) +
      '" target="_blank">' +
      '<h2 class="card-title">'+cardTitle + '</h2>' +
      '</a><div class="card-tags">' +
      tagsHtml +
      '</div>\n\
        \n\
        <div class="card-bottom">\n\
            <div class="date-readtime"><span class="num-viewer">' +
      viewers +
      '</span></div>\n\
        <div class="bookmark-share">\n\
            <div class="share" data-text="Check out this blog"></div>\n\
            <div class="share-content">\n\
                <div class="inner-content">\n\
                    <div class="share-header">\n\
                        <p>Share</p><span class="close-icon"><img\n\
                                src="/content/dam/icicibank/icici-assets/icons/close-orange.svg"\n\
                                alt="fb" loading="lazy"></span>\n\
                    </div>\n\
                    <ul class="share-link">\n\
                        <li><a href="' +
      whatsapplnk +
      '" target="_blank"><span\n\
                                    class="n-icon"><img\n\
                                        src="/content/dam/icicibank/icici-assets/icons/video/whatsapp.svg"\n\
                                        alt="whatsapp" loading="lazy"></span> <span\n\
                                    class="h-icon"><img\n\
                                        src="/content/dam/icicibank/icici-assets/icons/video/whatsapp-o.svg"\n\
                                        alt="whatsapp" loading="lazy"> </span></a></li>\n\
                        <li><a href="' +
      fblink +
      '" target="_blank"> <span\n\
                                    class="n-icon"><img\n\
                                        src="/content/dam/icicibank/icici-assets/icons/fb-black.svg"\n\
                                        alt="fb" loading="lazy"></span><span\n\
                                    class="h-icon"><img\n\
                                        src="/content/dam/icicibank/icici-assets/icons/fb-orange.svg"\n\
                                        alt="fb" loading="lazy"></span></a></li>\n\
                        <li><a href="' +
      twitterlink +
      '" target="_blank"><span\n\
                                    class="n-icon"><img\n\
                                        src="/content/dam/icicibank/icici-assets/icons/tw-black.svg"\n\
                                        alt="tw" loading="lazy"></span><span\n\
                                    class="h-icon"><img\n\
                                        src="/content/dam/icicibank/icici-assets/icons/tw-orange.svg"\n\
                                        alt="tw" loading="lazy"></span></a></li>\n\
                        <li><a href="' +
      linkdinlink +
      '" target="_blank"><span\n\
                                    class="n-icon"><img\n\
                                        src="/content/dam/icicibank/icici-assets/icons/ln-black.svg"\n\
                                        alt="ln" loading="lazy"></span><span\n\
                                    class="h-icon"><img\n\
                                        src="/content/dam/icicibank/icici-assets/icons/ln-orange.svg"\n\
                                        alt="ln" loading="lazy"></span></a></li>\n\
                    </ul>\n\
                    <div class="youtube-text"><input type="text" id="bloglink' +
      index +
      '" name="link"\n\
                            value="' +
      domainUrl +
      pageLink +
      '"><span id="btn-bloglink' + index + '" onclick="copyCode(\'bloglink' +index + '\',\'btn-bloglink' +  index + '\',\'input\')">Copy</span>\n\
                    </div>\n\
                </div>\n\
            </div>\n\
        </div>\n\
      </div>\n\
      </div>\n\
      </div>\n\
      </div>';
    return html;
  }

  if ($(".orange-hub-filter-section")) {
    $("body").addClass("experiencefr-blog-filter");
  }
})();

/* trending-deals-slider */
$('.trending-deals-slider.featured-products-atm-page').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true,
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true,
                centerMode: true,
                centerPadding: '15px',
                infinite: true,
            }
        }
    ]
});
$(window).on('load resize', function() {
    $('.trending-deals-slider .slick-arrow').on('click', function() {
        setTimeout(function() {$('.trending-deals-slider.featured-products-atm-page .deal-card').equalHeights();},100);
    });
});
$('#nudgeForTrendingDeals').hide();
$('.deals-section .nav-tabs li a').on('click', function() {
    $('.deals-section .slick-slider').slick('refresh');
    setTimeout(function() {$('.trending-deals-slider.featured-products-atm-page .deal-card').equalHeights();},100);
    $(".compare-step-1").removeClass("hide");
    $(".compare-step-2").addClass("hide");
    $(".compare-step-3").addClass("hide");
    let nudgeContent = $(this).data('nudge-content');
    if (nudgeContent != undefined) {
        $("#nudgeForTrendingDeals p").empty().append(nudgeContent)
        $('#nudgeForTrendingDeals').show();
    } else {
        $('#nudgeForTrendingDeals').hide();
    }
    
});


function trendingDealSliderHeight(selector) {
    var heights = [];
    var height = '';
    var maxHeight = '';
    $('#myTabContent .tab-pane.active .trending-deals-slider .slick-list .slick-track').each(function() {
        $(this).find($(selector)).each(function() {
            height = $(this).height();
            heights.push(height);
        });

        maxHeight = Math.max.apply(null, heights);

        // Set the maxHeight to every selected element
        $('#myTabContent .tab-pane.active .trending-deals-slider .slick-list .slick-track').find($(selector)).each(function() {
            $(this).height(maxHeight);
        });
    });
}

function setOfferHeight() {
    trendingDealSliderHeight('.deal-card');
    trendingDealSliderHeight('.offer');
    trendingDealSliderHeight('.description');
    trendingDealSliderHeight('.img-offer-wrapper');
}
setOfferHeight();
$(window).on('load', function() {
    setTimeout(
        function() { $('.trending-deals-slider.featured-products-atm-page .deal-card').equalHeights(); }, 1000
    )
});
(function () {
    //Recomeded debit cards slider
    $(".recomeded-cards-section .cards-list").slick({
      dots: !0,
      arrows: !0,
      infinite: !1,
      autoplay: !1,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: !1,
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 640,
          settings: {
            arrows: !1,
            centerMode: !0,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "45px",
          },
        },
      ],
    });
    $(window).on("load resize orientationchange", function () {
        $(
          ".debit-cards-section .trending-deals-slider .description"
        ).equalHeights();
      });
  })();
var activetab;
handleOnTabChange();
document.addEventListener("start-product", function () {
  handleOnTabChange();
  
  loadCallback();
});

function handleOnTabChange() {
  setTimeout(function () {
    $(".reward-panel .product-tabs li").each(function (i) {
      $("." + $(this).attr("id") + "-leftpanel").hide();
      $("." + $(this).attr("id") + "-rightPanel").hide();
    });
    $(".loan-forms .form-slider").slick("refresh");
    activetab = $(".product-tabs ul li.active").attr("id");
    if (activetab) {
      $("." + activetab + "-leftpanel").show();
      $("." + activetab + "-rightPanel").show();
      if($(".product-tabs li.active").attr('id')==="product-tab-0"){
        $("input[name=" + activetab + "]:eq(1)").attr("checked", true);
      }
      else{
      $("input[name=" + activetab + "]:first").attr("checked", true);
      }
      handleChangeLifestyleIncome();
    }
  }, 0);
}

function handleChangeLifestyleIncome() {
  $(".each-content").each(function (i) {
    $(".each-content").addClass("hide");
  });
  $(".left-image").each(function (i) {
    $(".left-image").addClass("hide");
  });
  setTimeout(function () {
    const income = document.querySelector(
      'input[name="' + activetab + '"]:checked'
    ) ? document.querySelector(
      'input[name="' + activetab + '"]:checked'
    ).value : null;
    if (income && activetab) {
     
      $("." + activetab + "-" + income.replace(".", "-")).removeClass("hide");
      $("." + activetab + "-" + income.replace(".", "-"))
        .parent()
        .show();
      $("." + activetab + "-" + income.replace(".", "-")).show();
      $(".card-" + activetab + "-" + income.replace(".", "-")).removeClass(
        "hide"
      );
    }
  }, 15);
}


function loadCallback() {
    /* form-slider' */
    !$(".loan-forms .form-slider").hasClass("slick-initialized") &&
$(".loan-forms .form-slider").slick({
    dots: true,
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          infinite: false,
          autoplay: false,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
        },
      },
    ],
    onInit: function () {
      $(".slick-next .slick-arraow").css("pointer-events", "none");
    },
  });
  
  function deactiveArrow() {
    $(".form-slider .slick-arrow").addClass("arrow-disable");
  }
  
  function activateArrow() {
    $(".form-slider .slick-arrow").removeClass("arrow-disable");
  }
  
  function showFormError() {
    $(".form-slider .slick-active").find(".form-group-inner").addClass("error");
  }
  
  var disableEventsClass = "disable-el";
  function disableSlickDots(index) {
    $("#offer-form .slick-dots li").eq(index).addClass(disableEventsClass);
    $("#offer-form-mob .slick-dots li").eq(index).addClass(disableEventsClass);
  }
  
  function enableSlickDot(index) {
    $("#offer-form .slick-dots li").eq(index).removeClass(disableEventsClass);
    $("#offer-form-mob .slick-dots li").eq(index).removeClass(disableEventsClass);
  }
  
  function validateMobile($this) {
    flag = false;
    msg = "";
    mobile = $($this).val();
    if ($.trim(mobile) == "") {
      disableSlickDots(2);
    } else if (!$.isNumeric(mobile)) {
      showFormError();
      msg = "Please enter valid Mobile number";
      $($this).addClass("error");
      disableSlickDots(2);
    } else if (mobile.length < 10) {
      showFormError();
      msg = "Please enter valid Mobile number";
      $($this).addClass("error");
      disableSlickDots(2);
    } else {
      $($this).removeClass("error");
      $(".form-slider .slick-active")
        .find(".form-group-inner")
        .removeClass("error");
      activateArrow();
      enableSlickDot(2);
      flag = true;
    }
    $(".error-msg").html(msg);
    return flag;
  }
  
  function validateName($this) {
    flag = false;
    msg = "";
    var regName = /^[a-zA-Z ]+$/;
    name = $($this).val();
    if ($.trim(name) == "") {
      disableSlickDots(1);
      disableSlickDots(2);
    } else if (!regName.test(name)) {
      showFormError();
      msg = "Please enter valid first Name";
      $($this).addClass("error");
      disableSlickDots(1);
      disableSlickDots(2);
    } else {
      $($this).removeClass("error");
      $(".form-slider .slick-active")
        .find(".form-group-inner")
        .removeClass("error");
      activateArrow();
      enableSlickDot(1);
      $(".slick-dots").show();
      flag = true;
    }
    $(".error-msg").html(msg);
    return flag;
  }
  
  function validateEmail($this) {
    flag = false;
    msg = "";
    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    email = $($this).val();
    $(".slick-arrow").removeClass("active-btn-submit");
    $(".cust-btn-submit").removeClass("active-btn-submit");
    if ($.trim(email) == "") {
    } else if (!regEmail.test(email)) {
      showFormError();
      msg = "Please enter valid Email ID";
      $($this).addClass("error");
    } else {
      $($this).removeClass("error");
      $(".form-slider .slick-active")
        .find(".form-group-inner")
        .removeClass("error");
      activateArrow();
      $(".slick-dots").show();
      flag = true;
      $(".slick-arrow").addClass("active-btn-submit");
      $(".cust-btn-submit").addClass("active-btn-submit");
    }
    $(".error-msg").html(msg);
    return flag;
  }
  
  var timeout = 0;
  
  
    clearInterval(timeout);
  
    $(".form-slider").on("afterChange", function (event, slick, currentSlide) {
      $('.slick-arrow').show();
      $('.cust-btn-submit').hide();
      if (currentSlide == 3) {
        if (!validateMobile($(".input-mobile")))
          $(".form-slider").slickGoTo(parseInt(0));
        else if (!validateName($(".input-name")))
          $(".form-slider").slickGoTo(parseInt(1));
        else if (!validateEmail($(".input-email")))
          $(".form-slider").slickGoTo(parseInt(2));
        else {
          $("#offer-form-mob").trigger("reset");
          $("#offer-form").trigger("reset");
        }
      }
      if (currentSlide == 0) {
        if (!validateName($(".input-name"))) deactiveArrow();
        else activateArrow();
        $('.slick-arrow').removeClass('btn-submit active-btn-submit');
        $(".cust-btn-submit").removeClass("active-btn-submit");      
      } else if (currentSlide == 1) {
        if (!validateMobile($(".input-mobile"))) deactiveArrow();
        else activateArrow();
        $(".cust-btn-submit").removeClass("active-btn-submit");      
        $('.slick-arrow').removeClass('btn-submit active-btn-submit');
      } else if (currentSlide == 2) {
        $(".slick-arrow").val("Submit");
        $(".slick-arrow").text("Submit");
        $(".slick-arrow").addClass("btn-submit");
        if (!validateEmail($(".input-email"))) deactiveArrow();
        else activateArrow();
        //Custom cust-btn-submit with active-btn-submit added
        if($('.cust-btn-submit').length <= 0)
        {
          $( '<button class="cust-btn-submit" type="button" aria-disabled="true" value="Submit">Submit</button>').insertAfter( ".form-slider .slick-next" );
        }else {
          $('.cust-btn-submit').show();
        }
        $('.slick-arrow').hide();
      } else {
        $("#offer-form").trigger("reset");
        $("#offer-form-mob").trigger("reset");
      }
    });
  
    $("form input").on("keyup", function () {
      deactiveArrow();
      if ($(this).hasClass("input-mobile")) {
        validateMobile($(this));
      } else if ($(this).hasClass("input-name")) {
        validateName($(this));
      } else if ($(this).hasClass("input-email")) {
        validateEmail($(this));
      }
    });
  
    deactiveArrow();
    disableSlickDots(1);
    disableSlickDots(2);
  
    //$(".form-slider .slick-dots li").last().hide();
  
    $(".slick-arrow").on("click", function (e) {
      if ($(this).hasClass("arrow-disable")) {
        e.preventDefault();
      }
    });
    
    $(document).on("click", "button.cust-btn-submit", function () {
          $(this).addClass("activeCall");
          getCallback();
    });  
  
  
  var getCallback = (function() {
      var executed = false;
      return function() {
          if (!executed) {
              executed = true;
              var formajax = $(".activeCall").parent().parent().parent().parent().parent().find("#offer-form").attr("ajax-page");
              var callbackId = $("#callBackId").text();
              var productId = $("#" + callbackId).text();
              
              var customerName = $(".activeCall").parent().parent().parent().parent().parent().find("#offer-form").find("#name").val();
              
              var words = customerName.split(' ');
              
              if(words.length == 1)
              {
                  var customerFirstName = customerName;
                  var customerLastName = customerName;
              } else{
                  var customerFirstName = customerName.substr(0,customerName.indexOf(' '));
                  var k = customerName.substr(customerName.indexOf(' '));
                  var customerLastName = k.replace(/ /g,'');
              }
      
              var customerContactNo = $(".activeCall").parent().parent().parent().parent().parent().find("#offer-form").find("#mobile").val();
              var customerEmailId = $(".activeCall").parent().parent().parent().parent().parent().find("#offer-form").find("#email").val();
              var callbackRequest;
              if (typeof formajax != "undefined" && typeof productId != "undefined" && typeof customerFirstName != "undefined" && typeof customerLastName != "undefined" && typeof customerContactNo != "undefined" && typeof customerEmailId != "undefined") {
                  if (formajax != null && formajax != "" && productId != null && productId != "" && customerFirstName != null && customerFirstName != "" & customerLastName != null && customerLastName != "" && customerContactNo != null && customerContactNo != "" && customerEmailId != null && customerEmailId != "") {
                      callbackRequest = formajax + "apiname=save&productCode=" + productId + "&custName=" + customerFirstName + "&lastName=" + customerLastName + "&custMobNo=" + customerContactNo + "&custEmail=" + customerEmailId;
                  }
              }
              if (typeof callbackRequest != "undefined") {
                  if (callbackRequest != null && callbackRequest != "") {
                      $.ajax({
                          dataType: "json",
                          url: callbackRequest,
                          type: "GET",
                          success: function (response) {
                              getCallbackResults = response.getCallbackResults;
                var successFlag = 0;
                              for (var i = 0; i < getCallbackResults.length; i++) {
                                  var crmServiceResponce = getCallbackResults[i].IsSuccess;
                                  var message = getCallbackResults[i].Message;
                                  var crmItemKey = getCallbackResults[i].ItemKey;
                                  if (typeof message != "undefined" && typeof crmItemKey != "undefined" && typeof crmServiceResponce != "undefined") {
                                      if (message != null && message != "" && crmItemKey != null && crmItemKey != "" && crmServiceResponce != null && crmServiceResponce != "") {
                                          if (message == "Success") {
                        successFlag++;
                                              $("form.offer-form").css("display","none");
                                              $(".loan-forms .content .success-msg").css("display","inline-block");
                                              $(".loan-forms .content .success-msg p").css("display","inline-block");
                                          }
                                      }
                                  }
                              }
                          },
                          error: function () {
                              executed = false;
                          },
                      });
                  }
              }
          }
      };
  })();
  
  
  }
$(document).ready(function(){
$('body').addClass('experiencefr-handpicked');
// MCCM Deals and more Cookie Settings
var mccmmaxCookieValue = 3, mccminitCookie = 1, mccmexpirationDays = 1;
var mccmcookieName = "mccmdealsOfferSetCount";
// Check if the cookie exists.
if (jQuery.cookie(mccmcookieName) == null) {
    // If the cookie doesn't exist, save the cookie with the value of 1
    jQuery.cookie(mccmcookieName, mccminitCookie, {expires: mccmexpirationDays});
} else {
    // If the cookie exists, take the value
    var mccmcookie_value = jQuery.cookie(mccmcookieName);
	// Convert the value to an int to make sure
    mccmcookie_value = parseInt(mccmcookie_value);
	if (mccmcookie_value >= mccminitCookie && mccmcookie_value < mccmmaxCookieValue) {
		mccmcookie_value++;
		jQuery.cookie(mccmcookieName, mccmcookie_value, { expires: mccmexpirationDays });
	
	}
	if (mccmcookie_value >= mccmmaxCookieValue) {
	
		// if cookie is equal with the number you've set, then set the cookie value to 1
		jQuery.cookie(mccmcookieName, mccminitCookie, {expires: mccmexpirationDays});
	}
}

 //Cookie Settings for suppression
 mccmHandpickedOffersCookieVal(); 
 
 
 //Default Offers to be loaded if no offers found or no fedid found
 
 function handPickedOffers(sliderdiv, cardsliderdiv){
	var fileUrlOffer = $("#non-unica-handpicked-json").val();
				var result={"offers":[]};
				$.getJSON(fileUrlOffer, function(data){ 
					if(data&&data.offers){result=data;}	
						
					var cookieVal = $("input[id='readonlycategories']").val();
					//var cookieVal = "hnoicbfk,hm1uihm9,hq0fgv0l,jncpoxds";
					var valArrCount = 0;
					if(typeof(cookieVal) != "undefined"){
						if(cookieVal !=null && cookieVal!=""){
						
							var valArr = cookieVal.split(',');
							valArrCount = valArr.length;
							
						}
					}

					var offerId=[];
					var defaultOffer=[];
						for(var d=0;d<result.offers.length;d++){
							if(result.offers[d].trendingOfferShow == "0"){
								defaultOffer.push(result.offers[d].offerId);
							
							}
						}
							
					var loopCount=0;
								
					if(valArrCount == 1){
							loopCount = 3;
						}
					else if(valArrCount == 2){
							loopCount = 2;
						}
					else if(valArrCount ==3){
							loopCount = 1;
						}
					else{
						
						}
						for(var k=0;k < valArrCount; k++)
						{
						
							var count=0;
							for(var i = 0; i < result.offers.length; i++)
							{
							
							var categoryArr = result.offers[i].category.split(':');
								 
								for(var j=0;j < categoryArr.length; j++){
							
									var currOfferId = result.offers[i].offerId;
							
									
										if((categoryArr[j] == valArr[k]) && !offerId.includes(currOfferId)){
											offerId.push(result.offers[i].offerId);
											++count;
												
										}else{
											
										}
								
								}
								if(loopCount == count){
													break;
												}
												
							}
						}

						var diffCount = defaultOffer.length - offerId.length;
						
								for(var o=0; o < defaultOffer.length;o++){
									if(!offerId.includes(defaultOffer[o])){
										offerId.push(defaultOffer[o]);
									}
								}
						var countNew=0;
						for(var h=0;h <= offerId.length;h++){
							for(var p=0;p < result.offers.length;p++){
							
					
								if(result.offers[p].offerId == offerId[h]){
									var favouriteClass = $("input#favouriteClass").val();
									var offerShareLinkPage = $("input#offerShareLinkPage").val();
									
									var url = result.offers[p].Url;
									
									var offerView = result.offers[p].offerViews;
									var view = "";
									var offerPageUrl = result.offers[p].brandLink;
									
									var smallOfferImageRef = result.offers[p].smallOfferImageRef;
									var eventTrackCode = result.offers[p].eventTrackCode;
									var OfferDespOne = result.offers[p].offerDesp1;
									var OfferDespTwo = result.offers[p].offerDesp2;
									var OfferDespThree = result.offers[p].offerDesp3;
									var OfferDespFour = result.offers[p].offerDesp4;
									var categoryName = result.offers[p].categoryName;
									var categoryLink = result.offers[p].categoryLink;
									var OfferId = result.offers[p].offerId;
									var OfferTitle = result.offers[p].offerTitle;
									var display="";
									
									var	pageurl = offerShareLinkPage + offerPageUrl;

									var fbShare = "https://www.facebook.com/sharer/sharer.php?u="+pageurl; 
									var lkShare = "https://www.linkedin.com/shareArticle?mini=true&amp;url="+pageurl; 
									var twShare = "https://twitter.com/intent/tweet?url="+pageurl+"&amp;text="+OfferTitle;
									var gpShare = "https://plus.google.com/share?url="+pageurl+"&amp;text="+OfferTitle;
									
									if(countNew >= 3){
									display="display:none;";
									}
									
									if(offerView !=null && offerView!=""){
										
										if(offerView.length == 4){
										   view = offerView.substr(0, 1)+"."+offerView.substr(2, 1)+"K Views";
										} else if(offerView.length == 5){
											view = offerView.substr(1, 2)+"K Views";
										} else if(offerView.length == 6){
											view = offerView.substr(1, 3)+"K Views";
										} else if(offerView.length == 7){
											view = offerView.substr(0, 1)+"."+offerView.substr(2, 1)+"M Views";
										} else {
											view = offerView+" Views";
										}
									
									}
									sliderdiv += "<div class='offer-card h-view'><div class='card-inner'><div class='media'><a class='deeplinking' data-app='"+offerPageUrl+"'><img src='"+smallOfferImageRef+"' loading='lazy'></img></a></div><div class='content'><a target='_blank' data-app='"+offerPageUrl+"' class='card-title deeplinking'>"+OfferDespOne+"</a><div class='card-bottom'><div class='date-readtime'><span class='num-viewer'>"+view+"</span></div><div class='bookmark-share'><div class='handpickedfav bookmark' offer-id='" +OfferId+ "'></div><div class='share' data-text='check out this link'></div><div class='share-content'><div class='inner-content'><div class='share-header'><p>Share</p> <span class='close-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/close-orange.svg' alt='fb'/></span> </div><ul class='share-link'><li><a href='https://api.whatsapp.com/send?url=" + window.location.origin + offerPageUrl + "&text=" + OfferDespOne + "' target='_blank' tabindex='0'><span class='n-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/whatsapp.svg' alt='whatsapp'></span> <span class='h-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp-o.svg' alt='whatsapp'> </span></a></li><li><a href='https://www.facebook.com/sharer/sharer.php?u=" + window.location.origin + offerPageUrl + "&text=" + OfferDespOne + "' target='_blank' tabindex='0'> <span class='n-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-black.svg' alt='fb'></span><span class='h-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-orange.svg'alt='fb'></span></a></li><li><a href='https://twitter.com/intent/tweet?url=" + window.location.origin + offerPageUrl + "&text=" + encodeURI(OfferDespOne) + "' target='_blank' tabindex='0'><span class='n-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-black.svg' alt='tw'></span><span class='h-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-orange.svg' alt='tw'></span></a></li><li><a href='https://www.linkedin.com/shareArticle?mini=true?url=" + window.location.origin + offerPageUrl + "&text=" + OfferDespOne + "' target='_blank' tabindex='0'><span class='n-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-black.svg' alt='ln'></span><span class='h-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-orange.svg' alt='ln'></span></a></li></ul><div class='youtube-text' style='display:none;'><input type='text' name='link' value='"+ window.location.origin + offerPageUrl+"' /><span>Copy</span></div></div> </div> </div></div></div></div></div>";
									
									
									
									countNew++;
									
									break;
								}
							}
						}
						
						// $("[data-tabtitle]").each(function(){
						// 	if($(this).attr('data-tabtitle') && $(this).attr('data-tabtitle').replace(/ /g, "").toLowerCase().includes('shop')){
						// 		$(this).removeClass('num');
						// 	}
						// });
						// if(countNew > 0) {
						// 	$("[data-tabtitle]").each(function(){
						// 		if($(this).attr('data-tabtitle')&&$(this).attr('data-tabtitle').replace(/ /g, "").toLowerCase().includes('handpicked')){$(this).html(countNew)};
						// 	});
						// } else {
						// 	$("[data-tabtitle]").each(function(){
						// 		if($(this).attr('data-tabtitle')&&$(this).attr('data-tabtitle').replace(/ /g, "").toLowerCase().includes('handpicked')){$(this).removeClass('num')};
						// 	});
						// }
						$("[data-tabtitle]").each(function(){
							if($(this).attr('data-tabtitle')&&$(this).attr('data-tabtitle').replace(/ /g, "").toLowerCase().includes('handpicked')){$(this).html(countNew)};
						});
						sliderdiv = sliderdiv + "</div>";
						cardsliderdiv = cardsliderdiv + "</div>";
						
						if($("#mccmtrendingoffers")){
							$("#mccmtrendingoffers").append(sliderdiv);
							$('#mccmtrendingoffers .offer-card .card-inner .content a').click(function () {
								let nameArr = $('#mccmtrendingoffers .offer-card .card-inner .media a').attr("data-app").split('/');
								let eventLabel = nameArr[nameArr.length -1];
								let activeTab = $('.nav.nav-tabs.offer-nav-tabs li.active a').attr("data-tabtitles").toLowerCase().replace(/ /g,"_");
								dataLayer.push({
								  'event' : 'custom_event',
								  'eventCategory' : 'offer_zone',
								  'eventAction' : 'offer_selected',
								  'eventLabel' :  (activeTab + '_' + (eventLabel.replace(/ /g,"_"))).toLowerCase()
								  });
							  });
					  
							deepLinking();
						}	
						
						
						var DealsandOffersCookieVal = $.cookie("mccmdealsOfferSetCount");
				
						if(DealsandOffersCookieVal == 1){
							
							$("#deal" + DealsandOffersCookieVal).css("display","block");
						}else if(DealsandOffersCookieVal == 2){
						
							$("#deal" + DealsandOffersCookieVal).css("display","block");
						}else if(DealsandOffersCookieVal == 3){
						
							$("#deal" + DealsandOffersCookieVal).css("display","block");
						}else{
							
						}
					
						
						$('#mccmtrendingoffers .offer-slider').slick({        
						  dots: true,
						  infinite: true,
						  autoplay: true,
						  speed: 500,
						  slidesToShow: 3,
						  slidesToScroll: 1,
						  responsive: [{
								  breakpoint: 991,
								  settings: {
									  slidesToShow: 2,
									  arrows: false,
								  }
							  },
							  {
								  breakpoint: 767,
								  settings: {
									  slidesToShow: 1,
									  arrows: false,
									  dots: true,
								  }
							  },
							  {
								  breakpoint: 640,
								  settings: {
									  slidesToShow: 1,
									  arrows: false,
									  dots: true,
									  centerMode: true,
									  centerPadding: '45px',
									  infinite: true,
								  }
							  }
						  ]
						});
						$("#mccmtrendingoffers .offer-slider .offer-card").equalHeights();
						//favourite icon click event starts
							var o = localStorage.getItem("HandpickedIdsFav");
							var e = [];
							var m = [];
							if (typeof o != "undefined") {
								if (o != null && o != "") {
									var s = o.split(",");
									for (var k = 0; k < s.length; k++) {
										m.push(s[k]);
										e.push(s[k]);
									}
									for (var k = 0; k < m.length; k++) {
									
										$('.handpickedfav.bookmark[offer-id="' + m[k] + '"]').addClass("active");
										$('.handpickedfav.bookmark[offer-id="' + m[k] + '"]').parent().parent().parent().parent().parent().addClass("favouirite");
										$('.handpickedfav.bookmark[offer-id="' + m[k] + '"]').css({
											background: "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/like-icon.svg) no-repeat 0 0%"
										});
									}
								}
							}
							$(document).on("click", ".handpickedfav.bookmark", function (f) {
								
								var c = $(this).attr("offer-id");
								if (!$(this).hasClass("active")) {
									$(this).addClass("active");
									$(this).css({
										background: "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/like-icon.svg) no-repeat 0 0%"
									});
									e.push(c);
									e = g(e);
									b();
								} else {
									var a = localStorage.HandpickedIdsFav.split(",");
									a = g(a);
									$(this).removeClass("active");
									$(this).css({
										background: "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/bookmark.svg) no-repeat 0 0%"
									});
									a.splice($.inArray(c, a), 1);
									e = g(a);
									b();
								}
							});

							function b() {
								localStorage.setItem("HandpickedIdsFav", e);
							}

							function g(c) {
								var a = [];
								$.each(c, function (f, h) {
									if ($.inArray(h, a) == -1) {
										a.push(h);
									}
								});
								return a;
							}

							function p(a) {
								return a.filter(function (h, f, c) {
									return f == c.indexOf(h);
								});
							}
						//favourite icon click event sends

				});
}

function mccmHandpickedOffersCookieVal(){
	// Cookie Settings
	var presentVal = $("#mccmTrendingLivesiteIdVal").val();
	if(typeof(presentVal) != "undefined"){
		if(presentVal !=null && presentVal !=''){

			var newcookieVal = presentVal.replace(",","and");
			
			//var cookieName = "FedID";
			var cookie_valueArr = [];
			// Check if the cookie exists.
			/* if (jQuery.cookie(cookieName) != null) { */
			if(typeof(FedID) != "undefined"){
				if(FedID !=null && FedID !=''){
					// If the cookie doesn't exist, create a mccmCategoryOffers cookie.
					var mccmCookieName = "mccmCategoryOffers";
					var url_string = window.location.href;
					var url = new URL(url_string);
					var id = url.searchParams.get("id");
					var initCookie = newcookieVal; 
					
					var expirationDays = 1;
					if((initCookie!= null)){
						if (jQuery.cookie(mccmCookieName) == null) {
							// If the cookie doesn't exist, save the cookie with the value of 1
							jQuery.cookie(mccmCookieName, initCookie, { path: '/' }, {expires: expirationDays});
							
						}else{
							
								var cookie_value = jQuery.cookie(mccmCookieName) + "and";
								cookie_value+=initCookie;
								
								cookie_valueArr.push(cookie_value);
								var uniqueLivesiteId = cookie_valueArr.filter(function(itm, i, cookie_valueArr) {
									return i == cookie_valueArr.indexOf(itm);
								});
								jQuery.cookie(mccmCookieName, uniqueLivesiteId, { path: '/' }, {expires: expirationDays});
							/* }	 */
						}
					}
				}
			}
		}
	}else{
	
		//var cookieName = "FedID";
		var cookie_valueArr = [];
		// Check if the cookie exists.
		/* if (jQuery.cookie(cookieName) != null) { */
		if(typeof(FedID) != "undefined"){
			if(FedID !=null && FedID !=''){
				// If the cookie doesn't exist, create a mccmCategoryOffers cookie.
				var mccmCookieName = "mccmCategoryOffers";
				var url_string = window.location.href;
				var url = new URL(url_string);
				var id = url.searchParams.get("id");
				var initCookie = id; 
				
				var expirationDays = 1;
				if((initCookie!= null)){
					if (jQuery.cookie(mccmCookieName) == null) {
						// If the cookie doesn't exist, save the cookie with the value of 1
						jQuery.cookie(mccmCookieName, initCookie, { path: '/' }, {expires: expirationDays});
						
					}else{
						
						// If the cookie exists, take the value
						var cookie_value = jQuery.cookie(mccmCookieName) + "and";
						cookie_value+=initCookie;
						
						cookie_valueArr.push(cookie_value);
						var uniqueLivesiteId = cookie_valueArr.filter(function(itm, i, cookie_valueArr) {
							return i == cookie_valueArr.indexOf(itm);
						});
						jQuery.cookie(mccmCookieName, uniqueLivesiteId, { path: '/' }, {expires: expirationDays});
					}
				}
			}
		}
	}	
	/* } */
}

/** Offer page title margin set for index page : start **/
  if($('body').hasClass('indexPage')){
 	 $("h1.visitedOffer").css("margin","10px 10px -25px 10px");
  }
/** Offer page title margin set for index page : ens **/
mccmHandpickedOffers();
function compareStrings(a, b) {
  // Assuming you want case-insensitive comparison
  a = a.toLowerCase();
  b = b.toLowerCase();

  return (a < b) ? -1 : (a > b) ? 1 : 0;
}
function compareNumbers(a, b) {
  // Assuming you want case-insensitive comparison
  a = a.toLowerCase();
  b = b.toLowerCase();

  return (a > b) ? -1 : (a > b) ? 1 : 0;
}
function defaultPickedOffers(mccmFilterOfferid,sliderdiv,cardsliderdiv){
	//Default offers to be called when mccmCategory values are less than 4.
	
	var  mccmPopularOfferJson =  $("#non-unica-handpicked-json").val();
	var mccmCategoryIdVal = [];
	for(var i = 0; i < mccmFilterOfferid.length; i++){
		mccmCategoryIdVal.push(mccmFilterOfferid[i]);
	}
	
	var mccmlength = mccmCategoryIdVal.length;

	var mccmOfferIds;
	var mccmOfferIdsArr = [];
	$.getJSON(mccmPopularOfferJson, function(result){
		
		var  sortedDefaultUnicaPopularOfferJson = result.offers;
		
		for(var k = 0; k < sortedDefaultUnicaPopularOfferJson.length; k++){
			mccmOfferIds = sortedDefaultUnicaPopularOfferJson[k].offerViews;
			mccmOfferIdsArr.push(mccmOfferIds);
		}
		var count = 0;
		var booleanflag = true;
		for(var i = 0; i<sortedDefaultUnicaPopularOfferJson.length;i++){
			if(count < (3-mccmCategoryIdVal.length)){
				
				for(var j = 0;j< mccmCategoryIdVal.length; j++){
					
					if(sortedDefaultUnicaPopularOfferJson[i].livesiteId != mccmCategoryIdVal[j]){
					
						count = count + 1;
						booleanflag = false;
					}else{
						booleanflag = true;
					}
				}
				if(booleanflag == false){
					
					if((sortedDefaultUnicaPopularOfferJson[i]['offerDesp1'] !="") && (sortedDefaultUnicaPopularOfferJson[i]['offerDesp1'] !="undefined") ){
						var offerDescription ="<strong>"+sortedDefaultUnicaPopularOfferJson[i]['offerDesp1']+"</strong> "+sortedDefaultUnicaPopularOfferJson[i]['offerDesp2'];
						var dealsOfferdescription =sortedDefaultUnicaPopularOfferJson[i]['offerDesp1'];
					}else{
						var offerDescription = sortedDefaultUnicaPopularOfferJson[i]['offerDesp2']+" <strong>"+sortedDefaultUnicaPopularOfferJson[i]['offerDesp3']+"</strong> "+sortedDefaultUnicaPopularOfferJson[i]['offerDesp4'];
						var dealsOfferdescription =sortedDefaultUnicaPopularOfferJson[i]['offerDesp1'];
					}
					sliderdiv += "<div class='offer-card h-view'><div class='card-inner'><div class='media'><a href='"+sortedDefaultUnicaPopularOfferJson[i]['brandLink']+"'><img src='"+sortedDefaultUnicaPopularOfferJson[i]['smallOfferImageRef']+"'></img></a></div><div class='content'><a href='"+sortedDefaultUnicaPopularOfferJson[i]['brandLink']+"' class='card-title'>"+sortedDefaultUnicaPopularOfferJson[i]['offerDesp1']+"</a><div class='card-bottom'><div class='date-readtime'><span class='num-viewer'>"+sortedDefaultUnicaPopularOfferJson[i]['offerViews']+"</span></div><div class='bookmark-share'><div class='handpickedfav bookmark' offer-id='" +sortedDefaultUnicaPopularOfferJson[i]['offerId']+ "'></div><div class='share'></div><div class='share-content'><div class='inner-content'><div class='share-header'><p>Share</p> <span class='close-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/close-orange.svg' alt='fb'/></span> </div><ul class='share-link'><li><a href='https://api.whatsapp.com/send?url=" + window.location.origin + sortedDefaultUnicaPopularOfferJson[i]['brandLink'] + "&text=" + sortedDefaultUnicaPopularOfferJson[i]['offerDesp1'] + "' target='_blank' tabindex='0'><span class='n-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/whatsapp.svg' alt='whatsapp'></span> <span class='h-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp-o.svg' alt='whatsapp'> </span></a></li><li><a href='https://www.facebook.com/sharer/sharer.php?u=" + window.location.origin + sortedDefaultUnicaPopularOfferJson[i]['brandLink'] + "&text=" + sortedDefaultUnicaPopularOfferJson[i]['offerDesp1'] + "' target='_blank' tabindex='0'> <span class='n-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-black.svg' alt='fb'></span><span class='h-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-orange.svg'alt='fb'></span></a></li><li><a href='https://twitter.com/intent/tweet?url=" + window.location.origin + sortedDefaultUnicaPopularOfferJson[i]['brandLink'] + "&text=" + encodeURI(sortedDefaultUnicaPopularOfferJson[i]['offerDesp1']) + "' target='_blank' tabindex='0'><span class='n-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-black.svg' alt='tw'></span><span class='h-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-orange.svg' alt='tw'></span></a></li><li><a href='https://www.linkedin.com/shareArticle?mini=true?url=" + window.location.origin + sortedDefaultUnicaPopularOfferJson[i]['brandLink'] + "&text=" + sortedDefaultUnicaPopularOfferJson[i]['offerDesp1'] + "' target='_blank' tabindex='0'><span class='n-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-black.svg' alt='ln'></span><span class='h-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-orange.svg' alt='ln'></span></a></li></ul><div class='youtube-text' style='display:none;'><input type='text' name='link' value='"+ window.location.origin + sortedDefaultUnicaPopularOfferJson[i]['brandLink']+"' /><span>Copy</span></div></div> </div> </div></div></div></div></div>";
					if($("div").hasClass("deals-and-more-offers")){
						
						cardsliderdiv += "<div class='offer'><a href='"+sortedDefaultUnicaPopularOfferJson[i]['brandLink']+"'><img src='"+sortedDefaultUnicaPopularOfferJson[i]['smallOfferImageRef']+"'><p>"+sortedDefaultUnicaPopularOfferJson[i]['offerDesp1']+"</p></a></div>";
					}else{
						
					}
				}else{
					
				}
			}
		}
		sliderdiv = sliderdiv + "</div>";
		cardsliderdiv = cardsliderdiv + "</div>";
		
		$("#mccmtrendingoffers").append(sliderdiv);
		
		
		var DealsandOffersCookieVal = $.cookie("mccmdealsOfferSetCount");
		
		if(DealsandOffersCookieVal == 1){
			
			$("#deal" + DealsandOffersCookieVal).css("display","block");
		}else if(DealsandOffersCookieVal == 2){
			
			$("#deal" + DealsandOffersCookieVal).css("display","block");
		}else if(DealsandOffersCookieVal == 3){
			
			$("#deal" + DealsandOffersCookieVal).css("display","block");
		}else{
			
		}
		/* offer-slider */
		
		$('#mccmtrendingoffers .offer-slider').slick({        
		  dots: true,
		  infinite: true,
		  autoplay: true,
		  speed: 500,
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  responsive: [{
				  breakpoint: 991,
				  settings: {
					  slidesToShow: 2,
					  arrows: false,
				  }
			  },
			  {
				  breakpoint: 767,
				  settings: {
					  slidesToShow: 1,
					  arrows: false,
					  dots: true,
				  }
			  },
			  {
				  breakpoint: 640,
				  settings: {
					  slidesToShow: 1,
					  arrows: false,
					  dots: true,
					  centerMode: true,
					  centerPadding: '45px',
					  infinite: true,
				  }
			  }
		  ]
		});
		$("#mccmtrendingoffers .offer-slider .offer-card").equalHeights();
		//favourite icon click event starts
			var o = localStorage.getItem("HandpickedIdsFav");
			var e = [];
			var m = [];
			if (typeof o != "undefined") {
				if (o != null && o != "") {
					var s = o.split(",");
					for (var k = 0; k < s.length; k++) {
						m.push(s[k]);
						e.push(s[k]);
					}
					for (var k = 0; k < m.length; k++) {
						
						$('.handpickedfav.bookmark[offer-id="' + m[k] + '"]').addClass("active");
						$('.handpickedfav.bookmark[offer-id="' + m[k] + '"]').parent().parent().parent().parent().parent().addClass("favouirite");
						$('.handpickedfav.bookmark[offer-id="' + m[k] + '"]').css({
							background: "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/like-icon.svg) no-repeat 0 0%"
						});
					}
				}
			}
			$(document).on("click", ".handpickedfav.bookmark", function (f) {
				
				var c = $(this).attr("offer-id");
				if (!$(this).hasClass("active")) {
					$(this).addClass("active");
					$(this).css({
						background: "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/like-icon.svg) no-repeat 0 0%"
					});
					e.push(c);
					e = g(e);
					b();
				} else {
					var a = localStorage.HandpickedIdsFav.split(",");
					a = g(a);
					$(this).removeClass("active");
					$(this).css({
						background: "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/bookmark.svg) no-repeat 0 0%"
					});
					a.splice($.inArray(c, a), 1);
					e = g(a);
					b();
				}
			});

			function b() {
				localStorage.setItem("HandpickedIdsFav", e);
			}

			function g(c) {
				var a = [];
				$.each(c, function (f, h) {
					if ($.inArray(h, a) == -1) {
						a.push(h);
					}
				});
				return a;
			}

			function p(a) {
				return a.filter(function (h, f, c) {
					return f == c.indexOf(h);
				});
			}
		//favourite icon click event sends

	});
}
function mccmHandpickedOffers(){
	if (jQuery.cookie("mccmCategoryOffers") != null) {
		
		$(".deals-and-more-offers").empty();
	
		var mccmCookieVal = $.cookie("mccmCategoryOffers");
		
		var mccCokiesplitVal = mccmCookieVal.split("and");
		
		var mccCookieValArr = [];
		for(var i=0;i<mccCokiesplitVal.length;i++){
			mccCookieValArr.push(mccCokiesplitVal[i]);
		}
	
		var  mccmCategoryValCount = $("#mccmTrendingCategoryValCount").val();
		if(mccmCategoryValCount > 0){
			$(".offerContent").empty();
			var  unicaPopularOfferJson = '/content/icicibank.apigee.json';
			var mccmCategoryVal = [];
			for(var i = 1; i <= mccmCategoryValCount; i++){
				mccmCategoryVal.push($("#mccmTrendingCategory" + i).val());
			}
			$("#mccmTrendingCategoryVal").val(mccmCategoryVal);
			var  mccmCategoryIds = $("#mccmTrendingCategoryVal").val();
			
			$(".offerContent").css("display","block");
			$(".locate-near-by").css("display","none");
			var mccmOfferCount = $("#mccmTrendingCategoryValCount").val();
			
			var categoryIds;
			var livesiteIds;
			var mccmIds;
			var unicaCategoryIds = mccmCategoryIds.split(',');
		
			var categoryIdArr = [];
			var livesiteIdArr = [];
			var mccmIdArr = [];
			var mccmArray = [];
			var filteredMccmArray = [];
			var mccmfilterCategoryListArray = [];
			var filterdata = [];
			if(mccmOfferCount > 0){
				$.getJSON(unicaPopularOfferJson, function(result){
				
					filterdata = result.UnicaPopularOffers;
					for(var l = 0; l<mccCookieValArr.length;l++){
						
						filtereddata = $.grep(filterdata, function( n, i ) {
						  return n.Livesite != mccCookieValArr[l];
						});
						
						filterdata = filtereddata;
					}
					var  sortedUnicaPopularOfferJson = filtereddata.sort(function(a, b) {
					  return compareStrings(a.MCCMCategory, b.MCCMCategory);
					});
					
					
					for(var k = 0; k < sortedUnicaPopularOfferJson.length; k++){
						mccmIds = sortedUnicaPopularOfferJson[k].MCCMCategory;
						mccmIdArr.push(mccmIds);
					}
					
				
					$.each(sortedUnicaPopularOfferJson, function (index, value) {
						if ($.inArray(value.MCCMCategory, mccmArray) == -1) {
							mccmArray.push(value.MCCMCategory);
							filteredMccmArray.push(value);
						}
					});
					filteredMccmArray = JSON.stringify(filteredMccmArray);
					
					filteredMccmObj = JSON.parse(filteredMccmArray);

					var mccmfiltercount = 0;
					var mccmfilterOfferid = [];
					var slider_div = "<div class='offer-slider'>";
					var card_slider_div = "<div class='offer-slider'>";
					for(var n =0; n < unicaCategoryIds.length; n++){
						
						for(var p = 0; p < filteredMccmObj.length; p++){
							categoryIds = sortedUnicaPopularOfferJson[p].Category.split(':');
							livesiteIds = sortedUnicaPopularOfferJson[p].Livesite.split(':');
							
							if(unicaCategoryIds[n] === filteredMccmObj[p]['MCCMCategory']){
							
								mccmfiltercount = mccmfiltercount + 1;
								mccmfilterCategoryListArray.push(unicaCategoryIds[n]);
								mccmfilterOfferid.push(filteredMccmObj[p]['Livesite']);
								for(var b = 0; b < livesiteIds.length; b++){
									var count = 0;
									for(var a = 0; a < categoryIds.length; a++){
										count = count + 1;
										
										categoryIdArr.push(categoryIds[a]);
									
										livesiteIdArr.push(livesiteIds[b]);
										
										if(count > 1){
											
										}else{
											var mccmcount = 0;
											
											if((filteredMccmObj[p]['offerDesp1'] !="") && (filteredMccmObj[p]['offerDesp1'] !="undefined") ){
												var offerDescription ="<strong>"+filteredMccmObj[p]['offerDesp1']+"</strong> "+filteredMccmObj[p]['offerDesp2'];
												var dealsOfferdescription =filteredMccmObj[p]['offerDesp1'];
											}else{
												var offerDescription = filteredMccmObj['offerDesp2']+" <strong>"+filteredMccmObj[p]['offerDesp3']+"</strong> "+filteredMccmObj[p]['offerDesp4'];
												var dealsOfferdescription =filteredMccmObj[p]['offerDesp1'];
											}
											slider_div += "<div class='offer-card h-view'><div class='card-inner'><div class='media'><a href='"+filteredMccmObj[p]['brandLink']+"'><img src='"+filteredMccmObj[p]['smallOfferImage']+"'></img></a></div><div class='content'><a href='"+filteredMccmObj[p]['brandLink']+"' class='card-title'>"+filteredMccmObj[p]['offerDesp1']+"</a><div class='card-bottom'><div class='date-readtime'><span class='num-viewer'>"+filteredMccmObj[p]['offerViews']+"</span></div><div class='bookmark-share'><div class='handpickedfav bookmark' offer-id='" +filteredMccmObj[p]['offerId']+ "'></div><div class='share'></div><div class='share-content'><div class='inner-content'><div class='share-header'><p>Share</p> <span class='close-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/close-orange.svg' alt='fb'/></span> </div><ul class='share-link'><li><a href='https://api.whatsapp.com/send?url=" + window.location.origin + filteredMccmObj[p]['brandLink'] + "&text=" + filteredMccmObj[p]['offerDesp1'] + "' target='_blank' tabindex='0'><span class='n-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/whatsapp.svg' alt='whatsapp'></span> <span class='h-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp-o.svg' alt='whatsapp'> </span></a></li><li><a href='https://www.facebook.com/sharer/sharer.php?u=" + window.location.origin + filteredMccmObj[p]['brandLink'] + "&text=" + filteredMccmObj[p]['offerDesp1'] + "' target='_blank' tabindex='0'> <span class='n-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-black.svg' alt='fb'></span><span class='h-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-orange.svg'alt='fb'></span></a></li><li><a href='https://twitter.com/intent/tweet?url=" + window.location.origin + filteredMccmObj[p]['brandLink'] + "&text=" + encodeURI(filteredMccmObj[p]['offerDesp1']) + "' target='_blank' tabindex='0'><span class='n-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-black.svg' alt='tw'></span><span class='h-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-orange.svg' alt='tw'></span></a></li><li><a href='https://www.linkedin.com/shareArticle?mini=true?url=" + window.location.origin + filteredMccmObj[p]['brandLink'] + "&text=" + filteredMccmObj[p]['offerDesp1'] + "' target='_blank' tabindex='0'><span class='n-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-black.svg' alt='ln'></span><span class='h-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-orange.svg' alt='ln'></span></a></li></ul><div class='youtube-text' style='display:none;'><input type='text' name='link' value='"+ window.location.origin + filteredMccmObj[p]['brandLink']+"' /><span>Copy</span></div></div> </div> </div></div></div></div></div>";
											if($("div").hasClass("deals-and-more-offers")){
												
												card_slider_div += "<div class='offer'><a href='"+filteredMccmObj[p]['brandLink']+"'><img src='"+filteredMccmObj[p]['smallOfferImage']+"'><p>"+filteredMccmObj[p]['offerDesp1']+"</p></a></div>";
											}else{
												
											}
										}
									}
								}
							}
						}
					}
					var DealsandOffersCookieVal = $.cookie("mccmdealsOfferSetCount");
					
					if(DealsandOffersCookieVal == 1){
					
						$("#deal" + DealsandOffersCookieVal).css("display","block");
					}else if(DealsandOffersCookieVal == 2){
						
						$("#deal" + DealsandOffersCookieVal).css("display","block");
					}else if(DealsandOffersCookieVal == 3){
						
						$("#deal" + DealsandOffersCookieVal).css("display","block");
					}else{
						
					}
					$("#mccmTrendingLivesiteIdVal").val(mccmfilterOfferid);
					mccmHandpickedOffersCookieVal();
					if(mccmfiltercount==0){
					
						handPickedOffers(slider_div, card_slider_div);
					}else if(mccmfiltercount==1){
						
						defaultPickedOffers(mccmfilterOfferid,slider_div,card_slider_div);
					}else if(mccmfiltercount==2){
						
						defaultPickedOffers(mccmfilterOfferid,slider_div,card_slider_div);
					}else if(mccmfiltercount==3){
						
						defaultPickedOffers(mccmfilterOfferid,slider_div,card_slider_div);
					}else{
						
						defaultPickedOffers(mccmfilterOfferid,slider_div,card_slider_div);
					}
				});
			}else{
				console.log("no mccm offers found");
			}
		}else{
				var slider_div = "<div class='offer-slider'>";
				var card_slider_div = "<div class='offer-slider'>";
				handPickedOffers(slider_div, card_slider_div);
			}
	}else{
		
		$(".deals-and-more-offers").empty();
		var  mccmCategoryValCount = $("#mccmTrendingCategoryValCount").val();
		if(mccmCategoryValCount > 0){
			$(".offerContent").empty();
			var  unicaPopularOfferJson = '/content/icicibank.apigee.json';
			var mccmCategoryVal = [];
			for(var i = 1; i <= mccmCategoryValCount; i++){
				mccmCategoryVal.push($("#mccmTrendingCategory" + i).val());
			}
			$("#mccmTrendingCategoryVal").val(mccmCategoryVal);
			var  mccmCategoryIds = $("#mccmTrendingCategoryVal").val();
			
			$(".offerContent").css("display","block");
			$(".locate-near-by").css("display","none");
			var mccmOfferCount = $("#mccmTrendingCategoryValCount").val();
			
			var categoryIds;
			var livesiteIds;
			var mccmIds;
			var unicaCategoryIds = mccmCategoryIds.split(',');
			
			var categoryIdArr = [];
			var livesiteIdArr = [];
			var mccmIdArr = [];
			var mccmArray = [];
			var filteredMccmArray = [];
			var mccmfilterCategoryListArray = [];
			var filterdata = [];
			if(mccmOfferCount > 0){
				$.getJSON(unicaPopularOfferJson, function(result){
					
					
					var  sortedUnicaPopularOfferJson = result.UnicaPopularOffers.sort(function(a, b) {
					  return compareStrings(a.MCCMCategory, b.MCCMCategory);
					});
				
					for(var k = 0; k < sortedUnicaPopularOfferJson.length; k++){
						mccmIds = sortedUnicaPopularOfferJson[k].MCCMCategory;
						mccmIdArr.push(mccmIds);
					}
				
				
					$.each(sortedUnicaPopularOfferJson, function (index, value) {
						if ($.inArray(value.MCCMCategory, mccmArray) == -1) {
							mccmArray.push(value.MCCMCategory);
							filteredMccmArray.push(value);
						}
					});
					filteredMccmArray = JSON.stringify(filteredMccmArray);
				
					filteredMccmObj = JSON.parse(filteredMccmArray);

			
					var mccmfiltercount = 0;
					var mccmfilterOfferid = [];
					var slider_div = "<div class='offer-slider'>";
					var card_slider_div = "<div class='offer-slider'>";
					for(var n =0; n < unicaCategoryIds.length; n++){
					
						for(var p = 0; p < filteredMccmObj.length; p++){
							categoryIds = sortedUnicaPopularOfferJson[p].Category.split(':');
							livesiteIds = sortedUnicaPopularOfferJson[p].Livesite.split(':');
							
							if(unicaCategoryIds[n] === filteredMccmObj[p]['MCCMCategory']){
								
								mccmfiltercount = mccmfiltercount + 1;
								mccmfilterCategoryListArray.push(unicaCategoryIds[n]);
								mccmfilterOfferid.push(filteredMccmObj[p]['Livesite']);
								for(var b = 0; b < livesiteIds.length; b++){
									var count = 0;
									for(var a = 0; a < categoryIds.length; a++){
										count = count + 1;
										
										categoryIdArr.push(categoryIds[a]);
										
										livesiteIdArr.push(livesiteIds[b]);
										
										if(count > 1){
											
										}else{
											var mccmcount = 0;
											
											if((filteredMccmObj[p]['offerDesp1'] !="") && (filteredMccmObj[p]['offerDesp1'] !="undefined") ){
												var offerDescription ="<strong>"+filteredMccmObj[p]['offerDesp1']+"</strong> "+filteredMccmObj[p]['offerDesp2'];
												var dealsOfferdescription =filteredMccmObj[p]['offerDesp1'];
											}else{
												var offerDescription = filteredMccmObj['offerDesp2']+" <strong>"+filteredMccmObj[p]['offerDesp3']+"</strong> "+filteredMccmObj[p]['offerDesp4'];
												var dealsOfferdescription =filteredMccmObj[p]['offerDesp1'];
											}
											slider_div += "<div class='offer-card h-view'><div class='card-inner'><div class='media'><a href='"+filteredMccmObj[p]['brandLink']+"'><img src='"+filteredMccmObj[p]['smallOfferImage']+"'></img></a></div><div class='content'><a href='"+filteredMccmObj[p]['brandLink']+"' class='card-title'>"+filteredMccmObj[p]['offerDesp1']+"</a><div class='card-bottom'><div class='date-readtime'><span class='num-viewer'>"+filteredMccmObj[p]['offerViews']+"</span></div><div class='bookmark-share'><div class='handpickedfav bookmark' offer-id='" +filteredMccmObj[p]['offerId']+ "'></div><div class='share'></div><div class='share-content'><div class='inner-content'><div class='share-header'><p>Share</p> <span class='close-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/close-orange.svg' alt='fb'/></span> </div><ul class='share-link'><li><a href='https://api.whatsapp.com/send?url=" + window.location.origin + filteredMccmObj[p]['brandLink'] + "&text=" + filteredMccmObj[p]['offerDesp1'] + "' target='_blank' tabindex='0'><span class='n-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/whatsapp.svg' alt='whatsapp'></span> <span class='h-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp-o.svg' alt='whatsapp'> </span></a></li><li><a href='https://www.facebook.com/sharer/sharer.php?u=" + window.location.origin + filteredMccmObj[p]['brandLink'] + "&text=" + filteredMccmObj[p]['offerDesp1'] + "' target='_blank' tabindex='0'> <span class='n-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-black.svg' alt='fb'></span><span class='h-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-orange.svg'alt='fb'></span></a></li><li><a href='https://twitter.com/intent/tweet?url=" + window.location.origin + filteredMccmObj[p]['brandLink'] + "&text=" + encodeURI(filteredMccmObj[p]['offerDesp1']) + "' target='_blank' tabindex='0'><span class='n-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-black.svg' alt='tw'></span><span class='h-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-orange.svg' alt='tw'></span></a></li><li><a href='https://www.linkedin.com/shareArticle?mini=true?url=" + window.location.origin + filteredMccmObj[p]['brandLink'] + "&text=" + filteredMccmObj[p]['offerDesp1'] + "' target='_blank' tabindex='0'><span class='n-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-black.svg' alt='ln'></span><span class='h-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-orange.svg' alt='ln'></span></a></li></ul><div class='youtube-text' style='display:none;'><input type='text' name='link' value='"+ window.location.origin + filteredMccmObj[p]['brandLink']+"' /><span>Copy</span></div></div> </div> </div></div></div></div></div>";
											if($("div").hasClass("deals-and-more-offers")){
											
												card_slider_div += "<div class='offer'><a href='"+filteredMccmObj[p]['brandLink']+"'><img src='"+filteredMccmObj[p]['smallOfferImage']+"'><p>"+filteredMccmObj[p]['offerDesp1']+"</p></a></div>";
											}else{
												
											}
										}
									}
								}
							}
						}
					}
					var DealsandOffersCookieVal = $.cookie("mccmdealsOfferSetCount");
					
					if(DealsandOffersCookieVal == 1){
						
						$("#deal" + DealsandOffersCookieVal).css("display","block");
					}else if(DealsandOffersCookieVal == 2){
					
						$("#deal" + DealsandOffersCookieVal).css("display","block");
					}else if(DealsandOffersCookieVal == 3){
					
						$("#deal" + DealsandOffersCookieVal).css("display","block");
					}else{
						
					}
					$("#mccmTrendingLivesiteIdVal").val(mccmfilterOfferid);
					mccmHandpickedOffersCookieVal();
					if(mccmfiltercount==0){
						
						handPickedOffers(slider_div, card_slider_div);
					}else if(mccmfiltercount==1){
						
						defaultPickedOffers(mccmfilterOfferid,slider_div,card_slider_div);
					}else if(mccmfiltercount==2){
						
						defaultPickedOffers(mccmfilterOfferid,slider_div,card_slider_div);
					}else if(mccmfiltercount==3){
						
						defaultPickedOffers(mccmfilterOfferid,slider_div,card_slider_div);
					}else{
					
						defaultPickedOffers(mccmfilterOfferid,slider_div,card_slider_div);
					}
				});
			}else{
				console.log("no mccm offers found");
			}
		}else{
				var slider_div = "<div class='offer-slider'>";
				var card_slider_div = "<div class='offer-slider'>";
				handPickedOffers(slider_div, card_slider_div);
			}
	}
}
	
	$('#mccmtrendingoffers .offer-slider').slick({        
	  dots: true,
	  infinite: true,
	  autoplay: true,
	  speed: 500,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  responsive: [{
			  breakpoint: 991,
			  settings: {
				  slidesToShow: 2,
				  arrows: false,
			  }
		  },
		  {
			  breakpoint: 767,
			  settings: {
				  slidesToShow: 1,
				  arrows: false,
				  dots: true,
			  }
		  },
		  {
			  breakpoint: 640,
			  settings: {
				  slidesToShow: 1,
				  arrows: false,
				  dots: true,
				  centerMode: true,
				  centerPadding: '45px',
				  infinite: true,
			  }
		  }
	  ]
	});
	$("#mccmtrendingoffers .offer-slider .offer-card").equalHeights();
});
$(document).ready(function () {
  //var FedID = "12345";
  $("body").addClass("experiencefr-handpicked");
  // MCCM Deals and more Cookie Settings
  var mccmmaxCookieValue = 3,
    mccminitCookie = 1,
    mccmexpirationDays = 1;
  var mccmcookieName = "mccmdealsOfferSetCount";
  // Check if the cookie exists.
  if (jQuery.cookie(mccmcookieName) == null) {
    // If the cookie doesn't exist, save the cookie with the value of 1
    jQuery.cookie(mccmcookieName, mccminitCookie, {
      expires: mccmexpirationDays,
    });
  } else {
    // If the cookie exists, take the value
    var mccmcookie_value = jQuery.cookie(mccmcookieName);
    // Convert the value to an int to make sure
    mccmcookie_value = parseInt(mccmcookie_value);
    if (
      mccmcookie_value >= mccminitCookie &&
      mccmcookie_value < mccmmaxCookieValue
    ) {
      mccmcookie_value++;
      jQuery.cookie(mccmcookieName, mccmcookie_value, {
        expires: mccmexpirationDays,
      });
    }
    if (mccmcookie_value >= mccmmaxCookieValue) {
      // if cookie is equal with the number you've set, then set the cookie value to 1
      jQuery.cookie(mccmcookieName, mccminitCookie, {
        expires: mccmexpirationDays,
      });
    }
  }

  //Cookie Settings for suppression
  mccmHandpickedOffersCookieVal();

  //Default Offers to be loaded if no offers found or no fedid found

  function handPickedOffers(sliderdiv, cardsliderdiv) {
    var fileUrlOffer = $("#non-unica-handpicked-json").val();
    var result = { offers: [] };
    $.getJSON(fileUrlOffer, function (data) {
      if (data && data.offers) {
        result = data;
      }
      var cookieVal = $("input[id='readonlycategories']").val();
      //var cookieVal = "hnoicbfk,hm1uihm9,hq0fgv0l,jncpoxds";
      var valArrCount = 0;
      if (typeof cookieVal != "undefined") {
        if (cookieVal != null && cookieVal != "") {
          var valArr = cookieVal.split(",");
          valArrCount = valArr.length;
        }
      }

      var offerId = [];
      var defaultOffer = [];
      for (var d = 0; d < result.offers.length; d++) {
        if (result.offers[d].trendingOfferShow == "0") {
          defaultOffer.push(result.offers[d].offerId);
        }
      }

      var loopCount = 0;

      if (valArrCount == 1) {
        loopCount = 3;
      } else if (valArrCount == 2) {
        loopCount = 2;
      } else if (valArrCount == 3) {
        loopCount = 1;
      } else {
      }
      for (var k = 0; k < valArrCount; k++) {
        var count = 0;
        for (var i = 0; i < result.offers.length; i++) {
          var categoryArr = result.offers[i].category.split(":");

          for (var j = 0; j < categoryArr.length; j++) {
            var currOfferId = result.offers[i].offerId;

            if (categoryArr[j] == valArr[k] && !offerId.includes(currOfferId)) {
              offerId.push(result.offers[i].offerId);
              ++count;
            } else {
            }
          }
          if (loopCount == count) {
            break;
          }
        }
      }

      var diffCount = defaultOffer.length - offerId.length;

      for (var o = 0; o < defaultOffer.length; o++) {
        if (!offerId.includes(defaultOffer[o])) {
          offerId.push(defaultOffer[o]);
        }
      }
      var countNew = 0;
      for (var h = 0; h <= offerId.length; h++) {
        for (var p = 0; p < result.offers.length; p++) {
          if (result.offers[p].offerId == offerId[h]) {
            var offerShareLinkPage = $("input#offerShareLinkPage").val();

            var brand = result.offers[p].brand;
            var offerView = result.offers[p].offerViews;
            var view = "";
            var offerPageUrl = result.offers[p].pagePath;

            var smallOfferImage = result.offers[p].smallOfferImage;
            var eventTrackCode = result.offers[p].eventTrackCode;
            var OfferDespOne = result.offers[p].offerDesp1;
            var OfferDespTwo = result.offers[p].offerDesp2;
            var OfferDespThree = result.offers[p].offerDesp3;
            var OfferDespFour = result.offers[p].offerDesp4;

            var OfferId = result.offers[p].offerId;

            var display = "";

            var pageurl = offerShareLinkPage + offerPageUrl;

            if (countNew >= 3) {
              display = "display:none;";
            }

            if (offerView != null && offerView != "") {
              if (offerView.length == 4) {
                view =
                  offerView.substr(0, 1) +
                  "." +
                  offerView.substr(2, 1) +
                  "K Views";
              } else if (offerView.length == 5) {
                view = offerView.substr(1, 2) + "K Views";
              } else if (offerView.length == 6) {
                view = offerView.substr(1, 3) + "K Views";
              } else if (offerView.length == 7) {
                view =
                  offerView.substr(0, 1) +
                  "." +
                  offerView.substr(2, 1) +
                  "M Views";
              } else {
                view = offerView + " Views";
              }
            }
            sliderdiv +=
              "<div class='deal-card' style='height:363px'><div class='deal-inner'><div class='image'><a href='" +
              offerPageUrl +
              "'><img src='" +
              smallOfferImage +
              "' loading='lazy'></img></a></div><div class='offer' style='height:90px'><a href='" +
              offerPageUrl +"'>" +
              OfferDespOne +
              "</a></div><div class='description'>" +
              OfferDespTwo +
              OfferDespThree +
              OfferDespFour +
              "</div><div class='buttons'><a href='" +
              offerPageUrl +
              "' rel='" +
              eventTrackCode +
              "' class='ic-btn'>Know more</a></div></div></div>";

            if ($("div").hasClass("deals-and-more-offers")) {
              cardsliderdiv +=
                "<div class='offer'><a href='" +
                offerPageUrl +
                "' rel='" +
                eventTrackCode +
                "'><img src='" +
                smallOfferImage +
                "' loading='lazy'><p>" +
                OfferDespOne +
                "</p></a></div>";
            } else {
            }

            countNew++;

            break;
          }
        }
      }
      sliderdiv = sliderdiv + "</div>";
      cardsliderdiv = cardsliderdiv + "</div>";

      if ($("#trendingoffers")) {
        $("#trendingoffers").append(sliderdiv);
      }

      var DealsandOffersCookieVal = $.cookie("mccmdealsOfferSetCount");

      if (DealsandOffersCookieVal == 1) {
        $("#deal" + DealsandOffersCookieVal).css("display", "block");
      } else if (DealsandOffersCookieVal == 2) {
        $("#deal" + DealsandOffersCookieVal).css("display", "block");
      } else if (DealsandOffersCookieVal == 3) {
        $("#deal" + DealsandOffersCookieVal).css("display", "block");
      } else {
      }

      /* trending-deals-slider */
      $("#trendingoffers .trending-deals-slider").slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              arrows: false,
              dots: true,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              arrows: false,
              dots: true,
              centerMode: true,
              centerPadding: "15px",
              infinite: true,
            },
          },
        ],
      });
      /*$('#mccmtrendingoffers .trending-deals-slider').slick({        
							  dots: true,
							  infinite: true,
							  autoplay: true,
							  speed: 500,
							  slidesToShow: 3,
							  slidesToScroll: 1,
							  responsive: [{
									  breakpoint: 1025,
									  settings: {
										  slidesToShow: 2,
									  }
								  },
								  {
									  breakpoint: 767,
									  settings: {
										  slidesToShow: 1,
										  arrows: false,
										  dots: true,
									  }
								  },
								  {
									  breakpoint: 640,
									  settings: {
										  slidesToShow: 1,
										  arrows: false,
										  dots: true,
										  centerMode: true,
										  centerPadding: '15px',
										  infinite: true,
									  }
								  }
							  ]
							});*/
    });
  }

  function mccmHandpickedOffersCookieVal() {
    // Cookie Settings
    var presentVal = $("#mccmTrendingLivesiteIdVal").val();
    if (typeof presentVal != "undefined") {
      if (presentVal != null && presentVal != "") {
        var newcookieVal = presentVal.replace(",", "and");

        //var cookieName = "FedID";
        var cookie_valueArr = [];
        // Check if the cookie exists.
        /* if (jQuery.cookie(cookieName) != null) { */
        if (typeof FedID != "undefined") {
          if (FedID != null && FedID != "") {
            // If the cookie doesn't exist, create a mccmCategoryOffers cookie.
            var mccmCookieName = "mccmCategoryOffers";
            var url_string = window.location.href;
            var url = new URL(url_string);
            var id = url.searchParams.get("id");
            var initCookie = newcookieVal;

            var expirationDays = 1;
            if (initCookie != null) {
              if (jQuery.cookie(mccmCookieName) == null) {
                // If the cookie doesn't exist, save the cookie with the value of 1
                jQuery.cookie(
                  mccmCookieName,
                  initCookie,
                  { path: "/" },
                  { expires: expirationDays }
                );
              } else {
                /* if((id!= null)){ */

                // If the cookie exists, take the value
                var cookie_value = jQuery.cookie(mccmCookieName) + "and";
                cookie_value += initCookie;

                cookie_valueArr.push(cookie_value);
                var uniqueLivesiteId = cookie_valueArr.filter(function (
                  itm,
                  i,
                  cookie_valueArr
                ) {
                  return i == cookie_valueArr.indexOf(itm);
                });
                jQuery.cookie(
                  mccmCookieName,
                  uniqueLivesiteId,
                  { path: "/" },
                  { expires: expirationDays }
                );
                /* }	 */
              }
            }
          }
        }
      }
    } else {
      //var cookieName = "FedID";
      var cookie_valueArr = [];
      // Check if the cookie exists.
      /* if (jQuery.cookie(cookieName) != null) { */
      if (typeof FedID != "undefined") {
        if (FedID != null && FedID != "") {
          // If the cookie doesn't exist, create a mccmCategoryOffers cookie.
          var mccmCookieName = "mccmCategoryOffers";
          var url_string = window.location.href;
          var url = new URL(url_string);
          var id = url.searchParams.get("id");
          var initCookie = id;

          var expirationDays = 1;
          if (initCookie != null) {
            if (jQuery.cookie(mccmCookieName) == null) {
              // If the cookie doesn't exist, save the cookie with the value of 1
              jQuery.cookie(
                mccmCookieName,
                initCookie,
                { path: "/" },
                { expires: expirationDays }
              );
            } else {
              // If the cookie exists, take the value
              var cookie_value = jQuery.cookie(mccmCookieName) + "and";
              cookie_value += initCookie;

              cookie_valueArr.push(cookie_value);
              var uniqueLivesiteId = cookie_valueArr.filter(function (
                itm,
                i,
                cookie_valueArr
              ) {
                return i == cookie_valueArr.indexOf(itm);
              });
              jQuery.cookie(
                mccmCookieName,
                uniqueLivesiteId,
                { path: "/" },
                { expires: expirationDays }
              );
            }
          }
        }
      }
    }
    /* } */
  }

  mccmHandpickedOffers();
  function compareStrings(a, b) {
    // Assuming you want case-insensitive comparison
    a = a.toLowerCase();
    b = b.toLowerCase();

    return a < b ? -1 : a > b ? 1 : 0;
  }
  function compareNumbers(a, b) {
    // Assuming you want case-insensitive comparison
    a = a.toLowerCase();
    b = b.toLowerCase();

    return a > b ? -1 : a > b ? 1 : 0;
  }
  function defaultPickedOffers(mccmFilterOfferid, sliderdiv, cardsliderdiv) {
    //Default offers to be called when mccmCategory values are less than 4.

    var mccmPopularOfferJson = $("#non-unica-handpicked-json").val();
    var mccmCategoryIdVal = [];
    for (var i = 0; i < mccmFilterOfferid.length; i++) {
      mccmCategoryIdVal.push(mccmFilterOfferid[i]);
    }

    var mccmlength = mccmCategoryIdVal.length;

    var mccmOfferIds;
    var mccmOfferIdsArr = [];
    $.getJSON(mccmPopularOfferJson, function (result) {
      var sortedDefaultUnicaPopularOfferJson = result.offers;

      for (var k = 0; k < sortedDefaultUnicaPopularOfferJson.length; k++) {
        mccmOfferIds = sortedDefaultUnicaPopularOfferJson[k].offerViews;
        mccmOfferIdsArr.push(mccmOfferIds);
      }
      for (var i = 0; i < sortedDefaultUnicaPopularOfferJson.length; i++) {
        for (var j = 0; j < mccmCategoryIdVal.length; j++) {
          sortedfiltereddata = $.grep(
            sortedDefaultUnicaPopularOfferJson,
            function (n, i) {
              return n.offerId != mccmCategoryIdVal[j];
            }
          );

          sortedDefaultUnicaPopularOfferJson = sortedfiltereddata;
        }
      }
      var count = 0;
      var booleanflag = true;
      for (var i = 0; i < sortedDefaultUnicaPopularOfferJson.length; i++) {
        if (count < 3 - mccmCategoryIdVal.length) {
          for (var j = 0; j < mccmCategoryIdVal.length; j++) {
            if (
              sortedDefaultUnicaPopularOfferJson[i].liveSiteId !=
              mccmCategoryIdVal[j]
            ) {
              count = count + 1;
              booleanflag = false;
            } else {
              booleanflag = true;
            }
          }

          if (
            sortedDefaultUnicaPopularOfferJson[i]["offerDesp1"] != "" &&
            sortedDefaultUnicaPopularOfferJson[i]["offerDesp1"] != "undefined"
          ) {
            var offerDescription =
              "<strong>" +
              sortedDefaultUnicaPopularOfferJson[i]["offerDesp1"] +
              "</strong> " +
              sortedDefaultUnicaPopularOfferJson[i]["offerDesp2"];
            var dealsOfferdescription =
              sortedDefaultUnicaPopularOfferJson[i]["offerDesp1"];
          } else {
            var offerDescription =
              sortedDefaultUnicaPopularOfferJson[i]["offerDesp2"] +
              " <strong>" +
              sortedDefaultUnicaPopularOfferJson[i]["offerDesp3"] +
              "</strong> " +
              sortedDefaultUnicaPopularOfferJson[i]["offerDesp4"];
            var dealsOfferdescription =
              sortedDefaultUnicaPopularOfferJson[i]["offerDesp1"];
          }
          sliderdiv +=
            "<div class='deal-card' style='height:363px'><div class='deal-inner'><div class='image'><a href='" +
            sortedDefaultUnicaPopularOfferJson[i]["pagePath"] +
            "'><img src='" +
            sortedDefaultUnicaPopularOfferJson[i]["smallOfferImage"] +
            "' loading='lazy'></img></a></div><div class='offer' style='height:90px'><a href='" +
            sortedDefaultUnicaPopularOfferJson[i]["pagePath"] +
            "'>" +
            sortedDefaultUnicaPopularOfferJson[i]["offerDesp1"] +
            "</a></div><div class='description'>" +
            sortedDefaultUnicaPopularOfferJson[i]["offerDesp2"] +
            sortedDefaultUnicaPopularOfferJson[i]["offerDesp3"] +
            sortedDefaultUnicaPopularOfferJson[i]["offerDesp4"] +
            "</div><div class='buttons'><a href='" +
            sortedDefaultUnicaPopularOfferJson[i]["pagePath"] +
            "' class='ic-btn'>Know more</a></div></div></div>";
          if ($("div").hasClass("deals-and-more-offers")) {
            cardsliderdiv +=
              "<div class='offer'><a href='" +
              sortedDefaultUnicaPopularOfferJson[i]["pagePath"] +
              "'><img src='" +
              sortedDefaultUnicaPopularOfferJson[i]["smallOfferImage"] +
              "' loading='lazy'><p>" +
              sortedDefaultUnicaPopularOfferJson[i]["offerDesp1"] +
              "</p></a></div>";
          } else {
          }
        }
      }
      sliderdiv = sliderdiv + "</div>";
      cardsliderdiv = cardsliderdiv + "</div>";

      //$("#mccmtrendingoffers").append(sliderdiv);
      //$(".deals-and-more-offers").append(cardsliderdiv);
      $("#trendingoffers").append(sliderdiv);

      var DealsandOffersCookieVal = $.cookie("mccmdealsOfferSetCount");

      if (DealsandOffersCookieVal == 1) {
        $("#deal" + DealsandOffersCookieVal).css("display", "block");
      } else if (DealsandOffersCookieVal == 2) {
        $("#deal" + DealsandOffersCookieVal).css("display", "block");
      } else if (DealsandOffersCookieVal == 3) {
        $("#deal" + DealsandOffersCookieVal).css("display", "block");
      } else {
      }

      /* trending-deals-slider */
      $("#trendingoffers .trending-deals-slider").slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              arrows: false,
              dots: true,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              arrows: false,
              dots: true,
              centerMode: true,
              centerPadding: "15px",
              infinite: true,
            },
          },
        ],
      });
    });
  }
  function mccmHandpickedOffers() {
    if (jQuery.cookie("mccmCategoryOffers") != null) {
      $(".deals-and-more-offers").empty();

      var mccmCookieVal = $.cookie("mccmCategoryOffers");

      var mccCokiesplitVal = mccmCookieVal.split("and");

      var mccCookieValArr = [];
      for (var i = 0; i < mccCokiesplitVal.length; i++) {
        mccCookieValArr.push(mccCokiesplitVal[i]);
      }

      var mccmCategoryValCount = $("#mccmTrendingCategoryValCount").val();
      if (mccmCategoryValCount > 0) {
        $(".offerContent").empty();
        var unicaPopularOfferJson = $("#unica-handpicked-json").val();
        var mccmCategoryVal = [];
        for (var i = 1; i <= mccmCategoryValCount; i++) {
          mccmCategoryVal.push($("#mccmTrendingCategory" + i).val());
        }
        $("#mccmTrendingCategoryVal").val(mccmCategoryVal);
        var mccmCategoryIds = $("#mccmTrendingCategoryVal").val();

        $(".offerContent").css("display", "block");
        $(".locate-near-by").css("display", "none");
        var mccmOfferCount = $("#mccmTrendingCategoryValCount").val();

        var categoryIds;
        var livesiteIds;
        var mccmIds;
        var unicaCategoryIds = mccmCategoryIds.split(",");

        var categoryIdArr = [];
        var livesiteIdArr = [];
        var mccmIdArr = [];
        var mccmArray = [];
        var filteredMccmArray = [];
        var mccmfilterCategoryListArray = [];
        var filterdata = [];
        if (mccmOfferCount > 0) {
          $.getJSON(unicaPopularOfferJson, function (result) {
            filterdata = result.UnicaPopularOffers;
            for (var l = 0; l < mccCookieValArr.length; l++) {
              filtereddata = $.grep(filterdata, function (n, i) {
                return n.Livesite != mccCookieValArr[l];
              });

              filterdata = filtereddata;
            }
            var sortedUnicaPopularOfferJson = filtereddata.sort(function (
              a,
              b
            ) {
              return compareStrings(a.MCCMCategory, b.MCCMCategory);
            });

            for (var k = 0; k < sortedUnicaPopularOfferJson.length; k++) {
              mccmIds = sortedUnicaPopularOfferJson[k].MCCMCategory;
              mccmIdArr.push(mccmIds);
            }

            $.each(sortedUnicaPopularOfferJson, function (index, value) {
              if ($.inArray(value.MCCMCategory, mccmArray) == -1) {
                mccmArray.push(value.MCCMCategory);
                filteredMccmArray.push(value);
              }
            });
            filteredMccmArray = JSON.stringify(filteredMccmArray);

            filteredMccmObj = JSON.parse(filteredMccmArray);

            var mccmfiltercount = 0;
            var mccmfilterOfferid = [];
            var slider_div = "<div class='trending-deals-slider'>";
            var card_slider_div = "<div class='offer-slider'>";
            for (var n = 0; n < unicaCategoryIds.length; n++) {
              for (var p = 0; p < filteredMccmObj.length; p++) {
                categoryIds =
                  sortedUnicaPopularOfferJson[p].Category.split(":");
                livesiteIds =
                  sortedUnicaPopularOfferJson[p].Livesite.split(":");

                if (
                  unicaCategoryIds[n] === filteredMccmObj[p]["MCCMCategory"]
                ) {
                  mccmfiltercount = mccmfiltercount + 1;
                  mccmfilterCategoryListArray.push(unicaCategoryIds[n]);
                  mccmfilterOfferid.push(filteredMccmObj[p]["offerId"]);
                  for (var b = 0; b < livesiteIds.length; b++) {
                    var count = 0;
                    for (var a = 0; a < categoryIds.length; a++) {
                      count = count + 1;

                      categoryIdArr.push(categoryIds[a]);

                      livesiteIdArr.push(livesiteIds[b]);

                      if (count > 1) {
                      } else {
                        var mccmcount = 0;

                        if (
                          filteredMccmObj[p]["offerDesp1"] != "" &&
                          filteredMccmObj[p]["offerDesp1"] != "undefined"
                        ) {
                          var offerDescription =
                            "<strong>" +
                            filteredMccmObj[p]["offerDesp1"] +
                            "</strong> " +
                            filteredMccmObj[p]["offerDesp2"];
                          var dealsOfferdescription =
                            filteredMccmObj[p]["offerDesp1"];
                        } else {
                          var offerDescription =
                            filteredMccmObj["offerDesp2"] +
                            " <strong>" +
                            filteredMccmObj[p]["offerDesp3"] +
                            "</strong> " +
                            filteredMccmObj[p]["offerDesp4"];
                          var dealsOfferdescription =
                            filteredMccmObj[p]["offerDesp1"];
                        }
                        slider_div +=
                          "<div class='deal-card' style='height:363px'><div class='deal-inner'><div class='image'><a href='" +
                          filteredMccmObj[p]["pagePath"] +
                          "' ><img src='" +
                          filteredMccmObj[p]["smallOfferImage"] +
                          "' loading='lazy'></img></a></div><div class='offer' style='height:90px'><a href='" +
                          filteredMccmObj[p]["pagePath"] +
                          "' >" +
                          filteredMccmObj[p]["offerDesp1"] +
                          "</a></div><div class='description'>" +
                          filteredMccmObj[p]["offerDesp2"] +
                          filteredMccmObj[p]["offerDesp3"] +
                          filteredMccmObj[p]["offerDesp4"] +
                          "</div><div class='buttons'><a href='" +
                          filteredMccmObj[p]["pagePath"] +
                          "' class='ic-btn'>Know more</a></div></div></div>";
                        if ($("div").hasClass("deals-and-more-offers")) {
                          card_slider_div +=
                            "<div class='offer'><a href='" +
                            filteredMccmObj[p]["pagePath"] +
                            "'><img src='" +
                            filteredMccmObj[p]["smallOfferImage"] +
                            "' loading='lazy'><p>" +
                            filteredMccmObj[p]["offerDesp1"] +
                            "</p></a></div>";
                        } else {
                        }
                      }
                    }
                  }
                }
              }
            }
            var DealsandOffersCookieVal = $.cookie("mccmdealsOfferSetCount");

            if (DealsandOffersCookieVal == 1) {
              $("#deal" + DealsandOffersCookieVal).css("display", "block");
            } else if (DealsandOffersCookieVal == 2) {
              $("#deal" + DealsandOffersCookieVal).css("display", "block");
            } else if (DealsandOffersCookieVal == 3) {
              $("#deal" + DealsandOffersCookieVal).css("display", "block");
            } else {
            }
            $("#mccmTrendingLivesiteIdVal").val(mccmfilterOfferid);
            mccmHandpickedOffersCookieVal();
            if (mccmfiltercount == 0) {
              defaultPickedOffers(
                mccmfilterOfferid,
                slider_div,
                card_slider_div
              );
            } else if (mccmfiltercount == 1) {
              defaultPickedOffers(
                mccmfilterOfferid,
                slider_div,
                card_slider_div
              );
            } else if (mccmfiltercount == 2) {
              defaultPickedOffers(
                mccmfilterOfferid,
                slider_div,
                card_slider_div
              );
            } else if (mccmfiltercount == 3) {
              defaultPickedOffers(
                mccmfilterOfferid,
                slider_div,
                card_slider_div
              );
            } else {
              defaultPickedOffers(
                mccmfilterOfferid,
                slider_div,
                card_slider_div
              );
            }
          });
        } else {
        }
      } else {
        var slider_div = "<div class='trending-deals-slider'>";
        var card_slider_div = "<div class='offer-slider'>";
        handPickedOffers(slider_div, card_slider_div);
      }
    } else {
      $(".deals-and-more-offers").empty();
      var mccmCategoryValCount = $("#mccmTrendingCategoryValCount").val();
      if (mccmCategoryValCount > 0) {
        $(".offerContent").empty();
        var unicaPopularOfferJson = $("#unica-handpicked-json").val();
        var mccmCategoryVal = [];
        for (var i = 1; i <= mccmCategoryValCount; i++) {
          mccmCategoryVal.push($("#mccmTrendingCategory" + i).val());
        }
        $("#mccmTrendingCategoryVal").val(mccmCategoryVal);
        var mccmCategoryIds = $("#mccmTrendingCategoryVal").val();

        $(".offerContent").css("display", "block");
        $(".locate-near-by").css("display", "none");
        var mccmOfferCount = $("#mccmTrendingCategoryValCount").val();

        var categoryIds;
        var livesiteIds;
        var mccmIds;
        var unicaCategoryIds = mccmCategoryIds.split(",");

        var categoryIdArr = [];
        var livesiteIdArr = [];
        var mccmIdArr = [];
        var mccmArray = [];
        var filteredMccmArray = [];
        var mccmfilterCategoryListArray = [];
        var filterdata = [];
        if (mccmOfferCount > 0) {
          $.getJSON(unicaPopularOfferJson, function (result) {
            var sortedUnicaPopularOfferJson = result.UnicaPopularOffers.sort(
              function (a, b) {
                return compareStrings(a.MCCMCategory, b.MCCMCategory);
              }
            );

            for (var k = 0; k < sortedUnicaPopularOfferJson.length; k++) {
              mccmIds = sortedUnicaPopularOfferJson[k].MCCMCategory;
              mccmIdArr.push(mccmIds);
            }

            $.each(sortedUnicaPopularOfferJson, function (index, value) {
              if ($.inArray(value.MCCMCategory, mccmArray) == -1) {
                mccmArray.push(value.MCCMCategory);
                filteredMccmArray.push(value);
              }
            });
            filteredMccmArray = JSON.stringify(filteredMccmArray);

            filteredMccmObj = JSON.parse(filteredMccmArray);

            var mccmfiltercount = 0;
            var mccmfilterOfferid = [];
            var slider_div = "<div class='trending-deals-slider'>";
            var card_slider_div = "<div class='offer-slider'>";
            for (var n = 0; n < unicaCategoryIds.length; n++) {
              for (var p = 0; p < filteredMccmObj.length; p++) {
                categoryIds =
                  sortedUnicaPopularOfferJson[p].Category.split(":");
                livesiteIds =
                  sortedUnicaPopularOfferJson[p].Livesite.split(":");

                if (
                  unicaCategoryIds[n] === filteredMccmObj[p]["MCCMCategory"]
                ) {
                  mccmfiltercount = mccmfiltercount + 1;
                  mccmfilterCategoryListArray.push(unicaCategoryIds[n]);
                  mccmfilterOfferid.push(filteredMccmObj[p]["offerId"]);
                  for (var b = 0; b < livesiteIds.length; b++) {
                    var count = 0;
                    for (var a = 0; a < categoryIds.length; a++) {
                      count = count + 1;

                      categoryIdArr.push(categoryIds[a]);

                      livesiteIdArr.push(livesiteIds[b]);

                      if (count > 1) {
                      } else {
                        var mccmcount = 0;

                        if (
                          filteredMccmObj[p]["offerDesp1"] != "" &&
                          filteredMccmObj[p]["offerDesp1"] != "undefined"
                        ) {
                          var offerDescription =
                            "<strong>" +
                            filteredMccmObj[p]["offerDesp1"] +
                            "</strong> " +
                            filteredMccmObj[p]["offerDesp2"];
                          var dealsOfferdescription =
                            filteredMccmObj[p]["offerDesp1"];
                        } else {
                          var offerDescription =
                            filteredMccmObj["offerDesp2"] +
                            " <strong>" +
                            filteredMccmObj[p]["offerDesp3"] +
                            "</strong> " +
                            filteredMccmObj[p]["offerDesp4"];
                          var dealsOfferdescription =
                            filteredMccmObj[p]["offerDesp1"];
                        }
                        slider_div +=
                          "<div class='deal-card' style='height:363px'><div class='deal-inner'><div class='image'><a href='" +
                          filteredMccmObj[p]["pagePath"] +
                          "'><img src='" +
                          filteredMccmObj[p]["smallOfferImage"] +
                          "' loading='lazy'></img></a></div><div class='offer' style='height:90px'><a href='" +
                          filteredMccmObj[p]["pagePath"] +
                          "'>" +
                          filteredMccmObj[p]["offerDesp1"] +
                          "</a></div><div class='description'>" +
                          filteredMccmObj[p]["offerDesp2"] +
                          filteredMccmObj[p]["offerDesp3"] +
                          filteredMccmObj[p]["offerDesp4"] +
                          "</div><div class='buttons'><a href='" +
                          filteredMccmObj[p]["pagePath"] +
                          "' class='ic-btn'>Know more</a></div></div></div>";
                        if ($("div").hasClass("deals-and-more-offers")) {
                          card_slider_div +=
                            "<div class='offer'><a href='" +
                            filteredMccmObj[p]["pagePath"] +
                            "'><img src='" +
                            filteredMccmObj[p]["smallOfferImage"] +
                            "' loading='lazy'><p>" +
                            filteredMccmObj[p]["offerDesp1"] +
                            "</p></a></div>";
                        } else {
                        }
                      }
                    }
                  }
                }
              }
            }
            var DealsandOffersCookieVal = $.cookie("mccmdealsOfferSetCount");

            if (DealsandOffersCookieVal == 1) {
              $("#deal" + DealsandOffersCookieVal).css("display", "block");
            } else if (DealsandOffersCookieVal == 2) {
              $("#deal" + DealsandOffersCookieVal).css("display", "block");
            } else if (DealsandOffersCookieVal == 3) {
              $("#deal" + DealsandOffersCookieVal).css("display", "block");
            } else {
            }
            $("#mccmTrendingLivesiteIdVal").val(mccmfilterOfferid);
            mccmHandpickedOffersCookieVal();
            if (mccmfiltercount == 0) {
              defaultPickedOffers(
                mccmfilterOfferid,
                slider_div,
                card_slider_div
              );
            } else if (mccmfiltercount == 1) {
              defaultPickedOffers(
                mccmfilterOfferid,
                slider_div,
                card_slider_div
              );
            } else if (mccmfiltercount == 2) {
              defaultPickedOffers(
                mccmfilterOfferid,
                slider_div,
                card_slider_div
              );
            } else if (mccmfiltercount == 3) {
              defaultPickedOffers(
                mccmfilterOfferid,
                slider_div,
                card_slider_div
              );
            } else {
              defaultPickedOffers(
                mccmfilterOfferid,
                slider_div,
                card_slider_div
              );
            }
          });
        } else {
        }
      } else {
        var slider_div = "<div class='trending-deals-slider'>";
        var card_slider_div = "<div class='offer-slider'>";
        handPickedOffers(slider_div, card_slider_div);
      }
    }
  }

  /* trending-deals-slider */
  $("#trendingoffers .trending-deals-slider").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
          centerMode: true,
          centerPadding: "15px",
          infinite: true,
        },
      },
    ],
  });
});

$(document).ready(function () {
	var categoryId, divId, cityname;
    var localLat, localLong, sorteds;
    var resultJSON = [];
    var date = new Date();
    var currentDate = date.getFullYear()+"-"+( '0' + (date.getMonth()+1) ).slice( -2 )+"-"+date.getDate();
    function process(date) {
        var parts = date.split("-");
        return new Date(parts[0], parts[1] - 1, parts[2]);
      }
      
    var domainName = window.location.origin;
    var nearbyOffers = domainName + '/content/icicibank.nearbyoffers.json';
    var citiesJson={"mapDetails":[]};
    if($("#offerlisting-offerblock").length){
        $.ajax({
            type: "GET",
            url: nearbyOffers,
            datatype: "json",
            async: !1,
            success: function (data) {
                if(data&&JSON.parse(data)["mapDetails"]){citiesJson = JSON.parse(data);}
                if(citiesJson&&citiesJson.mapDetails){
                    var uniqueCategory=[];
                    var len=citiesJson.mapDetails.length;
                    for(let i=0;i<len;i++){
                        var el=citiesJson.mapDetails[i];
                        if(el.Category&&uniqueCategory.indexOf(el.Category.toLowerCase())==-1){
                            uniqueCategory.push(el.Category.toLowerCase());
                            $('.offer-dropdown .categorySelect').append('<option>'+el.Category+'</option>');
                        }
                        
                    }
                }
            }
        });
        initBlocks();
    }
	var defaultCategory = "All Category";
	var defaultCity = "Mumbai";
	getCityData(citiesJson, defaultCategory, defaultCity);
	//Onload Category type
	categoryId = $(".offer-dropdown .categorySelect").children(":selected").text();
   
	$('.offer-dropdown .categorySelect').selectmenu({
		change: function (event, ui) {
			//alert("Category Changed");
			$("#offerlisting-offerblock").empty();
			categoryId = ($(".offer-dropdown .categorySelect").children(":selected").text()).trim();
			var citySelectedDropdown = $('.offer-dropdown .citySelect option:selected').val();
			$("#offerblock_location").empty();
			$("#offerblock_location").attr("style", "display:none;");
            $("[data-tabtitle]").each(function(){
                if($(this).attr('data-tabtitle')&&$(this).attr('data-tabtitle').replace(/ /g, "").toLowerCase().includes('nearby')){$(this).empty()};
            });
			getCityData(citiesJson, categoryId, citySelectedDropdown);
		}
	});
	
	//Onchange City from dropdown
	$('.offer-dropdown .citySelect').selectmenu().on('selectmenuchange',function (event, ui) {
			
        categoryId = $(".offer-dropdown .categorySelect").children(":selected").text();
        var citySelectedDropdown = $('.offer-dropdown .citySelect option:selected').val();
        $("[data-tabtitle]").each(function(){
            if($(this).attr('data-tabtitle')&&$(this).attr('data-tabtitle').replace(/ /g, "").toLowerCase().includes('nearby')){$(this).empty()};
        });
        getCityData(citiesJson, categoryId, citySelectedDropdown);
    });
		
	
	function initBlocks() {
        var selected;
        var citySelected;
        var defaultCity = "Mumbai";
        var citynameval;
        $('.offer-dropdown .citySelect option:selected').val();
        if (typeof google === 'object' && typeof google.maps === 'object') {
        var geocoder = new google.maps.Geocoder();}
        var chkUrl = window.location.href;
        if (chkUrl.indexOf("lat=") >= 0 && chkUrl.indexOf("long=") >= 0) {
            var prefixLat = chkUrl.substring(0, chkUrl.indexOf("lat="));
            suffixLat = chkUrl.substring(chkUrl.indexOf("lat="));
            suffixLat = suffixLat.substring(suffixLat.indexOf("=") + 1);
            suffixLat = parseFloat(suffixLat.substring(0, suffixLat.indexOf("&")));
            var prefixLong = chkUrl.substring(0, chkUrl.indexOf("long="));
            suffixLong = chkUrl.substring(chkUrl.indexOf("long="));
            suffixLong = parseFloat(suffixLong.substring(suffixLong.indexOf("=") + 1));
            pos1 = { lat: suffixLat, lng: suffixLong };
            showPosition(pos1);
        } else {
        }
        function showPosition(position) {
            if (typeof position.lat != "undefined" && typeof position.lng != "undefined") {
                var lat = position.lat;
                var lng = position.lng;
            } else {
                var lat = position.coords.latitude;
                var lng = position.coords.longitude;
            }
            if (typeof google === "object" && typeof google.maps === "object") {
                cityLatLng(lat, lng);
             }
          
        }
        function cityLatLng(lat, lng) {
            var latlng = new google.maps.LatLng(lat, lng);
            geocoder.geocode({ latLng: latlng }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[1]) {
                        for (var i = 0; i < results[0].address_components.length; i++) {
                            for (var b = 0; b < results[0].address_components[i].types.length; b++) {
                                if (results[0].address_components[i].types[b] == "locality") {
                                    city = results[0].address_components[i];
                                    break;
                                }
                            }
                        }
                        cityname = city.short_name.replace(/\s+/g, "-").toLowerCase();
                        var getcityData=[];
                        if(citiesJson&&citiesJson.mapDetails){
                         getcityData = $.grep(citiesJson.mapDetails, function (element, index) {
                                                    return element.City == city.short_name;
                                        });
                        }

                        if($(".offer-dropdown .citySelect option[id='"+cityname+"City']").length==0 && getcityData.length>0){
                        $(".offer-dropdown .citySelect").append('<option id="'+cityname+'City">'+city.short_name+'</option>').selectmenu("refresh");
                        }
                        if (typeof cityname != "undefined") {
                            if (cityname != null && cityname != "") {
                                $('.offer-dropdown .citySelect').val(city.short_name);
                                $('.offer-dropdown .citySelect').selectmenu("refresh").trigger("selectmenuchange");
                                citySelected = $('.offer-dropdown .citySelect option:selected').val();
                                citynameval = city.short_name;
                            }
                        }
                    } else {
                    }
                } else {
                }
            });
        }
        function showError(error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                   
                    $('.offer-dropdown .citySelect option:selected').val("Mumbai");
                    citySelected = $('.offer-dropdown .citySelect option:selected').val();
                    break;
                case error.POSITION_UNAVAILABLE:
                   
                    break;
                case error.TIMEOUT:
                  
                    break;
                case error.UNKNOWN_ERROR:
                
                    break;
            }
        }
    }
	function getCityData(citiesnameJson, categorydatavalue, citydatavalue) {
        $("#offerlisting-offerblock").empty();
		$("#nearbytabcount").empty();
        var ShopNamearr = new Array(citiesnameJson.length);
        var Addressarr = new Array(citiesnameJson.length);
        var Localityarr = new Array(citiesnameJson.length);
        var Cityarr = new Array(citiesnameJson.length);
        var OfferDescriptionarr1 = new Array(citiesnameJson.length);
        var OfferDescriptionarr2 = new Array(citiesnameJson.length);
        var StartDatearr = new Array(citiesnameJson.length);
        var EndDatearr = new Array(citiesnameJson.length);
        var Latitudearr = new Array(citiesnameJson.length);
        var Longitudearr = new Array(citiesnameJson.length);
        var TandCLinkarr = new Array(citiesnameJson.length);
        var ThumbnailUrlarr = new Array(citiesnameJson.length);
        var Categoryarr = new Array(citiesnameJson.length);
        var GetDirectionUrlarr = new Array(citiesnameJson.length);
		var CategoryFilterarr = new Array(citiesnameJson.length);
        var CityFilterarr = new Array(citiesnameJson.length);
		var categoryvaldata = citiesnameJson;
        var cityvaldata = citiesnameJson;
        var getcityData;
		if((categorydatavalue.trim()) != "All Category"){
			getcityData = $.grep(cityvaldata.mapDetails, function (element, index) {
				var dataarray
				if(element.Category == categorydatavalue){
					dataarray = element.City == citydatavalue;
				}
				return dataarray;
			});
		}
		else{
			getcityData = $.grep(cityvaldata.mapDetails, function (element, index) {
				var dataarray
				dataarray = element.City == citydatavalue;
				return dataarray;
			});
		}
        var slider_div = "<div class='offer-slider'>";
		var dataCount = 0;
        for (var i = 0; i < getcityData.length; i++) {
            ShopNamearr[i] = getcityData[i].ShopName;
            Addressarr[i] = getcityData[i].Address;
            Localityarr[i] = getcityData[i].Locality;
            Cityarr[i] = getcityData[i].City;
            OfferDescriptionarr1[i] = getcityData[i].OfferDescription1;
            OfferDescriptionarr2[i] = getcityData[i].OfferDescription2;
            StartDatearr[i] = getcityData[i].StartDate;
            EndDatearr[i] = getcityData[i].EndDate;
            Latitudearr[i] = getcityData[i].Latitude;
            Longitudearr[i] = getcityData[i].Longitude;
            TandCLinkarr[i] = getcityData[i].TandCLink;
            ThumbnailUrlarr[i] = getcityData[i].ThumbnaiUrl;
            Categoryarr[i] = getcityData[i].Category;
            GetDirectionUrlarr[i] = getcityData[i].GetDirectionUrl;
            CityFilterarr[i] = getcityData[i].City;
			
            if (typeof ShopNamearr[i] != "undefined") {
                if (ShopNamearr[i] != "") {
                    ShopNamearr[i] = ShopNamearr[i].replace(/\s+/g, "-").toLowerCase();
                }
            }
            if (typeof Addressarr[i] != "undefined") {
                if (Addressarr[i] != "") {
                    Addressarr[i] = Addressarr[i].replace(/\s+/g, "-").toLowerCase();
                }
            }
            if (typeof Localityarr[i] != "undefined") {
                if (Localityarr[i] != "") {
                    Localityarr[i] = Localityarr[i].replace(/\s+/g, "-").toLowerCase();
                }
            }
            if (typeof Cityarr[i] != "undefined") {
                if (Cityarr[i] != "") {
                    Cityarr[i] = Cityarr[i].replace(/\s+/g, "-").toLowerCase();
                }
            }
            if (typeof OfferDescriptionarr1[i] != "undefined") {
                if (OfferDescriptionarr1[i] != "") {
                    OfferDescriptionarr1[i] = OfferDescriptionarr1[i].replace(/\s+/g, "-").toLowerCase();
                }
            }
            if (typeof OfferDescriptionarr2[i] != "undefined") {
                if (OfferDescriptionarr2[i] != "") {
                    OfferDescriptionarr2[i] = OfferDescriptionarr2[i].replace(/\s+/g, "-").toLowerCase();
                }
            }
            if (typeof StartDatearr[i] != "undefined") {
                if (StartDatearr[i] != "") {
                    StartDatearr[i] = StartDatearr[i].replace(/\s+/g, "-").toLowerCase();
                }
            }
            if (typeof EndDatearr[i] != "undefined") {
                if (EndDatearr[i] != "") {
                    EndDatearr[i] = EndDatearr[i].replace(/\s+/g, "-").toLowerCase();
                }
            }
            if (typeof Latitudearr[i] != "undefined") {
                if (Latitudearr[i] != "") {
                    Latitudearr[i] = Latitudearr[i].replace(/\s+/g, "-").toLowerCase();
                }
            }
            if (typeof Longitudearr[i] != "undefined") {
                if (Longitudearr[i] != "") {
                    Longitudearr[i] = Longitudearr[i].replace(/\s+/g, "-").toLowerCase();
                }
            }
            if (typeof TandCLinkarr[i] != "undefined") {
                if (TandCLinkarr[i] != "") {
                    TandCLinkarr[i] = TandCLinkarr[i].replace(/\s+/g, "-").toLowerCase();
                }
            }
            if (typeof ThumbnailUrlarr[i] != "undefined") {
                if (ThumbnailUrlarr[i] != "") {
                    ThumbnailUrlarr[i] = ThumbnailUrlarr[i].replace(/\s+/g, "-").toLowerCase();
                }
            }
            if (typeof Categoryarr[i] != "undefined") {
                if (Categoryarr[i] != "") {
                    Categoryarr[i] = Categoryarr[i].replace(/\s+/g, "-").toLowerCase();
                }
            }
            if (typeof GetDirectionUrlarr[i] != "undefined") {
                if (GetDirectionUrlarr[i] != "") {
                    GetDirectionUrlarr[i] = GetDirectionUrlarr[i].replace(/\s+/g, "-").toLowerCase();
                }
            }
			
			var UriTitle = encodeURI(getcityData[i].OfferDescription1 + " " + getcityData[i].OfferDescription2);
            if (process(getcityData[i].EndDate) >= process(currentDate) && process(getcityData[i].StartDate) <= process(currentDate)) {
                if (i < 12) {
					dataCount++;					
                    slider_div += "<div class='offer-card h-view " +Cityarr[i] +"' style='height: 140px;'><div class='card-inner'><div class='media'><a target='_blank' href='"+getcityData[i].GetDirectionUrl+"'><img style='height: auto; width: 75px;'src='"+getcityData[i].ThumbnaiUrl+"'></img></a></div><div class='content'><a target='_blank' href='"+getcityData[i].GetDirectionUrl+"' class='card-title'>"+getcityData[i].OfferDescription1 + " " + getcityData[i].OfferDescription2 +"</a><div class='card-bottom'><div class='date-readtime'><span class='num-viewer'></span></div><div class='bookmark-share'><div class='share'></div><div class='share-content'><div class='inner-content'><div class='share-header'><p>Share</p> <span class='close-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/close-orange.svg' alt='fb'/></span> </div><ul class='share-link'><li><a href='https://api.whatsapp.com/send?url=" + window.location.host + getcityData[i].GetDirectionUrl + "&text=" + getcityData[i].OfferDescription1 + " " + getcityData[i].OfferDescription2 + "' target='_blank' tabindex='0'><span class='n-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp.svg' alt='whatsapp'></span> <span class='h-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp-o.svg' alt='whatsapp'> </span></a></li><li><a href='https://www.facebook.com/sharer/sharer.php?u=" + window.location.host + getcityData[i].GetDirectionUrl + "&text=" + getcityData[i].OfferDescription1 + " " + getcityData[i].OfferDescription2 + "' target='_blank' tabindex='0'> <span class='n-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-black.svg' alt='fb'></span><span class='h-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-orange.svg'alt='fb'></span></a></li><li><a href='https://twitter.com/intent/tweet?url=" + window.location.host + getcityData[i].GetDirectionUrl + "&text=" + UriTitle + "' target='_blank' tabindex='0'><span class='n-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-black.svg' alt='tw'></span><span class='h-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-orange.svg' alt='tw'></span></a></li><li><a href='https://www.linkedin.com/shareArticle?mini=true?url=" + window.location.host + getcityData[i].GetDirectionUrl + "&text=" + getcityData[i].OfferDescription1 + " " + getcityData[i].OfferDescription2 + "' target='_blank' tabindex='0'><span class='n-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-black.svg' alt='ln'></span><span class='h-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-orange.svg' alt='ln'></span></a></li></ul> </div> </div> </div></div></div></div></div>";
                }				
            }
        }
        $("[data-tabtitle]").each(function(){
            if($(this).attr('data-tabtitle')&&$(this).attr('data-tabtitle').replace(/ /g, "").toLowerCase().includes('nearby')){$(this).append(dataCount); $(this).addClass('num')};
        });	
		dataCount=0;
        slider_div = slider_div + "</div>";
        $("#offerlisting-offerblock").append(slider_div);
        
		// Date 08/03/2021 start
			  /* looking-for-slider */
			  if ($("#nearby-offer .offer-slider").length > 0) {
				$("#nearby-offer  .offer-slider")
				  .not(".slick-initialized")
				  .slick({
					dots: true,
					arrows: true,
					infinite: false,
					autoplay: false,
					speed: 300,
					slidesToShow: 3,
					slidesToScroll: 1,
					responsive: [
					  {
						breakpoint: 991,
						settings: {
						  arrows: false,
						  slidesToShow: 2,
						  slidesToScroll: 1,
						},
					  },
					  {
						breakpoint: 640,
						settings: {
						  arrows: false,
						  centerMode: true,
						  slidesToShow: 1,
						  slidesToScroll: 1,
						  centerPadding: "45px",
						},
					  },
					],
				  });
                  
			  }
    }
    $("[data-tabtitle]").each(function () {
      if (
        $(this).attr("data-tabtitle") &&
        $(this)
          .attr("data-tabtitle")
          .replace(/ /g, "")
          .toLowerCase()
          .includes("shop")
      ) {
        $(this).parent().css('padding-right', '10px');;
      }
    });
});
$(window).on("load resize orientationchange", function () {
    setTimeout(function () {
        $("#compareandbuy .trending-deals-slider .deal-card").equalHeights();
        $("#cashback .trending-deals-slider .deal-card").equalHeights();
        $("#trendingoffers .trending-deals-slider .deal-card").equalHeights();
        $("#offerblock .trending-deals-slider .deal-card").equalHeights();
      }, 500);
  });

$(document).ready(function () {
    $('body').addClass('experiencefr-nearby');
    var  cityname;
    var date = new Date();
    var currentDate = date.getFullYear() + "-" + ('0' + (date.getMonth() + 1)).slice(-2) + "-" + date.getDate();

    function process(date) {
        var parts = date.split("-");
        return new Date(parts[0], parts[1] - 1, parts[2]);
    }
    $(".home-page-deals .nav-tabs li a").on(
        "click",
        function () {
            if($(this).parent().attr('data-nudge')){
                $("#nudgeForTrendingDeals p").empty().append($('#nudgeValueContent').val())
                $("#nudgeForTrendingDeals").show();
            }else{
                $("#nudgeForTrendingDeals").hide();
            }
            $("#compareandbuy .trending-deals-slider").slick("refresh");
            $("#cashback .trending-deals-slider").slick("refresh");
            $('#trendingoffers .trending-deals-slider').slick("refresh");
            $("#offerblock .trending-deals-slider").slick("refresh");
          setTimeout(function () {
            $("#compareandbuy .trending-deals-slider .deal-card").equalHeights();
            $("#cashback .trending-deals-slider .deal-card").equalHeights();
            $("#trendingoffers .trending-deals-slider .deal-card").equalHeights();
            $("#offerblock .trending-deals-slider .deal-card").equalHeights();
          }, 500);
        }
      );
    var domainName = window.location.origin;
    var nearbyOffers = domainName + '/content/icicibank.nearbyoffers.offset.limit.city.lat.lng.store.sort.searchTerm.filters.json';
    var citiesJson;
    var cityvaldata;
    $(".place-filter .citySelect").selectmenu();
    if($("#offerblock").length){
        $.ajax({
            type: "GET",
            url: nearbyOffers,
            datatype: "json",
            success: function (data) {
                citiesJson = data;
                if(citiesJson && citiesJson.length > 0){
                    citiesJson.sort(function(a,b){
                        return a.City-b.City
                    });
                    cityvaldata = citiesJson;
                }
                initBlocks();
                getCityData(citiesJson, defaultCity);
            },
        });
    }
    var citySelectedDropdown;
    var defaultCity = $(".place-filter .citySelect option").length?$(".place-filter .citySelect option")[0].text:'Mumbai';
    $(".place-filter span").on("DOMSubtreeModified", function () {
        var changedcityval = $(this).find(".ui-selectmenu-text").text();
        if (typeof changedcityval != "undefined") {
            if (changedcityval != "") {
                citySelectedDropdown = changedcityval;
               
                getCityData(citiesJson, citySelectedDropdown);
                blockLength = $(".myOffers." + citySelectedDropdown).length;
                if (blockLength > 0) {
                    $(".myOffers." + citySelectedDropdown).attr("style", "display:block;");
                } else {
                    citySelectedDropdown = defaultCity.replace(/\s+/g, "-").toLowerCase();
                    $(".myOffers." + citySelectedDropdown).attr("style", "display:block;");
                }
            }
        }
    });
    function initBlocks() {
        var defaultCity = $(".place-filter .citySelect option").length?$(".place-filter .citySelect option")[0].text:'Mumbai';
        var citynameval;
        $("#nearbyoffers div span").find(".ui-selectmenu-text").text();
        function showPosition(position) {
            if (typeof position.lat != "undefined" && typeof position.lng != "undefined") {
                var lat = position.lat;
                var lng = position.lng;
            } else {
                var lat = position.coords.latitude;
                var lng = position.coords.longitude;
            }
            if (typeof google === "object" && typeof google.maps === "object") {
               cityLatLng(lat, lng);
            }
           
        }
        function cityLatLng(lat, lng) {
            var latlng = new google.maps.LatLng(lat, lng);
            geocoder.geocode({ latLng: latlng }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[1]) {
                        for (var i = 0; i < results[0].address_components.length; i++) {
                            for (var b = 0; b < results[0].address_components[i].types.length; b++) {
                                if (results[0].address_components[i].types[b] == "locality") {
                                    city = results[0].address_components[i];
                                    break;
                                }
                            }
                        }
                        cityname = city.short_name.replace(/\s+/g, "-").toLowerCase();
                        var getcityData=[];
                        if(cityvaldata&&cityvaldata.length > 0){
                            getcityData = $.grep(cityvaldata, function (element, index) {
                                                    return element.City == city.short_name;
                                                });
                        }

                        if($(".place-filter .citySelect option[value='"+city.short_name+"']").length==0 && getcityData.length>0){
                        $(".place-filter .citySelect").append('<option value="'+city.short_name+'">'+city.short_name+'</option>').selectmenu("refresh");
                        }
                       
                        if (typeof cityname != "undefined") {
                            if (cityname != null && cityname != "") {
                                $(".place-filter").find(".ui-selectmenu-text").text(city.short_name);
                                $(".place-filter .citySelect option[value=" + city.short_name + "]")
                                    .attr("selected", "selected")
                                    .change();
                                citySelected = $(".place-filter").find(".ui-selectmenu-text").text();
                                citynameval = city.short_name;
                               
                            }
                        }
                    } else {
                    }
                } else {
                }
            });
        }
        function showError(error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                   
                    $("#nearbyoffers div span").find(".ui-selectmenu-text").text(defaultCity);
                    citySelected = $("#nearbyoffers div span").find(".ui-selectmenu-text").text();
                    break;
                case error.POSITION_UNAVAILABLE:
                    
                    break;
                case error.TIMEOUT:
              
                    break;
                case error.UNKNOWN_ERROR:
                   
                    break;
            }
        }
    }
    function getCityData(citiesnameJson, citydatavalue) {
 
        $("#offerblock").empty();
        var ShopNamearr = [];
        var Addressarr = [];
        var Localityarr = [];
        var Cityarr = [];
        var OfferDescriptionarr1 = [];
        var OfferDescriptionarr2 = [];
        var StartDatearr = [];
        var EndDatearr = [];
        var Latitudearr = [];
        var Longitudearr = [];
        var TandCLinkarr = [];
        var ThumbnailUrlarr = [];
        var Categoryarr = [];
        var GetDirectionUrlarr = [];
        var CityFilterarr = [];
        var cityvaldata = citiesnameJson;
        
        
        var getcityData = $.grep(cityvaldata, function (element, index) {
            return element.City == citydatavalue;
        });
        var slider_div = "<div class='trending-deals-slider extra-offer-text'>";
        var nearbyItemCount=0;
        for (var i = 0; i < getcityData.length; i++) {
            if(nearbyItemCount>10){break;}
            else if (process(getcityData[i].EndDate) >= process(currentDate) && process(getcityData[i].StartDate) <= process(currentDate)) {
                nearbyItemCount+=1;
                ShopNamearr[i] = getcityData[i].ShopName;
                Addressarr[i] = getcityData[i].Address;
                Localityarr[i] = getcityData[i].Locality;
                Cityarr[i] = getcityData[i].City;
                OfferDescriptionarr1[i] = getcityData[i].OfferDescription1;
                OfferDescriptionarr2[i] = getcityData[i].OfferDescription2;
                StartDatearr[i] = getcityData[i].StartDate;
                EndDatearr[i] = getcityData[i].EndDate;
                Latitudearr[i] = getcityData[i].Latitude;
                Longitudearr[i] = getcityData[i].Longitude;
                TandCLinkarr[i] = getcityData[i].TandCLink;
                ThumbnailUrlarr[i] = getcityData[i].ThumbnaiUrl;
                Categoryarr[i] = getcityData[i].Category;
                GetDirectionUrlarr[i] = getcityData[i].GetDirectionUrl;
                CityFilterarr[i] = getcityData[i].City;
                    if (typeof ShopNamearr[i] != "undefined") {
                        if (ShopNamearr[i] != "") {
                            ShopNamearr[i] = ShopNamearr[i].replace(/\s+/g, "-").toLowerCase();
                        }
                    }
                    if (typeof Addressarr[i] != "undefined") {
                        if (Addressarr[i] != "") {
                            Addressarr[i] = Addressarr[i].replace(/\s+/g, "-").toLowerCase();
                        }
                    }
                    if (typeof Localityarr[i] != "undefined") {
                        if (Localityarr[i] != "") {
                            Localityarr[i] = Localityarr[i].replace(/\s+/g, "-").toLowerCase();
                        }
                    }
                    if (typeof Cityarr[i] != "undefined") {
                        if (Cityarr[i] != "") {
                            Cityarr[i] = Cityarr[i].replace(/\s+/g, "-").toLowerCase();
                        }
                    }
                    if (typeof OfferDescriptionarr1[i] != "undefined") {
                        if (OfferDescriptionarr1[i] != "") {
                            OfferDescriptionarr1[i] = OfferDescriptionarr1[i].replace(/\s+/g, "-").toLowerCase();
                        }
                    }
                    if (typeof OfferDescriptionarr2[i] != "undefined") {
                        if (OfferDescriptionarr2[i] != "") {
                            OfferDescriptionarr2[i] = OfferDescriptionarr2[i].replace(/\s+/g, "-").toLowerCase();
                        }
                    }
                    if (typeof StartDatearr[i] != "undefined") {
                        if (StartDatearr[i] != "") {
                            StartDatearr[i] = StartDatearr[i].replace(/\s+/g, "-").toLowerCase();
                        }
                    }
                    if (typeof EndDatearr[i] != "undefined") {
                        if (EndDatearr[i] != "") {
                            EndDatearr[i] = EndDatearr[i].replace(/\s+/g, "-").toLowerCase();
                        }
                    }
                    if (typeof Latitudearr[i] != "undefined") {
                        if (Latitudearr[i] != "") {
                            Latitudearr[i] = Latitudearr[i].replace(/\s+/g, "-").toLowerCase();
                        }
                    }
                    if (typeof Longitudearr[i] != "undefined") {
                        if (Longitudearr[i] != "") {
                            Longitudearr[i] = Longitudearr[i].replace(/\s+/g, "-").toLowerCase();
                        }
                    }
                    if (typeof TandCLinkarr[i] != "undefined") {
                        if (TandCLinkarr[i] != "") {
                            TandCLinkarr[i] = TandCLinkarr[i].replace(/\s+/g, "-").toLowerCase();
                        }
                    }
                    if (typeof ThumbnailUrlarr[i] != "undefined") {
                        if (ThumbnailUrlarr[i] != "") {
                            ThumbnailUrlarr[i] = ThumbnailUrlarr[i].replace(/\s+/g, "-").toLowerCase();
                        }
                    }
                    if (typeof Categoryarr[i] != "undefined") {
                        if (Categoryarr[i] != "") {
                            Categoryarr[i] = Categoryarr[i].replace(/\s+/g, "-").toLowerCase();
                        }
                    }
                    if (typeof GetDirectionUrlarr[i] != "undefined") {
                        if (GetDirectionUrlarr[i] != "") {
                            GetDirectionUrlarr[i] = GetDirectionUrlarr[i].replace(/\s+/g, "-").toLowerCase();
                        }
                    }
                    slider_div +=
                        "<div class='deal-card myOffers " +
                        Cityarr[i] +
                        "'><div class='deal-inner'><div class='image'><a href='" + getcityData[i].GetDirectionUrl + "'><img src='" +
                        getcityData[i].ThumbnaiUrl +
                        "' loading='lazy'></a></div><div class='offer'><a href='" + getcityData[i].GetDirectionUrl + "'>" +
                        getcityData[i].OfferDescription1 +
                        "</a><p class='offer-red'>" +
                        getcityData[i].OfferDescription2 +
                        "</p></div><div class='description'>" +
                        getcityData[i].Address +
                        "</div><div class='buttons'><a href='" +
                        getcityData[i].GetDirectionUrl +
                        "' class='ic-btn'>Get Directions</a></div></div></div>";
            }
        }
        slider_div = slider_div + "</div>";
        
        $("#offerblock").append(slider_div);
        $("#offerblock .trending-deals-slider").slick({
            dots: !0,
            infinite: !0,
            autoplay: !0,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                { breakpoint: 1025, settings: { slidesToShow: 2 } },
                { breakpoint: 767, settings: { slidesToShow: 1, arrows: !1, dots: !0 } },
                { breakpoint: 640, settings: { slidesToShow: 1, arrows: !1, dots: !0, centerMode: !0, centerPadding: "15px", infinite: !0 } },
            ]
        });
        //setTimeout(function () {$("#offerblock .trending-deals-slider .deal-card").equalHeights()},1000);
    }
});

$(document).ready(function () {
  if($('.quick-action').length > 0) {
    var qaSelectedProdArray = [];
  $(".quick-action-select select[multiple]").multiselect({
    columns: 1,
    search: false,
    texts: {
      placeholder: "Select product type",
    },
    showCheckbox: true,
    onOptionClick: function (element, option) {
      if (option.checked) {
        qaSelectedProdArray.push(option.value);
      } else {
        const index = qaSelectedProdArray.indexOf(option.value);
        if (index > -1) {
          qaSelectedProdArray.splice(index, 1);
        }
      }
      // validateReferVoucherForm();
    },
  });

  $(".callback-form .input-group").click(function () {
    $(".input-group").removeClass("active");
    $(this).addClass("active");
  });

  $(document).on("click", function (e) {
    if (
      !$(".callback-form .input-group").is(e.target) &&
      $(".callback-form .input-group").has(e.target).length === 0
    ) {
      $(".input-group").removeClass("active");
    }
  });


  $("#lead-form-1").on("submit", function(e){
    e.preventDefault();
    var productId = [];
		productId = qaSelectedProdArray;
    var formajax = $("#lead-form-1").attr("ajax-page");
    var fname = document.forms["lead-form-1"]["fname"].value;
    var lname = document.forms["lead-form-1"]["lname"].value;
    var mobNum = document.forms["lead-form-1"]["mob-num"].value;
    var email = document.forms["lead-form-1"]["email"].value;
    var productType = document.forms["lead-form-1"]["product-type"].value;
    var pincode = document.forms["lead-form-1"]["pincode"].value;
    var isValid = true;
    $("#lead-form-1 .error").removeClass("error");
    $("#lead-form-1 .error-txt").hide();
    var fnameInvalid = !/^[a-zA-Z ]*$/g.test(fname);
    var lnameInvalid = !/^[a-zA-Z ]*$/g.test(lname);
    if (fname == null || fname == "") {
      var $fnameEl = $("#lead-form-1 #qa-fname");
      $fnameEl.addClass("error");
      $fnameEl.closest(".input-group").addClass("error");
      $("#lead-form-1 #fname-err").show();
      isValid = false;
    }
    if (fnameInvalid) {
      var $fnameEl = $("#lead-form-1 #qa-fname");
      $fnameEl.addClass("error");
      $fnameEl.closest(".input-group").addClass("error");
      $("#lead-form-1 #fname-num-err").show();
      isValid = false;
    }

    if (lname == null || lname == "") {
      var $lnameEl = $("#lead-form-1 #q-lname");
      $lnameEl.addClass("error");
      $lnameEl.closest(".input-group").addClass("error");
      $("#lead-form-1 #lname-err").show();
      isValid = false;
    }
    if (lnameInvalid) {
      var $lnameEl = $("#lead-form-1 #qa-lname");
      $lnameEl.addClass("error");
      $lnameEl.closest(".input-group").addClass("error");
      $("#lead-form-1 #lname-num-err").show();
      isValid = false;
    }
    if (
      mobNum == null ||
      mobNum == "" ||
      mobNum.length < 10 ||
      !/^[0-9]*$/.test(mobNum)
    ) {
      //update 29/07/2021
      var $mobNumEl = $("#lead-form-1 #qa-mob-num");
      $mobNumEl.addClass("error");
      $mobNumEl.closest(".input-group").addClass("error");
      $("#lead-form-1 #mob-err").show();
      isValid = false;
    }
    if (
      email == null ||
      email == "" ||
      !/(.+)@(.+){2,}\.(.+){2,}/.test(email)
    ) {
      var $emailEl = $("#lead-form-1 #qa-email");
      $emailEl.addClass("error");
      $emailEl.closest(".input-group").addClass("error");
      $("#lead-form-1 #email-err").show();
      isValid = false;
    }
    if (productType == null || productType == "") {
      var $prodTypeEl = $("#lead-form-1 #product-type");
      $prodTypeEl.addClass("error");
      $prodTypeEl.closest(".input-group").addClass("error");
      $("#lead-form-1 #product-type-err").show();
      isValid = false;
    }
    if (productId.length < 0 || productId.length == 0) {
      var $prodTypeEl = $("#lead-form-1 #product-type");
      $prodTypeEl.addClass('error');
      $prodTypeEl.closest('.input-group').addClass('error');
      $("#lead-form-1 #product-type-err").show();
      isValid = false;
      
    }
    if (
      pincode == null ||
      pincode == "" ||
      pincode.length < 6 ||
      !/^[0-9]*$/.test(pincode)
    ) {
      //update 29/07/2021
      var $pincodeEl = $("#lead-form-1 #qa-pincode");
      $pincodeEl.addClass("error");
      $pincodeEl.closest(".input-group").addClass("error");
      $("#lead-form-1 #pincode-err").show();
      isValid = false;
    }

    if (!formajax) {
      isValid = false;
    }

    if (isValid) {
      
      var callbackRequest =
        formajax +
        "apiname=save&productCode=" +
        productId +
        "&custName=" +
        fname +
        "&lastName=" +
        lname +
        "&custMobNo=" +
        mobNum +
        "&custEmail=" +
        email +
        "&pinCode=" +
        pincode;

      $.ajax({
        dataType: "json",
        url: callbackRequest,
        type: "GET",
        success: function (response) {
          var getCallbackResults = response.getCallbackResults;

					

          var successFlag = 0;
          var succMsg="CRM ";
          if (getCallbackResults) {
            for (var i = 0; i < getCallbackResults.length; i++) {
              var crmServiceResponce = getCallbackResults[i].IsSuccess;
              var message = getCallbackResults[i].Message;
              var crmItemKey = getCallbackResults[i].ItemKey;

              if (
                typeof message != "undefined" &&
                typeof crmItemKey != "undefined" &&
                typeof crmServiceResponce != "undefined"
              ) {
                if (message && crmItemKey && crmServiceResponce) {
                  if (message == "Success") {
                    
                    succMsg = succMsg + crmItemKey;
                    succMsg = succMsg + " ";
                    successFlag++;
                  }
                }
              }
            }
          }
          if (successFlag != 0 && productId.length >= successFlag) {
            var displayMsg = $("#success-txt p#successMsg strong").text();
						
						
						$("#success-txt p#successMsg strong").text(succMsg);
						$("#success-txt").addClass("show");
						$("#lead-form-1")[0].reset();
						qaSelectedProdArray = [];
						$("#lead-form-1 #product-type").multiselect('reload');
						setTimeout(function() {
							$("#success-txt").removeClass("show");
						}, 30000);
          } else {
            $("#error-txt").text("Error while submitting form");
            $("#error-txt").addClass("error");
            
          }
        },
        error: function () {
          $("#error-txt").text("Error while submitting form");
          $("#error-txt").addClass("error");
          
        },
      });
    }
  });
  // to open quick action sidebar
  var qaipalBtn = document.querySelector(".quickactions .ipalBtn .link");
  qaipalBtn && qaipalBtn.addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementsByClassName("widget-side__opener-icon")[0].click();
  });
  } 
});
/* form-slider' */ !$(".loan-forms .form-slider").hasClass(
    "slick-initialized"
) &&
    $(".loan-forms .form-slider").slick({
        dots: true,
        infinite: false,
        autoplay: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                dots: true,
                infinite: false,
                autoplay: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: true,
            },
        },
        ],
        onInit: function () {
            $(".slick-next .slick-arraow").css("pointer-events", "none");
        },
    });

function deactiveArrow() {
    $(".form-slider .slick-arrow").addClass("arrow-disable");
}

function activateArrow() {
    $(".form-slider .slick-arrow").removeClass("arrow-disable");
}

function showFormError() {
    $(".form-slider .slick-active").find(".form-group-inner").addClass("error");
}

var disableEventsClass = "disable-el";

function disableSlickDots(index) {
    $("#offer-form .slick-dots li").eq(index).addClass(disableEventsClass);
    $("#offer-form-mob .slick-dots li").eq(index).addClass(disableEventsClass);
}

function enableSlickDot(index) {
    $("#offer-form .slick-dots li").eq(index).removeClass(disableEventsClass);
    $("#offer-form-mob .slick-dots li").eq(index).removeClass(disableEventsClass);
}

function validateMobile($this) {
    flag = false;
    msg = "";
    mobile = $($this).val();
    if ($.trim(mobile) == "") {
        disableSlickDots(2);
    } else if (!$.isNumeric(mobile)) {
        showFormError();
        msg = "Please enter valid Mobile number";
        $($this).addClass("error");
        disableSlickDots(2);
    } else if (mobile.length < 10) {
        showFormError();
        msg = "Please enter valid Mobile number";
        $($this).addClass("error");
        disableSlickDots(2);
    } else {
        $($this).removeClass("error");
        $(".form-slider .slick-active")
            .find(".form-group-inner")
            .removeClass("error");
        activateArrow();
        enableSlickDot(2);
        flag = true;
    }
    $(".error-msg").html(msg);
    return flag;
}

function validateName($this) {
    flag = false;
    msg = "";
    var regName = /^[a-zA-Z ]+$/;
    name = $($this).val();
    if ($.trim(name) == "") {
        disableSlickDots(1);
        disableSlickDots(2);
    } else if (!regName.test(name)) {
        showFormError();
        msg = "Please enter valid Name";
        $($this).addClass("error");
        disableSlickDots(1);
        disableSlickDots(2);
    } else {
        $($this).removeClass("error");
        $(".form-slider .slick-active")
            .find(".form-group-inner")
            .removeClass("error");
        activateArrow();
        enableSlickDot(1);
        $(".slick-dots").show();
        flag = true;
    }
    $(".error-msg").html(msg);
    return flag;
}

function validateEmail($this) {
    flag = false;
    msg = "";
    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    email = $($this).val();
    if ($.trim(email) == "") {
    } else if (!regEmail.test(email)) {
        showFormError();
        msg = "Please enter valid Email ID";
        $($this).addClass("error");
        // disableSlickDots(0);
    } else {
        $($this).removeClass("error");
        $(".form-slider .slick-active")
            .find(".form-group-inner")
            .removeClass("error");
        activateArrow();
        $(".slick-dots").show();
        flag = true;
    }
    $(".error-msg").html(msg);
    return flag;
}

var timeout = 0;

$(window).on("load resize orientationchange", function () {
    clearInterval(timeout);

    $(".form-slider").on("afterChange", function (event, slick, currentSlide) {
        if (currentSlide == 3) {
            if (!validateMobile($(".input-mobile")))
                $(".form-slider").slickGoTo(parseInt(0));
            else if (!validateName($(".input-name")))
                $(".form-slider").slickGoTo(parseInt(1));
            else if (!validateEmail($(".input-email")))
                $(".form-slider").slickGoTo(parseInt(2));
            else {
                $("#offer-form-mob").trigger("reset");
                $("#offer-form").trigger("reset");
            }
        }
        if (currentSlide == 0) {
            if (!validateName($(".input-name"))) deactiveArrow();
            else activateArrow();
        } else if (currentSlide == 1) {
            if (!validateMobile($(".input-mobile"))) deactiveArrow();
            else activateArrow();
        } else if (currentSlide == 2) {
            if (!validateEmail($(".input-email"))) deactiveArrow();
            else activateArrow();
        } else {
            $("#offer-form").trigger("reset");
            $("#offer-form-mob").trigger("reset");
        }
    });

    $("form input").on("keyup", function () {
        deactiveArrow();
        if ($(this).hasClass("input-mobile")) {
            validateMobile($(this));
        } else if ($(this).hasClass("input-name")) {
            validateName($(this));
        } else if ($(this).hasClass("input-email")) {
            validateEmail($(this));
        }
    });

    deactiveArrow();
    disableSlickDots(1);
    disableSlickDots(2);

    // AIITC-49:UI- Below code commented because it was hiding the last div of slick dots

    $(".slick-arrow").on("click", function (e) {
        if ($(this).hasClass("arrow-disable")) {
            e.preventDefault();
        }
    });
});

$(document).ready(function () {
    if($('.lead-capture-form').length > 0) {
    $("#product-type2-button").remove();
    $("select[multiple]").multiselect({
        columns: 1,
        search: false,
        texts: {
            placeholder: "Select product type",
        },
    });
    $("#getCallBackPopup").click(function () {
        $("#imodal-callback-popup1").show();
    });

    var qaSelectedProdArray = [];
    $("#product-type2").change(function () {
        qaSelectedProdArray = $(this).val();
    });
    $(".multiselect-dropdown select[multiple]").multiselect({
        columns: 1,
        search: false,
        texts: {
            placeholder: "Select product type",
        },
        showCheckbox: true,
        onOptionClick: function (element, option) {
            if (option.checked) {
                qaSelectedProdArray.push(option.value);
            } else {
                const index = qaSelectedProdArray.indexOf(option.value);
                if (index > -1) {
                    qaSelectedProdArray.splice(index, 1);
                }
            }
        },
    });

    $(".callback-form .input-group").click(function () {
        $(".input-group").removeClass("active");
        $(this).addClass("active");
    });

    $(document).on("click", function (e) {
        if (!$(".callback-form .input-group").is(e.target) &&
            $(".callback-form .input-group").has(e.target).length === 0
        ) {
            $(".input-group").removeClass("active");
        }
    });

    $("#lead-form-2").on("submit", function (e) {
        e.preventDefault();
        var productId = [];
        productId = qaSelectedProdArray;
        var formajax = $("#lead-form-2").attr("ajax-page");
        var fname = document.forms["lead-form-2"]["firstNameId"].value;
        var lname = document.forms["lead-form-2"]["lastNameId"].value;
        var mobNum = document.forms["lead-form-2"]["contactNoId"].value;
        var email = document.forms["lead-form-2"]["emailId"].value;
        var productType = document.forms["lead-form-2"]["product-type2"].value;
        var pincode = document.forms["lead-form-2"]["pincodeId"].value;
        var isValid = true;
        $("#lead-form-2 .error").removeClass("error");
        $("#lead-form-2 .error-txt").hide();
        var fnameInvalid = !/^[a-zA-Z ]*$/g.test(fname);
        var lnameInvalid = !/^[a-zA-Z ]*$/g.test(lname);
        if (fname == null || fname == "") {
            var $fnameEl = $("#lead-form-2 #firstNameId");
            $fnameEl.addClass("error");
            $fnameEl.closest(".input-group").addClass("error");
            $("#lead-form-2 #fname-err").show();
            isValid = false;
        }
        if (fnameInvalid) {
            var $fnameEl = $("#lead-form-2 #firstNameId");
            $fnameEl.addClass("error");
            $fnameEl.closest(".input-group").addClass("error");
            $("#lead-form-2 #fname-num-err").show();
            isValid = false;
        }

        if (lname == null || lname == "") {
            var $lnameEl = $("#lead-form-2 #lastNameId");
            $lnameEl.addClass("error");
            $lnameEl.closest(".input-group").addClass("error");
            $("#lead-form-2 #lname-err").show();
            isValid = false;
        }
        if (lnameInvalid) {
            var $lnameEl = $("#lead-form-2 #lastNameId");
            $lnameEl.addClass("error");
            $lnameEl.closest(".input-group").addClass("error");
            $("#lead-form-2 #lname-num-err").show();
            isValid = false;
        }
        if (
            mobNum == null ||
            mobNum == "" ||
            mobNum.length < 10 ||
            !/^[0-9]*$/.test(mobNum)
        ) {
            //update 29/07/2021
            var $mobNumEl = $("#lead-form-2 #contactNoId");
            $mobNumEl.addClass("error");
            $mobNumEl.closest(".input-group").addClass("error");
            isValid = false;
        }
        if (
            email == null ||
            email == "" ||
            !/(.+)@(.+){2,}\.(.+){2,}/.test(email)
        ) {
            var $emailEl = $("#lead-form-2 #emailId");
            $emailEl.addClass("error");
            $emailEl.closest(".input-group").addClass("error");
            isValid = false;
        }
        if (productType == null || productType == "") {
            var $prodTypeEl = $("#lead-form-2 #product-type2");
            $prodTypeEl.addClass("error");
            $prodTypeEl.closest(".input-group").addClass("error");
            $("#lead-form-2 #product-type-err").show();
            isValid = false;
        }
        if (productId.length < 0 || productId.length == 0) {
            var $prodTypeEl = $("#lead-form-2 #product-type2");
            $prodTypeEl.addClass("error");
            $prodTypeEl.closest(".input-group").addClass("error");
            $("#lead-form-2 #product-type-err").show();
            isValid = false;
        }
        if (
            pincode == null ||
            pincode == "" ||
            pincode.length < 6 ||
            !/^[0-9]*$/.test(pincode)
        ) {
            //update 29/07/2021
            var $pincodeEl = $("#lead-form-2 #pincodeId");
            $pincodeEl.addClass("error");
            $pincodeEl.closest(".input-group").addClass("error");
            isValid = false;
        }

        if (!formajax) {
            isValid = false;
        }

        if (isValid) {
            var callbackRequest =
                formajax +
                "apiname=save&productCode=" +
                "CC" +
                "&custName=" +
                fname +
                "&lastName=" +
                lname +
                "&custMobNo=" +
                mobNum +
                "&custEmail=" +
                email +
                "&pinCode=" +
                pincode +
                "&cardType=coral";
            console.log(callbackRequest);
            $.ajax({
                dataType: "json",
                url: callbackRequest,
                type: "GET",
                success: function (response) {
                    var getCallbackResults = response.getCallbackResults;

                    var successFlag = 0;
                    var succMsg = "CRM ";
                    if (getCallbackResults) {
                        for (var i = 0; i < getCallbackResults.length; i++) {
                            var crmServiceResponce = getCallbackResults[i].IsSuccess;
                            var message = getCallbackResults[i].Message;
                            var crmItemKey = getCallbackResults[i].ItemKey;

                            if (
                                typeof message != "undefined" &&
                                typeof crmItemKey != "undefined" &&
                                typeof crmServiceResponce != "undefined"
                            ) {
                                if (message && crmItemKey && crmServiceResponce) {
                                    if (message == "Success") {
                                        succMsg = succMsg + crmItemKey;
                                        succMsg = succMsg + " ";
                                        successFlag++;
                                    }
                                }
                            }
                        }
                    }
                    if (successFlag != 0 && productId.length >= successFlag) {
                        var displayMsg = $("#success-txt-coral p#successMsg strong").text();

                        $("#success-txt-coral p#successMsg strong").text(succMsg);
                        $("#success-txt-coral").addClass("show");
                        $("#lead-form-2")[0].reset();
                        qaSelectedProdArray = [];
                        $("#lead-form-2 #product-type2").multiselect("reload");
                        setTimeout(function () {
                            $("#success-txt-coral").removeClass("show");
                        }, 30000);
                    } else {
                        $("#error-txt").text("Error while submitting form");
                        $("#error-txt").addClass("error");
                    }
                },
                error: function () {
                    $("#error-txt").text("Error while submitting form");
                    $("#error-txt").addClass("error");
                },
            });
        }
    });
}
});

var activetab;
var isCalculator = false;
document.addEventListener("start-product", function () {
    handleLiOnTabChange();
});
function handleLiOnTabChange() {
    $('.main-calculator').hide();
    const calculatorSet = document.getElementById('calculator-id') ? document.getElementById('calculator-id').innerText : null; // get list of calculators

    setTimeout(function () {
        activetab = $(".product-tabs ul li.active").attr("id");
        $('#'+ activetab + '-container').show();
        const scriptPath = document.getElementById(activetab + '-js') ? document.getElementById(activetab + '-js').innerText : null;
        const cssPath = document.getElementById(activetab + '-css') ? document.getElementById(activetab + '-css').innerText : null;
        scriptPath ? loadJS(scriptPath,activetab+'-script') : null;
        cssPath ? loadCSS(cssPath, activetab+'-style') : null;
        isCalculator = calculatorSet && calculatorSet.search(activetab) > -1; // check if calculator
        $('.tabs-two-column-calculator .left-panel .card-panel').hide();
        $('.tabs-two-column-calculator .right-panel .tab-pane').hide();

        if(isCalculator) {
            $('.calculator-unique').show();
            $('.no-calculator').hide();
            $('#'+ activetab + '-rightPanel').hide();
            $('#'+ activetab + '-leftPanel').hide();
            $('#'+ activetab + '-container .left-panel .card-panel').show();
            $('#'+ activetab + '-container .right-panel .tab-pane').show();
        } else {
            $('.calculator-unique').hide();
            $('.no-calculator').show();
            $('#'+ activetab + '-rightPanel').show();
            $('#'+ activetab + '-leftPanel').show();
            loadCallback();
            windowLoadCallback();
        }
    }, 0);
}

function loadJS(filepath,scriptid) {
    var jsElm = document.createElement("script");
    jsElm.type = "application/javascript";
    jsElm.setAttribute('id',scriptid);
    jsElm.src = filepath;
    if(!(document.getElementById(scriptid)))
    {
        document.body.appendChild(jsElm);
    }
}

function loadCSS(filepath,cssId) {
    var head  = document.getElementsByTagName('head')[0];
    var cssElm = document.createElement("link");
    cssElm.type = "text/css";
    cssElm.href = filepath;
    cssElm.id   = cssId;
    cssElm.rel  = 'stylesheet';
    if(!(document.getElementById(cssId)))
    {
        head.appendChild(cssElm);
    }
}
$(".pointer-carousel-with-link .varaints-pointer-cards").slick({
  dots: !0,
  arrows: !0,
  infinite: !1,
  autoplay: !1,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3, dots: !1 } },
    { breakpoint: 991, settings: { slidesToShow: 2, dots: !0, arrows: !1 } },
    { breakpoint: 560, settings: { slidesToShow: 1, dots: !0, arrows: !1 } },
  ],
});
$(".account-variants-double-card .account-variants-cards").slick({
  dots: !0,
  arrows: !0,
  infinite: !1,
  autoplay: !1,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3, dots: !1 } },
    { breakpoint: 991, settings: { slidesToShow: 2, dots: !0, arrows: !1 } },
    { breakpoint: 560, settings: { slidesToShow: 1, dots: !0, arrows: !1 } },
  ],
});

(function () {
    $(".how-it-works-slider").slick({
        dots: !0,
        arrows: !0,
        infinite: !0,
        autoplay: !0,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: !1,
                    arrows: false,
                },
            },
        ],
    });

    $(window).on("load resize orientationchange", function () {
        if ($(window).width() > 991) {
            $(".row, .how-it-works-slider").each(function () {
                $(this)
                    .find(".how-it-works-card-inner")
                    .equalHeights();
            });
        }
    });
})();
$(document).ready(function () {
    if($(".multicards").length<=1){
      if($('.multicards .section-inner .how-it-works-wrapper .section-title').is(':empty')){
         $('.multicards .section-inner .how-it-works-wrapper .section-title').remove();
      }
    }
 });
$(document).ready(function () {
  const brandDetailsEle = $("#brand-details");
  if (!brandDetailsEle) {
    return;
  }
  //Slicker for Mobile Start
  function initBrandSlick() {
    if ($(window).width() > 560)
      return (
        $(".brand-section .offer-cards").hasClass("slick-initialized") &&
          $(".brand-section .offer-cards").slick("unslick"),
        !0
      );
    $(".brand-section .offer-cards").not(".slick-initialized").slick({
      dots: !0,
      arrows: !1,
      infinite: !0,
      centerMode: !0,
      autoplay: !1,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding: "15px",
    });
  }

  function replaceTagsWithH2(string) {
            // Remove existing HTML tags
        const strippedString = string.replace(/<[^>]+>/g, '');
        // Wrap the content with <h3> tags
        const replacedString = `<h3>${strippedString}</h3>`;
        return replacedString;
        }

  // Slicker for mobile ENd
  var searchPath = brandDetailsEle.attr("data-searchpath");
  var brandId = brandDetailsEle.attr("data-propval");
  var brandIdProp = brandDetailsEle.attr("data-prop");
  var jsonData =
    "/content/icicibank.offersearch.json?searchPath=" +
    searchPath +
    "&start=0&prop=" +
    brandIdProp +
    "&value=" +
    brandId +
    "";
  var requestsData = { cards: [] };
  //   var jsonData = "src/main/webpack/data/brand-details-page.json";
  if (searchPath) {
    $.getJSON(jsonData, function (resultJSON) {
      var tempArray1 = [];
      if (resultJSON && resultJSON.cards) {
        requestsData = resultJSON.cards;
      } else {
        requestsData = [];
      }
      //alert( requestsData.length);
      var noOffer = "No Offer Found";
      if (typeof requestsData != "undefined") {
        if (requestsData != "") {
          $(".page-heading").append(" " + "(" + requestsData.length + ")");
          for (let index = 0; index < requestsData.length; index++) {
            var offerViews = requestsData[index]["offerViews"];
            var offerId = requestsData[index]["offerId"];
            var offerImage = requestsData[index]["offerImage"];
            var offerDesp1 = requestsData[index]["offerDesp1"];
            var offerDesp2 = requestsData[index]["offerDesp2"];
            var offerTitle1 = requestsData[index]["offerTitle"];
            var offerTitle = replaceTagsWithH2(offerTitle1);
            var brandId = requestsData[index]["brandId"];
            var brandLink = requestsData[index]["pagePath"];
            var categoryLink = requestsData[index]["categoryLink"];
            var startDate = requestsData[index]["startDate"];
            var endDate = requestsData[index]["endDate"];
            var Livesite = requestsData[index]["Livesite"];

            if (typeof offerViews != "undefined") {
              if (offerViews != "") {
                //offerViews = offerViewsofferViews;
                offerViews = offerViews;
              }
            } else {
              offerViews = "";
            }

            if (typeof offerId != "undefined") {
              if (offerId != "") {
                //offerId = offerId;
                offerId =
                  '<input type="hidden" id="offerId" value="' + offerId + '">';
              }
            } else {
              offerId = "";
            }

            if (typeof offerImage != "undefined") {
              if (offerImage != "") {
                offerImage = offerImage;
              }
            } else {
              offerImage = "";
            }

            if (typeof offerDesp1 != "undefined") {
              if (offerDesp1 != "") {
                offerDesp1 = offerDesp1;
              }
            } else {
              offerDesp1 = "";
            }

            if (typeof offerDesp2 != "undefined") {
              if (offerDesp2 != "") {
                offerDesp2 = offerDesp2;
              }
            } else {
              offerDesp2 = "";
            }

            if (typeof offerTitle != "undefined") {
              if (offerTitle != "") {
                offerTitle = offerTitle;
              }
            } else {
              offerTitle = "";
            }

            if (typeof brandId != "undefined") {
              if (brandId != "") {
                //brandId = brandId;
                brandId =
                  '<input type="hidden" id="brandId" value="' + brandId + '">';
              }
            } else {
              brandId = "";
            }

            if (typeof brandLink != "undefined") {
              if (brandLink != "") {
                brandLink = brandLink;
              }
            } else {
              brandLink = "";
            }

            if (typeof categoryLink != "undefined") {
              if (categoryLink != "") {
                categoryLink = categoryLink;
              }
            } else {
              categoryLink = "";
            }

            if (typeof startDate != "undefined") {
              if (startDate != "") {
                startDate = startDate;
              }
            } else {
              startDate = "";
            }

            if (typeof endDate != "undefined") {
              if (endDate != "") {
                endDate = endDate;
              }
            } else {
              endDate = "";
            }

            var currentdate = new Date()
              .toISOString()
              .replace(/T/, " ")
              .replace(/\..+/, "");
            var ofeerTime;
            if (endDate > startDate) {
              if (endDate > currentdate) {
                //	alert(" new Date : "+currentdate+" End Date: "+endDate);
                ofeerTime =
                  '<div class="time"><span><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/offer/timer.svg" alt="time"/></span><span class="remaining-time" data-time="' +
                  endDate +
                  '"></span></div>';
              }
            } else {
              ofeerTime =
                '<div class="time"><span><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/offer/timer.svg" alt="time"/></span><span class="remaining-time"data-time="' +
                endDate +
                '"></span></div>';
            }

            var description = offerDesp1 + " " + offerDesp2;
            //var description = offerDesp1.concat(offerDesp2);
            //if(index >= 0)
            //	{	//
            var quotient = Math.floor(index / 2);
            var remainder = index % 2;

            tempArray1.push(remainder);

            let len = tempArray1.length;
            //for(let i = 0 ; i <= tempArray1.length; i++)
            //{`
            //if(len == 1 || len == 2)
            //{
            $("#offerDetails").append(
              '<div class="offer-card">' +
                offerId +
                '<div class="card-inner">' +
                brandId +
                '<div class="media"><img src="' +
                offerImage +
                '" alt="amazon"/></div>' +
                ofeerTime +
                '<div class="content"><div class="title">' +
                offerTitle +
                '</div><div class="description">' +
                description +
                '</div><div class="button-group"> <a href="' +
                brandLink +
                '" class="ic-btn" target="_blank">See Full Offer</a></div><div class="card-bottom"><div class="date-readtime"><span class="num-viewer">' +
                offerViews +
                '</span></div><div class="bookmark-share"><div class="offerfav bookmark" offer-id="' +
                Livesite +
                '"></div><div class="share" data-text="check out this link"></div><div class="share-content"><div class="inner-content"><div class="share-header"><p>Share</p><span class="close-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/close-orange.svg" alt="fb" /></a></span></div><ul class="share-link"><li><a href="https://api.whatsapp.com/send?url=' +
                window.location.origin +
                brandLink +
                "&text=" +
                offerTitle +
                '" target="_blank" tabindex="0"><span class="n-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/whatsapp.svg" alt="whatsapp"></span> <span class="h-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp-o.svg" alt="whatsapp"> </span></a></li><li><a href="https://www.facebook.com/sharer/sharer.php?url=' +
                window.location.host +
                brandLink + 
                "&text=" +
                offerTitle +
                '" target="_blank" tabindex="0"> <span class="n-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-black.svg" alt="fb"></span><span class="h-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-orange.svg"alt="fb"></span></a></li><li><a href="https://twitter.com/intent/tweet?url=' +
                window.location.host +
                brandLink +
                "&text=" +
                encodeURI(offerTitle) +
                '" target="_blank" tabindex="0"><span class="n-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-black.svg" alt="tw"></span><span class="h-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-orange.svg" alt="tw"></span></a></li><li><a href="https://www.linkedin.com/shareArticle?mini=true?url=' +
                window.location.host +
                brandLink +
                "&text=" +
                offerTitle +
                '" target="_blank" tabindex="0"><span class="n-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-black.svg" alt="ln"></span><span class="h-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-orange.svg" alt="ln"></span></a></li></ul></div></div></div></div></div></div></div>'
            );
          }
        }
      }
      if (typeof requestsData == "undefined" && typeof brandId != "undefined") {
        $(".brand-page .page-heading").append(" " + "(0)");
        $("#offerDetails").append("<h5>No Offer Found</h5>");
      }

      initBrandSlick();
      getRemainingTime();

      //favourite icon click event starts
      var o = localStorage.getItem("OfferIdsFav");
      var e = [];
      var m = [];
      if (typeof o != "undefined") {
        if (o != null && o != "") {
          var s = o.split(",");
          for (var k = 0; k < s.length; k++) {
            m.push(s[k]);
            e.push(s[k]);
          }
          for (var k = 0; k < m.length; k++) {
            $('.offerfav.bookmark[offer-id="' + m[k] + '"]').addClass("active");
            $('.offerfav.bookmark[offer-id="' + m[k] + '"]')
              .parent()
              .parent()
              .parent()
              .parent()
              .parent()
              .addClass("favouirite");
            $('.offerfav.bookmark[offer-id="' + m[k] + '"]').css({
              background:
                "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/like-icon.svg) no-repeat 0 0%",
            });
          }
        }
      }
      $(document).on("click", ".offerfav.bookmark", function (f) {
        var c = $(this).attr("offer-id");
        if (!$(this).hasClass("active")) {
          $(this).addClass("active");
          $(this).css({
            background:
              "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/like-icon.svg) no-repeat 0 0%",
          });
          e.push(c);
          e = g(e);
          b();
        } else {
          var a = localStorage.OfferIdsFav.split(",");
          a = g(a);
          $(this).removeClass("active");
          $(this).css({
            background:
              "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/bookmark.svg) no-repeat 0 0%",
          });
          a.splice($.inArray(c, a), 1);
          e = g(a);
          b();
        }
      });

      function b() {
        localStorage.setItem("OfferIdsFav", e);
      }

      function g(c) {
        var a = [];
        $.each(c, function (f, h) {
          if ($.inArray(h, a) == -1) {
            a.push(h);
          }
        });
        return a;
      }

      function p(a) {
        return a.filter(function (h, f, c) {
          return f == c.indexOf(h);
        });
      }
      //favourite icon click event ends

      function getRemainingTime() {
        $("span.remaining-time").each(function (element) {
          var thisItem = $(this);

          // var countDownDate = new Date($(this).attr("data-time")).getTime();

          // code changed 14/12/2020
          var countDownDate = moment($(this).attr("data-time")).valueOf();
          // end code changed 14/12/2020

          // Update the count down every 1 second
          var x = setInterval(function () {
            var now = new Date().getTime();
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor(
              (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            var minutes = Math.floor(
              (distance % (1000 * 60 * 60)) / (1000 * 60)
            );
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            var timeRemains = "";
            if (days > 0) timeRemains += days + "d ";
            if (hours.toString().length == 1) hours = 0 + hours.toString();
            if (minutes.toString().length == 1)
              minutes = 0 + minutes.toString();
            if (seconds.toString().length == 1)
              seconds = 0 + seconds.toString();

            timeRemains += hours + "." + minutes + "." + seconds;
            thisItem.text(timeRemains);

            // If the count down is over, write some text
            if (distance < 0) {
              clearInterval(x);
              thisItem.text("EXPIRED");
            }
          }, 1000);
        });
      }
    });
  }
  $(".az-icon-close").hide();
  $(".az-icon ").click(function () {
    $(this).hide();
    $(".brand-nav").show();
    $(".az-icon-close").show();
  });
  $(".az-icon-close").click(function () {
    $(this).hide();
    $(".brand-nav").hide();
    $(".az-icon").show();
  });
  $(window).bind("scroll", function () {
    //Lazy Loading Effect
    $(".brand-lists .brand-list").each(function (index) {
      if ($(".card-loading").length > 0) return;

      if ($(this).isOnScreen() && $(this).hasClass("hidden-card")) {
        var thisElement = $(this);
        thisElement.removeClass("hidden-card");
        thisElement.addClass("card-loading");
        setTimeout(function () {
          thisElement.removeClass("card-loading");
          thisElement.addClass("auto-height");
        }, 2000);
      }
    });
  });

  $(window).resize(function () {
    initBrandSlick();
  });
});

$(document).ready(function () {
 
  if($("#serviceRequestJson").attr("data-searchpath")){
    var jsonData = '/content/icicibank.brandsearch.json?searchPath='+$("#serviceRequestJson").attr("data-searchpath")+'&start=0';
  
    $.getJSON(jsonData, function (resultJSON) {
      if(resultJSON && resultJSON.brands){
      var OffersBrand = resultJSON.brands;
      }else{
        var OffersBrand=[];
      }
      //var OffersBrand = offersBrandArray['OffersBrand'];

      var titleFirstChar = "",
        brandSectionArray = [];
      for (let index = 0; index < OffersBrand.length; index++) {
        var element = OffersBrand[index];
        // if(element["PopularBrand"] == "yes"){
        titleFirstChar = element["BrandTitle"].charAt(0).toUpperCase();
        // }
        if (brandSectionArray.indexOf(titleFirstChar) == -1)
          brandSectionArray.push(titleFirstChar);
      }
      brandSectionArray.reverse();
      for (let index = 0; index < brandSectionArray.length; index++) {
      }
      $(".brand-nav li").removeClass("ln-disabled");
      $.each($(".brand-nav li"), function () {
        if (
          brandSectionArray.indexOf($(this).text().toUpperCase()) == -1 &&
          $(this).text().toUpperCase() != "ALL"
        ) {
          $(this).addClass("ln-disabled");
        }
      });

      generateBrandCardstems(OffersBrand);

      /* Search Start*/
      $(".brand-top-content .search-box-area input").keyup(function () {
        var inputText = $(this)[0].value;
        if (inputText.length > 0)
          generateBrandCardstems(
            searchItems(OffersBrand, "BrandTitle", inputText)
          );
        else generateBrandCardstems(OffersBrand);
      });

      $(document).on("click", ".brandlisting-page ul.ln-letters li", function () {
        $(".ln-letters li").removeClass("ln-selected");
        let letter = $(this)[0].className;
        if (letter.toLowerCase() == "all") generateBrandCardstems(OffersBrand);
        else
          generateBrandCardstems(
            searchItems(OffersBrand, "BrandTitle", letter, true)
          );

        $(this).addClass("ln-selected");
      });

      $(window).resize(function () {
        generateBrandCardstems(OffersBrand);
      });
    });
  }
});

function generateBrandCardstems(brandData) {
  let html = "",
    cardGroupCount;
  if ($(window).width() <= 1200) cardGroupCount = 6;
  else cardGroupCount = 8;

  for (let index = 0; index < brandData.length; index++) {
    if (index % cardGroupCount == 0) {
      if (index >= cardGroupCount)
        html += '<div class="brand-list hidden-card">';
      else html += '<div class="brand-list">';
    }
    //if(brandData[index]["PopularBrand"] == "yes"){
    html += generateCardHTML(
      brandData[index]["OfferId"],
      brandData[index]["BrandPageLink"],
      brandData[index]["BrandLogoPath"],
      brandData[index]["BrandTitle"],
      brandData[index]["PopularBrand"]
    );
    //	 }
    if (index % cardGroupCount == cardGroupCount - 1) {
      html += "</div>";
    }
  }

  //Display result

  html.length > 0
    ? $("#brandListingWrapper").html(html)
    : $("#brandListingWrapper").html('<div class="no-result"></div>');
}

function generateCardHTML(
  offerId,
  brandUrl,
  brandIconPath,
  brandTitle,
  popularBrand
) {
  var cardHTML = "";
  //	if(popularBrand == "yes"){
  cardHTML =
    '<div class="brand-card" id="' +
    offerId +
    '"><a href="' +
    brandUrl +
    '" target="_blank"><div class="media"><img src="' +
    brandIconPath +
    '" alt="" /></div><div class="content"><div class="title">' +
    brandTitle + " Offers & Discount Coupon Codes" +
    "</div></div></a></div>";
  //}
  return cardHTML;
}

function searchItems(itemsArray, key, inputText, startsWith) {
  var tempItemArray = [];
  for (let index = 0; index < itemsArray.length; index++) {
    let itemKeyValue = itemsArray[index][key];
    if (startsWith) {
      if (itemKeyValue.toUpperCase().startsWith(inputText.toUpperCase()))
        tempItemArray.push(itemsArray[index]);
    } else if (itemKeyValue.toUpperCase().includes(inputText.toUpperCase())) {
      tempItemArray.push(itemsArray[index]);
    }
  }
  return tempItemArray;
}

$(document).ready(function () {
  if($('.offerdetails-page').length > 0) {
  var searchPath = $("#category-details").attr("data-searchpath");
  var catId = $("#category-details").attr("data-propval");
  var catIdProp = $("#category-details").attr("data-prop");
  var jsonData =
    "/content/icicibank.offersearch.json?searchPath=" +
    searchPath +
    "&start=0&prop=" +
    catIdProp +
    "&value=" +
    catId +
    "";
  var requestsData = { cards: [] };
  if (searchPath && catIdProp && catId) {
    $.getJSON(jsonData, function (responseJson) {
      let resultJSON = responseJson;
      resultJSON.cards.sort((x, y) => {
        if (x === "" && y === "") return 0;
        let xVal = parseInt(x.offerPriority)
        let yVal = parseInt(y.offerPriority)
        if (xVal!==0 && !xVal) xVal = Number.MAX_VALUE
        if (yVal!==0 && !yVal) yVal = Number.MAX_VALUE
        if (xVal === yVal) {
          //sort based on date, second level sorting if same priority cards
          return new Date(x.startDate) - new Date(y.startDate)
        }
        return xVal - yVal
      })
      if (resultJSON && resultJSON["cards"]) {
        requestsData = resultJSON["cards"];
      }

      if (requestsData.length > 0) {
        $("#category-detailspage-heading").append(
          " " + "(" + requestsData.length + ")"
        );
      }
      if (typeof requestsData == "undefined") {
        $("#category-detailspage-heading").append(" " + "(0)");
        $("#category-offerdetails").append("<h5>No Offer Found</h5>");
      }
      for (let index = 0; index < requestsData.length; index++) {
        var offerViews = requestsData[index]["offerViews"];
        var offerId = requestsData[index]["offerId"];
        var offerImage = requestsData[index]["Image"];
        var offerDesp1 = requestsData[index]["offerDesp1"];
        var offerDesp2 = requestsData[index]["offerDesp2"];
        var offerTitle = requestsData[index]["offerTitle"];
        var offerPromoCode = requestsData[index]["offerPromoCode"];
        var brandId = requestsData[index]["brandId"];
        var brandLink = requestsData[index]["pagePath"];
        var categoryLink = requestsData[index]["categoryLink"];
        var startDate = requestsData[index]["startDate"];
        var endDate = requestsData[index]["endDate"];

        if (typeof offerViews != "undefined") {
          if (offerViews != "") {
            //offerViews = offerViewsofferViews;
            offerViews = offerViews;
          }
        } else {
          offerViews = "";
        }

        if (typeof offerId != "undefined") {
          if (offerId != "") {
            //offerId = offerId;
            offerId =
              '<input type="hidden" id="offerId" value="' + offerId + '">';
          }
        } else {
          offerId = "";
        }

        if (typeof offerImage != "undefined") {
          if (offerImage != "") {
            offerImage = offerImage;
          }
        } else {
          offerImage = "";
        }

        if (typeof offerDesp1 != "undefined") {
          if (offerDesp1 != "") {
            offerDesp1 = offerDesp1;
          }
        } else {
          offerDesp1 = "";
        }

        if (typeof offerDesp2 != "undefined") {
          if (offerDesp2 != "") {
            offerDesp2 = offerDesp2;
          }
        } else {
          offerDesp2 = "";
        }

        if (typeof offerTitle != "undefined") {
          if (offerTitle != "") {
            offerTitle = offerTitle;
          }
        } else {
          offerTitle = "";
        }

        var res = offerPromoCode.substring(0, 2);
        var matches = res.match(/\d+/g);

        //Date Conversion Code Start
        var end = endDate.split(" ")[0];
        //alert("End Date : "+end);
        var expDate = end.split("-");
        var year = expDate[0];
        var monthno = expDate[1] - 1;
        var day = expDate[2];
        //alert("Final Date :" +year);

        var month = new Array();
        month[0] = "Jan";
        month[1] = "Feb";
        month[2] = "Mar";
        month[3] = "Apr";
        month[4] = "May";
        month[5] = "Jun";
        month[6] = "Jul";
        month[7] = "Aug";
        month[8] = "Sept";
        month[9] = "Oct";
        month[10] = "Nov";
        month[11] = "Dec";

        var no = month[monthno];
        var monthDate = no + " " + day + ", " + year;
        //var  rs = offerPromoCode;

        if (
          matches != null ||
          offerPromoCode.includes("Rs") ||
          offerPromoCode.includes("?") ||
          offerPromoCode.includes("RS")
        ) {
          offerPromoCode =
            '<div class="offer-coupon-content"><div class="offer-coupon-inner"><div class="offer-tags"><div class="tag"><p>Get flat ' +
            offerPromoCode +
            '</p></div></div><div class="offer-tags"><div class="tag"><p>Offer period: Till ' +
            monthDate +
            "</p></div></div></div></div>";
        } else {
          offerPromoCode =
            '<div class="offer-coupon-content"><p class="label">Use Coupon Code:</p><div class="offer-coupon-inner"><div class="offer-coupon-area"><div class="offer-Coupon"> <span id="referal-coupon' +
            index +
            '" class="coupon">' +
            offerPromoCode +
            '</span><span id="btn-referal-coupon' +
            index +
            '" onclick="copyCode(\'referal-coupon' +
            index +
            "', 'btn-referal-coupon" +
            index +
            '\')" class="copy">Copy Code</span></div></div><div class="offer-tags"><div class="tag"><p>Offer period: Till ' +
            monthDate +
            "</p></div></div></div></div></div>";
        }

        if (typeof brandId != "undefined") {
          if (brandId != "") {
            brandId = brandId;
            //brandId = '<input type="hidden" id="brandId" value="' + brandId + '">';
          }
        } else {
          brandId = "";
        }

        if (typeof brandLink != "undefined") {
          if (brandLink != "") {
            brandLink = brandLink;
          }
        } else {
          brandLink = "";
        }

        if (typeof categoryLink != "undefined") {
          if (categoryLink != "") {
            categoryLink = categoryLink;
          }
        } else {
          categoryLink = "";
        }

        if (typeof startDate != "undefined") {
          if (startDate != "") {
            startDate = startDate;
          }
        } else {
          startDate = "";
        }

        if (typeof endDate != "undefined") {
          if (endDate != "") {
            endDate = endDate;
          }
        } else {
          endDate = "";
        }

        var currentdate = new Date()
          .toISOString()
          .replace(/T/, " ")
          .replace(/\..+/, "");
        var ofeerTime;
        if (endDate > startDate) {
          if (endDate > currentdate) {
            ofeerTime =
              '<div class="time"><span><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/timer.svg" alt="time"/></span><span class="remaining-time">' +
              endDate +
              "</span></div>";
          }
        } else {
          ofeerTime =
            '<div class="time"><span><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/timer.svg" alt="time"/></span><span class="remaining-time">Expired</span></div>';
        }

        var description = offerDesp1 + " " + offerDesp2;

        $("#category-offerdetails").append(
          '<div class="offer-card">' +
            offerId +
            '<div class="card-inner"><div class="media"><img src="' +
            offerImage +
            '" alt="" loading="lazy"></div><div class="content"><div class="top-content"><div class="title">' +
            offerTitle +
            '</div><div class="description">' +
            description +
            "</div>" +
            offerPromoCode +
            '<div class="bottom-content"><div class="button-group offerdetails-target"><a href="' +
            brandLink +
            '" class="ic-btn" tabindex="0">See Full Offer</a></div><div class="card-bottom"><div class="date-readtime"><span class="num-viewer">' +
            offerViews +
            '</span></div><div class="bookmark-share"><div class="bookmark" offer-id="' +
            brandId +
            '"></div><div class="share"></div><div class="share-content"><div class="inner-content"><div class="share-header"><p>Share</p><span class="close-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/close-orange.svg" alt="fb"></span></div><ul class="share-link"><li><a href="https://api.whatsapp.com/send?url=' +
            window.location.host +
            brandLink +
            "&text=" +
            offerTitle +
            '" target="_blank" tabindex="0"><span class="n-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/whatsapp.svg" alt="whatsapp"></span> <span class="h-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp-o.svg" alt="whatsapp"> </span></a></li><li><a href="https://www.facebook.com/sharer/sharer.php?u=' +
            window.location.host +
            brandLink +
            "&text=" +
            offerTitle +
            '" target="_blank" tabindex="0"> <span class="n-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-black.svg" alt="fb"></span><span class="h-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-orange.svg"alt="fb"></span></a></li><li><a href="https://twitter.com/intent/tweet?url=' +
            window.location.host +
            brandLink +
            "&text=" +
            encodeURI(offerTitle) +
            '" target="_blank" tabindex="0"><span class="n-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-black.svg" alt="tw"></span><span class="h-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-orange.svg" alt="tw"></span></a></li><li><a href="https://www.linkedin.com/shareArticle?mini=true?url=' +
            window.location.host +
            brandLink +
            "&text=" +
            offerTitle +
            '" target="_blank" tabindex="0"><span class="n-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-black.svg" alt="ln"></span><span class="h-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-orange.svg" alt="ln"></span></a></li></ul></div></div></div></div></div></div></div></div>'
        );
        if ($(window).width() < 991) {
          $(".offerdetails-target a").attr('target','_blank');
        }
      }
    });
  }
  var o = localStorage.getItem("OfferIdsFav");
  var hp = localStorage.getItem("HandpickedIdsFav");
  var e = [];
  var m = [];
  if (typeof o != "undefined" || typeof hp != "undefined") {
    if ((o != null && o != "") || (hp != null && hp != "")) {
      var s = (o != null && o != "") && o.split(",");
      var x = (hp != null && hp != "") && hp.split(",");
      for (var k = 0; k < s.length; k++) {
        m.push(s[k]);
        e.push(s[k]);
      }
      for (var i = 0; i < x.length; i++) {
        m.push(x[i]);
        e.push(x[i]);
      }
      for (var k = 0; k < m.length; k++) {
        $('.bookmark[offer-id="' + m[k] + '"]').addClass("active");
        $('.bookmark[offer-id="' + m[k] + '"]')
          .parent()
          .parent()
          .parent()
          .parent()
          .parent()
          .addClass("favouirite");
        $('.bookmark[offer-id="' + m[k] + '"]').css({
          background:
            "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/like-icon.svg) no-repeat 0 0%",
        });
      }
    }
  }
  $(document).on("click", ".offerdetails-page .bookmark", function (f) {
    var c = $(this).attr("offer-id");
    if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $(this).css({
        background:
          "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/like-icon.svg) no-repeat 0 0%",
      });
      e.push(c);
      e = g(e);
      b();
    } else {
      var a = localStorage.OfferIdsFav.split(",");
      a = g(a);
      $(this).removeClass("active");
      $(this).css({
        background:
          "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/bookmark-orange.png) no-repeat 0 0%",
      });
      a.splice($.inArray(c, a), 1);
      e = g(a);
      b();
    }
  });

  function b() {
    localStorage.setItem("OfferIdsFav", e);
  }

  function g(c) {
    var a = [];
    $.each(c, function (f, h) {
      if ($.inArray(h, a) == -1) {
        a.push(h);
      }
    });
    return a;
  }

  function p(a) {
    return a.filter(function (h, f, c) {
      return f == c.indexOf(h);
    });
  }
}});

var nearby_offer_slider;
$(document).ready(function () {
  initBrandListSlick();
  initCategoriesListSlick();
  timerInit();
  offerCardSlider();
  /**
   * Code Update start
   * date : 17/02/2021
   */
  checkOffer();
  gaTrackingOfferPage();
  /**
   * Code Update end
   * date : 17/02/2021
   */
  $(".sort-dropdown li:nth-child(1)").addClass("active");
  {
    /* Code update 05/03/2021 */
    $(".filter-offer-section .filter-top .filter-icon").click(function () {
      $(".announcement-section").hide();
      if (!$(".filter-top").hasClass("filter-sticky")) {
        $(".filter-top").addClass("filter-sticky");
      }
      $(".filter-top").addClass("filter-selected");
      $(".sidebar-content").addClass("active");
      $("body").addClass("no-scroll");
    });

    $(".filter-offer-section .sort-tools .title").click(function () {
      $(".sort-dropdown .dropdown-wrapper").toggle("show");
    });
    $(document).on(
      "click",
      ".filter-offer-section .filter-content .filter-cat .filter-clear",
      function () {
        $(".announcement-section").show();
        $(".filter-inner-container").removeClass("active");
        $(".filter-top").removeClass("filter-selected");
        $(".filter-top").removeClass("filter-sticky");
        $(".filter-content .filter-cat").hide();
      }
    );
    /* Code update end 05/03/2021 */
  }
  /**
   * Code Update start
   * date : 17/02/2021
   */
  /* Start rating */
  $(".star-review span").on("click", function () {
    $(this).siblings().removeClass("checked");
    $(this).prevAll().addClass("checked");
    $(this).addClass("checked");
    $(this)
      .parent()
      .next('input[name="rating"]')
      .val($(this).parent().find(".checked").length);
  });
  /* End Start rating */
  /* Copy to clipboard */
  $(".copy-to-clipboard").on("click", function () {
    $(this).prev("input").select();
    document.execCommand("copy");
  });
  /* End copy to clipboard */
  /**
   * Code Update end
   * date : 17/02/2021
   */

  /* sidebar close mobile */
  // code change 30-11-2020
  /* Code update 05/03/2021 */
  $(
    ".filter-offer-section .sidebar-header .close, .sidebar-footer .apply"
  ).click(function () {
    $(".sidebar-content").removeClass("active");
    $(".sb-brands").removeClass("active");
    $(".filter-top").removeClass("filter-selected");
    $(".filter-top").removeClass("filter-sticky");
    $("body").removeClass("no-scroll");
    if ($(window).width() < 991) {
      $("html, body").animate({
        scrollTop:
          $(".filter-section").offset().top -
          ($(".new-header.mobile").height() +
            $(".new-header.mobile .search").height() +
            10),
      });
    } else {
      $("html, body").animate({
        scrollTop: $(".filter-section").offset().top,
      });
    }
  });
  /* Code update end 05/03/2021 */
  //end code change 30-11-2020

  /* looking-for-slider */
  if (
    $(".offer-slider").length > 0 &&
    $(".offer-slider").hasClass("slick-initialized")
  ) {
    $(".offer-slider").slick("unslick");
  }
  $(".offer-slider")
    .not(".slick-initialized")
    .slick({
      dots: true,
      arrows: true,
      infinite: false,
      autoplay: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 640,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "45px",
          },
        },
      ],
    });

  /* offer-nav-tabs */
  $(".offer-nav-tabs li").click(function () {
    $("#shop .offer-slider").slick("refresh");
    $("#nearby-offer  .offer-slider").slick("refresh");
    $("#mccmtrendingoffers .offer-slider").slick("refresh");
    setTimeout(function () {
      $("#nearby-offer  .offer-slider .offer-card").equalHeights();
      $("#mccmtrendingoffers .offer-slider .offer-card").equalHeights();
      $("#shop .offer-slider .offer-card").equalHeights();
    }, 500);
  });

  $(".offer-card .card-inner .card-title").equalHeights();
  /**
   * Show 200 Popup brand-poupup
   */
  $(".filter-offer-section .sb-brands .more-link").click(function () {
    $(this).addClass("active");
    $(".sidebar-content").addClass("noscroll-bar");
    $(".sb-brands .brand-poupup").show();
    if ($(window).width() < 991) {
      $(".sb-brands").addClass("active");
    }
    //$(".sb-brands .filter-cat").show();
    //$(".sb-brands .filter-cat").addClass("active");
  });
  if ($(window).width() < 991) {
    $(".filter-offer-section .sb-brands .heading h5").click(function () {
      $(".sb-brands").removeClass("active");
      $(".sb-brands .more-link").removeClass("active");
    });
  }
  $(".filter-offer-section .brand-poupup .close").click(function () {
    $(".sb-brands .brand-poupup").hide();
    $(".sb-brands").removeClass("active");
    $(".sb-brands .more-link").removeClass("active");
    $(".sidebar-content .sb-brands .search-box-area input").val("");
    $(".sidebar-content").removeClass("noscroll-bar");
  });
  $(".filter-offer-section .sb-brands .search-box-area input").focus(
    function () {
      $(".sidebar-content").addClass("noscroll-bar");
    }
  );
  // code change 18-12-2020
  // code change 30-11-2020
  $(".filter-offer-section .brand-poupup-bottom .clear-all").click(function () {
    $.each(
      $(".sidebar-content .brand-poupup .brand-poupup-middle input:checked"),
      function () {
        $(this).prop("checked", false);
      }
    );
  });
  // end code change 30-11-2020
  $(".filter-offer-section .sidebar-footer .clear-all").click(function () {
    $(".sidebar-footer .clear-all").click(function () {
      $(".sidebar-content .checkbox-list input").prop("checked", false);
      $(".sidebar-content .checkbox-list input")
        .closest("li")
        .removeClass("active");
    });
  });
  // end code change 18-12-2020
  $(".filter-offer-section .brand-poupup-bottom .apply").click(function () {
    $(".brand-poupup .close").click();
    $(".sidebar-content .sb-brands .search-box-area input").val("");
  });

  $(".filter-offer-section .sb-brands .filter-clear").click(function () {
    $(".sb-brands .filter-cat").hide();
    $(".sb-brands .filter-cat").removeClass("active");
  });

  /**
   * sb-payment slideToggle
   */
  $(".sb-payment .read-more-less").hide();
  $(".filter-offer-section .sb-payment .more-link").click(function () {
    $(".read-more-less").slideToggle();
    $("#loadMore").toggleClass("active");
    var text = $(this).text();
    $(this).text(text == "show 3 more" ? "show less" : "show 3 more");
  });

  /**
   * Most View
   */
  $(".filter-offer-section .sort-dropdown span").click(function () {
    $(this).addClass("active");
    $(".sort-dropdown .dropdown-wrapper").toggle();
  });
  $(".filter-offer-section .sort-tools .sort-dropdown li").click(function () {
    $(".sort-tools .sort-dropdown li").removeClass("active");
    $(this).addClass("active");
    $(".sort-dropdown span").removeClass("active");
    $(".sort-tools .sort-dropdown span").text($(this).text());
    $(".sort-dropdown .dropdown-wrapper").hide();
  });

  /**
   * Scroll Sticky
   */
  $(window).bind("scroll", function () {
    if ($(".filter-top").hasClass("filter-selected")) {
      return;
    }
    if ($(".filter-offer-section").length == 0) {
      return;
    }
    var topPosition = 0;
    if ($(".feature-offer-section").length > 0)
      /* Code update 05-03-2021 */
      $(".feature-offer-section").each(function (index, val) {
        topPosition += $(val).height();
      });
    topPosition += 150;
    /* Code update end 05-03-2021 */
    if ($(".announcement-section:visible").length > 0)
      topPosition += $(".announcement-section").height();

    if (topPosition <= 0) topPosition = 100;

    if ($(window).width() < 991) {
      if ($(window).scrollTop() > topPosition) {
        $(".filter-top").addClass("filter-sticky");
      } else {
        $(".filter-top").removeClass("filter-sticky");
      }
    } else if ($(window).width() > 991) {
      $(".filter-top").removeClass("filter-sticky");
    }

    //Desktop Sticky
    if ($(window).width() > 991) {
      $(".sidebar-content").removeClass("disable-sticky");
      removeStickyOfferSidebar(".footer");
    }

    //Lazy Loading Effect
    $(".offer-lists .offer-list").each(function (index) {
      if ($(".card-loading").length > 0) return;

      if ($(this).isOnScreen() && $(this).hasClass("hidden-card")) {
        var thisElement = $(this);
        thisElement.removeClass("hidden-card");
        thisElement.addClass("card-loading");
        setTimeout(function () {
          thisElement.removeClass("card-loading");
          thisElement.addClass("auto-height");
          $(".offer-list").eq(0).append(thisElement.find(".offer-card"));
          $(".auto-height").remove();
        }, 2000);
      }
    });
  });

  function removeStickyOfferSidebar(elementVar) {
    if ($(elementVar).length > 0) {
      if (
        $(elementVar).isOnScreen() &&
        $(".card-loading").length <= 0 &&
        $(".sidebar-content").hasClass("sticky-sidebar")
      ) {
        $(".sidebar-content").addClass("disable-sticky");
      }
    }
  }

  /**
   * filter Code Active element
   */
  $(
    ".filter-offer-section .sidebar-content .sb-categories li .menu-item"
  ).click(function (event) {
    if (
      $(this).parent().hasClass("active") &&
      $(this).parent().hasClass("dropdown")
    ) {
      $(this).parent().find(".dropdown-list").slideToggle();
      $(this).parent().removeClass("active");
      return;
    } else {
      $(".dropdown-list").hide();
      $(this).parent().find(".dropdown-list").slideDown();
    }
    $(this).parent().addClass("active");
    if (!$(this).parent().hasClass("dropdown")) {
      if ($(window).width() < 991) $(".sidebar-header .close").click();
    }
  });

  $(".filter-offer-section .sb-categories .checkbox-list input").change(
    function () {
      $(this).prop("checked")
        ? $(this).closest("li").addClass("active")
        : $(this).closest("li").removeClass("active");
    }
  );

  $(window).resize(function () {
    initBrandListSlick();
    initCategoriesListSlick();
    $(".offer-card .card-inner .card-title").equalHeights();
  });

  (function addRootclass() {
    if ($(".offerbanner").length > 0) {
      const rootEl = $(".container.page-content");
      rootEl.addClass("offerdetails-page");
    }
  })();
$(".sb-categories .contnet li:first").addClass("active");
});

var searchPlace;
//Begin: search location for nearby offer - code update 02/11/2021
function initNearbyMap() {

  getNearbyLocation();
  // google.maps.event.addDomListener(window, "load", initializeNearby); 
  initializeNearbyAutoComplete();
  //places search: begin
  function initializeNearbyAutoComplete() {
    searchPlace = new google.maps.places.Autocomplete(document.getElementById("searchPlaces"),
      { types: ["geocode"], componentRestrictions: { country: "in" } }
    );
  }
}

$(document).ready(function () {
  if ($('#filterSection').length > 0) {
    if (typeof google === "object" && typeof google.maps === "object") {
      // google.maps && google.maps.event.addDomListener(window, "load", initNearbyMap); // loading map initial method to window main listner for creating Map
      initNearbyMap();
    }
  }
});

function initBrandListSlick() {
  if ($(window).width() > 991) {
    if ($(".feature-offer-card .brand-list").hasClass("slick-initialized")) {
      $(".feature-offer-card .brand-list").slick("unslick");
    }
    return true;
  }

  $(".feature-offer-card .brand-list").not(".slick-initialized").slick({
    dots: true,
    arrows: false,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  });
}

function initCategoriesListSlick() {
  if ($(window).width() > 991) {
    if (
      $(".feature-offer-card .categories-list").hasClass("slick-initialized")
    ) {
      $(".feature-offer-card .categories-list").slick("unslick");
    }
    return true;
  }

  $(".feature-offer-card .categories-list").not(".slick-initialized").slick({
    dots: true,
    arrows: false,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  });
}

function timerInit() {
  // Set the date we're counting down to
  var countDownDate = new Date("22 Aug 2020 18:22:25").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var timeRemains = "";
    if (days > 0) timeRemains += days + "d ";
    if (hours.toString().length == 1) hours = 0 + hours.toString();
    if (minutes.toString().length == 1) minutes = 0 + minutes.toString();
    if (seconds.toString().length == 1) seconds = 0 + seconds.toString();

    timeRemains += hours + "." + minutes + "." + seconds;
    $("span.remaining-time").text(timeRemains);

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      $("span.remaining-time").text("EXPIRED");
    }
  }, 1000);
}
let index = 0;
function offerCardSlider() {
  nearby_offer_slider = $(".offer-card-slider").not(".slick-initialized").slick({
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  $(".offer-card-slider .left-arr-btn-shop").click(function () {
    let index = (+$(this).parent().parent().parent().parent().attr("data-slick-index") +1);
    dataLayer.push({
      'event': 'custom_event',
      'eventCategory': 'HB_nearby_offers',
      'eventAction': 'know_more_banner_click',
      'eventLabel': index + "_" + $(this).parent().parent().find("h4").text()
    });
  });
  $(".offer-card-slider .left-arr-btn").length > 0 && $(".offer-card-slider .left-arr-btn").click(function () {
    let index = (+$(this).parent().parent().parent().parent().attr("data-slick-index") +1);
    dataLayer.push({
      'event': 'custom_event',
      'eventCategory': 'HB_nearby_offers',
      'eventAction': 'get_direction_banner_click',
      'eventLabel': index + "_" + $(this).parent().parent().find("h4").text()
    });
  });

}

/**
 * Code Update start
 * date : 17/02/2021
 */
function checkOffer() {
  var today = new Date();
  var offer_date = new Date(Date.parse($(".offer-tags span").text()));
  if (offer_date < today) {
    $(".offer-top-content").addClass("expired");
    $(".offer-expired-section").show();
  } else {
    $(".offer-top-content").removeClass("expired");
    $(".offer-expired-section").hide();
  }
}
/**
 * Code Update end
 * date : 17/02/2021
 */

/* looking-for-slider */
/* 06/05/2021 update */
if ($(".related-offers-slider .offer-card").length > 0) {
  $(".related-offers-slider .offer-card")
    .not(".slick-initialized")
    .slick({
      dots: true,
      arrows: true,
      infinite: false,
      autoplay: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
}

/*  02/07/2021 */
$(window).on("beforeunload", function () {
  $(".filter-top .filter-icon").off("click");
  $(".sort-tools .title").off("click");
  $(".star-review span").off("click");
  $(".sidebar-header .close, .sidebar-footer .apply").off("click");
  $(".offer-nav-tabs li").off("click");
  $(".offer-card .card-inner .card-title").off("click");
  $(".sb-brands .more-link").off("click");
  $(".sb-brands .heading h5").off("click");
  $(".brand-poupup .close").off("click");
  $(".brand-poupup-bottom .clear-all").off("click");
  $(".sidebar-footer .clear-all").off("click");
  $(".brand-poupup-bottom .apply").off("click");
  $(".sb-brands .filter-clear").off("click");
  $(".sb-payment .more-link").off("click");
  $(".sort-dropdown span").off("click");
  $(".sort-tools .sort-dropdown li").off("click");
  $(".sidebar-content .sb-categories li .menu-item").off("click");
  $(".sidebar-header .close").off("click");
});

function gaTrackingOfferPage() {
  $(".popular-allBrands").click(function () {
    dataLayer.push({
      'event': 'custom_event',
      'eventCategory': 'offer_zone',
      'eventAction': 'view_all_popular_brands',
    });
  });
  $(".ga-brandList").click(function () {
    dataLayer.push({
      'event': 'custom_event',
      'eventCategory': 'offer_zone',
      'eventAction': 'select_popular_brand',
      'eventLabel': (($(this).attr("name").toLowerCase()).replace(/ /g, "_"))
    });
  });
  $('.popular-allCategories').click(function () {
    dataLayer.push({
      'event': 'custom_event',
      'eventCategory': 'offer_zone',
      'eventAction': 'view_all_popular_categories',
    });
  });
  $('.ga-categoriesList').click(function () {
    dataLayer.push({
      'event': 'custom_event',
      'eventCategory': 'offer_zone',
      'eventAction': 'select_popular_categories',
      'eventLabel': (($(this).text().toLowerCase()).replace(/ /g, "_"))
    });
  });
  // sn7
  $('.nav.nav-tabs.offer-nav-tabs .offesTabComponent a').click(function () {
    dataLayer.push({
      'event': 'custom_event',
      'eventCategory': 'offer_zone',
      'eventAction': 'offers_category_tab',
      'eventLabel': (($(this).attr("data-tabtitles").toLowerCase()).replace(/ /g, "_"))
    });
  });
  $('.offer-card.shop-card a').click(function () {
    let eventLabel = $('.offer-card.shop-card a .card-inner .media img').attr("alt").replace(/ /g, "_");
    dataLayer.push({
      'event': 'custom_event',
      'eventCategory': 'offer_zone',
      'eventAction': 'offers_category_tab',
      'eventLabel': eventLabel.toLowerCase()
    });
  });
  // sn09
  $('#filterSection .sb-offer-type .radio-list input').click(function () {
    dataLayer.push({
      'event': 'custom_event',
      'eventCategory': 'offer_zone',
      'eventAction': 'filter_selected',
      'eventLabel': (($(this).parent().text().toLowerCase()).replace(/ /g, "_"))
    });
  });

  // sn10 - page url is not correct
  $('.sb-categories .heading .link').click(function () {
    dataLayer.push({
      'event': 'custom_event',
      'eventCategory': 'offer_zone',
      'eventAction': 'view_all_categories',
      'eventLabel': ''
    });
  });


  // sn11
  $('.contnet .dropdown .menu-item').click(function () {
    dataLayer.push({
      'event': 'custom_event',
      'eventCategory': 'offer_zone',
      'eventAction': 'category_selected',
      'eventLabel': (($(this).text().trim().toLowerCase()).replace(/ /g, "_"))
    });

  });

  // sn15
  $("#filterSection .checkbox-list.category-checkbox").click(function () {
    let topCategory = ($(this).parent().parent().parent().parent().attr("id")).trim().toLowerCase().replace(/ /g, "_");
    let checkboxName = $(this).text().trim().toLowerCase().replace(/ /g, "_");
    dataLayer.push({
      'event': 'custom_event',
      'eventCategory': 'offer_zone',
      'eventAction': topCategory,
      'eventLabel': checkboxName
    });
  });
  // sn14
  $('.sb-box .more-link').click(function () {
    dataLayer.push({
      'event': 'custom_event',
      'eventCategory': 'offer_zone',
      'eventAction': 'show_more_brands',
      'eventLabel': ''
    });
  });
  // sn13
  $('.sb-brands .heading .link').click(function () {
    dataLayer.push({
      'event': 'custom_event',
      'eventCategory': 'offer_zone',
      'eventAction': 'view_all_brands',
      'eventLabel': ''
    });
  });
  $('#brandListWrapper .checkbox-list.checkbox-popup-list').click(function () {
    dataLayer.push({
      'event': 'custom_event',
      'eventCategory': 'offer_zone',
      'eventAction': 'brand_selected_apply',
      'eventLabel': $(this).text().trim().toLowerCase().replace(/ /g, "_")
    });
  });
}
$(document).ready(function () {
  var rankLatest ="true";
  var rankOldest =$("#filterSection").attr("data-rankOldest");
  var rankViewed =$("#filterSection").attr("data-rankViewed");
  var offerData = { cards: [] };
  var popularOfferData = { PopularOffers: [] };
  var searchPath = $("#filterSection").attr("data-searchPath");
  var filterCardCat = $(".contnet ul li").attr("data-default-filter");

  /* 18/12/2020 code update */
  function generateHTML(
    brandIcon,
    remainingTime,
    cardTitle,
    cardDescription,
    viewCount,
    brandName,
    brandPageUrl,
    offerPageUrl,
    offerCategoryPageUrl,
    offerCategoryPageLinkText,
    liveSiteId
  ) {
    let updatedCardTitle = replaceTagsWithH2(cardTitle);
    var html =
      '<div class="offer-card"><div class="card-inner"><div class="media"><a href="' +
      offerPageUrl +
      '" target="_blank"><img src="' +
      brandIcon +
      '" alt="' +
      brandName +
      '" loading="lazy"></a></div><div class="time"><span><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/offer/timer.svg" alt="time" loading="lazy"></span><span class="remaining-time" data-time="' +
      remainingTime +
      '"></span></div><div class="content"><div class="title"> <a href="' +
      offerPageUrl +
      '" target="_blank">' +
      updatedCardTitle +
      '</a></div><div class="description"> <a href="' +
      offerPageUrl +
      '" target="_blank">' +
      cardDescription +
      '</a></div><div class="button-group"> <a href="' +
      offerPageUrl +
      '" target="_blank" class="ic-btn" name="' + cardDescription + '">Know more</a><a href="' +
      offerCategoryPageUrl +
      '" class="ic-more" target="_blank">' +
      offerCategoryPageLinkText +
      '</a></div><div class="card-bottom"><div class="date-readtime"><span class="num-viewer">' +
      viewCount +
      '</span></div><div class="bookmark-share"><div class="offerfav bookmark" offer-id=' +
      liveSiteId +
      '></div><div class="share" data-url="' +
      offerPageUrl +
      '" data-title="' +
      cardTitle +
      '" data-text="check out this link"></div><div class="share-content"><div class="inner-content"><div class="share-header"><p>Share</p> <span class="close-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/close-orange.svg" alt="fb" loading="lazy"></span></div><ul class="share-link"><li><a href="https://api.whatsapp.com/send?url=' +
      window.location.host +
      offerPageUrl +
      "?&text=" +
      cardTitle +
      '" target="_blank"> <span class="n-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/whatsapp.svg" alt="whatsapp" loading="lazy"></span><span class="h-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/whatsapp-o.svg" alt="whatsapp" loading="lazy"></span></a></li><li><a href="https://www.facebook.com/sharer/sharer.php?u=' +
      window.location.host +
      offerPageUrl +
      "?&text=" +
      cardTitle +
      '" target="_blank"> <span class="n-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-black.svg" alt="fb" loading="lazy"></span><span class="h-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-orange.svg" alt="fb" loading="lazy"></span></a></li><li><a href="https://twitter.com/intent/tweet?url=' +
      window.location.host +
      offerPageUrl +
      "?&text=" +
      encodeURI(cardTitle) +
      '" target="_blank"> <span class="n-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-black.svg" alt="tw" loading="lazy"></span><span class="h-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-orange.svg" alt="tw" loading="lazy"></span></a></li><li><a href="https://www.linkedin.com/shareArticle?mini=true?url=' +
      window.location.host +
      offerPageUrl +
      "?&text=" +
      cardTitle +
      '" target="_blank"> <span class="n-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-black.svg" alt="ln" loading="lazy"></span><span class="h-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-orange.svg" alt="ln" loading="lazy"></span></a></li></ul><div class="youtube-text" style="display:none;"><input type="text" name="link" value="' +
      window.location.host +
      offerPageUrl +
      '"><span>Copy</span></div></div></div></div></div></div></div></div>';

    return html;
  }

  
    function replaceTagsWithH2(string) {
          // Remove existing HTML tags
      const strippedString = string.replace(/<[^>]+>/g, '');
      // Wrap the content with <h2> tags
      const replacedString = `<h2>${strippedString}</h2>`;
      return replacedString;
      }
  function getdefaultCardData(offerData){

    var defaultCardsIndex=[];
    var defaultCardsData=[];
    
    for(k=0;k<defaultCardsIndex.length;k++){
      defaultCardsData.push(offerData[defaultCardsIndex[k]]);
    }
    
    for (let index = 0; index < offerData.length; index++) {

      let OfferDataCat=offerData[index]["Category"].split(",");

      var isCatMatch=false;
      for(let j=0;j<OfferDataCat.length;j++){

        let str = OfferDataCat[j];
        let cat = str.split('/')[0] + '/' + str.split('/')[1];

        if(filterCardCat==cat){
          
          isCatMatch=true;
          
          if(defaultCardsIndex.indexOf(index)==-1){

            defaultCardsIndex.push(index);
            
          }
        }
      }   
  }

  for(let k=0;k<defaultCardsIndex.length;k++){
    defaultCardsData.push(offerData[defaultCardsIndex[k]]);
  }

  sortCards(defaultCardsData);
  
}


function generateOfferListItems(offerData) {
  let html = "",
    offerCardGroupCount = 6;
  for (let index = 0; index < offerData.length; index++) {
    if (index % offerCardGroupCount == 0) {
      if (index >= offerCardGroupCount)
        html += '<div class="offer-list hidden-card">';
      else html += '<div class="offer-list">';
    }

    
let OfferdescVar = `${offerData[index]["offerDesp1"]? offerData[index]["offerDesp1"] : ''}
${offerData[index]["offerDesp2"]? offerData[index]["offerDesp2"] : ''}
${offerData[index]["offerDesp3"]? offerData[index]["offerDesp3"] : ''}
${offerData[index]["offerDesp4"]? offerData[index]["offerDesp4"] : ''}`;


html += generateHTML(
  offerData[index]["offerImage"],
  offerData[index]["endDate"],
  offerData[index]["offerTitle"],
  OfferdescVar,
  offerData[index]["offerViews"],
  offerData[index]["brandName"],
  offerData[index]["brandLink"] ? offerData[index]["brandLink"] : "#",
  offerData[index]["pagePath"] ? offerData[index]["pagePath"] : "#",
  offerData[index]["categoryLink"]
    ? offerData[index]["categoryLink"]
    : "#",
  offerData[index]["categoryName"]
    ? "View " + offerData[index]["categoryName"] + " Offers"
    : "View Offers",
  offerData[index]["offerId"] ? offerData[index]["offerId"] : ""
);

    if (index % offerCardGroupCount == offerCardGroupCount - 1) {
      html += "</div>";
    }
  }
  // Data layers click event on cta
  //Display result
  if (html.length > 0) {
    $("#offerListWrapper").html(html);
    $(".filter-top .sort-tools").removeClass("disable-sorting");
    getRemainingTime();
    modifyPreviousLikedOffers();
  } else {
    $("#offerListWrapper").html('<div class="no-result"></div>');
    $(".filter-top .sort-tools").addClass("disable-sorting");
  }
  $("#offerListWrapper .button-group a.ic-btn").click(function (e) {
    dataLayer.push({
      event: "custom_event",
      eventCategory: "offer_zone",
      eventAction: "know_more",
      eventLabel: ($(this).attr("name").toLowerCase()).replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, '_'),
    });
  });
}
  
  
  function custom_sort_date(a, b) {
    return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
  }

  function sort_data(records, sortBy) {
    const rankedData = getOfferRankingRecords(records);
    const nonRankedData = getNonRankedData(records);
  
    switch (sortBy) {
      case "latest":
        nonRankedData.sort(custom_sort_date).reverse();
        break;
      case "oldest":
        nonRankedData.sort(custom_sort_date);
        break;
      case "viewed":
        nonRankedData.sort(custom_sort_view).reverse();
        break;
      default:
        console.log("Invalid sort option");
        return;
    }
  
    const combinedArr = [...rankedData, ...nonRankedData];
    return combinedArr;
  }

  function getNonRankedData(records) {
    const filteredRecords = records.filter(record => record.hasOwnProperty("offerRanking")&& !record.offerRanking);
    return filteredRecords;
  }
  function getOfferRankingRecords(records) {
    // Filter the records to only include those with the "offerRanking" property
    const filteredRecords = records.filter(record => record.hasOwnProperty("offerRanking")&& record.offerRanking);
    // Sort the filtered records in ascending order based on the value of "offerRanking"
    const sortedRecords = filteredRecords.sort((a, b) => a.offerRanking - b.offerRanking);
    return sortedRecords;
  }
  function custom_sort_view(a, b) {
    return a.offerViews - b.offerViews;
  }
  function custom_sort_like(a, b) {
    return new Date(a.Likes).getTime() - new Date(b.Likes).getTime();
  }

  function getRemainingTime() {
    $("span.remaining-time").each(function (element) {
      var thisItem = $(this);

      // Set the date we're counting down to

      // code changed 14/12/2020
      var countDownDate = moment($(this).attr("data-time")).valueOf();
      // end code changed 14/12/2020
      // Update the count down every 1 second
      var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        var timeRemains = "";
        if (days > 0) timeRemains += days + "d ";
        if (hours.toString().length == 1) hours = 0 + hours.toString();
        if (minutes.toString().length == 1) minutes = 0 + minutes.toString();
        if (seconds.toString().length == 1) seconds = 0 + seconds.toString();

        timeRemains += hours + "." + minutes + "." + seconds;
        thisItem.text(timeRemains);

        // If the count down is over, write some text
        if (distance < 0) {
          clearInterval(x);
          thisItem.text("EXPIRED");
        }
      }, 1000);
    });
  }
  var o,
    h,
    e = [],
    m = [];
  function modifyPreviousLikedOffers() {
    o = localStorage.getItem("OfferIdsFav");
    h = localStorage.getItem("HandpickedIdsFav");
    e = [];
    m = [];
    var hArry = [];
    if (typeof o != "undefined") {
      if (o != null && o != "") {
        var s = o.split(",");
        for (var k = 0; k < s.length; k++) {
          m.push(s[k]);
          e.push(s[k]);
        }
        for (var k = 0; k < m.length; k++) {
          $('.offerfav.bookmark[offer-id="' + m[k] + '"]').addClass("active");
          $('.offerfav.bookmark[offer-id="' + m[k] + '"]')
            .parent()
            .parent()
            .parent()
            .parent()
            .parent()
            .addClass("favouirite");
          $('.offerfav.bookmark[offer-id="' + m[k] + '"]').css({
            background:
              "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/like-icon.svg) no-repeat 0 0%",
          });
        }
      }
    }

    if (typeof h != "undefined") {
      var handp = [];
      if (h != null && h != "") {
        var s = h.split(",");
        for (var k = 0; k < s.length; k++) {
          handp.push(s[k]);
          //favID.push[element["offerId"]];
          e.push(s[k]);
        }
        for (var k = 0; k < m.length; k++) {
          $('.offerfav.bookmark[offer-id="' + handp[k] + '"]').addClass(
            "active"
          );
          $('.offerfav.bookmark[offer-id="' + handp[k] + '"]')
            .parent()
            .parent()
            .parent()
            .parent()
            .parent()
            .addClass("favouirite");
          $('.offerfav.bookmark[offer-id="' + handp[k] + '"]').css({
            background:
              "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/like-icon.svg) no-repeat 0 0%",
          });
        }
      }
    }
  }
  $(document).on(
    "click",
    ".filter-offer-section .offerfav.bookmark",
    function (f) {
      var c = $(this).attr("offer-id");
      if (!$(this).hasClass("active")) {
        $(this).addClass("active");
        $(this).css({
          background:
            "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/like-icon.svg) no-repeat 0 0%",
        });
        e.push(c);
        e = g(e);
        b();
      } else {
        var a = localStorage.OfferIdsFav.split(",");
        a = g(a);
        $(this).removeClass("active");
        $(this).css({
          background:
            "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/bookmark.svg) no-repeat 0 0%",
        });
        a.splice($.inArray(c, a), 1);
        e = g(a);
        b();
      }
    }
  );

  function b() {
    localStorage.setItem("OfferIdsFav", e);
  }

  function g(c) {
    var a = [];
    $.each(c, function (f, h) {
      if ($.inArray(h, a) == -1) {
        a.push(h);
      }
    });
    return a;
  }

  function p(a) {
    return a.filter(function (h, f, c) {
      return f == c.indexOf(h);
    });
  }
  //favourite icon click event ends
  function favourite() {
    //favourite icon event
    var o = localStorage.getItem("OfferIdsFav");
    var e = [];
    var m = [];
    if (typeof o != "undefined") {
      if (o != null && o != "") {
        var s = o.split(",");
        for (var k = 0; k < s.length; k++) {
          m.push(s[k]);
          e.push(s[k]);
        }
        for (var k = 0; k < m.length; k++) {
          $('.offerfav.bookmark[offer-id="' + m[k] + '"]').addClass("active");
          $('.offerfav.bookmark[offer-id="' + m[k] + '"]')
            .parent()
            .parent()
            .parent()
            .parent()
            .parent()
            .addClass("favouirite");
          $('.offerfav.bookmark[offer-id="' + m[k] + '"]').css({
            background:
              "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/like-icon.svg) no-repeat 0 0%",
          });
        }
      }
    }
  }

  function uniqueData(array, property) {
    var unique = {};
    var distinct = [];
    for (var i in array) {
      if (typeof unique[array[i][property]] == "undefined") {
        distinct.push(array[i]);
      }
      unique[array[i][property]] = 0;
    }
    return distinct;
  }
  if (searchPath) {
    var url =
      "/content/icicibank.offersearch.json?searchPath=" +
      searchPath +
      "&start=0";
    $.ajax({
      url: url,
      success: function (data) {
        if (data && data.cards) {
          offerData = data;
          for (var i = 0; i < offerData["cards"].length; i++) {
            if (offerData["cards"][i].PopularOffersShow == 1) {
              popularOfferData.PopularOffers.push(offerData["cards"][i]);
            }
          }
          // load all CategoryOffers from offerData json on document ready
          if(filterCardCat===undefined){
            sortCards(offerData["cards"]);
          }
          else{
            getdefaultCardData(offerData["cards"]);
          }
          
        }
      },
      error: function (jqXHR, statusText, errorThrown) {
        console.log(errorThrown);
      },
    });
  }
  let tempArray = [];
  let nfilters = [];

  //Filter CategoryOffers from search box input
  $(".filter-offer-section .filter-content .search-box-area input").focus(
    function () {
      $(".filter-content .search-box-area input").val("");
    }
  );
  $(".filter-offer-section .filter-content .search-box-area input").keyup(
    function () {
      var inputText = $(this)[0].value;
      if (inputText.length > 0) {
        var titleArray = searchItems(
          offerData["cards"],
          "offerTitle",
          inputText
        );
        var descArray = searchItems(
          offerData["cards"],
          "offerDesp1",
          inputText
        );
        var brandArray = searchItems(
          offerData["cards"],
          "brandName",
          inputText
        );
        var resultArray = titleArray.concat(descArray, brandArray);
        // code change 13/01/2020
        resultArray = uniqueData(resultArray, "offerId");
        // end code change 13/01/2020
        sortCards(resultArray);
      } else sortCards(offerData["cards"]);
    }
  );

  //Filter CategoryOffers form sidebar selection category
  $(".filter-offer-section .sb-categories #all").click(function () {
    renderOfferCards("all");
  });
  if ($(window).width() < 991) {
    $(".filter-offer-section .sb-categories #all").attr("target", "_blank");
  }
  // offer-type chanage event filter
  /* Code update start 05/03/2021 */
  $(".filter-offer-section input[name='offer-type']").click(function () {
    if ($(this).hasClass("current-active")) {
      return false;
    }
    $("input[name='offer-type']").removeClass("current-active");
    $(this).addClass("current-active");
    if (this.value == "popular_Offers") {
      sortCards(popularOfferData["PopularOffers"]);
    } else if (this.value == "liked") {
      tempArray = [];
      var o = localStorage.getItem("OfferIdsFav");
      var handp = localStorage.getItem("HandpickedIdsFav");
      var e = [];
      var m = [];
      var h = [];
      var favID = [];

      if (typeof o != "undefined") {
        if (o != null && o != "") {
          var s = o.split(",");
          for (var k = 0; k < s.length; k++) {
            m.push(s[k]);
            e.push(s[k]);
          }
          for (var k = 0; k < m.length; k++) {
            // for Normal offer
            if (typeof offerData["cards"] != "undefined") {
              if (offerData["cards"] != null && offerData["cards"] != "") {
                for (let ind = 0; ind < offerData["cards"].length; ind++) {
                  var element = offerData["cards"][ind];
                  if (element["offerId"] == m[k]) {
                    tempArray.push(element);
                  }
                }
              }
            }
          }
        }
      }
      //  Handpicked local storage liked by you strat
      if (typeof handp != "undefined") {
        if (handp != null && handp != "") {
          var splt = handp.split(",");
          for (var k = 0; k < splt.length; k++) {
            h.push(splt[k]);
            e.push(splt[k]);
          }
          for (var k = 0; k < h.length; k++) {
            if (typeof popularOfferData["PopularOffers"] != "undefined") {
              if (
                popularOfferData["PopularOffers"] != null &&
                popularOfferData["PopularOffers"] != ""
              ) {
                for (
                  let index = 0;
                  index < popularOfferData["PopularOffers"].length;
                  index++
                ) {
                  var element = popularOfferData["PopularOffers"][index];
                  if (element["offerId"] == h[k]) {
                    favID.push[element["offerId"]];
                    tempArray.push(element);
                  }
                }
              }
            }
            // for Normal offer
            if (typeof offerData["cards"] != "undefined") {
              if (offerData["cards"] != null && offerData["cards"] != "") {
                for (let ind = 0; ind < offerData["cards"].length; ind++) {
                  var element = offerData["cards"][ind];
                  if (element["offerId"] == h[k]) {
                    favID.push[element["offerId"]];
                    tempArray.push(element);
                  }
                }
              }
            }
          }
        }
      }
      //  Handpicked local storage liked by you end
      let uniqueTempArray = [...new Set(tempArray)];
      sortCards(uniqueTempArray);
      favourite();
    } else {
      renderOfferCards(this.value);
    }
  });
  /* Code update end 05/03/2021 */

  //Filter CategoryOffers form sidebar selection sub-category
  $(document).on(
    "click",
    ".filter-offer-section .sidebar-content .category-checkbox.checkbox-list input, .filter-offer-section .sidebar-content .brand-checkbox.checkbox-list input",
    function () {
      $(".filter-offer-section .filter-content .filter-cat").show();
      $(".filter-offer-section .filter-content .filter-cat").addClass("active");
      if ($(window).width() > 991) {
        createFilterArrayForOffers();
      }
    }
  );
  $(document).on(
    "click",
    ".filter-offer-section .sidebar-content .paymentgateway.checkbox-list input",
    function (event) {
      var redLink = $(this).val();
      window.open(redLink);
      event.preventDefault();
    }
  );
  // code change 30-11-2020
  $(document).on(
    "click",
    ".filter-offer-section .sidebar-content .checkbox-popup-list input",
    function () {
      $(".filter-content .filter-cat").show();
      $(".filter-content .filter-cat").addClass("active");
    }
  );

  $(".filter-offer-section .brand-poupup-bottom .apply").click(function () {
    createFilterArrayForOffers();
    $("html, body").animate({
      scrollTop: $("#filterSection").offset().top - $("header").height(),
    });
  });
  // end code change 30-11-2020
  function createFilterArrayForOffers() {
    nfilters = [];
    $.each(
      $(".filter-offer-section .sidebar-content .checkbox-list input:checked"),
      function () {
        if (nfilters.indexOf($(this).val()) == -1) nfilters.push($(this).val());
      }
    );
    $.each(
      $(
        ".filter-offer-section .sidebar-content .checkbox-popup-list input:checked"
      ),
      function () {
        if (nfilters.indexOf($(this).val()) == -1) nfilters.push($(this).val());
      }
    );
    if (nfilters.length == 0) {
      if ($(window).width() <= 991) {
        $(".feature-offer-section").show();
        $(".announcement-section").show();
        $(".filter-inner-container").removeClass("active");
        $(".filter-top").removeClass("filter-selected");
        $(".filter-top").removeClass("filter-sticky");
      }
      $(".filter-content .filter-cat").hide();
      $(".filter-content .filter-cat").removeClass("active");
      sortCards(offerData["cards"]);
      generateFilterTags("#offerFilterTags", "");
    } else {
      generateFilterTags("#offerFilterTags", nfilters);
      renderOfferCards();
    }
    $(".offer-getDirection").click(function () {
      let filterIndex= (+$(this).attr("index")) + 1;
      dataLayer.push({
          'event': 'custom_event',
          'eventCategory': 'CB_nearby_offers',
          'eventAction': 'get_direction_banner_click',
          'eventLabel': filterIndex + "_" + $(this).attr("name")
      });
  });

  }

  function renderOfferCards(filterId) {
    tempArray = [];
    if (filterId == "all") {
      sortCards(offerData["cards"]);
    } else {
      
      for (let index = 0; index < offerData["cards"].length; index++) {
        var element = offerData["cards"][index];
        if (
          element["Category"] == filterId ||
          element["Type"].replace(/ /g, "_").toLowerCase() == filterId
        ) {
          tempArray.push(element);
        }
        if (
          nfilters.indexOf(element["brandId"]) != -1 ||
          multiTagCategoryCheck(element["Category"])
        ) {
          tempArray.push(element);
        }
      }
      sortCards(tempArray);
    }
  }

  function multiTagCategoryCheck(catergories) {
    var categoryExist = false,
      catArr = catergories.split(",");

    for (let i = 0, len = catArr.length; i < len; i++) {
      if (nfilters.indexOf(catArr[i]) != -1) {
        categoryExist = true;
        break;
      }
    }
    return categoryExist;
  }

  /**
   *Filter close remove from list
   */
  $(document).on("click", ".filter-offer-section .filter-cat img", function () {
    var removefilterId = $(this).closest("span").attr("data-filter");
    $("[value=" + removefilterId + "]").prop("checked", false);
    $("[value=" + removefilterId + "]")
      .closest("li")
      .removeClass("active");
    createFilterArrayForOffers();
  });
  $(document).on(
    "click",
    ".filter-offer-section .filter-cat .filter-clear",
    function () {
      $(".sidebar-content .checkbox-list input").prop("checked", false);
      $(".sidebar-content .checkbox-list input")
        .closest("li")
        .removeClass("active");
      createFilterArrayForOffers();
    }
  );

  // code change 18-12-2020
  $(".filter-offer-section .sidebar-header .close").click(function () {
    $(".filter-content .filter-cat").hide();
    $(".filter-content .filter-cat").removeClass("active");
    $(".sidebar-content .checkbox-list input").prop("checked", false);
    $(".sidebar-content .checkbox-list input")
      .closest("li")
      .removeClass("active");
    $(this).parent().removeClass("active");
  });
  // end code change 18-12-2020
  // code change 30-11-2020
  $(".filter-offer-section .sidebar-footer .apply").click(function () {
    setTimeout(function () {
      createFilterArrayForOffers();
    }, 500);
  });
  // end code change 30-11-2020

  //Sorting CategoryOffers click event
  $(".filter-offer-section .sort-dropdown .dropdown-inner li").click(
    function () {
      if (tempArray.length > 0) sortCards(tempArray);
      else sortCards(offerData["cards"]);
    }
  );

  //Sorting cards functions provide sort Id
  function sortCards(dataArray) {
    var sortId = $(".sort-dropdown .dropdown-inner li.active")?.attr("id");
    
    switch (sortId) {
      case "latest":
        if (rankLatest === "true") {
          dataArray = sort_data(dataArray, "latest");
        } else {
          dataArray.sort(custom_sort_date).reverse();
        }
        break;
        
      case "oldest":
        if (rankOldest === "true") {
          dataArray = sort_data(dataArray, "oldest");
        } else {
          dataArray.sort(custom_sort_date);
        }
        break;
        
      case "viewed":
        if (rankViewed === "true") {
          dataArray = sort_data(dataArray, "viewed");
        } else {
          dataArray.sort(custom_sort_view).reverse();
        }
        break;
        
      case "liked":
        dataArray.sort(custom_sort_like).reverse();
        console.log('liked ');
        break;
        
      default:
        break;
    }
    
    generateOfferListItems(dataArray);
  }
});
$(document).ready(function () {
    var itemBrandArray={"brands":[]};
    var brandSearchPath=$("#filterSection").attr('data-brandSearchPath');
    var url='/content/icicibank.brandsearch.json?searchPath='+brandSearchPath+'&start=0';
   if(brandSearchPath){
    $.ajax( 
      {
        url: url,
        success: function (data) {
          if(data&&data.brands){itemBrandArray=data;}
          generatePopupListItems(itemBrandArray.brands);
        },
        error: function (jqXHR, statusText, errorThrown) {
        console.log(errorThrown);
        }
      });
   }
  
    /* Search Start*/
    $('.filter-offer-section .sidebar-content .sb-brands .search-box-area input').focus(function(){
      $('.sidebar-content .sb-brands .brand-poupup').show();
      generatePopupListItems(itemBrandArray.brands);
    });
    $(".filter-offer-section .sb-brands .more-link").click(function () {
      generatePopupListItems(itemBrandArray.brands);
    });
    $('.filter-offer-section .sidebar-content .sb-brands .search-box-area input').keyup(function(){
      var inputText = $(this)[0].value;
      if (inputText.length > 0)
        generatePopupListItems(searchItems(itemBrandArray.brands, 'BrandTitle', inputText));
      else
        generatePopupListItems(itemBrandArray.brands);
    });
  });
  
  function generatePopupListItems(requestsData) {
    let html = "", mostPopularArray = [], sectionArray = [];
  if(requestsData){
    for (let index = 0; index < requestsData.length; index++)
    {
      const element = requestsData[index];
      if(element["PopularBrand"]&&element["PopularBrand"].toLowerCase() == 'true')
      {
        mostPopularArray.push(element);
      }
    }
  
    /* 18/12/2020 code update */
    if(mostPopularArray.length > 0)
    {
      var popularBrandHtml='';
     

      html += '<div class="list list-title"><h4>POPULAR</h4></div>';
      for (let index = 0; index < mostPopularArray.length; index++) {
        popularBrandHtml+='<label id="checkboxID'+(index+1)+'" class="checkbox-list brand-checkbox">'+mostPopularArray[index].BrandTitle+'<input type="checkbox" value="'+mostPopularArray[index].BrandId+'"><span class="checkmark"></span></label>';
        html += generateBrandHTML(mostPopularArray[index]["BrandTitle"],mostPopularArray[index]["BrandId"]);
      }
      $("#popular-brands-filter").empty().append(popularBrandHtml);
    }
  
    if(requestsData.length > 0)
    {
      requestsData.sort(compare);
      for (let index = 0; index < requestsData.length; index++) {
        if(requestsData[index]["BrandId"]){
          var secTitle = requestsData[index]["BrandTitle"]?requestsData[index]["BrandTitle"].charAt(0).toUpperCase():'';
          if(sectionArray.indexOf(secTitle) == -1)
          {
            sectionArray.push(secTitle);
            html += '<div class="list list-title"><h4>'+secTitle+'</h4></div>';
          }
          html += generateBrandHTML(requestsData[index]["BrandTitle"],requestsData[index]["BrandId"]);
        }
      }
    }
  }
    //Display result
    $('#brandListWrapper').html(html);
  
    $('.filter-offer-section .brand-poupup .brand-nav li').removeClass('ln-disabled');
    $.each($(".brand-poupup .brand-nav li"), function(){
      if($(this).text()&&sectionArray.indexOf($(this).text().toUpperCase()) == -1)
      {
        $(this).addClass('ln-disabled');
      }
    });
  
    let timeout = null;
    // code change 18/12/2020
    $(document).on("click", ".filter-offer-section .brand-poupup .brand-nav li", function () {
      if(timeout != null){
        clearTimeout(timeout);
      }
      var selectedChar = $(this).text();
      var flag = false;
      $('.brand-poupup .brand-poupup-middle .list').addClass('ln-disabled');
      $('.brand-poupup .brand-poupup-middle .list h4').removeClass('ln-active');
  
      $.each($(".brand-poupup .brand-poupup-middle .list"), function(){
        if($(this).text()&&$(this).text().toUpperCase() == selectedChar)
        {
          flag = true;
        }
        if($(this).text()&&$(this).text().toUpperCase().charAt(0) == selectedChar.toUpperCase() && flag)
        {
          $(this).removeClass('ln-disabled');
  
          $(this).find('h4').addClass('ln-active');
        }
      });
      timeout = setTimeout(function(){
        $(".brand-poupup-middle").scrollCenterORI(".ln-active",500);
      }, 200)
    });
    //end code change 18/12/2020
  }
  
  // code change 14/12/2020
  function generateBrandHTML(cardTitle,cardBrandId) {
    var checkBoxValue = cardBrandId;
    var html = '<div class="list"><label class="checkbox-list checkbox-popup-list">'+cardTitle+'<input type="checkbox" value="'+checkBoxValue+'"><span class="checkmark"></span></label></div>';
    return html;
  }
  // end code change 30-11-2020
  
 
  function compare(a, b) {
    if (a.BrandTitle.toUpperCase() < b.BrandTitle.toUpperCase()){
        return -1;
    }
    if (a.BrandTitle.toUpperCase() > b.BrandTitle.toUpperCase()){
        return 1;
    }
    return 0;
  }
if ($(".siteCapture").length > 0 && $(document).width() > 980) {
    $(".siteCaptureContent").css("display", "block");
    $(".siteCaptureContent #popup-modal-background").addClass("active");
    $(".siteCaptureContent #popup-modal-content").addClass("active")
}
$(".siteCapture .siteCaptureContent div#modal-close").click(function() {
    $(".siteCaptureContent #popup-modal-content,.siteCaptureContent #popup-modal-background").remove()
});
if ($(document).width() < 980 && $(".mob_siteCapture").length > 0) {
    $(".mob_siteCapture").css("display", "block");
    $(".mob_siteCapture #popup-modal-background").addClass("active");
    $(".mob_siteCapture #popup-modal-content").addClass("active")
}
$(".mob_siteCapture #popup-modal-content div#modal-close").click(function() {
    $(".mob_siteCapture #popup-modal-content,.mob_siteCapture #popup-modal-background").remove()
});
(function () {
  $(".additional-content-slider").slick({
    dots: !0,
    arrows: !0,
    infinite: !0,
    autoplay: !0,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      { breakpoint: 991, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 575, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  });

  $(".additional-content-tab .nav-tabs li a").on("click", function () {
    $(".additional-content-wrapper .slick-slider").slick("refresh");
  });
})();

$(document).ready(function () {
  if ($(".additionalcontent .section-inner .section-title").is(":empty")) {
    $(".additionalcontent .section-inner .section-title").remove();
  }
});

$(document).ready(function () {
  var videoJson = '/content/icicibank.videosdata.json';
var videoId = $(".related-video").attr('data-videoid');
var videoSubCategory = $(".related-video").attr('data-videosubcategory');
var counter = 0;
if (typeof videoId != "undefined" && typeof videoSubCategory != "undefined") {
	if (videoId != null && videoId != "" && videoSubCategory != null && videoSubCategory != "") {
		$.getJSON(videoJson, function (resultJSON) {
			var videoData = resultJSON.Videodata;

			for (let index = 0; index < videoData.length; index++) {

				var videotitle = videoData[index]["videotitle"];
				var videoid = videoData[index]["videoid"];
				var type = videoData[index]["type"];
				var category = videoData[index]["category"];
				var subcategory = videoData[index]["subcategory"];
				var thumbnailimage = videoData[index]["thumbnailimage"];
				var referencelink = videoData[index]["referencelink"];
				var detailpage = videoData[index]["detailpagelink"];
				var descriptionone = videoData[index]["descriptionone"];
				var descriptiontwo = videoData[index]["descriptiontwo"];
				var descriptionthree = videoData[index]["descriptionthree"];
				var cta1 = videoData[index]["cta1"];
				var cta1link = videoData[index]["cta1link"];
				var cta2 = videoData[index]["cta2"];
				var cta2link = videoData[index]["cta2link"];
				var cta3 = videoData[index]["cta3"];
				var cta3link = videoData[index]["cta3link"];
				var views = videoData[index]["views"];
				var likes = videoData[index]["likes"];
				var publishdate = videoData[index]["publishdate"];

				if (typeof (videotitle) != 'undefined') {
					if (videotitle != "") {
						videotitle = videotitle;
					}
				} else {
					videotitle = "";
				}

				if (typeof (videoid) != 'undefined') {
					if (videoid != "") {
						videoid = videoid;
					}
				} else {
					videoid = "";
				}

				if (typeof (type) != 'undefined') {
					if (type != "") {
						type = type;
					}
				} else {
					type = "";
				}

				if (typeof (category) != 'undefined') {
					if (category != "") {
						category = category;
					}
				} else {
					category = "";
				}

				if (typeof (subcategory) != 'undefined') {
					if (subcategory != "") {
						subcategory = subcategory;
					}
				} else {
					subcategory = "";
				}

				if (typeof (thumbnailimage) != 'undefined') {
					if (thumbnailimage != "") {
						thumbnailimage = thumbnailimage;
					}
				} else {
					thumbnailimage = "";
				}

				if (typeof (referencelink) != 'undefined') {
					if (referencelink != "") {
						referencelink = '<a class="pdf" href="' + referencelink + '" target="_blank"></a>';
					}
				} else {
					referencelink = "";
				}

				if (typeof (detailpage) != 'undefined') {
					if (detailpage != "") {
						detailpage = detailpage;
					}
				} else {
					detailpage = "";
				}

				if (typeof (views) != 'undefined') {
					if (views != "") {
						views = '<span class="num-viewer">' + intToString(views) + ' </span>';
					}
				} else {
					views = "0";
				}

				if (typeof (likes) != 'undefined') {
					if (likes != "") {
						likes = '<span class="like">' + intToString(likes) + ' Likes </span>';
					}
				} else {
					likes = "";
				}

				if (typeof (publishdate) != 'undefined') {
					if (publishdate != "") {
						publishdate = '<span class="date">' + getTimePassed(publishdate) + '</span>';
					}
				} else {
					publishdate = "";
				}

				
				if (videoId == videoid) {
					function getPublishDate() {
						return videoData[index]["publishdate"].split("T")[0];
					  }
					$(".top-content-left").append('<div class="tag-list"><span>' + category + '</span><span>' + subcategory + '</span></div><h1>' + videotitle + '</h1><div class="date-readtime">' + publishdate + '' + views + '' + likes + '</div>');

					$(".top-content-right").append('<div class="bookmark-share">' + referencelink + '<div class="bookmark" video-id="' + videoid + '"></div><div class="share"></div><div class="share-content"><div class="inner-content"><div class="share-header"><p>Share</p><span class="close-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/close-orange.svg" alt="fb" /></a></span></div><ul class="share-link"><li><a href="https://api.whatsapp.com/send?url=' + window.location.host + detailpage + '&text=' + videotitle + '" target="_blank" tabindex="0"><span class="n-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp.svg" alt="whatsapp"></span> <span class="h-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp-o.svg" alt="whatsapp"> </span></a></li><li><a href="https://www.facebook.com/sharer/sharer.php?u=' + window.location.host + detailpage + '&text=' + videotitle + '" target="_blank" tabindex="0"> <span class="n-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-black.svg" alt="fb"></span><span class="h-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-orange.svg"alt="fb"></span></a></li><li><a href="https://twitter.com/intent/tweet?url=' + window.location.host + detailpage + '&text=' + encodeURI(videotitle) + '" target="_blank" tabindex="0"><span class="n-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-black.svg" alt="tw"></span><span class="h-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-orange.svg" alt="tw"></span></a></li><li><a href="https://www.linkedin.com/shareArticle?mini=true?url=' + window.location.host + detailpage + '&text=' + videotitle + '" target="_blank" tabindex="0"><span class="n-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-black.svg" alt="ln"></span><span class="h-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-orange.svg" alt="ln"></span></a></li></ul><div class="youtube-text"><input type="text"  name="link" id="video-detail" value="https://www.youtube.com/watch?v=' + videoid + '" /><span id="btn-video-detail" onclick="copyCode(\'video-detail\',\'btn-video-detail\',\'input\')">Copy</span></div></div></div></div>');

					if (typeof (descriptionone) != 'undefined') {
						if (descriptionone != "") {
							descriptionone = descriptionone;
						}
					} else {
						descriptionone = "";
					}

					if (typeof (descriptiontwo) != 'undefined') {
						if (descriptiontwo != "") {
							descriptiontwo = descriptiontwo;
						}
					} else {
						descriptiontwo = "";
					}

					if (typeof (descriptionthree) != 'undefined') {
						if (descriptionthree != "") {
							descriptionthree = descriptionthree;
						}
					} else {
						descriptionthree = "";
					}

					$(".vd-description .bottom-content .desc").append('<p>' + descriptionone + '</p><div class="read-more-less"><p>' + descriptiontwo + '</p><p>' + descriptionthree + '</p></div>');

					if (typeof (cta1) != 'undefined') {
						if (cta1 != "") {
							cta1 = cta1;
						}
					} else {
						cta1 = "";
					}

					if (typeof (cta2) != 'undefined') {
						if (cta2 != "") {
							cta2 = cta2;
						}
					} else {
						cta2 = "";
					}

					if (typeof (cta3) != 'undefined') {
						if (cta3 != "") {
							cta3 = cta3;
						}
					} else {
						cta3 = "";
					}

					if (typeof (cta1link) != 'undefined') {
						if (cta1link != "") {
							$(".add_button").append('<a target="_blank" href="' + cta1link + '" class="ic-btn">' + cta1 + '</a>');
						}
					}

					if (typeof (cta2link) != 'undefined') {
						if (cta2link != "") {
							$(".add_button").append('<a target="_blank" href="' + cta2link + '" class="ic-more" >' + cta2 + '</a>');
						}
					}

					if (typeof (cta3link) != 'undefined') {
						if (cta3link != "") {
							$(".add_button").append('<a target="_blank" href="' + cta3link + '" class="ic-btn">' + cta3 + '</a>');
						}
					}
				}

				//Related Video Start
				//if (videoSubCategory == videoData[index]["category"]) {
				if (videoSubCategory == videoData[index]["subcategory"]) {
					
					if (counter < 4) {
						if (videoId != videoData[index]["videoid"]) {
							counter++;
							
							var x = "<div class='video-card'><div class='card-inner'><div class='media'><img src='" + thumbnailimage + "' alt='video'/><a target='_blank' href='" + detailpage + "' class='play-btn'></a></div><div class='content'><h3><a target='_blank' href='" + detailpage + "' class='card-title'>" + videotitle + "</a></h3><div class='card-bottom'><div class='date-readtime'><span class='date'>" + publishdate + "</span>" + views + "</div><div class='bookmark-share'>" + referencelink + "<div class='bookmark' video-id='" + videoid + "'></div><div class='share'></div><div class='share-content'><div class='inner-content'><div class='share-header'><p>Share</p><span class='close-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/close-orange.svg' alt='fb' /></a></span></div><ul class='share-link'><li><a href='https://api.whatsapp.com/send?url=" + window.location.host + detailpage + "&text=" + videotitle + "' target='_blank' tabindex='0'><span class='n-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp.svg' alt='whatsapp'></span> <span class='h-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp-o.svg' alt='whatsapp'> </span></a></li><li><a href='https://www.facebook.com/sharer/sharer.php?u=" + window.location.host + detailpage + "&text=" + videotitle + "' target='_blank' tabindex='0'> <span class='n-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-black.svg' alt='fb'></span><span class='h-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-orange.svg'alt='fb'></span></a></li><li><a href='https://twitter.com/intent/tweet?url=" + window.location.host + detailpage + "&text=" + encodeURI(videotitle) + "' target='_blank' tabindex='0'><span class='n-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-black.svg' alt='tw'></span><span class='h-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-orange.svg' alt='tw'></span></a></li><li><a href='https://www.linkedin.com/shareArticle?mini=true?url=" + window.location.host + detailpage + "&text=" + videotitle + "' target='_blank' tabindex='0'><span class='n-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-black.svg' alt='ln'></span><span class='h-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-orange.svg' alt='ln'></span></a></li></ul><div class='youtube-text'><input type='text' id='related-video"+index+"' name='link' value='https://www.youtube.com/watch?v=" + videoid + "' /><span id='btn-related-video"+index+"' onclick=\"copyCode('related-video"+index+"','btn-related-video"+index+"','input')\">Copy</span></div></div></div></div></div></div></div></div>";
							$(".related-video-inner").append(x);
						}
					}
				}

			}

			// related video end

			//Share link starts here
			//  commented to fix share click issue in amp

			$("body").mouseup(function () {
				$(".share-content").removeClass("active");
			});
			//Share link starts here

			//Copy link starts here
			//Copy link starts here

			//favourite icon click event starts
			var o = localStorage.getItem("videoIdsFav");
			var e = [];
			var m = [];
			if (typeof o != "undefined") {
				if (o != null && o != "") {
					var s = o.split(",");
					for (var k = 0; k < s.length; k++) {
						m.push(s[k]);
						e.push(s[k]);
					}
					for (var k = 0; k < m.length; k++) {
						$('.bookmark[video-id="' + m[k] + '"]').addClass("active");
						$('.bookmark[video-id="' + m[k] + '"]').css({
							background: "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/like-icon.svg) no-repeat 0 0%"
						});
					}
				}
			}
			$(document).on("click", ".bookmark", function (f) {
				
				var c = $(this).attr("video-id");
				if (!$(this).hasClass("active")) {
					$(this).addClass("active");
					$(this).css({
						background: "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/like-icon.svg) no-repeat 0 0%"
					});
					e.push(c);
					e = g(e);
					b();
				} else {
					var a = localStorage.getItem('videoIdsFav')?localStorage.getItem('videoIdsFav').split(","):[];
					a = g(a);
					$(this).removeClass("active");
					$(this).css({
						background: "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/bookmark-orange.png) no-repeat 0 0%"
					});
					a.splice($.inArray(c, a), 1);
					e = g(a);
					b();
				}
			});

			function b() {
				localStorage.setItem("videoIdsFav", e);
			}

			function g(c) {
				var a = [];
				$.each(c, function (f, h) {
					if ($.inArray(h, a) == -1) {
						a.push(h);
					}
				});
				return a;
			}

			function p(a) {
				return a.filter(function (h, f, c) {
					return f == c.indexOf(h);
				});
			}
			//favourite icon click event ends
			function intToString(value) {
				if (!value) {
					return 0;
				  }

				if (value && value.length <= 3)
					return value;

				var suffixes = ["", "K", "M", "B", "T"];
				var suffixNum = Math.floor(("" + value).length / 3);
				var shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(2));
				if (shortValue % 1 != 0) {
					shortValue = shortValue.toFixed(1);
				}
				return shortValue + suffixes[suffixNum];
			}

			function getTimePassed(publishDate) {
				// Set the date we're counting down to
				var countDownDate = new Date(publishDate).getTime();
				var now = new Date().getTime();
				var distance = now - countDownDate;

				// Time calculations for days, hours, minutes and seconds
				var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
				var days = Math.floor(distance / (1000 * 60 * 60 * 24));
				var months = Math.floor(days / 31);
				var years = Math.floor(months / 12);

				var message = '';
				if (years == 1)
					message = years + ' Year Ago';
				else if (years > 0)
					message = years + ' Years Ago';
				else if (months == 1)
					message = months + ' Month Ago';
				else if (months > 0)
					message = months + ' Months Ago';
				else if (days == 1)
					message = days + ' Day Ago';
				else if (days > 1 && days < 7)
					message = days + ' Days Ago';
				else if (days >= 7) {
					var weeks = Math.round(days / 7);
					if (weeks == 1)
						message = weeks + ' Week Ago';
					else
						message = weeks + ' Weeks Ago';
				} else if (hours == 1)
					message = hours + ' Hour Ago';
				else if (hours > 0)
					message = hours + ' Hours Ago';
				else
					message = minutes + ' Minutes Ago';

				return message
			}
		});

	}
}
  /* looking-for-slider */
  if ($(".looking-for-slider").length > 0) {
    $(".looking-for-slider")
      .not(".slick-initialized")
      .slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        variableWidth: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              infinite: true,
            },
          },
        ],
      });
  }

  $(".read-more-less").hide();
  $(".bottom-content .ic-more").click(function () {
    $(".read-more-less").slideToggle();
    var text = $(this).text();
    $(this).text(text == "Read more" ? "Read less" : "Read more");
  });
});

function initVideoSlick() {
	if ($(window).width() > 560) {
	  if ($(".video-card-m-slider").hasClass("slick-initialized")) {
		$(".video-card-m-slider").slick("unslick");
	  }
	  return true;
	}
  
	$(".video-card-m-slider").not(".slick-initialized").slick({
	  dots: true,
	  arrows: false,
	  infinite: true,
	  centerMode: true,
	  autoplay: false,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  centerPadding: "15px",
	});
  }
$(document).ready(function () {
	
	initVideoSlick();
	$(".sort-dropdown li:first").addClass("active");
	$(".sidebar-content ul li:first").addClass("active");
  
	$(".feature-video-inner .left-content .card-inner").click(function () {
	  $(this).addClass("hide");
	  $(".feature-video-inner .left-content .iframe-video").removeClass("hide");
	  var symbol = $(".iframe-video iframe")[0].src.indexOf("?") > -1 ? "&" : "?";
	  $(".iframe-video iframe")[0].src += symbol + "autoplay=1";
	});
    $(".feature-video-section.orange-hub-section .feature-video-inner .left-content .card-inner").off("click"); // to remove click from full card
	{
	  $(".filter-video-section .filter-top .filter-icon").click(function () {
		$(".announcement-section").hide();
		$(".feature-video-inner").hide();
		$(".filter-inner-container").addClass("active");
		$(".filter-cat").show();
		if (!$(".filter-top").hasClass("filter-sticky")) {
		  $(".iplay-video-page.search-container").addClass("filter-sticky");
		  $(".filter-top").addClass("filter-sticky");
		}
		$(".filter-top").addClass("filter-selected");
		$(".sidebar-content").addClass("active");
		$("body").addClass("no-scroll");
		$(".filter-cat").addClass("active");
	  });
	  $(".filter-video-section .sort-tools .title").click(function () {
		$(".sort-dropdown .dropdown-wrapper").toggle("show");
	  });
  
	  $(document).on("click", ".filter-video-section .filter-cat .filter-clear", function () {
		$(".feature-video-inner").show();
		$(".announcement-section").show();
		$(".filter-inner-container").removeClass("active");
		$(".filter-top").removeClass("filter-selected");
		$(".filter-top").removeClass("filter-sticky");
		$(".iplay-video-page.search-container").removeClass("filter-sticky");
		$(".filter-cat").hide();
	  });
	  /** 23/02/2021 start **/
	  $(".filter-video-section .dropdown-list").mCustomScrollbar();
	  /** 23/02/2021 end **/
	}
  
	/**
	 * Scroll Sticky
	 */
	$(window).bind("scroll", function () {
	  if ($(".filter-top").hasClass("filter-selected")) {
		return;
	  }
	  if($(".filter-section.filter-video-section").length ==0){
		  return;
	  }
	  var topPosition = 0;
	  if ($(".filter-section.filter-video-section").length > 0){
		topPosition += $(".filter-section.filter-video-section").position().top;
	  }
	 
  
	  if (topPosition <= 0) topPosition = 100;
  
	  if ($(window).width() < 991) {
		if ($(window).scrollTop() > topPosition) {
		  $(".filter-top").addClass("filter-sticky");
		  $(".iplay-video-page.search-container").addClass("filter-sticky");
		} else {
		  $(".filter-top").removeClass("filter-sticky");
		  $(".iplay-video-page.search-container").removeClass("filter-sticky");
		}
	  } else if ($(window).width() > 991) {
		$(".filter-top").removeClass("filter-sticky");
		$(".iplay-video-page.search-container").removeClass("filter-sticky");
	  }
  
	  //Desktop Sticky
	  if ($(window).width() > 991) {
		if ($(window).scrollTop() > topPosition) {
		  $(".filterVideo.sidebar-content").addClass("sticky-sidebar");
		  $(".filterVideo.filter-inner-container").addClass("sticky-enable");
		} else {
		  $(".filterVideo.sidebar-content").removeClass("sticky-sidebar");
		  $(".filterVideo.filter-inner-container").removeClass("sticky-enable");
		}
  
		$(".sidebar-content").removeClass("disable-sticky");
		removeStickySidebar(".looking-for-section");
		removeStickySidebar(".smart-way-section");
		removeStickySidebar(".footer");
	  }
  
	  //Lazy Loading Effect
	  $(".video-lists .video-list").each(function (index) {
		if ($(".card-loading").length > 0) return;
  
		if ($(this).isOnScreen() && $(this).hasClass("hidden-card")) {
		  var thisElement = $(this);
		  thisElement.removeClass("hidden-card");
		  thisElement.addClass("card-loading");
		  setTimeout(function () {
			thisElement.removeClass("card-loading");
			thisElement.addClass("auto-height");
		  }, 2000);
		}
	  });
	});
  
	function removeStickySidebar(elementVar) {
	  if ($(elementVar).length > 0) {
		if (
		  $(elementVar).isOnScreen() &&
		  $(".card-loading").length <= 0 &&
		  $(".sidebar-content").hasClass("sticky-sidebar")
		) {
		  $(".sidebar-content").addClass("disable-sticky");
		}
	  }
	}
  
	$(".filter-video-section .sidebar-content .sidebar-body li").click(function () {
	  if ($(window).width() > 991) {
		$("body, html").animate({
		  scrollTop:
			$(".filter-video-section").offset().top - $("header").height(),
		});
	  }
	});
  
	$(window).resize(function () {
	  initVideoSlick();
	});
	/**
	 * filter Code Active element
	 */
	$(".filter-video-section .sidebar-content li div").click(function (event) {
	  if (event.target !== this) return; // Do nothing
	  /* code update 05/03/2021 */
	  if ($(event.target).closest(".mCSB_draggerContainer").length > 0) return;
	  /* code update end 05/03/2021 */
	  if (
		$(this).parent().hasClass("active") &&
		$(this).parent().hasClass("dropdown")
	  ) {
		$(this).parent().find(".dropdown-list").slideToggle();
		$(this).parent().removeClass("active");
		return;
	  } else {
		$(".dropdown-list").hide();
		$(this).parent().find(".dropdown-list").slideDown();
	  }
	  $(".sidebar-content li div").parent().removeClass("active");
	  $(this).parent().addClass("active");
	  if ($(this).parent().hasClass("dropdown")) {
		$(this).parent().find(".dropdown-list li").removeClass("active");
		$(this).parent().find(".dropdown-list li").first().addClass("active");
	  } else {
		if ($(window).width() < 991) $(".sidebar-header .close").click();
	  }
	});
  
	$(".filter-video-section .sidebar-content .dropdown-list li").click(function (event) {
	  $(".sidebar-content .dropdown-list li").removeClass("active");
	  $(this).addClass("active");
	  if ($(window).width() < 991) $(".sidebar-header .close").click();
	});
  
	/**
	 * Most View
	 */
	$(".filter-video-section .sort-tools .sort-dropdown span").click(function () {
	  $(this).addClass("active");
	  $(".sort-dropdown .dropdown-wrapper").toggle();
	});
	$(".filter-video-section .sort-tools .sort-dropdown li").click(function () {
	  $(".sort-tools .sort-dropdown li").removeClass("active");
	  $(this).addClass("active");
	  $(".sort-dropdown span").removeClass("active");
	  $(".sort-tools .sort-dropdown span").text($(this).text());
	  $(".sort-dropdown .dropdown-wrapper").hide();
	});
  
	/* sidebar */
	$(".filter-video-section .sidebar-header .close").click(function () {
	  $(".sidebar-content").removeClass("active");
	  $("body").removeClass("no-scroll");
	  if ($(window).width() < 991) {
		window.scrollTo(0, 0);
		/* update start 18/02/21 */
		resetFilter();
		/* update end 18/02/21 */
	  } else {
		$("html, body").animate({
		  scrollTop: $(".filter-section").offset().top,
		});
	  }
	});
  
	
  
	/**
	 * hash link filter activate
	 */
	$(window).on("load", function () {
	  var urlHash = window.location.hash || window.top.location.hash;
	  if (urlHash.length > 0) {
		if ($(urlHash).hasClass("dropdown")) {
		  $(".sidebar-content li").removeClass("active");
		  $(".sidebar-content li" + urlHash).addClass("active");
		  $(".sidebar-content li" + urlHash)
			.find(".dropdown-list")
			.slideDown();
		  $(".sidebar-content li" + urlHash + " .dropdown-list li:first").click();
		} else {
		  $(".sidebar-content li" + urlHash + " div").click();
		}
	  }
	});
  });
  
  /* update start 18/02/21 */
  function resetFilter() {
	if ($(".filter-top.filter-sticky").length > 0) {
	  $(".feature-video-inner").show();
	  $(".announcement-section").show();
	  $(".filter-inner-container").removeClass("active");
	  $(".filter-top").removeClass("filter-selected");
	  $(".filter-top").removeClass("filter-sticky");
	  $(".iplay-video-page.search-container").removeClass("filter-sticky");
	  $(".filter-cat").hide();
	}
  }
  /* update end 18/02/21 */
  
  /*  02/07/2021 */
  $(window).on("unload", function () {
	$(".feature-video-inner .left-content .card-inner").off("click");
	$(".filter-top .filter-icon").off("click");
	$(".sort-tools .title").off("click");
	$(".sidebar-content .sidebar-body li").off("click");
	$(".sidebar-content li div").off("click");
	$(".sidebar-header .close").off("click");
	$(".sort-dropdown span").off("click");
	$(".sort-tools .sort-dropdown li").off("click");
  });
  
$(document).ready(function () {
  var videoJson = "/content/icicibank.videosdata.json";
  var videoData = {
    videoDetails: [],
  };
  if (
    $("#videoListWrapper").length ||
    $("#popular-videos").length ||
    $("#featured-video").length
  ) {
    var copyText = $(".feature-video-inner").attr("data-copyText");
    var shareText = $(".feature-video-inner").attr("data-shareText");
    function generateVideoListItems(videoData) {
      let html = "",
        videoCardGroupCount = 6;
      for (let index = 0; index < videoData.length; index++) {
        if (index % videoCardGroupCount == 0) {
          if (index >= videoCardGroupCount)
            html += '<div class="video-list hidden-card">';
          else html += '<div class="video-list">';
        }

        var type = videoData[index]["type"];
        html += generateHTML(
          videoData[index]["videotitle"],
          videoData[index]["thumbnailimage"],
          type,
          intToString(videoData[index]["views"]),
          getTimePassed(videoData[index]["publishdate"]),
          videoData[index]["videoid"],
          videoData[index]["referencelink"],
          videoData[index]["detailpagelink"],
          index
        );

        if (index % videoCardGroupCount == videoCardGroupCount - 1) {
          html += "</div>";
        }
      }

      //Display result
      if (html.length > 0) {
        $("#videoListWrapper").html(html);
        $(".filter-top .sort-tools").removeClass("disable-sorting");
      } else {
        $("#videoListWrapper").html('<div class="no-result"></div>');
        $(".filter-top .sort-tools").addClass("disable-sorting");
      }
    }

    function generateHTML(
      vidTitle,
      videoThumbnailImage,
      type,
      viewCount,
      timePassed,
      youtubeVideoId,
      pdfLink,
      detailpagelink,index
    ) {
      var playBtn = "",
        titleLink = "#",
        viewClass = "download",
        imgUrl = "",
        videoDivs = "";
      var pdfSpan = pdfLink
        ? '<a target="_blank" class="' +
          viewClass +
          '" download href="' +
          pdfLink +
          '"></a>'
        : "";

      if (type == "Video") {
        playBtn =
          '<a target="_blank" href="' +
          detailpagelink +
          '" class="play-btn"></a>';
        imgUrl = '<a target="_blank" href="' + detailpagelink + '">';
        titleLink = detailpagelink;
        viewClass = "num-viewer";
        videoDivs = pdfLink
          ? '<a target="_blank" download class="pdf" href="' +
            pdfLink +
            '"></a><div class="bookmark" video-id="' +
            youtubeVideoId +
            '"></div>'
          : '<div class="bookmark" video-id="' + youtubeVideoId + '"></div>';
        pdfSpan = '<span class="' + viewClass + '">' + viewCount + "</span>";
      }

      var html =
        '<div class="video-card"><div class="card-inner"><div class="media"> ' +
        imgUrl +
        ' <img src="' +
        videoThumbnailImage +
        '" alt="video"></a>' +
        playBtn +
        '</div><div class="content"><a target="_blank" href="' +
        titleLink +
        '" class="card-title">' +
        vidTitle +
        '</a><div class="card-bottom"><div class="date-readtime"><span class="date">' +
        timePassed +
        "</span>" +
        pdfSpan +
        '</div><div class="bookmark-share">' +
        videoDivs +
        '<div class="share"></div><div class="share-content"><div class="inner-content"><div class="share-header"><p>' +
        shareText +
        '</p><span class="close-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/close-orange.svg" alt="close" /></a></span></div><ul class="share-link"><li><a href="https://api.whatsapp.com/send?url=' +
        window.location.host +
        "/" +
        titleLink +
        "&text=" +
        vidTitle +
        '" target="_blank" tabindex="0"><span class="n-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp.svg" alt="whatsapp"></span> <span class="h-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp-o.svg" alt="whatsapp"> </span></a></li><li><a href="https://www.facebook.com/sharer/sharer.php?u=' +
        window.location.host +
        "/" +
        titleLink +
        "&text=" +
        vidTitle +
        '" target="_blank" tabindex="0"> <span class="n-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-black.svg" alt="fb"></span><span class="h-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-orange.svg"alt="fb"></span></a></li><li><a href="https://twitter.com/intent/tweet?url=' +
        window.location.host +
        "/" +
        titleLink +
        "&text=" +
        encodeURI(vidTitle) +
        '" target="_blank" tabindex="0"><span class="n-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-black.svg" alt="tw"></span><span class="h-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-orange.svg" alt="tw"></span></a></li><li><a href="https://www.linkedin.com/shareArticle?mini=true?url=' +
        window.location.host +
        "/" +
        titleLink +
        "&text=" +
        vidTitle +
        '" target="_blank" tabindex="0"><span class="n-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-black.svg" alt="ln"></span><span class="h-icon"><img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-orange.svg" alt="ln"></span></a></li></ul><div class="youtube-text"><input type="text" id="video-list'+index+'" name="link" value="https://www.youtube.com/watch?v=' +
        youtubeVideoId +
        '" /><span id="btn-video-list'+index+'"  onclick="copyCode(\'video-list'+index+'\',\'btn-video-list'+index+'\',\'input\')">' +
        copyText +
        "</span></div></div></div></div></div></div></div></div>";

      return html;
    }

    function custom_sort_date(a, b) {
      return (
        new Date(a.publishdate).getTime() - new Date(b.publishdate).getTime()
      );
    }

    function custom_sort_view(a, b) {
      var viewsOne = a.views,
        viewsTwo = b.views;
      if (viewsOne == undefined) viewsOne = 0;
      if (viewsTwo == undefined) viewsTwo = 0;

      return viewsOne - viewsTwo;
    }

    function custom_sort_like(a, b) {
      var likeOne = a.likes,
        likeTwo = b.likes;
      if (likeOne == undefined) likeOne = 0;
      if (likeTwo == undefined) likeTwo = 0;

      return likeOne - likeTwo;
    }

    function intToString(value) {
      if (!value) {
        return 0;
      }

      if (value && value.length <= 3) return value;

      var suffixes = ["", "K", "M", "B", "T"];
      var suffixNum = Math.floor(("" + value).length / 3);
      var shortValue = parseFloat(
        (suffixNum != 0
          ? value / Math.pow(1000, suffixNum)
          : value
        ).toPrecision(2)
      );
      if (shortValue % 1 != 0) {
        shortValue = shortValue.toFixed(1);
      }
      return shortValue + suffixes[suffixNum];
    }

    function getTimePassed(publishDate) {
      // Set the date we're counting down to
      var countDownDate = new Date(publishDate).getTime();
      var now = new Date().getTime();
      var distance = now - countDownDate;

      // Time calculations for days, hours, minutes and seconds
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var months = Math.floor(days / 31);
      var years = Math.floor(months / 12);

      var message = "";
      if (years == 1) message = years + " Year Ago";
      else if (years > 0) message = years + " Years Ago";
      else if (months == 1) message = months + " Month Ago";
      else if (months > 0) message = months + " Months Ago";
      else if (days == 1) message = days + " Day Ago";
      else if (days > 1 && days < 7) message = days + " Days Ago";
      else if (days >= 7) {
        var weeks = Math.round(days / 7);
        if (weeks == 1) message = weeks + " Week Ago";
        else message = weeks + " Weeks Ago";
      } else if (hours == 1) message = hours + " Hour Ago";
      else if (hours > 0) message = hours + " Hours Ago";
      else message = minutes + " Minutes Ago";

      return message;
    }
    $.getJSON(videoJson, function (resultJSON) {
      if (resultJSON && resultJSON.Videodata) {
        var subCatArray = [];
        videoData["videoDetails"] = resultJSON.Videodata;
        let tempArray = [];
        var subCatArray = [];
        var catCount = 0,
          Investments = 0;
        var subCatData = "",
          CatData = "";
        $(".filter-video-section .sidebar-content li").each(function (i) {
          subCatArray.push($(this).attr("id").replace(/_/g, " ").toLowerCase());
        });
        for (var j = 0; j < subCatArray.length; j++) {
          for (let k = 0; k < resultJSON.Videodata.length; k++) {
            var subcategoryData = resultJSON.Videodata[k]["subcategory"];
            var categoryData = resultJSON.Videodata[k]["category"];
            if (
              subcategoryData != null &&
              subcategoryData != "" &&
              categoryData != null &&
              categoryData != ""
            ) {

              if (subCatArray[j] == subcategoryData.toLowerCase()) {
                Investments++;
                var dispData = subCatArray[j].replace(/ /g, "_");

                subCatData = "#" + dispData;
              } else if (subCatArray[j] == categoryData.toLowerCase()) {
                catCount++;
                CatData = "#" + subCatArray[j] + " " + ".menu-item";
              }
              getRelatedVideosData(resultJSON.Videodata[k]);
            }
          }

          var notFound = 0;
          if (Investments > 0) {
            $(subCatData).append(" (" + Investments + ")");
          }

          if (catCount > 0) {
            $(CatData).append(" (" + catCount + ")");
          }

          Investments = 0;
          catCount = 0;
        }

        // load all videos from videoData json on document ready
        sortCards(videoData["videoDetails"]);

        //Filter video form sidebar selection category
        $(".filter-video-section .sidebar-content li div").click(function (
          event
        ) {
          if (event.target !== this) return; // Do nothing
          /* Code update 05/03/2021 */
          if ($(event.target).closest(".mCSB_draggerContainer").length > 0)
            return;
          /* Code update end 05/03/2021 */
          if ($(this).parent().hasClass("dropdown")) {
            renderVideoCards(
              $(this).siblings(".dropdown-list").find("li:first").attr("id")
            );
          } else renderVideoCards($(this).parent().attr("id"));
        });

        //Filter video form sidebar selection sub-category
        $(".filter-video-section .sidebar-content .dropdown-list li").click(
          function (event) {
            renderVideoCards($(this).attr("id"));
          }
        );

        //Filter and render reuired videos only
        function renderVideoCards(filterId) {
          tempArray = [];
          if (filterId == "all") {
            sortCards(videoData["videoDetails"]);
          } else if (filterId == "like_by_you") {
            var o = localStorage.getItem("videoIdsFav");
            var e = [];
            var m = [];

            if (typeof o != "undefined") {
              if (o != null && o != "") {
                var s = o.split(",");
                for (var k = 0; k < s.length; k++) {
                  m.push(s[k]);
                  e.push(s[k]);
                }
                for (var k = 0; k < m.length; k++) {
                  for (
                    let index = 0;
                    index < videoData["videoDetails"].length;
                    index++
                  ) {
                    var element = videoData["videoDetails"][index];
                    var categoryValue = element["category"];
                    var subcategoryValue = element["subcategory"];
                    if (
                      typeof categoryValue != "undefined" &&
                      typeof subcategoryValue != "undefined"
                    ) {
                      if (
                        categoryValue != null &&
                        categoryValue != "" &&
                        subcategoryValue != null &&
                        subcategoryValue != ""
                      ) {
                        if (element["videoid"] == m[k]) {
                          tempArray.push(element);
                        }
                      }
                    }
                  }
                }
              }
            }

            sortCards(tempArray);
          } else {
            for (
              let index = 0;
              index < videoData["videoDetails"].length;
              index++
            ) {
              var element = videoData["videoDetails"][index];
              if (
                element["category"].replace(/ /g, "_").toLowerCase() ==
                  filterId.toLowerCase() ||
                element["subcategory"].replace(/ /g, "_").toLowerCase() ==
                  filterId.toLowerCase()
              ) {
                tempArray.push(element);
              }
            }
            sortCards(tempArray);
          }
          generateFilterTags("#filterTags", filterId);
        }

        /**
         *Filter close remove from list
         */
        $(document).on(
          "click",
          ".filter-video-section .filter-cat img",
          function () {
            $(this).parent().remove();
            $(".filter-cat .filter-clear").click();
            sortCards(videoData["videoDetails"]);
          }
        );
        $(document).on(
          "click",
          ".filter-video-section .filter-cat .filter-clear",
          function () {
            sortCards(videoData["videoDetails"]);
          }
        );

        //Sorting videos click event
        $(".filter-video-section .sort-dropdown .dropdown-inner li").click(
          function () {
            if (tempArray.length > 0) sortCards(tempArray);
            else sortCards(videoData["videoDetails"]);
          }
        );

        //Sorting cards functions provide sort Id
        function sortCards(dataArray) {
          var sortId = $(".sort-dropdown .dropdown-inner li.active").attr("id");
          if (sortId == "latest") {
            dataArray.sort(custom_sort_date);
            dataArray.reverse();
          } else if (sortId == "oldest") {
            dataArray.sort(custom_sort_date);
          } else if (sortId == "viewed") {
            dataArray.sort(custom_sort_view);
            dataArray.reverse();
          } else if (sortId == "liked") {
            dataArray.sort(custom_sort_like);
            dataArray.reverse();
          }
          generateVideoListItems(dataArray);
          var o = localStorage.getItem("videoIdsFav");
          var e = [];
          var m = [];
          if (typeof o != "undefined") {
            if (o != null && o != "") {
              var s = o.split(",");
              for (var k = 0; k < s.length; k++) {
                m.push(s[k]);
                e.push(s[k]);
              }
              for (var k = 0; k < m.length; k++) {
                $('.bookmark[video-id="' + m[k] + '"]').addClass("active");
                $('.bookmark[video-id="' + m[k] + '"]')
                  .parent()
                  .parent()
                  .parent()
                  .parent()
                  .parent()
                  .addClass("favouirite");
                $('.bookmark[video-id="' + m[k] + '"]').css({
                  background:
                    "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/like-icon.svg) no-repeat 0 0%",
                });
              }
            }
          }
        }

        var popularVideo1 = $(".feature-video-section .right-content").attr(
          "data-relatedvideoid1"
        );
        var popularVideo2 = $(".feature-video-section .right-content").attr(
          "data-relatedvideoid2"
        );
        //if popular videos id does not exist fetch top 2 views video
        if (!(popularVideo1 || popularVideo2)) {
          videoData["videoDetails"].sort(function (a, b) {
            return a.views - b.views;
          });
          for (let index = 0; index < 2; index++) {
            finalDetailPageLink =
              videoData["videoDetails"][index]["detailpagelink"];

            var encTitle = encodeURI(
              videoData["videoDetails"][index]["videotitle"]
            );

            var x =
              "<div class='video-card h-view'><div class='card-inner'><div class='media'><img src='" +
              videoData["videoDetails"][index]["thumbnailimage"] +
              "' alt='video'><a target='_blank' href = '" +
              finalDetailPageLink +
              "?rel=0' class = 'play-btn'></a>	</div><div class='content'><a target='_blank' href='" +
              finalDetailPageLink +
              "?rel=0' class='card-title'>" +
              videoData["videoDetails"][index]["videotitle"] +
              "</a><div class = 'card-bottom'><div  class='date-readtime'><span class = 'date'>" +
              getTimePassed(videoData["videoDetails"][index]["publishdate"]) +
              "</span><span class = 'num-viewer'>" +
              intToString(videoData["videoDetails"][index]["views"]) +
              " </span></div>	<div class='bookmark-share'><div class='bookmark' video-id='" +
              videoData["videoDetails"][index]["videoid"] +
              "'></div><div class='share'></div><div class='share-content'><div class='inner-content'><div class='share-header'><p>" +
              shareText +
              "</p><span class='close-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/close-orange.svg' alt='fb' /></a></span></div><ul class='share-link'><li><a href='https://api.whatsapp.com/send?url=" +
              window.location.host +
              finalDetailPageLink +
              "&text=" +
              videoData["videoDetails"][index]["videotitle"] +
              "' target='_blank' tabindex='0'><span class='n-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp.svg' alt='whatsapp'></span> <span class='h-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp-o.svg' alt='whatsapp'> </span></a></li><li><a href='https://www.facebook.com/sharer/sharer.php?u=" +
              window.location.host +
              finalDetailPageLink +
              "&text=" +
              videoData["videoDetails"][index]["videotitle"] +
              "' target='_blank' tabindex='0'> <span class='n-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-black.svg' alt='fb'></span><span class='h-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-orange.svg'alt='fb'></span></a></li><li><a href='https://twitter.com/intent/tweet?url=" +
              window.location.host +
              finalDetailPageLink +
              "&text=" +
              encTitle +
              "' target='_blank' tabindex='0'><span class='n-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-black.svg' alt='tw'></span><span class='h-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-orange.svg' alt='tw'></span></a></li><li><a href='https://www.linkedin.com/shareArticle?mini=true?url=" +
              window.location.host +
              finalDetailPageLink +
              "&text=" +
              videoData["videoDetails"][index]["videotitle"] +
              "' target='_blank' tabindex='0'><span class='n-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-black.svg' alt='ln'></span><span class='h-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-orange.svg' alt='ln'></span></a></li></ul><div class='youtube-text'><input type='text' name='link' value='https://www.youtube.com/watch?v=" +
              videoData["videoDetails"][index]["videoid"] +
              "&rel=0' id='popular-video"+index+"'/><span id='btn-popular-video"+index+"' onclick=\"copyCode('popular-video"+index+"','btn-popular-video"+index+"','input')\">" +
              copyText +
              "</span></div></div></div></div></div></div></div></div>";
            $("#popular-videos").append(x);
            initVideoSlick();
          }
        }
        var xslvideoid = $(".feature-video-section .left-content").attr(
          "data-videoid"
        );
        if(popularVideo1 || popularVideo2) {
          videoData["videoDetails"] = ((resultJSON.Videodata).sort(custom_sort_date)).reverse();
        }
        for (let index = 0; index < videoData["videoDetails"].length; index++) {
          if (xslvideoid == videoData["videoDetails"][index]["videoid"]) {
            var finalDetailPageLink =
              videoData["videoDetails"][index]["detailpagelink"];

            var encryptData = encodeURI(
              videoData["videoDetails"][index]["videotitle"]
            );

            var v =
              "<div class='card-inner'><div class='media'><img src='" +
              videoData["videoDetails"][index]["thumbnailimage"] +
              "'alt='video'><a target='_blank' href = '" +
              finalDetailPageLink +
              "?rel=0' class='play-btn'></a></div> <div class='content'><a target='_blank' href='" +
              finalDetailPageLink +
              "?rel=0' class='card-title'>" +
              videoData["videoDetails"][index]["videotitle"] +
              "</a> <div class='card-bottom'><div class='date-readtime'><span class='date'>" +
              getTimePassed(videoData["videoDetails"][index]["publishdate"]) +
              "</span><span class='num-viewer'>" +
              intToString(videoData["videoDetails"][index]["views"]) +
              "</span></div><div class='bookmark-share'><div class='bookmark' video-id='" +
              xslvideoid +
              "'></div><div class='share'></div><div class='share-content'><div class='inner-content'><div class='share-header'><p>" +
              shareText +
              "</p> <span class='close-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/close-orange.svg' alt='fb'/></span> </div><ul class='share-link'><li><a href='https://api.whatsapp.com/send?url=" +
              window.location.host +
              finalDetailPageLink +
              "&text=" +
              videoData["videoDetails"][index]["videotitle"] +
              "' target='_blank' tabindex='0'><span class='n-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp.svg' alt='whatsapp'></span> <span class='h-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp-o.svg' alt='whatsapp'> </span></a></li><li><a href='https://www.facebook.com/sharer/sharer.php?u=" +
              window.location.host +
              finalDetailPageLink +
              "&text=" +
              videoData["videoDetails"][index]["videotitle"] +
              "' target='_blank' tabindex='0'> <span class='n-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-black.svg' alt='fb'></span><span class='h-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-orange.svg'alt='fb'></span></a></li><li><a href='https://twitter.com/intent/tweet?url=" +
              window.location.host +
              finalDetailPageLink +
              "&text=" +
              encryptData +
              "' target='_blank' tabindex='0'><span class='n-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-black.svg' alt='tw'></span><span class='h-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-orange.svg' alt='tw'></span></a></li><li><a href='https://www.linkedin.com/shareArticle?mini=true?url=" +
              window.location.host +
              finalDetailPageLink +
              "&text=" +
              videoData["videoDetails"][index]["videotitle"] +
              "' target='_blank' tabindex='0'><span class='n-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-black.svg' alt='ln'></span><span class='h-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-orange.svg' alt='ln'></span></a></li></ul><div class='youtube-text'><input type='text' name='link' id='feature-video' value='https://www.youtube.com/watch?v=" +
              xslvideoid +
              "'&rel=0> <span id='btn-feature-video'  onclick=\"copyCode('feature-video','btn-feature-video','input')\">" +
              copyText +
              "</span></div> </div> </div> </div> </div> </div> </div> <div class='iframe-video hide'><iframe width='100%' height='282' src='https://www.youtube.com/embed/" +
              xslvideoid +
              "' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen=''></iframe></div>";
            $("#featured-video").append(v);
          }
          if (
            popularVideo1 == videoData["videoDetails"][index]["videoid"] ||
            popularVideo2 == videoData["videoDetails"][index]["videoid"]
          ) {
            finalDetailPageLink =
              videoData["videoDetails"][index]["detailpagelink"];

            var encTitle = encodeURI(
              videoData["videoDetails"][index]["videotitle"]
            );

            var x =
              "<div class='video-card h-view'><div class='card-inner'><div class='media'><img src='" +
              videoData["videoDetails"][index]["thumbnailimage"] +
              "' alt='video'><a target='_blank' href = '" +
              finalDetailPageLink +
              "?rel=0' class = 'play-btn'></a>	</div><div class='content'><a target='_blank' href='" +
              finalDetailPageLink +
              "?rel=0' class='card-title'>" +
              videoData["videoDetails"][index]["videotitle"] +
              "</a><div class = 'card-bottom'><div  class='date-readtime'><span class = 'date'>" +
              getTimePassed(videoData["videoDetails"][index]["publishdate"]) +
              "</span><span class = 'num-viewer'>" +
              intToString(videoData["videoDetails"][index]["views"]) +
              " </span></div>	<div class='bookmark-share'><div class='bookmark' video-id='" +
              videoData["videoDetails"][index]["videoid"] +
              "'></div><div class='share'></div><div class='share-content'><div class='inner-content'><div class='share-header'><p>" +
              shareText +
              "</p><span class='close-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/close-orange.svg' alt='fb' /></a></span></div><ul class='share-link'><li><a href='https://api.whatsapp.com/send?url=" +
              window.location.host +
              finalDetailPageLink +
              "&text=" +
              videoData["videoDetails"][index]["videotitle"] +
              "' target='_blank' tabindex='0'><span class='n-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp.svg' alt='whatsapp'></span> <span class='h-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp-o.svg' alt='whatsapp'> </span></a></li><li><a href='https://www.facebook.com/sharer/sharer.php?u=" +
              window.location.host +
              finalDetailPageLink +
              "&text=" +
              videoData["videoDetails"][index]["videotitle"] +
              "' target='_blank' tabindex='0'> <span class='n-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-black.svg' alt='fb'></span><span class='h-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-orange.svg'alt='fb'></span></a></li><li><a href='https://twitter.com/intent/tweet?url=" +
              window.location.host +
              finalDetailPageLink +
              "&text=" +
              encTitle +
              "' target='_blank' tabindex='0'><span class='n-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-black.svg' alt='tw'></span><span class='h-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-orange.svg' alt='tw'></span></a></li><li><a href='https://www.linkedin.com/shareArticle?mini=true?url=" +
              window.location.host +
              finalDetailPageLink +
              "&text=" +
              videoData["videoDetails"][index]["videotitle"] +
              "' target='_blank' tabindex='0'><span class='n-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-black.svg' alt='ln'></span><span class='h-icon'><img src='/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-orange.svg' alt='ln'></span></a></li></ul><div class='youtube-text'><input type='text' name='link' value='https://www.youtube.com/watch?v=" +
              videoData["videoDetails"][index]["videoid"] +
              "&rel=0' id='popular-video"+index+"'/><span id='btn-popular-video"+index+"' onclick=\"copyCode('popular-video"+index+"','btn-popular-video"+index+"','input')\">" +
              copyText +
              "</span></div></div></div></div></div></div></div></div>";
            $("#popular-videos").append(x);
            initVideoSlick();
          }
        }

        var likedVideos=[];
        $(document).on("click", ".bookmark", function (f) {
          var c = $(this).attr("video-id");
          if (!$(this).hasClass("active")) {
            $(this).addClass("active");
            $(this).css({
              background:
                "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/like-icon.svg) no-repeat 0 0%",
            });
            likedVideos.push(c);
            likedVideos = g(likedVideos);
            b();
          } else {
            var a = localStorage.getItem("videoIdsFav")
              ? localStorage.getItem("videoIdsFav").split(",")
              : [];
            a = g(a);
            $(this).removeClass("active");
            $(this).css({
              background:
                "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/bookmark-orange.png) no-repeat 0 0%",
            });
            a.splice($.inArray(c, a), 1);
            likedVideos = g(a);
            b();
          }
        });

        function b() {
          localStorage.setItem("videoIdsFav", likedVideos);
        }

        function g(c) {
          var a = [];
          $.each(c, function (f, h) {
            if ($.inArray(h, a) == -1) {
              a.push(h);
            }
          });
          return a;
        }

        function p(a) {
          return a.filter(function (h, f, c) {
            return f == c.indexOf(h);
          });
        }
      }
    });
  }

  function getRelatedVideosData(videoData) {
    $(".relatedvideofull .related-video-slider .card-inner").each(function () {
      if ($(this).attr("id") == videoData.videoid) {
        $("#" + $(this).attr("id") + " .image img").attr(
          "src",
          videoData.thumbnailimage
        );
        if ($("#" + $(this).attr("id") + " .image a").attr("data-content")) {
          $("#" + $(this).attr("id") + " .image a").attr(
            "data-content",
            videoData.descriptionone
          );
        }

        if (
          $("#" + $(this).attr("id") + " .content h3 a").attr("data-content")
        ) {
          $("#" + $(this).attr("id") + " .content h3 a").attr(
            "data-content",
            videoData.descriptionone
          );
        }
        $("#" + $(this).attr("id") + " .content h3 a").text(
          videoData.videotitle
        );
        $("#" + $(this).attr("id") + " .card-bottom .date-readtime .date").text(
          getTimePassed(videoData.publishdate)
        );
      }
    });
  }

  (function addRootclass() {
    if ($(".iplaysearch ").length > 0) {
      const rootEl = $(".container.page-content");
      rootEl.addClass("videolisting-page");
    }
  })();

});

(function () {
  $(".did-you-know-slider").slick({
    dots: !0,
    arrows: !0,
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          arrows: false,
          slidesToShow: 1,
          dots: true,
          centerMode: true,
          centerPadding: "20px",
          infinite: true,
        },
      },
    ],
  });
})();

/* trending-deals-slider */
$('.special-discounts .trending-deals-slider').not(".slick-initialized").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true,
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true,
                centerMode: true,
                centerPadding: '15px',
                infinite: true,
            }
        }
    ]
});
// Equal Card Size 
// Select and loop the container element of the elements you want to equalise
$('.slick-track').each(function(){  
        // Cache the highest
        var highestBox = 0;
        // Select and loop the elements you want to equalise
        $('.deal-card', this).each(function(){
        // If this box is higher than the cached highest then store it
        if($(this).height() > highestBox) {
            highestBox = $(this).height(); 
        }
        });        
        // Set the height of all those children to whichever was highest 
        $('.deal-card',this).height(highestBox);  
    // }           
}); 


var rangedefaultColor = '#4B4B4B';

function numWithCommas(num) {
  return num.toLocaleString('en-IN');
}

function removeComma(number) {
  return number.replace(/,/g, '');
}

function populateSelectBox(selectBox, from, to, suffix, defaultValue) {
  for (var i = from; i <= to; i++) {
    $('#' + selectBox).append(
      $('<option>', {
        value: i,
        text: i + ' ' + suffix,
      })
    );
  }
  $('#' + selectBox).val(defaultValue);
  $('#' + selectBox).selectmenu('refresh');
}

function setOnRangeChange(input, range, callback, data, rangeColor) {
  var range = document.getElementById(range);
  var input = document.getElementById(input);
  rangedefaultColor = rangeColor ? rangeColor : rangedefaultColor;
 
  if (isOlderEdgeOrIE()) {
    range.style.height = '20px';
    setRangeEvent(range, input, 'input', data, callback);
    setRangeInputEvent(range, input, 'input', data, callback);
    setRangeEvent(range, input, 'change', data, callback);
    setRangeInputEvent(range, input, 'change', data, callback);
  } else {
    updateRangeEl(range);
    setRangeEvent(range, input, 'input', data, callback, updateRangeEl);
    setRangeInputEvent(range, input, 'input', data, callback, updateRangeEl);
  }
}

function setRangeEvent(range, input, type, data, callback, updateCallback) {
  if(range){
    range.addEventListener(type, function (e) {
      if (!data) {
        if (input.value) input.value = removeComma(e.target.value);
        else input.innerHTML = removeComma(e.target.value);
      } else {
        let val = removeComma(e.target.value);
        val = data[val] ? val : data.indexOf(val);
        if (input.value) input.value = data.length > 0 ? data[val] : val;
        else input.innerHTML = data.length > 0 ? data[val] : val;
      }
      if (callback) {
        callback();
      }
      if (updateCallback) {
        updateCallback(range);
      }
    });
  }
}

function setRangeInputEvent(range, input, type, data, callback, updateCallback) {
  if(input){
      input.addEventListener(type, function (e) {
      if(!e.target.value){
        e.target.value = `${0}`;
      }  
      if(e.target.value != "0" && e.target.value.charAt(0) === "0"){
        e.target.value = e.target.value.substring(1);
      }
      if (!data) {
        range.value = removeComma(e.target.value);
      } else {
        let val = removeComma(e.target.value);
        if (isFloatNumber(val)) {
          val = val.toString();
        } else {
          val = parseFloat(val).toString();
        }
        range.value = data.indexOf(val);
      }

      if (callback) {
        callback();
      }
      if (updateCallback) {
        updateCallback(range);
      }
    });
  }
}

function updateRangeEl(rangeEl) {
    if(rangeEl){
        var ratio = valueTotalRatio(rangeEl.value, rangeEl.min, rangeEl.max);
        rangeEl.style.backgroundImage = getLinearGradientCSS(ratio, '#F37E20', rangedefaultColor);
    }

}

function isOlderEdgeOrIE() {
  return (
    window.navigator.userAgent.indexOf('MSIE ') > -1 ||
    !!navigator.userAgent.match(/Trident.*rv\:11\./) ||
    window.navigator.userAgent.indexOf('Edge') > -1
  );
}

function isFloatNumber(val) {
  return Number(val).toString() == val && val % 1 !== 0;
}

function valueTotalRatio(value, min, max) {
  const diff = max / 2 < value ? 0 : 0.01;
  return (value - min) / (max - min) + diff;
}

function getLinearGradientCSS(ratio, leftColor, rightColor) {
  
  return [
    '-webkit-gradient(',
    'linear, ',
    'left top, ',
    'right top, ',
    'color-stop(' + ratio + ', ' + leftColor + '), ',
    'color-stop(' + ratio + ', ' + rightColor + ')',
    ')',
  ].join('');
}

function validateNumberOnly(val, element) {
  let validated = true;
  if (val == '') {
    validated = false;
    document.querySelector('.' + element).innerHTML = 'Please enter Amount';
  } else if (isNaN(Number(val))) {
    document.querySelector('.' + element).innerHTML = 'Amount must be in numbers only.';
  } else {
    document.querySelector('.' + element).innerHTML = '';
  }
  return validated;
}

function validateNumberAndDecimals(evt) {
  var theEvent = evt || window.event;

  // Handle paste
  if (theEvent.type === 'paste') {
    key = event.clipboardData.getData('text/plain');
  } else {
    // Handle key press
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
  }
  var regex = /[0-9]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}

function validateRangeInput(value, max, min, error_element) {
  value = parseFloat(value);
  max = parseFloat(max);
  min = parseFloat(min);
  let validated = true;
  const err_element = document.querySelector('.' + error_element);
  if (value > max || isNaN(value)) {
    validated = false;
    err_element.innerHTML = 'Please enter correct amount.';
  } else if (value < min || isNaN(value)) {
    validated = false;
    err_element.innerHTML = 'Please enter correct amount.';
  } else {
    err_element.innerHTML = '';
  }
  return validated;
}

function toggleView(element1, element2, show) {
  const container1 = document.getElementsByClassName(element1);
  const container2 = element2 ? document.getElementsByClassName(element2) : null;

  if (show) {
    container1[0].style.display = 'flex';
    if (container2 != null) {
      container2[0].style.display = 'none';
    }
  } else {
    container1[0].style.display = 'none';
    if (container2 != null) {
      container2[0].style.display = 'flex';
    }
  }
}

/* Excel formulas  */
function presentValue(rate, period, future_value) {
  const pv = future_value / Math.pow(1 + rate, period);
  return pv;
}

function futureValue(rate, period, presentValue) {
  const fv = presentValue * Math.pow(1 + rate, period);
  return fv;
}

function FV(rate, nper, pmt, pv, type) {
  var pow = Math.pow(1 + rate, nper),
    fv;
  if (rate) {
    fv = (pmt * (1 + rate * type) * (1 - pow)) / rate - pv * pow;
  } else {
    fv = -1 * (pv + pmt * nper);
  }
  return fv.toFixed(2);
}

function paymentAmount(rate, period, fv, type) {
  let b = 0;
  if (type == 1) {
    b = rate;
  }
  let pmt = -(fv / (Math.pow(1 + rate, period) - 1)) * (-rate / (1 + b));
  return pmt;
}

function PMT(ir, np, pv, fv, type) {
  /*
   * ir   - interest rate per month
   * np   - number of periods (months)
   * pv   - present value
   * fv   - future value
   * type - when the payments are due:
   *        0: end of the period, e.g. end of month (default)
   *        1: beginning of period
   */
  var pmt, pvif;

  fv || (fv = 0);
  type || (type = 0);

  if (ir === 0) return -(pv + fv) / np;

  pvif = Math.pow(1 + ir, np);
  pmt = (-ir * pv * (pvif + fv)) / (pvif - 1);

  if (type === 1) pmt /= 1 + ir;

  return pmt;
}

function IRRCalc(CArray) {
  min = 0.0;
  max = 1.0;
  do {
    guest = (min + max) / 2;
    NPV = 0;
    for (var j = 0; j < CArray.length; j++) {
      NPV += CArray[j] / Math.pow(1 + guest, j);
    }
    if (NPV > 0) {
      min = guest;
    } else {
      max = guest;
    }
  } while (Math.abs(NPV) > 0.000001);
  return guest * 100;
}

function addCommas(element) {
  if(document.getElementById(element)){
    var loanAmount = document.getElementById(element).value;
    loanAmount = removeComma(loanAmount);
    document.getElementById(element).value = numWithCommas(Number(loanAmount));
  }
}

function YEARFRAC(start_date, end_date, basis) {
  // Initialize parameters
  var basis = typeof basis === 'undefined' ? 0 : basis;
  var sdate = moment(new Date(start_date));
  var edate = moment(new Date(end_date));

  // Return error if either date is invalid
  if (!sdate.isValid() || !edate.isValid()) return '#VALUE!';

  // Return error if basis is neither 0, 1, 2, 3, or 4
  if ([0, 1, 2, 3, 4].indexOf(basis) === -1) return '#NUM!';

  // Return zero if start_date and end_date are the same
  if (sdate === edate) return 0;

  // Swap dates if start_date is later than end_date
  if (sdate.diff(edate) > 0) {
    var edate = moment(new Date(start_date));
    var sdate = moment(new Date(end_date));
  }

  // Lookup years, months, and days
  var syear = sdate.year();
  var smonth = sdate.month();
  var sday = sdate.date();
  var eyear = edate.year();
  var emonth = edate.month();
  var eday = edate.date();

  switch (basis) {
    case 0:
      // US (NASD) 30/360
      // Note: if eday == 31, it stays 31 if sday < 30
      if (sday === 31 && eday === 31) {
        sday = 30;
        eday = 30;
      } else if (sday === 31) {
        sday = 30;
      } else if (sday === 30 && eday === 31) {
        eday = 30;
      } else if (smonth === 1 && emonth === 1 && sdate.daysInMonth() === sday && edate.daysInMonth() === eday) {
        sday = 30;
        eday = 30;
      } else if (smonth === 1 && sdate.daysInMonth() === sday) {
        sday = 30;
      }
      return (eday + emonth * 30 + eyear * 360 - (sday + smonth * 30 + syear * 360)) / 360;
      break;

    case 1:
      // Actual/actual
      var feb29Between = function (date1, date2) {
        // Requires year2 == (year1 + 1) or year2 == year1
        // Returns TRUE if February 29 is between the two dates (date1 may be February 29), with two possibilities:
        // year1 is a leap year and date1 <= Februay 29 of year1
        // year2 is a leap year and date2 > Februay 29 of year2

        var mar1year1 = moment(new Date(date1.year(), 2, 1));
        if (moment([date1.year()]).isLeapYear() && date1.diff(mar1year1) < 0 && date2.diff(mar1year1) >= 0) {
          return true;
        }
        var mar1year2 = moment(new Date(date2.year(), 2, 1));
        if (moment([date2.year()]).isLeapYear() && date2.diff(mar1year2) >= 0 && date1.diff(mar1year2) < 0) {
          return true;
        }
        return false;
      };
      var ylength = 365;
      if (syear === eyear || (syear + 1 === eyear && (smonth > emonth || (smonth === emonth && sday >= eday)))) {
        if (syear === eyear && moment([syear]).isLeapYear()) {
          ylength = 366;
        } else if (feb29Between(sdate, edate) || (emonth === 1 && eday === 29)) {
          ylength = 366;
        }
        return edate.diff(sdate, 'days') / ylength;
      } else {
        var years = eyear - syear + 1;
        var days = moment(new Date(eyear + 1, 0, 1)).diff(moment(new Date(syear, 0, 1)), 'days');
        var average = days / years;
        return edate.diff(sdate, 'days') / average;
      }
      break;

    case 2:
      // Actual/360
      return edate.diff(sdate, 'days') / 360;
      break;

    case 3:
      // Actual/365
      return edate.diff(sdate, 'days') / 365;
      break;

    case 4:
      // European 30/360
      if (sday === 31) sday = 30;
      if (eday === 31) eday = 30;
      // Remarkably, do NOT change February 28 or February 29 at ALL
      return (eday + emonth * 30 + eyear * 360 - (sday + smonth * 30 + syear * 360)) / 360;
      break;
  }
}

const rangePersonal_new = []
const rangeTenurePersonal = []

function validateFormAndCalculatePersonal() {
    addCommas('loan-amt-personal-input');
    const loan_amt_input = removeComma(document.getElementById("loan-amt-personal-input").value);
    const loan_amt = document.getElementById("loan-amt-personal");
    const tenure_months_input = document.getElementById("tenure-months-personal-input").value;
    const tenure_months = rangeTenurePersonal[document.getElementById("tenure-months-personal").value];
    const interest_rate_input = document.getElementById("interest-rate-personal-input").value;
    const interest_rate = rangePersonal_new[document.getElementById("interest-rate-personal").value];

    const err_loan_amt = validateRangeInput(loan_amt_input, loan_amt.max, loan_amt.min, 'error-loan-amt-personal');
    let err_tenure_months = validateRangeInput(tenure_months_input, rangeTenurePersonal[rangeTenurePersonal.length - 1], rangeTenurePersonal[0], 'error-tenure-months-personal');
    const err_interest_rate = validateRangeInput(interest_rate_input, rangePersonal_new[rangePersonal_new.length - 1], rangePersonal_new[0], 'error-interest-rate-personal');

    if (err_tenure_months) {
        if (parseFloat(tenure_months_input) % 6 != 0) {
            err_tenure_months = false;
            document.querySelector('.error-tenure-months-personal').innerHTML = 'Please enter number multiple of 6.';
        }
        else {
            document.querySelector('.error-tenure-months-personal').innerHTML = '';
        }
    }

    if (err_loan_amt, err_tenure_months, err_interest_rate) {
        const roi_per_month = ((interest_rate_input)/(12*100));
        const roi_1 = (1+roi_per_month)
        const emi_amt = (loan_amt_input * roi_per_month * (Math.pow(roi_1, tenure_months)/(Math.pow(roi_1, tenure_months)-1)));
        const interest_payable = (emi_amt * tenure_months) - loan_amt_input;

        document.getElementById("emi_amt_personal").innerHTML = '&#8377; ' + numWithCommas(Math.round(emi_amt));
        document.getElementById("interest_payable_personal").innerHTML = '&#8377; ' + numWithCommas(Math.round(interest_payable));
    }
}

$(document).ready(function () {
    
    let tenure_input = document.getElementById("tenure-months-personal").value;
    let tenure_input_min = parseInt(document.getElementById("tenure-months-personal").min);
    let tenure_input_max = parseInt(document.getElementById("tenure-months-personal").max);
    let interest_rate_input = document.getElementById("interest-rate-personal-input").value;
    let interest_rate_input_min = parseFloat(document.getElementById("interest-rate-personal").min);
    let interest_rate_input_max = parseFloat(document.getElementById("interest-rate-personal").max);
    for (i = interest_rate_input_min; i < (interest_rate_input_max + .25); i = i + 0.25) {
        const val = parseFloat(i.toFixed(2)).toString()
        rangePersonal_new.push(val);
    }
    if(document.getElementById('interest-rate-personal')){
        document.getElementById("interest-rate-personal").max = rangePersonal_new.length - 1;
        document.getElementById("interest-rate-personal").min = 0;
        document.getElementById("interest-rate-personal").value = rangePersonal_new.indexOf(interest_rate_input);

    for (j = tenure_input_min; j < (tenure_input_max + 1); j = j + 6) {
        const val = parseFloat(j.toFixed(2)).toString();
        rangeTenurePersonal.push(val);
    }
    document.getElementById("tenure-months-personal").max = rangeTenurePersonal.length - 1;
    document.getElementById("tenure-months-personal").min = 0;
    document.getElementById("tenure-months-personal").value = rangeTenurePersonal.indexOf(tenure_input);

    setOnRangeChange('loan-amt-personal-input', 'loan-amt-personal', validateFormAndCalculatePersonal);
    setOnRangeChange('tenure-months-personal-input', 'tenure-months-personal', validateFormAndCalculatePersonal, rangeTenurePersonal);
    setOnRangeChange('interest-rate-personal-input', 'interest-rate-personal', validateFormAndCalculatePersonal, rangePersonal_new);

    validateFormAndCalculatePersonal()
    }
    
});
$(".product-slider").slick({
  dots: !0,
  arrows: !0,
  infinite: !1,
  autoplay: !1,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3, dots: !1 } },
    { breakpoint: 991, settings: { slidesToShow: 2, dots: !0, arrows: !1 } },
    { breakpoint: 560, settings: { slidesToShow: 1, dots: !0, arrows: !1 } },
  ],
});
$(window).on("load resize orientationchange", function () {
  setTimeout(function () {
    $(".product-slider .deal-card").equalHeights();
  }, 500);
});

$(".horizontalTab li").on(
  "click",
  function () {
    setTimeout(function () {
      $(".product-slider .deal-card").equalHeights();
    }, 500);
  }
);
(function () {
  const relatedOneColBlogContainer = $("#related-blogs-onecol");
  if (!relatedOneColBlogContainer.length) {
    return;
  }
  const domainUrl = location.origin;
  const searchPath = $("#searchPath-onecol").attr("data-searchPath");
  const start = 0;
  const blimit = 2;
  let headingElement = document.getElementById("heading-element");
  let tag = headingElement.getAttribute("heading-tag") ? headingElement.getAttribute("heading-tag") : "h5";
  function fetchOneColBlogsData() {
    return fetch(
      domainUrl +
        "/content/icicibank.blogsearch.json?searchPath=" +
        searchPath +
        "&start=" +
        start +
        "&blimit=" +
        blimit +
        "&orderby=publishdate"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data && data["cards"]) {
          generateOneColHTML(data["cards"]);
        }
      })
      .catch(function () {
        // loader.removeClass("card-loading");
        console.log("error in related blogs");
      });
  }
  fetchOneColBlogsData();

  function generateOneColHTML(cards) {
    for (let i = 0, l = cards.length; i < l; i++) {
      const html =
        "<div class='card-item'>" +
        "<div class='content'>" +
        "<" + tag + "><a href='" +
        cards[i].link +
        "'>" +
        cards[i].title +
        "</a></" + tag + ">" +
        "<div class='content-bottom'>" +
        "<p>" +
        moment(cards[i].publishdate).format("D MMM, YYYY") +
        "</p> " +
        "</div>" +
        "</div>" +
        "</div>";
      relatedOneColBlogContainer.append(html);
    }
  }
})();

(function () {
  const relatedTwoColBlogContainer = $("#related-blogs-twocol");
  if (!relatedTwoColBlogContainer.length) {
    return;
  }
  const domainUrl = location.origin;
  const searchPath = $("#searchPath-twocol").attr("data-searchPath");
  const start = 0;
  const limits = 2;
  let headingElement = document.getElementById("heading-element");
  let tag = headingElement.getAttribute("heading-tag") ? headingElement.getAttribute("heading-tag") : "h5";
  function fetchTwoColBlogsData() {
    return fetch(
      domainUrl +
        "/content/icicibank.blogsearch.json?searchPath=" +
        searchPath +
        "&start=" +
        start +
        "&limits=" +
        limits +
        "&orderby=publishdate"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data && data["cards"]) {
          generateTwoColHTML(data["cards"]);
        }
      })
      .catch(function () {
      });
  }
  fetchTwoColBlogsData();

  function generateTwoColHTML(cards) {
    for (let i = 0, l = cards.length; i < l; i++) {
      const html =
        "<div class='card-item'>" +
        "<a href='" +
        cards[i].link +
        "'>" +
        "<div class='media'>" +
        "<img src='" +
        cards[i].image +
        "' />" +
        "</div>" +
        "<div class='content'>" +
        "<" + tag + ">" +
        cards[i].title +
        "</" + tag + ">" +
        "<div class='content-bottom'>" +
        "<p>" +
        moment(cards[i].publishdate).format("D MMM, YYYY") +
        "</p>" +
        "</div>" +
        "</div>" +
        "</a>" +
        "</div>";
      relatedTwoColBlogContainer.append(html);
    }
  }
})();

(function () {
  const relatedThreeColBlogContainer = $("#related-blogs-threecol");
  if (!relatedThreeColBlogContainer.length) {
    return;
  }
  const domainUrl = location.origin;
  const searchPath = $("#searchPath-threecol").attr("data-searchPath");
  const start = 0;
  const limit = 3;
  let headingElement = document.getElementById("heading-element");
  let tag = headingElement.getAttribute("heading-tag") ? headingElement.getAttribute("heading-tag") : "h5";
  function fetchThreeColBlogsData() {
    return fetch(
      domainUrl +
      "/content/icicibank.blogsearch.json?searchPath=" +
      searchPath +
      "&start=" +
      start +
      "&limit=" +
      limit +
      "&orderby=publishdate"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data && data["cards"]) {
          generateThreeColHTML(data["cards"]);
        }
      })
      .catch(function () {
      });
  }
  fetchThreeColBlogsData();

  function generateThreeColHTML(cards) {
    for (let i = 0, l = cards.length; i < l; i++) {
      const html =
        "<div class='card-item'>" +
        "<a target='blank' href='" +
        cards[i].link +
        "'>" +
        "<div class='media'>" +
        "<img src='" +
        cards[i].image +
        "' />" +
        "</div>" +
        "<div class='content'>" +
        "<" + tag + ">" +
        cards[i].title +
        "</" + tag + ">" +
        "<div class='content-bottom'>" +
        "<p>" +
        moment(cards[i].publishdate).format("D MMM, YYYY") +
        "</p>" +
        "</div>" +
        "</div>" +
        "</a>" +
        "</div>";
      relatedThreeColBlogContainer.append(html);
    }
  }

  $(window).on("load resize orientationchange", function () {
    if ($(window).width() > 991) {
      $(".related-products .row, .how-it-works-slider").each(function () {
      });
    }
  });
})();

(function () {
  const relatedFourColBlogContainer = $("#related-blogs-fourcol");
  if (!relatedFourColBlogContainer.length) {
    return;
  }
  const domainUrl = location.origin;
  const searchPath = $("#searchPath-fourcol").attr("data-searchPath");
  const start = 0;
  const limit = 4;
  let headingElement = document.getElementById("heading-element");
  let tag = headingElement.getAttribute("heading-tag") ? headingElement.getAttribute("heading-tag") : "h5";
  function fetchFourColBlogsData() {
    return fetch(
      domainUrl +
      "/content/icicibank.blogsearch.json?searchPath=" +
      searchPath +
      "&start=" +
      start +
      "&limit=" +
      limit +
      "&orderby=publishdate"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data && data["cards"]) {
          generateFourColHTML(data["cards"]);
        }
      })
      .catch(function () {
        // loader.removeClass("card-loading");
        console.log("error in related blogs");
      });
  }
  fetchFourColBlogsData();

  function generateFourColHTML(cards) {
    for (let i = 0, l = cards.length; i < l; i++) {
      const html =
        "<div class='card-item'>" +
        "<a target='blank' href='" +
        cards[i].link +
        "'>" +
        "<div class='media'>" +
        "<img src='" +
        cards[i].image +
        "' />" +
        "</div>" +
        "<div class='content'>" +
        "<" + tag + ">" +
         cards[i].title +
         "</" + tag + ">" +
        "<div class='content-bottom'>" +
        "<p>" +
        moment(cards[i].publishdate).format("D MMM, YYYY") +
        "</p>" +
        "</div>" +
        "</div>" +
        "</a>" +
        "</div>";
      relatedFourColBlogContainer.append(html);
    }
    var matchMediaQBlog = window.matchMedia("(max-width: 991px)")
    console.log('matchMediaQBlog',matchMediaQBlog.matches);
    getSlickFOrBlogs(matchMediaQBlog);
    getRelatedproductsdes(matchMediaQBlog);
  }
})();

  
function getSlickFOrBlogs(matchMediaQBlog) {
if($('.card-list').length > 0 && matchMediaQBlog.matches) {
  $(".related-blogs .card-list").slick({
      dots: !0,
      arrows: !0,
      infinite: !1,
      autoplay: !0,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [{
              breakpoint: 1025,
              settings: {
                  slidesToShow: 2,
              },
          },
          {
              breakpoint: 767,
              settings: {
                  arrows: false,
                  slidesToShow: 2,
              },
          },
          {
              breakpoint: 640,
              settings: {
                  arrows: false,
                  slidesToShow: 1,
                  dots: true,
                  // centerMode: true, 
                  centerPadding: "20px",
                  infinite: true,
              },
          },
      ],
  });
}
}
function getRelatedproductsdes(matchMediaQBlog) {
if($('.card-list').length > 0 && matchMediaQBlog.matches) {
  $(".relatedproductsdes .card-list").slick({
      dots: !0,
      arrows: !0,
      infinite: !1,
      autoplay: !0,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [{
              breakpoint: 1025,
              settings: {
                  slidesToShow: 2,
              },
          },
          {
              breakpoint: 767,
              settings: {
                  arrows: false,
                  slidesToShow: 2,
              },
          },
          {
              breakpoint: 640,
              settings: {
                  arrows: false,
                  slidesToShow: 1,
                  dots: true,
                  // centerMode: true, 
                  centerPadding: "20px",
                  infinite: true,
              },
          },
      ],
  });
}
}


$(document).ready(function() {
    if($('.related-video-slider').length > 0) {
        $(".related-video-slider").slick({
            dots: !0,
            arrows: !0,
            infinite: !1,
            autoplay: !0,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 640,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        dots: true,
                        // centerMode: true,
                        centerPadding: "20px",
                        infinite: true,
                    },
                },
            ],
        });
    }
})
/* form-slider' */
function loadCallback(){ 

  if ($(".lt-cards").hasClass("slick-initialized")) {
    $(".lt-cards").slick("unslick");
  }
  if($(".loan-forms .form-slider").hasClass("slick-initialized")){
    $(".loan-forms .form-slider").slick("unslick");
  }
$(".loan-forms .form-slider").slick({
    dots: true,
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    responsive: [{
            breakpoint: 1024,
            settings: {
                dots: true,
                infinite: false,
                autoplay: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: true,
            },
        },
    ],
    onInit: function() {
        $(".slick-next .slick-arraow").css("pointer-events", "none");
    },
});


}
loadCallback();

function deactiveArrow() {
  $(".form-slider .slick-arrow").addClass("arrow-disable");
}

function activateArrow() {
  $(".form-slider .slick-arrow").removeClass("arrow-disable");
}

function showFormError() {
  $(".form-slider .slick-active").find(".form-group-inner").addClass("error");
}

var disableEventsClass = "disable-el";

function disableSlickDots(index) {
  $("#offer-form .slick-dots li").eq(index).addClass(disableEventsClass);
  $("#offer-form-mob .slick-dots li").eq(index).addClass(disableEventsClass);
}

function enableSlickDot(index) {
  $("#offer-form .slick-dots li").eq(index).removeClass(disableEventsClass);
  $("#offer-form-mob .slick-dots li").eq(index).removeClass(disableEventsClass);
}

function validateMobile($this) {
  flag = false;
  msg = "";
  mobile = $($this).val();
  if ($.trim(mobile) == "") {
      disableSlickDots(2);
  } else if (!$.isNumeric(mobile)) {
      showFormError();
      msg = "Please enter valid Mobile number";
      $($this).addClass("error");
      disableSlickDots(2);
  } else if (mobile.length < 10) {
      showFormError();
      msg = "Please enter valid Mobile number";
      $($this).addClass("error");
      disableSlickDots(2);
  } else {
      $($this).removeClass("error");
      $(".form-slider .slick-active")
          .find(".form-group-inner")
          .removeClass("error");
      activateArrow();
      enableSlickDot(2);
      flag = true;
  }
  $(".error-msg").html(msg);
  return flag;
}

function validateName($this) {
  flag = false;
  msg = "";
  var regName = /^[a-zA-Z ]+$/;
  name = $($this).val();
  if ($.trim(name) == "") {
      disableSlickDots(1);
      disableSlickDots(2);
  } else if (!regName.test(name)) {
      showFormError();
      msg = "Please enter valid Name";
      $($this).addClass("error");
      disableSlickDots(1);
      disableSlickDots(2);
  } else {
      $($this).removeClass("error");
      $(".form-slider .slick-active")
          .find(".form-group-inner")
          .removeClass("error");
      activateArrow();
      enableSlickDot(1);
      $(".slick-dots").show();
      flag = true;
  }
  $(".error-msg").html(msg);
  return flag;
}

function validateEmail($this) {
  flag = false;
  msg = "";
  var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  email = $($this).val();
  $(".slick-arrow").removeClass("active-btn-submit");
  $(".cust-btn-submit").removeClass("active-btn-submit");
  if ($.trim(email) == "") {
  } else if (!regEmail.test(email)) {
      showFormError();
      msg = "Please enter valid Email ID";
      $($this).addClass("error");
      // disableSlickDots(0);
  } else {
      $($this).removeClass("error");
      $(".form-slider .slick-active")
          .find(".form-group-inner")
          .removeClass("error");
      activateArrow();
      $(".slick-dots").show();
      flag = true;
      $(".slick-arrow").addClass("active-btn-submit");
      $(".cust-btn-submit").addClass("active-btn-submit");
  }
  $(".error-msg").html(msg);
  return flag;
}

var timeout = 0;

$(window).on("load resize orientationchange", function() {
  windowLoadCallback();
});

function windowLoadCallback(){
  clearInterval(timeout);

  $(".form-slider").on("afterChange", function(event, slick, currentSlide) {
      if (currentSlide == 3) {
          if (!validateMobile($(".input-mobile")))
              $(".form-slider").slick('slickGoTo', parseInt(0));
          else if (!validateName($(".input-name")))
              $(".form-slider").slick('slickGoTo', parseInt(1));
          else if (!validateEmail($(".input-email")))
              $(".form-slider").slick('slickGoTo', parseInt(2));
          else {
              makeCRMcall();
              $("#offer-form-mob").trigger("reset");
              $("#offer-form").trigger("reset");
          }
      }
      if (currentSlide == 0) {
          if (!validateName($(".input-name"))) deactiveArrow();
          else activateArrow();
          $('.slick-arrow').removeClass('btn-submit active-btn-submit');
          $(".cust-btn-submit").removeClass("active-btn-submit");
      } else if (currentSlide == 1) {
          if (!validateMobile($(".input-mobile"))) deactiveArrow();
          else activateArrow();
          $(".cust-btn-submit").removeClass("active-btn-submit");
          $('.slick-arrow').removeClass('btn-submit active-btn-submit');
      } else if (currentSlide == 2) {
          $(".slick-arrow").val("Submit");
          $(".slick-arrow").text("Submit");
          $(".slick-arrow").addClass("btn-submit");
          if (!validateEmail($(".input-email"))) deactiveArrow();
          else activateArrow();
    if ($(".cust-btn-submit").length <= 0) {
      $(
        '<button class="cust-btn-submit" type="button" aria-disabled="true" value="Submit">Submit</button>'
      ).insertAfter(".form-slider .slick-next");
    } else {
      $(".cust-btn-submit").show();
    }
    $('.slick-arrow').hide();
      } else {
          $("#offer-form").trigger("reset");
          $("#offer-form-mob").trigger("reset");
      }
  });

  $("form input").on("keyup", function() {
      deactiveArrow();
      if ($(this).hasClass("input-mobile")) {
          validateMobile($(this));
      } else if ($(this).hasClass("input-name")) {
          validateName($(this));
      } else if ($(this).hasClass("input-email")) {
          validateEmail($(this));
        
      }
  });

  deactiveArrow();
  disableSlickDots(1);
  disableSlickDots(2);

  //$(".form-slider .slick-dots li").last().hide();

  $(".slick-arrow").on("click", function(e) {
      if ($(this).hasClass("arrow-disable")) {
          e.preventDefault();
      }
  });
  if($(".lead-form-callback").length > 0) {
    $(document).on("click", "button.cust-btn-submit", function () {
      $(this).addClass("activeCall");
    makeCRMcall();
  });
  }

  function makeCRMcall() {
      var formajax = $(".content").find("form").attr("ajax-page");
      if($(".callback-loan-form").length > 0) {
          var callbackIdName = '#' + $("#callBackId").text();
          var productId =  $(callbackIdName).text()
      }
      else {
           productId = $('#product-key').text()
      }
     
      var customerName = name;
      var words = customerName.split(" ");
      if (words.length == 1) {
        var customerFirstName = customerName;
        var customerLastName = customerName;
      } else {
        var customerFirstName = customerName.substr(
          0,
          customerName.indexOf(" ")
        );
        var k = customerName.substr(customerName.indexOf(" "));
        var customerLastName = k.replace(/ /g, "");
      }

      var customerContactNo = mobile;
      var customerEmailId = email
      var callbackRequest;

      if (
        (typeof formajax != "undefined" &&
          typeof productId != "undefined" &&
          typeof customerFirstName != "undefined" &&
          typeof customerLastName != "undefined" &&
          typeof customerContactNo != "undefined") ||
        typeof customerEmailId != "undefined"
      ) {
        if (
          (formajax != null &&
            formajax != "" &&
            productId != null &&
            productId != "" &&
            customerFirstName != null &&
            customerFirstName != "" &&
            customerLastName != null &&
            customerLastName != "" &&
            customerContactNo != null &&
            customerContactNo != "") ||
          customerEmailId != null ||
          customerEmailId != ""
        ) {
          callbackRequest =
            formajax +
            "apiname=save&productCode=" +
            productId +
            "&custName=" +
            customerFirstName +
            "&lastName=" +
            customerLastName +
            "&custMobNo=" +
            customerContactNo +
            "&custEmail=" +
            customerEmailId;
        }
      }
      if (typeof callbackRequest != "undefined") {
          if (callbackRequest != null && callbackRequest != "") {
            $.ajax({
              dataType: "json",
              url: callbackRequest,
              type: "GET",
              success: function (response) {
                getCallbackResults = response.getCallbackResults;

                var successFlag = 0;
                if(getCallbackResults) {
                  for (var i = 0; i < getCallbackResults.length; i++) {
                    var crmServiceResponce =
                      getCallbackResults[i].IsSuccess;
                    var message = getCallbackResults[i].Message;
                    var crmItemKey = getCallbackResults[i].ItemKey;
  
                    if (
                      typeof message != "undefined" &&
                      typeof crmItemKey != "undefined" &&
                      typeof crmServiceResponce != "undefined"
                    ) {
                      if (
                        message != null &&
                        message != "" &&
                        crmItemKey != null &&
                        crmItemKey != "" &&
                        crmServiceResponce != null &&
                        crmServiceResponce != ""
                      ) {
                        if (message == "Success") {
                          successFlag++;
                          $(".offer-form").css("display", "none");
                          $(".loan-forms .content .success-msg").css(
                            "display",
                            "inline-block"
                          );
                          $(".loan-forms .content .success-msg p").css(
                            "display",
                            "inline-block"
                          );
                        }
                      }
                    }
                  }
                }
                if (successFlag != 0 && productId.length >= successFlag) {
                } else {
                  $(".success-message").addClass("hide");
                  $(".form-slider").slickGoTo(parseInt(0));
                }
              },
              error: function () {
                  $(".success-message").addClass("hide");
                  $(".form-slider").slick('slickGoTo', parseInt(0));
                executed = false;
              },
            });
          }
        }
  }
}
$(".iMobile-slider").slick({
    dots: !0,
    arrows: !1,
    infinite: !0,
    autoplay: !0,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
(function () {
  $(".benefit-card-section .benefit-itsa-carousel").slick({
    dots: !1,
    arrows: !0,
    infinite: !0,
    autoplay: !1,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, dots: !1 } },
      { breakpoint: 767, settings: { slidesToShow: 2, dots: !0, arrows: !1 } },
      { breakpoint: 560, settings: { slidesToShow: 1, dots: !0, arrows: !1 } },
    ],
  });
})();

$(".merchants-slider").slick({
    dots: !0,
    arrows: !0,
    infinite: !1,
    autoplay: !1,
    slidesToShow: 4,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 1025,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });
$(".infographics-slider").slick({
	dots: !0,
	arrows: !0,
	infinite: !1,
	autoplay: !1,
	slidesToShow: 1,
	slidesToScroll: 1,
});
(function(){
  if($(".to-apply-slider").length > 0) {
    $(".to-apply-slider").slick({
    dots: !0,
    arrows: !0,
    infinite: !0,
    autoplay: !0,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });}
})();
$(".short-card-slider")
      .not(".slick-initialized")
      .slick({
        dots: !0,
        arrows: !0,
        infinite: !1,
        autoplay: !1,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              arrows: !1,
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 640,
            settings: {
              arrows: !1,
              centerMode: !0,
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding: "45px",
            },
          },
        ],
      });
var micrositeDataPromise,
  micrositeData,
  finalMicrositeATMResult,
  finalMicrositeBranchResult,
  totalResultLength,
  obj,
  atmServicesStr = "",
  branchServicesStr = "",
  mapRadius = "",
  selectedCategoryStr = "",
  isBranchSelected = false,
  isATMSelected = false,
  isBothSelected = true;
$(document).ready(function () {
  $(
    ".map-filter-section .sidebar-content .listing-filter .sb-box .content.service-content"
  ).mCustomScrollbar();
 
  if ($(window).width() < 991) {
    $(".atm-landing-section .map-section .filter-icon").click(function () {
      $(this).toggleClass("active");
      $(this).next(".sidebar-body").toggleClass("active");
    });

    $(document).on("click", function (e) {
      const filterIconObj = $(".atm-landing-section .map-section .filter-icon");
      if (
        $(e.target).closest(".sidebar-body").length === 0 &&
        !(
          $(e.target)[0] == filterIconObj[0] ||
          $(e.target).closest(".filter-icon")[0] == filterIconObj[0]
        )
      ) {
        $(".sidebar-body").removeClass("active");
        filterIconObj.removeClass("active");
      }
    });
  }

  var selectedCategoryStr = "";
  $(".category-section .checkbox-list input:checked").each(function (i) {
    selectedCategoryStr = selectedCategoryStr + $(this).val() + ",";
  });
  callSelectedCategoryMethod(getSelectedCategory(selectedCategoryStr));
  $(".category-section .checkbox-list input").click(function () {
    selectedCategoryStr = "";
    $(".category-section .checkbox-list input:checked").each(function (i) {
      selectedCategoryStr = selectedCategoryStr + $(this).val() + ",";
    });
    callSelectedCategoryMethod(getSelectedCategory(selectedCategoryStr));
  });
 
});

// check selected value of category after click event
function getSelectedCategory(selectedvalue) {
  if (!selectedvalue) {
    return null;
  } else if (selectedvalue.toLowerCase() == "branch,") {
    isBranchSelected = true;
    isATMSelected = false;
    isBothSelected = false;
    selectedCategoryStr = "branch";
    return "branch";
  } else if (selectedvalue.toLowerCase() == "atm,") {
    isBranchSelected = false;
    isATMSelected = true;
    isBothSelected = false;
    selectedCategoryStr = "atm";
    return "atm";
  } else {
    isBranchSelected = false;
    isATMSelected = false;
    isBothSelected = true;
    selectedCategoryStr = "";
    return "both";
  }
}
// perform operation on data
function fetchMicrositeData() {
  // get Data from API
  if (!micrositeData) {
    $(document).ready(function () {
      $.getJSON("/content/icicibank/in/en.microsite.json", function (result) {
        micrositeData = result;
        finalMicrositeATMResult = result.atm;
        finalMicrositeBranchResult = result.branch;
        micrositeDataPromise = micrositeData && fetchMapData(micrositeData);
        reloadMap(); // loading map for the first time
      }).fail(function () {});
    });
  }
}

function callSelectedCategoryMethod(selectedCategory) {
  selectedCategory && createServicesHtml(selectedCategory); // create Services HTML Dynamically
  switch (selectedCategory) {
    case "branch":
      micrositeDataPromise = fetchMapData(finalMicrositeBranchResult);
      reloadMap();
      break;
    case "atm":
      micrositeDataPromise = fetchMapData(finalMicrositeATMResult);
      reloadMap();
      break;
    case "both":
      micrositeDataPromise = micrositeData && fetchMapData(micrositeData);
      micrositeData && reloadMap();
      fetchMicrositeData();
      break;
    default:
      clearResult();
      obj.testVar = 0;
      mapRadius && $(".nearby-atm-branch").hide();
  }
}
obj = {
  value: "",
  totalValue: function letMeKnow() {
    $("#total-result").text("Showing " + this.testVar + " results");
  },
  get testVar() {
    return this.value;
  },
  set testVar(value) {
    this.value = value;
    this.totalValue();
  },
};

atmServicesStr =
  document.getElementById("serviceMapAtm") &&
  document.getElementById("serviceMapAtm").innerHTML;
branchServicesStr =
  document.getElementById("serviceMapBranch") &&
  document.getElementById("serviceMapBranch").innerHTML;
mapRadius =
  document.getElementById("mapRadius") &&
  document.getElementById("mapRadius").innerHTML;

// removing header sticky if microsite
if (mapRadius) {
  $(window).on("scroll", function () {
    $(".new-header.desktop").removeClass("sticky")
    $(".new-header.desktop").removeClass("sticky-enable")
  });
}
// transformServices function converted Services into single array
var servicesJSON =
  atmServicesStr &&
  branchServicesStr &&
  transformServices(
    convertJSON(atmServicesStr),
    convertJSON(branchServicesStr)
  );

// function to convert String to JSON
function convertJSON(str) {
  return str && str.length > 0 ? JSON.parse(str) : null;
}

// create Services dynamically from configration into DOM
function createServicesHtml(categoryType) {
  let finalServiceJson = []; // carry final list of Services
  if (categoryType && categoryType != "both") {
    finalServiceJson = servicesJSON.filter(function (e) {
      return e.type == categoryType;
    });
  } else {
    finalServiceJson = servicesJSON;
  }
  let serviceDiv = "";
  $("#service-list").html("");
  for (var i = 0; i < finalServiceJson.length; i++) {
    serviceDiv =
      serviceDiv +
      '<label class="checkbox-list"><span class="icon"><img src="/content/dam/icicibank/atmbranches/images/microsite/' +
      finalServiceJson[i].type +
      '.svg"alt="" /></span>' +
      finalServiceJson[i].name +
      '<input checked type="checkbox" checkboxType="' +
      finalServiceJson[i].type +
      '" name="map" value="' +
      finalServiceJson[i].id +
      '"><span class="checkmark"></span></label>';
  }
  $("#service-list").html(serviceDiv);
  bindClickToServices(); // binding click event in services checkbox
 
}

function bindClickToServices() {
  let checkedServicesArr = []; // contain unique id of all checked services

  // functionality for services only
  $("#service-list .checkbox-list input").click(function () {
    checkedServicesArr = [];
    $("#service-list .checkbox-list input:checkbox[name=map]:checked").each(
      function () {
        checkedServicesArr.push($(this).val());
      }
    );
    getFilteredService(checkedServicesArr); // passing unique array containing services id
  });
}

// return final list after applying service filter run on click event
function getFilteredService(uniqueServicesIds) {
  if (isBranchSelected && !isATMSelected) {
    const found = finalMicrositeBranchResult.filter(function (e) {
      return uniqueServicesIds.some(function (r) {
        return e.services.split(",").includes(r);
      });
    });
    micrositeDataPromise = fetchMapData(found);
    reloadMap();
  } else if (!isBranchSelected && isATMSelected) {
    const found = finalMicrositeATMResult.filter(function (e) {
      return uniqueServicesIds.some(function (r) {
        return e.services.split(",").includes(r);
      });
    });
    micrositeDataPromise = fetchMapData(found);
    reloadMap();
  }
  if (isBothSelected) {
    let atmServices = []; // contain list of selected ATM services when both category selected
    let branchServices = []; // contain list of selected Branch services when both category selected

    $("#service-list .checkbox-list input:checkbox[name=map]:checked").each(
      function () {
        $(this).attr("checkboxType") == "atm"
          ? atmServices.push($(this).val())
          : branchServices.push($(this).val());
      }
    );
    // filter out selected ATM from final array
    const foundAtm = finalMicrositeATMResult.filter(function (e) {
      return atmServices.some(function (r) {
        return e.services.split(",").includes(r);
      });
    });
    // filter out selected Branch from final array
    const foundBranch = finalMicrositeBranchResult.filter(function (e) {
      return branchServices.some(function (r) {
        return e.services.split(",").includes(r);
      });
    });
    micrositeDataPromise = fetchMapData({
      branch: foundBranch,
      atm: foundAtm,
    });
    reloadMap(); // reload map after services get filtered
  }
}

function fetchMapData(finalArray) {
  // creating a promise
  return new Promise(function (resolve, reject) {
    resolve(finalArray);
  });
}

// transform services into single array
function transformServices(serviceATMObj, serviceBranchObj) {
  let serviceArray = [];
  // for ATM
  for (var key in serviceATMObj) {
    if (serviceATMObj.hasOwnProperty(key)) {
      serviceArray.push({
        name: key.replace(/_/g, ' '),
        id: serviceATMObj[key],
        type: "atm",
      });
    }
  }
  // for branch
  for (var key in serviceBranchObj) {
    if (serviceBranchObj.hasOwnProperty(key)) {
      serviceArray.push({
        name: key.replace(/_/g, ' '),
        id: serviceBranchObj[key],
        type: "branch",
      });
    }
  }
  return serviceArray;
}

$(window).on("scroll", function () {
  if (($(this).scrollTop() > 150 && $(this).scrollTop() < 300) || $(this).scrollTop() > 800) {
    $(".qrcode-notification-alert").show();
  } else {
    $(".qrcode-notification-alert").hide();
  }
});

$(".map-popup-content .service-list").mCustomScrollbar();

// global variable declarations
var infowindow;
let directionA = [],
  directionB = [];
let dirBankCopy = [];
var searchPlace,
  placeA,
  currentBranchMarker = [],
  currentATMMarker = [];
var currentMarkers = []; // contain within radius marke array
let bPickPlace = false;
var directionsDisplay;
const India = { lat: 24.1244487, lng: 80.9679848 }; // By default value
var map, distanceWidget, currentLocationCords;
var isMapLoadedFirstTime = true;
var isPageLoad = true;
var _markers = []; // used to clear out the within created markers

// custom buttons on Map
function topRightControls(controlDiv, map, btnTxtArr, mapTypeArr) {
  const controlUI = document.createElement("div");
  controlUI.style.display = "flex";
  controlUI.style.cursor = "pointer";
  controlUI.style.margin = "20px 20px 0 0";
  controlUI.style.textAlign = "center";
  $(controlUI).addClass("map-type-btns");
  controlDiv.appendChild(controlUI);
  mapTypeArr.forEach(function (itm, i) {
    addMapTypeBtn(map, btnTxtArr[i], mapTypeArr[i], controlUI);
  });
}
// custom styling on Map
function addMapTypeBtn(map, btnText, mapType, controlUI) {
  const controlText = document.createElement("div");
  controlText.style.fontFamily = "Muli, sans-serif";
  controlText.style.fontSize = "11.285px";
  controlText.style.fontWeight = "700";
  controlText.style.lineHeight = "30px";
  controlText.style.paddingLeft = "10px";
  controlText.style.paddingRight = "10px";
  controlText.innerHTML = btnText;
  controlUI.appendChild(controlText);
  if (mapType === "ROADMAP") {
    $(controlText).addClass("active-map");
    controlText.style.paddingLeft = "15px";
    controlText.style.borderRadius = "50px 0 0 50px";
  }
  if (mapType === "HOME") {
    controlText.style.paddingRight = "15px";
    controlText.style.borderRadius = "0 50px 50px 0";
  }
  controlText.addEventListener("click", function () {
    $(controlUI).find(".active-map").removeClass("active-map");
    $(controlText).addClass("active-map");
    if (mapType === "HOME") {
      $(controlText).removeClass("active-map");
      $(controlUI).find("div").eq(0).addClass("active-map");
      // reload map on home button click
      ResetMap();
      loadNavigator();
      map.setMapTypeId(google.maps.MapTypeId["ROADMAP"]);
      toHomePanel(); //updated 03/08/2021
      return;
    }
    map.setMapTypeId(google.maps.MapTypeId[mapType]);
  });
}
// Starting of initializing Map and creation of Map object

function initMap() {
  var CustomOp = {
    center: India,
    zoom: 5,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    fullscreenControl: false,
    streetViewControl: true,
    mapTypeControl: false,
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_BOTTOM,
    },
  };

  map = new google.maps.Map(document.getElementById("map-content"), CustomOp);
  const topRightControlDiv = document.createElement("div");
  topRightControls(
    topRightControlDiv,
    map,
    ["MAP VIEW", "SATELLITE VIEW", "HYBRID", "HOME"],
    ["ROADMAP", "SATELLITE", "HYBRID", "HOME"]
  );
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(topRightControlDiv);

  // trigger events on map
  google.maps.event.addListener(map, "tilesloaded", function (e) {
    afterTilesLoaded();
  });
  google.maps.event.addListener(map, "drag", function (e) {
    distanceWidget && distanceWidget.set("position", map.getCenter());
  });
  google.maps.event.addListener(map, "dragend", function (e) {
    distanceWidget && fetchData();
  });
  initialize(); // function to initialize search operation of Map functionality

  //direction between route: begin 03/08/2021
  var directionsService = new google.maps.DirectionsService();

  directionsDisplay = new google.maps.DirectionsRenderer();
  directionsDisplay.setMap(map);
  google.maps.event.addDomListener(
    document.getElementById("get-dir-submit"),
    "click",
    calcRoute
  );

  function calcRoute() {
    if (directionA && directionA.length) {
      var start = new google.maps.LatLng(directionA[0], directionA[1]);
      var end = new google.maps.LatLng(directionB[0], directionB[1]);
      var request = {
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.DRIVING,
      };
      directionsService.route(request, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
          directionsDisplay.setMap(map);
          let routeNode = directionsDisplay.directions.routes[0].legs[0];
          let routeStatHtml =
            routeNode.distance.text + "," + routeNode.duration.text;
          $(".df-search-instruction .total-distance").html(routeStatHtml);
          let routeDetailsHtml = "<ul>";
          routeNode.steps &&
            routeNode.steps.length &&
            routeNode.steps.forEach(function (item, index) {
              routeDetailsHtml +=
                '<li><p class="number">' +
                index +
                1 +
                '. </p><div class="direction-block"><p class="directions">' +
                item.instructions +
                '</p><p class="distance">' +
                item.distance.text +
                "," +
                item.duration.text +
                "</p></div></li>";
            });
          routeDetailsHtml += "</ul>";
          $(".df-search-instruction .instruction-box").html(routeDetailsHtml);
        } else {
          console.error(
            "Directions Request from " +
              start.toUrlValue(6) +
              " to " +
              end.toUrlValue(6) +
              " failed: " +
              status
          );
        }
      });
    } else {
      resetDirectionPanel();
    }
  }
  //direction between route: end

  //places search: begin
  function initialize() {
    var searchDirection = [];
    var autoCompleteService = new google.maps.places.AutocompleteService();
    var placesService = new google.maps.places.PlacesService(map);
    $("#searchPlaces").autocomplete({
      source: function (inputTerm, i) {
        autoCompleteService.getPlacePredictions(
          {
            input: inputTerm.term,
            types: ["geocode"],
            componentRestrictions: { country: "in" },
          },
          function (predictions, status) {
            var searchResult = [];
            status == google.maps.places.PlacesServiceStatus.OK
              ? 0 == predictions.length
                ? searchResult.push({
                    label: "No match Found",
                  })
                : predictions.forEach(function (e) {
                    searchResult.push({
                      label: truncateText(e.description),
                      value: e.description,
                      placeId: e.place_id,
                    });
                  })
              : (status = "ZERO_RESULTS")
              ? searchResult.push({
                  label: "No match Found",
                })
              : searchResult.push({
                  label: status,
                }),
              i(searchResult);
          }
        );
      },
      minLength: 3,
      delay: 1e3,
      select: function (e, t) {
        placesService.getDetails(
          {
            placeId: t.item.placeId,
          },
          function (place, serviceStatus) {
            if (serviceStatus === google.maps.places.PlacesServiceStatus.OK) {
              searchDirection = [
                place.geometry.location.lat(),
                place.geometry.location.lng(),
                place.formatted_address,
              ];
              map.setCenter(
                new google.maps.LatLng(
                  place.geometry.location.lat(),
                  place.geometry.location.lng()
                )
              );
              !distanceWidget && initWidget(); // when location is off but user tries to search something load map
              distanceWidget && distanceWidget.set("position", map.getCenter());
              map.setZoom(13);
              fetchData();
            } else {
              searchDirection = [];
            }
          }
        );
      },
    });

    $("#searchDirectionA").autocomplete({
      source: function (inputTerm, i) {
        autoCompleteService.getPlacePredictions(
          {
            input: inputTerm.term,
            types: ["geocode"],
            componentRestrictions: { country: "in" },
          },
          function (predictions, status) {
            var searchResult = [];
            status == google.maps.places.PlacesServiceStatus.OK
              ? 0 == predictions.length
                ? searchResult.push({
                    label: "No match Found",
                  })
                : predictions.forEach(function (e) {
                    searchResult.push({
                      label: truncateText(e.description),
                      value: e.description,
                      placeId: e.place_id,
                    });
                  })
              : (status = "ZERO_RESULTS")
              ? searchResult.push({
                  label: "No match Found",
                })
              : searchResult.push({
                  label: status,
                }),
              i(searchResult);
          }
        );
      },
      minLength: 3,
      delay: 1e3,
      select: function (e, t) {
        placesService.getDetails(
          {
            placeId: t.item.placeId,
          },
          function (place, serviceStatus) {
            if (serviceStatus === google.maps.places.PlacesServiceStatus.OK) {
              directionA = [
                place.geometry.location.lat(),
                place.geometry.location.lng(),
                place.formatted_address,
              ];
            } else {
              directionA = [];
            }
          }
        );
      },
    });
  }
  //places search: end
  function truncateText(e, t, i) {
    return (
      null == t && (t = 50),
      null == i && (i = "..."),
      e.length > t ? e.substring(0, t - i.length) + i : e
    );
  }
  //geolocation functionality : begin//updated 03/08/2021
  function geolocate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          var lat = position.coords.latitude;
          var lng = position.coords.longitude;
          infoByGeocode(lat, lng);
        },
        function () {
          // fail cb
        }
      );
    } else {
      document.getElementById("searchDirectionA").value =
        "Geolocation is not supported by this browser.";
    }
  }

  function infoByGeocode(lat, lng) {
    var google_map_pos = new google.maps.LatLng(lat, lng);
    var google_maps_geocoder = new google.maps.Geocoder();
    google_maps_geocoder.geocode(
      { latLng: google_map_pos },
      function (results, status) {
        if (status == google.maps.GeocoderStatus.OK && results[0]) {
          const address = results[0].formatted_address;
          document.getElementById("searchDirectionA").value = address;
          directionA = [lat, lng, address];
        }
      }
    );
  }

  document.getElementById("get-geo-loc").addEventListener("click", geolocate);
  //geolocation functionality : end

  //pick point A for map: begin//updated 03/08/2021
  function pickPlace() {
    bPickPlace = !bPickPlace;
    if (bPickPlace) {
      map.setOptions({ draggableCursor: "crosshair" });
      document.getElementById("pick-point-a").style.filter = "grayscale(1)";
      map.addListener("click", function (mapsMouseEvent) {
        infoByGeocode(mapsMouseEvent.latLng.lat(), mapsMouseEvent.latLng.lng());
        setTimeout(calcRoute, 1000);
        (bPickPlace = true) && pickPlace();
      });
    } else {
      document.getElementById("pick-point-a").style.filter = "grayscale(0)";
      map.setOptions({ draggableCursor: "grab" });
      google.maps.event.clearListeners(map, "click");
    }
  }

  document.getElementById("pick-point-a").addEventListener("click", pickPlace);
  //pick point A for map: end

  // updated 27/07/2021 : end
}

// global functions : begin//updated 03/08/2021

function gm_authFailure() {
  //update 29/07/2021
  $("#map-error").removeClass("hide");
  $("#map-content").addClass("hide");
  $(".result-num").addClass("hide");
}

function toHomePanel() {
  $(".direction-filter").addClass("hide");
  $(".listing-filter").removeClass("hide");
}

function resetDirectionPanel() {
  $("#get-dir-form").get(0).reset();
  directionA = [];
  directionB = dirBankCopy;
  $("#directionB").html(directionB[2]);
  $(
    ".df-search-instruction .total-distance, .df-search-instruction .instruction-box"
  ).html("");
  directionsDisplay.setMap(null);

  (bPickPlace = true) && document.getElementById("pick-point-a").click();
}

function openGetDirSidebar(e, markerIndex) {
  const markerObj = currentMarkers[markerIndex];
  e.preventDefault();
  $(".direction-filter").removeClass("hide");
  $(".listing-filter").addClass("hide");
  infowindow && infowindow.close();
  const isBranch = !markerObj.hasOwnProperty("atmId");
  const dirBhtml = isBranch
    ? markerObj["branchName"] +
      ":" +
      markerObj["address"] +
      "-" +
      markerObj["pincode"]
    : markerObj["landmark"] +
      ":ATM ID- " +
      markerObj["poiId"] +
      markerObj["address"] +
      "-" +
      markerObj["pinCode"];
  $("#directionB").html(dirBhtml);

  dirBankCopy = directionB = [
    markerObj["latitude"],
    markerObj["longitude"],
    dirBhtml,
  ];

  resetDirectionPanel();

  $("html, body").animate(
    {
      scrollTop: $(".map-section").offset().top,
    },
    1000
  );
  // to increase height if direction panel is open onc close height will be reset
  if ($(window).width() < 480) {
    $("#map-content").height("1000");
  }
}

// global functions : end

//update 03/08/2021 : Begin
!(function () {
  //updated 03/08/2021
  $("#get-dir-form").on("submit", function (e) {
    e.preventDefault();
  });

  $("#get-dir-reset").on("click", function (e) {
    resetDirectionPanel();
  });

  $(".df-toggle #swap-dir").on("click", function (e) {
    if (directionA && directionA.length) {
      $("#directionB").html(directionA[2]);
      $("#searchDirectionA").val(directionB[2]);
      let temp = directionA;
      directionA = directionB;
      directionB = temp;
    }
  });

  // on click of close button inside direction filter box
  $(".direction-filter .close").click(function () {
    toHomePanel();
    resetDirectionPanel();
    reloadMap(); // reload map on closing the direction filter
    if ($(window).width() < 480) {
      $("#map-content").height("550"); // after closing direction filter reset Map to default height
    }
  });
})();

// all recent changes
$(document).ready(function(){
  if($('.microsite-comp').length>0){  
    if (typeof google === "object" && typeof google.maps === "object") {
      google.maps && google.maps.event.addDomListener(window, "load", initMap); // loading map initial method to window main listner for creating Map
    }
  }
});

function afterTilesLoaded() {
  if (isMapLoadedFirstTime) {
    loadNavigator();
  }
}
var navigatorLatLng;
// load current postion of user
function loadNavigator() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        // Location is available
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        navigatorLatLng = new google.maps.LatLng(pos.lat, pos.lng);
        currentLocationCords = navigatorLatLng;
        map.setCenter(navigatorLatLng);
        map.setZoom(13);
        initWidget();
      },
      function () {
        // Location is not available
        // handleLocationError(true, map.getCenter());
        map.getCenter();
        map.setZoom(5);
     
        $(".section.location-section").hide(); // hiding nearby continer if location is off
      }
    );
  } else {
    // Browser doesn't support Geolocation
    
    map.getCenter();
    map.setZoom(5);
   
    $(".section.location-section").hide(); // hiding nearby continer if location is off
  }
  isMapLoadedFirstTime = false;
}

// initializing setup for DistanceWidget object
function initWidget() {
  distanceWidget = new DistanceWidget();
  clearResult();
  distanceWidget && fetchData();
}

function DistanceWidget() {
  this.set("map", map);
  this.set("position", map.getCenter());
  var centerCustomIcon = {
    url: "/content/dam/icicibank/atmbranches/images/microsite/Center.png",
    size: new google.maps.Size(24, 24),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(12, 12),
  };
  var centerMarker = new google.maps.Marker({
    draggable: true,
    raiseOnDrag: false,
    icon: centerCustomIcon,
    title: "Drag to move new location!",
  });
  centerMarker.bindTo("map", this);
  centerMarker.bindTo("position", this);

  let that = this;
  // added listner to marker after drag functionality
  google.maps.event.addListener(centerMarker, "dragend", function () {
    fetchData();
    that.fitCenter();
  });

  // Radius Widget Object
  var createRadiusObj = new RadiusWidget();
  createRadiusObj.bindTo("map", this);
  createRadiusObj.bindTo("center", this, "position");
  this.bindTo("distance", createRadiusObj);
  this.bindTo("bounds", createRadiusObj);
}

function RadiusWidget() {
  var circle = new google.maps.Circle({
      fillOpacity: 0.2,
      fillColor: "#A7A7A7",
      strokeColor: "#000000",
      strokeWeight: 1,
      strokeOpacity: 0.8,
      zIndex: -1,
    }),
    t = mapRadius; // circle radius
  $(document).ready(function () {
    $(window).width() <= 980 && ((t = 5), map.setZoom(12));
  });
  this.set("distance", t);
  this.bindTo("bounds", circle);
  circle.bindTo("center", this);
  circle.bindTo("map", this);
  circle.bindTo("radius", this);
  this.addSizer_(); // resizable marker function
}

if (typeof google === "object" && typeof google.maps === "object") {
  // creating DistanceWidget,RadiusWidget as MVCObject object
  DistanceWidget.prototype = new google.maps.MVCObject();
  RadiusWidget.prototype = new google.maps.MVCObject();
}
DistanceWidget.prototype.fitCenter = function () {
  map.setCenter(this.get("position"));
};

RadiusWidget.prototype.distance_changed = function () {
  this.set("radius", 1e3 * this.get("distance"));
};

RadiusWidget.prototype.setDistance = function () {
  var distanceBetweenPoints = this.distanceBetweenPoints_(
    this.get("center"),
    this.get("sizer_position")
  );
  this.set("distance", distanceBetweenPoints);
  if (this.get("bounds")) {
    let changed_latLong = new google.maps.LatLng(
      this.get("center").lat(),
      this.get("bounds").getNorthEast().lng()
    );
    this.set("sizer_position", changed_latLong);
  }
};

RadiusWidget.prototype.distanceBetweenPoints_ = function (sizerPos, centerPos) {
  if (!sizerPos || !centerPos) return 0;
  var i = ((centerPos.lat() - sizerPos.lat()) * Math.PI) / 180,
    r = ((centerPos.lng() - sizerPos.lng()) * Math.PI) / 180,
    n =
      Math.sin(i / 2) * Math.sin(i / 2) +
      Math.cos((sizerPos.lat() * Math.PI) / 180) *
        Math.cos((centerPos.lat() * Math.PI) / 180) *
        Math.sin(r / 2) *
        Math.sin(r / 2),
    s = 6371 * (2 * Math.atan2(Math.sqrt(n), Math.sqrt(1 - n)));
  return s > 10 && (s = 10), s < 0.5 && (s = 0.5), s;
};

RadiusWidget.prototype.center_changed = function () {
  if (this.get("bounds")) {
    var center_lng = this.get("bounds").getNorthEast().lng(),
      sizerPos = new google.maps.LatLng(this.get("center").lat(), center_lng);
    this.set("sizer_position", sizerPos);
  }
};

RadiusWidget.prototype.fitCircle = function () {
  if (this.get("bounds")) {
    map.fitBounds(this.get("bounds"));
    var fitCircleLng = this.get("bounds").getNorthEast().lng(),
      fitCirclePos = new google.maps.LatLng(
        this.get("center").lat(),
        fitCircleLng
      );
    this.set("sizer_position", fitCirclePos);
  }
};

RadiusWidget.prototype.addSizer_ = function () {
  var resizableIcon = {
      url: "/content/dam/icicibank/atmbranches/images/microsite/Resize.png",
      size: new google.maps.Size(24, 24),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(12, 12),
    },
    resizableMarker = new google.maps.Marker({
      draggable: true,
      icon: resizableIcon,
      cursor: "ew-resize",
      title: "Drag to resize the cicle!",
      raiseOnDrag: false,
    });
  resizableMarker.bindTo("map", this);
  resizableMarker.bindTo("position", this, "sizer_position");
  var that = this;
  google.maps.event.addListener(resizableMarker, "drag", function () {
    that.setDistance();
  }),
    google.maps.event.addListener(resizableMarker, "dragend", function () {
      that.fitCircle();
      fetchData();
    });
};

function getdistantTooltipContent(distance) {
  var tooltipHtml = "";
  return (
    distance && (tooltipHtml = "<div>" + roundNumber(distance, 2) + " </div>"),
    tooltipHtml
  );
}

function CreateMarker(totalMarkers) {
  // create markers as per current location and setting its content
  clearResult(); // clearing existing markers if any before creating new one
  totalMarkers.forEach(function (i, index) {
    const isBranch = !i.hasOwnProperty("atmId"); // check if ATM or Branch
    infowindow = new google.maps.InfoWindow({
      pixelOffset: new google.maps.Size(180, 150),
    });
    let marker = new google.maps.Marker({
      map: map,
      position: new google.maps.LatLng(i.latitude, i.longitude),
      icon: isBranch
        ? "/content/dam/icicibank/atmbranches/images/microsite/branch_marker.png"
        : "/content/dam/icicibank/atmbranches/images/microsite/atm_marker.png", // null = default icon
      title:
        (isBranch ? "" : i["landmark"] + " : ") +
        i["address"] +
        " " +
        i["city"] +
        " " +
        i["state"] +
        " - " +
        (isBranch ? i["pincode"] : i["pinCode"]),
    });
    _markers.push(marker);
    google.maps.event.addListener(marker, "click", openMarkerInfo); // on click of marker open pop up

    function openMarkerInfo() {
      // setting popup content
      infowindow.setContent(
        ' <div class="map-popup-content"> <h5>' +
          (isBranch ? i["branchName"] : i["title"]) +
          '</h5> <div class="address"> <span class="map-icon"> <img src="/content/dam/icicibank/atmbranches/images/microsite/map.svg" alt="" /> </span> <p> ' +
          i["address"] +
          (!isBranch
            ? ", " + i["city"] + ", " + i["state"] + ", " + i["pinCode"]
            : ", " + i["pincode"]) +
          " </p> </div>" +
          (isBranch
            ? '<div class="address"> <span class="map-icon"> <img src="/content/dam/icicibank/atmbranches/images/microsite/time.svg" alt="" /> </span> <p>' +
              "IFSC CODE: " +
              i["ifsc"] +
              "</p> </div>"
            : "") +
          (isBranch
            ? '<div class="address"> <span class="map-icon"> <img src="/content/dam/icicibank/atmbranches/images/microsite/time.svg" alt="" /> </span> <p>' +
              "Monday-Saturday Branch Working Hrs: " +
              i["mondayToSaturdayBranchWorking"] +
              "<br/> Monday-Saturday Cash Working Hrs: " +
              i["mondayToSaturdayCashBranchWorking"] +
              "<br/> (Closed on 2nd and 4th Saturday)" +
              "</p> </div>"
            : "") +
          "<h5>Services</h5>" +
          (isBranch
            ? serviceContainerPopup(i["servicesNames"])
            : serviceContainerPopup(i["micrositeServiceNames"])) +
          '<div class="button-group"> <a class="ic-btn ' +
          (isBranch ? "get-dir-branch" : "get-dir-atm") +
          '" href="#" onclick="openGetDirSidebar(event, ' +
          index +
          ')">Get Directions</a> </div> </div>'
      );
      infowindow.open(map, marker);
      setTimeout(function () {
        $(".map-popup-content .service-list").mCustomScrollbar();
      }, 100);
    }
    //adding cards related to marker: end
  });
}

// returning updated set of services of a particular marker
function serviceContainerPopup(sevNameArr) {
  let sevDiv = "";
  sevNameArr &&
    sevNameArr.split(",").forEach(function (i, index) {
      if (i) {
        sevDiv =
          sevDiv +
          '<li> <div class="ser-icon"> <img src="/content/dam/icicibank/atmbranches/images/microsite/' +
          modifyImageName(i) +
          '.svg" alt="" /> </div>' +
          modifyServiceName(i) +
          "</li>";
      }
    });
  return '<ul class="service-list">' + sevDiv + "</ul>";
}
// to modify image name of service
function modifyImageName(imgName) {
  return imgName.replace(/[^A-Z0-9]/ig, "-").toLowerCase();
}
// to modify name of service
function modifyServiceName(servName) {
  return servName.replace(/-/g, " ");
}

function fetchData() {
  // get all microsite data
  var d;
  currentMarkers = [];
  currentBranchMarker = [];
  currentATMMarker = [];
  micrositeDataPromise &&
    micrositeDataPromise
      .then(function (result) {
        result && result.branch && getBranchMarkersArray(result.branch);
        result && result.atm && getATMMarkersArray(result.atm);
        result &&
          !result.branch &&
          !result.atm &&
          iterateForMarkers(result, selectedCategoryStr);
        obj.testVar = currentMarkers.length; // to show count of current markers on UI
        // to sync Map with nearby this function is used
        callNearbyFunction(
          currentBranchMarker,
          currentATMMarker,
          distanceWidget.get("position").lat(),
          distanceWidget.get("position").lng()
        );
        CreateMarker(currentMarkers); // Creating markers within radius including popup
      })
      .catch(console.error);
}
function iterateForMarkers(finalResponse, type) {
  // extracting markers within the radius and keeping that currentMarkers in seperate Array
  for (var i = 0; i < finalResponse.length; i++) {
    d =
      distanceWidget &&
      distance(
        distanceWidget.get("position").lat(),
        distanceWidget.get("position").lng(),
        finalResponse[i].latitude,
        finalResponse[i].longitude,
        "K"
      );
    if (((distanceWidget && distanceWidget.get("distance")) || mapRadius) > d) {
      currentMarkers.push(finalResponse[i]);
    }
    // this below logic to pass only required coordinates to nearby to decrease bigger iteration
    if (6 > d) {
      if (type !== "") {
        type == "branch"
          ? currentBranchMarker.push(finalResponse[i])
          : currentATMMarker.push(finalResponse[i]);
      } else {
        currentBranchMarker = [];
        currentATMMarker = [];
      }
    }
  }
}
function getBranchMarkersArray(branchArray) {
  // runs only for branch
  iterateForMarkers(branchArray, (type = "branch"));
}
function getATMMarkersArray(atmArray) {
  // runs only for ATM
  iterateForMarkers(atmArray, (type = "atm"));
}
function distance(lat1, lon1, lat2, lon2, unit) {
  var radlat1 = (Math.PI * lat1) / 180;
  var radlat2 = (Math.PI * lat2) / 180;
  var radlon1 = (Math.PI * lon1) / 180;
  var radlon2 = (Math.PI * lon2) / 180;
  var theta = lon1 - lon2;
  var radtheta = (Math.PI * theta) / 180;
  var dist =
    Math.sin(radlat1) * Math.sin(radlat2) +
    Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  dist = Math.acos(dist);
  dist = (dist * 180) / Math.PI;
  dist = dist * 60 * 1.1515;
  if (unit == "K") {
    dist = dist * 1.609344;
  }
  if (unit == "N") {
    dist = dist * 0.8684;
  }
  return dist;
}

function roundNumber(e, t) {
  var i = Math.round(e * Math.pow(10, t)) / Math.pow(10, t) + "";
  i.indexOf(".");
  return i;
}

function clearResult() {
  if (_markers)
    for (i = 0; i < _markers.length; i++) _markers[i].setVisible(false);
  _markers = new Array();
}

function reloadMap() {
  map && map.setZoom(13);
  distanceWidget && fetchData();
}

function ResetMap() {
  map.setCenter(currentLocationCords);
  map.setZoom(13);
  clearResult();
  distanceWidget && (distanceWidget.set("map", null), (distanceWidget = null));
}

// Runs whenever user trigger event in Map passing all the microsite data for nearby
window.callNearbyFunction = function (
  micrositeBranchData,
  micrositeATMData,
  nearLat,
  nearLong
) {
  $(".nearby-atm-branch").hide();
  var showKnowMoreBtn = $(".microsite-comp").attr("showKnowMoreBtn");
  var totalNearbyATM, totalNearbyBranch;
  if (!isPageLoad) {
    // reload if both ATM and branches get empty inbetween
    $(".trending-deals-slider.atm-nearby").slick("unslick");
    $(".trending-deals-slider.branch-nearby").slick("unslick");
  }
  $(".trending-deals-slider.branch-nearby").html("");
  $(".trending-deals-slider.atm-nearby").html("");
  function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  var nearbyEl = $(".location-section");
  var localLat = parseFloat(nearLat);

  var localLong = parseFloat(nearLong);
  var localDistance = nearbyEl.attr("data-branchdistance")
    ? nearbyEl.attr("data-branchdistance")
    : "5"; //Distance in KM
  const phoneNum = nearbyEl.attr("data-phonenum");
  const knowmoreText = nearbyEl.attr("data-knowmore")
    ? nearbyEl.attr("data-knowmore")
    : "KNOW MORE";
  const getDirText = nearbyEl.attr("data-knowgetdirectionmore")
    ? nearbyEl.attr("data-knowgetdirectionmore")
    : "GET DIRECTIONS";
  const openText = nearbyEl.attr("data-branchopentext")
    ? nearbyEl.attr("data-branchopentext")
    : "Open";
  const closesText = nearbyEl.attr("data-branchclosestext")
    ? nearbyEl.attr("data-branchclosestext")
    : "Closes";
  const closedText = nearbyEl.attr("data-branchclosedtext")
    ? nearbyEl.attr("data-branchclosedtext")
    : "Closed";
  const branchtiming = nearbyEl.attr("data-branchtiming")
    ? nearbyEl.attr("data-branchtiming")
    : "24*7 , 365 days open";
  createBranchNearby();
  createATMNearby();
  isPageLoad = false;
  if (!isPageLoad && totalNearbyATM > 0 && totalNearbyBranch > 0) {
    $(".nearby-branch-tab").addClass("active");
    $(".nearby-atm-tab").removeClass("active");
    $(".nearby-branch-tab").show();
    $("#branch").addClass("active").show();
    $("#atm").removeClass("active");
  }
  function createBranchNearby() {
    var result = [];

    for (var i = 0; i < micrositeBranchData.length; i++) {
      var blat = micrositeBranchData[i].latitude;
      var blog = micrositeBranchData[i].longitude;
      let address = "";
      address += micrositeBranchData[i].address
        ? micrositeBranchData[i].address + ", "
        : "";
      address += micrositeBranchData[i].city
        ? micrositeBranchData[i].city + ", "
        : "";
      address += micrositeBranchData[i].state
        ? micrositeBranchData[i].state + ", "
        : "";
      address += micrositeBranchData[i].pincode
        ? micrositeBranchData[i].pincode + ". "
        : "";
      var btimings_weekday = micrositeBranchData[i].mondayToFridayWorkingHrs
        ? micrositeBranchData[i].mondayToFridayWorkingHrs
        : "09:30AM-05:00PM";
      var btimings_saturday = micrositeBranchData[i].saturdayWorkingHrs
        ? micrositeBranchData[i].saturdayWorkingHrs
        : "09:30AM-05:00PM";
      var url = micrositeBranchData[i].knowMoreUrl
        ? micrositeBranchData[i].knowMoreUrl
        : "";

      var bdistance = getDistanceFromLatLonInKm(
        localLat,
        localLong,
        blat,
        blog
      );
      if (bdistance < localDistance) {
        if (bdistance > 0.5) {
          result.push({
            bdistance: bdistance,
            address: address,
            burl: url || "https://maps.google.com",
            branchName:
              micrositeBranchData[i].branchName ||
              "ICICI Bank Patto Plaza, Panaji",
            bdirurl:
              micrositeBranchData[i].directionUrl || "https://maps.google.com",
            btimings_weekday: btimings_weekday,
            btimings_saturday: btimings_saturday,
          });
        }
      }
    }

    var sorted = result.sort(function (a, b) {
      return a.bdistance - b.bdistance;
    });
    var branchCount = sorted.length;
    totalNearbyBranch = sorted.length;
    if (branchCount > 0) {
      var keys = [];
      var branchSliderContainer = $("#branch .trending-deals-slider");
      var len = sorted.length > 5 ? 6 : sorted.length;
      for (var i = 0; i < len; ++i) {
        sorted[i].bphone = phoneNum ? phoneNum + " " : "1860 120 7777 ";

        sorted[i].bstatus = getOpenCloseStatus(
          sorted[i].btimings_weekday,
          sorted[i].btimings_saturday
        );

        sorted[i].bstatusText = getCloseTiming(
          sorted[i].btimings_weekday,
          sorted[i].btimings_saturday
        );
        var opencloseStatus =
          sorted[i].bstatus == "Open"
            ? '<div class="time">' +
              closesText +
              "<span>" +
              " " +
              sorted[i].bstatusText +
              "</span></div>"
            : "";
        var bhtml =
          '<div class="deal-card location-card"><div class="card-heading"><h5>' +
          sorted[i].branchName +
          '</h5><div class="open-status"><div class="status">' +
          sorted[i].bstatus +
          " " +
          "</div>" +
          opencloseStatus +
          '</div><div class="phone">' +
          sorted[i].bphone +
          '</div></div><div class="card-body"><div class="address">' +
          sorted[i].address +
          '</div><div class="button-group"><a href="' +
          sorted[i].bdirurl +
          '" class="ic-btn" target="_blank">' +
          getDirText +
          "</a> " +
          (showKnowMoreBtn == "true"
            ? '<a href="' +
              sorted[i].burl +
              '" class="ic-more" target="_blank">' +
              knowmoreText +
              "</a></div></div></div>"
            : "</div></div></div>");
        appendBranch(bhtml);
      }

      function getCloseTiming(weekdayTime, saturdayTime) {
        if (weekdayTime && saturdayTime) {
          var d = new Date();
          var day = d.getDay();
          if (day == 0) {
            return "";
          } else if (day == 6) {
            return saturdayTime.split("-")[1];
          } else {
            return weekdayTime.split("-")[1];
          }
        } else {
          return "";
        }
      }

      function getOpenCloseStatus(weekdayTime, saturdayTime) {
        var closeTime, openTime, timing;
        if (weekdayTime && saturdayTime) {
          var d = new Date();
          var day = d.getDay();
          if (day == 0) {
            return closedText;
          } else if (day == 6) {
            timing = saturdayTime.split("-");
            openTime = getTimeInMins(timing[0].toUpperCase());
            closeTime = getTimeInMins(timing[1].toUpperCase());
            return compareTime(openTime, closeTime);
          } else {
            timing = weekdayTime.split("-");
            openTime = getTimeInMins(timing[0].toUpperCase());
            closeTime = getTimeInMins(timing[1].toUpperCase());
            return compareTime(openTime, closeTime);
          }
        } else {
          return "";
        }
      }

      function compareTime(openTime, closeTime) {
        var d = new Date();
        var hour, min, curTime;
        hour = d.getHours();
        min = d.getMinutes();
        curTime = hour * 60 + min;
        if (curTime >= openTime && curTime < closeTime) {
          return openText;
        } else {
          return closedText;
        }
      }

      function getTimeInMins(str) {
        var hour, min;
        hour = str.split(":")[0];
        min = str.split(":")[1].substring(0, 2);
        if (str.toUpperCase().indexOf("PM") >= 0) {
          return (12 + parseInt(hour)) * 60 + parseInt(min);
        } else {
          return parseInt(hour) * 60 + parseInt(min);
        }
      }

      function appendBranch(bstr) {
        branchSliderContainer.append(bstr);
      }
      initNearbyBranchSlider();
      setTimeout(function () {
        $(".trending-deals-slider.branch-nearby .deal-card").equalHeights();
      }, 500);

      function initNearbyBranchSlider() {
        $(".trending-deals-slider.branch-nearby")
          .not(".slick-initialized")
          .slick({
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1025,
                settings: {
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  arrows: false,
                  dots: true,
                },
              },
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 1,
                  arrows: false,
                  dots: true,
                  centerMode: true,
                  centerPadding: "15px",
                  infinite: true,
                },
              },
            ],
          });
        $(".nearby-atm-branch").show();
      }
    } else {
      $(".nearby-branch-tab").hide();
      $(".nearby-atm-tab").addClass("active");
      $("#branch").removeClass("active");
      $("#atm").addClass("active").show();
    }
  }
  function createATMNearby() {
    var result = [];
    for (var i = 0; i < micrositeATMData.length; i++) {
      var lat = micrositeATMData[i].latitude;
      var log = micrositeATMData[i].longitude;
      let address = "";
      address += micrositeATMData[i].address
        ? micrositeATMData[i].address + ", "
        : "";
      address += micrositeATMData[i].city
        ? micrositeATMData[i].city + ", "
        : "";
      address += micrositeATMData[i].state
        ? micrositeATMData[i].state + ", "
        : "";
      address += micrositeATMData[i].pincode
        ? micrositeATMData[i].pincode + ". "
        : "";
      var distance = getDistanceFromLatLonInKm(localLat, localLong, lat, log);
      var url = micrositeATMData[i].knowMoreUrl
        ? micrositeATMData[i].knowMoreUrl
        : "";
      if (distance <= localDistance) {
        if (distance > 0.5) {
          result.push({
            distance: distance,
            address: address,
            url: url || "https://maps.google.com",
            dirurl:
              micrositeATMData[i].directionUrl || "https://maps.google.com",
            branchName: micrositeATMData[i].landmark || "ICICI BANK ATM",
          });
        }
      }
    }
    var sorted = result.sort(function (a, b) {
      return a.distance - b.distance;
    });
    var atmCount = sorted.length;
    totalNearbyATM = sorted.length;
    if (atmCount > 0) {
      var keys = [];
      $(".nearby-atm-tab").show();
      var atmSliderContainer = $("#atm .trending-deals-slider");
      var len = sorted.length > 5 ? 6 : sorted.length;
      for (var i = 0; i < len; ++i) {
        sorted[i].status = openText;
        sorted[i].statusText = branchtiming;
        var html =
          '<div class="deal-card location-card"><div class="card-heading"><h5>' +
          sorted[i].branchName +
          '</h5><div class="open-status"><div class="status">' +
          sorted[i].status +
          " " +
          '</div><div class="time">' +
          sorted[i].statusText +
          '</div></div></div><div class="card-body"><div class="address">' +
          sorted[i].address +
          '</div><div class="button-group"><a href="' +
          sorted[i].dirurl +
          '" class="ic-btn" target="_blank" >' +
          getDirText +
          "</a> " +
          (showKnowMoreBtn == "true"
            ? '<a href="' +
              sorted[i].url +
              '" class="ic-more" target="_blank">' +
              knowmoreText +
              "</a></div></div></div>"
            : "</div></div></div>");
        appendAtm(html);
      }

      function appendAtm(str) {
        atmSliderContainer.append(str);
      }
      initNearbyAtmSlider();

      setTimeout(function () {
        $(".trending-deals-slider.atm-nearby .deal-card").equalHeights();
      }, 500);

      function initNearbyAtmSlider() {
        $(".trending-deals-slider.atm-nearby")
          .not(".slick-initialized")
          .slick({
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1025,
                settings: {
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  arrows: false,
                  dots: true,
                },
              },
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 1,
                  arrows: false,
                  dots: true,
                  centerMode: true,
                  centerPadding: "15px",
                  infinite: true,
                },
              },
            ],
          });
        $(".nearby-atm-branch").show();
        //$("#nearby-atm-branch-tab").removeClass("card-loading");
      }
    } else {
      $(".nearby-atm-tab").hide();
    }
  }

  $(".deals-section.atm-and-branch-section .nav-tabs li a").on(
    "click",
    function () {
      $(".trending-deals-slider.atm-nearby").slick("refresh");
      $(".trending-deals-slider.branch-nearby").slick("refresh");
      setTimeout(function () {
        $(".trending-deals-slider.atm-nearby .deal-card").equalHeights();
        $(".trending-deals-slider.atm-nearby .deal-card .card-body .address").equalHeights();
      }, 500);
      setTimeout(function () {
        $(".trending-deals-slider.branch-nearby .deal-card").equalHeights();
        $(".trending-deals-slider.branch-nearby .deal-card .card-body .address").equalHeights();
      }, 500);
    }
  );
  setTimeout(function () {
    $(".trending-deals-slider.branch-nearby .deal-card").equalHeights();
    $(".trending-deals-slider.branch-nearby .deal-card .card-body .address").equalHeights();
    $(".trending-deals-slider.branch-nearby .deal-card .card-heading").equalHeights();
  }, 500);
};


$('.debit-card-categories-tab .trending-deals-slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true,
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '15px',
        infinite: true,
      }
    }
    ]
});
$('.debit-card-categories-tab .nav-tabs li a').on('click', function () {
    $('.debit-card-categories-tab .trending-deals-slider').slick('refresh');
})
let loadCompareCard = [],
  totalCheckedBox = 0;
const cardUlEl =
  $("#cc-selected-card").length > 0 &&
  document.getElementById("cc-selected-card");
const cardsDetailEl =
  $("#compareCardJson").length > 0 &&
  document.getElementById("compareCardJson");
$(document).ready(function () {
  $(".account-variants-card-with-img .checkbox-list input").click(function () {
    var id = $(this).parent().attr("id");
    totalCheckedBox = $(
      ".account-variants-card-with-img .checkbox-list input:checkbox:checked"
    ).length;
    if (totalCheckedBox > 3) {
      $("#" + id + " input:checkbox:checked").prop("checked", false);
      alert("You have already selected 3 items");
      return;
    }
    if ($(this).is(":checked")) {
      loadCompareCard.push(id);
      if (loadCompareCard.length > 0) {
        $(".compare-toast.creditcard-toast").show();
      }

      addToCompareCard(loadCompareCard, cardUlEl);
    } else {
      const index = loadCompareCard.indexOf(id);
      if (index > -1) {
        loadCompareCard.splice(index, 1);
        addToCompareCard(loadCompareCard, cardUlEl);
      }
      if (loadCompareCard.length == 0) {
        $(".compare-toast.creditcard-toast").hide();
      }
    }
  });

  $(".compare-toast.creditcard-toast .removecard").click(function () {
    $(".compare-toast.creditcard-toast").hide();
    $(".account-variants-card-with-img .checkbox-list")
      .find('[type="checkbox"]')
      .prop("checked", false);
    cardUlEl ? (cardUlEl.innerHTML = "") : undefined;
    loadCompareCard = [];
  });

  // onClick of compare button from toast adding values to local storage
  $(".comparebtn.comparecard").click(function () {
    compareAllCards();
    $(".compare-toast.creditcard-toast").hide();
  });
  loadMore(); // functionality of load more
});

function addToCompareCard(loadedCard, ccUlElement) {
  ccUlElement ? (ccUlElement.innerHTML = "") : undefined;
  for (let i = 0; i < loadedCard.length; i++) {
    const cardLiEl = document.createElement("li");
    cardLiEl.setAttribute("data-id", "cc-" + loadedCard[i]);
    cardLiEl.innerHTML =
      '<span class="title">' +
      loadedCard[i] +
      '</span> <span class="cc close"></span>';
    ccUlElement && ccUlElement.appendChild(cardLiEl);
  }
  removeCardClick(loadedCard, ccUlElement);
}

function removeCardClick(loadedCard, el) {
  let liCCId;
  $(".cc.close").off();
  $(".cc.close").click(function () {
    liCCId = $(this).parent().attr("data-id").replace(/^cc-+/i, "");
    $("#" + liCCId + " input:checkbox:checked").prop("checked", false);
    const index = loadedCard.indexOf(liCCId);
    if (index > -1) {
      loadedCard.splice(index, 1);
      addToCompareCard(loadedCard, el);
    }
    if (loadedCard.length == 0) {
      $(".compare-toast.creditcard-toast").hide();
    }
  });
}

function compareAllCards() {
  const ccObj = JSON.parse(cardsDetailEl.innerHTML);
  if (loadCompareCard.length >= 2 && loadCompareCard.length <= 3) {
    var result = ccObj.filter(function (o1) {
      return loadCompareCard.some(function (o2) {
        return o1.id === o2; // return the ones with equal id
      });
    });
    let storingFinalValue =
      result.length >= 2 && result.length <= 3 && convertToString(result);
    setLocalStorage("compareCards", storingFinalValue);
  }
}

function convertToString(str) {
  return JSON.stringify(str);
}

function setLocalStorage(keyName, value) {
  localStorage.setItem(keyName, value);
}

function loadMore() {
  $(".cc-card:lt(6)").show();
  var items = $("div.cc-card").length;
  var shown = 6;
  if (items <= 6) {
    $("#load-more-cc-cards").hide();
    return;
  }

  $("#load-more-cc-cards").click(function () {
    shown = $("div.cc-card:visible").length + 6;

    if (shown < items) {
      $("div.cc-card:lt(" + shown + ")").show();
    } else {
      $("div.cc-card:lt(" + items + ")").show();
      $("#load-more-cc-cards").hide();
    }
  });
}

let loadedCards = [];
let cardDetails = [];
let ccPageLoadedCards = [],
  selectedFilters = [];
let isCardAlreadyPresent = false;
let ccPageToastEl =
  $("#ccpage-selected-card").length > 0 &&
  document.getElementById("ccpage-selected-card");
$.fn.equalMaxHeights = function () {
  var max_height = 0;
  $(this).height("auto");
  $(this).each(function () {
    max_height = Math.max($(this).outerHeight(), max_height);
  }),
    $(this).each(function () {
      $(this).height(max_height);
    });
};

$(window).on("resize orientationchange", function () {
  setCompareHeight();
});

function setCompareHeight() {
  $(".comparing-cards-section .comparing-cards").each(function () {
    $(this).find(".comparing-column .cards").equalMaxHeights();
    $(this).find(".comparing-column .cards .card-title").equalMaxHeights();
    $(this).find(".comparing-column .content").equalMaxHeights();
  });
  for (
    var i = 0;
    i <
    $(".comparing-cards-section .compare-left-heading").find(
      ".comparing-block.content"
    ).length -
    1;
    i++
  ) {
    $(".comparing-column")
      .find(".comparing-block.content:eq(" + i + ")")
      .equalMaxHeights();
  }
}

$(document).ready(function () {
  selectedFilters = [];
  loadCardData();

  $(document).on("click", ".empty-card-content", function () {
    $(".comparing-card-popup").show();
    $("body").addClass("no-scroll");
    /* 14/09/2021 code upate */
    $(".comparing-card-popup .popup-body").mCustomScrollbar();
  });

  // To close cc-popup
  $(".comparing-card-popup .close").click(function () {
    $(".comparing-card-popup .search-box-area input").val(""); // clearing search box while closing popup
    $(".popup-card-slider .card-slider .card").css("display", "block"); // showing all popup cards
    $(".comparing-card-popup").hide();
    $(".ccpage-toast.creditcard-toast").hide();
    $("body").removeClass("no-scroll");
  });

  // onClick of cc add to compare inside popup show credit card toast
  $(".popup-body .checkbox-list.cc-page-addcompare").click(function () {
    $(".ccpage-toast.creditcard-toast").show();
  });

  // onClick of add to compare add selected card to ccPageLoadedCards array and show updated toast
  $(".checkbox-list.cc-page-addcompare input").click(function () {
    var id = $(this).parent().attr("id");
    totalCheckedBox = $(
      ".popup-body .checkbox-list.cc-page-addcompare input:checkbox:checked"
    ).length;
    if (totalCheckedBox > 3) {
      $("#" + id + " input:checkbox:checked").prop("checked", false);
      alert("You have already selected 3 items");
      return;
    }
    if ($(this).is(":checked")) {
      ccPageLoadedCards.push(id);
      if (ccPageLoadedCards.length > 0) {
        $(".ccpage-toast.creditcard-toast").show();
      }

      addToCompareCard(ccPageLoadedCards, ccPageToastEl);
    } else {
      const index = ccPageLoadedCards.indexOf(id);
      if (index > -1) {
        ccPageLoadedCards.splice(index, 1);
        addToCompareCard(ccPageLoadedCards, ccPageToastEl);
      }
      if (ccPageLoadedCards.length == 0) {
        $(".ccpage-toast.creditcard-toast").hide();
      }
    }
  });

  // filters operation
  $('.filter-dropdown-content .checkbox-list input[type="checkbox"]').click(
    function () {
      selectedFilters = []; // on every select a fresh start contaiing all the selected values
      $(
        ".filter-dropdown-content .checkbox-list input:checkbox[name=cc-page]:checked"
      ).each(function () {
        selectedFilters.push({
          type: $(this).parent().parent().parent().attr("class"),
          value: $(this).val(),
        });
      });
      applyFiltersToCards(selectedFilters);
    }
  );

  $(".ccpage-toast.creditcard-toast .removecard").click(function () {
    $(".ccpage-toast.creditcard-toast").hide();
    removeCardFromCompare("all");
    setCompareHeight();
  });

  // Toggle filter container on click
  $(".filter-dropdown").click(function () {
    $(this).toggleClass("active");
    $(".filter-dropdown-content").toggleClass("hide");
  });

  // to reset all the filter at once
  $(".cc-page.reset-button").click(function () {
    $(".filter-dropdown-content .checkbox-list input:checkbox").prop(
      "checked",
      false
    );
    $(".popup-card-slider .card-slider .card h6").each(function () {
      $(".popup-card-slider .card-slider .card").css("display", "block");
    });// on reset show all cards
  });

  // start search operation
  $(".comparing-card-popup .search-box-area input").focus(function () {
    $(".comparing-card-popup .search-box-area input").val("");
    $(".search-listing").removeClass("active");
    $(".popup-card-slider .card-slider .card").css("display", "block");
  });
  $(".comparing-card-popup .search-box-area input").keyup(function () {
    $(".search-container").addClass("active");

    var inputText = $(this)[0].value.toLowerCase(); // getting search input text in lowercase matching with card unique class
    if (inputText.length > 0) {
      $(".popup-card-slider .card-slider .card h6").each(function () {
        var title = $(this).text();
        if (title.toLowerCase().indexOf(inputText) > -1) {
          $(
            ".popup-card-slider .card-slider .card." +
            title.replace(/ /g, "-").toLowerCase()
          ).css("display", "block");
        } else {
          $(
            ".popup-card-slider .card-slider .card." +
            title.replace(/ /g, "-").toLowerCase()
          ).css("display", "none");
        }
      });
    }
  });

  $(".selected-card li .close").click(function () {
    removeCardFromCompare($(this).parent().attr("data-id"));
  });
  $(".cc-page-comparebtn.comparecard").click(function (e) {
    e.preventDefault();
    populateCompare();
    $(".comparing-card-popup, .ccpage-toast.creditcard-toast").hide();
    $("body").removeClass("no-scroll");
  });
  $(".removeFromCompare").click(function () {
    removeCardFromCompare(
      $(this).closest(".comparing-column.compare-content").attr("data-id")
    );
    $(this)
      .closest(".comparing-column.compare-content")
      .find(".comparing-block")
      .addClass("hide");
    $(this)
      .closest(".comparing-column.compare-content")
      .addClass("empty-card-content")
      .find(".empty-cards")
      .removeClass("hide");
    return false;
  });
  $(".replaceCompare").click(function () {
    removeCardFromCompare(
      $(this).closest(".comparing-column.compare-content").attr("data-id")
    );
    $(".comparing-card-popup").show();
    $("body").addClass("no-scroll");
    /* 14/09/2021 code upate */
    /* popupSlider(); */
    $(".comparing-card-popup .popup-body").mCustomScrollbar();
  });
  $(".redirectToCompareCard").click(function (e) {
    var redirectData = "";
    $.each(loadedCards, function (index, id) {
      redirectData += "#" + id;
    });
    $(this).attr("href", $(this).attr("href") + "?" + redirectData);
  });
});

function removeCardFromCompare(id) {
  if (id == "all") {
    loadedCards = [];
    populateCompare();
  } else {
    if ($.inArray(id, loadedCards) !== -1) {
      loadedCards[$.inArray(id, loadedCards)] = "";
    }
  }
}

function populateCompare() {
  var cardData =
    isCardAlreadyPresent && cardDetails.length > 0
      ? cardDetails
      : getCardDetail();
  $(".comparing-column.compare-content").each(function (index) {
    if (cardData[index]) {
      $(this)
        .removeClass("empty-card-content")
        .find(".comparing-block.empty-cards")
        .addClass("hide");
      $(this).find(".comparing-block").not(".empty-cards").removeClass("hide");
      populateCompareData($(this), cardData[index]);
      deepLinking();
    } else {
      $(this)
        .addClass("empty-card-content")
        .find(".comparing-block.empty-cards")
        .removeClass("hide");
      $(this).find(".comparing-block").not(".empty-cards").addClass("hide");
    }
  });
  setTimeout(function () {
    setCompareHeight();
  }, 250);
}

function populateCompareData(ele, data) {
  var imageBlock = $(ele).find(".comparing-block.cards").not(".empty-cards");
  jQuery.each(data, function (i, val) {
    if (i == "ApplyNow") return;
    if (i == "id") {
      $(ele).attr("data-id", val);
    }
    if (i == "title") {
      imageBlock.find(".card-title").text(data.title);
      return;
    }
    if (i == "imageRef") {
      imageBlock.find(".card-image").attr("src", data.imageRef);
      return;
    }
    if (i == "ctas") {
      if (val.length > 0) {
        $(ele)
          .find(".apply-btn" + " a")
          .attr("data-app", val[0]["defaultLinkUrl"]);
        $(ele)
          .find(".apply-btn" + " a")
          .attr("data-app-android", val[0]["androidLinkUrl"]);
        $(ele)
          .find(".apply-btn" + " a")
          .attr("data-app-ios", val[0]["iosLinkUrl"]);
      }
      return;
    }
    $(ele)
      .find("." + i)
      .text(val);
  });
}

function getCardDetail() {
  let tempArray = [];
  for (let index = 0; index < cardDetails.length; index++) {
    var element = cardDetails[index];
    var element_index = $.inArray(element["id"], ccPageLoadedCards);
    if (element_index > -1) {
      tempArray[element_index] = element;
    }
  }
  return tempArray;
}
// function for applying filters to cards
function applyFiltersToCards(selectedFil) {
  if (selectedFil.length > 0) {
    $(".popup-card-slider .card-slider .card h6").each(function () {
      $(".popup-card-slider .card-slider .card").css("display", "none");
    }); // if user is using fiters then hide all cards and show only filtered cards as per below logic
  } else {
    $(".popup-card-slider .card-slider .card h6").each(function () {
      $(".popup-card-slider .card-slider .card").css("display", "block");
    });
  }
  let ar;
  for (let index = 0; index < selectedFil.length; index++) {
    var element = selectedFil[index];
    if (element["type"] == "Income") {
      ar = cardDetails.filter(function (el) {
        return el.income == element.value.split(" ")[0];
      });
      showCardsByFilters(ar);
    }
    if (element["type"] == "User Type") {
      ar = cardDetails.filter(function (el) {
        return el.userType == element.value;
      });
      showCardsByFilters(ar);
    }
    if (element["type"] == "Benefits") {
      ar = cardDetails.filter(function (el) {
        return el.benefits == element.value;
      });
      showCardsByFilters(ar);
    }
  }
}

// to show only filtered cards
function showCardsByFilters(cardsArr) {
  for (let index = 0; index < cardsArr.length; index++) {
    let id = cardsArr[index].id;
    $(".popup-card-slider .card-slider .card." + id).css("display", "block");
  }
}
function loadCardData() {
  let localStorageData = localStorage.getItem("compareCards");
  if (localStorageData) {
    cardDetails = convertJSON(localStorageData);
    isCardAlreadyPresent = true;
    populateCompare();
  } else {
    cardDetails = convertJSON(
      document.getElementById("cc-component") &&
      document.getElementById("cc-component").innerHTML
    );
    isCardAlreadyPresent = false;
  }
}

function bankingCardSlider() {
  $(".banking-card-section .card-lists").not(".slick-initialized").slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    fade: true,
  });
}

var timeoutCounterforMap;
$(window).on("load orientationchange", function () {
  clearTimeout(timeoutCounterforMap);
   timeoutCounterforMap = setTimeout(function () {
    $(".accordion--scroll").mCustomScrollbar();
    if ($(window).width() < 991) {
      bankingCardSlider();
    } else {
      $(".banking-card-section .card-lists").hasClass("slick-initialized") &&
        $(".banking-card-section .card-lists").slick("unslick");
    }
  }, 250);
});
var filterPageCardData = [];

$(document).ready(function () {
  getLoadedFilterData();

  $(
    '.filter-sidebar-page.sidebar-content .checkbox-list input[type="checkbox"]'
  ).click(function () {
    $("div.filterCardPage").hide();
    if ($(this).parent().hasClass("active")) {
      $(this).parent().removeClass("active");
    } else {
      $(this).parent().addClass("active");
    }

    var userTypeData = $(
      ".filter-sidebar-page.sidebar-content .user-type-filter.active"
    );
    var accountTypeData = $(
      ".filter-sidebar-page.sidebar-content .loan-bracket.active"
    );

    var userTypeDataArray = $.map(userTypeData, function (val, i) {
      return $(val).data("filter");
    });

    var accountTypeDataArray = $.map(accountTypeData, function (val, i) {
      return $(val).data("filter");
    });

    var combinations = [];
    if (userTypeDataArray.length > 0) {
      var userTypeTexts = $.map(userTypeData, function (val, i) {
        return $(val).text();
      });
      combinations = userTypeDataArray;
    } else {
    }

    if (accountTypeDataArray.length > 0) {
      var accountTypeTexts = $.map(accountTypeData, function (val, i) {
        return $(val).text();
      });
      if (combinations.length > 0) {
        var tempCombinations = combinations;
        combinations = [];
        $.each($(tempCombinations), function (i, c) {
          $.each($(accountTypeDataArray), function (ii, sz) {
            var combination = [c, sz];
            combinations.push(combination);
          });
        });
      } else {
        combinations = accountTypeDataArray;
      }
    } else {
    }
    // need to work more from here
    if (combinations.length > 0) {
      $.each($(combinations), function (i, val) {
        if ($.isArray(val)) {
          var classes = val.join(".");
          $("div.filterCardPage.account-variants-card" + "." + classes).show();
        } else {
          $("div.filterCardPage.account-variants-card" + "." + val).show();
        }
      });
    } else {
      $("div.filterCardPage").show();
    }

    var showDataLength = $("div.myList:visible").length;
    if (showDataLength === 0) {
      $(".compare-account").append("<div class='no-result'><br/><br/></div>");
      $(".filter-content #loadMore").css("display", "none");
    }

    var cardDataLength = $("div.card:visible").length;

    /* check if no cards found visible in compare card start */
    if (cardDataLength == 0) {
      $(".cardClick").hide();
    }
  });
});

function getLoadedFilterData() {
  filterPageCardData = convertJSON(
    document.getElementById("cardsAsJson") &&
      document.getElementById("cardsAsJson").innerHTML
  );
}

if($(".filtercard .sidebar-body .account-variants-card").text().trim() == "" && $(".filtercard .sidebar-body .account-variants-card .button-group").text().trim() == "" ){
  $(".filtercard .sidebar-body .account-variants-card").css("display","none");
}

$(document).ready(function () {
  if($('.otp-main').length > 0) {
  var getOTP = $("#getOTP").val();
  var validateOtp = $("#validateOtp").val();
  var getFedid = $("#getFedid").val();
  var getProductOffers = $("#getProductOffers").val();
  var FEDID;
  var failurecounter = 0;
  $("#mccmProductOffers").css("display", "none");
  $("#defaultProductOffers").css("display", "none");
  $(document).on("click", "#sendOTPBtnId", function () {
    var mobileNo = $("#mobileId").val();
    var $regexmobileno = /[7-9]{1}[0-9]{9}/;
    if (typeof mobileNo != "undefined") {
      if (mobileNo != null && mobileNo != "") {
        if (mobileNo.match($regexmobileno)) {
          $.ajax({
            dataType: "json",
            url: getFedid + "prodCustMobNo=" + mobileNo,
            type: "POST",
            success: function (carResponse) {
              
              var FedidResponse = carResponse["fedID"];
             
              if (typeof FedidResponse != "undefined") {
                if (FedidResponse != "" && FedidResponse != null) {
                    FEDID = FedidResponse;
                    GenerateOtp = FedidResponse;
                    
                    if (
                      typeof FEDID != "undefined" &&
                      typeof GenerateOtp != "undefined"
                    ) {
                      if (
                        FEDID != "" &&
                        FEDID != null &&
                        GenerateOtp != "" &&
                        GenerateOtp != null
                      ) {
                   
                        $("#errorMsg").empty();
                        $("#errorMsg").css("display", "none");
                        $(".verbtn").css("display", "none");
                        $(".orderotp").css("display", "none");
                        $("#otpDiv").css("display", "block");
                      } else {
                        $("#errorMsg").empty();
                        $("#errorMsg").append(
                          "<div>This is not a ICICI Bank registered mobile number. To open an account, Please <a href='/Personal-Banking/account-deposit/savings-account/index.page?ITM=nli_cms_SA_saving_account_product_offer_clickhere_textlink'>click here</a></div>"
                        );
                        $("#errorMsg").css("display", "block");
                        $("#mccmProductOffers").empty();
                        $("#mccmProductOffers").css("display", "none");
                        var elmnt = document.getElementById(
                          "websiteproductoffers"
                        );
                        elmnt.scrollIntoView();
                        $("#defaultProductOffers").css("display", "block");
                      }
                    } else {
                      $("#errorMsg").empty();
                      $("#errorMsg").append(
                        "<div>Otp max limit reached, kindly check your personalized offers after some time </div>"
                      );
                      $("#errorMsg").css("display", "block");
                      $("#mccmProductOffers").empty();
                      $("#mccmProductOffers").css("display", "none");
                      var elmnt = document.getElementById(
                        "websiteproductoffers"
                      );
                      elmnt.scrollIntoView();
                      $("#defaultProductOffers").css("display", "block");
                    }
                  // }
                } else {
                  $("#errorMsg").empty();
                  $("#errorMsg").append(
                    "<div>This is not a ICICI Bank registered mobile number. To open an account, Please <a href='/Personal-Banking/account-deposit/savings-account/index.page?ITM=nli_cms_SA_saving_account_product_offer_clickhere_textlink'>click here</a></div>"
                  );
                  $("#errorMsg").css("display", "block");
                  $("#mccmProductOffers").empty();
                  $("#mccmProductOffers").css("display", "none");
                  var elmnt = document.getElementById("websiteproductoffers");
                  elmnt.scrollIntoView();
                  $("#defaultProductOffers").css("display", "block");
                }
              } else {
                $("#errorMsg").empty();
                $("#errorMsg").append(
                  "<div>This is not a ICICI Bank registered mobile number. To open an account, Please <a href='/Personal-Banking/account-deposit/savings-account/index.page?ITM=nli_cms_SA_saving_account_product_offer_clickhere_textlink'>click here</a></div>"
                );
                $("#errorMsg").css("display", "block");
                $("#mccmProductOffers").empty();
                $("#mccmProductOffers").css("display", "none");
                var elmnt = document.getElementById("websiteproductoffers");
                elmnt.scrollIntoView();
                $("#defaultProductOffers").css("display", "block");
              }
            },
            error: function () {
             
              $("#errorMsg").empty();
              $("#errorMsg").append(
                "<div>This is not a ICICI Bank registered mobile number. To open an account, Please <a href='/Personal-Banking/account-deposit/savings-account/index.page?ITM=nli_cms_SA_saving_account_product_offer_clickhere_textlink'>click here</a></div>"
              );
              $("#errorMsg").css("display", "block");
              $("#mccmProductOffers").empty();
              $("#mccmProductOffers").css("display", "none");
              var elmnt = document.getElementById("websiteproductoffers");
              elmnt.scrollIntoView();
              $("#defaultProductOffers").css("display", "block");
            },
          });
        } else {
          $("#errorMsg").empty();
          $("#errorMsg").append(
            "<div>This is not a ICICI Bank registered mobile number. To open an account, Please <a href='/Personal-Banking/account-deposit/savings-account/index.page?ITM=nli_cms_SA_saving_account_product_offer_clickhere_textlink'>click here</a></div>"
          );
          $("#errorMsg").css("display", "block");
        }
      }
    }
  });
  $(document).on("click", "#goBtnId", function () {
    var mobileNo = $("#mobileId").val();
    var validateotp = $("#otpField").val();
    if (typeof mobileNo != "undefined" && typeof validateotp != "undefined") {
      if (
        mobileNo != null &&
        mobileNo != "" &&
        validateotp != null &&
        validateotp != ""
      ) {
        $.ajax({
          dataType: "json",
          url:
            validateOtp +
            "prodCustMobNo=" +
            mobileNo +
            "&providedOtp=" +
            validateotp +
            "&fedID=" +
            FEDID,
          type: "POST",
          success: function (response) {
            var validateOtpResponse = response;
              if(response!=null && typeof response!=undefined) {
                
                $("#errorMsg").empty();
                $("#errorMsg").css("display", "none");
              
                $("#defaultProductOffers").css("display", "none");
                $("#mccmProductOffers").empty();
                $("#mccmProductOffers").append(`<diV>${validateOtpResponse.Offer_Msg1}</diV>`);
                $("#otpField").val("");
                var elmnt = document.getElementById(
                  "websiteproductoffers"
                );
                elmnt.scrollIntoView();
                $("#mccmProductOffers").css("display", "block");
              } else {
                failurecounter = failurecounter + 1;
                if (failurecounter > 3) {
                  $("#goBtnId").css("display", "none");
                  $("#errorMsg").empty();
                  $("#errorMsg").append(
                    "<p>Invalid OTP entered max limit reached, click on resend button</p>"
                  );
                  $("#errorMsg").css("display", "block");
                  $("#mccmProductOffers").empty();
                  $("#mccmProductOffers").css("display", "none");
                  var elmnt = document.getElementById("websiteproductoffers");
                  elmnt.scrollIntoView();
                  $("#defaultProductOffers").css("display", "block");
                } else {
                  $("#errorMsg").empty();
                  $("#errorMsg").append("<p>Invalid OTP entered</p>");
                  $("#errorMsg").css("display", "block");
                  $("#mccmProductOffers").empty();
                  $("#mccmProductOffers").css("display", "none");
                  var elmnt = document.getElementById("websiteproductoffers");
                  elmnt.scrollIntoView();
                  $("#defaultProductOffers").css("display", "block");
                }
              }
            // }
          },
          error: function () {
         
            $("#errorMsg").empty();
            $("#errorMsg").append(
              "<p>Invalid OTP entered, click on resend button</p>"
            );
            $("#errorMsg").css("display", "block");
          },
        });
      }
    }
  });
  $(document).on("click", "#resendBtnId", function () {
    $("#mccmProductOffers").empty();
    $("#mccmProductOffers").css("display", "none");
    $("#defaultProductOffers").css("display", "none");
    var mobileNo = $("#mobileId").val();
    var $regexmobileno = /[7-9]{1}[0-9]{9}/;
    if (typeof mobileNo != "undefined") {
      if (mobileNo != null && mobileNo != "") {
        if (mobileNo.match($regexmobileno)) {
          $.ajax({
            dataType: "json",
            url: getFedid + "prodCustMobNo=" + mobileNo,
            type: "POST",
            success: function (carResponse) {
              var FedidResponse = carResponse["fedID"];
           
              if (typeof FedidResponse != "undefined") {
                if (FedidResponse != "" && FedidResponse != null) {
                    FEDID = FedidResponse;
                    GenerateOtp = FedidResponse;
                  
                    if (
                      typeof FEDID != "undefined" &&
                      typeof GenerateOtp != "undefined"
                    ) {
                      if (
                        FEDID != "" &&
                        FEDID != null &&
                        GenerateOtp != "" &&
                        GenerateOtp != null
                      ) {
                     
                        $("#resendBtnId").css("display", "none");
                        setTimeout(function () {
                          $("#resendBtnId").css("margin-top", "10px");
                          $("#resendBtnId").css("display", "block");
                        }, 120000);
                        $("#goBtnId").css("display", "block");
                        $("#errorMsg").empty();
                        $("#errorMsg").append(
                          "<div>Otp resent successfully</div>"
                        );
                        $("#errorMsg").css("display", "block");
                        $("#otpField").val("");
                        $(".verbtn").css("display", "none");
                        $(".orderotp").css("display", "none");
                        $("#otpDiv").css("display", "block");
                      } else {
                        $("#errorMsg").empty();
                        $("#errorMsg").append(
                          "<div>This is not a ICICI Bank registered mobile number. To open an account, Please <a href='/Personal-Banking/account-deposit/savings-account/index.page?ITM=nli_cms_SA_saving_account_product_offer_clickhere_textlink'>click here</a></div>"
                        );
                        $("#errorMsg").css("display", "block");
                        $("#mccmProductOffers").empty();
                        $("#mccmProductOffers").css("display", "none");
                        var elmnt = document.getElementById(
                          "websiteproductoffers"
                        );
                        elmnt.scrollIntoView();
                        $("#defaultProductOffers").css("display", "block");
                      }
                    } else {
                      $("#errorMsg").empty();
                      $("#errorMsg").append(
                        "<div>This is not a ICICI Bank registered mobile number. To open an account, Please <a href='/Personal-Banking/account-deposit/savings-account/index.page?ITM=nli_cms_SA_saving_account_product_offer_clickhere_textlink'>click here</a></div>"
                      );
                      $("#errorMsg").css("display", "block");
                      $("#mccmProductOffers").empty();
                      $("#mccmProductOffers").css("display", "none");
                      var elmnt = document.getElementById(
                        "websiteproductoffers"
                      );
                      elmnt.scrollIntoView();
                      $("#defaultProductOffers").css("display", "block");
                    }
                  // }
                } else {
                  $("#errorMsg").empty();
                  $("#errorMsg").append(
                    "<div>This is not a ICICI Bank registered mobile number. To open an account, Please <a href='/Personal-Banking/account-deposit/savings-account/index.page?ITM=nli_cms_SA_saving_account_product_offer_clickhere_textlink'>click here</a></div>"
                  );
                  $("#errorMsg").css("display", "block");
                  $("#mccmProductOffers").empty();
                  $("#mccmProductOffers").css("display", "none");
                  var elmnt = document.getElementById("websiteproductoffers");
                  elmnt.scrollIntoView();
                  $("#defaultProductOffers").css("display", "block");
                }
              } else {
                $("#errorMsg").empty();
                $("#errorMsg").append(
                  "<div>This is not a ICICI Bank registered mobile number. To open an account, Please <a href='/Personal-Banking/account-deposit/savings-account/index.page?ITM=nli_cms_SA_saving_account_product_offer_clickhere_textlink'>click here</a></div>"
                );
                $("#errorMsg").css("display", "block");
                $("#mccmProductOffers").empty();
                $("#mccmProductOffers").css("display", "none");
                var elmnt = document.getElementById("websiteproductoffers");
                elmnt.scrollIntoView();
                $("#defaultProductOffers").css("display", "block");
              }
            },
            error: function () {
           
              $("#errorMsg").empty();
              $("#errorMsg").append(
                "<div>This is not a ICICI Bank registered mobile number. To open an account, Please <a href='/Personal-Banking/account-deposit/savings-account/index.page?ITM=nli_cms_SA_saving_account_product_offer_clickhere_textlink'>click here</a></div>"
              );
              $("#errorMsg").css("display", "block");
              $("#mccmProductOffers").empty();
              $("#mccmProductOffers").css("display", "none");
              var elmnt = document.getElementById("websiteproductoffers");
              elmnt.scrollIntoView();
              $("#defaultProductOffers").css("display", "block");
            },
          });
        } else {
          $("#errorMsg").empty();
          $("#errorMsg").append(
            "<div>This is not a ICICI Bank registered mobile number. To open an account, Please <a href='/Personal-Banking/account-deposit/savings-account/index.page?ITM=nli_cms_SA_saving_account_product_offer_clickhere_textlink'>click here</a></div>"
          );
          $("#errorMsg").css("display", "block");
        }
      }
    }
  });
}
});

function postEvent() {
  /**Unica presentation-ajax(Post Event) component  start **/
  if ($(".presentation-post-event").length > 0) {
    $(".presentation-post-event").each(function (i) {
      var link = $(this).attr("data-presentation");
      $.ajax({
        url: link,
        success: function (data) {
          //alert(i);
        },
        error: function (jqXHR, statusText, errorThrown) {
          consoleLog(errorThrown);
        },
      });
    });
  }
  /**Unica presentation-ajax(Post Event) component  end*/

  /**Unica ajax(Post Event) component  start **/
  if ($(".postEvent").length > 0) {
    $(document).on("click", "a.postEvent", function () {
      var link = $(this).prop("rel");
      var href = $(this).attr("href");
      window.parent.location.href = href;
      $.ajax({
        url: link, //$(this).attr("href"),
        success: function (data) {
        },
        error: function (jqXHR, statusText, errorThrown) {
          consoleLog(errorThrown);
        },
      });
      return false;
    });
  }
  /**Unica ajax(Post Event) component  end*/
}

let tempArray = [];
let filters = [];
var offerData = '/content/icicibank.nearbyoffers.json'; //$("#nearByOfferData").val();
var sessionCookie;
var isLocationOn = true;
var detectLocationClicked = false;
var offersChunks = [];


let isLoadingCards = false;
let currentSortId = "latest"; // default latest
let searchInput = "";
let checkBoxFilters = []; // compares "subCategory" field in json (in backend)
let radioButtonFilter = "all"; // default "all"
const nearbyFilter_limit = 6;
let offset = 6;
let isAllCardsRendered = false;
let userSelectedCity = "";
let userLatitude = null;
let userLongitude = null;
let isUserSelectedCheckoutNearByCity = false;
const baseAPIUrl = "/content/icicibank.nearbyoffers.0." + nearbyFilter_limit + ".city.lat.lng.store.sort.searchTerm.filters.json"



$(window).on('load', function () {
    sessionStorage.setItem("topCitySelected", "");
});

sessionStorage.setItem("sessionCookie", "defaultOffers");
var date = new Date();
var currentDate = date.getFullYear() + "-" + ('0' + (date.getMonth() + 1)).slice(-2) + "-" + date.getDate();


function process(date) {
    var parts = date.split("-");
    return new Date(parts[0], parts[1] - 1, parts[2]);
}

var offerData;


var searchPlace;
//Begin: search location for nearby offer - code update 02/11/2021
function initCheckoutNearbyMap() {

    getNearbyLocation();
    initializeCheckoutNearbyAutoComplete();

    function initializeCheckoutNearbyAutoComplete() {
        searchPlace = new google.maps.places.Autocomplete(document.getElementById('searchPlaces'), {
            types: ['geocode'],
            componentRestrictions: {
                country: 'in'
            }
        });

        google.maps.event.addListener(searchPlace, 'place_changed', function () {
            let selectedLocation = searchPlace.getPlace();
            let finalLocation = selectedLocation.address_components[0].long_name.toLowerCase();

            sessionStorage.setItem("topCitySelected", finalLocation);
            userSelectedCity = finalLocation;
            isUserSelectedCheckoutNearByCity = true;
            console.log("User google maps searched final location");
            console.log(finalLocation);
            loadCards(false); // load new set of cards
        });
    }

}



$(document).ready(function () {
    let OffersfedId = getCookie("PER_COOKIE");
    if (OffersfedId) {
        $('.checkoutnearby .nearbylocation-card').addClass('sameOfferCard');
    } else {
        $('.checkoutnearby .nearbylocation-card').removeClass('sameOfferCard');
    }
    if ($('.checkoutnearby').length > 0) {
        if (typeof google === "object" && typeof google.maps === "object") {
            initCheckoutNearbyMap();
        }
    }

}); // document.ready end



//geolocaton :start	

$(".location-pick").click(function () {
    getNearbyLocation();
});


function getNearbyLocation() {
    var geocoder = new google.maps.Geocoder();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
        $(".close_btn").click(function () {
            $(".loc-map-popup-wrap").hide();
            return false;
        });
        if (localStorage.getItem("location-access") === 'false' || !localStorage.getItem("location-access")) {
            $(".loc-map-popup-wrap").show();
        } else {
            $(".loc-map-popup-wrap").hide();
        }
    } else {

    }
}

function showPosition(position) {
    isLocationOn = true;
    if (localStorage) {
        localStorage.setItem("location-access", "true");
    }
    $.cookie("location", "on");
    lat = position.coords.latitude;
    lng = position.coords.longitude;

    //update globals
    userLatitude = lat;
    userLongitude = lng;

    $.cookie("NearByOffersLatitude", lat, {
        expires: 90
    });
    $.cookie("NearByOffersLongitude", lng, {
        expires: 90
    });

    cityLatLng(lat, lng);
    sessionStorage.setItem("sessionCookie", "LocationOffers");
    $(".loc-map-popup-wrap").hide();
}

function cityLatLng(lat, lng) {
    var geocoder = new google.maps.Geocoder();
    var sublocalityData = [];
    var pincode;

    var latlng = new google.maps.LatLng(lat, lng);
    geocoder.geocode({
        'latLng': latlng
    }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {

            if (results[1]) {

                for (var i = 0; i < results[0].address_components.length; i++) {
                    for (var b = 0; b < results[0].address_components[i].types.length; b++) {

                        //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
                        if (results[0].address_components[i].types[b] == "locality") {
                            //this is the object you are looking for
                            city = results[0].address_components[i];
                            break;
                        }
                        if (results[0].address_components[i].types[b] == "sublocality") {
                            //this is the object you are looking for
                            sublocality = results[0].address_components[i];
                            sublocality = (sublocality.short_name).replace(/\s+/g, '-').toLowerCase();
                            sublocalityData.push({
                                sublocality: sublocality
                            });
                            $.cookie("NearByOffersSubLocality", sublocality, {
                                expires: 90
                            });

                            break;
                        }
                        if (results[0].address_components[i].types[b] == "postal_code") {
                            //this is the object you are looking for
                            pincode = results[0].address_components[i];
                            pincode = pincode.short_name;

                            break;
                        }
                    }
                }
                //city data
                cityname = (city.short_name).replace(/\s+/g, '-').toLowerCase();
                console.log("line 676 cityName we got-- current auto detected cityname");
                console.log(cityname);

                userSelectedCity = cityname;

                $.cookie("NearByOffersCity", cityname, {
                    expires: 90
                });

                if (pincode != null && pincode != '') {
                    $.cookie("NearByOffersPincode", pincode, {
                        expires: 90
                    });
                }

                if ($.cookie("location") === 'on') {

                    // for location based offers --- different part of logic will do.

                    isLoadingCards = true; // ADDED 

                    let locationBaseUrlArray = baseAPIUrl.split(".");

                    locationBaseUrlArray[4] = userSelectedCity;
                    locationBaseUrlArray[5] = lat.toString().replace('.', '_');
                    locationBaseUrlArray[6] = lng.toString().replace('.', '_');
                    console.log("location api calling ...")
                    console.log(locationBaseUrlArray.join("."))
                    $.getJSON(locationBaseUrlArray.join("."), function (resultJSON) {
                        $.ajaxSetup({
                            cache: true
                        });

                        generateOfferListItems(resultJSON, false);//false: not appending.

                        sessionStorage.setItem("sessionCookie", "LocationOffers");

                        //Filter CategoryOffers from search box input
                        $('.filter-nearby-section .filter-content .search-box-area input').focus(function () {
                            $('.filter-content .search-box-area input').val('');
                        });
                        $('.filter-nearby-section .filter-content .search-box-area input').keyup(debounce(function () {

                            $('.sidebar-content .checkbox-list input').prop('checked', false);
                            $('.sidebar-content .checkbox-list input').closest('li').removeClass('active');
                            $("#nearbyOfferFilterTags").css("display", "none");
                            $("#nearbyOfferFilterTags span").remove();

                            searchInput = $(this)[0].value;
                            loadCards(false); // false: no appending, just load new cards.
                        }, 500));

                        // checkout nearby offers : start
                        $('#searchPlaces').focus(function () {
                            $('#searchPlaces').val('');
                        });

                        // top cities : start
                        $(".location-tags a").click(function () {
                            var topCityName = $(this).attr("data-value");
                            sessionStorage.setItem("topCitySelected", topCityName);
                            sessionStorage.setItem("sessionCookie", "defaultOffers");
                            userSelectedCity = topCityName; // GLOBAL :: ADDED
                            isUserSelectedCheckoutNearByCity = true;
                            $('.sidebar-content .checkbox-list input').prop('checked', false);
                            $('.sidebar-content .checkbox-list input').closest('li').removeClass('active');
                            $("#nearbyOfferFilterTags").css("display", "none");
                            $("#nearbyOfferFilterTags span").remove();

                            if (sessionCookie != "defaultOffers") {
                                loadCards(false);
                            }

                        });



                        $(document).on('click', '.sb-box.sb-categories .dropdown-list input', function () {
                            sessionCookie = sessionStorage.getItem("sessionCookie");
                            if (sessionCookie != "defaultOffers") {

                                $('.filter-content .filter-cat').show();
                                $('.filter-content .filter-cat').addClass('active');
                                if ($(window).width() > 991) {
                                    createFilterArrayLoc();
                                }
                            } else {

                            }
                        });



                        //Sorting CategoryOffers click event
                        $('.sort-dropdown .dropdown-inner li').click(function () {
                            const newSortId = getSortId();
                            if (currentSortId !== newSortId) {
                                currentSortId = newSortId;
                                loadCards(false); // false: don't append at end load new cards
                            }
                            $('.filter-top .sort-tools').removeClass('disable-sorting'); // don't know it is getting added so, removing it .
                        });

                        function createFilterArrayLoc() {
                            filters = [];
                            var defaultTagStr = '';
                            $.each($('.sidebar-content .checkbox-list input:checked'), function () {
                                if (filters.indexOf($(this).val()) == -1) {
                                    let tag = $(this).val().split("/")[1];
                                    defaultTagStr = $(this).val().split('/')[0];
                                    filters.push(tag);
                                }

                            });
                            $.each($('.sidebar-content .checkbox-popup-list input:checked'), function () {

                                if (filters.indexOf($(this).val()) == -1) { filters.push($(this).val()); }
                            });
                            console.log("Non location filters selected")
                            console.log(filters)
                            // ADDED
                            checkBoxFilters = filters; // 
                            if (filters.length == 0) {
                                if ($(window).width() <= 991) {
                                    $('.feature-offer-section').show();
                                    $('.announcement-section').show();
                                    $('.filter-inner-container').removeClass('active');
                                    $('.filter-top').removeClass('filter-selected');
                                    $('.filter-top').removeClass('filter-sticky');
                                }
                                $('.filter-content .filter-cat').hide();
                                $('.filter-content .filter-cat').removeClass('active');
                                loadCards(false); // Removed all filters so, load normal.
                                generateFilterTagsLoc('#nearbyOfferFilterTags', '');
                            } else {
                                generateFilterTagsLoc('#nearbyOfferFilterTags', filters, defaultTagStr);
                                // load cards should get filters and call api.
                                loadCards(false); // reload new cards by new filters
                            }
                        }

                        function generateFilterTagsLoc(filterDiv, filterId, str) {
                            $(filterDiv).html("");
                            var filterHtml = '<span class="filter-clear">CLEAR ALL</span>',
                                filterText = "";
                            if (filterId.length > 0) {
                                if (Array.isArray(filterId)) {
                                    for (let index = 0; index < filterId.length; index++) {
                                        var element = filterId[index];
                                        filterText = $("[value=\"" + str + '/' + element + "\"]")
                                            .first()
                                            .closest(".checkbox-list")
                                            .text()
                                            .trim();
                                        // code change 30-11-2020
                                        if (filterText == "") {
                                            filterText = $("[value=\"" + element + "\"]")
                                                .first()
                                                .closest(".checkbox-popup-list")
                                                .text()
                                                .trim();
                                        }
                                        //end code change 30-11-2020
                                        filterHtml +=
                                            '<span data-filter="' +
                                            element +
                                            '">' +
                                            filterText +
                                            ' <img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/close-black.svg" alt="" loading="lazy" /></span>';
                                    }
                                } else {
                                    filterText = $("#" + filterId)
                                        .text()
                                        .trim();
                                    filterHtml +=
                                        '<span data-filter="' +
                                        filterId +
                                        '">' +
                                        filterText +
                                        ' <img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/close-black.svg" alt="" /></span>';
                                }
                            }

                            $(filterDiv).html(filterHtml);
                        }

                        /**
                         *Filter close remove from list
                         */
                        $(document).on('click', '.filter-cat img', function () {
                            var removefilterId = "icicibank:nearbyoffers/" + $(this).closest('span').attr('data-filter');
                            $('[value="' + removefilterId + '"]').prop('checked', false);
                            $('[value="' + removefilterId + '"]').closest('li').removeClass('active');
                            // createFilterArray();
                            createFilterArrayLoc();
                        });
                        $(document).on('click', '.filter-cat .filter-clear', function () {
                            $('.sidebar-content .checkbox-list input').prop('checked', false);
                            $('.sidebar-content .checkbox-list input').closest('li').removeClass('active');
                            // createFilterArray();
                            createFilterArrayLoc();
                        });

                        $(".sidebar-header .close").click(function () {
                            $(".filter-content .filter-cat").hide();
                            $(".filter-content .filter-cat").removeClass("active");
                            $(".sidebar-content .checkbox-list input").prop("checked", false);
                            $(".sidebar-content .checkbox-list input")
                                .closest("li")
                                .removeClass("active");
                            $(this).parent().removeClass("active");
                        });

                        $(".sidebar-footer .apply").click(function () {
                            setTimeout(function () {
                                //   createFilterArray();
                                createFilterArrayLoc();
                            }, 500);
                        });

                        $(".filter-offer-section .sidebar-footer .clear-all").click(function () {
                            $(".sidebar-content .checkbox-list input").prop("checked", false);
                            $(".sidebar-content .checkbox-list input").closest("li").removeClass("active");
                            // createFilterArray();
                            createFilterArrayLoc();
                        });
                        function createFilterArray() {
                            filters = [];
                            $.each($('.sidebar-content .checkbox-list input:checked'), function () {
                                if (filters.indexOf($(this).val()) == -1) filters.push($(this).val());

                            });
                            $.each($('.sidebar-content .checkbox-popup-list input:checked'), function () {

                                if (filters.indexOf($(this).val()) == -1) filters.push($(this).val());
                            });

                            console.log("Non location filters selected")
                            console.log(filters)

                            // ADDED
                            checkBoxFilters = filters; // 

                            if (filters.length == 0) {
                                if ($(window).width() <= 991) {
                                    $('.feature-offer-section').show();
                                    $('.announcement-section').show();
                                    $('.filter-inner-container').removeClass('active');
                                    $('.filter-top').removeClass('filter-selected');
                                    $('.filter-top').removeClass('filter-sticky');
                                }
                                $('.filter-content .filter-cat').hide();
                                $('.filter-content .filter-cat').removeClass('active');
                                loadCards(false); // Removed all filters so, load normal.
                                generateFilterTagsLoc('#nearbyOfferFilterTags', '');
                            } else {
                                generateFilterTagsLoc('#nearbyOfferFilterTags', filters);
                                // load cards should get filters and call api.
                                loadCards(false); // reload new cards by new filters
                            }
                        }




                        $("input[name='nearby-offer-type']").click(function () {
                            //alert("c");
                            if ($(this).hasClass('current-active')) {
                                return false;
                            }
                            $("input[name='nearby-offer-type']").removeClass('current-active')
                            $(this).addClass('current-active')
                            if (this.value == 'all') {
                                radioButtonFilter = this.value;
                                loadCards(false);
                            } else if (this.value == 'likedOffers') {
                                favouriteOffers();
                                $(".filter-offer-section .offer-card").not('.favOffer').hide();
                            } else if (this.value == 'offline') {
                                radioButtonFilter = this.value;
                                $(".button-group .ic-btn").remove(); // need to remove ? check since it is not in sync with default offers code.
                                loadCards(false);
                            } else {
                                radioButtonFilter = this.value;
                                loadCards(false);
                            }

                        });

                    }).fail(function () {
                        //TODO: Show network error card if possible.
                        $("#loading-offers").hide();
                    }).always(function () {
                        console.log("completed loading location offers");
                        isLoadingCards = false;
                        $("#loading-offers").hide();
                        $('.filter-top .sort-tools').removeClass('disable-sorting');
                        addScrollerForOffers();

                    }); // result json end;
                }
            } else {
            }
        } else {
        }
    });
}

function locationOffGetJson() {
    if ($('#nearbyFilterSection').length > 0 && ($.cookie("location") === 'off' || !$.cookie("location"))) {
        isLoadingCards = true;
        $.getJSON(baseAPIUrl, function (resultJSON) {
            $.ajaxSetup({
                cache: true
            });

            offerData = resultJSON;
            generateOfferListItems(offerData, false);//false: not appending.


            // *********** Setting up the listeneres for search, categories and sorting.

            //Filter CategoryOffers from search box input
            $('.filter-nearby-section .filter-content .search-box-area input').focus(function () {
                $('.filter-content .search-box-area input').val('');
            });
            $('.filter-nearby-section .filter-content .search-box-area input').keyup(debounce(function () {

                $('.sidebar-content .checkbox-list input').prop('checked', false);
                $('.sidebar-content .checkbox-list input').closest('li').removeClass('active');
                $("#nearbyOfferFilterTags").css("display", "none");
                $("#nearbyOfferFilterTags span").remove();

                searchInput = $(this)[0].value;
                loadCards(false); // false: no appending, just load new cards.
            }, 500));

            // checkout nearby offers : start
            $('#searchPlaces').focus(function () {
                $('#searchPlaces').val('');
            });
            // offer-type chanage event filter
            /* Code update start 05/03/2021 */

            // Level 2 filters 
            // Radio button filter on Click
            $("input[name='nearby-offer-type']").click(function () {
                if ($(this).hasClass('current-active')) {
                    return false;
                }
                $("input[name='nearby-offer-type']").removeClass('current-active')
                $(this).addClass('current-active')
                if (this.value == 'all') {
                    radioButtonFilter = this.value;
                    loadCards(false);
                } else if (this.value == 'likedOffers') {
                    // TODO: If favourite offers clicked need to check how we can load new offers.
                    favouriteOffers();
                    $(".filter-offer-section .offer-card").not('.favOffer').hide();
                } else if (this.value == 'offline') {
                    radioButtonFilter = this.value;
                    loadCards(false);
                } else {
                    radioButtonFilter = this.value;
                    loadCards(false);
                }

            });

            /* Code update end 05/03/2021 */

            //Filter CategoryOffers form sidebar selection sub-category

            $(document).on('click', '.filter-nearby-section .sidebar-content .checkbox-list input', function () {
                console.log("ckkk")
                sessionCookie = sessionStorage.getItem("sessionCookie");
                if (sessionCookie != "LocationOffers") {
                    $('.filter-content .filter-cat').show();
                    $('.filter-content .filter-cat').addClass('active');
                    if ($(window).width() > 991) {
                        createFilterArray();
                    }
                } else {
                }
                //commented code change 16-12-2020
                //commented code change end 16-12-2020
            });


            $(document).on('click', '.call', function () {
                $(".call-content, .call").removeClass("active");
                $(this).addClass('active');
                $(this).next().addClass('active');
            });

            $(document).on(
                "click",
                ".filter-nearby-section .bookmark-share .call-header .close-icon",
                function (event) {
                    $(".call-content, .call").removeClass("active");
                }
            );

            // code change 30-11-2020
            $(document).on('click', '.filter-nearby-section .sidebar-content .checkbox-popup-list input', function () {
                $('.filter-content .filter-cat').show();
                $('.filter-content .filter-cat').addClass('active');
            });

            $('.brand-poupup-bottom .apply').click(function () {
                createFilterArray();
                $('html, body').animate({
                    scrollTop: $('#nearbyFilterSection').offset().top - $('header').height(),
                });
            });
            // end code change 30-11-2020
            function createFilterArray() {
                filters = [];
                var defaultTagStr = '';
                $.each($('.sidebar-content .checkbox-list input:checked'), function () {
                    let tag = $(this).val().split('/')[1]
                    defaultTagStr = $(this).val().split('/')[0];
                    if (filters.indexOf(tag) == -1) filters.push(tag);

                });
                $.each($('.sidebar-content .checkbox-popup-list input:checked'), function () {

                    let tag = $(this).val().split('/')[1]
                    if (filters.indexOf(tag) == -1) {
                        filters.push(tag)
                    };
                });
                console.log("Non location filters selected")
                console.log(filters)

                // ADDED
                checkBoxFilters = filters; // 
                if (filters.length == 0) {
                    if ($(window).width() <= 991) {
                        $('.feature-offer-section').show();
                        $('.announcement-section').show();
                        $('.filter-inner-container').removeClass('active');
                        $('.filter-top').removeClass('filter-selected');
                        $('.filter-top').removeClass('filter-sticky');
                    }
                    $('.filter-content .filter-cat').hide();
                    $('.filter-content .filter-cat').removeClass('active');
                    loadCards(false); // Removed all filters so, load normal.
                    generateFilterTagsDefault('#nearbyOfferFilterTags', '');
                } else {
                    // More than one filter came up
                    generateFilterTagsDefault('#nearbyOfferFilterTags', filters, defaultTagStr);
                    // load cards should get filters and call api.
                    loadCards(false); // reload new cards by new filters
                }
            }

            /**
             *Filter close remove from list
             */
            $(document).on('click', '.filter-cat img', function () {
                var removefilterId = "icicibank:nearbyoffers/" + $(this).closest('span').attr('data-filter');
                $('[value="' + removefilterId + '"]').prop('checked', false);
                $('[value="' + removefilterId + '"]').closest('li').removeClass('active');
                createFilterArray();
            });
            $(document).on('click', '.filter-cat .filter-clear', function () {
                $('.sidebar-content .checkbox-list input').prop('checked', false);
                $('.sidebar-content .checkbox-list input').closest('li').removeClass('active');
                createFilterArray();
            });

            // code change 18-12-2020
            $('.sidebar-header .close').click(function () {
                $('.filter-content .filter-cat').hide();
                $('.filter-content .filter-cat').removeClass('active');
                $('.sidebar-content .checkbox-list input').prop('checked', false);
                $('.sidebar-content .checkbox-list input').closest('li').removeClass('active');
                $(this).parent().removeClass('active');
            });
            // end code change 18-12-2020
            // code change 30-11-2020
            $('.sidebar-footer .apply').click(function () {
                setTimeout(function () {
                    createFilterArray();
                }, 500);
            });
            // end code change 30-11-2020

            //Sorting CategoryOffers click event
            $('.sort-dropdown .dropdown-inner li').click(function () {
                const newSortId = getSortId();
                if (currentSortId !== newSortId) {
                    currentSortId = newSortId;
                    loadCards(false); // false: don't append at end load new cards
                }
                $('.filter-top .sort-tools').removeClass('disable-sorting'); // don't know it is getting added so, removing it .
            });

            function generateFilterTagsDefault(filterDiv, filterId, str) {
                $(filterDiv).html("");
                var filterHtml = '<span class="filter-clear">CLEAR ALL</span>',
                    filterText = "";
                if (filterId.length > 0) {
                    if (Array.isArray(filterId)) {
                        for (let index = 0; index < filterId.length; index++) {
                            var element = filterId[index];
                            filterText = $("[value=\"" + str + '/' + element + "\"]")
                                .first()
                                .closest(".checkbox-list")
                                .text()
                                .trim();
                            // code change 30-11-2020
                            if (filterText == "") {
                                filterText = $("[value=\"" + element + "\"]")
                                    .first()
                                    .closest(".checkbox-popup-list")
                                    .text()
                                    .trim();
                            }
                            //end code change 30-11-2020
                            filterHtml +=
                                '<span data-filter="' +
                                element +
                                '">' +
                                filterText +
                                ' <img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/close-black.svg" alt="" loading="lazy" /></span>';
                        }
                    } else {
                        filterText = $("#" + filterId)
                            .text()
                            .trim();
                        filterHtml +=
                            '<span data-filter="' +
                            filterId +
                            '">' +
                            filterText +
                            ' <img ="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/close-black.svg" alt="" /></span>';
                    }
                }

                $(filterDiv).html(filterHtml);
            }


            // top cities : start, if user selects any top city load those city offers
            $(".location-tags a").click(function () {
                var topCityName = $(this).attr("data-value");
                sessionStorage.setItem("topCitySelected", topCityName);
                userSelectedCity = topCityName; // GLOBAL :: ADDED
                isUserSelectedCheckoutNearByCity = true;
                $('.sidebar-content .checkbox-list input').prop('checked', false);
                $('.sidebar-content .checkbox-list input').closest('li').removeClass('active');
                $("#nearbyOfferFilterTags").css("display", "none");
                $("#nearbyOfferFilterTags span").remove();

                sessionCookie = sessionStorage.getItem("sessionCookie");
                if (sessionCookie != "LocationOffers") {

                    $(".dropdown-list .checkbox-list input").prop("checked", false);
                    sessionStorage.setItem("sessionCookie", "defaultOffer");
                    loadCards(false);
                }
            });

            // Hide loader after it completes all rendering.
        }).fail(function () {
            //TODO: Show network error card if possible.
            $("#loading-offers").hide();
        }).always(function () {
            console.log("complete");
            isLoadingCards = false;
            $("#loading-offers").hide();
            $('.filter-top .sort-tools').removeClass('disable-sorting');
            addScrollerForOffers();
            $(".offer-getDirection").click(function () {
                let filterOfferIndex = (+$(this).attr("index")) +1;
                dataLayer.push({
                    'event': 'custom_event',
                    'eventCategory': 'CB_nearby_offers',
                    'eventAction': 'get_direction_banner_click',
                    'eventLabel': filterOfferIndex + "_" + $(this).attr("name")
                });
            });

        }); // result json end
    }
}

function showError(error) {
    if (localStorage) {
        localStorage.setItem("location-access", "false");
    }
    $.cookie("location", "off");
    locationOffGetJson();
    switch (error.code) {
        case error.PERMISSION_DENIED:
            isLocationOn = false;
            $(".loc-map-popup-wrap").show();
            break;
        case error.POSITION_UNAVAILABLE:
            isLocationOn = false;
            break;
        case error.TIMEOUT:
            isLocationOn = false;
            break;
        case error.UNKNOWN_ERROR:
            isLocationOn = false;
            break;
    }
    // $(".loc-map-popup-wrap").hide();
}

//geolocaton :end	

function sortCards(dataArray, isAppend = false) {
    var sortId = $('.sort-dropdown .dropdown-inner li.active').attr('id');
    if (sortId == 'latest') {
        dataArray.sort(custom_sort_date);
        dataArray.reverse();
    } else if (sortId == 'oldest') {
        dataArray.sort(custom_sort_date);
    }
    generateOfferListItems(dataArray, isAppend);
    favouriteOffers();
}


//****************** NEW Approach ****************//
//********************************************//

const debounce = (func, delay) => {
    let debounceTimer
    return function () {
        const context = this
        const args = arguments
        clearTimeout(debounceTimer)
        debounceTimer
            = setTimeout(() => func.apply(context, args), delay)
    }
}

function getSortId() {
    const sortId = $('.sort-dropdown .dropdown-inner li.active').attr('id');
    return sortId;
}


// Loading the cards based on 
function loadCards(isAppend = true) {



    if (isAppend === false) {
        // means we are about to reload new cards
        isAllCardsRendered = false;
        $("#all-offer-cards").html("") // remove all earlier content
        offset = 0; // resetting offset
    }

    if (isAppend === true && isAllCardsRendered === true) {
        return
    }

    // Example URL
    let urlArray = baseAPIUrl.split(".")

    urlArray[2] = offset;
    urlArray[3] = nearbyFilter_limit;

    // let cityValCookie = sessionStorage.getItem("topCitySelected");  //EX: cityValCookie = "Hyderabad";
    if (userSelectedCity.length > 0)
        urlArray[4] = userSelectedCity.toLowerCase().replace(/\b[a-z]/g, function (letter) {
            return letter.toUpperCase();
        });

    if (isUserSelectedCheckoutNearByCity === false) {
        //add lat lan
        if (userLatitude)
            urlArray[5] = userLatitude.toString().replace('.', '_');
        if (userLongitude)
            urlArray[6] = userLongitude.toString().replace('.', '_');
    }

    urlArray[7] = radioButtonFilter === 'all' ? 'store' : radioButtonFilter; //default 'all'
    urlArray[8] = getSortId();
    if (searchInput) {
        // replacing . and ? with 'dotKey' and 'quesKey'
        urlArray[9] = searchInput.replaceAll(".", "dotKey").replaceAll("?", "quesKey");
    }
    urlArray[10] = checkBoxFilters.length === 0 ? 'filters' : checkBoxFilters.join(".").replace(/-/g, "_");
    console.log(urlArray.join("."))

    // IF he wanted to load new cards regardsless of current api call we can load
    // this will cancel if we get multiple append new cards api calls so, we need to make one api call at anytime.
    // but, if we have loadNew cards call, i.e isAppend=false so, we will call it. since data needs to be refreshed ex: on search latest data to be showed
    if (isLoadingCards === true && isAppend === true) return; // if any other API call is happening, just cancel this call.
    isLoadingCards = true;


    $("#loading-offers").show();
    $.getJSON(urlArray.join("."), function (resultJSON) {
        $.ajaxSetup({
            cache: true
        });
        console.log("result JSON")
        console.log(resultJSON);
        if (!resultJSON) {
            console.log("we got empty json !!")
            isAllCardsRendered = true; // Indicates no more to load.
        } else {
            console.log("--- non-null value !!")
            isAllCardsRendered = false; // Indicates no more to load.
        }
        let offerData = resultJSON;
        console.log(offerData)

        generateOfferListItems(offerData, true); //true is to append cards at end instead of default remove
        $("#loading-offers").hide();

        // need to update offset;
        offset = offset + nearbyFilter_limit;
        if (!isAppend && resultJSON.length === 0) {
            noResultOfferHtml();
        }
    }).fail(function () {
        $("#loading-offers").hide();
    }).always(function () {
        console.log("complete");
        isLoadingCards = false;
        $('.filter-top .sort-tools').removeClass('disable-sorting');
    });
}

function addScrollerForOffers() {
    $(window).on('scroll', debounce(function () {
        if ($(window).scrollTop() >= $(
            '#nearbyOfferListWrapper').offset().top + $('#nearbyOfferListWrapper').
                outerHeight() - window.innerHeight) {
            loadCards(true);//true: append cards // loads cards if we have cards to show from api.
        }
    }, 100));
}

function createAndAppendCards(offerData) {
    let selectedCardsHTML = []
    // let index = 0;
    for (let index = 0; index < offerData.length; index++) {
        const elem = offerData[index];
        // if ((process(elem['EndDate']) >= process(currentDate)) && (process(elem['StartDate']) <= process(currentDate))) {
        let cardHtmlData = generateHTML(
            elem["ThumbnaiUrl"],
            elem["SubCategory"],
            elem["ShopName"],
            elem["OfferDescription1"] +
            " " +
            elem["OfferDescription2"],
            elem["distance"],
            elem["Latitude"],
            elem["Longitude"],
            elem["contact"],
            elem["TandCLink"],
            elem["GetDirectionUrl"],
            elem["Tags"],
            elem["OfferIndex"],
            elem["StartDate"],
            elem["EndDate"],
            elem["Store"],
            elem["Address"],
            index
        );
        selectedCardsHTML.push(cardHtmlData)

    }
    //remove rendered items -- no global data ***
    $("#all-offer-cards").append(selectedCardsHTML.join(""))
    return selectedCardsHTML.length;
}


function generateOfferListItems(offerData, isAppend) {
    // start loader
    if (isAppend === false)
        $("#all-offer-cards").html("") // remove all earlier content
    const selectedCardsLength = createAndAppendCards(offerData);

    if (selectedCardsLength > 0) {
        var cityCookie = $.cookie("NearByOffersCity");
        var localityCookie = $.cookie("NearByOffersSubLocality");
        $('.filter-top .sort-tools').removeClass('disable-sorting');
    } else {
        // added style to make it center
        isAllCardsRendered = true;

        if (isAppend === false) {
            noResultOfferHtml();
        }

        $('.filter-top .sort-tools').addClass('disable-sorting');
    }
    // remove loader
    $("#loading-offers").hide();
    $(".offer-getDirection.direction-class").click(function () {
        let filterIndex= (+$(this).attr("index")) + 1;
        dataLayer.push({
            'event': 'custom_event',
            'eventCategory': 'CB_nearby_offers',
            'eventAction': 'get_direction_banner_click',
            'eventLabel': filterIndex + "_" + $(this).attr("name")
        });
    });
    $(".offer-getDirection.direction-class").removeClass('direction-class');
}

function noResultOfferHtml() {
    $('#all-offer-cards').append('<div class="no-result" style="margin-left: auto;margin-right: auto;"> ' +
        '<div class="no-result-content"> ' +
        '<p class="text-large">No offers found at this time. Please check back later</p>' +
        '<img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/no-result-icon.svg" alt="No result icon" loading="lazy" />' +
        '</div>' +
        '<!--<div class="location-tags">' +
        '<div><a href="javascript:void(0);" data-value="mumbai">Mumbai</a></div>' +
        '<div><a href="javascript:void(0);" data-value="delhi">Delhi</a></div>' +
        '<div><a href="javascript:void(0);" data-value="pune">Pune</a></div>' +
        '<div><a href="javascript:void(0);" data-value="bangalore">Bangalore</a></div>' +
        '<div><a href="javascript:void(0);" data-value="hyderabad">Hyderabad</a></div>' +
        '<div><a href="javascript:void(0);" data-value="kolkata">Kolkata</a></div>' +
        ' </div>  -->' +
        '</div>');
}

/* 18/12/2020 code update */
function generateHTML(smallOfferImage, SubCategory, cardTitle, cardDescription, distance, lat, long, contact, TandCLink, GetDirectionUrl, Tags, OfferIndex, StartDate, EndDate, Store, Address, index) {

    //tags : start
    var a = Tags || '';
    var splittedTag = [];


    splittedTag = a.split(',');

    for (a in splittedTag) {
        a = splittedTag[a];
    }

    var tagsHtml =
        '<div class="offercat-tags">' +
        splittedTag
            .map(function (tag) {
                return '<div class="offercat-tag">' + tag + "</div>";
            })
            .join("") +
        '</div>';
    // tags : end

    // address & shop now button: start
    var addCheck, removeShopNowBtn;
    if (Store == 'offline') {
        removeShopNowBtn = GetDirectionUrl;
        removeShopNowBtn = '';

        addCheck = Address;
        addCheck = '<div class="address"> <h6>Address</h6> <p>' + addCheck + '</p></div>';

    } else if (Store == 'online') {

        removeShopNowBtn = GetDirectionUrl;
        removeShopNowBtn = '<a href="' + GetDirectionUrl + '" target="_blank" class="ic-btn">Shop now</a>';

        addCheck = '';
    }
    var addressHtml = addCheck || '';
    var shopNowHtml = removeShopNowBtn || '';
    // address & shop now button : end

    var html =
        '<div class="offer-card  ' +
        SubCategory +
        '">' +
        '<div class="card-inner">' +
        '<div class="content">' +
        '<div class="media"><img src="' +
        smallOfferImage +
        '" loading="lazy" >' +
        "</div>" +
        '<div class="content">' +
        "<!--" +
        StartDate +
        " " +
        " " +
        EndDate +
        " " +
        " " +
        Store +
        " " +
        " " +
        SubCategory +
        " -->" +
        " " +
        tagsHtml +
        " " +
        '<div class="offercat-tags"> </div>' +
        '<div class="title"> <a href="#">' +
        cardTitle +
        "</a>" +
        "</div>" +
        '<div class="description"> <a href="#">' +
        cardDescription +
        "</a></div>" +
        " " +
        addressHtml +
        '<div class="button-group">' +
        " " +
        shopNowHtml +
        '<!-- <a href="' +
        GetDirectionUrl +
        '" target="_blank" class="ic-btn">Shop now</a> -->' +
        '<a href="' +
        TandCLink +
        '" target="_blank" class="ic-link">T&C APPLY</a>' +
        " </div>" +
        '<div class="card-bottom">' +
        '<div class="loction">' +
        '<span class="map-icon"></span>' +
        '<a index=' + index + ' name=' + (cardTitle.toLowerCase()).replace(/ /g, "_") + ' class="offer-getDirection direction-class" target="_blank" href="' +
        GetDirectionUrl +
        '">Get Direction</a>' +
        "</div>" +
        '<div class="bookmark-share">' +
        '<!-- <div class="call"></div>' +
        '<div class="call-content">' +
        '<div class="inner-content">' +
        '<div class="call-header">' +
        ' <span class="call-icon"></span>' +
        '<span class="titile">Contact</span>' +
        '<span class="close-icon"></span>' +
        "</div>" +
        '<div class="call-text"><input type="text" name="number"' +
        ' value="' +
        contact +
        '" disabled> ' +
        (isMobile.any() ?
            '<span class="call-num" onclick="javascript:window.location = tel:' +
            contact +
            ';">Call</span>' :
            '<span class="copy-num" onclick="copyNumber(this)">Copy</span>') +
        "</div>" +
        "</div>" +
        "</div> -->" +
        '<div class="bookmark" offer-index="' +
        OfferIndex +
        '"></div>' +
        '<div class="share"></div>' +
        '<div class="share-content">' +
        '<div class="inner-content">' +
        '<div class="share-header">' +
        ' <p>Share</p> <span class="close-icon"><img' +
        ' src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/close-orange.svg"' +
        'alt="fb" loading="lazy"></span>' +
        " </div>" +
        ' <ul class="share-link">' +
        '<li><a href="https://api.whatsapp.com/send?url=' +
        GetDirectionUrl +
        "&text=" +
        cardTitle +
        '" target="_blank" tabindex="0"> <span ' +
        'class="n-icon"><img' +
        ' src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp.svg"' +
        'alt="whatsapp" loading="lazy"></span><span ' +
        'class="h-icon"><img' +
        ' src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp-o.svg"' +
        'alt="whatsapp" loading="lazy"></span></a></li>' +
        '<li><a href="https://www.facebook.com/sharer/sharer.php?u=' +
        GetDirectionUrl +
        "&text=" +
        cardTitle +
        '" target="_blank" tabindex="0"> <span ' +
        'class="n-icon"><img' +
        ' src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-black.svg"' +
        'alt="fb" loading="lazy"></span><span ' +
        'class="h-icon"><img' +
        ' src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-orange.svg"' +
        'alt="fb" loading="lazy"></span></a></li>' +
        '<li><a href="https://twitter.com/intent/tweet?url=' +
        GetDirectionUrl +
        "&text=" +
        cardTitle +
        '" target="_blank" tabindex="0"> <span ' +
        'class="n-icon"><img' +
        ' src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-black.svg"' +
        'alt="tw" loading="lazy"></span><span ' +
        'class="h-icon"><img' +
        ' src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-orange.svg"' +
        'alt="tw" loading="lazy"></span></a></li>' +
        '<li><a href="https://www.linkedin.com/shareArticle?mini=true?url=' +
        GetDirectionUrl +
        "&text=" +
        cardTitle +
        '" target="_blank" tabindex="0"> <span ' +
        'class="n-icon"><img' +
        ' src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-black.svg"' +
        'alt="ln" loading="lazy"></span><span ' +
        'class="h-icon"><img' +
        ' src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-orange.svg"' +
        ' alt="ln" loading="lazy"></span></a></li>' +
        "</ul>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>";

    return html;
}



function custom_sort_date(a, b) {
    return new Date(a.StartDate).getTime() - new Date(b.StartDate).getTime();
}

function custom_sort_view(a, b) {
    var viewsOne = a.viewers,
        viewsTwo = b.viewers;
    if (viewsOne == undefined) viewsOne = 0;
    if (viewsTwo == undefined) viewsTwo = 0;

    return parseInt(viewsOne) - parseInt(viewsTwo);
}

function custom_sort_like(a, b) {
    var likeOne = a.likes,
        likeTwo = b.likes;
    if (likeOne == undefined) likeOne = 0;
    if (likeTwo == undefined) likeTwo = 0;

    return parseInt(likeOne) - parseInt(likeTwo);
}

function intToString(value) {
    if (value == undefined) return 0;

    if (value && value.length <= 3) return value;

    var suffixes = ["", "K", "M", "B", "T"];
    var suffixNum = Math.floor(("" + value).length / 3);
    var shortValue = parseFloat(
        (suffixNum != 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(2)
    );
    if (shortValue % 1 != 0) {
        shortValue = shortValue.toFixed(1);
    }
    return shortValue + suffixes[suffixNum];
}


function getTimePassed(EndDate) {
    // Set the date we're counting down to
    var countDownDate = new Date(EndDate).getTime();
    var now = new Date().getTime();
    var distance = now - countDownDate;


    // Time calculations for days, hours, minutes and seconds
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var months = Math.floor(days / 31);
    var years = Math.floor(months / 12);

    var message = "";
    if (years == 1) message = years + " Year Ago";
    else if (years > 0) message = years + " Years Ago";
    else if (months == 1) message = months + " Month Ago";
    else if (months > 0) message = months + " Months Ago";
    else if (days == 1) message = days + " Day Ago";
    else if (days > 1 && days < 7) message = days + " Days Ago";
    else if (days >= 7) {
        var weeks = Math.round(days / 7);
        if (weeks == 1) message = weeks + " Week Ago";
        else message = weeks + " Weeks Ago";
    } else if (hours == 1) message = hours + " Hour Ago";
    else if (hours > 0) message = hours + " Hours Ago";
    else message = minutes + " Minutes Ago";

    return message;
}

// code change 13/01/2020
function uniqueData(array, property) {
    var unique = {};
    var distinct = [];
    for (var i in array) {
        if (typeof unique[array[i][property]] == 'undefined') {
            distinct.push(array[i]);
        }
        unique[array[i][property]] = 0;
    }

    return distinct;
}

function copyNumber(copyBtn) {
    var copyText = copyBtn.previousElementSibling;
    copyText.disabled = false;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    copyText.disabled = true;
    document.execCommand('Copy');
    var selection = window.getSelection ? window.getSelection() : document.selection ? document.selection : null;
    if (!!selection) selection.empty ? selection.empty() : selection.removeAllRanges();
    copyBtn.innerHTML = 'Copied';
}

/* 08/12/2021 start */



//favourite Offers 
function favouriteOffers() {
    $('.bookmark').each(function () {

        var favs = $(this).attr("offer-index");


        if (localStorage.getItem(favs) === "saved") {

            $(this).attr("style", "background:url('/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/like-icon.svg') 0px 0% no-repeat");
            $(this).parents(".offer-card").addClass("favOffer");
        } else {
            $(this).removeAttr("style");
        }
    });
}

$(document).on('click', '.bookmark', function () {
    var favs = $(this).attr("offer-index");


    if (localStorage && localStorage.getItem(favs) === null) {
        localStorage.setItem(favs, "saved");
        $(this).attr("style", "background:url('/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/like-icon.svg') 0px 0% no-repeat");
        $(this).parents(".offer-card").addClass("favOffer");
    } else {
        if (localStorage) {
            localStorage.removeItem(favs);
        }
        $(this).removeAttr("style");
    }
});

// If user wanted to auto detect location and get offers.
if ($("#get-geo-loc-nearby").length > 0) {
    $("#get-geo-loc-nearby").click(function (e) {
        e.preventDefault();
        detectLocationClicked = true;
        isUserSelectedCheckoutNearByCity = false; // resetting since we will be sending lat lng in api
        getNearbyLocation();
        return false;
    });
}

function sliceIntoChunks(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}
function merge(first) {
    let newArr = [];
    for (let i = 0; i < first.length - 1; i++) {
        newArr.push(first[i].concat(first[i + 1]));
    }
    return newArr;
}
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function handleOfferTabClick(tabId) {
  if ($(window).width() < 767) {
    var tabType = tabId;
    if (tabId.includes("Nearby Offers")) {
      tabType = "Nearby";
    }
    if (tabId.includes("Handpicked Offers")) {
      tabType = "Handpicked";
    }
    if (tabId.includes("Shop")) {
      tabType = "Shop";
    }
    window.parent.postMessage(
      {
        ev: tabType,
      },
      "*"
    );
  }
}

setTimeout(function () {
  $(window).width() > 768 &&
    $(".offer-card.h-view .card-inner .content .card-title").equalHeights();
}, 500);

let $bundleHeading = $("#financial-solutions_solbundle #bundleHeading");
var financialSol = []; // global variable for only financial solution data
var valueAddedServices = []; // global variable for only VAS solution data
var solutionBundleJson = {}; // contains both VAS and financial solution data the orignal one: do not overide
let bundleTitleHtml = "";  // contains list Html of big card 
var filteredSolutionArr = [];
let urlParamObj = {};
const $solutionCountryInp = $("#countryInput"); // country dropdown el 
let pageHasDropdownValue = "";
let $smallCards = $(".ese-solution-card.width-25");

var selected_country_view_all_solutions_clicked = $("#countryInput-button")
  .find("span")
  .text();

$(document).ready(function () {
  //dataLayer 10
  $(".ui-selectmenu-text").on("click", function () {
    $("#countryInput-menu .ui-menu-item")
      .off("click")
      .on("click", function () {
        var getValue = $(this).find("div").text();
        dataLayer.push({
          event: "custom_event",
          eventCategory: "campus_power",
          eventAction: "solutions_for_section",
          eventLabel: getValue + "_country_selected",
        });
        selected_country_view_all_solutions_clicked=getValue;
      });
  });




  function isIntoView(elem) {
    if(elem.length > 0){
      var documentViewTop = $(window).scrollTop();
      var documentViewBottom = documentViewTop + $(window).height();
      var elementTop = $(elem).offset().top;
      var elementBottom = elementTop + $(elem).height();
      return elementBottom <= documentViewBottom && elementTop >= documentViewTop;
    }
  }

  var isSolutionBundleVisited = false;
  $(window).on('scroll',function () {
    if (isIntoView($(".ese-solution-cards"))) {
      if(isSolutionBundleVisited==false){

        dataLayer.push({   //9
          event: "custom_event",
          eventCategory: "campus_power",
          eventAction: "solutions",
          eventLabel: "section_viewed",
        });

        isSolutionBundleVisited=true;

      }
      // alert("Div in view port");
    }
  });

});



/* ese-solution-cards */
if ($(window).width() < 1200) {
  $(".ese-solution-cards").slick({
    dots: false,
    arrows: true,
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: { slidesToShow: 2.2, slidesToScroll: 1, arrows: false },
      },
      {
        breakpoint: 560,
        settings: { slidesToShow: 1.2, slidesToScroll: 1, arrows: false },
      },
    ],
  });
}

/* selectmenu  */
$("#countryInput").selectmenu();
let solutionBundleDropdownData = [];
let $solBundleHorizontalTabEl = $(".solutionbundle.horizontal-tab a");
let isSolutionBundleFinancialTab = true;
$(document).ready(function () {
  // below function call is to sync current page url with header active tab
  if (window.location.pathname.indexOf("campus-power") > -1) {
    setActiveTabAccordingURL();
  }
  smallCardClickBind();
  pageHasDropdownValue = $("#dropdownRequired").text();
  solutionBundleJson =
    $("#fragmentAsJson").length && convertJSON($("#fragmentAsJson").text());

  solutionBundleDropdownData =
    $("#countryMap").length && convertJSON($("#countryMap").text());

  getHorizontalTabChange($solBundleHorizontalTabEl); // change button url as per selected tab

  // binding click event to horintal tab for solution Bundle page
  $solBundleHorizontalTabEl.click(function () {
    $(this).parents(".solutionbundle.horizontal-tab").find("li").removeClass("active");
    $(this).parent().addClass("active");
    let currentTab = $(this).attr("href");
    currentOpenTabTag = $(this).attr("tag");
    isSolutionBundleFinancialTab = currentTab === '#financial-solutions'; // check if financial tab flow or not
    getHorizontalTabChange($(this));
    $(this)
      .parents(".solutionBundleHorizontal.horizontal-link-tab")
      .find(".bundlepanel.tab-panel")
      .removeClass("active");
    $(currentTab).addClass("active");
    return false;
  });

  // get default selected tab id
  if (pageHasDropdownValue === "ddRequired") {
    defaultSelectedFunctionalities();
  }

  // on change event of country dropdown
  setTimeout(function () {
    if (isSolutionBundleFinancialTab && pageHasDropdownValue === "ddRequired") {
      $solutionCountryInp.on("selectmenuchange", function (event, country) {
        generateSelectedCountryHtml(country);
      });
    }
    $("#value-added-services_solbundle .solutions-tab-content .ese-solution-card").removeClass("width-50");
    $("#value-added-services_solbundle .solutions-tab-content .ese-solution-card").addClass("width-25");
  });
});

// on event change of dropdown generate html with titles
function generateSelectedCountryHtml(selectedCntry) {
  bundleTitleHtml = "";
  $("#financial-solutions_solbundle .ese-solution-card.width-50 #bundlesTitle").empty();
  const selectedCountry = selectedCntry.item;
  $("#value-added-services_solbundle .ese-solution-card.width-25").removeClass("hide");
  if (selectedCountry.label === 'Other' && selectedCountry.label !== 'India') {
    $smallCards.eq(1).removeClass("hide");
    urlParamObj["location-input"] = 'not-sure';
    delete urlParamObj["countryType"];
  }
  if (selectedCountry.label === 'India') {
    $smallCards.eq(1).addClass("hide");
    urlParamObj["location-input"] = selectedCountry.label;
    delete urlParamObj["countryType"];
    hideVASCard();
  }
  if (selectedCountry.label !== 'India' && selectedCountry.label !== 'Other') {
    urlParamObj["countryType"] = getNameFromTagId(selectedCountry.value);
    urlParamObj["location-input"] = 'abroad';
    $smallCards.eq(1).removeClass("hide");
  }
  appendBundleSolutionHtml(solutionBundleDropdownData[selectedCountry.label]);
  appendSmallCardUrl(getNameFromTagId(selectedCountry.value));
  bindViawAllSolution(getNameFromTagId(selectedCountry.value));
  $(".ese-solutions-filter").length === 0 && bindUrlWithSelectedParam();
}

function getFilteredSolutionArray(solutionArray, key, tagId) {
  if (!!key && !!tagId && !!solutionArray && solutionArray.length > 0) {
    return solutionArray.filter(function (el) {
      if (el[key].length > 0) {
        return el[key].includes(tagId) && el;
      }
    });
  }
}

function defaultSelectedFunctionalities() {
  financialSol = getFilteredSolutionArray(
    solutionBundleJson,
    "typetag",
    "icicibank:student-ecosystem/type/financial-solutions"
  );
  valueAddedServices = getFilteredSolutionArray(
    solutionBundleJson,
    "typetag",
    "icicibank:student-ecosystem/type/value-added-services"
  );

  // emptying bundle cards before creating it
  $("#financial-solutions_solbundle .ese-solution-card.width-50 #bundlesTitle").empty();

  // get country name in heading of first card on page load
  let defaultSelectedCountry = $solutionCountryInp.length > 0 && $solutionCountryInp.find("option:first-child").text();
  if (defaultSelectedCountry === 'Other' && defaultSelectedCountry !== 'India') {
    urlParamObj["location-input"] = 'not-sure';
    delete urlParamObj["countryType"];
  }
  if (defaultSelectedCountry === 'India') {
    urlParamObj["location-input"] = defaultSelectedCountry;
    delete urlParamObj["countryType"];
  }
  if (defaultSelectedCountry !== 'India' && defaultSelectedCountry !== 'Other') {
    urlParamObj["countryType"] = getNameFromTagId($solutionCountryInp.find("option:first-child").val());
    urlParamObj["location-input"] = 'abroad';
  }
  appendBundleSolutionHtml(solutionBundleDropdownData[defaultSelectedCountry]);
  appendSmallCardUrl(defaultSelectedCountry);
  bindViawAllSolution(defaultSelectedCountry);
  $(".ese-solutions-filter").length === 0 && bindUrlWithSelectedParam();
}

function getHorizontalTabChange($tabEl) {
  filteredSolutionArr = getFilteredSolutionArray(
    solutionBundleJson,
    "typetag",
    $tabEl.attr("tag")
  );
  urlParamObj["pageType"] = $tabEl.attr("href") && ($tabEl.attr("href")).split("_")[0].substring(1);
  $(".ese-solutions-filter").length === 0 && bindUrlWithSelectedParam();
  bindViawAllSolution(urlParamObj["location-input"]);
  appendSmallCardUrl(urlParamObj["countryType"]);
}

function bindUrlWithSelectedParam() {
  let params = "", $currentActiveLink = '', currentActiveTab = "";
  currentActiveTab = $(".solutionbundle.horizontal-tab li.active a").attr("href");
  urlParamObj["pageType"] = currentActiveTab && (currentActiveTab.split("_")[0]).substring(1);
  $currentActiveLink = currentActiveTab && $(".ese-solutions #" + currentActiveTab.substring(1) + " .solutions-tab-content .ese-solution-card.width-50 a");
  $($currentActiveLink).attr("href", $("#know-more-bundle").text());
  if (urlParamObj["countryType"] || urlParamObj["location-input"]) {
    if (urlParamObj["countryType"] !== 'india' && urlParamObj["countryType"] !== 'others') {
      $($currentActiveLink).attr("id", urlParamObj["countryType"] ? (urlParamObj["countryType"].toLowerCase() + "-essential-bundle") : (urlParamObj["location-input"].toLowerCase() + "-essential-bundle"));
    } else {
      $($currentActiveLink).attr("id", urlParamObj["location-input"].toLowerCase() + "-essential-bundle");
    }
  }
  for (var key in urlParamObj) {
    if (urlParamObj.hasOwnProperty(key)) {
      params = params + key + "=" + urlParamObj[key] + "&";
    }
  }
  if (urlParamObj["pageType"] === "value-added-services") {
    params = params + "stageType=" + getNameFromTagId($currentActiveLink.parent().parent().attr("tag")) + "&";
  }
  $currentActiveLink && $($currentActiveLink).attr("href", $currentActiveLink.attr("href") + "?" + ((params).replace(/ /g, "_")).slice(0, -1));
}

function appendSmallCardUrl(selectedCountry) {
  let eachHorizontalTabID = "", eachCardTagId = "", hrefLink = "", countryType = selectedCountry !== 'india' ? "location-input=abroad&countryType=" + selectedCountry : 'location-input=' + selectedCountry;
  if (selectedCountry === "India") {
    countryType = "location-input=" + selectedCountry;
  }
  if (selectedCountry === "Other") {
    countryType = "location-input=not-sure";
  }
  let solutionBundleType = getNameFromTagId($(".solutionbundle.horizontal-tab li.active a").attr("tag"));
  let bundleType = solutionBundleType === 'financial-solutions' ? 'solutionBundle=smallCards' : '';
  let cardTitle;
  let smallCardLink;
  $(".ese-solution-cards .ese-solution-card.width-25").each(function (index, element) {
    smallCardLink = '';
    ($(this).find('.content ul li').length === 1) && $(this).find('.content ul li').addClass("single-title");
    eachHorizontalTabID = $(this).parent().parent().parent().attr("id") ? $(this).parent().parent().parent().attr("id") : $(this).parent().parent().parent().parent().parent().attr("id");
    eachCardTagId = $(this).attr("tag");
    cardTitle = solutionBundleType === 'financial-solutions' ? 'cardTitle=' + getNameFromTagId(eachCardTagId) : '';
    hrefLink = $(this).find("a");
    smallCardLink = $(this).find("a").attr("href").split('?').length > 0 && $(this).find("a").attr("href").split('?')[1];
    hrefLink.attr("href", $("#viewAll-bundle").text() + "?" + (smallCardLink ? smallCardLink + '&' : '') + cardTitle + '&' + bundleType + "&pageType=" + (eachHorizontalTabID && eachHorizontalTabID.split("_")[0]) + "&stageType=" + getNameFromTagId(eachCardTagId) + "&" + countryType)
  });
}
function smallCardClickBind() {
  $(".ese-solution-cards .ese-solution-card.width-25").each(function (index, element) {
    $("#financial-solutions_solbundle .ese-solution-card.width-25 .content.text-center a").click(function () {
      localStorage.setItem("solution_bundle", $("#solutionMap").text());
    })
  });
}
function appendBundleSolutionHtml(selectedCountry) {
  $bundleHeading.empty();
  $("#financial-solutions_solbundle #bundle-media").empty();
  $("#financial-solutions_solbundle #bundle-icon").empty();
  $("#financial-solutions_solbundle #bundle-media").append("<img src='" + selectedCountry["bgImageRef"] + "' alt='" + selectedCountry["bgAltText"] + "' />");
  $("#financial-solutions_solbundle #bundle-icon").append("<img src='" + selectedCountry["iconRef"] + "' alt='" + selectedCountry["altText"] + "' />");
  $bundleHeading.append(selectedCountry["cardTitle"]);

  if (selectedCountry) {
    for (
      let i = 0;
      selectedCountry["solutionTitle"].length > 6 ? i < 6 : i < selectedCountry["solutionTitle"].length;
      i++
    ) {
      if (($(window).width() < 991) && i == 5) {
        break;
      }
      bundleTitleHtml += "<li>" + selectedCountry["solutionTitle"][i]["label"] + "</li>";
    }
  }
  $("#financial-solutions_solbundle .ese-solution-card.width-50 #bundlesTitle").append(bundleTitleHtml);
}
function bindViawAllSolution(selectedCountry) {
  let url = "", countryType = selectedCountry !== 'india' ? "location-input=abroad&countryType=" + urlParamObj["countryType"] : 'location-input=' + selectedCountry;
  urlParamObj["pageType"] = $(".solutionbundle.horizontal-tab li.active a").length > 0 &&
    $(".solutionbundle.horizontal-tab li.active a").attr("href").split("_")[0].substring(1);
  if (selectedCountry === "India") {
    countryType = "location-input=" + selectedCountry;
  }
  // if(selectedCountry === "Other") {
  //   countryType="location-input=not-sure";
  // }
  url = pageHasDropdownValue === "ddRequired" ? $("#viewAll-bundle").text() + "?pageType=" + urlParamObj["pageType"] + "&" + countryType : $("#viewAll-bundle").text() + "?pageType=" + urlParamObj["pageType"];
  $("#" + urlParamObj["pageType"] + "_solbundle #bundle-viewAll-" + urlParamObj["pageType"]).attr("href", url);
}

function hideVASCard() {
  $("#value-added-services_solbundle .ese-solution-card.width-25").each(function (index, element) {
    if ($(this).attr("tag") !== 'icicibank:student-ecosystem/intent/online-learning') {
      $(this).addClass("hide");
    }
  });
}

$("#ga-idviewAll-student-1, .image-description-card-section .ic-btn-gradient").click(function () {
  //5
  dataLayer.push({
    event: "custom_event",
    eventCategory: "campus_power",
    eventAction: "we_have_got_you_covered",
    eventLabel: "view_all_solutions_clicked",
  });
});



$("#bundle-viewAll-financial-solutions").click(function () {
  //13
  dataLayer.push({
    event: "custom_event",
    eventCategory: "campus_power",
    eventAction: "solutions_for_section",
    eventLabel:
      selected_country_view_all_solutions_clicked +
      "_view_all_solutions_clicked",
  });
});


$("#value-added-services_solbundle .ese-solution-cards .content.text-center a").click(function () {
  //18
  dataLayer.push({
    event:"custom_event",
    eventCategory:"campus_power",
    eventAction:"view_more_click",
    eventLabel: selected_country_view_all_solutions_clicked + "_" + $(this).parent().find(".bundle_Heading").text(),
  });
});

var href = "";
let fId = "";
let currStuStep = 0, currParStep = 0, currInsStep = 0;
let studentObj = {};
let parentObj = {};
let instituteObj = {};
let iFinnShow = false, bachelorsShow = true, isk12Selected = false;
var childClicked = false;
let onCampusPowerFirstTime = true;
var selected_profession = "NA";
var selected_employee_type = "NA";
var student_selected_current_stage = "NA";
var parent_selected_current_stage = "NA";



  //dataLayer 1
  function isIntoView(elem) {
    if(elem.length > 0){
      var documentViewTop = $(window).scrollTop();
      var documentViewBottom = documentViewTop + $(window).height()*2;
      var elementTop = $(elem).offset().top;
      var elementBottom = elementTop + $(elem).height()*2;
      return elementBottom <= documentViewBottom && elementTop >= documentViewTop;
    }
  }

  

  function getLastPart(url) {
    const parts = url.split('/');
    return parts.at(-1);
  }
  
  var eventLabelUrl = window.location.href;
  var dataURL = getLastPart(eventLabelUrl);
  
  if(dataURL.slice(-5)==".html"){
    dataURL = dataURL.slice(0, dataURL.length-5);
  }
  else if(dataURL.slice(-22)==".html?wcmmode=disabled"){
    dataURL = dataURL.slice(0, dataURL.length-22);
  }
 

  var eventLavelValue="";

  if(dataURL=="campus-power"){
    eventLavelValue="home";

    $("#lets-get-started-explore-institute").click(function () {
      //17
      dataLayer.push({
        event: "custom_event",
        eventCategory: "campus_power",
        eventAction: "institute_explore_clicked",
        eventLabel: selected_employee_type,
      });
    });

    $("#parent-flow-calc > div:nth-child(2) > div.button-group > a").click(function () {
      //16
      dataLayer.push({
        event: "custom_event",
        eventCategory: "campus_power",
        eventAction: "parent_prof_status_explore_clicked",
        eventLabel: selected_profession,
      });
    });
    
  }

  else if(dataURL=="parent"){
    $("#parent-flow-calc > div:nth-child(2) > div.button-group > a").click(function () {
      //6
      dataLayer.push({
        event: "custom_event",
        eventCategory: "campus_power",
        eventAction: "professional_status_explore_clicked",
        eventLabel: selected_profession,
      });
});


    eventLavelValue="parent";
  }
  else if(dataURL=="student"){
    eventLavelValue="student";
  }
  else if(dataURL=="institute"){

    $("#lets-get-started-explore-institute").click(function () {
      //3
      dataLayer.push({
        event: "custom_event",
        eventCategory: "campus_power",
        eventAction: "institute_explore_clicked",
        eventLabel: selected_employee_type,
      });
    });
    


    eventLavelValue="institute";
  }

  
  var isLetstartedVisited = false;

  $(window).scroll(function () {
    if (isIntoView($(".ese-started-section .section-inner .section-heading-new"))) {
      if(isLetstartedVisited==false){
        dataLayer.push({
          event:"custom_event",
          eventCategory:"campus_power",
          eventAction:"lets_get_you_started_viewed",
          eventLabel:eventLavelValue,
        });
        isLetstartedVisited=true;

      }
     

      

      



      // if(eventLabelValue== "student" || "parent" || "institute"){
        // $(window).off('scroll');
      // }else{
        // $(window).off('scroll');
      
      // }
      
      // alert("Div in view port");
    }
  });
 




$(document).ready(function () {
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  const apiBaseUrlCP = "/content/icicibank.campuspower.json?";
  const fedIdCP = getCookie("PER_COOKIE") || getCookie("rn");
  $('.horizontal-link-tab .ese-started-bg .content .horizontal-tab li a').click(function (e) {
    e.preventDefault();
    let eventName = $(this).text();
	
	dataLayer.push({
        //12
        event: "custom_event",
        eventCategory: "campus_power",
        eventAction: "i_am_here_as_a",
        eventLabel: eventName,
      });
	
    try {
      const linkHorizontal =
        apiBaseUrlCP +
        "eventName=" +
        eventName;

      if (fedIdCP) {
        $.ajax({
          url: linkHorizontal,
          async: false,
          success: function (data) {
            console.log(data);
          },
          error: function (jqXHR, statusText, errorThrown) {
            console.log(errorThrown);
          },
        });
      }
    } catch (e) { }
  })
  $("#top-header-item-1").click(function () {
    let eventName = $(this).text().trim();
    try {
      const link =
        apiBaseUrlCP +
        "eventName=" +
        eventName;

      if (fedIdCP) {
        $.ajax({
          url: link,
          async: false,
          success: function (data) {
            console.log(data);
          },
          error: function (jqXHR, statusText, errorThrown) {
            console.log(errorThrown);
          },
        });
      }
    } catch (e) { }
  })
  $(".ese-started-section .horizontal-tab-content .education-flow .radio-style-box .radio-wrap input[type='radio']").click(function (e) {
    e.preventDefault();
    let eventName = $(this).attr("value");
    try {
      const link =
        apiBaseUrlCP +
        "eventName=" +
        eventName;

      if (fedIdCP) {
        $.ajax({
          url: link,
          async: false,
          success: function (data) {
            console.log(data);
          },
          error: function (jqXHR, statusText, errorThrown) {
            console.log(errorThrown);
          },
        });
      }
    } catch (e) { }
  })
})

/* 20/04/2022 code changes start */
$('input[type="radio"]').click(function () {


  var nameofinput = $(this).attr("name");
  if ($(this).attr("name") == "lookingFor_level") {
    parentObj["lookingFor_level"] = getNameFromTagId($(this).attr("tag"));
    parentObj["personParentType"] = getNameFromTagId($(this).attr("tag"));
    if (getNameFromTagId($("input:radio[name=lookingFor_level]:checked").attr("tag")) === "child") {
      childClicked = true;
    }
    else if (getNameFromTagId($("input:radio[name=lookingFor_level]:checked").attr("tag")) === "self") {
      childClicked = false;
    }
    $("button.lookingFor_level").trigger("click");
  }
  else if ($(this).attr("name") == "professional_edu_level") {
    parentObj["professional_edu_level"] = getNameFromTagId($(this).attr("tag"));
    if (parentObj.lookingFor_level === "self") {
	  selected_profession = $(this).siblings("span").html();
      parentObj["personType"] = "parent";
      parentObj["personParentType"] = "self";
      parentObj["personParentTypeSelf"] = getNameFromTagId($(this).attr("tag"));
    }
    if (parentObj.lookingFor_level !== "self") {
      $("button.lookingFor_level").trigger("click");
    }
  }
  else if ($(this).attr("name") == "seduType") {
    studentObj["eduType"] = getNameFromTagId($(this).attr("tag"));
    getEduVal($(this).val());
    isk12Selected = $(this).val() === 'kg-12';
    $("button.sedu-level").trigger("click");
  }
  else if ($(this).attr("name") == "sfurure_edu_level") {
    studentObj["furure_edu_level"] = getNameFromTagId($(this).attr("tag"));
    if (getNameFromTagId($(this).attr("tag")) !== 'online-learning' &&
      getNameFromTagId($(this).attr("tag")) !== 'i-finn') {
      $("button.sedu-level").trigger("click");
    }
    if (getNameFromTagId($(this).attr("tag")) === 'online-learning') {
      studentObj["stageType"] = getNameFromTagId($(this).attr("tag"));
      studentObj["pageType"] = 'value-added-services';
      studentObj["personType"] = 'student';
      $("[type=radio]").prop("checked", false);
      redirectPage(studentObj);
    }
    if (getNameFromTagId($(this).attr("tag")) === 'i-finn') {
      window.location.href = document.location.origin + $("#ifinnHref").text();
    }
  }
  else if ($(this).attr("name") == "slocation-input") {
    studentObj["location-input"] = getNameFromTagId($(this).attr("tag"));
    if (getNameFromTagId($(this).attr("tag")) === 'india') {
      studentObj["location-input"] = getNameFromTagId($(this).attr("tag"));
      studentObj["pageType"] = 'financial-solutions';
      studentObj["personType"] = 'student';
      $("[type=radio]").prop("checked", false);
      redirectPage(studentObj);
    }

    if (getNameFromTagId($(this).attr("tag")) !== 'india') {
      $("button.slocation_btn").trigger("click");
    }

  }
  else if ($(this).attr("name") == "scountryType") {
    studentObj["countryType"] = getNameFromTagId($(this).attr("tag"));
    $("button.sedu_country_btn").trigger("click");
  }

  else if ($(this).attr("name") == "sstageType") {
    student_selected_current_stage = $(this).siblings("span").html();
    studentObj["stageType"] = getNameFromTagId($(this).attr("tag"));
  }
  else if ($(this).attr("name") == "eduType") {
    parentObj["eduType"] = getNameFromTagId($(this).attr("tag"));
    getEduVal($(this).val());
    isk12Selected = $(this).val() === 'kg-12';
    // getNameFromTagId($(this).attr("tag")) === 'bachelors' && getBachlorsVal(getNameFromTagId($(this).attr("tag")));
    $("button.edu-level").trigger("click");
  } else if ($(this).attr("name") == "furure_edu_level") {
    parentObj["furure_edu_level"] = getNameFromTagId($(this).attr("tag"));
    if (getNameFromTagId($(this).attr("tag")) !== 'online-learning' &&
      getNameFromTagId($(this).attr("tag")) !== 'i-finn') {
      $("button.edu-level").trigger("click");
    }
    if (getNameFromTagId($(this).attr("tag")) === 'i-finn') {
      window.location.href = document.location.origin + $("#ifinnHref").text();
    }

    if (getNameFromTagId($(this).attr("tag")) === 'online-learning') {
      parentObj["stageType"] = getNameFromTagId($(this).attr("tag"));
      parentObj["pageType"] = 'value-added-services';
      parentObj["personType"] = 'parent';
      $("[type=radio]").prop("checked", false);
      redirectPage(parentObj);
    }
  } else if ($(this).attr("name") == "location-input") {
    if (getNameFromTagId($(this).attr("tag")) === 'india') {
      parentObj["location-input"] = getNameFromTagId($(this).attr("tag"));
      parentObj["pageType"] = 'financial-solutions';
      parentObj["personType"] = 'parent';
      $("[type=radio]").prop("checked", false);
      redirectPage(parentObj);
    }
    parentObj["location-input"] = getNameFromTagId($(this).attr("tag"));
    if (getNameFromTagId($(this).attr("tag")) !== 'india') {
      $("button.location_btn").trigger("click");
    }
  }
  else if ($(this).attr("name") == "countryType") {
    parentObj["countryType"] = getNameFromTagId($(this).attr("tag"));
    $("button.edu_country_btn").trigger("click");
  }
  else if ($(this).attr("name") == "stageType") {
    parent_selected_current_stage = $(this).siblings("span").html();
    parentObj["stageType"] = getNameFromTagId($(this).attr("tag"));
  } else if ($(this).attr("name") == "instituteType") {
    instituteObj["pageType"] = 'financial-solutions';
    instituteObj["personType"] = 'institute';
    instituteObj["personParentType"] = "management"
    instituteObj["instituteType"] = getNameFromTagId($(this).attr("tag"));
    if (getNameFromTagId($(this).attr("tag")) === 'management') {
      $("[type=radio]").prop("checked", false);
      redirectPage(instituteObj);
    }
    if (getNameFromTagId($(this).attr("tag")) !== 'management') {
      $("button.instituteType").trigger("click");
    }
  }
  else if ($(this).attr("name") === "ifurure_edu_level") {
    selected_employee_type = $(this).siblings("span").html();
    instituteObj["personParentType"] = "employee";
    instituteObj["furure_edu_level"] = $(this).val();
    if (instituteObj.furure_edu_level === "self") {
      instituteObj["personType"] = "institute";
      instituteObj["personParentType"] = "employee";
      instituteObj["personParentTypeSelf"] = $(this).val();
    }
  }
  else {
    $("#" + nameofinput)
      .find("button.to-next-step")
      .trigger("click");
  }
});


/* 20/04/2022 code changes end */
function getEduVal(selectedVal) {
  if (selectedVal === "kg-12") {
    iFinnShow = true;
  } else {
    iFinnShow = false;
  }
}

function getBachlorsVal(selectedVal) {
  if (selectedVal === "bachelors") {
    bachelorsShow = false;
  } else {
    bachelorsShow = true;
  }
  iFinnShow = false;
}

function redirectPage(paramObj) {
  var params = "";
  for (var key in paramObj) {
    if (paramObj.hasOwnProperty(key)) {
      params = params + key + "=" + paramObj[key] + "&";
    }
  }

  let redirectionUrl = $("#solutionHref").text() + "?" + ((params).replace(/ /g, "_")).slice(0, -1); // removing last '&' from url
  window.location.href = document.location.origin + redirectionUrl;
}
/* selectmenu  */
$("#country_dropdown").selectmenu();
$("#stage_dropdown").selectmenu();

var studentNudgeJson = [];
let nudgeTimeout;
$(document).ready(function () {
  studentNudgeJson =
    $("#nudgesJson").length && convertJSON($("#nudgesJson").text());



  if ($("#landingPageType").text() === "student") {
    showNudgeDescription("icicibank:student-ecosystem/user/student", ".student");
    handleCurrentQuestion("#education-flow-calc");
  }
  else if ($("#landingPageType").text() === "parent") {
    showNudgeDescription("icicibank:student-ecosystem/user/parent", ".parent");
    handleCurrentQuestion("#parent-flow-calc");
  }
  else if ($("#landingPageType").text() === "institute") {
    showNudgeDescription("icicibank:student-ecosystem/user/institute", ".institute");
    handleCurrentQuestion("#institute-flow-calc");
  }

  var startingDiv = $('.horizontal-tab .active').find('a').attr('href');

  if (startingDiv === "#studentTab") {
    showNudgeDescription("icicibank:student-ecosystem/user/student", ".student");

    handleCurrentQuestion("#education-flow-calc");
  }
  else if (startingDiv === "#parentTab") {
    $(".notification-box").addClass("hide");
    handleCurrentQuestion("#parent-flow-calc");
  }
  else if (startingDiv === "#instituteTab") {
    $(".notification-box").addClass("hide");
    handleCurrentQuestion("#institute-flow-calc");
  }
  $('.horizontal-tab li').click(function (event) {
    event.preventDefault();
    $('.horizontal-tab li').removeClass("active");
    $(this).addClass('active');
    href = $(this).find('a').attr('href');
    $(".ese-started-section .horizontal-tab-content .tab-panel").removeClass("active");
    $(".ese-started-section .horizontal-tab-content " + href).addClass("active");
    //  iFinnShow = false, bachelorsShow= true, isk12Selected= false

    if (href === "#studentTab") {
      showNudgeDescription("icicibank:student-ecosystem/user/student", ".student");
      fId = "#education-flow-calc";

    }
    else if (href === "#parentTab") {
      fId = "#parent-flow-calc";
      showNudgeDescription("icicibank:student-ecosystem/user/parent", ".parent");
    }
    else if (href === "#instituteTab") {
      fId = "#institute-flow-calc";
      showNudgeDescription("icicibank:student-ecosystem/user/institute", ".institute");
    }
    startingDiv = href;
    handleCurrentQuestion(fId);
  })
  $(".explore").click(function () {
    if (href === "#studentTab" || startingDiv === "#studentTab" || $("#landingPageType").text() === "student") {
      studentObj["pageType"] = 'financial-solutions';
      studentObj["personType"] = 'student';
      redirectPage(studentObj);
    }
    else if (href === "#parentTab" || startingDiv === "#parentTab" || $("#landingPageType").text() === "parent") {
      parentObj["pageType"] = 'financial-solutions';
      parentObj["personType"] = 'parent';
      redirectPage(parentObj);
    }
    else if (href === "#instituteTab" || startingDiv === "#instituteTab" || $("#landingPageType").text() === "institute") {
      instituteObj["pageType"] = 'financial-solutions';
      instituteObj["personType"] = 'institute';
      if (instituteObj.furure_edu_level === "child") {
        window.location.href =
          document.location.origin +
          $("#parentHref").text() +
          "?" +
          "pageType=instituteChild";
      }
      if (instituteObj.furure_edu_level !== "child") {
        redirectPage(instituteObj);
      }
    }
    $("[type=radio]").prop("checked", false);
  });
}
);

function handleCurrentQuestion(formId) {
  let currStep = 0;

  if (formId === "#institute-flow-calc") {
    currStep = currInsStep;
  }
  else if (formId === "#education-flow-calc") {
    currStep = currStuStep;
  }
  else if (formId === "#parent-flow-calc") {

    let isInstituteChild = queryParameters()["pageType"];
    if (isInstituteChild === "instituteChild") {
      $('#parent-flow-calc .education-flow').addClass("hide");
      $('#parent-flow-calc .education-flow').eq(2).removeClass("hide");
      for (var i = 0; i < 2; i++) {
        $(formId + ' .dotted-progress li').eq(i).addClass("current");
        $(formId + ' .dotted-progress li').eq(i).addClass("active");
      }
      $(formId + ' .dotted-progress li').eq(2).addClass("current");
      currParStep = 2;
    }
    currStep = currParStep;
  }

  let $sliderItem = $(formId + ' .education-flow');
  let $progressItem = $(formId + ' .dotted-progress li');
  $(formId + " .to-next-step").click(function () {
    // onCampusPowerFirstTime = false;
    if (formId === "#institute-flow-calc") {
      currStep = currStep < 2 ? currStep + 1 : currStep;
      currInsStep = currStep;
    }
    else if (formId === "#parent-flow-calc") {
      if (formId === "#parent-flow-calc" && getNameFromTagId($("input:radio[name=location-input]:checked").attr("tag")) === "not-sure"
        || formId === "#parent-flow-calc" && getNameFromTagId($("input:radio[name=lookingFor_level]:checked").attr("tag")) === "child") {
        delete parentObj.countryType;
        currStep = currStep < 7 ? currStep + 2 : currStep;
      }

      else {
        currStep = currStep < 7 ? currStep + 1 : currStep;
      }
      currParStep = currStep;
    }
    else if (formId === "#education-flow-calc") {
      if (formId === "#education-flow-calc" && getNameFromTagId($("input:radio[name=slocation-input]:checked").attr("tag")) === "not-sure") {
        delete studentObj.countryType;
        currStep = currStep < 5 ? currStep + 2 : currStep;
      }
      else {
        currStep = currStep < 5 ? currStep + 1 : currStep;
      }
      currStuStep = currStep;
    }


    $sliderItem.addClass("hide");
    $sliderItem.eq(currStep).removeClass("hide");

    if (iFinnShow) {
      $(formId + " input[tag='icicibank:student-ecosystem/looking-to-pursue/i-finn']").parent().removeClass("hide");
      $(formId + " input[tag='icicibank:student-ecosystem/looking-to-pursue/bachelors']").parent().removeClass("hide");
    } else {
      $(formId + " input[tag='icicibank:student-ecosystem/looking-to-pursue/i-finn']").parent().addClass("hide");
    }
    if (!isk12Selected) {
      if (bachelorsShow) {
        $(formId + " input[tag='icicibank:student-ecosystem/looking-to-pursue/bachelors']").parent().removeClass("hide");
      } else {
        $(formId + " input[tag='icicibank:student-ecosystem/looking-to-pursue/bachelors']").parent().addClass("hide");
      }
    }

    // Location display on the basis of option selected //
    // $(".location-radio").hide();
    if (formId === "#education-flow-calc" && getNameFromTagId($("input:radio[name=slocation-input]:checked").attr("tag")) === "not-sure"
      || formId === "#parent-flow-calc" && getNameFromTagId($("input:radio[name=location-input]:checked").attr("tag")) === "not-sure") {
      $progressItem.eq(currStep - 2).addClass("active");
      $progressItem.eq(currStep - 1).addClass("active");
    }
    else {
      $progressItem.eq(currStep - 1).addClass("active");
    }

    $progressItem.eq(currStep).addClass("current");

    if (formId === "#education-flow-calc") {
      showNudgeDescription("icicibank:student-ecosystem/user/student", ".student");
    }
    else if (formId === "#institute-flow-calc") {
      showNudgeDescription("icicibank:student-ecosystem/user/institute", ".institute");
    }
    else if (formId === "#parent-flow-calc") {
      showNudgeDescription("icicibank:student-ecosystem/user/parent", ".parent");
    }

    if (formId === "#education-flow-calc" && currStep === 5) {
      $(formId + " .dotted-progress").addClass("hide");
    }
    else if (formId === "#parent-flow-calc" && currStep === 7) {
      $(formId + " .dotted-progress").addClass("hide");
    }
    else {
      $(formId + " .dotted-progress").removeClass("hide");
    }
    if (formId === "#parent-flow-calc" && getNameFromTagId($("input:radio[name=lookingFor_level]:checked").attr("tag")) === "self") {
      $(formId + ' .dotted-progress li').not(".current").addClass("active");
      $(".self").removeClass("hide");
    }
    if (getNameFromTagId($("input:radio[name=lookingFor_level]:checked").attr("tag")) === "child") {
      $("input:radio[name=lookingFor_level]:checked").prop("checked", false);
    }
  });
  /* 27/04/2022 redirect link update */
  $(".redirect-btn").click(function () {
    window.location.replace("solution-filter.html");
  });

  $(formId + ' .to-back-step').click(function () {


    if (formId === "#institute-flow-calc") {
      currStep = currStep > 0 ? currStep - 1 : currStep;
      currInsStep = currStep;
    }
    else if (formId === "#parent-flow-calc") {
      if (formId === "#parent-flow-calc" && getNameFromTagId($("input:radio[name=location-input]:checked").attr("tag")) === "not-sure"
        || childClicked == true && !$("#pedu_level").hasClass("hide")) {
        currStep = currStep > 0 ? currStep - 2 : currStep;
      }
      else if (onCampusPowerFirstTime && queryParameters()["pageType"] === 'instituteChild' && !$("#pedu_level").hasClass("hide")) {
        onCampusPowerFirstTime = false;
        currStep = currStep > 0 ? currStep - 2 : currStep;
        $(formId + ' .dotted-progress li').eq(2).removeClass("current");
        $(formId + ' .dotted-progress li').eq(2).removeClass("active");
      } else {
        currStep = currStep > 0 ? currStep - 1 : currStep;
      }
      currParStep = currStep;
    }
    else if (formId === "#education-flow-calc") {
      if (formId === "#education-flow-calc" && getNameFromTagId($("input:radio[name=slocation-input]:checked").attr("tag")) === "not-sure") {
        currStep = currStep > 0 ? currStep - 2 : currStep;
      }
      else {
        currStep = currStep > 0 ? currStep - 1 : currStep;
      }
      currStuStep = currStep;
    }

    $sliderItem.addClass("hide");
    $sliderItem.eq(currStep).removeClass("hide");

    if (formId === "#education-flow-calc" && getNameFromTagId($("input:radio[name=slocation-input]:checked").attr("tag")) === "not-sure"
      && !$("#edu_level").hasClass("hide")) {
      $("input:radio[name=slocation-input]:checked").prop("checked", false);
      $sliderItem.eq(currStep).addClass("hide");
      $sliderItem.eq(currStep + 1).removeClass("hide");
      currStep++;
      currStuStep = currStep;
    }
    else if (formId === "#parent-flow-calc" && getNameFromTagId($("input:radio[name=location-input]:checked").attr("tag")) === "not-sure"
      && !$("#pedu_level").hasClass("hide")) {
      $("input:radio[name=location-input]:checked").prop("checked", false);
      $sliderItem.eq(currStep).addClass("hide");
      $sliderItem.eq(currStep + 1).removeClass("hide");
      currStep++;
      currParStep = currStep;
    }
    if (formId === "#education-flow-calc" && getNameFromTagId($("input:radio[name=slocation-input]:checked").attr("tag")) === "not-sure"
      || formId === "#parent-flow-calc" && getNameFromTagId($("input:radio[name=location-input]:checked").attr("tag")) === "not-sure"
      || childClicked == true && !$("#looking-for").hasClass("hide")) {
      $progressItem.eq(currStep + 2).removeClass("active");
      $progressItem.eq(currStep + 2).removeClass("current");
      $progressItem.eq(currStep + 1).removeClass("active");

    }
    else {
      $progressItem.eq(currStep + 1).removeClass("active");
      $progressItem.eq(currStep + 1).removeClass("current");
    }


    if (formId === "#education-flow-calc" && currStep === 5) {
      $(formId + " .dotted-progress").addClass("hide");
    }
    else if (formId === "#parent-flow-calc" && currStep === 7) {
      $(formId + " .dotted-progress").addClass("hide");
    }
    else {
      $(formId + " .dotted-progress").removeClass("hide");
    }
    if (isk12Selected) {
      $(formId + " input[tag='icicibank:student-ecosystem/looking-to-pursue/i-finn']").parent().removeClass("hide");
    }

    if (formId === "#parent-flow-calc" && getNameFromTagId($("input:radio[name=lookingFor_level]:checked").attr("tag")) === "self") {
      $(".self").addClass("hide");
      $(formId + ' .dotted-progress li').removeClass("active");
      $("input:radio[name=lookingFor_level]:checked").prop("checked", false);
    }
    // $("input:radio[name=location-input]:checked").prop("checked", false);
    // $("input:radio[name=slocation-input]:checked").prop("checked", false);

  });
};

function showNudgeDescription(tab, description) {

  clearTimeout(nudgeTimeout);
  $(".notification-box").removeClass("hide");
  $(".ese-started-section .section-inner").removeClass("hide-nudge");

  var filteredStudentArr = getFilteredSolutionArray(
    studentNudgeJson,
    "usertypetags",
    tab
  );
  var text;

  var descArray = filteredStudentArr.filter(function (nudge) {
    $(".horizontal-tab-content .active .education-flow").each(function () {
      if (!$(this).hasClass("hide") && nudge.nudgetags.length > 0) {

        if ($(this).attr("tag") === nudge.nudgetags[0]) {
          text = createNudgeHtml(nudge)
          return text;
        };
      }
      else if (!$(this).hasClass("hide") && nudge.nudgetags.length == 0 && nudge.nudgedesc !== "") {
        text = createNudgeHtml(nudge);
      }
    })
  })

  $(description + "desc").empty();
  $(description + "desc").append(text);
  nudgeTimeout = setTimeout(function () {
    $(".notification-box").addClass("hide");
    $(".ese-started-section .section-inner").addClass("hide-nudge");
  }, 10000);
}

function createNudgeHtml(selectedObj) {
  let studentNudgeHtml = "";
  studentNudgeHtml = "<strong class='block'>" + selectedObj["nudgetitle"] + "?</strong>" + selectedObj["nudgedesc"] + (selectedObj["nudgelink"] !== "" ? "<a id='" + selectedObj["nudgeId"] + "' target='_blank' href='" + selectedObj["nudgelink"] + "'>Click here</a> to know more" : "");
  return studentNudgeHtml;
}


$("#lets-get-started-explore-student").click(function () {
  //14
  dataLayer.push({
    event: "custom_event",
    eventCategory: "campus_power",
    eventAction: "student_explore_clicked",
    eventLabel: student_selected_current_stage,
  });
});

$("#parent-flow-calc > div:nth-child(7) > div.button-group > a").click(function () {
  //15
  dataLayer.push({
    event: "custom_event",
    eventCategory: "campus_power",
    eventAction: "parent_explore_clicked",
    eventLabel: parent_selected_current_stage,
  });
});

var studentNudgeJson = []; // orignal Nudge Array data
var filteredNudgeArr = []; // filtered data as per tab selection or user Type
let shownFirstTime = true; // when no tagging is there for question/options then show nudge only for first time
let divTimeout = null; // when div is getting load later adding timeout to JS code below and clearing the timeout when not required

$(document).ready(function () {
  let currentTypeTag =  getCurrentTag(); // get current selected user Tag
  studentNudgeJson =
    $("#nudgesJson").length && convertJSON($("#nudgesJson").text());
    
  handleStudentNudges(currentTypeTag); // call and bind function for lets get started Default Case
  // getCurrentQuestion("#student-flow-calc");
});

// function to get current selected user tag 
function getCurrentTag() {
  let tagValue = "";
  if ($("#landingPageType").text() === "institute") {
    tagValue = "icicibank:student-ecosystem/user/institute";
  } else if ($("#landingPageType").text() === "student") {
    tagValue = "icicibank:student-ecosystem/user/student";
  } else if ($("#landingPageType").text() === "parent") {
    tagValue = "icicibank:student-ecosystem/user/parent";
  } else if (
    $("#landingPageType").text() === "overall" &&
    $(".ese-started-section .horizontal-tab li.active").length > 0
  ) {
    tagValue = $(".ese-started-section .horizontal-tab li.active").attr("tag");
  }
  return tagValue;
}
function handleStudentNudges(selectedgetStartedTab) {
  filteredNudgeArr = [];
  if(studentNudgeJson) {
    filteredNudgeArr = getFilteredSolutionArray(
      studentNudgeJson,
      "usertypetags",
      selectedgetStartedTab
    );
  }
}

function getCurrentQuestion(currentFormId) {
  let currentActiveTag="",currentChildActiveTag="";
  let foundNudge={};
  divTimeout = setTimeout(function () {
    $(currentFormId + " .education-flow").each(function () {
      if (!$(this).hasClass("hide")) {
        currentActiveTag = $(this).attr("tag");
        foundNudge = filteredNudgeArr.find(function (el) {
          return el["nudgetags"].length > 0 && el["nudgetags"].indexOf(currentActiveTag) > -1 && el;
        });
        if(!foundNudge && $(currentFormId + " [tag='" + currentActiveTag + "'] input[type='radio']:checked")) {
          currentChildActiveTag = $(currentFormId + " [tag='" + currentActiveTag + "'] input[type='radio']:checked").attr("tag");
          foundNudge = filteredNudgeArr.find(function (el) {
            return el["nudgetags"].length > 0 && el["nudgetags"].indexOf(currentChildActiveTag) > -1 && el;
          });
        }
        if(!foundNudge && shownFirstTime) {
          foundNudge = filteredNudgeArr.find(function (el) {
            return el["nudgetags"].length === 0 && el["usertypetags"].length > 0 && el["usertypetags"].indexOf(getCurrentTag()) > -1 && el;
          });
          shownFirstTime = false; // after showing the nudge make it false as it needs to be show only 1 time
        }
        return;
      }
    });
    if(!foundNudge) {
      $(currentFormId + " #student-nudge").parent().addClass("hide");
      foundNudge = getInputCheckedTagValue(currentFormId,currentActiveTag);
    }
    if(foundNudge) {
      createStuNudge(currentFormId,foundNudge);
      $(currentFormId + " #student-nudge").parent().removeClass("hide");
      clearNudge(currentFormId);
    }
  }, 10);
}

function createStuNudge(currentFormId, selectedObj) {
  $(currentFormId + " #student-nudge").empty();
  if(!selectedObj["nudgetitle"] || selectedObj["nudgetitle"] ==="") {
    $(".notification-box").addClass("hide");
    $(currentFormId + " #student-nudge").empty();
  }
  else {
    let studentNudgeHtml="";
    studentNudgeHtml = "<strong class='block'>"+selectedObj["nudgetitle"] +"?</strong>"+selectedObj["nudgedesc"] + (selectedObj["nudgelink"] !== "" ? "<a target='_blank' href='"+selectedObj["nudgelink"] +"'>Click here</a> to know more" : "");
    studentNudgeHtml.length > 0 && $(currentFormId + " #student-nudge").html(studentNudgeHtml);
  }
}
function clearNudge(currentFormId) {
  nudgeTimeout = setTimeout(function () {
    $(currentFormId + " #student-nudge")
      .parent()
      .addClass("hide");
  }, 10000);
}

function removeNudge(currentFormId) {
  clearTimeout(nudgeTimeout);
  clearTimeout(divTimeout);
  $(currentFormId + " #student-nudge")
      .parent()
      .addClass("hide");
}

function getInputCheckedTagValue(currentFormId, currentActiveTag) {
  let currentCheckedTag="";
  let foundNudge= undefined;
  $(currentFormId + " [tag='" + currentActiveTag + "'] input[type='radio']").on(
    "change",
    function () {
      currentCheckedTag = $(this).attr("tag");
      foundNudge = filteredNudgeArr.find(function (el) {
        return el["nudgetags"].length > 0 && el["nudgetags"].indexOf(currentCheckedTag) > -1 && el;
      });
      if(foundNudge) {
        createStuNudge(currentFormId,foundNudge);
        $(currentFormId + " #student-nudge").parent().removeClass("hide");
      }
    }
  );
}
function onStudentChangeValue() {
  $("#student-flow-calc input[name=eduType]").on("change", function () {
    studentSelectedVal["eduType"] = getNameFromTagId($(this).attr("tag"));
    return false;
  });
  $("#student-flow-calc input[name=furure_edu_level]").on("change", function () {
    if(getNameFromTagId($(this).attr("tag")) !== 'online-learning') {
      studentSelectedVal["furure_edu_level"] = getNameFromTagId($(this).attr("tag"));
      studentSelectedVal["stageType"] = getNameFromTagId($("#student-flow-calc input[name=stageType]:checked").attr("tag"));
    }
    else {
      studentSelectedVal["stageType"] = getNameFromTagId($(this).attr("tag"));
    }
    $("#student-flow-calc [tag='icicibank:student-ecosystem/looking-to-pursue'] #student-href").remove();
    changeHrefStudentParent('#student-flow-calc',$(this).val(),studentSelectedVal,'#student-href','icicibank:student-ecosystem/looking-to-pursue');
    return false;
  });
  $("#student-flow-calc input[name=location-input]").on("change", function () {
    studentSelectedVal["location-input"] = getNameFromTagId($(this).attr("tag"));
    redirectAfterIndia('#student-flow-calc',$(this).val(),studentSelectedVal,'#student-href','icicibank:student-ecosystem/location');
    return false;
  });
  $("#student-flow-calc input[name=countryType]").on("change", function () {
    studentSelectedVal["countryType"] = getNameFromTagId($(this).attr("tag"));
    return false;
  });
  $("#student-flow-calc input[name=stageType]").on("change", function () {
    studentSelectedVal["stageType"] = getNameFromTagId($(this).attr("tag"));
    return false;
  });
  // get value of those which are selected as default without radio clicked
  $("#student-flow-calc .education-flow .radio-style-box input[type='radio']:checked").each(function () {
    studentSelectedVal[$(this).attr("name")] =getNameFromTagId($(this).attr("tag"));
  });
}

function onParentChangeValue() {
  $("#parent-flow-calc input[name=lookingFor_level]").on("change", function () {
    parentSelectedVal["lookingFor_level"] = getNameFromTagId($(this).attr("tag"));
    return false;
  });
  $("#parent-flow-calc input[name=professional_edu_level]").on("change", function () {
    parentSelectedVal["professional_edu_level"] = getNameFromTagId($(this).attr("tag"));
    return false;
  });
  $("#parent-flow-calc input[name=eduType]").on("change", function () {
    parentSelectedVal["eduType"] = getNameFromTagId($(this).attr("tag"));
    return false;
  });
  $("#parent-flow-calc input[name=furure_edu_level]").on("change", function () {
    if(getNameFromTagId($(this).attr("tag")) !== 'online-learning') {
      parentSelectedVal["furure_edu_level"] = getNameFromTagId($(this).attr("tag"));
      parentSelectedVal["stageType"] = getNameFromTagId($("#parent-flow-calc input[name=stageType]:checked").attr("tag"));
    }
    else {
      parentSelectedVal["stageType"] = getNameFromTagId($(this).attr("tag"));
    }
    $("#parent-href").remove();
    changeHrefStudentParent('#parent-flow-calc',$(this).val(),parentSelectedVal,'#parent-href','icicibank:student-ecosystem/looking-to-pursue');
    return false;
  });
  $("#parent-flow-calc input[name=location-input]").on("change", function () {
    parentSelectedVal["location-input"] = getNameFromTagId($(this).attr("tag"));
    redirectAfterIndia('#parent-flow-calc',$(this).val(),parentSelectedVal,'#parent-href','icicibank:student-ecosystem/location');
    return false;
  });
  $("#parent-flow-calc input[name=countryType]").on("change", function () {
    parentSelectedVal["countryType"] = getNameFromTagId($(this).attr("tag"));
    return false;
  });
  $("#parent-flow-calc input[name=stageType]").on("change", function () {
    parentSelectedVal["stageType"] = getNameFromTagId($(this).attr("tag"));
    return false;
  });
  $("#parent-flow-calc input[name=pageType]").on("change", function () {
    parentSelectedVal["pageType"] = getNameFromTagId($(this).attr("tag"));
    return false;
  });
  $("#parent-flow-calc .education-flow .radio-style-box input[type='radio']:checked").each(function () {
    parentSelectedVal[$(this).attr("name")] = getNameFromTagId($(this).attr("tag"));
  });
}

function onInstituteChangeValue() {
  $("#institute-flow-calc input[name=instituteType]").on("change", function () {
    instituteSelectedVal["instituteType"] = $(this).val();
    changeHrefInstitutueBtn($(this).val());
    return false;
  });
  $("#institute-flow-calc input[name=furure_edu_level]").on("change", function () {
    instituteSelectedVal["furure_edu_level"] = $(this).val();
    return false;
  });
  $("#institute-flow-calc .education-flow .radio-style-box input[type='radio']:checked").each(function () {
    instituteSelectedVal[$(this).attr("name")] = getNameFromTagId($(this).attr("tag"));
  });
  changeHrefInstitutueBtn( $("#institute-flow-calc input[name=instituteType]:checked").val());
}
function changeHrefInstitutueBtn($currentValue) {
  if($currentValue === 'management') {
    // instituteSelectedVal["personType"] ="institute";
    $('#institute-flow-calc [tag="icicibank:student-ecosystem/institute-user-type"] .button-group').append("<a href='"+ $("#solutionHref").text() +"' class='ic-btn to-next-step' id='institute-href'>Next</a>");
    $('#institute-flow-calc [tag="icicibank:student-ecosystem/institute-user-type"] .button-group button').addClass("hide");
    $('#institute-flow-calc [tag="icicibank:student-ecosystem/institute-user-type"] .button-group').on("click", function (event) {
      event.preventDefault();
      setGetParameter($("#institute-href"), instituteSelectedVal);
      return false;
    });
  } else {
    $('#institute-flow-calc [tag="icicibank:student-ecosystem/institute-user-type"] .button-group #institute-href').remove();
    $('#institute-flow-calc [tag="icicibank:student-ecosystem/institute-user-type"] .button-group button').removeClass("hide");
    $('#institute-flow-calc [tag="icicibank:student-ecosystem/institute-user-type"] .button-group').off('click');
  }
}

function changeHrefParent($currentDiv) {
  if(!$currentDiv.hasClass("hide")) {
    if($('#parent-flow-calc [tag="'+$currentDiv.attr("tag")+'"] .button-group a').length > 0) {
      $('#parent-flow-calc [tag="'+$currentDiv.attr("tag")+'"] .button-group #parent-href').remove();
      $('#parent-flow-calc [tag="'+$currentDiv.attr("tag")+'"] .button-group button').removeClass("hide");
      $('#parent-flow-calc [tag="'+$currentDiv.attr("tag")+'"] .button-group a').off('click');
    }
    else {
      $('#parent-flow-calc [tag="'+$currentDiv.attr("tag")+'"] .button-group').append("<a href='"+ $("#solutionHref").text() +"' class='ic-btn to-next-step' id='parent-href'>Next</a>");
      $('#parent-flow-calc [tag="'+$currentDiv.attr("tag")+'"] .button-group button.ic-btn.to-next-step').addClass("hide");
      $('#parent-flow-calc [tag="'+$currentDiv.attr("tag")+'"] .button-group a').on("click", function (event) {
        event.preventDefault();
      setGetParameter($("#parent-href"), parentSelectedVal);
      return false;
    });
    }
  }
}
// when user selects online learning from current education tag then redirect to Solution filter page with selected value
function changeHrefStudentParent(formId,currentValue,objType,anchorId,tagId) {
  let $hrefTag= currentValue === 'online learning' ? $("#solutionHref").text() : $("#ifinnHref").text();
  if(currentValue === 'online learning' || currentValue === 'i-finn') {
    $(formId + ' [tag="'+tagId+'"] .button-group').append("<a href='"+ $hrefTag +"' class='ic-btn to-next-step' id='"+anchorId.substring(1)+"'>Next</a>");
    $(formId + ' [tag="'+tagId+'"] .button-group .to-next-step').addClass("hide");
    $(formId + ' [tag="'+tagId+'"] .button-group a').removeClass("hide");
    $(formId + ' [tag="'+tagId+'"] .button-group a').on("click", function (event) {
      event.preventDefault();
      currentValue === 'online learning' ? setGetParameter($(anchorId), objType) : window.open($("#ifinnHref").text(),'_blank');
      return false;
    });
    return;
  }
  else {
    $(formId + ' [tag="'+tagId+'"] .button-group ' + anchorId).remove();
    $(formId + ' [tag="'+tagId+'"] .button-group button').removeClass("hide");
    $(formId + ' [tag="'+tagId+'"] .button-group a').off('click');
  }
}

function redirectAfterIndia(formId,currentValue,objType,anchorId,tagId) {
  if(currentValue === 'india') {
    $(formId + ' [tag="'+tagId+'"] .button-group').append("<a href='"+ $("#solutionHref").text() +"' class='ic-btn to-next-step' id='"+anchorId.substring(1)+"'>Next</a>");
    $(formId + ' [tag="'+tagId+'"] .button-group .to-next-step').addClass("hide");
    $(formId + ' [tag="'+tagId+'"] .button-group a').removeClass("hide");
    $(formId + ' [tag="'+tagId+'"] .button-group a').on("click", function (event) {
      event.preventDefault();
      setGetParameter($(anchorId), objType);
      return false;
    });
    return;
  }
  else {
    $(formId + ' [tag="'+tagId+'"] .button-group ' + anchorId).remove();
    $(formId + ' [tag="'+tagId+'"] .button-group button').removeClass("hide");
    $(formId + ' [tag="'+tagId+'"] .button-group a').off('click');
  }
}
/* verticaltab-image */
$(".verticaltab-image a").click(function () {
  $(this).parents(".verticaltab-image").find("li").removeClass("active");
  $(this).parent().addClass("active");
  let currentTab = $(this).attr("href");
  currentVerticalRecSolTab = $(this).attr("tag");
  $(currentTab).addClass("active");
  bindViewAllCta();
  return false;
});

//for custom dropdown on mobile
(function () {
  let $availingDropdown = $(".m-dropdown-button");
  let $tabItem = $(".verticaltab-image li a");

  $availingDropdown.on("click", function () {
    $(this).next().toggleClass("show");
  });

  $tabItem.on("click", function () {
    let displayParent = $(this).closest(".verticaltab-image");
    displayParent.prev().html($(this).find("h4").html());
    displayParent.removeClass("show");
  });

  $(document).click(function (event) {
    var target = event.target;
    var select = $availingDropdown;
    if (!select.is(target) && select.has(target).length === 0) {
      $availingDropdown.next().removeClass("show");
    }
  });
})();

let orignalRecmdedSolArray=[];
let selectedRecomArr=[]; // contain filtered data as per requirement
let currentRecomSolTab=""; // current value of horizontal tab
let currentVerticalRecSolTab=""; // current value of vertical tab
let $currentPageHorizontalTabEl = $(".recomendedSolution.horizontal-tab a");
let isSolutionRecmdedFinancialTab = true;

$(document).ready(function() {
  orignalRecmdedSolArray = $("#recommendedUserTypeAsJson").length > 0 && convertJSON($("#recommendedUserTypeAsJson").text());
  // binding click event to horintal tab for recomended solution page
  $currentPageHorizontalTabEl.click(function () {
    $(this).parents(".recomendedSolution.horizontal-tab").find("li").removeClass("active");
    $(this).parent().addClass("active");
    let currentTab = $(this).attr("href");
    currentOpenTabTag = $(this).attr("tag");
    isSolutionRecmdedFinancialTab = currentTab === '#financial-solutions'; // check if financial tab flow or not
    recomndSolutionTabChange($(this)); // when horizontal tab change then filter data accordingly
    $(this)
      .parents(".recomendedSolutionhorizontal.horizontal-link-tab")
      .find(".recomndpanel.tab-panel")
      .removeClass("active");
    $(currentTab).addClass("active");
    return false;
  });

  // get active horizontal tabId
  currentRecomSolTab = $currentPageHorizontalTabEl.length > 0 && ($currentPageHorizontalTabEl.attr("href"));
  currentVerticalRecSolTab = $(".verticaltab-image a").length > 0 && ($(".verticaltab-image a").attr("tag"));

  // adding click event to each horizontad tab id's to perorm vertical tab change event 
  $(".ese-solutions-sidebartab .horizontal-tab-content .tab-panel").length > 0 && 
  $(".ese-solutions-sidebartab .horizontal-tab-content .tab-panel").each(function () {
    $('#'+$(this).attr("id") + " .verticalImagetab-section .sidebar-tab .verticaltab-image li a").click(function(){
      filterRecomndArr($(this).attr("tag")); // filter data as pervertical selection tabs
      generateRecomndCardsHTML(selectedRecomArr, currentRecomSolTab);
    });
  });
  
  financialSol = getFilteredSolutionArray(
    orignalRecmdedSolArray,
    "typetag",
    "icicibank:student-ecosystem/type/financial-solutions"
  );
  valueAddedServices = getFilteredSolutionArray(
    orignalRecmdedSolArray,
    "typetag",
    "icicibank:student-ecosystem/type/value-added-services"
  );
  
  // on first page load generate card with default selections
  filterRecomndArr(currentVerticalRecSolTab);
  generateRecomndCardsHTML(selectedRecomArr, currentRecomSolTab); // generate cards accordingly
  bindViewAllCta();
});

// get filterd array data as per selection 
function filterRecomndArr(tagId) {
  selectedRecomArr = getFilteredSolutionArray(
    isSolutionRecmdedFinancialTab ? financialSol : valueAddedServices,
    isSolutionRecmdedFinancialTab ? "categorytag": "intenttag",
    tagId
  );
}
// generate solution cards on the basis of selected choice
function generateRecomndCardsHTML(selectedRecomArr, currentTabId) {
  if(selectedRecomArr) {
    $(currentTabId + "-Cards .ese-solutions-slider").hasClass("slick-initialized") &&
    $(currentTabId + "-Cards .ese-solutions-slider").slick("unslick"); // unslick previosuly generated slick cards and then create new one
    $(currentTabId + "-Cards .ese-solutions-slider").empty(); // emptying existing div for re-render
    let solutionCardsHtml="";
    for (let i = 0; i < selectedRecomArr.length; i++) {
      solutionCardsHtml += '<div class="solutions-card"> <div class="media"><img src="'+selectedRecomArr[i]["imagepath"]+'" alt=""></div><div class="content"><div class="top-content"><h3>'+ selectedRecomArr[i]["title"] +'</h3>'+ selectedRecomArr[i]["description"] +'</div><div class="buttons"><a target="_blank" id="' +
      (selectedRecomArr && selectedRecomArr.length > 0 && selectedRecomArr[i]["title"].split(" ")[0]).replace(/[^a-zA-Z0-9]/g, '') +
      "-" +
      i +
      '" href="'+ selectedRecomArr[i]["ctapath"] +'" class="ic-btn ic-btn-gradient">'+ selectedRecomArr[i]["ctalabel"] +'</a></div></div></div>';
    }
    //Display result
    if (solutionCardsHtml.length > 0) {
      $(currentTabId + "-Cards .ese-solutions-slider").html(solutionCardsHtml);
    }

    /*slick initialization ese-solution-cards */
    $(currentTabId + "-Cards .ese-solutions-slider").slick({
    dots: false,
    arrows: true,
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });
  }
  selectedRecomArr && selectedRecomArr.length > 0 && bindDisclaimerPopupSolutionPage(selectedRecomArr, (currentTabId === '#financial-solutions'), '_recommended_solutions_click'); // create and bind click event for popup and discalimer for each eligible card
}

// on horizontal Tab change check default values and genrate data
function recomndSolutionTabChange($tabEl) {
  if($tabEl.length > 0) {
    currentRecomSolTab = $tabEl.attr("href");
    selectedRecomArr = isSolutionRecmdedFinancialTab ? financialSol : valueAddedServices;
    // generate solution card on horizontal tab change with default selecyed vertical tab
    filterRecomndArr($(currentRecomSolTab +" .verticaltab-image a").attr("tag"));
    generateRecomndCardsHTML(selectedRecomArr,currentRecomSolTab);
    bindViewAllCta();
  }
}

function bindViewAllCta() {
  let $recomndViewAllEl = $("#recomended-viewAll");
  let params="", currentActiveTab="";
  $recomndViewAllEl.attr("href","");
  currentActiveTab = $(".recomendedSolution.horizontal-tab li.active a").attr("href");
  urlParamObj["personType"] = getNameFromTagId($("#userTag").text());
  if(urlParamObj["personType"] === 'parent') {
    urlParamObj["personParentType"] = "child";
  }
  if(urlParamObj["personType"] === 'institute') {
    urlParamObj["personParentType"] = "management";
  }
  if(urlParamObj["personType"] === 'student') {
    delete urlParamObj["personParentType"];
  }
  urlParamObj["pageType"] = currentActiveTab && currentActiveTab.substring(1);
  for (var key in urlParamObj) {
    if (urlParamObj.hasOwnProperty(key)) {
      params = params + key + "=" + urlParamObj[key] + "&";
    }
  }
  if(urlParamObj["pageType"] === "value-added-services") {
    params = params + "stageType=" + getNameFromTagId($("#value-added-services .verticaltab-image li.active a").attr("tag")) + "&";
  }
  $recomndViewAllEl.length > 0 && $($recomndViewAllEl).attr("href",$('#viewAll-recomended').text() + "?" + ((params).replace(/ /g,"_")).slice(0,-1));
}

$("#recomended-viewAll").click(function () {  //4
  dataLayer.push({
    event: "custom_event",
    eventCategory: "campus_power",
    eventAction: "recommended_solutions_for_you",
    eventLabel: "view_all_solutions_clicked",
  });
});
var landingPageCategory = "";
var isQueryParameterFlow = false;
let solutionFilterArr = []; // solution array containing active tab filtered data
var solutionFlowUser = ""; // get user type value as per the page flow
var backClickPopupJson = []; // store popup data when going back to homepage or click back button
let firstTimeQueryParamFlow = true;
var selectedSolutionCard;
var isFilterClick = false;
$(
  `.ese-solutions-filter #financial_solutions .filter-content .filter-icon`
).click(function () {
  $(this).addClass("hide");
  $(`.ese-solutions-filter #financial_solutions .sidebar-content`).addClass(
    "active"
  );
  $("body").addClass("no-scroll");
});

$(`.ese-solutions-filter #value_services .filter-content .filter-icon`).click(
  function () {
    $(this).addClass("hide");
    $(`.ese-solutions-filter #value_services .sidebar-content`).addClass(
      "active"
    );
    $("body").addClass("no-scroll");
  }
);

$(`.ese-solutions-filter #financial_solutions .sidebar-header .close`).click(
  function () {
    $(this)
      .parents(`#financial_solutions .sidebar-content`)
      .removeClass("active");
    $(
      `.ese-solutions-filter #financial_solutions .filter-content .filter-icon`
    ).removeClass("hide");
    $("body").removeClass("no-scroll");
  }
);

$(`.ese-solutions-filter #value_services .sidebar-header .close`).click(
  function () {
    $(this).parents(`#value_services .sidebar-content`).removeClass("active");
    $(
      `.ese-solutions-filter #value_services .filter-content .filter-icon`
    ).removeClass("hide");
    $("body").removeClass("no-scroll");
  }
);

/* 20/04/2022 code update  Start */
$(`.ese-solutions-filter .radio-list`).click(function () {
  $(this).next(`.radio-lists`).addClass("show");
});

/* 20/04/2022 code update  end */
if ($(window).width() < 991) {
  $(".ese-solutions-filter .sidebar-content .sb-box .heading").on(
    "click",
    function () {
      $(".ese-solutions-filter .sidebar-content .sb-box").removeClass("active");
      $(this).parents(".sb-box").addClass("active");
    }
  );
}
$(document).ready(function () {
    let filters = [];
    let isKg12Card =
      $("input[name='eduType']:checked").val() ===
      "icicibank:student-ecosystem/current-education/kg-12";
    gaUTMImplementation();

    addClickEventToheader();
    // removing header sticky if microsite
    if (window.location.pathname.indexOf("campus-power/solutions") > -1) {
      $(".new-header.desktop").removeClass("sticky");
      $(".new-header.desktop").removeClass("sticky-enable");
    }
    let filterType = "";
    backClickPopupJson =
      $("#backPopupJson").length && convertJSON($("#backPopupJson").text());

    if (
      Object.keys(queryParameters()).length != 0 &&
      queryParameters()["pageType"]
    ) {
      solutionFlowUser = queryParameters()["personType"]
        ? queryParameters()["personType"]
        : getNameFromTagId($("input[name='personType']:checked").val());
      handleQueryparamsFlow();
      isQueryParameterFlow = true;
      firstTimeQueryParamFlow = true;
      addSelctedValuesToFilter(getSubcategoryFilters());
    }
    if (!isQueryParameterFlow) {
      $(".ese-solutions-filter input[name='location-input']")
        .eq(1)
        .prop("checked", true);
      $(".ese-solutions-filter input[name='countryType']:first").prop(
        "checked",
        true
      );
      solutionFlowUser = getNameFromTagId(
        $("input[name='personType']:checked").val()
      );
    }
    studentParentChildIndiaFlow(); // Student Parent India Flow
    instituteFilterFlow(); // Institute Management Flow
    parentSelfCombination();
    loadSolutionFilterCards(
      $(".ese-solutions-filter .horizontal-link-tab ul li.active button").attr(
        "tag"
      )
    ); // getting all the cards as per active tab
    //28-4-2022 changes start
    filterType = isQueryParameterFlow
      ? queryParameters()["pageType"]
      : "financial-solutions";
    //28-4-2022 changes end

    if (filterType === "financial-solutions") {
      generateSolutionsCardItems();
    } else {
      generateServiceCardItems();
    }
    function generateSolutionsCardItems() {
      let showSolutionCardsArr = filterSolutionCards();
      let solutionCardsData =
        showSolutionCardsArr.length > 0 &&
        showSolutionCardsArr.filter(function (item, index) {
          return item && item["hideSolution"] === "false";
        });
      if (solutionCardsData[0] === "") {
        solutionCardsData.length = 0;
      }
      if (
        queryParameters()["solutionBundle"] === "smallCards" &&
        queryParameters()["cardTitle"] &&
        !isFilterClick
      ) {
        selectedSolutionCard = queryParameters()["cardTitle"];
        if (solutionBundleJson) {
          const found = solutionFilterArr.filter(function (item, index) {
            return item["categorytag"].includes(
              "icicibank:student-ecosystem/category/" + selectedSolutionCard
            );
          });
          found.sort(function (a, b) {
            return parseFloat(a.priority) - parseFloat(b.priority);
          });
          solutionCardsData = found;
        }
      }
      let html = "";
      solutionCardGroupCount = 6;
      for (let index = 0; index < solutionCardsData.length; index++) {
        if (index % solutionCardGroupCount == 0) {
          if (index >= solutionCardGroupCount)
            html += '<div class="solutions-cards hidden-card">';
          else html += '<div class="solutions-cards">';
        }
        let item = solutionCardsData[index];
        html += generateSolutionsHTML(item, index);
        if (index % solutionCardGroupCount == solutionCardGroupCount - 1) {
          html += "</div>";
        }
      }
      //Display result
      if (html.length > 0) {
        $(".financial-solutions-cards").html(html);
        solutionCardsData.length > 0 &&
          bindDisclaimerPopupSolutionPage(
            solutionCardsData,
            true,
            "_know_more_click"
          );
        bindClickKnowMoreCampus("FS");
      } else {
        $(".financial-solutions-cards").html('<div class="no-result"></div>');
      }
    }
    function bindClickKnowMoreCampus(tabType) {
      $(".solutions-cards .top-content p a").click(function () {
        dataLayer.push({
          event: "custom_event",
          eventCategory: "campus_power",
          eventAction: tabType + "_know_more_click",
          eventLabel: $(this).parent().parent().find("h3").text(),
        });
      });
    }
    function generateSolutionsHTML(card, i) {
      var html =
        '<div class="solutions-card"><div class="media"><img src="' +
        card.imagepath +
        '" alt=""></div><div class="content"><div class="top-content"><h3>' +
        card.title +
        "</h3>" +
        card.description +
        '</div><div class="buttons"><a target="_blank" id="' +
        (card && card["title"].split(" ")[0]).replace(/[^a-zA-Z0-9]/g, "") +
        "-" +
        i +
        '" href="' +
        card.ctapath +
        "?" +
        gaUTMImplementation() +
        '" class="ic-btn ic-btn-gradient">' +
        card.ctalabel +
        "</a></div></div></div>";
      return html;
    }

    function generateServiceCardItems() {
      let servicesCardsData = filterServicesCards();
      if (servicesCardsData[0] === "") {
        servicesCardsData.length = 0;
      }
      let html = "";
      servicesCardsData = parentSelfIntentCombinationVas(servicesCardsData);
      serviceCardGroupCount = 6;
      for (let index = 0; index < servicesCardsData.length; index++) {
        if (index % serviceCardGroupCount == 0) {
          if (index >= serviceCardGroupCount)
            html += '<div class="solutions-cards hidden-card">';
          else html += '<div class="solutions-cards">';
        }
        let item = servicesCardsData[index];
        html += generateServiceHTML(item, index);
        if (index % serviceCardGroupCount == serviceCardGroupCount - 1) {
          html += "</div>";
        }
      }
      //Display result
      if (html.length > 0) {
        $(".service-solutions-cards").html(html);
        servicesCardsData.length > 0 &&
          bindDisclaimerPopupSolutionPage(
            servicesCardsData,
            false,
            "_know_more_click"
          );
        bindClickKnowMoreCampus("VAS");
        gaCampusPower();
        function gaCampusPower() {
          if (
            $(
              ".service-solutions-cards .solutions-cards .solutions-card:includes('Money Management Programme')"
            )
          ) {
            $(".buttons a").click(function () {
              const MMPData = $(
                ".service-solutions-cards .solutions-cards .content .buttons a"
              )
                .parent()
                .parent()
                .find("h3")
                .text()
                .trim()
                .toLowerCase()
                .replace(/ /g, "_");
              dataLayer.push({
                event: "custom_event",
                eventCategory: "campus_power_solutions",
                eventAction: "financial_solutions,value_added_services",
                eventLabel: MMPData,
              });
            });
          }
        }
      } else {
        $(".service-solutions-cards").html('<div class="no-result"></div>');
      }
    }

    function generateServiceHTML(card, i) {
      var html =
        '<div class="solutions-card ' +
        (card.title === "Money Management Programme" && !isKg12Card
          ? "hide"
          : "") +
        '"><div class="media"><img src="' +
        card.imagepath +
        '" alt=""></div><div class="content"><div class="top-content"> <h3>' +
        card.title +
        "</h3>" +
        card.description +
        '</div><div class="buttons"><a target="_blank" id="' +
        (card && card["title"].split(" ")[0]).replace(/[^a-zA-Z0-9]/g, "") +
        "-" +
        i +
        '" href="' +
        card.ctapath +
        '" class="ic-btn ic-btn-gradient">' +
        card.ctalabel +
        "</a> </div></div> </div>";
      return html;
    }

    function parentSelfIntentCombinationVas(servicesCardsData) {
      let selectedIamValue = getNameFromTagId(
        $("input[name='personType']:checked").val()
      );
      let subcategoryParent =
        selectedIamValue === "institute"
          ? getNameFromTagId(
              $(
                ".institute_checkboxes .self_checkboxes input[name='personParentTypeSelf']:checked"
              ).val()
            )
          : getNameFromTagId(
              $(
                ".parent_checkboxes input[name='personParentType']:checked"
              ).val()
            );
      let _filteredVASItems = [];
      if (
        filterType === "value-added-services" &&
        (selectedIamValue === "parent" || selectedIamValue === "institute") &&
        (subcategoryParent === "self" ||
          subcategoryParent === "financial-assistance-for-self")
      ) {
        _filteredVASItems =
          servicesCardsData.length > 0 &&
          servicesCardsData.filter(function (item, index) {
            return (
              item && item["title"] !== "" && item["title"] === "Upskilling"
            );
          });
      }
      return _filteredVASItems.length > 0
        ? _filteredVASItems
        : servicesCardsData;
    }
    function filterSolutionCards() {
      let filteredCards = [];

      for (let i = 0; i < filters.length; i++) {
        let _filterItem = filters[i];
        if (filteredCards.length == 0) {
          filteredCards = getFilteredCards(solutionFilterArr, _filterItem);
        } else {
          filteredCards = getFilteredCards(filteredCards, _filterItem);
        }
      }

      return filteredCards;
    }

    function filterServicesCards() {
      let filteredCards = [];

      for (let i = 0; i < filters.length; i++) {
        let _filterItem = filters[i];
        if (filteredCards.length == 0 && _filterItem.category === "intenttag") {
          filteredCards = getFilteredCards(solutionFilterArr, _filterItem);
        }
      }

      return filteredCards;
    }

    function getFilteredCards(cards, _filter) {
      if (!_filter.value) {
        return cards;
      }
      if (
        filterType === "financial-solutions" &&
        _filter.category === "intenttag"
      ) {
        return cards;
      }
      if (
        filterType === "financial-solutions" &&
        _filter.category === "locationtag" &&
        getNameFromTagId(_filter.value) === "not-sure"
      ) {
        return cards;
      }
      if (
        filterType === "value-added-services" &&
        _filter.category === "intenttag"
      ) {
        let _filteredVASItems =
          cards.length > 0 &&
          cards.filter(function (item, index) {
            return (
              item &&
              item[_filter.category].length > 0 &&
              item[_filter.category].includes(_filter.value)
            );
          });
        return _filteredVASItems;
      }
      let _filteredItems =
        cards.length > 0 &&
        cards.filter(function (item, index) {
          return (
            item &&
            item[_filter.category].length > 0 &&
            item[_filter.category].includes(_filter.value)
          );
        });
      switch (_filter.category) {
        case "usertag":
          if (getNameFromTagId(_filter.value) == "institute") {
            if (_filter.subcategory) {
              _filteredItems = _filteredItems.filter(function (item) {
                let intersection =
                  getNameFromTagId(_filter.subcategory[0]) === "management"
                    ? item.instituteusertag.filter(function (element) {
                        return _filter.subcategory.includes(
                          element.toLowerCase()
                        );
                      })
                    : item.instituteLookingFor.filter(function (element) {
                        return _filter.subcategory.includes(
                          element.toLowerCase()
                        );
                      });

                if (intersection.length > 0) {
                  return item;
                }
              });
            }
          }
          /* 21/04/2022    updated  start */
          if (getNameFromTagId(_filter.value) == "parent") {
            if (_filter.subcategory) {
              _filteredItems = _filteredItems.filter(function (item) {
                let intersection =
                  getNameFromTagId(_filter.subcategory[0]) === "child"
                    ? item.parentLookingFor.filter(function (element) {
                        return _filter.subcategory.includes(
                          element.toLowerCase()
                        );
                      })
                    : item.parentProfessionalStatus.filter(function (element) {
                        return _filter.subcategory.includes(
                          element.toLowerCase()
                        );
                      });
                if (intersection.length > 0) {
                  return item;
                }
              });
            }
          }
          /* 21/04/2022    updated  end */

          break;
        case "currentedutag":
          _filteredItems = _filteredItems;
          break;
        case "locationtag":
          if (getNameFromTagId(_filter.value) == "abroad") {
            _filteredItems = _filteredItems.filter(function (item) {
              let count = 0;
              item.countrytag.map(function (val) {
                return _filter.subcategory.map(function (value) {
                  if (value.toLowerCase() === val.toLowerCase()) {
                    return (count += 1);
                  }
                });
              });
              if (count > 0) {
                return item;
              }
            });
          }
          break;
      }

      if (_filteredItems.length === 0) {
        _filteredItems = [""];
        return _filteredItems;
      }

      return _filteredItems;
    }

    function changeFilter(category, value, subcategory) {
      let filter = filters.find(function (item) {
        return item.category === category;
      });
      if (filter) {
        filter.value = value;
        if (
          filter.category == "usertag" &&
          getNameFromTagId(filter.value) == "institute"
        ) {
          filter.subcategory = [subcategory];
        } else if (
          filter.category == "locationtag" &&
          getNameFromTagId(filter.value) == "abroad"
        ) {
          filter.subcategory = [subcategory];
        } else if (
          filter.category == "usertag" &&
          getNameFromTagId(filter.value) == "parent"
        ) {
          /* 21/04/2022    updated  start */
          filter.subcategory = [subcategory]; //(filter.subcategory)? filter.subcategory.concat(subcategory) :subcategory;
        } else if (
          filter.category == "usertag" &&
          getNameFromTagId(filter.value) != "institute" &&
          getNameFromTagId(filter.value) != "parent"
        ) {
          filter.subcategory = null;
        } else if (
          filter.category == "locationtag" &&
          getNameFromTagId(filter.value) == "India"
        ) {
          /* 21/04/2022    updated  end */
          filter.subcategory = [""];
        } else if (
          filter.category == "usertag" &&
          getNameFromTagId(filter.value) != "employee"
        ) {
          /* 20/04/2022 code update  Start */
          filter.subcategory = [subcategory];
        }
        /* 20/04/2022 code update  end */
      }
    }

    function modifyFiltersBasedOnConditions(filterCategory) {
      filters.forEach(function (element) {
        if (element.category !== filterCategory) {
          return (element.value = null);
        }
      });
    }
    function addSelctedValuesToFilter(subcategory) {
      filters = [
        {
          category: "usertag",
          value: $("input[name='personType']:checked").val(),
          subcategory: subcategory ? [subcategory] : null,
        },
        {
          category: "locationtag",
          value: $("input[name='location-input']:checked").val(),
          subcategory: [$("input[name='countryType']:checked").val()],
        },
        {
          category: "intenttag",
          value: $("input[name='stageType']:checked").val(),
        },
      ];
    }
    function cardLazyLoad(cardLazyName) {
      $(window).bind("scroll", function () {
        $(cardLazyName).each(function (index) {
          if ($(".card-loading").length > 0) return;
          if ($(this).isOnScreen() && $(this).hasClass("hidden-card")) {
            var thisElement = $(this);
            thisElement.removeClass("hidden-card");
            thisElement.addClass("card-loading");
            setTimeout(function () {
              thisElement.removeClass("card-loading");
              thisElement.addClass("auto-height");
            }, 2000);
          }
        });
      });
    }
    cardLazyLoad(".service-solutions-cards .solutions-cards");
    cardLazyLoad(".financial-solutions-cards .solutions-cards");

    $("input[name='personType']").click(function () {
      isFilterClick = true;
      if ($(this).hasClass("current-active")) {
        return false;
      }
      let userCheckedval = "";

      if (getNameFromTagId(this.defaultValue) === "institute") {
        $(".institute_checkboxes  input[type='radio']").attr("disabled", false);
        $(".institute_checkboxes input[type='radio']:first").prop(
          "checked",
          true
        );
        $(".parent_checkboxes").addClass("hide");
        $(".institute_checkboxes").removeClass("hide");
        $(".institute_checkboxes").addClass("show");
        $(".institute_checkboxes .self_checkboxes").removeClass("show");
        userCheckedval = $(
          ".institute_checkboxes input[name='personParentType']:checked"
        ).val();
        instituteFilterFlow(); // Institute Management Flow
      } else {
        $(".institute_checkboxes  input[type='radio']").attr("disabled", true);
        $(".institute_checkboxes  input[type='radio']").prop("checked", false);
      }

      if (getNameFromTagId(this.defaultValue) === "parent") {
        $(".parent_checkboxes  input[type='radio']").attr("disabled", false);
        $(".parent_checkboxes input[type='radio']:first").prop("checked", true);
        $(".institute_checkboxes").addClass("hide");
        $(".parent_checkboxes").removeClass("hide");
        $(".parent_checkboxes").addClass("show");
        $(".parent_checkboxes .self_checkboxes").removeClass("show");
        userCheckedval = $(
          ".parent_checkboxes input[name='personParentType']:checked"
        ).val();
        studentParentChildIndiaFlow(); // function to hide specific options for student parent india flow
      } else {
        $(".parent_checkboxes  input[type='radio']").attr("disabled", true);
        $(".parent_checkboxes  input[type='radio']").prop("checked", false);
      }

      if (getNameFromTagId(this.defaultValue) === "student") {
        $(".institute_checkboxes").addClass("hide");
        $(".parent_checkboxes").addClass("hide");
        userCheckedval = null;
        studentParentChildIndiaFlow(); // function to hide specific options for student parent india flow
      }

      $("input[name='personType']").removeClass("current-active");
      $(this).addClass("current-active");
      changeFilter("usertag", this.value, userCheckedval);
      //28-4-2022 changes start
      filterType = $(
        ".ese-solutions-filter .horizontal-link-tab ul li.active button"
      ).attr("id");
      if (filterType === "financial-solutions") {
        generateSolutionsCardItems();
      } else {
        generateServiceCardItems();
      }
      //28-4-2022 changes end
      solutionFlowUser = getNameFromTagId(
        $("input:radio[name=personType]:checked").val()
      );
    });
    //------------21-04-2022----------------------
    // Parent Filter started
    $(".parent_checkboxes input[name='personParentType']").click(function () {
      isFilterClick = true;
      let personParentTypeVal = "";
      $(".parent_checkboxes input[name='personParentType']").removeClass(
        "current-active"
      );
      $(this).addClass("current-active");
      if (getNameFromTagId(this.defaultValue) == "self") {
        $(".parent_checkboxes .self_checkboxes  input[type='radio']").attr(
          "disabled",
          false
        );
        $(".parent_checkboxes .self_checkboxes input[type='radio']:first").prop(
          "checked",
          true
        );
        personParentTypeVal = $(
          ".parent_checkboxes .self_checkboxes input[name='personParentTypeSelf']:checked"
        ).val();
        parentSelfCombination();
      } else {
        $(".parent_checkboxes .self_checkboxes  input[type='radio']").prop(
          "checked",
          false
        );
        $(".parent_checkboxes .self_checkboxes  input[type='radio']").attr(
          "disabled",
          true
        );
        $(
          ".parent_checkboxes .self_checkboxes  input[type='radio']"
        ).removeClass("checked");
        $(".parent_checkboxes .self_checkboxes").removeClass("show");
        personParentTypeVal = $(
          ".parent_checkboxes input[name='personParentType']:checked"
        ).val();
        studentParentChildIndiaFlow(); // function to hide specific options for student parent india flow
      }
      changeFilter(
        "usertag",
        "icicibank:student-ecosystem/user/parent",
        personParentTypeVal
      );
      //28-4-2022 changes start
      if (filterType === "financial-solutions") {
        generateSolutionsCardItems();
      } else {
        generateServiceCardItems();
      }
      // studentParentIndiaFlow(); // function to hide specific options for student parent india flow
    });
    $(".parent_checkboxes input[name='personParentTypeSelf']").click(
      function () {
        isFilterClick = true;
        $(".parent_checkboxes input[name='personParentTypeSelf']").removeClass(
          "current-active"
        );
        $(this).addClass("current-active");
        changeFilter(
          "usertag",
          "icicibank:student-ecosystem/user/parent",
          $(
            ".parent_checkboxes .self_checkboxes input[name='personParentTypeSelf']:checked"
          ).val()
        );
        //28-4-2022 changes start
        if (filterType === "financial-solutions") {
          generateSolutionsCardItems();
        } else {
          generateServiceCardItems();
        }
        //28-4-2022 changes end
      }
    );
    // Parent Filter End
    //----------------------------------
    // Institute Filter Started
    $(".institute_checkboxes input[name='personParentType']").click(
      function () {
        var insSubCheckedVal = "";
        isFilterClick = true;
        // $(".institute_checkboxes input[type='radio']:checked").each(function () {
        //   checked.push($(this).val());
        // });
        if (getNameFromTagId(this.defaultValue) === "employee") {
          $(".institute_checkboxes .self_checkboxes  input[type='radio']").attr(
            "disabled",
            false
          );
          $(
            ".institute_checkboxes .self_checkboxes input[type='radio']:first"
          ).prop("checked", true);
          insSubCheckedVal = $(
            ".institute_checkboxes .self_checkboxes input[name='personParentTypeSelf']:checked"
          ).val();
        } else {
          $(".institute_checkboxes  input[type='radio']").attr(
            "disabled",
            false
          );
          $(".institute_checkboxes .self_checkboxes  input[type='radio']").prop(
            "checked",
            false
          );
          $(".institute_checkboxes .self_checkboxes  input[type='radio']").attr(
            "disabled",
            true
          );
          $(".institute_checkboxes .self_checkboxes").removeClass("show");
          insSubCheckedVal = $(
            ".institute_checkboxes input[name='personParentType']:checked"
          ).val();
        }
        changeFilter(
          "usertag",
          "icicibank:student-ecosystem/user/institute",
          insSubCheckedVal
        );
        instituteFilterFlow(); // Institute Management Flow
        //28-4-2022 changes start
        filterType = $(
          ".ese-solutions-filter  .horizontal-tab li.active button"
        ).attr("id");
        if (filterType === "financial-solutions") {
          generateSolutionsCardItems();
        } else {
          generateServiceCardItems();
        }
        //28-4-2022 changes end
      }
    );
    $(".institute_checkboxes input[name='personParentTypeSelf']").click(
      function () {
        isFilterClick = true;
        $(
          ".institute_checkboxes input[name='personParentTypeSelf']"
        ).removeClass("current-active");
        $(this).addClass("current-active");
        changeFilter(
          "usertag",
          "icicibank:student-ecosystem/user/institute",
          $(
            ".institute_checkboxes .self_checkboxes input[name='personParentTypeSelf']:checked"
          ).val()
        );
        //28-4-2022 changes start
        instituteFilterFlow(); // Institute Management Flow
        if (filterType === "financial-solutions") {
          generateSolutionsCardItems();
        } else {
          generateServiceCardItems();
        }
        //28-4-2022 changes end
      }
    );
    // Institute Filter End
    //----------------------------------

    /* 21/04/2022    updated  end */
    $("input[name='eduType']").click(function () {
      isFilterClick = true;
      if ($(this).hasClass("current-active")) {
        return false;
      }
      $("input[name='eduType']").removeClass("current-active");
      $(this).addClass("current-active");
      changeFilter("educationalLevel", this.value, null);
      isKg12Card =
        $("input[name='eduType']:checked").val() ===
        "icicibank:student-ecosystem/current-education/kg-12";
      //28-4-2022 changes start
      if (filterType === "financial-solutions") {
        generateSolutionsCardItems();
      } else {
        generateServiceCardItems();
      }
      //28-4-2022 changes end
    });

    // Location filter start ------>
    // Execute if not isQueryParameterFlow and default flow
    if (!isQueryParameterFlow) {
      $(".ese-solutions-filter input:radio[name=location-input]:nth(1)").prop(
        "checked",
        true
      );
      $(
        ".ese-solutions-filter input:radio[name=location-input]:checked"
      ).addClass("current-active");
    }

    if (
      getNameFromTagId($("input:radio[name=location-input]:checked").val()) ===
      "abroad"
    ) {
      !firstTimeQueryParamFlow &&
        $("input:radio[name=abroad]:first").prop("checked", true);
      $(".location_con  input[type='radio']").attr("disabled", false);
    }
    $("input[name='location-input']").click(function () {
      isFilterClick = true;
      if ($(this).hasClass("current-active")) {
        return false;
      }

      if (getNameFromTagId(this.defaultValue) === "abroad") {
        !firstTimeQueryParamFlow &&
          $("input:radio[name='countryType']:first").prop("checked", true);
        $(".location_con  input[type='radio']").attr("disabled", false);
      } else {
        firstTimeQueryParamFlow = false;
        $(".location_con  input[type='radio']").attr("disabled", true);
        $(".location_con  input[type='radio']").prop("checked", false);
      }
      $("input[name='location-input']").removeClass("current-active");
      $(this).addClass("current-active");
      changeFilter(
        "locationtag",
        this.value.toLowerCase(),
        $(".location_con input[name='countryType']:checked").val()
      );
      //28-4-2022 changes start
      studentParentChildIndiaFlow(); // function to hide specific options for student parent india flow
      instituteFilterFlow();
      if (filterType === "financial-solutions") {
        generateSolutionsCardItems();
      } else {
        generateServiceCardItems();
      }
      //28-4-2022 changes end
    });

    $(".location_con  input[type='radio']").click(function () {
      isFilterClick = true;
      var checked = $(".location_con input[name='countryType']:checked").val();
      changeFilter(
        "locationtag",
        "icicibank:student-ecosystem/location/abroad",
        checked
      );
      if (filterType === "financial-solutions") {
        generateSolutionsCardItems();
      } else {
        generateServiceCardItems();
      }
    });

    $("input[name='stageType']").click(function () {
      isFilterClick = true;
      if ($(this).hasClass("current-active")) {
        return false;
      }
      $("input[name='stageType']").removeClass("current-active");
      $(this).addClass("current-active");
      changeFilter("intenttag", this.value);
      //28-4-2022 changes start
      if (filterType === "financial-solutions") {
        generateSolutionsCardItems();
      } else {
        generateServiceCardItems();
      }
      //28-4-2022 changes end
    });

    $(".solutions-clear-btn").click(function () {
      isFilterClick = true;
      $("input[name='personType']:first").prop("checked", true);
      $("input[name='personType']").removeClass("current-active");
      $("input[name='eduType']:first").prop("checked", true);
      $("input[name='location-input']:eq(1)").prop("checked", true);
      $(".location_con  input[type='radio']").prop("checked", false);
      $(".location_con  input[type='radio']:first").prop("checked", true);
      $(".institute_checkboxes input[type='radio']").prop("checked", false);
      $(".institute_checkboxes input[type='radio']").attr("disabled", true);
      $("input[name='stageType']:first").prop("checked", true);
      $(".ml-25.radio-lists.institute_checkboxes").removeClass("show");
      $(".ml-25.radio-lists.parent_checkboxes").addClass("hide");
      $(".ml-25.radio-lists.parent_checkboxes").removeClass("show");
      $(".ml-25 .self_checkboxes").addClass("hide");
      $(".sb-box").removeClass("hide");
      $("#value-added-services").removeClass("hide");
      solutionFlowUser = getNameFromTagId(
        $("input:radio[name=personType]:checked").val()
      );
    });

    $(".ese-solutions-filter .sidebar-footer .m-apply").click(function () {
      isFilterClick = true;
      $(this).parents(` .sidebar-content`).removeClass("active");
      $(".ese-solutions-filter  .filter-content .filter-icon").removeClass(
        "hide"
      );
      $("body").removeClass("no-scroll");
    });
    $(".horizontal-tab li button").click(function () {
      isFilterClick = true;
      $(".horizontal-tab li").removeClass("active");
      $(this).parents(`li`).addClass("active");
      // getting all the cards as per active tab
      loadSolutionFilterCards(
        $(
          ".ese-solutions-filter .horizontal-link-tab ul li.active button"
        ).attr("tag")
      );
      parentSelfCombination();
      instituteFilterFlow();
      studentParentChildIndiaFlow();
      //28-4-2022 changes start
      if ($(this).attr("id") === "financial-solutions") {
        filterType = "financial-solutions";
        $(".service-solutions-cards").html("");
        generateSolutionsCardItems();
      } else {
        filterType = "value-added-services";
        $(".financial-solutions-cards").html("");
        generateServiceCardItems();
      }
      //28-4-2022 changes end
    });
    // tab button click changes 28-04-2022 end

    // filters logic of hide/show starts here --->
    function studentParentChildIndiaFlow() {
      let selectedIamValue = getNameFromTagId(
        $("input[name='personType']:checked").val()
      );
      let subcategoryParent =
        selectedIamValue === "student"
          ? "child"
          : getNameFromTagId(
              $(
                ".parent_checkboxes input[name='personParentType']:checked"
              ).val()
            );
      let selectedLocationValue = getNameFromTagId(
        $("input[name='location-input']:checked").val()
      );
      let pageFilterType = $(
        ".ese-solutions-filter .horizontal-link-tab ul li.active button"
      ).attr("id");
      if (selectedIamValue !== "institute" && subcategoryParent === "child") {
        $("#value-added-services").removeClass("hide"); // show VAS Tab on this combination
        if (
          (selectedIamValue === "parent" || selectedIamValue === "student") &&
          selectedLocationValue === "india"
        ) {
          $(".sb-box").each(function () {
            $(this).removeClass("hide");
          });
          if (pageFilterType === "value-added-services") {
            $("input:radio[name=stageType]").each(function () {
              if (
                $(this).val() !==
                "icicibank:student-ecosystem/intent/online-learning"
              ) {
                $(this).parent().addClass("hide");
              } else {
                $(this).prop("checked", true);
              }
            });
          } else {
            $("input:radio[name=stageType]").each(function () {
              $(this).parent().removeClass("hide");
              $(this).removeClass("current-active");
              $("input:radio[name=stageType]:first").prop("checked", "true");
              $("input:radio[name=stageType]:first").addClass("current-active");
            });
          }
          addSelctedValuesToFilter(getSubcategoryFilters());
          return; // no need to execute below code
        } else {
          $("input:radio[name=stageType]").each(function () {
            $(this).parent().removeClass("hide");
            $(this).removeClass("current-active");
          });
          $(".sb-box").each(function () {
            $(this).removeClass("hide");
          });
          $("#value-added-services").removeClass("hide"); // show VAS Tab on this combination
          !firstTimeQueryParamFlow &&
            $("input:radio[name=stageType]").eq(0).prop("checked", true);
          !firstTimeQueryParamFlow &&
            $("input:radio[name=stageType]:first").addClass("current-active");
          addSelctedValuesToFilter(getSubcategoryFilters());
        }
      }
    }

    function instituteFilterFlow() {
      let selectedIamValue = getNameFromTagId(
        $("input[name='personType']:checked").val()
      );
      let subcategoryInstitute = getNameFromTagId(
        $(".institute_checkboxes input[name='personParentType']:checked").val()
      );
      let insEmpSubCategory = getNameFromTagId(
        $(
          ".institute_checkboxes input[name='personParentTypeSelf']:checked"
        ).val()
      );
      let selectedLocation = getNameFromTagId(
        $("input[name='location-input']:checked").val()
      );
      let iFilterType = $(
        ".ese-solutions-filter .horizontal-link-tab ul li.active button"
      ).attr("id");
      if (selectedIamValue === "institute") {
        if (subcategoryInstitute === "management") {
          $("#value-added-services").addClass("hide"); // hide VAS Tab on this combination
          onHideVasTabReset();
          $(".sb-box").each(function (index) {
            if (index !== 0) {
              $(this).addClass("hide");
            }
          });
          modifyFiltersBasedOnConditions("usertag");
          return; // no need to execute below code
        }
        if (
          subcategoryInstitute === "employee" &&
          insEmpSubCategory === "financial-assistance-for-self"
        ) {
          $("#value-added-services").removeClass("hide"); // show VAS Tab on this combination
          iFilterType = $(
            ".ese-solutions-filter  .horizontal-tab li.active button"
          ).attr("id");
          $(".sb-box").each(function (index) {
            if (index !== 0) {
              $(this).addClass("hide");
            }
            if (iFilterType === "value-added-services" && index === 3) {
              $(this).removeClass("hide");
              $("input:radio[name=stageType]").each(function () {
                if (
                  $(this).val() !==
                  "icicibank:student-ecosystem/intent/online-learning"
                ) {
                  $(this).removeClass("current-active");
                  $(this).parent().addClass("hide");
                } else {
                  $(this).prop("checked", true);
                  $(this).addClass("current-active");
                }
              });
            }
          });
          if (iFilterType === "value-added-services") {
            addSelctedValuesToFilter(
              $(
                ".institute_checkboxes .self_checkboxes input:radio[name=personParentTypeSelf]:checked"
              ).val()
            );
          } else {
            modifyFiltersBasedOnConditions("usertag");
          }
          return; // no need to execute below code
        }
        if (
          subcategoryInstitute === "employee" &&
          insEmpSubCategory === "child's-education"
        ) {
          if (
            iFilterType === "value-added-services" &&
            selectedLocation === "india"
          ) {
            $("input:radio[name=stageType]").each(function () {
              if (
                $(this).val() !==
                "icicibank:student-ecosystem/intent/online-learning"
              ) {
                $(this).removeClass("current-active");
                $(this).parent().addClass("hide");
              } else {
                $(this).addClass("current-active");
                $(this).prop("checked", true);
              }
              // $(this).parent().addClass("hide");
            });
            $(".sb-box").each(function (index) {
              $(this).removeClass("hide");
            });
          } else {
            $(".sb-box").each(function () {
              $(this).removeClass("hide");
            });
            $("input:radio[name=stageType]").each(function (index) {
              $(this).parent().removeClass("hide");
              $(this).removeClass("current-active");
              if (index === 0) {
                $(this).addClass("current-active");
                $(this).prop("checked", true);
              }
            });
          }
          addSelctedValuesToFilter(
            $("input:radio[name=personParentTypeSelf]:checked").val()
          );
          return; // no need to execute below code
        } else {
          $("#value-added-services").removeClass("hide"); // show VAS Tab on this combination
          $(".sb-box").each(function () {
            $(this).removeClass("hide");
          });
          return; // no need to execute below code
        }
      }
    }
    function parentSelfCombination() {
      let selectedIamValue = getNameFromTagId(
        $("input[name='personType']:checked").val()
      );
      let subcategoryParent = getNameFromTagId(
        $(".parent_checkboxes input[name='personParentType']:checked").val()
      );
      let filterType = $(
        ".ese-solutions-filter .horizontal-link-tab ul li.active button"
      ).attr("id");
      if (selectedIamValue === "parent") {
        if (
          subcategoryParent === "self" &&
          filterType === "financial-solutions"
        ) {
          $(".sb-box").each(function (index) {
            if (index !== 0) {
              $(this).addClass("hide");
            }
          });
          modifyFiltersBasedOnConditions("usertag");
          return;
        }
        if (
          subcategoryParent === "self" &&
          filterType === "value-added-services"
        ) {
          $(".sb-box").each(function (index) {
            if (index !== 0 && index !== 3) {
              $(this).addClass("hide");
            } else {
              $(this).removeClass("hide");
            }
            if (index === 3) {
              $("input:radio[name=stageType]").each(function () {
                if (
                  $(this).val() !==
                  "icicibank:student-ecosystem/intent/online-learning"
                ) {
                  $(this).parent().addClass("hide");
                  $(this).prop("checked", false);
                  $(this).removeClass("current-active");
                } else {
                  $(this).addClass("current-active");
                  $(this).prop("checked", true);
                }
              });
            }
          });
          addSelctedValuesToFilter(
            $("input:radio[name=personParentTypeSelf]:checked").val()
          );
          return;
        } else {
          $(".sb-box").each(function () {
            $(this).removeClass("hide");
          });
          $("input:radio[name=stageType]").each(function () {
            $(this).parent().removeClass("hide");
            $(this).removeClass("current-active");
          });
        }
      }
    }
    // filters logic of hide/show Ends here --->
    function onHideVasTabReset() {
      $("#value-added-services").parent().removeClass("active");
      $("#financial-solutions").parent().addClass("active");
      let VasFilterType = $(
        ".ese-solutions-filter  .horizontal-tab li.active button"
      ).attr("id");
      loadSolutionFilterCards(
        $(
          ".ese-solutions-filter .horizontal-link-tab ul li.active button"
        ).attr("tag")
      );
      if (VasFilterType === "financial-solutions") {
        VasFilterType = "financial-solutions";
        $(".service-solutions-cards").html("");
        generateSolutionsCardItems();
      } else {
        VasFilterType = "value-added-services";
        $(".financial-solutions-cards").html("");
        generateServiceCardItems();
      }
    }
  
});

// function to get only last value os student tags
function getNameFromTagId(value) {
  if (value && value !== "") {
    return value.split("/")[2];
  }
}

// check if Solution-filter page has queryparams
function handleQueryparamsFlow() {
  // check page Type and select tab accordingly
  landingPageCategory = queryParameters()["pageType"];
  if (landingPageCategory && landingPageCategory !== "") {
    toggleCurrentHorizontalTab(
      $(".ese-solutions-filter .horizontal-link-tab ul li"),
      landingPageCategory
    );
    checkFilterByUrl();
    if (queryParameters()["location-input"] === undefined) {
      $("input[name='location-input']").eq(1).prop("checked", true);
      $("input[name='countryType']:first").prop("checked", true);
    }
  }
}

// toggle horizontal tab as per queryparams
function toggleCurrentHorizontalTab($tabEl, landingPageType) {
  $tabEl.removeClass("active");
  $tabEl.each(function () {
    if (
      $(this).find("button").text().toLowerCase().replace(/ /g, "-") ===
      landingPageType
    ) {
      $(this).addClass("active");
    }
  });
}

// function to mark check all the radio as per queryparams
function checkFilterByUrl() {
  for (var key in queryParameters()) {
    // check radio button as per queryparams
    if (key !== "pageType") {
      $(".ese-solutions-filter input:radio[name=" + key + "]").length > 0 &&
        $(".ese-solutions-filter input:radio[name=" + key + "]").each(
          function () {
            if (
              getNameFromTagId($(this).val())
                .toLowerCase()
                .indexOf(queryParameters()[key].toLowerCase()) >= 0
            ) {
              $(this).attr("disabled", false);
              $(this).prop("checked", true);
              $(this).parent().next().addClass("show");
              if ($(this).parent().next().hasClass("show")) {
                $(
                  ".ml-25.radio-lists." +
                    queryParameters()["personType"] +
                    "_checkboxes.show input[type=radio]"
                ).attr("disabled", false);
                $(
                  ".ml-25.radio-lists." +
                    queryParameters()["personType"] +
                    "_checkboxes.show input[value='" +
                    $(this).val() +
                    "']"
                ).prop("checked", true);
              }
            }
          }
        );
    }
  }
}

// get Solution card Data
function loadSolutionFilterCards(tagId) {
  solutionFilterArr = getFilteredSolutionArray(
    solutionBundleJson,
    "typetag",
    tagId
  );
}

function getSubcategoryFilters() {
  if (
    getNameFromTagId($(" input[name='personType']:checked").val()) ===
    "institute"
  ) {
    if (
      getNameFromTagId(
        $(".institute_checkboxes  input[type='radio']:checked").val()
      ) === "management"
    ) {
      return $(".institute_checkboxes  input[type='radio']:checked").val();
    }
    if (
      getNameFromTagId(
        $(".institute_checkboxes  input[type='radio']:checked").val()
      ) === "employee"
    ) {
      return $(
        ".institute_checkboxes .self_checkboxes input[type='radio']:checked"
      ).val();
    }
  }
  if (
    getNameFromTagId($(" input[name='personType']:checked").val()) === "parent"
  ) {
    if (
      getNameFromTagId(
        $(".parent_checkboxes input[type='radio']:checked").val()
      ) === "child"
    ) {
      return $(".parent_checkboxes input[type='radio']:checked").val();
    }
    if (
      getNameFromTagId(
        $(".parent_checkboxes input[type='radio']:checked").val()
      ) === "self"
    ) {
      return $(
        ".parent_checkboxes .self_checkboxes input[name='personParentTypeSelf']:checked"
      ).val();
    }
  }
}

$(".solutionpopup.disclaimer-popup .close").on("click", function () {
  $(".solutionpopup.disclaimer-popup").hide(); // hide popup on cross button click
  return false;
});

let isBackpopupOpen = false;
let $disclaimerHrefEl = $(".popup-section.solutionpopup.disclaimer-popup .disclaimer-modal-content #disclamerLink"); // pop up anchor tag div to dynamically create link
function bindDisclaimerPopupSolutionPage(incomingSolFilterArr, isFScards, componentType) {
  if (!!incomingSolFilterArr) {
    for (let i = 0; i < incomingSolFilterArr.length; i++) {
      // binding GA integration to know more button

      if (incomingSolFilterArr[i]["showPopup"] === "true" && incomingSolFilterArr[i]["ctapath"] === "") {
        $("#" + (incomingSolFilterArr[i]["title"].split(" ")[0]).replace(/[^a-zA-Z0-9]/g, '') + "-" + i).on("click", function (e) {
          gaImplementaionForFs(incomingSolFilterArr[i], isFScards, renameCtaBtn(incomingSolFilterArr[i]["ctalabel"]));
          $disclaimerHrefEl.empty();
          e.preventDefault();
          generateDisclaimerHtml(incomingSolFilterArr[i], type = "popup", isFScards);
          $(".solutionpopup.disclaimer-popup").show();
          $disclaimerHrefEl.on("click", function () {
            $(".solutionpopup.disclaimer-popup").hide();
            return false;
          });
          return false;
        });
      }
      else if (incomingSolFilterArr[i]["showDisclaimer"] === "true" && incomingSolFilterArr[i]["ctapath"] !== "") {
        $("#" + (incomingSolFilterArr[i]["title"].split(" ")[0]).replace(/[^a-zA-Z0-9]/g, '') + "-" + i).on("click", function (e) {
          gaImplementaionForFs(incomingSolFilterArr[i], isFScards, renameCtaBtn(incomingSolFilterArr[i]["ctalabel"]));
          $disclaimerHrefEl.empty();
          e.preventDefault();
          generateDisclaimerHtml(incomingSolFilterArr[i], type = "disclaimer", isFScards);
          $(".solutionpopup.disclaimer-popup").show();
          return false;
        });
      }
      else if (incomingSolFilterArr[i]["showRedirectPopup"] === "true" && incomingSolFilterArr[i]["ctapath"] !== "") {
        $("#" + (incomingSolFilterArr[i]["title"].split(" ")[0]).replace(/[^a-zA-Z0-9]/g, '') + "-" + i).on("click", function (e) {
          gaImplementaionForFs(incomingSolFilterArr[i], isFScards, renameCtaBtn(incomingSolFilterArr[i]["ctalabel"]));
          window.open(incomingSolFilterArr[i]["ctapath"] + '?' + gaUTMImplementation(), "_blank"); // to redirect to new page and open popup on previous page
          $disclaimerHrefEl.empty();
          generateDisclaimerHtml(incomingSolFilterArr[i], type = "redirectPopup", isFScards);
          $(".solutionpopup.disclaimer-popup").show();
          return false;
        });
      }
      else if (incomingSolFilterArr[i]["ctapath"] !== "") {
        //By default redirection if there is only ctapath
        $("#" + (incomingSolFilterArr[i]["title"].split(" ")[0]).replace(/[^a-zA-Z0-9]/g, '') + "-" + i).on("click", function (e) {
          gaImplementaionForFs(incomingSolFilterArr[i], isFScards, renameCtaBtn(incomingSolFilterArr[i]["ctalabel"]));
          window.open(incomingSolFilterArr[i]["ctapath"] + '?' + gaUTMImplementation(), "_blank");
          return false;
        });
      }
    }
  }
}

// generate popup content as per their type
function generateDisclaimerHtml(disclaimerData, type, isFScards) {
  $(".solutionpopup.disclaimer-popup .close").removeClass("redirect");
  if (type === "popup") { // to show popup for offline result no redirection will take place for each card
    $(".popup-section.solutionpopup.disclaimer-popup .disclaimer-modal-content h3").html(disclaimerData["popupTitle"]);
    $(".popup-section.solutionpopup.disclaimer-popup .disclaimer-modal-content p").html(disclaimerData["popupDescription"]);
    $disclaimerHrefEl.append("<a id='" + (disclaimerData["title"].replace(/ /g, "_")) + "' class='ic-btn inline-btn deeplinking'>" + disclaimerData["popupCtaLabel"] + "</a>");
  }
  if (type === "disclaimer") { // to show discalimer same tab redirection will take place for each card
    $(".popup-section.solutionpopup.disclaimer-popup .disclaimer-modal-content h3").html(disclaimerData["disclaimerTitle"]);
    $(".popup-section.solutionpopup.disclaimer-popup .disclaimer-modal-content p").html(disclaimerData["disclaimerDesc"]);
    $disclaimerHrefEl.append("<a id='" + (disclaimerData["title"].replace(/ /g, "_")) + "' target='_blank' class='ic-btn inline-btn deeplinking' data-app='" + disclaimerData["ctapath"] + "' data-app-android='" + (disclaimerData["mobilectapath"] !== "" ? disclaimerData["mobilectapath"] : disclaimerData["ctapath"]) + "' data-app-ios='" + (disclaimerData["mobilectapath"] !== "" ? disclaimerData["mobilectapath"] : disclaimerData["ctapath"]) + "'>" + disclaimerData["disclaimerCtaLabel"] + "</a>");
    $("#disclamerLink a").click(function () {
      gaImplementaionForFs(disclaimerData, isFScards, '_disclaimer_proceed_click');
      $(".disclaimer-popup").hide(); // hide popup on cross button click
      window.open(disclaimerData["ctapath"], "_blank");
      return false;
    });
  }
  if (type === "redirectPopup") { // to show discalimer when user navigate to new tab this will remain open in previous tab
    $(".popup-section.solutionpopup.disclaimer-popup .disclaimer-modal-content h3").empty();
    $(".popup-section.solutionpopup.disclaimer-popup .disclaimer-modal-content p").html(disclaimerData["redirectPopupDesc"]);
    $disclaimerHrefEl.append("<a id='" + (disclaimerData["title"].replace(/ /g, "_")) + "' target='_blank' class='ic-btn inline-btn deeplinking' href='" + disclaimerData["redirectPopupCtaPath"] + '?' + gaUTMImplementation() + "'>" + disclaimerData["redirectPopupCtaLabel"] + "</a>");
    $("#disclamerLink a").click(function () {
      gaImplementaionForFs(disclaimerData, isFScards, '_disclaimer_proceed_click');
      $(".disclaimer-popup").hide(); // hide popup on cross button click
    });
  }
  if (type === "backPopup") {
    $(".solutionpopup.disclaimer-popup .close").addClass("redirect");
    $(".popup-section.solutionpopup.disclaimer-popup .disclaimer-modal-content h3").empty();
    $(".popup-section.solutionpopup.disclaimer-popup .disclaimer-modal-content p").html(disclaimerData["backPopupDesc"]);
    $disclaimerHrefEl.append("<a id='" + (disclaimerData["backPopupCtaLabel"].replace(/ /g, "_")) + '_' + solutionFlowUser + "_backpopup' target='_blank' class='ic-btn inline-btn deeplinking' href='" + disclaimerData["backPopupCtaPath"] + gaUTMImplementation() + "'>" + disclaimerData["backPopupCtaLabel"] + "</a>");
    $("#disclamerLink a").click(function () {
      isBackpopupOpen = false;
      $(".disclaimer-popup").hide(); // hide popup on cross button click
    });
  }
  deepLinking();
}

// header popup combination with solution filter component

function addClickEventToheader() {
  if ($(".ese-solutions-filter").length > 0) {
    $(".left-side-menu.menu-level-1-child ul li.other-menu a:first").on("click", function (e) {
      $disclaimerHrefEl.empty();
      e.preventDefault();
      generateDisclaimerHtml(backClickPopupFilter()[0], "backPopup");
      $(".solutionpopup.disclaimer-popup").show();
      isBackpopupOpen = true;
      $(".solutionpopup.disclaimer-popup .close.redirect").on("click", function () {
        let url = $(".left-side-menu.menu-level-1-child ul li.other-menu a:first").attr("href");
        $(".solutionpopup.disclaimer-popup").hide(); // hide popup on cross button click
        isBackpopupOpen && (window.location.href = url);
        return false;
      });
      return false;
    });
  }
}

function backClickPopupFilter() {
  let userTagforBackPopup = "icicibank:student-ecosystem/user/" + solutionFlowUser;
  return getFilteredSolutionArray(
    backClickPopupJson,
    "backPopupUsers",
    userTagforBackPopup
  );
}

// closing popup after 1 min on solution page
function closePopupAfterTime() {
  setTimeout(function () {
    $(".solutionpopup.disclaimer-popup").hide();
  }, 10000);
}

// GA implemenation for FS Cards only
function gaImplementaionForFs(fsCard, isFsCard, componentType) {
  let prefix = isFsCard ? 'FS' : 'VAS';
  dataLayer.push({
    'event': 'custom_event',
    'eventCategory': 'campus_power_solutions',
    'eventAction': prefix + componentType,
    'eventLabel': (fsCard["title"].toLowerCase()).replace(/ /g, "_")
  });

}

function gaUTMImplementation() {
  if(queryParameters()["utm_source"]) {
    return 'utm_source=' + queryParameters()["utm_source"] + '&utm_medium=' + queryParameters()["utm_medium"] + '&utm_campaign=' + queryParameters()["utm_campaign"];
  } else return '';
}
let isrecomendedSolutionComp = $(".ese-solutions-sidebartab").length > 0;

function renameCtaBtn(card) {
  if (isrecomendedSolutionComp) {
    return '_recommended_solutions_click';
  } else {
    return '_' + card.toLowerCase().replace(/ /g, "_") + '_click';
  }

}

var aboutUsDropdownVal="";
$(document).ready(function() {
    // Event Trigger on ready 
    $(".review-dropdown > a").on("click", function (e) {
      e.preventDefault();
    });
    aboutUsDropdownVal = $('.review-dropdown div ul li:nth-child(1)').text().trim(); // Default Value
    let defultAboutusUrl = $('#pagePath').val() + ".dropdown.json?key=" + aboutUsDropdownVal;
    if($('#pagePath').val() && aboutUsDropdownVal) {
    $.ajax({
        dataType: "html",
        url: defultAboutusUrl,
        type: "GET",
        success: function (response) {
            $('#about-us-desc').html(response);
            $('#annual').html(aboutUsDropdownVal);
        },
        error: function () {
         
        },
      });
    }
    // Event Trigger on click
    $('.review-dropdown div ul li a').click(function(event){
        $('#about-us-desc').empty();
        $('#annual').empty();
        var preventMultipleCall = $(this);
        event.preventDefault();

        if ( preventMultipleCall.data('requestRunning') ) {
            return;
        }
        preventMultipleCall.data('requestRunning', false);
        aboutUsDropdownVal = $(this).text(); //clicked year
        let onChangeValueUrl = $('#pagePath').val() + ".dropdown.json?key=" + aboutUsDropdownVal;
        if($('#pagePath').val() && aboutUsDropdownVal) {
        $.ajax({
            dataType: "html",
            url: onChangeValueUrl,
            type: "GET",
            success: function (response) {
                $('#about-us-desc').html(response);
                $('#annual').html(aboutUsDropdownVal);
            },
            error: function () {
          
            },
          });
        }
   });
 });


// NRI Dropdown
const $dropdown = $("#dropDownTable");
$(document).ready(function(){
    let nriAboutUsUrl = $('#pagePath').val() + ".dropdown.json?key=";
    $dropdown.on("selectmenuchange", function (){
        var dropdownData = $(this).val();
        $.ajax({
            dataType: "html",
            url: nriAboutUsUrl + dropdownData, 
            type: "GET",
            success: function (response) { console.log("here",$('#dropdownPopup').val())
                document.getElementById( 'modal-content' ).style.display = 'block';
                document.getElementById( 'modal-background' ).style.display = 'block';
                $('#dropdownPopup').val()==='true'? $('#modal-content').html(response) : $('#holiday').html(response);
                modalClose();
                var hideData = $('#dropDownTable option:selected').val();
                if(hideData=="0"){
                    $('#holiday').empty();
                }
            },
            error: function () {
              
            },
          });
    });
});

$(document).keydown(function(e) {
    // ESCAPE key pressed
    if (e.keyCode == 27) {
        document.getElementById( 'modal-content' ).style.display = 'none';
        document.getElementById( 'modal-background' ).style.display = 'none';
    }
});
function modalClose(){
$("#modal-close").click(function() {
    document.getElementById( 'modal-content' ).style.display = 'none';
    document.getElementById( 'modal-background' ).style.display = 'none';
});
}
var timeoutCounter;
$(window).on("load orientationchange", function () {
  clearTimeout(timeoutCounter);
  timeoutCounter = setTimeout(function () {
    if ($(window).width() < 991) {
      $(".nf-lists").mCustomScrollbar("destroy");
      $(".fc-lists").mCustomScrollbar("destroy");
      //12/07/2021 start
      $(".cbz-card .tab-pane").mCustomScrollbar("destroy");
      //12/07/2021 end
      nfSlider();
      indicesSlider();
      fcSlider();
    } else {
      $(".nf-lists").hasClass("slick-initialized") &&
        $(".nf-lists").slick("unslick");
      //AAM-311 - unslick causing the slider to disappear on page load
      // $(".indices-lists").hasClass("slick-initialized") &&
      //   $(".indices-lists").slick("unslick");
      $(".fc-lists").hasClass("slick-initialized") &&
        $(".fc-lists").slick("unslick");
      setTimeout(function () {
        $(".nf-lists").mCustomScrollbar();
        $(".fc-lists").mCustomScrollbar();
        //12/07/2021 start
        $(".cbz-card .tab-pane").mCustomScrollbar();
        //12/07/2021 end
      }, 500);
    }
  }, 250);
});

$(document).ready(function () {
  RenovationSlider();
});
function nfSlider() {
  !$(".nf-lists").hasClass("slick-initialized") &&
    $(".nf-lists").slick({
      dots: false,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 3000,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            dots: false,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            dots: false,
          },
        },
      ],
    });
}

/* renovation-slider */
function RenovationSlider() {
  !$(".renovation-slider").hasClass("slick-initialized") &&
    $(".renovation-slider").slick({
      dots: false,
      infinite: false,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
}

/* lr-slider */
function Irslider() {
	!$(".lr-slider").hasClass("slick-initialized") &&
		$(".lr-slider").slick({
			dots: false,
			infinite: false,
			autoplay: false,
			autoplaySpeed: 2000,
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: true,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		});
}

$(document).ready(function () {
	if($('.erg-page.overview-page').length > 0) {
		Irslider();
	}
});
$(".openchart").click(function (e) {
    e.preventDefault();
    var indicesArray = JSON.parse($("#indicesJson").text());
    sortIndices(indicesArray);
    var name = e.target.id;
    var id = indicesArray.findIndex(item => item.title === name);
    $(".chart-popup .chart-popup-inner .media img").attr("src", indicesArray[id].durl);
    $(".chart-popup .chart-popup-inner .content a").attr("href", indicesArray[id].pdfLink);

    if (window.matchMedia("(max-width: 580px)").matches) {
        $(".chart-popup .chart-popup-inner .media img").attr("src", indicesArray[id].murl);
        $(".chart-popup .chart-popup-inner .content a").attr("href", indicesArray[id].pdfLink);
    }
    $(".chart-popup").show(),
        $("body").addClass("no-scroll"),
        $(".mob-announcement-section:visible").length > 0
            ? (scrolltoHt =
                $(".mob-announcement-section:visible").height() +
                $(".header.mobile").height() -
                100)
            : (scrolltoHt = $(".header.mobile").height() - 100),
        $(window).width() > 991 &&
        !isNaN(scrolltoHt) &&
        $("html, body").animate(
            {
                scrollTop: scrolltoHt,
            },
            1e3
        );
}),
    $(".popup-close").click(function () {
        $(".video-popup").hide(), $("body").removeClass("no-scroll");
        if ($(".chart-popup").length) {
            $(".chart-popup").hide(), $("body").removeClass("no-scroll");
        }
    })

function sortIndices(indicesArray) {
    indicesArray.sort(function (a, b) {
        return new Date(b.datetime) - new Date(a.datetime);
    });
}
$(document).ready(function () {
    indicesSlider();
})
function indicesSlider() {
    !$(".indices-lists").hasClass("slick-initialized") &&
        $(".indices-lists").slick({
            dots: false,
            infinite: false,
            autoplay: false,
            autoplaySpeed: 3000,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        dots: false
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        dots: false
                    }
                }
            ]
        });
}
/* lr-slider */
function PodcastsSlider() {
  !$(".podcasts-lists .card-lists").hasClass("slick-initialized") &&
    $(".podcasts-lists .card-lists").slick({
      dots: false,
      infinite: false,
      autoplay: false,
      autoplaySpeed: 2000,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      margin: 20,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
}

var eleArrayLength = {
  image: 0,
  video: 0,
};
/* 28/04/2021 code update */
const SLICEVALUE = 4;
function articleList(data, imagePosition, resize) {
  var date = new Date();
  var currentDate =
    date.getDate() +
    "-" +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "-" +
    date.getFullYear();
  //currentDate = currentDate.replace(/-|\s/g,"");
  function process(date) {
    var parts = date && date.split("-");
    return parts ? new Date(parts[2], parts[1] - 1, parts[0]) : parts;
  }
  imagePosition = imagePosition ? imagePosition : "left";
  const mediaKey =
    data[0] && data[0].type === "article" ? "image" : data && data[0].type;
  const parentDivSelector =
    mediaKey == "image" ? ".al-lists-image" : ".al-lists-video";
  var parentDiv = document.querySelectorAll(parentDivSelector);
  var eleArray = [];
  const imgClass = imagePosition == "right" ? "rightclass" : "leftclass";
  data.forEach(function (element, index) {
    var jsonElementDate = element.date;
    //jsonElementDate = jsonElementDate.replace(/-|\s/g,"");
    if (mediaKey == "image") {
      //	if(process(jsonElementDate) <= process(currentDate) ){
      var listItem =
        "<div class='card-list'>" +
        "<div class='card-img d-view'>" +
        "<a target='_blank' href='" +
        element.pdfLink +
        "'><img src='" +
        element.dImageRef +
        "' alt='' width='' height='' /></a></div>" +
        "<div class='card-img m-view'>" +
        "<a target='_blank' href='" +
        element.pdfLink +
        "'><img src='" +
        element.mImageRef +
        "' alt='' width='' height='' /></a></div>" +
        "<div class='content'>" +
        "<h3 class='line-clamp line-clamp-2'><a target='_blank' title='" +
        element.title +
        "' href='" +
        element.pdfLink +
        "'>" +
        element.title +
        "</a></h3>" +
        "<p class='m-view'>" +
        element.description +
        "</p>" +
        "<div class='card-bottom-text'>" +
        "<div class='card-date'>" +
        element.date +
        "</div>" +
        "<div class='bookmark-share'><div class='download'> <a title='Download' onclick=\"downloadFile('" +
        element.pdfLink +
        "' )\" ></a></div>" +
        "<div class='share' title='Share'></div><div class='share-content'>" +
        "<div class='inner-content'>" +
        "</div>" +
        "<ul class='share-link'><li><a class='link wa' href='" +
        element.sharewa +
        "' target='_blank' title='Whatsapp'></a></li>" +
        "<li><a class='link fb' href='" +
        element.sharefb +
        "' target='_blank' title='Facebook'></a></li>" +
        "<li><a class='link tw' href='" +
        element.sharetw +
        "' target='_blank' title='Twitter'></a></li>" +
        "<li><a class='link ln' href='" +
        element.shareli +
        "' target='_blank' title='LinkedIn'></a></li>" +
        "<li><a class='link eml' data-sharer='email' data-title='" +
        element.title +
        "'data-subject='" +
        element.title +
        "'data-url='" +
        element.pdfLink +
        "' title='Email'></a></li></ul>" +
        "</div></div></div></div></div></div>";
      eleArray.push(listItem);
      //		}
    } else {
      //if(process(jsonElementDate) <= process(currentDate) ){
      var listItem =
        "<div class='card-list'>" +
        "<div class='card-img d-view'>" +
        "<a class='open-video-modal' data-iframe-src='" +
        element.youtubeEmbedUrl +
        element.youtubeVideoID +
        "' data-content='" +
        element.title +
        "'> <img src='" +
        element.dImageRef +
        "' alt=''></a>" +
        "</div>" +
        "<div class='card-img m-view'>" +
        "<a class='open-video-modal' data-iframe-src='" +
        element.youtubeEmbedUrl +
        element.youtubeVideoID +
        "' data-content='" +
        element.title +
        "'> <img src='" +
        element.dImageRef +
        "' alt=''></a>" +
        "</div>" +
        "<div class='content'>" +
        "<h3" +
        ' class="line-clamp line-clamp-2 openvideo open-video-modal" data-iframe-src="' +
        element.youtubeEmbedUrl +
        element.youtubeVideoID +
        '" data-content="' +
        element.title +
        '" title="' +
        element.title +
        '">' +
        element.title +
        "</h3>" +
        "<p class='m-view'>" +
        element.description +
        "</p>" +
        "<div class='card-bottom-text'>" +
        "<div class='card-date'>" +
        element.date +
        "</div>" +
        "<div class='bookmark-share'>" +
        "<div class='download'> <a title='Download' onclick=\"downloadFile('" +
        element.pdfLink +
        "' )\" ></a></div>" +
        "<div class='share' title='Share'></div><div class='share-content'>" +
        "<div class='inner-content'>" +
        "</div>" +
        "<ul class='share-link'><li><a class='link wa' href='" +
        element.sharewa +
        "' target='_blank' title='Whatsapp'></a></li>" +
        "<li><a class='link fb' href='" +
        element.sharefb +
        "' target='_blank' title='Facebook'></a></li>" +
        "<li><a class='link tw' href='" +
        element.sharetw +
        "' target='_blank' title='Twitter'></a></li>" +
        "<li><a class='link ln' href='" +
        element.shareli +
        "' target='_blank' title='LinkedIn'></a></li>" +
        "<li><a class='link eml' data-sharer='email' data-title='" +
        element.title +
        "'data-subject='" +
        element.title +
        "'data-url='" +
        element.pdfLink +
        "' title='Email'></a></li></ul>" +
        "</div></div></div></div></div></div>";
      eleArray.push(listItem);
      //}
    }
  });
  if (!resize) {
    if (eleArrayLength.image === 0) {
      eleArrayLength[mediaKey] = eleArrayLength[mediaKey] + eleArray.length + 1;
    } else {
      eleArrayLength[mediaKey] = eleArrayLength[mediaKey] + eleArray.length;
    }
  }
  parentDiv[0].insertAdjacentHTML("beforeend", eleArray.join(" "));
  openVideoModal();
  window.Sharer.init();
  const dataLength =
    mediaKey == "image" ? articleListData.length : articleListDataVideo.length;
  if (dataLength === eleArrayLength[mediaKey]) {
    const viewMoreEl =
      mediaKey == "image" ? "#al_viewmore_image" : "#al_viewmore_video";
    $(viewMoreEl).addClass("hide");
  }
  window.Sharer.init();
}
function showVideoPopup(element, type, title) {
  if ($(".knowledge-video").is(":visible")) {
    $(".knowledge-video").hide();
    $("body").removeClass("no-scroll");
    if (element != "null") {
      element
        .parent()
        .find("iframe")
        .attr("src", element.parent().find("iframe").attr("src"));
    }
    return;
  }
  if (type == "video") {
    $("#knowledgeVideoIframe").attr("src", "");
    $("#knowledgeVideoIframe").attr("src", element);
    $("#knowledgeVideoIframeContent").text(title);
    $(".knowledge-video").show();
    $("body").addClass("no-scroll");
  }
}

function viewMoreClick(type) {
  const loderEl = type == "image" ? "#al_loading_image" : "#al_loading_video";
  $(loderEl).removeClass("hide");
  setTimeout(function () {
    $(loderEl).addClass("hide");
    const listData = type == "image" ? articleListData : articleListDataVideo;
    articleList(
      listData.slice(eleArrayLength[type], eleArrayLength[type] + SLICEVALUE)
    );
    /* 07/06/2021 code update - start */
    setTimeout(function () {
      $(loderEl)
        .siblings(".mCustomScrollbar")
        .mCustomScrollbar("scrollTo", "bottom"); //update 12/07/2021
    }, 300);
    /* 07/06/2021 code update - end*/
  }, 1000);
}

function sectionChange() {
  var option = $("#section-type").val();
  if (option == "articles") {
    $(".article-content").show();
    $(".video-content").hide();
    $(".podcasts-content").hide();
  } else if (option == "videos") {
    $(".article-content").hide();
    $(".video-content").show();
    $(".podcasts-content").hide();
  } else if (option == "podcasts") {
    $(".article-content").hide();
    $(".video-content").hide();
    $(".podcasts-content").show();
  } else if (option == "all") {
    //update 09/07/2021
    $(".article-content").show();
    $(".video-content").show();
    $(".podcasts-content").show();
  }
}
/* 28/04/2021 code update */

var articleListDataVideo = [];
var articleListData = [];
$(document).ready(function () {
  if ($("#articlesAsJson").length > 0) {
    articleListData =
      $("#articlesAsJson").length > 0 &&
      JSON.parse($("#articlesAsJson").text());
    handleSingleArticleRender();
    articleListDataVideo =
      $("#videosAsJson").length > 0 && JSON.parse($("#videosAsJson").text());
    articleListDataVideo &&
      articleList(articleListDataVideo.slice(0, SLICEVALUE));
    articleListData.length > 0 && renderSingleArticle(articleListData[0]);

    $("#section-type").selectmenu({
      change: sectionChange,
    });

    if ($(window).width() > 991) {
      PodcastsSlider();
      $(".article-lists .card-lists").mCustomScrollbar();
      $(".video-content .video-lists").mCustomScrollbar();
    }

    $(window).resize(function () {
      handleSingleArticleRender(true);
      if ($(window).width() > 991) {
        $(".article-lists .card-lists").mCustomScrollbar();
        $(".video-content .video-lists").mCustomScrollbar();
      } else {
        $(".article-lists .card-lists").mCustomScrollbar("destroy");
        $(".video-content .video-lists").mCustomScrollbar("destroy");
      }
    });
  }
});

function renderSingleArticle(article) {
  $(".single-artical-desktop img").attr("src", article.dImageRef);
  $(".single-artical-desktop .content > h3").html(article.title);
  $(".single-artical-desktop .content > p").html(article.description);
  $(".single-artical-desktop div.card-date").text(article.date);
  $("#shareContentId").html(
    "<ul class='share-link'><li><a class='link wa' href='" +
      article.sharewa +
      "' target='_blank' title='Whatsapp'></a></li>" +
      "<li><a class='link fb' href='" +
      article.sharefb +
      "' target='_blank' title='Facebook'></a></li>" +
      "<li><a class='link tw' href='" +
      article.sharetw +
      "' target='_blank' title='Twitter'></a></li>" +
      "<li><a class='link ln' href='" +
      article.shareli +
      "' target='_blank' title='LinkedIn'></a></li>" +
      "<li><a class='link eml' data-sharer='email' data-title='" +
      article.title +
      "'data-subject='" +
      article.title +
      "'data-url='" +
      article.pdfLink +
      "' title='Email'></a></li></ul>"
  );
}

function handleSingleArticleRender(resize) {
  const tempArticleData = articleListData && articleListData.slice();
  let articleLoaded = eleArrayLength.image + 1;
  if ($(window).width() > 991) {
    tempArticleData && tempArticleData.splice(0, 1);
    articleLoaded = articleLoaded - 1;
  }
  $(".al-lists-image").empty();
  tempArticleData &&
    articleList(
      tempArticleData.slice(
        0,
        eleArrayLength.image != 0 ? articleLoaded : SLICEVALUE
      ),
      "left",
      resize
    );
}
function podcastPlayPause(element) {
  var audioPlayer = element.querySelector(".audio-player");
  var playerIcon = element.querySelector(".control");
  if (audioPlayer.paused) {
    playerIcon.className = "control icon-pause";
    audioPlayer.play();
  } else {
    playerIcon.className = "control icon-play";
    audioPlayer.pause();
  }
}

function getAudioMetadata(element) {
  var minutes = parseInt(element.duration / 60, 10);
  var seconds = parseInt(element.duration % 60);
  $($(element).parents()[3])
    .find(".audio-duration")
    .text(
      String("0" + minutes).slice(-2) + ":" + String("0" + seconds).slice(-2)
    );
  $(element).data("time", element.duration);
}

function audioPlaying(element) {
  var minutes = parseInt(element.currentTime / 60, 10);
  var seconds = parseInt(element.currentTime % 60);
  const progress = Math.floor((element.currentTime * 100) / element.duration);
  $($(element).parents()[3])
    .find(".audio-duration")
    .text(
      String("0" + minutes).slice(-2) + ":" + String("0" + seconds).slice(-2)
    );
  $($(element).closest(".radial-progress")).attr(
    "data-progress",
    progress == 0 ? 1 : progress
  );
}

var ergActualData = [];
var ergfiltersArr = [];
let ergInitialArr = [];
var ergPageType = $("#erg-PageType").length > 0 && $("#erg-PageType").text();
$(document).ready(function () {
  if ($(".ergtreasure-section").length > 0) {
    ergActualData =
      $("#ergFilter").length && convertJSON($("#ergFilter").text());
    handleFilterClick(); // filters click event handler
    ergFilters();
    generateErgCardItems(ergActualData); // on load show all data
    openVideoModal();
    window.Sharer.init();
    const fromDate = $("#fromDate").flatpickr({
      dateFormat: "d/m/Y",
      defaultDate: moment().format("DD/MM/YYYY"),
      startDate: moment().format("DD/MM/YYYY"),
      maxDate: "today",
      disableMobile: true, //updated on 04-05-2021
      onChange: function (selectedDates, dateStr, instance) {
        toDate.set("minDate", dateStr);
      },
    });

    const toDate = $("#toDate").flatpickr({
      dateFormat: "d/m/Y",
      defaultDate: moment().format("DD/MM/YYYY"),
      startDate: moment().format("DD/MM/YYYY"),
      maxDate: "today",
      disableMobile: true, //updated on 04-05-2021
      onChange: function (selectedDates, dateStr, instance) {
        fromDate.set("maxDate", dateStr);
      },
    });
  }
});

function generateErgCardItems(ergCardsData) {
  let ergCardsDatas = [];
  changeTitle();
  //AAM 306 - commented the below line as it's calling the array twice
  // ergCardsDatas = getErgFilteredCards(ergActualData, ergfiltersArr.length > 0 ? ergfiltersArr[0] : undefined);
  ergCardsData = (ergCardsDatas && ergCardsDatas.length > 0 && ergCardsDatas || ergCardsData);
  if (ergCardsData[0] === "") {
    ergCardsData.length = 0;
  }
  let html = "";
  for (let index = 0; index < ergCardsData.length; index++) {
    if (ergPageType === "v1") {
      html += generateErgTCFilterHTML(ergCardsData[index], index);
    } else {
      html += generateErgReportFilterHTML(ergCardsData[index], index);
    }
  }
  //Display result
  if (html.length > 0) {
    $("#erg-tc-container").html(html);
    bindClickToVideo(); // After creation of dynamic html binding click event
  } else {
    $("#erg-tc-container").html('<div class="no-result"></div>');
  }
}

function changeTitle() {
  if (ergfiltersArr.length > 0) {
    $(".report-title").html(
      $("input[name=category-type]:checked").parent().attr("labelValue")
    );
  }
}
function generateErgTCFilterHTML(card, i) {
  var typeOfArticle =
    card.youtubeUrl !== ""
      ? '<a class="open-video-modal" data-iframe-src= ' + card.youtubeUrl + " >"
      : '<a target="_blank" href=' + card.pdfLink + ">";
  var typeOfArticleContent =
    card.youtubeUrl !== "" ? card.youtubeUrl : card.pdfLink;
  var html =
    '<div class="card-list">' +
    (card.youtubeUrl !== ""
      ? "<a class='open-video-modal' data-iframe-src='" +
        card.youtubeUrl +
        "' > <div class='card-img'><img src='" +
        card.durl +
        "' alt='' width='' height=''/></div></a>"
      : '<div class="card-img"><img src="' +
        card.durl +
        '" alt="" width="" height="" /></div>') +
    '<div class="content"><h3 class="line-clamp line-clamp-2">' +
    typeOfArticle +
    "" +
    card.title +
    '</a></h3><p class="line-clamp line-clamp-4"><a href="#">' +
    card.description +
    '</a> </p> <div class="card-bottom-text"><div class="card-date">' +
    card.datetime +
    '</div> <div class="bookmark-share">' +
    (card.youtubeUrl === ""
      ? ' <div class="download"> <a onclick="downloadFile(\'' +
        card.pdfLink +
        "' )\"></a> </div>"
      : "") +
    '<div title="Share" class="share"></div> <div class="share-content"> <div class="inner-content"><ul class="share-link"><li><a class="link wa" href="#" title="Whatsapp" data-url=' +
    typeOfArticleContent +
    ' data-sharer="whatsapp" data-url=' +
    card.pdfLink +
    ' data-title="' +
    card.title +
    '" ></a></li><li><a class="link fb" title="Facebook" href="#" data-sharer="facebook" data-url=' +
    typeOfArticleContent +
    ' data-title="' +
    card.title +
    '" ></a></li><li><a class="link tw" title="Twitter" href="#" data-sharer="twitter" data-url=' +
    typeOfArticleContent +
    ' data-title="' +
    card.title +
    '"></a></li><li><a class="link ln" title="LinkedIn" data-sharer="linkedin" href="#" data-url=' +
    typeOfArticleContent +
    ' data-title="' +
    card.title +
    '"></a></li> <li><a title="Email" data-domain data-url=' +
    typeOfArticleContent +
    ' class="link eml" data-sharer="email" data-title="' +
    card.title +
    '" data-subject="' +
    card.title +
    '" ></a> </li> </ul> </div> </div> </div></div></div></div>';
  return html;
}

function generateErgReportFilterHTML(card, i) {
  var html =
    '<div class="card-list"> <div class="card-icon"></div><div class="content"> <h3><a href="' +
    card.pdfLink +
    '" target="_blank">' +
    card.title +
    '</a></h3><p><a href="#"> ' +
    card.description +
    '</a> </p> <div class="card-bottom-text"><div class="card-date">' +
    card.datetime +
    '</div><div class="bookmark-share"><div class="download"><a onclick="downloadFile(\'' +
    card.pdfLink +
    '\' )"></a></div><div title="Share" class="share"></div><div class="share-content"><div class="inner-content"> <ul class="share-link"> <li><a class="link wa" title="Whatsapp" data-sharer="whatsapp" data-title="' +
    card.title +
    '" href="#" data-url=' +
    card.pdfLink +
    '></a></li><li><a class="link fb" title="Facebook" data-sharer="facebook" data-title="' +
    card.title +
    '" href="#" data-url=' +
    card.pdfLink +
    ' ></a></li><li><a class="link tw" title="Twitter" data-sharer="twitter" href="#" data-url=' +
    card.pdfLink +
    ' data-title="' +
    card.title +
    '"></a></li><li><a class="link ln" title="LinkedIn" data-sharer="linkedin" href="#" data-url=' +
    card.pdfLink +
    ' data-title="' +
    card.title +
    '"></a></li><li><a title="Email" class="link eml" data-sharer="email" title="Email" data-title="' +
    card.title +
    '" data-subject="' +
    card.title +
    '" data-url=' +
    card.pdfLink +
    "></a></li> </ul></div> </div> </div></div></div></div>";
  return html;
}

function handleFilterClick() {
  if ($(window).width() < 991) {
    //Handling listeners for mobile view
    $(".filter-section .sidebar-content .reports-radio .radio-list").click(
      function () {
        $(".filter-section .radio-list").removeClass("active");
        $(this).addClass("active");
      }
    );
    $(".filter-section .sidebar-header .f-icon").click(function () {
      $(".filter-section .sidebar-header").addClass("active");
      $(".filter-section .sidebar-content").addClass("active");
      $("body").addClass("no-scroll");
    });
    //close button
    $(".filter-section .sidebar-header .f-close").click(function () {
      $(".filter-section .sidebar-header").removeClass("active");
      $(".filter-section .sidebar-content").removeClass("active");
      $("body").removeClass("no-scroll");
    });
    //apply button
    $(".filter-section .sidebar-footer .apply").click(function () {
      //Begin: 04/05/2021 Logging filter values
      const selectedCat = $("input[name=category-type]:checked").val();
      const selectedPubType = $("input[name=publishing-type]:checked").val();
      const fromDate = $("#fromDate").val();
      const toDate = $("#toDate").val();

      $(".filter-section .sidebar-header").removeClass("active");
      $(".filter-section .sidebar-content").removeClass("active");
      $("body").removeClass("no-scroll");
    });
  } else {
    //Handling listeners for desktop view
    $(".filter-section .sidebar-header .f-icon")
      .unbind()
      .click(function (event) {
        event.preventDefault();
      });
    $(
      '.ergtreasure-section .reports-radio .radio-list input[name="category-type"]'
    ).click(function () {
      let selctedArr = [];
      ergFilters();
      if (
        $(
          '.ergtreasure-section .reports-radio .radio-list input[value="customrange"]'
        ).is(":checked")
      ) {
        const fromDate = $("#fromDate").val();
        var customstartdate = new Date(fromDate.split("/").reverse().join("-"));
        startdate = moment(customstartdate).format("MM/DD/YYYY");
        // console.log("customstartdate: " + startdate);
        const toDate = $("#toDate").val();
        var customenddate = new Date(toDate.split("/").reverse().join("-"));
        enddate = moment(
          customenddate.setDate(customenddate.getDate() + 1)
        ).format("MM/DD/YYYY");
        selctedArr = sortByCustomDate(handleFilterArrErg(), startdate, enddate);
      } else {
        selctedArr = handleFilterArrErg();
      }
      generateErgCardItems(selctedArr);
      openVideoModal();
      window.Sharer.init();
    });
  }
  let customRangeArr = [];
  $(
    ".filter-section .sidebar-content .publishing-radio input[name='publishing-type']"
  ).click(function () {
    $(".filter-section .publishing-radio .radio-list").removeClass("active");
    $(this).addClass("active");
    ergFilters();
    generateErgCardItems(handleFilterArrErg());
    openVideoModal();
    window.Sharer.init();
  });

  //apply button
  $(
    ".filter-section .sidebar-content .publishing-radio .custom-date-range a.ic-btn"
  ).click(function (e) {
    e.preventDefault();
    //Begin: 04/05/2021 Logging filter values
    const fromDate = $("#fromDate").val();
    var customstartdate = new Date(fromDate.split("/").reverse().join("-"));
    startdate = moment(customstartdate).format("MM/DD/YYYY");
    const toDate = $("#toDate").val();
    var customenddate = new Date(toDate.split("/").reverse().join("-"));
    enddate = moment(customenddate.setDate(customenddate.getDate() + 1)).format(
      "MM/DD/YYYY"
    );
    customRangeArr = sortByCustomDate(handleFilterArrErg(), startdate, enddate);
    generateErgCardItems(customRangeArr);
    openVideoModal();
    window.Sharer.init();
  });
}

function sortByCustomDate(filteredArr, startDate, endDate) {
  return filteredArr.filter(function (element) {
    const elDate = element.datetime;
    return moment(elDate).isBetween(startDate, endDate);
  });
}
function handlePublishingOnchange() {
  const selectedValue = $(
    "input[name=publishing-type]:checked",
    "#research-filter"
  ).val();
  if (selectedValue == "customrange") {
    $(".custom-date-range").show();
  } else {
    $(".custom-date-range").hide();
  }
}

function ergFilters() {
  ergfiltersArr = [
    {
      category: "main-category",
      value: $(
        ".ergtreasure-section .reports-radio .radio-list input[name='category-type']:checked"
      ).val(),
    },
    {
      category: "publish",
      value: $(
        ".ergtreasure-section .reports-radio .radio-list input[name='publishing-type']:checked"
      ).val(),
    },
  ];
}

function handleFilterArrErg() {
  let filteredCards = [];
  for (let i = 0; i < ergfiltersArr.length; i++) {
    let _filterItem = ergfiltersArr[i];
    if (_filterItem.value === "icicibank:erg/treasurer-s-corner/all") {
      filteredCards = ergActualData;
    } else if (
      filteredCards.length == 0 &&
      _filterItem.category !== "publish"
    ) {
      filteredCards = getErgFilteredCards(ergActualData, _filterItem);
    } else {
      filteredCards = getErgFilteredCards(filteredCards, _filterItem);
    }
  }

  return filteredCards;
}

function getErgFilteredCards(cards, _filter) {
  let _filteredErgItems;
  if (_filter.category === "main-category") {
    if (getNameFromTagId(_filter.value) !== "all") {
      _filteredErgItems = getFilteredSolutionArray(
        cards,
        "categoryTag",
        _filter.value
      );
    } else {
      _filteredErgItems = cards;
    }
  }
  if (_filter.category === "publish") {
    if (_filter.value == "all") {
      enddate = moment(new Date(Date.now() + 24 * 60 * 60 * 1000)).format(
        "MM/DD/YYYY"
      );
      _filteredErgItems = cards;
    } else if (_filter.value == "7days") {
      startdate = moment(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).format(
        "MM/DD/YYYY"
      );
      enddate = moment(new Date(Date.now() + 24 * 60 * 60 * 1000)).format(
        "MM/DD/YYYY"
      );
      _filteredErgItems = sortByCustomDate(cards, startdate, enddate);
    } else if (_filter.value == "30days") {
      startdate = moment(
        new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
      ).format("MM/DD/YYYY");
      enddate = moment(new Date(Date.now() + 24 * 60 * 60 * 1000)).format(
        "MM/DD/YYYY"
      );
      _filteredErgItems = sortByCustomDate(cards, startdate, enddate);
    } else if (_filter.value == "60days") {
      startdate = moment(
        new Date(Date.now() - 60 * 24 * 60 * 60 * 1000)
      ).format("MM/DD/YYYY");
      enddate = moment(new Date(Date.now() + 24 * 60 * 60 * 1000)).format(
        "MM/DD/YYYY"
      );
      _filteredErgItems = sortByCustomDate(cards, startdate, enddate);
    } else if (_filter.value == "6months") {
      startdate = moment(
        new Date(Date.now() - 150 * 24 * 60 * 60 * 1000)
      ).format("MM/DD/YYYY");
      enddate = moment(new Date(Date.now() + 24 * 60 * 60 * 1000)).format(
        "MM/DD/YYYY"
      );
      _filteredErgItems = sortByCustomDate(cards, startdate, enddate);
    } else if (_filter.value == "customrange") {
      _filteredErgItems = cards;
    } else {
      enddate = moment(new Date(Date.now() + 24 * 60 * 60 * 1000)).format(
        "MM/DD/YYYY"
      );
    }
  }
  return _filteredErgItems;
}
function bindClickToVideo() {
  $(".openvideo").click(function () {
    var iframe = $("#videoiFrame");
    iframe.attr("src", iframe.data("iframe-src")),
      $(".video-popup").show(),
      //$('.card-section').addClass('open-popup'),
      $("body").addClass("no-scroll"),
      $(".mob-announcement-section:visible").length > 0
        ? (scrolltoHt =
            $(".mob-announcement-section:visible").height() +
            $(".header.mobile").height() -
            100)
        : (scrolltoHt = $(".header.mobile").height() - 100),
      $(window).width() > 991 &&
        !isNaN(scrolltoHt) &&
        $("html, body").animate(
          {
            scrollTop: scrolltoHt,
          },
          1e3
        );
  });
}

/* downloadFile */
function downloadFile(file_path) {
  var filename = file_path.replace(/^.*[\\\/]/, "");
  var req = new XMLHttpRequest();
  req.open("GET", file_path, true);
  req.responseType = "blob";

  req.onload = function (event) {
    var blob = req.response;
    var newBlob = new Blob([blob], { type: "application/pdf" });

    // IE doesn't allow using a blob object directly as link href
    // instead it is necessary to use msSaveOrOpenBlob
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(newBlob, filename);
      return;
    }

    // For other browsers:
    var link = document.createElement("a");
    const data = window.URL.createObjectURL(blob);
    link.href = data;
    link.download = filename;
    link.click();

    setTimeout(function () {
      // For Firefox it is necessary to delay revoking the ObjectURL
      window.URL.revokeObjectURL(data);
    }, 100);
  };

  req.send();
}

/* ier-slider */
function Ierslider() {
  !$(".ier-slider").hasClass("slick-initialized") &&
    $(".ier-slider").slick({
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            arrows: false
          }
        }]
    });
}

/* renovation-slider */
function RenovationSlider() {
  !$(".renovation-slider").hasClass("slick-initialized") &&
    $(".renovation-slider").slick({
      dots: false,
      infinite: false,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
}

/* lr-slider */
function Irslider() {
  !$(".lr-slider").hasClass("slick-initialized") &&
    $(".lr-slider").slick({
      dots: false,
      infinite: false,
      autoplay: false,
      autoplaySpeed: 2000,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  window.Sharer.init();
}
/* calendarBtn */
$("#calendarBtn").click(function () {
  $("#calendar").addClass("show-calendar");
});

function getInhouseData(data, parentClass) {
  var eleArrayInhouse = [];
  data.forEach(function (element) {
    var listItem =
      "<div class='title'>&nbsp;</div>" +
      "<div class='value'>" + element.monthrangeone + "</div>" +
      "<div class='value'>" + element.monthrangetwo + "</div>" +
      "<div class='value'>" + element.monthrangethree + "</div>";
    eleArrayInhouse.push(listItem);
  });
  $(".hv-heading-bottom").empty();
  $(".hv-heading-bottom").append(eleArrayInhouse);

  const myNode = document.querySelectorAll(parentClass);

  const hvListsDiv = document.createElement("div")
  data.forEach(function (element) {
    var hvList = document.createElement("div");
    hvList.className = "hv-list"

    var title = document.createElement("div");
    title.className = "title"
    title.innerText = element.title

    var first = document.createElement("div");
    first.className = "value"
    first.innerText = element.first
    var second = document.createElement("div");
    second.className = "value"
    second.innerText = element.second

    var third = document.createElement("div");
    third.className = "value"
    third.innerText = element.third

    hvList.appendChild(title)
    hvList.appendChild(first)
    hvList.appendChild(second)
    hvList.appendChild(third)

    hvListsDiv.appendChild(hvList)
  });
  myNode[0].innerHTML = ""
  myNode[0].appendChild(hvListsDiv);


}

function getUrlParameter(param) {
  var query = window.location.search.substring(1);
  var queryArr = query.split("&");
  for (var i = 0; i < queryArr.length; i++) {
    var queryParam = queryArr[i].split("=");
    if (queryParam[0] == param) {
      return queryParam[1]
    }
  }
}

$(document).ready(function () {
  if($('#inhouseselect').length > 0) {
  var chkParam = getUrlParameter("source");
  if (chkParam != '' && chkParam == 'iTreasury') {
    var liparam = "source=iTreasury";
    var lrViewMoreLink = $("#lrViewMoreLink").attr("href");
    lrViewMoreLink = lrViewMoreLink + liparam;
    var tcViewMoreLink = $("#tcViewMoreLink").attr("href");
    tcViewMoreLink = tcViewMoreLink + liparam;
    $("#lrViewMoreLink").attr("href", "");
    $("#tcViewMoreLink").attr("href", "");
    $("#lrViewMoreLink").attr("href", lrViewMoreLink);
    $("#tcViewMoreLink").attr("href", tcViewMoreLink);
  }

  Ierslider();
  Irslider();
  RenovationSlider();
  window.Sharer.init();
}
})
const $inhouseselectInp = $("#inhouseselect"); // inhouse dropdown el 
let inhousedata;
var InhouseJsonLink = $("#InhouseJsonLink").length && convertJSON($("#InhouseJsonLink").text());
if (InhouseJsonLink) {
  inhousedata = InhouseJsonLink;
  var firstValue = $('.inhouseselect').find("option:first-child").val();
  const inHouseFirstValue = inhousedata[firstValue];
  getInhouseData(inHouseFirstValue, ".hv-lists");

}
$inhouseselectInp.on("selectmenuchange", function (event, country) {
  inhousechange(".inhouseselect", ".hv-lists")
});

$(".inhouseselectmobile").selectmenu({
  change: function () {
    inhousechange(".inhouseselectmobile", ".hv-lists-mobile")
  }
});

function inhousechange(eleId, parentClass) {
  var value = $(eleId).val();
  const inHouseValue = inhousedata[value];
  getInhouseData(inHouseValue, parentClass);

}


function nfSlider() {
  !$(".nf-lists").hasClass("slick-initialized") &&
    $(".nf-lists").slick({
      dots: false,
      infinite: false,
      autoplay: false,
      autoplaySpeed: 3000,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            dots: false
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            dots: false
          }
        }
      ]
    });
}
function indicesSlider() {
  !$(".indices-lists").hasClass("slick-initialized") &&
    $(".indices-lists").slick({
      dots: false,
      infinite: false,
      autoplay: false,
      autoplaySpeed: 3000,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            dots: false
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            dots: false
          }
        }
      ]
    });
  window.Sharer.init();
}
function fcSlider() {
  !$(".fc-lists").hasClass("slick-initialized") &&
    $(".fc-lists").slick({
      dots: false,
      infinite: false,
      autoplay: false,
      autoplaySpeed: 3000,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            dots: false
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            dots: false
          }
        }
      ]
    });
}

$("#calendarBtn").click(function () {
  $(".calendar-container").addClass("show-calendar");
});

$(document).ready(function () {
    if ($(document).width() > 991 && $(".offer-ul-card.unica-offer").length > 0) {
      $(".offer-ul-slider .slick-next").on("click", function (e, slick) {
        console.log("next click");
  
        $(
          ".offer-ul-card.unica-offer a.postEvent span.presentation-post-event"
        ).remove();
        $(
          ".offer-ul-list.slick-active .offer-ul-card.unica-offer a.postEvent span.presentation-post-event-mccm"
        ).attr("class", "presentation-post-event");
        BannerPostEvent();
      });
    } else if (
      $(document).width() < 991 &&
      $(".offer-ul-card.unica-offer").length > 0
    ) {
      $(".offer-ul-slider .slick-next").on("click", function (e, slick) {
        console.log("next click");
  
        $(
          ".offer-ul-card.unica-offer a.postEvent span.presentation-post-event"
        ).remove();
        $(
          ".offer-ul-list.slick-active .offer-ul-card.unica-offer a.postEvent span.presentation-post-event-mccm"
        ).attr("class", "presentation-post-event");
        BannerPostEvent();
      });
    }
  
    $(
        ".offer-ul-list.slick-active .offer-ul-card.unica-offer a.postEvent span.presentation-post-event-mccm"
      ).attr("class", "presentation-post-event");
      BannerPostEvent();
  
    function BannerPostEvent() {
      if (
        $(".offer-ul-card.unica-offer a.postEvent span.presentation-post-event").length > 0
      ) {
        $(".offer-ul-card.unica-offer a.postEvent span.presentation-post-event").each(
          function (i) {
            var link = $(this).attr("data-presentation");
            $.ajax({
              url: link,
              success: function (data) {},
              error: function (jqXHR, statusText, errorThrown) {
                consoleLog(errorThrown);
              },
            });
          }
        );
      }
    }
  });
if($('.marketEventCalendar').length > 0) {
    !function () {

        var today = moment();
        var eveDate = today;
        var clickDayEl;
        function Calendar(selector, eventSelector, events, type) {
            this.el = document.querySelector(selector);
            // this.eventEl = document.querySelector(eventSelector);
            this.events = events;
            this.current = moment().date(1);
            eveDate = today;
            $("#calendar-date").text(moment(today).format("Do MMM"))
            this.draw(type);
        }
    
        Calendar.prototype.draw = function (type) {
            //Create Header
            this.drawHeader(type);
            this.drawWeek()
            //Draw Month
            this.drawMonth(type);
    
            this.drawLegend();
            var cDate = moment(eveDate).format("DD-MM-YYYY")
            var todaysEvents = this.events.reduce(function (memo, ev) {
                if (moment(ev.date, "DD-MM-YYYY").format("DD-MM-YYYY") == cDate &&
                    !!ev.calendar) {
                    memo.push(ev);
                }
                return memo;
            }, []);
    
            this.renderEvents(todaysEvents, type);
            $(".calender-close").on('click', function () {
                $(".calendar-container").removeClass("show-calendar");
            })
        }
    
        Calendar.prototype.drawWeek = function () {
            if (!this.weekDiv) {
                this.weekDiv = createElement('div', 'weekContainer');
                this.weekDiv.id = "weekDiv"
                var weekName = [
                    'Su',
                    'Mo',
                    'Tu',
                    'We',
                    'Th',
                    'Fr',
                    'Sa'
                ]
    
                for (i = 0; i < weekName.length; i++) {
                    var outer = createElement('div', 'day');
                    var name = createElement('div', 'day-name', weekName[i]);
                    outer.appendChild(name)
                    this.weekDiv.appendChild(outer)
    
                }
                this.el.appendChild(this.weekDiv)
            }
    
        }
        Calendar.prototype.drawHeader = function (type) {
            var self = this;
            if (!this.header) {
                //Create the header elements
                this.header = createElement('div', 'header');
                this.header.className = 'header';
    
                this.headerMob = createElement('div');
                this.headerMob.className = 'header-' + type;
    
                this.title = createElement('h4');
                this.title.textContent = "Calendar";
    
                this.closeSpan = createElement('span');
                this.closeSpan.className = "calender-close m-view";
                this.closeSpan.textContent = "×";
    
                this.headerMob.appendChild(this.title);
                this.headerMob.appendChild(this.closeSpan);
                //Append the Elements
                this.header.appendChild(this.headerMob);
                this.header.appendChild(this.getMonthList(type));
                this.header.appendChild(this.getYearList(type));
                this.el.appendChild(this.header);
            }
            $("#monthSelect-" + type)[0].selectedIndex = self.current.month();
            $("#yearSelect-" + type).val(self.current.year());
            $("#yearSelect-" + type).selectmenu({
                change: function () {
                    self.current = moment(self.current.month() + 1 + "/" + self.current.date() + "/" + $(".yearList-" + type).val())
                    eveDate = self.current;
                    self.draw(type)
                }
            });
            $("#monthSelect-" + type).selectmenu({
                change: function () {
                    self.current = moment($(".monthlist-" + type).val() + "/" + self.current.date() + "/" + self.current.year())
                    eveDate = self.current;
                    self.draw(type)
                }
            });
        }
    
        Calendar.prototype.getMonthList = function (type) {
            var self = this;
            var monthArray = ["January", "February", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December"];
    
            var monthSelectList = createElement("select", "monthlist-" + type);
            monthSelectList.id = "monthSelect-" + type;
    
            for (var i = 0; i < monthArray.length; i++) {
                this.option = document.createElement("option");
                this.option.value = i + 1;
                this.option.text = monthArray[i];
                monthSelectList.appendChild(this.option);
            }
            return monthSelectList
        }
    
        Calendar.prototype.getYearList = function (type) {
            var self = this;
            var yearSelectList = createElement("select", "yearList-" + type);
            yearSelectList.id = "yearSelect-" + type;
    
            for (var i = 2015; i <= self.current.year() + 2; i++) {
                this.option = document.createElement("option");
                this.option.value = i;
                this.option.text = i;
                yearSelectList.appendChild(this.option);
            }
            return yearSelectList
        }
    
        Calendar.prototype.drawMonth = function (type) {
            var self = this;
            if (this.month) {
                this.oldMonth = this.month;
                this.oldMonth.className = 'month out ' + (self.next ? 'next' : 'prev');
                this.oldMonth.addEventListener('webkitAnimationEnd', function () {
                    self.oldMonth.parentNode.removeChild(self.oldMonth);
                    self.month = createElement('div', 'month');
                    self.backFill(type);
                    self.currentMonth(type);
                    self.fowardFill(type);
                    self.el.appendChild(self.month);
                    window.setTimeout(function () {
                        self.month.className = 'month in ' + (self.next ? 'next' : 'prev');
                    }, 16);
                });
            } else {
                this.month = createElement('div', 'month');
                this.el.appendChild(this.month);
                this.backFill(type);
                this.currentMonth(type);
                this.fowardFill(type);
                this.month.className = 'month new';
            }
        }
    
        Calendar.prototype.backFill = function (type) {
            var clone = this.current.clone();
            var dayOfWeek = clone.day();
            if (!dayOfWeek) { return; }
    
            clone.subtract('days', dayOfWeek + 1);
            for (var i = dayOfWeek; i > 0; i--) {
                this.drawDay(clone.add('days', 1), type);
            }
        }
    
        Calendar.prototype.fowardFill = function (type) {
            var clone = this.current.clone().add('months', 1).subtract('days', 1);
            var dayOfWeek = clone.day();
    
            if (dayOfWeek === 6) { return; }
    
            for (var i = dayOfWeek; i < 6; i++) {
                this.drawDay(clone.add('days', 1), type);
            }
        }
    
        Calendar.prototype.currentMonth = function (type) {
            var clone = this.current.clone();
    
            while (clone.month() === this.current.month()) {
                this.drawDay(clone, type);
                clone.add('days', 1);
            }
        }
    
        Calendar.prototype.getWeek = function (day) {
            if (!this.week || day.day() === 0) {
                this.week = createElement('div', 'week');
                this.month.appendChild(this.week);
            }
        }
    
        Calendar.prototype.drawDay = function (day, type) {
    
            var self = this;
            this.getWeek(day);
            var isCurrentMonth = day.month() === this.current.month()
            //Outer Day
            var outer = createElement('div', isCurrentMonth ? this.getDayClass(day) : 'empty-day');
            var todaysEvents;
            if (day.month() === this.current.month()) {
                todaysEvents = this.events.reduce(function (memo, ev) {
                    var cDate = moment(day).format("DD-MM-YYYY")
                    if (moment(ev.date, "DD-MM-YYYY").format("DD-MM-YYYY") == cDate) {
                        memo.push(ev);
                    }
                    return memo;
                }, []);
    
                todaysEvents.forEach(function (ev) {
                    outer.classList.add(ev.color);
                });
            }
            const isEvent = todaysEvents && todaysEvents.find(function (item) {
                return !!item.calendar;
            })
            if (isCurrentMonth) { // 12/07/2021 code update
                outer.addEventListener('click', function () {
                    self.openDay(this, type);
                });
            }
            //Day Number
            var number = createElement('div', 'day-number', isCurrentMonth ? day.format('DD') : "");
            //Events
            var events = createElement('div', 'day-events');
            // this.drawEvents(day, outer);
    
            outer.appendChild(number);
            outer.appendChild(events);
            this.week.appendChild(outer);
        }
        Calendar.prototype.getDayClass = function (day) {
            classes = ['day'];
            if (day.month() !== this.current.month()) {
                classes.push('other');
            } else if (today.isSame(day, 'day')) {
                classes.push('today');
            }
            return classes.join(' ');
        }
    
        Calendar.prototype.openDay = function (el, type) {
            var ele = document.getElementById("calendar-" + type);
            if (ele && ele.parentElement.classList.contains("show-calendar")) {
                ele.parentElement.classList.remove("show-calendar")
            }
            if (clickDayEl) {
                clickDayEl.classList.remove("selectedDay");
            }
            clickDayEl = el.querySelectorAll('.day-number')[0]
            clickDayEl.classList.add("selectedDay");
            var dayNumber = +el.querySelectorAll('.day-number')[0].innerText || +el.querySelectorAll('.day-number')[0].textContent;
            var day = this.current.clone().date(dayNumber);
            $("#calendar-date").text(moment(day).format("Do MMM"))
            var todaysEvents = this.events.reduce(function (memo, ev) {
                var cDate = moment(day).format("DD-MM-YYYY")
                if (moment(ev.date, "DD-MM-YYYY").format("DD-MM-YYYY") == cDate &&
                    !!ev.calendar) {
                    memo.push(ev);
                }
                return memo;
            }, []);
    
            this.renderEvents(todaysEvents, type);
        }
    
        Calendar.prototype.renderEvents = function (events, type) {
            //Remove any events in the current details element
            var wrapper = createElement('div', 'events in');
            var elements = document.getElementById('eventDiv-' + type).getElementsByClassName('events');
            while (elements.length > 0) {
                elements[0].parentNode.removeChild(elements[0]);
            }
            // 12/07/2021 code update : Begin
            !function(){
                var usaHolidayDiv = createElement('div', 'event');
                var indHolidayDiv = createElement('div', 'event');
                var usaEventInner = createElement('div', 'event-inner american-event');
                var indEventInner = createElement('div', 'event-inner indian-event');
                let usaHolidayCount = 0;
                let indHolidayCount = 0;
                usaHolidayDiv.appendChild(usaEventInner);
                indHolidayDiv.appendChild(indEventInner);
                events.forEach(function (ev) {
                    if (ev.calendar == "American Holiday") {
                        usaHolidayCount++;
                        var nameSpan = createElement('span', 'event-title', usaHolidayCount + '. ' + ev.eventName);
                        usaEventInner.appendChild(nameSpan);
                    }else if(ev.calendar == "Indian Holiday"){
                        indHolidayCount++;
                        var nameSpan = createElement('span', 'event-title', indHolidayCount + '. ' + ev.eventName);
                        indEventInner.appendChild(nameSpan);
                    }
                });
                if(indHolidayCount){
                    wrapper.prepend(indHolidayDiv);
                }
                if(usaHolidayCount){
                    wrapper.prepend(usaHolidayDiv);
                }
            }();
    
            events.forEach(function (ev) {
                //12/07/2021 holiday event RHS - start
                if (!(ev.calendar == "American Holiday" || ev.calendar == "Indian Holiday")) {
                    // 12/07/2021 code update : end
                    var div = createElement('div', 'event');
                    var eventTime = moment(ev.date, "DD-MM-YYYY hh:mm").format("hh:mm a")
                    var timeSpan = createElement('span', 'event-time', eventTime);
                    var eventInner = createElement('div', 'event-inner');
                    var nameSpan = createElement('span', 'event-title', ev.eventName);
                    var locationSpan = createElement('span', 'location', ev.location);
                    var horizontalDiv = createElement('div', 'horizontalDiv');
    
                    var actualValue = createElement('span', '', ev.actual);
                    var actualText = createElement('span', '', 'Actual');
                    var actualDiv = createElement('div', '');
                    actualDiv.appendChild(actualValue)
                    actualDiv.appendChild(actualText)
    
                    var forecastValue = createElement('span', '', ev.forecast);
                    var forecastText = createElement('span', '', 'Forecast');
                    var forecastDiv = createElement('div', '');
                    forecastDiv.appendChild(forecastValue)
                    forecastDiv.appendChild(forecastText)
    
                    var priorValue = createElement('span', '', ev.prior);
                    var priorText = createElement('span', '', 'Prior');
                    var priorDiv = createElement('div', '');
                    priorDiv.appendChild(priorValue)
                    priorDiv.appendChild(priorText)
    
                    horizontalDiv.appendChild(actualDiv);
                    horizontalDiv.appendChild(forecastDiv);
                    horizontalDiv.appendChild(priorDiv);
    
                    div.appendChild(timeSpan);
                    div.appendChild(eventInner);
                    eventInner.appendChild(nameSpan);
                    eventInner.appendChild(locationSpan);
                    eventInner.appendChild(horizontalDiv)
                    wrapper.appendChild(div);
                }
            });
    
            if (!events.length) {
                var div = createElement('div', 'event empty');
                var span = createElement('span', '', 'No Events');
    
                div.appendChild(span);
                wrapper.appendChild(div);
            }
            document.getElementById('eventDiv-' + type).appendChild(wrapper);
            $("#eventDiv-desk .events").mCustomScrollbar();
        }
    
        Calendar.prototype.drawLegend = function () {
            var legend = createElement('div', 'legend');
            var calendars = this.events.map(function (e) {
                return e.calendar + '|' + e.color;
            }).reduce(function (memo, e) {
                if (memo.indexOf(e) === -1) {
                    memo.push(e);
                }
                return memo;
            }, []).forEach(function (e) {
                var parts = e.split('|');
                var entry = createElement('div', 'entry ' + parts[1], parts[0]);
                parts[0] !== 'Normal Event' && legend.appendChild(entry);
            });
            const legendNode = this.el.getElementsByClassName('legend');// 12/07/2021 code update
            legendNode.length && this.el.removeChild(legendNode[0]);// 12/07/2021 code update
            this.el.appendChild(legend);
        }
    
        window.Calendar = Calendar;
    
        function createElement(tagName, className, innerText) {
            var ele = document.createElement(tagName);
            if (className) {
                ele.className = className;
            }
            if (innerText) {
                ele.innderText = ele.textContent = innerText;
            }
            return ele;
        }
    }();
    
    //Begin: 18-03-2021
    !function () {
        var filepath= $('#csvFilePath')[0] && $('#csvFilePath')[0].innerText;
        if(!filepath) return;
        var data = [];
        var colorOnCalendar = {
            'Important Data Release': 'orange',
            'American Holiday': 'blue',
            'Normal Event': 'underline-only',
            'Indian Holiday': 'maroon'
        };
        var req = new XMLHttpRequest();
        req.open("GET", filepath, true);
        req.responseType = "text";
        req.onload = csvJSON.bind(req);
        req.send();
    
        function csvJSON() {
            var lines = this.response.split("\n");
            lines.pop();
            var result = [];
            var headers = lines[0].split("\r")[0].split(",");
    
            for (var i = 1; i < lines.length; i++) {
                var obj = {};
                var currentline = lines[i].split("\r")[0].split(",");
                for (var j = 0; j < headers.length; j++) {
                    obj[headers[j]] = currentline[j];
                }
                result.push(obj);
            }
            result.map(function (item) {
                var color = item.calendar ? colorOnCalendar[item.calendar] : '';
                return Object.assign(item, { color: color });
            });
            data = result;
            var calendar = new Calendar('#calendar', "#eventDiv-desk", data, 'desk');
            var calendar = new Calendar('#calendar-mob', "#eventDiv-mob", data, 'mob');
        }
    }();
    //End: 18-03-2021
}

$(document).ready(function () {
  const ukExchRate = $("#ukExchRate");
  if (ukExchRate.length > 0) {
    var keyVal = document.getElementById("keyVal");
    var currentTime = new Date().toGMTString();
    var UKStaticRate = $("#UKStaticRate").val(); //UK Static Rate from DCR

    $.ajax({
      type: "GET",
      url: "/content/icicibank.exchangerate.json",
      contentType: "application/json;charset=utf-8",
      data: {
        CountryCode: "UK",
      },
      success: function (response, textStatus, xhr) {
        if (typeof response === "string") {
          response = JSON.parse(response);
        }
        if(xhr.status === 200 && xhr.readyState ===4){
          var result = [];
		  var data = response;
          for (var i = 0; i < data.Rates.length; i++) {
            var slab = data.Rates[i].Slab;
            var rate = data.Rates[i].Rate;
            result.push({
              slab: slab,
              rate: rate,
            });
          }
          var timeDetails = data.TimeDetails;
          $("#keyVal").empty();
          keyVal.innerHTML =
            keyVal.innerHTML +
            "<div class='table-container'><table border='0'><tbody><tr><td colspan='4'><p>ICICI Bank UK PLC confirmed Exchange Rates for&nbsp;" +
            timeDetails +
            "(Rates applicable for ICICI Bank UK HomeVantage Current Account Customers only)</p></td></tr><tr><td style='width:50%;'><b>Money Transfer Rates from GBP to INR</b></td><td style='width:50%;'><b>Standard Exchange Rate </b></td></tr></table></div>";
          //var mid;
  
          for (let k = 0; k < result.length; k++) {
            keyVal.innerHTML =
              keyVal.innerHTML +
              "<div class='table-container'><table border='0'><tbody><tr><td style='width:50%;border-top:1px solid #fff;'>" +
              result[k].slab +
              "</td><td style='width:50%;border-top:1px solid #fff;'>" +
              result[k].rate +
              "</td></tr></table></div>";
          }
          keyVal.innerHTML =
            keyVal.innerHTML +
            "<p style='border: 1px solid #d9d9d9;padding: 10px 0px 10px 20px;width:100%;border-top:1px solid #fff;'><b>Important Information :</b></br><b>1) For money transfers above &pound;25,000 from the branch, please speak to a branch representative.</b></br><b>2) Exchange rates for non-account holders of the Bank would receive 10 paise less than quoted above.</b></p>";
  
        }
        else if (UKStaticRate && UKStaticRate != "") {
          $("#keyVal").empty();
          keyVal.innerHTML =
            keyVal.innerHTML +
            "<div class='table-container'><table border='0'><tbody><tr><td colspan='4'><p>ICICI Bank UK PLC confirmed Exchange Rates for&nbsp;" +
            currentTime +
            "(Rates applicable for ICICI Bank UK HomeVantage Current Account Customers only)</p></td></tr><tr><td style='width:50%;'><b>Money Transfer Rates from GBP to INR</b></td><td style='width:50%;'><b>Standard Exchange Rate </b></td></tr></table></div>";
          keyVal.innerHTML =
            keyVal.innerHTML +
            "<div class='table-container'><table border='0'><tbody><tr><td style='width:50%;border-top:1px solid #fff;'>0-10000</td><td style='width:50%;border-top:1px solid #fff;'>" +
            UKStaticRate +
            "</td></tr></table></div>";
          keyVal.innerHTML =
            keyVal.innerHTML +
            "<p style='border: 1px solid #d9d9d9;padding: 10px 0px 10px 20px;width:97.1%;border-top:1px solid #fff;'><b>Important Information :</b></br><b>1) For money transfers above &pound;25,000 from the branch, please speak to a branch representative.</b></br><b>2) Exchange rates for non-account holders of the Bank would receive 10 paise less than quoted above. </b></p>";
        } else {
          $("#keyVal").empty();
          keyVal.innerHTML =
            keyVal.innerHTML +
            "<div class='table-container'><table border='0'><tbody><tr><td colspan='4'><p>ICICI Bank UK PLC confirmed Exchange Rates for&nbsp;" +
            currentTime +
            "(Rates applicable for ICICI Bank UK HomeVantage Current Account Customers only)</p></td></tr><tr><td style='width:50%;'><b>Money Transfer Rates from GBP to INR</b></td><td style='width:50%;'><b>Standard Exchange Rate </b></td></tr></table></div>";
          keyVal.innerHTML =
            keyVal.innerHTML +
            "<div class='table-container'><table border='0'><tbody><tr><td style='width:50%;border-top:1px solid #fff;'>Contact Customer Care</td><td style='width:50%;border-top:1px solid #fff;'>Contact Customer Care</td></tr></table></div>";
          keyVal.innerHTML =
            keyVal.innerHTML +
            "<p style='border: 1px solid #d9d9d9;padding: 10px 0px 10px 20px;width:97.1%;border-top:1px solid #fff;'><b>Important Information :</b></br><b>1) For money transfers above &pound;25,000 from the branch, please speak to a branch representative.</b></br><b>2) Exchange rates for non-account holders of the Bank would receive 10 paise less than quoted above. </b></p>";
        }
      },
      error: function (xhr) {
        //Do Something to handle error
      },
    });
  }
});

$(document).ready(function () {
  const poundConverter = $("#pound-converter");
  if (poundConverter.length > 0) {
    $.ajax({
      url: "/content/icicibank.exchangerate.json",
      type: "get",
      contentType: "application/json;charset=utf-8",
      data: {
        CountryCode: "UK",
      },
      success: function (response,textStatus,xhr) {
        if (typeof response === "string") {
          response = JSON.parse(response);
        }
        if(xhr.status === 200 && xhr.readyState ===4){
        var rateValue = [];
        var rate, amt, recipient_total;
        var data = response;
        $("#keyVal").css("display", "block");
        $("#keyVal1").empty();
        // console.log(data);
        // alert("data :"+data);
        for (var i = 0; i < data.Rates.length; i++) {
          rateValue.push({
            rate: data.Rates[i].Rate,
          });
        }
        var sendAmt = $("#youSend").val();
        if (sendAmt != "") {
          var StdRate = parseFloat(rateValue[0].rate);
          StdRate = StdRate.toFixed(2);
          $("#stdRate").text(StdRate);
          ukcalc();
        }
        $("#youSend").keyup(function (event) {
          // skip for arrow keys
          if (event.which >= 37 && event.which <= 40) return;
          sendAmt = $("#youSend").val();
          ukcalc();
        });
        function ukcalc() {
          for (var i = 0; i < rateValue.length; i++) {
            var NetRate = parseFloat(rateValue[i].rate);
            amt = $("#youSend").val();
            Net_Rcpt = NetRate * amt;
            Net_Rcpt = Net_Rcpt.toFixed(2);
            $("#stdRcpt").text(Net_Rcpt);

            /** Start of Transc Mob App*/
            var mobappCommission = $("#UKCommissionMobileApp").val();
            mobCommission = parseFloat(mobappCommission) + parseFloat(NetRate);
            mobCommission = mobCommission.toFixed(2);
            $("#mobRate").text(mobCommission);
            Mob_Rcpt = mobCommission * amt;
            Mob_Rcpt = Mob_Rcpt.toFixed(2);
            $("#mobRcpt").text(Mob_Rcpt);
            /** End of Transc Mob App*/

            /** Start of Standing orders*/
            var mobappCommission = $("#UKCommissionStandingOrders").val();
            stndordCommission =
              parseFloat(mobappCommission) + parseFloat(NetRate);
            stndordCommission = stndordCommission.toFixed(2);
            $("#stndOrdRate").text(stndordCommission);
            StndOrd_Rcpt = stndordCommission * amt;
            StndOrd_Rcpt = StndOrd_Rcpt.toFixed(2);
            $("#stndOrdRcpt").text(StndOrd_Rcpt);
            /** End of Standing orders*/

            /** Start of New Customer commission*/
            var newcustCommission = $("#UKCommissionNewCustomer").val();
            nwCustCommission =
              parseFloat(newcustCommission) + parseFloat(NetRate);
            nwCustCommission = nwCustCommission.toFixed(2);
            $("#nwCustRate").text(nwCustCommission);
            NwCust_Rcpt = nwCustCommission * amt;
            NwCust_Rcpt = NwCust_Rcpt.toFixed(2);
            $("#nwCustRcpt").text(NwCust_Rcpt);
            /** End of New Customer commission*/
          }
        }
      }else{
        // error scenario
        $("#keyVal").css("display", "none");
        $("#keyVal1").css("display", "block");
      }

        
      },
      error: function (xhr) {
        //Do Something to handle error
        $("#keyVal").css("display", "none");
        $("#keyVal1").css("display", "block");
      },
    });
  }
});

$(document).ready(function () {
  const hkdExchRate = $("#hkdExchRate");
  if (hkdExchRate.length > 0) {
    $.ajax({
      url: "/content/icicibank.exchangerate.json",
      type: "get",
      contentType: "application/json;charset=utf-8",
      data: {
        CountryCode: "HKD",
      },
      success: function (response) {
        //Do Something
        if (typeof response === "string") {
          response = JSON.parse(response);
        }
        //console.log(data);
        var data = response;
        var timeDetails = data.TimeDetails;
        $("#RatesTimestamp").text(timeDetails);
        var CountryName = data.CountryName;
        var htmlId = document.getElementById(CountryName + "Rates");
        for (var i = 0; i < data.Rates.length; i++) {
          var rate = data.Rates[i].Rate;
          var slab = data.Rates[i].Slab;

          var html = "<tr><td>" + slab + "</td><td>" + rate + "</td></tr>";
          appendHtml(htmlId, html);
        }
        function appendHtml(htmlId, html) {
          htmlId.innerHTML += html;
        }
      },
      error: function (xhr) {
        //Do Something to handle error
      },
    });
    $.ajax({
      url: "/content/icicibank.exchangerate.json",
      type: "get",
      contentType: "application/json;charset=utf-8",
      data: {
        CountryCode: "USD",
      },
      success: function (response) {
        //Do Something
        if (typeof response === "string") {
          response = JSON.parse(response);
        }
        //console.log(data);
        var data = response;
        var timeDetails = data.TimeDetails;
        $("#RatesTimestamp").text(timeDetails);
        var CountryName = data.CountryName;
        var htmlId = document.getElementById(CountryName + "Rates");
        for (var i = 0; i < data.Rates.length; i++) {
          var rate = data.Rates[i].Rate;
          var slab = data.Rates[i].Slab;

          var html = "<tr><td>" + slab + "</td><td>" + rate + "</td></tr>";
          appendHtml(htmlId, html);
        }
        function appendHtml(htmlId, html) {
          htmlId.innerHTML += html;
        }
      },
      error: function (xhr) {
        //Do Something to handle error
      },
    });
  }
});

const popupStorageKey = "exitPopupShownStatus";

$(document).ready(function () {
  $(".exit-popup .left-content-video .play-icon").click(function () {
    $(this).parents(".video-thumb").addClass("hide");
    $(".exit-popup .left-content-video .iframe-video").removeClass("hide");
  });

  $(".exit-popup .popup-close").click(function () {
    document.querySelector(".exit-popup").style.display = "none";
    // stop player if v3 popup (embedded video popup)
    const youtubeIframeElem = document.getElementById(
      "exit-popup-iframe-video"
    );
    if (youtubeIframeElem) {
      const srcUrl = youtubeIframeElem.getAttribute("src", "");
      youtubeIframeElem.setAttribute("src", "");
      youtubeIframeElem.setAttribute("src", srcUrl);
    }
  });

  function showPopup() {
    sessionStorage.setItem(popupStorageKey, true);
    // close if any other popup already there
    $("#imodal-callback-popup").hide();
    $(".solutionpopup.disclaimer-popup").hide();

    // show exit popup
    $(".exit-popup").css("display", "block");
  }

  //1) Showing popup on user idle for 9.6 seconds
  function idleShowPopup() {
    let timer;

    window.addEventListener("load", resetTimer);
    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("mousedown", resetTimer);
    window.addEventListener("touchstart", resetTimer);
    window.addEventListener("touchmove", resetTimer);
    window.addEventListener("click", resetTimer);
    window.addEventListener("keydown", resetTimer);
    window.addEventListener("scroll", resetTimer);

    function clearListenersAndShowPopup() {
      //clear listners
      window.removeEventListener("load", resetTimer);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("mousedown", resetTimer);
      window.removeEventListener("touchstart", resetTimer);
      window.removeEventListener("touchmove", resetTimer);
      window.removeEventListener("click", resetTimer);
      window.removeEventListener("keydown", resetTimer);
      window.removeEventListener("scroll", resetTimer);

      const popupShownStatus = sessionStorage.getItem(popupStorageKey);
      // if popup didn't shown already we will show poup.
      if (!popupShownStatus) {
        showPopup();
      }
    }
    function resetTimer() {
      console.log();
      clearTimeout(timer);
      timer = setTimeout(clearListenersAndShowPopup, 20000); // time is in milliseconds
    }
  }
  idleShowPopup();

  //2) showing popup on user leaving the page
  function mouseLeavePageHandler(event) {
    if (
      event.clientY <= 0 ||
      event.clientX <= 0 ||
      event.clientX >= window.innerWidth ||
      event.clientY >= window.innerHeight
    ) {
      const popupShownStatus = sessionStorage.getItem(popupStorageKey);
      if (!popupShownStatus) {
        showPopup();
        document.removeEventListener("mouseleave", mouseLeavePageHandler); // removing the same function *
      }
    }
  }
  document.addEventListener("mouseleave", mouseLeavePageHandler);
});

$(document).ready(function () {
  $("#lead-form-popup-1").on("submit", (e) => {
    e.preventDefault();
    let formajax = $("#lead-form-popup-1").attr("ajax-page");
    var fname = document.forms["lead-form-popup-1"]["fname"].value;
    var lname = document.forms["lead-form-popup-1"]["lname"].value;
    var mobNum = document.forms["lead-form-popup-1"]["mob-num"].value;
    var email = document.forms["lead-form-popup-1"]["email"].value;
    var productType = document.forms["lead-form-popup-1"]["product-type"].value;
    console.log(productType)
    var pincode = document.forms["lead-form-popup-1"]["pincode"].value;
    var isValid = true;
    $("#lead-form-popup-1 .error").removeClass("error");
    $("#lead-form-popup-1 .error-txt").hide();
    var fnameInvalid = !/^[a-zA-Z ]*$/g.test(fname);
    var lnameInvalid = !/^[a-zA-Z ]*$/g.test(lname);
    if (fname == null || fname == "") {
      var $fnameEl = $("#lead-form-popup-1 #fname");
      $fnameEl.addClass("error");
      $fnameEl.closest(".input-group").addClass("error");
      $("#lead-form-popup-1 #fname-err").show();
      isValid = false;
    }
    if (fnameInvalid) {
      var $fnameEl = $("#lead-form-popup-1 #fname");
      $fnameEl.addClass("error");
      $fnameEl.closest(".input-group").addClass("error");
      $("#lead-form-popup-1 #fname-num-err").show();
      isValid = false;
    }

    if (lname == null || lname == "") {
      var $lnameEl = $("#lead-form-popup-1 #lname");
      $lnameEl.addClass("error");
      $lnameEl.closest(".input-group").addClass("error");
      $("#lead-form-popup-1 #lname-err").show();
      isValid = false;
    }
    if (lnameInvalid) {
      var $lnameEl = $("#lead-form-popup-1 #lname");
      $lnameEl.addClass("error");
      $lnameEl.closest(".input-group").addClass("error");
      $("#lead-form-popup-1 #lname-num-err").show();
      isValid = false;
    }
    if (
      mobNum == null ||
      mobNum == "" ||
      mobNum.length < 10 ||
      !/^[0-9]*$/.test(mobNum)
    ) {
      //update 29/07/2021
      var $mobNumEl = $("#lead-form-popup-1 #mob-num");
      $mobNumEl.addClass("error");
      $mobNumEl.closest(".input-group").addClass("error");
      $("#lead-form-popup-1 #mob-err").show();
      isValid = false;
    }
    if (
      email == null ||
      email == "" ||
      !/(.+)@(.+){2,}\.(.+){2,}/.test(email)
    ) {
      var $emailEl = $("#lead-form-popup-1 #email");
      $emailEl.addClass("error");
      $emailEl.closest(".input-group").addClass("error");
      $("#lead-form-popup-1 #email-err").show();
      isValid = false;
    }
    if (productType == null || productType == "") {
      var $prodTypeEl = $("#lead-form-popup-1 #product-type");
      $prodTypeEl.addClass("error");
      $prodTypeEl.closest(".input-group").addClass("error");
      $("#lead-form-popup-1 #product-type-err").show();
      isValid = false;
    }
    if (
      pincode == null ||
      pincode == "" ||
      pincode.length < 6 ||
      !/^[0-9]*$/.test(pincode)
    ) {
      //update 29/07/2021
      var $pincodeEl = $("#lead-form-popup-1 #pincode");
      $pincodeEl.addClass("error");
      $pincodeEl.closest(".input-group").addClass("error");
      $("#lead-form-popup-1 #pincode-err").show();
      isValid = false;
    }

    if (isValid) {

      let callbackRequest =
        formajax +
        "apiname=save&productCode=" +
        productType +
        "&custName=" +
        fname +
        "&lastName=" +
        lname +
        "&custMobNo=" +
        mobNum +
        "&custEmail=" +
        email +
        "&pinCode=" +
        pincode; 

      $.ajax({
        url: callbackRequest,
        type: "GET",
        dataType: "json",
        data: $("#lead-form-popup-1").serializeArray(),
        success: function (data) {
          $("#crm-refId").html('CRM ' + (data.getCallbackResults.length > 0 && data.getCallbackResults[0].ItemKey))
          console.log(
            "form submitted",
            data,
            $("#lead-form-popup-1").serializeArray()
          );
          $(".exit-popup #success-txt").addClass("show");
          $("#lead-form-popup-1")[0].reset();
          $("#lead-form-popup-1 #product-type").multiselect("reload");
          setTimeout(() => {
            $(".exit-popup #success-txt").removeClass("show");
          }, 10000);
        },
        error: function (data) {
          console.log(
            "form not submitted",
            data,
            $("#lead-form-popup-1").serializeArray()
          );
          $(".exit-popup #error-popup").addClass("show");
          setTimeout(() => {
            $(".exit-popup #error-popup").removeClass("show");
          }, 5000);
        },
      });
    }
  });
});

$(document).ready(function () {
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  const apiBaseUrl = "/content/icicibank.postbit.json?";
  const bannerOfferName = $("#BannerOfferName").attr("value")
    ? $("#BannerOfferName").attr("value")
    : "";
  const discountOffer = $("#DiscountOffer").attr("value")
    ? $("#DiscountOffer").attr("value")
    : "";
  const fedId = getCookie("PER_COOKIE");

  $(".feature-offer-card.offer-card .slide.slick-slide").each(function (i) {
      try{
    const bannerId = this.getAttribute("data-slick-index");
    const link =
      apiBaseUrl +
      "bannerid=" +
      (parseInt(bannerId) + 1) +
      "&type=NLI_OFFER_VIEW" +
      "&bannerOfferName=" +
      bannerOfferName +
      "&discountOfferId=" +
      discountOffer;

    if (fedId) {
      $.ajax({
        url: link,
        async: false,
        success: function (data) {},
        error: function (jqXHR, statusText, errorThrown) {
          console.log(errorThrown);
        },
      });
    }
      }catch(e){}
  });

  $(".feature-offer-card.offer-card .slide.slick-slide").click(function (e) {
    e.preventDefault();
    const redirectUrl = this.children[0].getAttribute("href");
    const bannerId = this.getAttribute("data-slick-index");
    const link =
      apiBaseUrl +
      "bannerid=" +
      (parseInt(bannerId) + 1) +
      "&type=NLI_OFFER_CLICK" +
      "&bannerOfferName=" +
      bannerOfferName +
      "&discountOfferId=" +
      discountOffer;

    if (fedId) {
      $.ajax({
        url: link,
        success: function (data) {},
        error: function (jqXHR, statusText, errorThrown) {
          console.log(errorThrown);
        },
        complete: function () {
          window.open(redirectUrl, "_self");
        },
      });
    } else {
      window.open(redirectUrl, "_self");
    }
  });
  $(".feature-offer-inner .offercarousel a .offer-page img").click(function (e) {
    dataLayer.push({
      event: "custom_event",
      eventCategory: "offer_zone",
      eventAction: "banner_click",
      eventLabel: ($(this).attr("name").toLowerCase()).replace(/[,.\- ]/g, "_"),
    });
  });

});

$(document).ready(function () {
  if($('.nri-popup-wrap').length > 0) {
  const choices = ["redirectForeign", "redirectNRI", "redirectIndia"];
  const nriChoiseCookieName = "nriPopupRedirectionPreference";
  const countryDetails =
    $("#countryMap").length && convertJSON($("#countryMap").text());

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  $("#nripopup-card .close-btn").click(function () {
    $("#nripopup-card").hide();
  });

  $("#nripopup-foreign-card a").click(function () {
    console.log("foreign card clicked");
    setCookie(nriChoiseCookieName, choices[0], 3.5);
  });

  $("#nripopup-nri-card a").click(function () {
    console.log("nri card clicked");
    setCookie(nriChoiseCookieName, choices[1], 3.5);
  });

  $("#nripopup-india-site-card a").click(function (e) {
    setCookie(nriChoiseCookieName, choices[2], 3.5);
    $("#nripopup-card").hide();
  });

  if (!$.isEmptyObject(countryDetails)) {
    $("#nripopup-foreign-card").show();
    $("#nripopup-foreign-card .country-flag img").attr(
      "src",
      countryDetails.flagIconPath
    );
    // $("#nripopup-country-title").text(countryDetails.countryName);
    $("#nripopup-foreign-card .country-flag img").attr(
      "alt",
      countryDetails.flagAltText
    );
    $("#nripopup-foreign-card .icici-logo-right img").attr(
      "src",
      countryDetails.logoIconPath
    );
    $("#nripopup-foreign-card .icici-logo-right img").attr(
      "alt",
      countryDetails.logoAltText
    );
    $("#nripopup-foreign-card .icici-logo-right img").attr(
      "alt",
      countryDetails.logoAltText
    );
    $("#nripopup-foreign-card .nri-popup-link p").text(countryDetails.goLabel);
    $("#nripopup-foreign-card .nri-popup-link a").text(
      countryDetails.countryLabel
    );
    $("#nripopup-foreign-card .nri-popup-link a").attr(
      "href",
      countryDetails.countryLink
    );
  }

  const userChoice = getCookie(nriChoiseCookieName);
  if (userChoice === choices[0]) {
    location.assign(countryDetails.countryLink);
  } else if (userChoice === choices[1]) {
    const link = $("#nripopup-nri-card a").attr("href");
    location.assign(link);
  } else if (userChoice === choices[2]) {
    //redirect to india site
    // const link = $("#nripopup-india-site-card a").attr("href");
    // if (link !== window.location.href) location.assign(link);
  } else {
    $("#nripopup-card").show();
  }
}
});
!(function () {
  if ($("#netBanking-category-details").length > 0) {
    var searchPath = $("#netBanking-category-details").attr("data-searchpath");
  var catId = $("#netBanking-category-details").attr("data-propval");
  var catIdProp = $("#netBanking-category-details").attr("data-prop");
  var jsonData =
    "/content/icicibank.offersearch.json?searchPath=" +
    searchPath +
    "&start=0&prop=" +
    catIdProp +
    "&value=" +
    catId +
    "";
    if (searchPath && catIdProp && catId) {
      $.getJSON(jsonData, function (responseJson) {
        let resultJSON = responseJson;
        resultJSON.cards.sort((x, y) => {
          if (x === "" && y === "") return 0;
          let xVal = parseInt(x.offerPriority)
          let yVal = parseInt(y.offerPriority)
          if (xVal!==0 && !xVal) xVal = Number.MAX_VALUE
          if (yVal!==0 && !yVal) yVal = Number.MAX_VALUE
          if (xVal === yVal) {
            //sort based on date, second level sorting if same priority cards
            return new Date(x.startDate) - new Date(y.startDate)
          }
          return xVal - yVal
        })
        if (resultJSON && resultJSON["cards"]) {
          requestsData = resultJSON["cards"];
        }
        if (typeof requestsData == "undefined") {
          $("#netBankingOfferListWrapper").append("<h5>No Offer Found</h5>");
        }
        generateOfferListItems(requestsData);
      });
    }

    function generateOfferListItems(offerData) {
      let html = "",
        offerCardGroupCount = 6;
      for (let index = 0; index < offerData.length; index++) {
        if (index % offerCardGroupCount == 0) {
          if (index >= offerCardGroupCount)
            html += '<div class="offer-list hidden-card" >';
          else html += '<div class="offer-list">';
        }

        html += generateHTML(
          index,
          offerData[index]["Image"],
          offerData[index]["offerTitle"],
          offerData[index]["offerPromoCode"],
          offerData[index]["endDate"],
          offerData[index]["offerViews"],
          offerData[index]["ctalink"],
          offerData[index]["ctatitle"],
          offerData[index]["disclaimerLink"] !== '' || offerData[index]["disclaimerLink"] ? offerData[index]["disclaimerLink"] : '#',
          offerData[index]["pagePath"]
        );

        if (index % offerCardGroupCount == offerCardGroupCount - 1) {
          html += "</div>";
        }
      }
      if (html.length > 0) {
        $("#netBankingOfferListWrapper").html(html);
        getRemainingTime();
        bindpopupNetbanking();
      } else {
        $("#netBankingOfferListWrapper").html('<div class="no-result"></div>');
      }
    }

    function generateHTML(
      index,
      cardImage,
      cardTitle,
      offerPromoCode,
      timeRemaining,
      offerViews,
      knowMoreLink,
      knowMoreTitle,
      pagePath,
      brandLink
    ) {
      var html = `<div class="net-offer-card offer-card">
                        <div class="media">
                            <img src="${cardImage}" alt="offers" loading="lazy">
                        </div>
                        <div class="content">
                            <div class="top-content">
                                <div class="title fw-400 f-18">${cardTitle}</div>
                            </div>
                            <div class="offer-coupon-content">
                              <div class="offer-Coupon d-flex mt-20">
                                  <span id="referal-coupon${index}" class="coupon fw-700">${offerPromoCode}</span>
                                  <span id="btn-referal-coupon${index}" class="copy fw-700"
                                      onclick="copyCode('referal-coupon${index}', 'btn-referal-coupon${index}')">
                                      Copy Code
                                  </span>
                              </div>
                            </div>
                            <div class="bottom-content mt-25">
                            <div class="button-group">
                                <a href=${pagePath} class="ic-btn netbanking-popup" target="_blank" tabindex="0">Activate now</a>
                                <a href=${knowMoreLink} class="ic-more" tabindex="0">${knowMoreTitle}</a>
                            </div>
                            <div class="card-bottom d-flex mt-25">
                                <div class="date-timer">
                                    <span class="num-timer maroon-text remaining-time" data-time=${timeRemaining}></span>
                                </div>
                                <div class="bookmark-share d-flex">
                                    <div class="date-readtime">
                                        <span class="num-viewer">${offerViews} </span>
                                    </div>
                                    <div class="bookmark"></div>
                                    <div class="share"></div>
                                    <div class="share-content">
                                        <div class="inner-content">
                                            <div class="share-header">
                                                <p>Share</p>
                                                <span class="close-icon">
                                                    <img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/close-orange.svg" alt="fb"></span>
                                            </div>
                                            <ul class="share-link">
                                                <li>
                                                    <a href="https://api.whatsapp.com/send?url=${window.location.host + brandLink}&text=${cardTitle}" target="_blank" tabindex="0">
                                                        <span class="n-icon">
                                                            <img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/whatsapp.svg"
                                                                alt="whatsapp">
                                                        </span>
                                                        <span class="h-icon">
                                                            <img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/whatsapp-o.svg"
                                                                alt="whatsapp">
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.facebook.com/sharer/sharer.php?u=${window.location.host + brandLink}&text=${cardTitle}" target="_blank" tabindex="0">
                                                        <span class="n-icon">
                                                            <img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-black.svg" alt="fb">
                                                        </span>
                                                        <span class="h-icon">
                                                            <img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-orange.svg" alt="fb">
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://twitter.com/intent/tweet?url=${window.location.host + brandLink}&text=${encodeURI(cardTitle)}" target="_blank" tabindex="0">
                                                        <span class="n-icon">
                                                            <img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-black.svg" alt="tw">
                                                        </span>
                                                        <span class="h-icon">
                                                            <img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-orange.svg" alt="tw">
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.linkedin.com/shareArticle?mini=true?url=${window.location.host + brandLink}&text=${cardTitle}" target="_blank" tabindex="0">
                                                        <span class="n-icon">
                                                            <img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-black.svg" alt="ln">
                                                        </span>
                                                        <span class="h-icon">
                                                            <img src="/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-orange.svg" alt="ln">
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>`;
      return html;
    }
    function getRemainingTime() {
      $("span.remaining-time").each(function (element) {
        var thisItem = $(this);
    
        // Set the date we're counting down to
        // var countDownDate = new Date($(this).attr("data-time")).getTime();
    
        // code changed 14/12/2020
        var countDownDate = moment($(this).attr("data-time")).valueOf();
        // end code changed 14/12/2020
        // Update the count down every 1 second
        var x = setInterval(function () {
          var now = new Date().getTime();
          var distance = countDownDate - now;
          // Time calculations for days, hours, minutes and seconds
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
          var timeRemains = "";
          if (days > 0) timeRemains += days + "d ";
          if (hours.toString().length == 1) hours = 0 + hours.toString();
          if (minutes.toString().length == 1) minutes = 0 + minutes.toString();
          if (seconds.toString().length == 1) seconds = 0 + seconds.toString();
    
          timeRemains += hours + "." + minutes + "." + seconds;
          thisItem.text(timeRemains);
    
          // If the count down is over, write some text
          if (distance < 0) {
            clearInterval(x);
            thisItem.text("EXPIRED");
          }
        }, 1000);
      });
    }
    function bindpopupNetbanking() {
      $(".netbanking-popup").each(function(index) {
        $(this).on("click", function(e){
            e.preventDefault();
            $(".popup-section.disclaimer-popup").show();
            $(".popup-section.disclaimer-popup .disclaimer-modal-content a").attr("href", $(this).attr("href"));
        });
    });
    }
  }
})();

$(".top-banner-slider-cont")
  .not(".slick-initialized")
  .slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800, //13/10/2022 start changes
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },

      {
        breakpoint: 557,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

$(window).on("load resize orientationchange", function () {
  if ($(window).width() < 991) {
    $("body").toggleClass(
      "notification-enabled",
      $(".download-notification").length &&
        $(".download-notification").is(":visible")
        ? true
        : false
    );
  }
});

$(".download-notification .close").click(() => {
  $("body").removeClass("notification-enabled");
  // $(".mobile")[0].style.marginTop = 0;
  $(".download-notification").hide();
});

// /content/icicibank.faqdata.json?
let faqJsonData;
let faqsDynamicData;
//changes on 09-08-2022 start
$(document).ready(() => {
  var faqsData;
  if ($("#faqContainer").length > 0) {
    if ($("#faqContainer").length > 0) {
      addSearchFunction();
      addExpandCloseAll();
    }
  }
});

function debounce1(func, timeout = 100) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

function addSearchFunction() {
  //Filter from search box input
  let elDynamicFaqArr = [];
  $(".search-container .search-box-area input").focus(function () {
    $(".search-container .search-box-area input").val("");
    $(".accordion-list").each(function () {
      $(this).removeClass("hide");
    });
    $(".card-accordion.card-accordion--action").each(function () {
      $(this).removeClass("hide");
    });
  });

  $(".search-container .search-box-area input").keyup(
    debounce1(function (event) {
      faqsData = $(".accordion-list .accordion-head");
      elDynamicFaqArr = $(".accordion-list");
      var inputText = event.target.value;
      var title1Array = [];
      if (inputText.length > 1) {
        for (let index = 0; index < faqsData.length; index++) {
          title1Array =
            faqsData[index].textContent
              .trim()
              .toUpperCase()
              .startsWith(inputText.toUpperCase()) ||
            faqsData[index].textContent
              .trim()
              .toUpperCase()
              .includes(inputText.toUpperCase());
          if (!title1Array) {
            $(".accordion-list .accordion-head")
              .eq(index)
              .parent()
              .addClass("hide");
          } else {
            $(".accordion-list").each(function () {
              $(this).removeClass("hide");
            });
          }
        }

        if (inputText === "") {
          $(".accordion-list").show();
          return true;
        }
        $(".accordion-list:not(:contains(" + inputText + "))").hide();
        $(".accordion-list:contains(" + inputText + ")").show();
        return true;
      } else {
      }
      $(".card-accordion.card-accordion--action").each(function () {
        // console.log("Hello", $(this).find('.accordion-list.hide'));
        let withoutHide = $(this).find(".accordion-list").length;
        let withHide = $(this).find(".accordion-list.hide").length;
        if (withoutHide === withHide) {
          $(this).addClass("hide");
        }
      });
      if (inputText === "") {
        $(".accordion-list").show();
        return true;
      }
      $(".accordion-list:not(:contains(" + inputText + "))").hide();
      $(".accordion-list:contains(" + inputText + ")").show();
      return false;
    })
  );
}

function accordionFeature() {
  $(".accordion-list .accordion-head").on("click", function () {
    let thisElement = $(this);
    if (thisElement.hasClass("active")) {
      thisElement.removeClass("active");
      thisElement.siblings(".accordion-content").slideUp(200);
    } else {
      $(".accordion-list .accordion-head").removeClass("active");
      thisElement.addClass("active");
      $(".accordion-content").slideUp(200);
      thisElement.siblings(".accordion-content").slideDown(200, function () {
        $("html, body").animate(
          {
            scrollTop:
              thisElement.offset().top - ($(".new-header").height() + 50),
          },
          "slow"
        );
      });
    }
  });
}

function addExpandCloseAll() {
  $(".card-accordion .btn-group a").on("click", function (e) {
    e.preventDefault();
    let wrapper = $(this).closest(".card-accordion");
    let accordionhead = wrapper.find(".accordion-list .accordion-head");
    let accordioncontent = wrapper.find(".accordion-list .accordion-content");
    if (wrapper.length > 0) {
      $(this).siblings().addClass("active");
      $(this).removeClass("active");
      if ($(this).hasClass("expand-all")) {
        accordionhead.addClass("active");
        accordioncontent.addClass("show");
        $(".accordion .accordion-list .accordion-head.active").click(
          function () {
            accordioncontent.removeClass("show");
          }
        );
        accordionhead.slideDown(200);
      } else {
        accordionhead.removeClass("active");
        accordioncontent.removeClass("show");
        //accordionhead.slideUp(200);
      }
    }
  });
}
//changes on 09-08-2022

$(document).ready(function(){
	
    $("#nextpage").click(function(){
      window.location.href="/content/icicibank/in/en/ismart-solution/thankyou.html";
    });
    
    });
    
    
    
    
    
    // INCLUDE JQUERY & JQUERY UI 1.12.1
    $( function() {
        $( "#datepicker" ).datepicker({
            dateFormat: "dd-mm-yy"
            ,	duration: "fast"
        });
    } );
$(document).ready(function() {
    if($('.retirement-page').length > 0) {
    $("#lead-form-new").on("submit", (e) => {
        e.preventDefault();
        var fname = document.forms["lead-form-new"]["fname"].value;
        console.log("fname" + fname);
        var lname = document.forms["lead-form-new"]["lname"].value;
        var mobNum = document.forms["lead-form-new"]["mob"].value;
        var email = document.forms["lead-form-new"]["email"].value;
        var productId = "RP";
        var pincode = document.forms["lead-form-new"]["pincode"].value;

        console.log("lname" + lname);
        console.log("mobNum" + mobNum);
        console.log("email" + email);
        console.log("productId" + productId);
        console.log("pincode" + pincode);



        var isValid = true;
        $("#lead-form-new .error").removeClass('error');
        $("#lead-form-new .error-txt").hide();
        var fnameInvalid = !/^[a-zA-Z ]*$/g.test(fname);
        var lnameInvalid = !/^[a-zA-Z ]*$/g.test(lname);
        if (fname == null || fname == "") {
            var $fnameEl = $("#lead-form-new #fname");
            $fnameEl.addClass('error');
            $fnameEl.closest('.input-group').addClass('error');
            $("#lead-form-new #fname-err").show();
            isValid = false;
        }
        if (fnameInvalid) {
            var $fnameEl = $("#lead-form-new #fname");
            $fnameEl.addClass('error');
            $fnameEl.closest('.input-group').addClass('error');
            $("#lead-form-new #fname-num-err").show();
            isValid = false;
        }

        if (lname == null || lname == "") {
            var $lnameEl = $("#lead-form-new #lname");
            $lnameEl.addClass('error');
            $lnameEl.closest('.input-group').addClass('error');
            $("#lead-form-new #lname-err").show();
            isValid = false;
        }
        if (lnameInvalid) {
            var $lnameEl = $("#lead-form-new #lname");
            $lnameEl.addClass('error');
            $lnameEl.closest('.input-group').addClass('error');
            $("#lead-form-new #lname-num-err").show();
            isValid = false;
        }
        if (mobNum == null || mobNum == "" || mobNum.length < 10 || !(/^[0-9]*$/.test(mobNum))) { //update 29/07/2021
            var $mobNumEl = $("#lead-form-new #mob");
            $mobNumEl.addClass('error');
            $mobNumEl.closest('.input-group').addClass('error');
            $("#lead-form-new #mob-err").show();
            isValid = false;
        }
        if (email == null || email == "" || !(/(.+)@(.+){2,}\.(.+){2,}/.test(email))) {
            var $emailEl = $("#lead-form-new #email");
            $emailEl.addClass('error');
            $emailEl.closest('.input-group').addClass('error');
            $("#lead-form-new #email-err").show();
            isValid = false;
        }
        if (pincode == null || pincode == "" || pincode.length < 6 || !(/^[0-9]*$/.test(pincode))) { //update 29/07/2021
            var $pincodeEl = $("#lead-form-new #pincode");
            $pincodeEl.addClass('error');
            $pincodeEl.closest('.input-group').addClass('error');
            $("#lead-form-new #pincode-err").show();
            isValid = false;
        }

        if (isValid) {

            var formajax = $('#lead-form-new').attr('ajax-page');
            console.log("formajax::-" + formajax);
            var callbackRequest;
            if (
                (typeof formajax != 'undefined' &&
                    typeof productId != 'undefined' &&
                    typeof fname != 'undefined' &&
                    typeof lname != 'undefined' &&
                    typeof mobNum != 'undefined' &&
                    typeof email != 'undefined' &&
                    typeof pincode != 'undefined')
            ) {
                if (
                    (formajax != null &&
                        formajax != '' &&
                        productId != null &&
                        productId != '' &&
                        fname != null &&
                        fname != '' &&
                        lname != null &&
                        lname != '' &&
                        mobNum != null &&
                        mobNum != '' &&
                        email != null &&
                        email != '' &&
                        pincode != null &&
                        pincode != '')
                ) {
                    callbackRequest =
                        formajax +
                        'productCode=' +
                        productId +
                        '&custName=' +
                        fname +
                        '&lastName=' +
                        lname +
                        '&custMobNo=' +
                        mobNum +
                        '&custEmail=' +
                        email +
                        '&custPincode=' +
                        pincode;
                }
            }

            if (typeof callbackRequest != 'undefined') {
                if (callbackRequest != null && callbackRequest != '') {
                    console.log("Get callback response :" + callbackRequest);
                    $.ajax({
                        dataType: 'json',
                        url: callbackRequest,
                        type: 'POST',
                        success: function(response) {
                            getCallbackResults = response.getCallbackResults;
                            console.log('Get callback response json :' + response.getCallbackResults.length);
                            var successFlag = 0;
                            var succMsg = "CRM ";
                            //console.log("Get callback response :" + getCallbackResults);
                            for (var i = 0; i < getCallbackResults.length; i++) {
                                var crmServiceResponce = getCallbackResults[i].crmServiceResponce;
                                var message = getCallbackResults[i].message;
                                var crmItemKey = getCallbackResults[i].crmItemKey;
                                console.log('Get callback message :' + message);
                                console.log('Get callback CRM ID :' + crmItemKey);
                                if (typeof message != 'undefined' && typeof crmItemKey != 'undefined' && typeof crmServiceResponce != 'undefined') {
                                    if (
                                        message != null &&
                                        message != '' &&
                                        crmItemKey != null &&
                                        crmItemKey != '' &&
                                        crmServiceResponce != null &&
                                        crmServiceResponce != ''
                                    ) {
                                        if (message == 'Success') {
                                            console.log('You have successfully registered to get a callback from out expert.');
                                            succMsg = succMsg + crmItemKey;
                                            succMsg = succMsg + " ";
                                            successFlag++;
                                        }
                                    }
                                }
                            }
                            //alert(successFlag);
                            //alert(productId.length);
                            if (successFlag != 0 && productId.length >= successFlag) {
                                //console.log("form submitted", $("#lead-form-new").serializeArray());
                                var displayMsg = $("#success-txt p#successMsg strong").text();
                                console.log(displayMsg);

                                $("#success-txt p#successMsg strong").text(succMsg);
                                $("#error-popup").addClass("hide");
                                $("#success-txt").addClass("show");
                            }
                        },
                        error: function() {
                            $("#success-txt").addClass("hide");
                            $("#error-popup").addClass("show");
                            console.log('Get callback response calling unsuccessful');

                        },
                    });
                }
            }

        }
    });
}
});
$(document).ready(function () {
  $("#dropDown").selectmenu({
    change: function () {
      if ($(this).val() != "") {
        window.location = $(this).val();
      }
    },
  });

  // on document completed parsing HTML (but sub-resources such as scripts, images, stylesheets and frames are still loading)
  if ($(".scrollContainerWrapper").length > 0) {
    if (document.readyState === "interactive") {
      if (location.hash !== "") {
        scrollToElement(location.hash);
      } else {
        window.scrollTo(0, 0);
      }
    }
  }
});

// scroll on anchor tag click of #Href with in rightColumnContainer class
$('.scrollContainerWrapper a[href*="#"]').click(function (event) {
  if (
    location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") &&
    location.hostname === this.hostname
  ) {
    // window.location.hash = this.hash; -- reloading the page
    // history.pushState(null, null, this.hash);
    event.preventDefault();
    scrollToElement(this.hash);
  }
});

function scrollToElement(hash) {
  const target = $(hash);
  //   target = target.length ? target : $("[name=" + this.hash.slice(1) + "]"); // use name in case
  if (target.length) {
    let offSetPadding = 0;
    let desktopHeader = $(".new-header.desktop")[0];
    if (desktopHeader) {
      let desktopHeaderHeight = desktopHeader.offsetHeight;
      const extraDesktopHeight =
        $(".new-header.desktop.sticky-enable.sticky").length !== 0
          ? 0
          : desktopHeaderHeight;
      // double the header height
      desktopHeaderHeight = desktopHeaderHeight + extraDesktopHeight;
      // here we are selecting 2nd search box i.e mobile version since, first search box is for header
        const mobileHeaderHeight =
        ($(".new-header.mobile")[0]?desktopHeader.offsetHeight:0) +
        ($(".new-header.mobile > .search")[0]?desktopHeader.offsetHeight:0);
      offSetPadding =
        desktopHeaderHeight === 0 ? mobileHeaderHeight : desktopHeaderHeight;
    }
    const extraPadding = 8;
    $("html, body").animate(
      {
        scrollTop: target.offset().top - offSetPadding - extraPadding,
      },
      500
    );
  }
}
/* import { tablet_screens } from "./constants.js"; */

if($("#documents-checklist").length > 0){
const default_range_color = `#AD1E23`;
const active_range_color = `#D0D6DD`;
const range_height = `20px`;
const smaller_desktop_screens = `(max-width: 991px)`;
const tablet_screens = `(max-width: 991px)`;
const large_desktop_screens = `(min-width: 990px)`;

const tabletMediaQueryList = window.matchMedia(tablet_screens);
const csvURL = "/content/icicibank.documentchecklist.json";

var documentsArray = [];

function fnGetData(){
  fetch(csvURL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    documentsArray = data;
    const services = new Set();
    documentsArray.forEach(obj => {
      const service = obj.service;
      services.add(service);
    });
    populateSelectBoxCL("service-dropdown", [...services]);
  
  })
}


const populateSelectBoxCL = (selectBox, valueArray, defaultValue) => {

  $("#" + selectBox).empty();
  $("#" + selectBox).append(
    `<option value="">Select ${
      selectBox == "service-dropdown" ? "Product or Service" : "City"
    }</option>`
  );
  for (let i = 0; i < valueArray.length; i++) {
    $("#" + selectBox).append(
      `<option value="${valueArray[i]}">${valueArray[i]}</option>`
    );
  }
  if (defaultValue) {
    $("#" + selectBox).val(defaultValue);
  }
  $("#" + selectBox).selectmenu("refresh");
};

const hideDocsForMobileView = () => {
  const checklistElems = $(".checklist__form-documents-list-text li");
  $(".checklist__form-documents-list-text li").each((index, elem) => {
    if (index >= 4) {
      $(elem).addClass("hide");
    }
  });
  $(".read-more-btn").removeClass("hide");
};

$(document).ready(function () {

  if ($(".checklist-wrapper")[0]){
    fnGetData()
  } 

  $("#service-dropdown").selectmenu({
    placeholder: "Select Product or Service",
    change: function (event) {
      const selectedService = event.target.value;
      $("#service-dropdown")
        .siblings(".ui-selectmenu-button")
        .addClass("filled-input");
      const allServices = documentsArray.filter((serviceObj) => {
        return (
          serviceObj.service.toLowerCase().trim() ==
          selectedService.toLowerCase().trim().replaceAll("_", " ")
        );
      });
      const availableCities = allServices.map((serviceObj) => serviceObj.location);
      populateSelectBoxCL("city-dropdown", availableCities);
      $(".checklist__form-documents-find").removeClass("hide");
      $(".checklist__form-documents-list").addClass("hide");
      $(".read-more-btn").addClass("hide");
      $(".checklist__form-documents-list-text ul").empty();
    },
  });

  $("#city-dropdown").selectmenu({
    placeholder: "Select City",
    change: function (event) {
      const selectedCity = event.target.value;
      $("#city-dropdown")
        .siblings(".ui-selectmenu-button")
        .addClass("filled-input");
      const [selectedService] = $("#service-dropdown");
      const selectedDocuments = documentsArray.find((serviceObj) => {
        return (
          serviceObj.service.toLowerCase().trim() ==
            selectedService.value.toLowerCase().trim().replaceAll("_", " ") &&
          serviceObj.location.toLowerCase().trim() ==
            selectedCity.toLowerCase().trim().replaceAll("_", " ")
        );
      });
      const { documents } = selectedDocuments;
      appendDocumentsList(documents);
      $(".checklist__form-documents-find").addClass("hide");
      $(".checklist__form-documents-list").removeClass("hide");
      if (tabletMediaQueryList.matches) {
        hideDocsForMobileView();
      }
    },
  });

  $(window).on("load resize orientationchange", () => {
    if (tabletMediaQueryList.matches) {
      hideDocsForMobileView();
    } else {
      $(".checklist__form-documents-list-text li").removeClass("hide");
      $(".read-more-btn").addClass("hide");
    }
  });

  $(".read-more-btn a").on("click", (event) => {
    event.preventDefault();
    $(".checklist__form-documents-list-text li").removeClass("hide");
    $(".read-more-btn").addClass("hide");
  });

  function appendDocumentsList(documentsArray) {
    $(".checklist__form-documents-list-text ul").empty();
    documentsArray.forEach((document) => {
      $(
        `<li><span class="mr-5">
          <picture>
             <source srcset="/content/dam/icicibank/documents-checklist/check.webp" type="image/svg">
             <img src="/content/dam/icicibank/documents-checklist/check.webp" alt="" loading="lazy"
                width="12" height="13">
       </span>
       </picture> ${document}</li>`
      ).appendTo(".checklist__form-documents-list-text ul");
    });
  }
});
}
!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);r(1),r(0)},function(e,t,r){}]);