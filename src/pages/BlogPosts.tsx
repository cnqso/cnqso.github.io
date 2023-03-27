/** @format */

import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Collapse from "@mui/material/Collapse";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import "highlight.js/styles/github.css";
import hljs from "highlight.js";
import { marked } from "marked";

export type BlogPost = { title: string; date: Date; path: string; post: () => JSX.Element };

const WordleViewer: BlogPost = {
	title: "Wordle Viewer",
	date: new Date(2022, 11, 21),
	path: "post1",
	post: function () {
		return (
			<div className='textBlock'>
				<p>
					Me and my mom send each other our Wordle scores on most days, and it has become a fun way
					to keep in touch. For Christmas, I wanted to make some sort of gift that could showcase
					the previous year of exchanges. The end result was Wordle Viewer, a web app that displays
					Wordle scores in a gallery format, as well as the original text messages, comparisons, and
					stats. The app is built with React, and the "backend" is a Python script using the SQLite,
					JSON, and wordfreq libraries. The first challenge was to get the scores. A little bit of
					research showed that, luckily, iPhone SMS and iMessage data is easily downloaded. However,
					I was unable to find any trivial way to export all messages in a single text conversation
					without using some sort of paid software. I'm cheap, so I learned SQL instead.
				</p>
				<p>
					An iPhone's text backup file is labelled as 3d0d7e5fb2ce288813306e4d4636395e047a3d28.db.
					This is an SQLite database with a somewhat unintuitive relational schema. All messages are
					stored in a single table, and each message has a conversation ID that references a
					conversation table. The ID of the conversation table is the same as the ID of the contact
					table, which contains a contact's display name and phone number. Since a single user can
					have multiple conversation IDs and display names (usually distinguishing between iMessage
					and SMS [I found this out the hard way]), the user's phone number is the best way to
					identify a conversation. After a few relational queries, I was able to get an SQLite
					database of all messages sent to or from any single phone number with text, time, and
					sender data
					<Footnote num={1}>
						{
							"This was actually pretty trivial to do, which makes me wonder why the available software solutions are so expensive. I knew 0 SQL going into this process, and it took about 2 hours to finish a script which can get you a temporally ordered list of all messages in a conversation, in db, JSON, and CSV formats. This has real applications: the paid software makes pretty solid money off of lawyers who need an archived and searchable record of text messages. A free, open-source solution would be a trivial project. Either someone needs to make it, or someone has already made it and they need to fix their SEO. I'll try to look into this by the end of 2023."
						}
					</Footnote>{" "}
					Next was processing the messages.
				</p>
				Wordle scores are usually shared through a provided string format that looks like this:
				<div style={{ textAlign: "center", letterSpacing: 0, lineHeight: "1.2em" }}>
					Wordle 645 5/6
					<br />
					⬛⬛⬛⬛🟩
					<br />
					⬛⬛⬛🟨🟩
					<br />
					🟨⬛🟨🟨🟩
					<br />
					🟩🟩🟨🟨🟩
					<br />
					🟩🟩🟩🟩🟩
				</div>
				<p>
					This is a pretty charming and well-designed format. More important for our purposes, it is
					consistent and highly distinctive. We have the word "Wordle", followed by the game's
					number and the player's score out of 6. After that, we have a grid of emojis that shows
					the player's moves. I reduced the database to a list of messages that contained the word
					"Wordle" followed by "/6". This is a pretty good heuristic, but it is not perfect, so I
					made sure to add error handling in the frontend to catch any false positives. After this,
					the script processes the new array of wordle messages into a list of objects organized by
					wordle number. Each object holds both users' scores, time sent, full text, and a string
					representing their score grid (such that the above example would become "BBBBG BBBYG YBYYG
					GGYYG").
				</p>
				<p>
					The final step of the backend before translating to JSON is to calculate the likely paths
					each user took to reach their final score. I call this process "reverse solving" and it is
					interesting enough to warrant its own blog post. In summary, I used the wordfreq library
					and the sorted the list of valid wordle words by frequency. The script then finds the most
					likely path by starting at finding the highest frequency word that "makes sense" given the
					player's assumed information and the colors of the current row. Known biases can be added
					to each player (for example, I use the same starting word each day) for more accurate
					information. The result is an approximate but aesthetically useful recreation of the
					user's choices in that game. There are some interesting limitations and edge cases that
					are worth exploring in a future post.
				</p>
				<p>
					The frontend is built with React. This was my first React project, and you can really tell
					if you look at the code. The component structure is brutally inefficient and prop drilling
					is rampant. Luckily the app is not resource intensive or complex enough that this is a
					noticeable problem for the user. I made overexcited use of the framer motion library for
					the animations. In hindsight, I am a mix of proud and embarassed by the end result.
					Certain parts are, in my opinion, quite beautiful and well designed. Other parts are a
					mess. I'm sure you can tell what I mean by looking at it.
				</p>
				<p>
					I don't think I'll revisit the frontend in the future — the code is a mess and the
					problems are not interesting enough to justify the time investment. The backend, however,
					is still interesting and could be expanded in many directions. Since finishing this
					project, the list of all future wordle answers has been published, which trivializes the
					updating process. Further, reverse solving wordles is an interesting enough problem to
					warrant its own webtoy. Lastly, and most importantly, it would be nice if a new set of
					wordle scores could be added without requiring a download or React build on the user's
					part. I'm not sure if a user would be willing to upload their entire text history to some
					rando's website, but it would absolutely be doable in-browser. Maybe some middle ground
					could be found? We'll have to see.
				</p>
			</div>
		);
	},
};

// const ReverseWordleSolver: BlogPost = {
// 	title: "Reverse Wordle Solver",
// 	date: new Date(2022, 11, 30),
// 	path: "post2",
// 	post: function () {
// 		return (
// 			<div className='textBlock'>
// 				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
// 				proident, sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor
// 				sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
// 				borum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
// 				incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
// 				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
// 				reprehenderit in voluptate "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
// 				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
// 				nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
// 				dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
// 				Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
// 				id est laborum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
// 				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
// 				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
// 				reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
// 				occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
// 				laborum."magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
// 				ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
// 				esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
// 				sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor sit amet,
// 				consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
// 				aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
// 				ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
// 				dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
// 				qui officia deserunt mollit anim id est la
// 			</div>
// 		);
// 	},
// };

const SimCity: BlogPost = {
	title: "How Did Sim City Work?",
	date: new Date(2023, 0, 3),
	path: "post3",
	post: function () {
		const code1 = `
/* comefrom: doEditWindow scoreDoer doMapInFront graphDoer doNilEvent */
SimFrame(void)
{
    short i;

    if (SimSpeed == 0)
    return;

    if (++Spdcycle > 1023)
    Spdcycle = 0;

    if (SimSpeed == 1 && Spdcycle % 5)
    return;

    if (SimSpeed == 2 && Spdcycle % 3)
    return;

    if (++Fcycle > 1023) Fcycle = 0;
/*  if (InitSimLoad) Fcycle = 0; */
    Simulate(Fcycle & 15);
}
`;
		const code2 = `
results = {}
for x in range(1024):
    mod16 = str(x & 15)
    if (results.get(mod16)):
        results[mod16] += 1
    else:
        results[mod16] = 1
print(results)
`;
		const code3 = `
/* comefrom: SimFrame */
Simulate(int mod16)
{
    static short SpdPwr[4] = { 1,  2,  4,  5 };
    static short SpdPtl[4] = { 1,  2,  7, 17 };
    static short SpdCri[4] = { 1,  1,  8, 18 };
    static short SpdPop[4] = { 1,  1,  9, 19 };
    static short SpdFir[4] = { 1,  1, 10, 20 };
    short x;


    x = SimSpeed;
    if (x > 3) x = 3;


    switch (mod16)  {
    case 0:
        if (++Scycle > 1023) Scycle = 0;  /* this is cosmic */
        if (DoInitialEval) {
    DoInitialEval = 0;
    CityEvaluation();
        }
        CityTime++;
        AvCityTax += CityTax;   /* post */
        if (!(Scycle & 1)) SetValves();
        ClearCensus();
        break;
    case 1:
        MapScan(0, 1 * WORLD_X / 8);
        break;
    case 2:
        MapScan(1 * WORLD_X / 8, 2 * WORLD_X / 8);
        break;
    case 3:
        MapScan(2 * WORLD_X / 8, 3 * WORLD_X / 8);
        break;
    case 4:
        MapScan(3 * WORLD_X / 8, 4 * WORLD_X / 8);
        break;
    case 5:
        MapScan(4 * WORLD_X / 8, 5 * WORLD_X / 8);
        break;
    case 6:
        MapScan(5 * WORLD_X / 8, 6 * WORLD_X / 8);
        break;
    case 7:
        MapScan(6 * WORLD_X / 8, 7 * WORLD_X / 8);
        break;
    case 8:
        MapScan(7 * WORLD_X / 8, WORLD_X);
        break;
    case 9:
        if (!(CityTime % CENSUSRATE)) TakeCensus();
        if (!(CityTime % (CENSUSRATE * 12))) Take2Census();


        if (!(CityTime % TAXFREQ))  {
    CollectTax();
    CityEvaluation();
        }
        break;
    case 10:
        if (!(Scycle % 5)) DecROGMem();
        DecTrafficMem();
        NewMapFlags[TDMAP] = 1;
        NewMapFlags[RDMAP] = 1;
        NewMapFlags[ALMAP] = 1;
        NewMapFlags[REMAP] = 1;
        NewMapFlags[COMAP] = 1;
        NewMapFlags[INMAP] = 1;
        NewMapFlags[DYMAP] = 1;
        SendMessages();
        break;
    case 11:
        if (!(Scycle % SpdPwr[x])) {
    DoPowerScan();
    NewMapFlags[PRMAP] = 1;
    NewPower = 1; /* post-release change */
        }
        break;
    case 12:
        if (!(Scycle % SpdPtl[x])) PTLScan();
        break;
    case 13:
        if (!(Scycle % SpdCri[x])) CrimeScan();
        break;
    case 14:
        if (!(Scycle % SpdPop[x])) PopDenScan();
        break;
    case 15:
        if (!(Scycle % SpdFir[x])) FireAnalysis();
        DoDisasters();  
        break;
    }
}
`;

		const code4 = `
Simulate(int mod16)
{
    static short SpdPwr[4] = { 1,  2,  4,  5 };
    static short SpdPtl[4] = { 1,  2,  7, 17 };
    static short SpdCri[4] = { 1,  1,  8, 18 };
    static short SpdPop[4] = { 1,  1,  9, 19 };
    static short SpdFir[4] = { 1,  1, 10, 20 };
    short x;


    x = SimSpeed;
    if (x > 3) x = 3;
`;
		const code5 = `
MapScan(int x1, int x2)
{
    register short x, y;


    for (x = x1; x < x2; x++)  {
    for (y = 0; y < WORLD_Y; y++) {
        if (CChr = Map[x][y]) {
    CChr9 = CChr & LOMASK;  /* Mask off status bits  */
    if (CChr9 >= FLOOD) {
    SMapX = x;
    SMapY = y;
    if (CChr9 < ROADBASE) {
        if (CChr9 >= FIREBASE) {
        FirePop++;
        if (!(Rand16() & 3)) DoFire();  /* 1 in 4 times */
        continue;
        }
        if (CChr9 < RADTILE)  DoFlood();
        else DoRadTile();
        continue;
    }


    if (NewPower && (CChr & CONDBIT))
        SetZPower();


    if ((CChr9 >= ROADBASE) &&
        (CChr9 < POWERBASE)) {
        DoRoad();
        continue;
    }


    if (CChr & ZONEBIT) { /* process Zones */
        DoZone();
        continue;
    }


    if ((CChr9 >= RAILBASE) &&
        (CChr9 < RESBASE)) {
        DoRail();
        continue;
    }
    if ((CChr9 >= SOMETINYEXP) &&
        (CChr9 <= LASTTINYEXP))  /* clear AniRubble */
        Map[x][y] = RUBBLE + (Rand16() & 3) + BULLBIT;
    }
        }
    }
    }
}
`;
		const code6 = `
MapScan(0, 1 * WORLD_X / 8);
MapScan(1 * WORLD_X / 8, 2 * WORLD_X / 8);
MapScan(2 * WORLD_X / 8, 3 * WORLD_X / 8);
MapScan(3 * WORLD_X / 8, 4 * WORLD_X / 8);
MapScan(4 * WORLD_X / 8, 5 * WORLD_X / 8);
MapScan(5 * WORLD_X / 8, 6 * WORLD_X / 8);
MapScan(6 * WORLD_X / 8, 7 * WORLD_X / 8);
MapScan(7 * WORLD_X / 8, WORLD_X);
`;
		const code7 = `
/* comefrom: DoIndustrial DoCommercial DoResidential */
MakeTraf(int Zt)
{
    short xtem, ytem;


    xtem = SMapX;
    ytem = SMapY;
    Zsource = Zt;
    PosStackN = 0;


#if 0
    if ((!Rand(2)) && FindPTele()) {
/* printf("Telecommute!\n"); */
    return (TRUE);
    }
#endif


    if (FindPRoad()) {    /* look for road on zone perimeter */
    if (TryDrive()) {   /* attempt to drive somewhere */
        SetTrafMem();   /* if sucessful, inc trafdensity */
        SMapX = xtem;
        SMapY = ytem;
        return (TRUE);    /* traffic passed */
    }
    SMapX = xtem;
    SMapY = ytem;
    return (FALSE);   /* traffic failed */
    }
    else return (-1);   /* no road found */
}
`;
		const code8 = `
/* comefrom: DoSPZone MakeTraf */
FindPRoad(void)   /* look for road on edges of zone   */
{
    static short PerimX[12] = {-1, 0, 1, 2, 2, 2, 1, 0,-1,-2,-2,-2};
    static short PerimY[12] = {-2,-2,-2,-1, 0, 1, 2, 2, 2, 1, 0,-1};
    register short tx, ty, z;


    for (z = 0; z < 12; z++) {
    tx = SMapX + PerimX[z];
    ty = SMapY + PerimY[z];
    if (TestBounds(tx, ty)) {
        if (RoadTest(Map[tx][ty])) {
        SMapX = tx;
        SMapY = ty;
        return (TRUE);
        }
    }
    }
    return (FALSE);
}
`;

		const code9 = `
/* comefrom: MakeTraf */
TryDrive(void)
{
    short z;


    LDir = 5;
    for (z = 0; z < MAXDIS; z++) {  /* Maximum distance to try */
    if (TryGo(z)) {     /* if it got a road */
        if (DriveDone())      /* if destination is reached */
    return (TRUE);      /* pass */
    } else {
        if (PosStackN) {      /* deadend , backup */
    PosStackN--;
    z += 3;
        }
        else return (FALSE);    /* give up at start  */
    }
    }
    return (FALSE);     /* gone maxdis */
}
`;
		const code10 = `
DoResidential(int ZonePwrFlg)
{
    short tpop, zscore, locvalve, value, TrfGood;


    ResZPop++;
    if (CChr9 == FREEZ) tpop = DoFreePop();
    else tpop = RZPop(CChr9);


    ResPop += tpop;
    if (tpop > Rand(35)) TrfGood = MakeTraf(0);
    else TrfGood = TRUE;


    if (TrfGood == -1) {
    value = GetCRVal();
    DoResOut(tpop, value);
    return;
    }


    if ((CChr9 == FREEZ) || (!(Rand16() & 7))) {
    locvalve = EvalRes(TrfGood);
    zscore = RValve + locvalve;
    if (!ZonePwrFlg) zscore = -500;


    if ((zscore > -350) &&
    (((short)(zscore - 26380)) > ((short)Rand16Signed()))) {
        if ((!tpop) && (!(Rand16() & 3))) {
    MakeHosp();
    return;
        }
        value = GetCRVal();
        DoResIn(tpop, value);
        return;
    }
    if ((zscore < 350) &&
    (((short)(zscore + 26380)) < ((short)Rand16Signed()))) {
        value = GetCRVal();
        DoResOut(tpop, value);
    }
    }
}
`;

		const code11 = `
#define HOSPITAL    409
#define CHURCH      418
#define COMBASE     423
#define COMCLR      427
#define CZB     436
#define INDBASE     612
#define INDCLR      616
#define LASTIND     620
#define IND1        621
#define IZB     625
#define IND2        641
#define IND3        644
#define IND4        649
#define IND5        650
#define IND6        676
#define IND7        677
#define IND8        686
#define IND9        689
#define PORTBASE    693
#define PORT        698
#define LASTPORT    708
`;

		const code12 = `
CChr9 = CChr & LOMASK; /* Mask off status bits  */ 
if (CChr9 >= FLOOD) {
    SMapX = x;
    SMapY = y;
    if (CChr9 < ROADBASE) {
      if (CChr9 >= FIREBASE) {
        FirePop++;
        if (!(Rand16() & 3)) DoFire();  /* 1 in 4 times */
        continue;
`;

		const code13 = `
if (map[y][x].color === buildings.road.color) {
    localBuildings[map[y][x].buildingId].heatMap[buildingCode] = ((1+thisBuilding.level)/(traveled+1));
    }
`;
		const code14 = `
localBuildings[map[y][x].buildingId]
“The building object located at this tile”


.heatMap[buildingCode]
“The heatmap layer associated with this building type”


((1+thisBuilding.level)/(traveled+1))
“Higher levels add more to the heat map and further distanced add less”
`;

		return (
			<div className='textBlock'>
				<p>Did you know that the original Sim City is open source? Crazy!</p>

				<p>
					The license was relinquished 15 years ago in an apparent collaboration with something
					called the One Laptop Per Child program. The source code is disorganized and filled with
					quirks. The simulation itself was written in C, but was framed TCL/TK, which I know
					basically nothing about. Let's take a look at the code and see what we can glean.
				</p>
				<p>
					There are plenty of nested initialization steps, but let’s start off with SimFrame. Many
					functions call it, and it seems to simulate each tick of simulation within the engine.
				</p>
				<CodeBlock code={code1} />
				<p>
					After initializing a variable with a purpose unclear to me, it checks to see if the game
					is paused (SimSpeed == 0) and returns if so. It then iterates the current cycle after
					ensuring that doing so won’t cause an overflow. The way game speed is handled is clever.
					In the case that the Speed is 1, the simulation only runs every 5th frame. If speed is 2,
					it only runs 3rd frame. If speed is set to 3, it skips no frames. Interestingly, this
					means that the 4 speeds set the game to 0%, 20%, 33%, and 100% of processor speed
					respectively. Why not a Spdcycle % 2?
				</p>

				<p>
					The last part is completely Greek to me. It iterates Fcycle – similar to Spdcycle except
					it only iterates when a simulation is guaranteed – after ensuring no overflow, then runs
					the simulation with the input variable mod16, which is derived from a bitwise ‘and’
					between Fcycle and 15 (1111 in binary). I ran this through a quick python script to see
					the result.
				</p>
				<CodeBlock code={code2} />
				<p>
					The results showed that in 1024 cycles, mod16 will return each value exactly 64 times.
					This is a very clever solution for iterating that doesn’t require an additional check on
					every loop. Also, converting a bitwise operation to a string felt weird. Like wearing a
					suit to a track meet.
				</p>

				<p>
					After this is a beautiful, beautiful function. At 90 lines, it would inspire disgust in
					many. Yet it is the perfect implementation of its goals. Here is: Simulate()
				</p>
				<CodeBlock code={code3} />
				<p> This is going to take me a couple of days to run through. Let’s get started! </p>
				<CodeBlock code={code4} />
				<p>
					The shortened naming convention makes things a lot harder than they need to be, and they
					didn’t make it any better in the C++/Python port. In this case, though, it seems clear
					that we have initializations for the fifth entry in the arrays SpeedPower,
					SpeedPollution(?), SpeedCrisis(?), SpeedPopulation, and SpeedFire. This is really weird.
					It then initializes “x” to be a version of SimSpeed which is capped to 3. I didn’t know it
					was even possible to have a higher value than 3 but whatever.
				</p>

				<p>
					We then get to the “big switch” between 16 options. Case 0 has the magnificent comment
					“this is cosmic”. I assume this just means that reaching 1023 Scycles takes a while (16368
					simulated frames), but I like to imagine this was an outburst of emotion immortalized in
					code. I’ll submit a pull request appending an exclamation point. It then checks if it
					needs to do an initial evaluation (this seems like a messier solution to this problem than
					I’d expect from the billion initializations this game has). It then iterates CityTime (the
					same as Scycle but with a variable starting point) and adds the player’s city tax to the
					average city tax. It then has a 50% chance to run SetValves(), and runs ClearCensus().{" "}
				</p>

				<p>
					The next 8 cycles, half of the whole simulation, are spent on MapScan(). I wonder what
					that does.
				</p>
				<CodeBlock code={code5} />
				<p>
					These variables are a lot more difficult to read, though I do see a comforting 2D tile
					array: Map[][]. Let’s first parse through the potential input variables:
				</p>
				<CodeBlock code={code6} />
				<p>
					{" "}
					I can’t find anything definite on WORLD_X, but from this snippet in the ClearMap()
					function in s_gen.c:{" "}
				</p>
				<CodeBlock code={code7} />
				<p>
					It definitely looks like it’s the width of the map measured in tiles. I happen to know
					that the original SimCity map is 120x100, so Let’s replace WORLD_X by 120. Therefore,
				</p>
				<CodeBlock code={code8} />
				<p>
					These values – x1 and x2 – are always at a distance equal to ⅛ of the total map width.
					Obviously, it is scanning through the map in segments in order to spread processing power
					and random events throughout. These random events – like “DoFire()” and “DoFlood()” – seem
					to be mostly negative. DoRail() and DoRoad() correspond to deteriorating roads and rails.
					DoZone, on the other hand, seems to to an entirely separate and expansive simulation
					system in s_zone.c
				</p>

				<p>
					MakeTraf() is the best-commented function in this entire codebase. I embarked upon this
					project solely to figure out how Will Wright dealt with traffic, so this is a huge
					blessing. Here’s the code:
				</p>
				<CodeBlock code={code9} />
				<p>Misspelled “successful” – that’s another pull request. FindPRoad() looks like this:</p>
				<CodeBlock code={code10} />
				<p>
					{" "}
					Some quick comments: the hardcoded values for where to find a road perimeter is hardcoded
					to 3x3 zones! Very interesting. It starts on the left end of the bottom and works
					counterclockwise. Interestingly, this would have real gameplay consequences: you can
					increase your buildings max searchable distance by not placing roads in more distant
					places. And TryDrive() looks like this:
				</p>
				<CodeBlock code={code11} />
				<p>
					Once we find any road along the perimeter, we begin a search along the road for MAXDIS
					iterations. If it reaches the type of destination it was looking for, it returns true.
					SetTrafMem() then increases traffic density along each tile traversed. This answers one
					half of my question, but not another: how do integrate these spatial relationships with
					the supply and demand model of the game? Let’s look back at DoResidential()
				</p>
				<CodeBlock code={code12} />
				<hr />
				<p>
					{" "}
					It’s morning now and I discovered something simultaneously exciting and disappointing. On
					a hail-mary search of the term “ResZPop”, I discovered that someone already did all of
					this work. Chaim Gingold, a developer who worked with Will Wright on Spore, wrote on the
					design of Sim City as part of his PhD dissertation. Here’s a link, the relevant section
					starts on page 297 / PDF page 323 (I hate it when people forget to sync the page numbers
					on PDFs).
				</p>
				<p>
					Gingold opens with a high-level representation of the simulation
					<br />
					<img
						src='https://i.imgur.com/0Z0Z0Z0.png'
						alt='High-level representation of the simulation'
					/>
					<br />
					This information is immensely useful. The system I’ve developed so far is different in
					notable ways which I’ll detail later.
				</p>
				<p>
					It seems like my conclusions so far were a good start. The simulation does indeed run on a
					16-step simulation, and 7 of those steps are spend on MapScan()
					<img
						src='https://i.imgur.com/0Z0Z0Z0.png'
						alt='High-level representation of the simulation'
					/>
					The biggest new insights here are at the bottom: a lot of the complexity I had difficulty
					parsing are cycle checks to delay scans on faster time settings. I don’t plan to have time
					settings, so I won’t investigate too much further. One thing though – the time settings on
					TakeCensus() and TakeCensus2() tell us the frequency of simulation: Every 4 cycles is a
					month, every 48 is a year.
				</p>
				<p>
					{" "}
					Further, what I first thought was just a bizarre ID system turned out to be a vital part
					of the cellular automata system. The definitions of different buildings looks like this:
				</p>
				<CodeBlock code={code13} />
				<p>And this corresponds to handlers like this:</p>
				<CodeBlock code={code14} />
				<p>
					First, what’s up with CChr9? This was a question which was beating me up last night.
					However, I’m proud to say I’ve figured it out (with the help of someone else figuring it
					out for me).
				</p>
				<p>
					Each tile on the Sim City map uses 16 bits.
					<img
						src='https://i.imgur.com/0Z0Z0Z0.png'
						alt='High-level representation of the simulation'
					/>
					16 bits!!! The first 10 are a reference and everything else the game needs to know is in
					the last 6. My map tiles use 16 bits just for the index. It then uses 7 bytes for cell
					color and 19 bytes to point to the object it belongs to. Ridiculous.
				</p>
				<p>
					The first 10 correspond to one of the 956 possible tile sprites, and the last 6 correspond
					to various boolean variables about the tile. Based on this “Masking off status bits” can
					be reasonably assumed to mean isolating the first 10 bits, and in this case LOMASK must
					look something like 1111111111 (1023) or 1111111111000000 (65472).
				</p>
				<img
					src='https://i.imgur.com/0Z0Z0Z0.png'
					alt='High-level representation of the simulation'
				/>
				<p>
					{" "}
					Cool! So CChr9 is just the spritemap location of each tile. The map is organized in such a
					way that groups of similar behavior are adjacent, so rather than assigning each ID a
					separate behavior we can just check a range. In the example above, we check if the ID is
					greater than “FLOOD”. The ID map around FLOOD looks like this:
				</p>
				<img
					src='https://i.imgur.com/0Z0Z0Z0.png'
					alt='High-level representation of the simulation'
				/>

				<p>
					I would argue that woods and trees are quite flammable, but the behavior is pretty clear:
					anything naturally generated by the world probably won’t catch on fire, but anything the
					player places can.{" "}
				</p>

				<p>
					Even crazier than the fact that there are only 16 bits per tile is that the tiles do not
					point to anything. This was the biggest revelation to me in this whole investigation: the
					original sim city did not keep track of what buildings were where. When buildings were
					demolished, they ran a function which found all the other tiles in the building and
					deleted them that way. There is a tile at the center of every zone which has ZONEBIT on,
					so when you need to operate only once per building (like to check power, create traffic,
					etc) which ensures only one action per zone.
				</p>

				<p>
					Here’s a full overview of MapScan()
					<img
						src='https://i.imgur.com/0Z0Z0Z0.png'
						alt='High-level representation of the simulation'
					/>
				</p>

				<p>
					I finally come to the answer to my original question, and it isn’t pretty.
					<img
						src='https://i.imgur.com/0Z0Z0Z0.png'
						alt='High-level representation of the simulation'
					/>
					I really don’t want to parse through this, but let’s check it out. I’ll start at the top.
				</p>

				<p>
					What is a valve? According to Gingold, it regulates and limits the flow of information
					between different simulation agents. This concept comes from Jay Forrester, an early
					influential computer engineer and the system dynamicist. The concept makes intuitive
					sense: if every time you added something to your city it immediately reached its economic
					equilibrium, it wouldn’t feel like much of a simulation at all. RValve CValve and IValve
					update twice every month.
				</p>

				<p>
					SetValve looks at ratios between the population of Residential, Commercial, and Industrial
					zones and sets the projected velocity, positive or negative, of those types of zones. For
					example, employment is based on a ratio between commercial+industrial and residential. It
					also takes into account things like the ratio of land value to pollution etc. It uses this
					to determine a “projected” population. A velocity towards that projected population is
					determined and then modified by the tax rate and game difficulty. Finally, a global valve
					is set to grow or shrink zones.
				</p>

				<p>
					Here’s my problem with that: what happened to modularity? The cellular automata structure
					was so elegant, and now it seems like the RCI structure is moving back in the direction of
					whole-set calculation. I’m sure this is a result of hardware limitation, but here’s my
					ideal setup.
				</p>

				<p>
					Every zone gets its valve score by itself, the same way it contributes to traffic by
					itself. You have a set of commercial, industrial, and residential agents. Whether they are
					individual tiles or abstract objects shouldn’t matter too much.
					<ul>
						<li>
							Residential zones need: Employment from Commercial and Industrial zones (money in)
							in order to buy Goods from commercial zones (money out)
						</li>

						<li>
							Commercial zones need: Goods from industrial zones AND employment from Residential
							zones (money out) in order to sell them to residential zones (money in)
						</li>

						<li>
							Industrial zones need: Employees from Residential zones (money out) in order to
							sell goods to commercial zones (money in)
						</li>

						<li>
							Commercial zones and industrial zones are cyclical, whereas residential zones are
							linear (Commercial zones could also say they “need to sell to customers in order
							to buy goods from industry”, but Residential zones could NOT say that they need
							“To buy goods from commercial zones in order to get employed at commercial and
							industrial zones” (well you could in an abstract way but not in a way relevant to
							sub-simulations))
						</li>
					</ul>
				</p>

				<p>
					So we naturally want to start with residential zones. We start with individual node
					searches:
					<ol>
						<li>
							Residential zones search for jobs in their vicinity. 100% are willing to work
							within 5 tiles, 90% within 10, 66% within 20, 33% within 30, 10% within 40 (or
							something like that). The percentage employed is then taken as an input.
							<ol type='a'>
								<li>
									Employed is the population divided by jobs found. When this is suitably
									high then the residential zone will attract more population.
								</li>
								<li>
									Population is the number of people living in the zone. This takes in a
									number of map-level calculations on top of employment. Also doubles as
									Employment Capacity and Consumption Capacity
								</li>
								<li>
									Population capacity is a valve variable determined by zone development. It
									starts at some arbitrarily low point. When the zone grows, this figure
									increases. When it grows, population capacity grows. If the population is
									significantly below population capacity, the zone shrinks.
								</li>
								<li>
									Consumption is the number of goods purchased. When significantly lower
									than consumption capacity, increase demand for commercial zones. There’s
									more that could potentially be done here.
								</li>
							</ol>
						</li>
						<li>
							Industrial zones also record the employment they receive and take it as the output
							capacity input. They then search for Commercial zones within some vicinity to
							determine sales. Shorter distances marginally increase the sale value to the
							industrial zone.
							<ol type='a'>
								<li>
									Employment capacity is a valve variable. It starts at some arbitrarily low
									point. If pinged by a residential zone, an industrial zone can always
									immediately accept up to their employment capacity.
								</li>
								<li>Employment is the number of workers gained from residential pings.</li>
								<li>
									Output capacity allows for growth but also increases expectations. This is
									derived solely from the employment
								</li>
								<li>
									Sales is required to maintain output capacity. If Sales dips below the
									output capacity, a penalty is put on employment capacity If it dips
									significantly below, the zone will degrade
								</li>
							</ol>
						</li>
						<li>
							Commercial zones record when they are pinged by residential and industrial zones.
							<ol type='a'>
								<li>
									Employment capacity is a valve variable. It starts at some arbitrarily low
									point. If pinged by a residential zone, a commercial zone can always
									immediately accept up to their employment capacity.
								</li>
								<li>Employment is the number of workers gained from residential pings.</li>
								<li>
									Input capacity is the amount of product a Commercial zone can accept from
									an industrial zone. Determined by employment
								</li>
								<li>Stock is the amount of product received from an industrial zone</li>
								<li>Output capacity is the same as Input</li>
								<li>
									Sales is determined by pings from residential zones. If sales is below
									output capacity, a penalty is put on employment capacity. If it dips
									significantly below, the zone will degrade.
								</li>
							</ol>
						</li>
					</ol>
				</p>
			</div>
		);
	},
};

const BotsWillAlwaysWin: BlogPost = {
	title: "Bots Will Always Win",
	date: new Date(2023, 1, 3),
	path: "post4",
	post: function () {
		return (
			<div className='textBlock'>
				<p>
					Twitter's API now costs $100 to access. For the vast majority of twitter API users this
					represents the end. Nobody is going to shell out $100 a month to keep their{" "}
					<a href='https://twitter.com/RedPandaEveryHr'>hourly red panda</a> or{" "}
					<a href='https://twitter.com/PC98_bot'>PC-98 game screenshot</a> bot running.
				</p>
				<p>
					At the same time, this is something I would categorize as a stupid problem. Stupid
					problems are interesting because they don't test your problem solving ability, they test
					your self-awareness — most things that seem like stupid problems at first glance are
					actually more complicated, and the glancer needs to quell their ego.
				</p>

				<p>
					The twitter API does very trivial tasks. I would estimate that about 94% of the twitter
					API is used for automatically sending tweets on some interval. This may be for
					professional usage by businesses or personalities through Tweetdeck and similar software,
					or it may be connected to some client-side app that automatically collects pictures of red
					pandas, babytron lyrics, AI generated tweets, etc. Another 5% might be for collecting
					tweet data. This could again be for professional usage (monitoring specific tags or terms
					for marketing or finance) or for personal use in scraping, like with{" "}
					<a href='https://twitter.com/PC98_bot'>NBA Film Tweets</a>. The last 1% is authentication
					and 3rd party integration, problems that are actually complex enough to warrant a decent
					price tag.
				</p>

				<p>
					It is not hard to send a tweet. In fact, it I would say it is one of the easier things
					that one could do. You could probably automate this using selenium in 5 minutes. Open the
					browser, go to twitter.com, enter username and password, navigate to the text box, enter
					the desired message (say, read from a JSON file), then sendTweet.click(). Reading a tweet
					is notably more difficult for a computer to do, but I would still categorize it as “easy”.
					In selenium I'd give myself an hour to figure it out. Find out the class names of a
					tweet's text, profile name, etc. then tell selenium to read everything it can find on a
					screen and send it somewhere for processing. Scroll down as needed and continue until
					you're satisfied. <br />
					That last paragraph is a lie. Big tech companies hate bots, so logging in to any major
					social media site with Selenium is a non-starter. You might have a bit better luck using a
					more modern web scraping library, but don't expect it to last long: the{" "}
					<a href='https://about.fb.com/news/2021/04/how-we-combat-scraping/'>arms race</a> between
					web scrapers and big tech companies is escalating constantly. Now that 5 minute python
					script needs to be re-engineered every month.
				</p>

				<p>
					All you wanted to do was send a tweet and now you're navigating a corporate shadow-war.
					Sending a tweet is not hard, and there is nothing in the process that a computer can't do
					just as easily. Let's take a step back and think of the problem.{" "}
					<ol>
						<li>
							Sending a tweet is an easy, predictable act that requires very few motions, 5
							mouse clicks, and 10-300 keypresses
						</li>
						<li>
							However, the tweet-sending interface is an enormous, always-learning machine that
							must make sure that those button presses are coming from a real, breathing human.
						</li>
					</ol>
					From a few feet back, it becomes clear that your engineering focus is not “sending a
					tweet” as it were, but tricking a human-detection algorithm. There's no engineering to be
					done in the former. What you really need in this case, and in every case where you
					interact with a human-detection machine, is a replicable tool to appear like a human.
					Given this perspective, it's clear that Selenium or a similar web scraping library is the
					worst possible approach to a problem like this. Like most problems, people have already
					found solutions that we can learn from. Let's talk about aimbots.
				</p>
				<p>
					Aimbots are automation software that have managed to thrive in an environment which is
					much more hostile to bots than social media sites. In a game like CS:GO, developers have
					access to far more moment-to-moment information than Google or Facebook. CS:GO takes in
					every frame of mouse data and every piece of information that you could have at any given
					time — not so in a login page. If suspected of cheating, the data pipeline is opened up,
					and <a href='https://www.youtube.com/watch?v=kTiP0zKF9bc'>machine learning algorithms</a>{" "}
					are weaponized against every mouse twitch and hesitation. Even then, aimbots still thrive
					in the game. It turns out that the difference between a robot and a near-perfect human are
					subtle and easily replicable. In most cases, adding a
					<a href='https://www.unknowncheats.me/forum/counterstrike-global-offensive/170452-aimbot-randomized-faceit.html'>
						sufficient number of random parameters
					</a>{" "}
					to the automated motions is enough for a discerning user to fly under the radar. Games
					must keep the false-positive rate very low, and the variance in human mouse movements is
					very high.
				</p>
				<p>
					Some modern games have more advanced anti-cheat that detect modifications or unexpected
					reads from game memory, but memory reads aren't an instrinsic component of an aimbot. The
					new hotness is now <a href='https://github.com/kermado/NeuralBot'>AI aimbots</a> that read
					pixel data directly and detect player silhouettes and output the appropriate mouse
					movement. Valorant took it step further and required a kernel-level anti-cheat software
					that can detect most approaches to input modification. No problem, you can just capture
					the can pixel data directly from the GPU or{" "}
					<a href='https://arstechnica.com/gaming/2021/07/cheat-maker-brags-of-computer-vision-auto-aim-that-works-on-any-game/'>
						through a capture card
					</a>{" "}
					and{" "}
					<a href='https://www.youtube.com/watch?v=d1jz8qbzfIk'>
						process your mouse input with a Raspberry Pi
					</a>
					. When the part that actually matters — the change of mouse pixel coordinates — is so easy
					to spoof, the only remaining approach to stopping cheaters is detecting the shortcuts that
					the cheater took. At every stage, cheaters just used the easiest approach that wasn't
					already patched out.
				</p>
				<p>
					So what can we learn from this? Most importantly, there are actions where “human
					verification” might be impossible without an untenably high false positive rate. In these
					situations, detection depends entirely on common, non-essential features of automated
					approaches. For example, Selenium{" "}
					<a href='https://stackoverflow.com/questions/33225947/can-a-website-detect-when-you-are-using-selenium-with-chromedriver'>
						injects javascript
					</a>{" "}
					into every webpage it visits, which is easily detectable by any page. Users on
					StackOverflow advocate a{" "}
					<a href='https://stackoverflow.com/questions/60117232/selenium-google-login-block'>
						diverse array of superstitious solutions
					</a>
					, all of which either don't work anymore or never worked in the first place.
				</p>
				<p>
					The only real solution that can last the test of time is to find a higher-level solution.
					Let's think, what data can a website gather to determine if a user is real or fake? Is
					there unexpected javascript injected on load? Is the browser Chrome/Firefox/Safari on
					Windows/Mac? Does the browser show some use? Is there anything very unusual about site
					cookies, third party cookies, location, cached browser data, or any combination of these
					variables? Does it match previous log-ins? Does the user navigate and move the mouse
					normally? Can the user solve a Captcha if they raise any red flags on the previous
					questions?
				</p>
				<p>
					We can see here that certain options are non-starters: we shouldn't use any custom
					browsers or anything that modifies the code of a webpage. We probably shouldn't run it in
					a headless browser on EC2 either, as we'd like the browser to show some natural signs of
					aging. Lastly, we should allow for some sort of contingency plan in the event of a Captcha
					— either sending it to the creator or outsourcing to one of many{" "}
					<a href='https://2captcha.com/'>Captcha-solving services</a>.
				</p>
				<p>
					Here's a sketch:{" "}
					<ol>
						<li>
							Environment{" "}
							<ol type='a'>
								<li>
									On an old laptop or junk desktop (easier but worse: a VM) we log in to our
									browser of choice. We sync our passwords, history, bookmarks, etc., then
									do some casual browsing on the sites you'd like to target.
								</li>
							</ol>
						</li>{" "}
						<li>
							Mouse movement and navigation{" "}
							<ol type='a'>
								<li>
									For simple tasks you can simply record yourself doing the task before and
									after a variable component (in the case of a tweet-sending bot, pasting
									the tweet). For more advanced sites like google, you might want to record
									many variants to skirt detection. Make sure to anticipate potential errors
									if, for example, a data-collection modal loads unexpectedly.
								</li>{" "}
								<li>
									For more complex tasks with variable click locations, you will want to
									implement a “jitter” function similar to those used in aimbots. You could
									spend anywhere from 60 seconds to a month on this. You may decide that
									randomizing the speed of your mouse from location to location is enough.
									You may, on the other hand, choose to train a model to perfectly replicate
									your mouse movements, differentiating for different browser contexts.
									While a bit overkill, this is would be a fun project. In fact, I would
									argue that it would be extremely unlikely for google to detect a decently
									well-trained model. Sure, Google has a billion times the data that you do,
									but you don't need to be perfect. Google has to keep the false positive
									rate very low, and they can not afford to run advanced processes on every
									user. You don't have to be as normal as the average real human, you just
									have to be more normal than the weirdest 10% of real humans. More than
									anything, consistent normalcy is key. Any spikes in strange behavior will
									(probably) lead to a higher degree of scrutiny (more input data processed,
									more compute used on detection, more captchas).
								</li>
							</ol>
						</li>{" "}
						<li>
							Browsing{" "}
							<ol type='a'>
								<li>
									You could read directly from HTML or read raw pixel data. In my opinion,
									processing the pixel data would be better. Sure, it would be thousands of
									times slower, but websites load content very slowly anyway, and speed is
									not an issue here. You are required to go slowly, so you can make a more
									reliable product which is less likely to become detectable in the future.
									If we use already-available machine learning libraries to detect elements
									in the pixel data (for example, detecting the location of a log-in button
									on a website), we could easily generalize our browsing bot for most
									websites. Unique website layouts are incredibly rare.
								</li>{" "}
								<li>
									It's important that we integrate some “casual” browsing as well — if all
									we do is make a beeline to the search bar every time we log in, that could
									be picked up as unusual.
								</li>
							</ol>
						</li>{" "}
						<li>
							Fun stuff{" "}
							<ol type='a'>
								<li>
									We're essentially designing a human web-browsing AI model. What if we
									tried that? If we recorded ~100 hours of mouse inputs, keyboard inputs,
									and pixel data, we could probably get a workable GAN on consumer hardware.
									Could be fun
								</li>{" "}
								<li>
									What if we clicked on more ads than an average person? I don't think this
									would do anything for detection, but it would be kinda funny.
								</li>
							</ol>
						</li>
					</ol>{" "}
				</p>
				<p>
					This article is super long so I'll stop with that. If you see any problems with this so
					far or have any ideas, let me know! I'll post again when I've made some headway.
				</p>
			</div>
		);
	},
};

const Commons: BlogPost = {
	title: "Commons",
	date: new Date(2023, 1, 15),
	path: "post5",
	post: function () {
		return (
			<div className='textBlock'>
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor
				sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				borum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
				reprehenderit in voluptate "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
				nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
				dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
				id est laborum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
				reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
				laborum."magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
				ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
				esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
				sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor sit amet,
				consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
				aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
				ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
				dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
				qui officia deserunt mollit anim id est la
			</div>
		);
	},
};

const Spirals: BlogPost = {
	title: "Square Spirals",
	date: new Date(2023, 2, 3),
	path: "post6",
	post: function () {
		return (
			<div className='textBlock'>
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor
				sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				borum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
				reprehenderit in voluptate "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
				nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
				dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
				id est laborum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
				reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
				laborum."magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
				ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
				esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
				sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor sit amet,
				consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
				aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
				ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
				dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
				qui officia deserunt mollit anim id est la
			</div>
		);
	},
};

const ThisWebsite: BlogPost = {
	title: "This Website",
	date: new Date(2023, 2, 26),
	path: "post7",
	post: function () {
		return (
			<div className='textBlock'>
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor
				sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				borum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
				reprehenderit in voluptate "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
				nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
				dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
				id est laborum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
				reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
				laborum."magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
				ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
				esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
				sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor sit amet,
				consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
				aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
				ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
				dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
				qui officia deserunt mollit anim id est la
			</div>
		);
	},
};

const ThisBlog: BlogPost = {
	title: "This Blog",
	date: new Date(2023, 2, 27),
	path: "post8",
	post: function () {
		return (
			<div className='textBlock'>
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor
				sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				borum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
				reprehenderit in voluptate "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
				nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
				dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
				id est laborum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
				reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
				laborum."magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
				ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
				esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
				sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor sit amet,
				consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
				aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
				ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
				dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
				qui officia deserunt mollit anim id est la
			</div>
		);
	},
};

const LLMApplications: BlogPost = {
	title: "LLM Applications in the Literacy Crisis",
	date: new Date(2023, 2, 28),
	path: "post9",
	post: function () {
		return (
			<div className='textBlock'>
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor
				sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				borum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
				reprehenderit in voluptate "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
				nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
				dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
				id est laborum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
				reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
				laborum."magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
				ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
				esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
				sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor sit amet,
				consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
				aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
				ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
				dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
				qui officia deserunt mollit anim id est la
			</div>
		);
	},
};

// The footnote component can accept any JSX element or string as a child
// The num prop
function Footnote({
	children,
	num,
	punctuation = ". ",
}: {
	children: JSX.Element | string;
	num: number | string;
	punctuation?: string;
}) {
	const scrollRef = useRef<HTMLSpanElement>(null);
	const [show, setShow] = useState(false);
	const scrollBack = () => {
		// Scroll back to top of footnote
		setShow(false);
	};

	return (
		<>
			<span
				className={"footnoteButton"}
				onClick={() => {
					setShow(!show);
				}}>
				<sup ref={scrollRef} style={{ color: "#de731d" }}>
					[{num}]
				</sup>
				{punctuation}
			</span>

			<Collapse in={show} timeout='auto' unmountOnExit>
				<div className='footnote'>
					<div
						className='footnoteButton'
						onClick={() => {
							setShow(false);
						}}
						style={{ textAlign: "center", marginTop: 0, fontSize: "2em" }}>
						<b>^</b>
					</div>

					{children}
				</div>
				<div style={{ padding: "30px", cursor: "pointer" }} onClick={scrollBack}>
					<hr style={{ borderTop: "1px solid #de731d" }} />
				</div>
			</Collapse>
		</>
	);
}

function CodeBlock({ code }: { code: string }) {
    let borderColor = "0ff";

    let styles = {
      padding: 10,
      margin: 0,
      borderRadius: '0 0 2px 2px',
      borderTop: 'solid 1px ' + borderColor,
	  whiteSpace: "pre-wrap",
	  backgroundColor: "#222",
    };
		useEffect(() => {
		  hljs.highlightAll();
		});
	  
		return (
		  <div>
			<pre>
			  <code className="language-typescript">{code}</code>
			</pre>
		  </div>
		);
	  }

const BlogPosts: BlogPost[] = [
	WordleViewer,
	// ReverseWordleSolver,
	SimCity,
	BotsWillAlwaysWin,
	Commons,
	Spirals,
	ThisWebsite,
	// ThisBlog,
	LLMApplications,
];

export { BlogPosts };
