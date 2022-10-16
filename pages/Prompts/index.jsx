///Trying out Figma tools for design->code conversion, not working version

import React, { useState, useRef, useEffect, createRef } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Switch, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, TouchableOpacity, SafeAreaView } from "react-native";
//import CheckBox from "react-native-check-box";
//import { HtmlText } from "@e-mine/react-native-html-text";
//import { WebView } from "react-native-webview";
//import BottomSheet from "@gorhom/bottom-sheet";
//import Icon from "react-native-vector-icons/Entypo";
import { Svg, Path } from "react-native-svg"
//import { useFonts } from 'expo-font';
//import AppLoading from 'expo-app-loading';
export const App = () => {
	
	return (
		<View>
      <View style={stylesheet.container}>
				<View style = {stylesheet.styleRectangle14}					borderTopLeftRadius = {null}
					borderTopRightRadius = {null}
					borderBottomRightRadius = {null}
					borderBottomLeftRadius = {null}
					borderWidth = {0}
					borderColor = {"transparent"}
					id = {"Hs1MXUZV5IJY2o-DTi2gJ"}
					fills = {[
						{ type: "SOLID", color: "rgb(255, 254, 252)", opacity: 1,},
					]}>
				</View>
				<Image style = {[stylesheet.styleOrangeGradientBg1, {transform: [{ rotate: "0deg" }]}]} source = {{uri: "https://nyc3.digitaloceanspaces.com/sizze-storage/media/images/hmtvhFEj0hk81HwgO3Lbstjd.png"}}/>
				<View style = {stylesheet.styleRectangle1}>
					<Svg
						fill = "rgba(255, 230, 207, 1)"
						stroke = "rgba(0, 0, 0, 1)"
					>
						<Path d="M0 20C0 8.95431 8.95431 0 20 0L265 0C276.046 0 285 8.95431 285 20L285 100C285 111.046 276.046 120 265 120L20 120C8.9543 120 0 111.046 0 100L0 20Z"/>
					</Svg>
				</View>
				<View style = {stylesheet.styleRectangle2}>
					<Svg
						fill = "rgba(255, 248, 242, 1)"
						stroke = "rgba(0, 0, 0, 1)"
					>
						<Path d="M0 20C0 8.95431 8.95431 0 20 0L265 0C276.046 0 285 8.95431 285 20L285 65.5C285 76.5457 276.046 85.5 265 85.5L20 85.5C8.9543 85.5 0 76.5457 0 65.5L0 20Z"/>
					</Svg>
				</View>
				<Text style = {stylesheet.styleWriteYourDailyMessage3}>
					{`Write your daily message! <3`}
				</Text>
				<Text style = {stylesheet.styleTodaySPrompt_}>
					{`Today’s prompt:`}
				</Text>
				<Text style = {stylesheet.styleGiveYourPasserbysAComplimentOrTwo_}>
					{`Give your passerbys a compliment! (Or two)`}
				</Text>
				<View style = {stylesheet.styleGroup4}					borderTopLeftRadius = {0}
					borderTopRightRadius = {0}
					borderBottomRightRadius = {0}
					borderBottomLeftRadius = {0}
					borderWidth = {0}
					borderColor = {"transparent"}
					id = {"GurWHOFAQbCOeJkzqCXpC"}
					fills = {[
					]}>
					<View style = {stylesheet.styleRectangle7}						borderTopLeftRadius = {null}
						borderTopRightRadius = {null}
						borderBottomRightRadius = {null}
						borderBottomLeftRadius = {null}
						borderWidth = {0}
						borderColor = {"transparent"}
						id = {"z4aaJlfmICZi60-H27a9D"}
						fills = {[
							{ type: "SOLID", color: "rgb(254, 189, 128)", opacity: 1,},
						]}>
					</View>
					<View style = {stylesheet.styleVector4}>
						<Svg
							stroke = "rgba(255, 227, 200, 1)"
						>
							<Path d="M0 -2.5C-1.38071 -2.5 -2.5 -1.38071 -2.5 0C-2.5 1.38071 -1.38071 2.5 0 2.5L0 -2.5ZM32.8745 2.5C34.2552 2.5 35.3745 1.38071 35.3745 0C35.3745 -1.38071 34.2552 -2.5 32.8745 -2.5L32.8745 2.5ZM0 2.5L32.8745 2.5L32.8745 -2.5L0 -2.5L0 2.5Z"/>
						</Svg>
					</View>
					<View style = {stylesheet.styleVector2}>
						<Svg
							stroke = "rgba(255, 227, 200, 1)"
						>
							<Path d="M0 -2.5C-1.38071 -2.5 -2.5 -1.38071 -2.5 0C-2.5 1.38071 -1.38071 2.5 0 2.5L0 -2.5ZM32.8745 2.5C34.2552 2.5 35.3745 1.38071 35.3745 0C35.3745 -1.38071 34.2552 -2.5 32.8745 -2.5L32.8745 2.5ZM0 2.5L32.8745 2.5L32.8745 -2.5L0 -2.5L0 2.5Z"/>
						</Svg>
					</View>
					<View style = {stylesheet.styleVector3}>
						<Svg
							stroke = "rgba(255, 227, 200, 1)"
						>
							<Path d="M0 -2.5C-1.38071 -2.5 -2.5 -1.38071 -2.5 0C-2.5 1.38071 -1.38071 2.5 0 2.5L0 -2.5ZM32.8745 2.5C34.2552 2.5 35.3745 1.38071 35.3745 0C35.3745 -1.38071 34.2552 -2.5 32.8745 -2.5L32.8745 2.5ZM0 2.5L32.8745 2.5L32.8745 -2.5L0 -2.5L0 2.5Z"/>
						</Svg>
					</View>
					<View style = {stylesheet.styleVector1}>
						<Svg
							stroke = "rgba(255, 227, 200, 1)"
						>
							<Path d="M0 -2.5C-1.38071 -2.5 -2.5 -1.38071 -2.5 0C-2.5 1.38071 -1.38071 2.5 0 2.5L0 -2.5ZM32.8745 2.5C34.2552 2.5 35.3745 1.38071 35.3745 0C35.3745 -1.38071 34.2552 -2.5 32.8745 -2.5L32.8745 2.5ZM0 2.5L32.8745 2.5L32.8745 -2.5L0 -2.5L0 2.5Z"/>
						</Svg>
					</View>
				</View>
				<Text style = {stylesheet.styleTypeHere_}>
					{`Type here...`}
				</Text>
        <TextInput style = {stylesheet.styleTypeHere} placeholder = "Type here..." />
				<Image style = {[stylesheet.styleEllipse2, {transform: [{ rotate: "0deg" }]}]} source = {{uri: "https://nyc3.digitaloceanspaces.com/sizze-storage/media/images/Wye1fxp60YVfeRc6kxUJbCZ9.png"}}/>
				<View style = {stylesheet.styleVector5}>
					<Svg
						stroke = "rgba(255, 183, 116, 1)"
					>
						<Path d="M0 -1.5C-0.828427 -1.5 -1.5 -0.828427 -1.5 0C-1.5 0.828427 -0.828427 1.5 0 1.5L0 -1.5ZM6 1.5C6.82843 1.5 7.5 0.828427 7.5 0C7.5 -0.828427 6.82843 -1.5 6 -1.5L6 1.5ZM0 1.5L6 1.5L6 -1.5L0 -1.5L0 1.5Z"/>
					</Svg>
				</View>
				<View style = {stylesheet.styleVector6}>
					<Svg
						stroke = "rgba(255, 183, 116, 1)"
					>
						<Path d="M1.5 0C1.5 -0.828427 0.828427 -1.5 0 -1.5C-0.828427 -1.5 -1.5 -0.828427 -1.5 0L1.5 0ZM-1.5 16.038C-1.5 16.8664 -0.828427 17.538 0 17.538C0.828427 17.538 1.5 16.8664 1.5 16.038L-1.5 16.038ZM-1.5 0L-1.5 16.038L1.5 16.038L1.5 0L-1.5 0Z"/>
					</Svg>
				</View>
				<View style = {stylesheet.styleVector7}>
					<Svg
						stroke = "rgba(255, 183, 116, 1)"
					>
						<Path d="M0 -1.5C-0.828427 -1.5 -1.5 -0.828427 -1.5 0C-1.5 0.828427 -0.828427 1.5 0 1.5L0 -1.5ZM8.61572 1.5C9.44415 1.5 10.1157 0.828427 10.1157 0C10.1157 -0.828427 9.44415 -1.5 8.61572 -1.5L8.61572 1.5ZM0 1.5L8.61572 1.5L8.61572 -1.5L0 -1.5L0 1.5Z"/>
					</Svg>
				</View>
				<View style = {stylesheet.styleVector}>
					<Svg
						stroke = "rgba(255, 219, 187, 1)"
					>
						<Path d="M49.373 18.1981C49.4874 19.0186 50.2452 19.591 51.0657 19.4766C51.8862 19.3622 52.4586 18.6043 52.3442 17.7838L49.373 18.1981ZM23.1195 0.503683L23.3764 1.98151L23.3764 1.98151L23.1195 0.503683ZM0.0035233 28.4048L1.5034 28.4244L1.5034 28.4244L0.0035233 28.4048ZM23.3249 65.7372L24.0594 64.4293L24.0594 64.4293L23.3249 65.7372ZM42.4855 75.4141L41.9792 76.8261L41.9792 76.8261L42.4855 75.4141ZM46.7554 79.695C47.1393 80.4292 48.0456 80.7131 48.7797 80.3293C49.5138 79.9454 49.7978 79.0391 49.4139 78.305L46.7554 79.695ZM48.3564 16.7024C48.2533 17.5244 48.8361 18.2743 49.6581 18.3773C50.4801 18.4804 51.23 17.8976 51.3331 17.0757L48.3564 16.7024ZM72.2243 0.80236L71.8818 2.26273L71.8818 2.26273L72.2243 0.80236ZM91.2884 44.8827L92.6285 45.5567L92.6285 45.5567L91.2884 44.8827ZM63.832 70.252L63.0631 68.964L63.0631 68.964L63.832 70.252ZM54.0409 75.9382L55.0672 77.0321L55.0672 77.0321L54.0409 75.9382ZM47.9798 77.5C47.1514 77.5 46.4798 78.1716 46.4798 79C46.4798 79.8284 47.1514 80.5 47.9798 80.5L47.9798 77.5ZM52.3442 17.7838C51.3413 10.5907 47.6381 5.20942 42.2782 1.9834C36.9502 -1.22344 30.105 -2.23336 22.8625 -0.974146L23.3764 1.98151C30.0611 0.819283 36.1428 1.79206 40.7312 4.55374C45.2877 7.29625 48.4905 11.8694 49.373 18.1981L52.3442 17.7838ZM22.8625 -0.974146C16.1429 0.19415 10.1032 4.55605 5.7508 10.0166C1.40077 15.4741 -1.41573 22.2178 -1.49635 28.3851L1.5034 28.4244C1.57332 23.0748 4.0559 16.9561 8.09676 11.8865C12.1352 6.81979 17.5782 2.98961 23.3764 1.98151L22.8625 -0.974146ZM-1.49635 28.3851C-1.71423 45.0535 7.81365 58.7462 22.5904 67.045L24.0594 64.4293C10.0398 56.5557 1.30265 43.7817 1.5034 28.4244L-1.49635 28.3851ZM22.5904 67.045C28.5079 70.3684 35.3395 74.4451 41.9792 76.8261L42.9918 74.0022C36.6535 71.7293 30.106 67.8251 24.0594 64.4293L22.5904 67.045ZM41.9792 76.8261C42.7205 77.0919 43.8549 77.6041 44.8764 78.2066C45.3853 78.5067 45.836 78.8116 46.1848 79.0996C46.5561 79.4062 46.7126 79.6131 46.7554 79.695L49.4139 78.305C49.097 77.6989 48.5815 77.1881 48.0951 76.7864C47.5862 76.3662 46.9936 75.9723 46.4004 75.6225C45.2175 74.9249 43.9121 74.3322 42.9918 74.0022L41.9792 76.8261ZM51.3331 17.0757C52.1069 10.9053 54.1947 6.54229 57.4444 4.05666C60.6632 1.59471 65.3465 0.729969 71.8818 2.26273L72.5669 -0.658012C65.4985 -2.3158 59.792 -1.51588 55.6218 1.67378C51.4826 4.83978 49.1825 10.1154 48.3564 16.7024L51.3331 17.0757ZM71.8818 2.26273C81.8986 4.61202 88.4563 10.9484 91.5098 18.7309C94.5762 26.5461 94.1319 35.8906 89.9484 44.2087L92.6285 45.5567C97.1721 36.5227 97.6985 26.2903 94.3026 17.6351C90.8937 8.94707 83.5559 1.91932 72.5669 -0.658012L71.8818 2.26273ZM89.9484 44.2087C84.2292 55.5802 74.2791 62.2681 63.0631 68.964L64.6009 71.5399C75.8162 64.8444 86.481 57.7798 92.6285 45.5567L89.9484 44.2087ZM63.0631 68.964C61.4044 69.9543 59.8347 70.614 58.0892 71.4797C56.3914 72.3218 54.6546 73.3057 53.0146 74.8442L55.0672 77.0321C56.3936 75.7878 57.8282 74.9579 59.4222 74.1673C60.9686 73.4003 62.8113 72.6083 64.6009 71.5399L63.0631 68.964ZM53.0146 74.8442C51.1926 76.5535 50.038 77.5 47.9798 77.5L47.9798 80.5C51.3196 80.5 53.2443 78.7423 55.0672 77.0321L53.0146 74.8442Z"/>
					</Svg>
				</View>
				<View style = {stylesheet.styleVector33}>
					<Svg
						stroke = "rgba(247, 231, 217, 1)"
					>
						<Path d="M7.43893 1.5C8.26735 1.5 8.93893 0.828427 8.93893 0C8.93893 -0.828427 8.26735 -1.5 7.43893 -1.5L7.43893 1.5ZM0.0678434 1.0797L0.406898 -0.381474L0.0678434 1.0797ZM14.5618 2.27422C15.3299 1.96395 15.7011 1.08974 15.3908 0.321605C15.0806 -0.446526 14.2063 -0.817698 13.4382 -0.50743L14.5618 2.27422ZM4.74029 -1.28611C3.91716 -1.19256 3.32572 -0.449444 3.41927 0.373684C3.51283 1.19681 4.25594 1.78825 5.07907 1.6947L4.74029 -1.28611ZM2.61162 2.018C3.43098 1.89581 3.99616 1.13253 3.87397 0.313163C3.75179 -0.506204 2.98851 -1.07138 2.16914 -0.949194L2.61162 2.018ZM2.12763 3.02268C2.94447 3.16075 3.71858 2.6105 3.85665 1.79366C3.99473 0.976817 3.44448 0.202708 2.62764 0.0646359L2.12763 3.02268ZM4.86065 0.365516C4.03624 0.284003 3.30185 0.886237 3.22033 1.71064C3.13882 2.53505 3.74105 3.26944 4.56546 3.35096L4.86065 0.365516ZM9.54833 3.41376C10.3737 3.34271 10.9852 2.61602 10.9142 1.79064C10.8431 0.965267 10.1164 0.353765 9.29104 0.424813L9.54833 3.41376ZM11.4273 0.106238C10.6181 0.283949 10.1062 1.08395 10.2839 1.89309C10.4617 2.70223 11.2617 3.21411 12.0708 3.0364L11.4273 0.106238ZM7.43893 -1.5C6.83645 -1.5 5.79854 -1.40638 4.74029 -1.28611L5.07907 1.6947C6.15027 1.57295 7.02921 1.5 7.43893 1.5L7.43893 -1.5ZM2.16914 -0.949194C1.39795 -0.834192 0.682352 -0.712743 0.192329 -0.603303C-0.00866221 -0.558415 -0.317802 -0.485545 -0.56402 -0.372535C-0.629799 -0.342344 -0.776813 -0.271593 -0.930526 -0.146669C-1.01678 -0.0765719 -1.51306 0.329595 -1.49975 1.06828C-1.48492 1.89174 -0.875436 2.27964 -0.728591 2.36374C-0.528755 2.47819 -0.345075 2.52374 -0.271212 2.54088L0.406898 -0.381474C0.435048 -0.374942 0.584942 -0.341151 0.762353 -0.239544C0.886773 -0.168287 1.48519 0.205691 1.49976 1.01422C1.5128 1.73798 1.02704 2.12821 0.961541 2.18144C0.828581 2.2895 0.712547 2.34245 0.687411 2.35399C0.603761 2.39238 0.611765 2.37693 0.846224 2.32457C1.2271 2.2395 1.85562 2.13073 2.61162 2.018L2.16914 -0.949194ZM-0.271212 2.54088C0.498039 2.71938 1.30152 2.88304 2.12763 3.02268L2.62764 0.0646359C1.86574 -0.0641491 1.12177 -0.215593 0.406898 -0.381474L-0.271212 2.54088ZM4.56546 3.35096C6.19799 3.51238 7.8873 3.55674 9.54833 3.41376L9.29104 0.424813C7.85074 0.548795 6.35041 0.512818 4.86065 0.365516L4.56546 3.35096ZM12.0708 3.0364C12.9204 2.84981 13.7556 2.59985 14.5618 2.27422L13.4382 -0.50743C12.8045 -0.251445 12.1317 -0.0484715 11.4273 0.106238L12.0708 3.0364Z"/>
					</Svg>
				</View>
				<Text style = {stylesheet.styleTodaySFaves}>
					{`Today’s Faves`}
				</Text>
				<View style = {stylesheet.styleRectangle6}>
					<Svg
						fill = "rgba(255, 231, 209, 1)"
						stroke = "rgba(0, 0, 0, 1)"
					>
						<Path d="M0 13C0 5.8203 5.8203 0 13 0L97 0C104.18 0 110 5.8203 110 13C110 20.1797 104.18 26 97 26L13 26C5.8203 26 0 20.1797 0 13Z"/>
					</Svg>
				</View>
				<Text style = {stylesheet.style2899}>
					{`2899`}
				</Text>
				<View style = {stylesheet.styleVector48}>
					<Svg
						stroke = "rgba(255, 240, 224, 1)"
					>
						<Path d="M9.3761 6.30441C10.4332 5.98408 11.0305 4.86745 10.7101 3.81035C10.3898 2.75325 9.27317 2.15598 8.21607 2.47632L9.3761 6.30441ZM3.243 9.45478L1.60906 8.30141L1.60906 8.30141L3.243 9.45478ZM14.0382 0.569844L12.4254 -0.612883L14.0382 0.569844ZM6.21945 6.6116L6.99557 8.45487L6.99557 8.45487L6.21945 6.6116ZM-0.248069 5.60438C-1.34411 5.74139 -2.12156 6.74097 -1.98456 7.83701C-1.84755 8.93305 -0.84797 9.7105 0.248069 9.5735L-0.248069 5.60438ZM8.21607 2.47632C6.27919 3.06325 5.01911 3.84219 3.99057 4.96895C3.5145 5.49048 3.12181 6.05003 2.76258 6.58602C2.38317 7.15214 2.05401 7.67107 1.60906 8.30141L4.87694 10.6081C5.35687 9.92824 5.76911 9.28481 6.08536 8.81294C6.42179 8.31095 6.679 7.95689 6.94483 7.66568C7.40006 7.16698 7.99164 6.72395 9.3761 6.30441L8.21607 2.47632ZM1.60906 8.30141C1.41583 8.57516 1.22662 8.86888 1.08729 9.15976C1.01851 9.30337 0.930113 9.51109 0.873517 9.75858C0.825245 9.96968 0.740862 10.4555 0.945178 11.0109C1.20264 11.7107 1.77398 12.1478 2.36661 12.3065C2.8398 12.4333 3.2414 12.3655 3.42391 12.3264C3.81054 12.2436 4.15079 12.0729 4.35595 11.9625C5.22414 11.4954 6.5395 10.4954 7.8747 9.38994C10.5783 7.1515 14.116 3.84576 15.651 1.75257L12.4254 -0.612883C11.2044 1.05214 8.00066 4.09258 5.32377 6.30891C3.96873 7.43082 2.93407 8.18535 2.46076 8.44C2.33053 8.51006 2.39844 8.45529 2.5862 8.41508C2.66927 8.39729 2.98981 8.33244 3.40161 8.44275C3.93284 8.58505 4.46246 8.98631 4.69918 9.62974C4.88276 10.1287 4.79861 10.5377 4.77286 10.6503C4.73879 10.7993 4.6952 10.8869 4.69482 10.8877C4.69228 10.893 4.73422 10.8103 4.87694 10.6081L1.60906 8.30141ZM15.651 1.75257C15.7815 1.57456 15.9044 1.40029 16.0013 1.24495C16.0474 1.1711 16.1145 1.05919 16.176 0.928883C16.2066 0.864098 16.2538 0.757283 16.2948 0.623005C16.3266 0.518973 16.4075 0.235296 16.3806 -0.131436C16.3502 -0.546955 16.1453 -1.28934 15.377 -1.73148C14.7405 -2.09775 14.1401 -1.99578 13.9533 -1.95671C13.5541 -1.87321 13.2674 -1.68176 13.2298 -1.65794C13.0491 -1.54347 12.879 -1.40262 12.7738 -1.31364C12.3239 -0.933252 11.4973 -0.146442 10.6393 0.647352C9.7367 1.48247 8.71047 2.41057 7.73538 3.20189C6.71208 4.03235 5.91493 4.56976 5.44334 4.76833L6.99557 8.45487C8.04177 8.01436 9.22433 7.14502 10.256 6.30781C11.3358 5.43147 12.4397 4.43101 13.3558 3.58345C14.3166 2.69457 14.9972 2.04459 15.3564 1.74086C15.4535 1.65881 15.4421 1.67568 15.3703 1.72112C15.3454 1.73693 15.2916 1.76994 15.2165 1.80679C15.1563 1.8363 14.9961 1.91173 14.7722 1.95856C14.5999 1.9946 14.0106 2.09724 13.3819 1.73543C12.6213 1.29776 12.4208 0.563654 12.3913 0.160339C12.3654 -0.19419 12.4437 -0.461733 12.4693 -0.545579C12.5041 -0.659669 12.5416 -0.742243 12.5587 -0.77861C12.5934 -0.852079 12.619 -0.890447 12.6081 -0.873052C12.5911 -0.845896 12.5383 -0.76688 12.4254 -0.612883L15.651 1.75257ZM5.44334 4.76833C4.80293 5.03797 3.96954 5.19767 2.93709 5.30978C2.42962 5.36489 1.91659 5.40479 1.37469 5.44846C0.84672 5.49101 0.287905 5.53739 -0.248069 5.60438L0.248069 9.5735C0.685101 9.51887 1.16139 9.47862 1.69598 9.43554C2.21663 9.39358 2.7936 9.34888 3.36892 9.2864C4.50205 9.16335 5.80538 8.956 6.99557 8.45487L5.44334 4.76833Z"/>
					</Svg>
				</View>
				<View style = {stylesheet.styleVector49}>
					<Svg
						stroke = "rgba(255, 240, 224, 1)"
					>
						<Path d="M0.181071 -1.99179C-0.918962 -2.09179 -1.89178 -1.2811 -1.99179 -0.181071C-2.09179 0.918962 -1.2811 1.89178 -0.181071 1.99179L0.181071 -1.99179ZM6.76293 3.55166C7.8412 3.79128 8.90955 3.11142 9.14917 2.03315C9.38878 0.954882 8.70892 -0.113472 7.63066 -0.353086L6.76293 3.55166ZM-0.181071 1.99179C0.853216 2.08581 1.94284 2.32333 3.12327 2.62405C4.24397 2.90956 5.55674 3.28362 6.76293 3.55166L7.63066 -0.353086C6.49375 -0.605731 5.40449 -0.922553 4.11075 -1.25214C2.87674 -1.56651 1.53951 -1.86829 0.181071 -1.99179L-0.181071 1.99179Z"/>
					</Svg>
				</View>
       </View> 
		</View>
	)
}
const stylesheet = StyleSheet.create({
 	styleRectangle14: {
		position: "absolute",
		left: 0,
		top: -2,
		width: 360,
		height: 642,
	},
	styleOrangeGradientBg1: {
		position: "absolute",
		left: 0,
		top: -2,
		borderRadius: null,
		width: 360,
		height: 649,
	},
	styleRectangle1: {
		position: "absolute",
		left: 37,
		right: -248,
		top: 394,
		bottom: 274,
		width: "auto",
		height: "auto",
	},
	styleRectangle2: {
		position: "absolute",
		left: 37,
		right: -248,
		top: 150,
		bottom: 64,
		width: "auto",
		height: "auto",
	},
	styleWriteYourDailyMessage3: {
		position: "absolute",
		left: 41,
		top: 353,
		width: 277,
		color: "rgba(255, 254, 252, 1)",
		fontSize: 20,
		//fontFamily: "Jost_400Regular",
		letterSpacing: -0.5,
		fontStyle: "normal",
		fontWeight: "700",
		textAlign: "left",
		height: "auto",
		lineHeight: 23.4,
	},
	styleTodaySPrompt_: {
		position: "absolute",
		left: 41,
		top: 107,
		width: 277,
		color: "rgba(255, 254, 252, 1)",
		fontSize: 18,
		//fontFamily: "Jost_400Regular",
		letterSpacing: -0.5,
		fontStyle: "normal",
		fontWeight: "700",
		textAlign: "left",
		height: "auto",
		lineHeight: 21.1,
	},
	styleGiveYourPasserbysAComplimentOrTwo_: {
		position: "absolute",
		left: 54,
		top: 163,
		width: 251,
		color: "rgba(249, 161, 80, 1)",
		fontSize: 20,
		//fontFamily: "Jost_400Regular",
		letterSpacing: -0.5,
		fontStyle: "normal",
		fontWeight: "700",
		textAlign: "center",
		height: "auto",
		lineHeight: 23.4,
	},
	styleRectangle7: {
		position: "absolute",
		left: 0,
		top: 0,
		width: 52,
		height: 51,
	},
	styleVector4: {
		position: "absolute",
		left: 9,
		right: -24,
		top: 39,
		bottom: 39,
		width: "auto",
		height: "auto",
	},
	styleVector2: {
		position: "absolute",
		left: 9,
		right: -24,
		top: 25,
		bottom: 25,
		width: "auto",
		height: "auto",
	},
	styleVector3: {
		position: "absolute",
		left: 9,
		right: -24,
		top: 25,
		bottom: 25,
		width: "auto",
		height: "auto",
	},
	styleVector1: {
		position: "absolute",
		left: 9,
		right: -24,
		top: 12,
		bottom: 12,
		width: "auto",
		height: "auto",
	},
	styleGroup4: {
		position: "absolute",
		left: 27,
		top: 19,
		width: 52,
		height: 51,
	},
	styleTypeHere_: {
		position: "absolute",
		left: 53,
		top: 406,
		width: 95,
		color: "rgba(255, 183, 116, 1)",
		fontSize: 15,
		//fontFamily: "Jost_400Regular",
		letterSpacing: -0.5,
		fontStyle: "normal",
		fontWeight: "500",
		textAlign: "center",
		height: "auto",
		lineHeight: 17.6,
	},
	styleEllipse2: {
		position: "absolute",
		left: 279,
		top: 473,
		borderRadius: null,
		width: 29,
		height: 29,
	},
	styleVector5: {
		position: "absolute",
		left: 286,
		right: 280,
		top: 488,
		bottom: 488,
		width: "auto",
		height: "auto",
	},
	styleVector6: {
		position: "absolute",
		left: 293.41156005859375,
		right: 293.41156005859375,
		top: 479.7691955566406,
		bottom: 464,
		width: "auto",
		height: "auto",
	},
	styleVector7: {
		position: "absolute",
		left: 292.3789367675781,
		right: 283.3789367675781,
		top: 487.7115478515625,
		bottom: 488,
		width: "auto",
		height: "auto",
	},
	styleVector: {
		position: "absolute",
		left: 132,
		right: 37,
		top: 542,
		bottom: 463,
		width: "auto",
		height: "auto",
	},
	styleVector33: {
		position: "absolute",
		left: 178,
		right: 164,
		top: 558,
		bottom: 556,
		width: "auto",
		height: "auto",
	},
	styleTodaySFaves: {
		position: "absolute",
		left: 144,
		top: 558,
		width: 73,
		color: "rgba(255, 183, 116, 1)",
		fontSize: 18,
		//fontFamily: "Jost_400Regular",
		letterSpacing: -0.5,
		fontStyle: "normal",
		fontWeight: "800",
		textAlign: "center",
		height: "auto",
		lineHeight: 21.1,
	},
	styleRectangle6: {
		position: "absolute",
		left: 224,
		right: 114,
		top: 31,
		bottom: 5,
		width: "auto",
		height: "auto",
	},
	style2899: {
		position: "absolute",
		left: 238,
		top: 31,
		width: 86,
		color: "rgba(249, 161, 80, 1)",
		fontSize: 18,
		//fontFamily: "Jost_400Regular",
		letterSpacing: -0.5,
		fontStyle: "normal",
		fontWeight: "800",
		textAlign: "center",
		height: "auto",
		lineHeight: 21.1,
	},
	styleVector48: {
		position: "absolute",
		left: 183.9982147216797,
		right: 169.9982147216797,
		top: 551.9141845703125,
		bottom: 542,
		width: "auto",
		height: "auto",
	},
	styleVector49: {
		position: "absolute",
		left: 174.40249633789062,
		right: 167.40249633789062,
		top: 558.7034912109375,
		bottom: 557,
		width: "auto",
		height: "auto",
	},
	styleStylename: {
		position: "relative",
		width: Dimensions.get("window").width,
		height: 640,
		backgroundColor: "rgba(241, 242, 243, 1)",
	},

});

export default App;

