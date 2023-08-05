/** @format */

import type { BlogPost } from "../../types";
import { CodeBlock, Footnote } from "../../components/BlogComponents";
import systemDiagram1 from "./assets/SimCity/systemDiagram1.png";
import systemDiagram2 from "./assets/SimCity/systemDiagram2.png";
import systemDiagram3 from "./assets/SimCity/systemDiagram3.png";
import systemDiagram4 from "./assets/SimCity/systemDiagram4.png";
import systemDiagram5 from "./assets/SimCity/systemDiagram5.png";
import codeImg1 from "./assets/SimCity/codeImg1.png";
import codeImg2 from "./assets/SimCity/codeImg2.png";

const code1 = `/* comefrom: doEditWindow scoreDoer doMapInFront graphDoer doNilEvent */
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
const code2 = `results = {}
for x in range(1024):
    mod16 = str(x & 15)
    if (results.get(mod16)):
        results[mod16] += 1
    else:
        results[mod16] = 1
print(results)
`;
const code3 = `/* comefrom: SimFrame */
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

const code4 = `Simulate(int mod16)
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
const code5 = `MapScan(int x1, int x2)
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
const code6 = `MapScan(0, 1 * WORLD_X / 8);
MapScan(1 * WORLD_X / 8, 2 * WORLD_X / 8);
MapScan(2 * WORLD_X / 8, 3 * WORLD_X / 8);
MapScan(3 * WORLD_X / 8, 4 * WORLD_X / 8);
MapScan(4 * WORLD_X / 8, 5 * WORLD_X / 8);
MapScan(5 * WORLD_X / 8, 6 * WORLD_X / 8);
MapScan(6 * WORLD_X / 8, 7 * WORLD_X / 8);
MapScan(7 * WORLD_X / 8, WORLD_X);
`;

const code7 = `ClearMap(void)
{
  register short x, y;


  for (x = 0; x < WORLD_X; x++)
    for (y = 0; y < WORLD_Y; y++)
      Map[x][y] = DIRT;
}
`;
const code8 = `MapScan(0, 15);
MapScan(15, 30);
MapScan(30, 45);
MapScan(45, 60);
MapScan(60, 75);
MapScan(75, 90);
MapScan(90, 105);
MapScan(105, 120);`;

const code9 = `/* comefrom: DoIndustrial DoCommercial DoResidential */
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
const code10 = `/* comefrom: DoSPZone MakeTraf */
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

const code11 = `/* comefrom: MakeTraf */
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
const code12 = `DoResidential(int ZonePwrFlg)
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

const code13 = `#define HOSPITAL    409
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

const code14 = `CChr9 = CChr & LOMASK; /* Mask off status bits  */ 
if (CChr9 >= FLOOD) {
    SMapX = x;
    SMapY = y;
    if (CChr9 < ROADBASE) {
      if (CChr9 >= FIREBASE) {
        FirePop++;
        if (!(Rand16() & 3)) DoFire();  /* 1 in 4 times */
        continue;
`;

const code15 = `if (map[y][x].color === buildings.road.color) {
    localBuildings[map[y][x].buildingId].heatMap[buildingCode] = ((1+thisBuilding.level)/(traveled+1));
    }
`;
const code16 = `localBuildings[map[y][x].buildingId]
“The building object located at this tile”


.heatMap[buildingCode]
“The heatmap layer associated with this building type”


((1+thisBuilding.level)/(traveled+1))
“Higher levels add more to the heat map and further distanced add less”
`;

const SimCity: any = {
	title: "How Did SimCity Work?",
	date: new Date(2023, 0, 3),
	path: "simcity",
	post: function () {
		return (
			<div className='textBlock'>
				<p>
					I'm working on a city building web app right now, and I wanted to see how the original
					SimCity
					<Footnote num={1} punctuation=' '>
						Called from here on "SimCity", "SimCity 1989", wrongly "Sim City", and briefly
						"Micropolis"
					</Footnote>{" "}
					dealt with some of the systems theory problems that are inherent to the genre. Modern city
					builders run on more simple but much more computationally expensive systems. Cities
					Skylines, the hegemonic city builder of the last decade, simulates each citizen as an
					individual agent with various wants and needs. The simulation of each citizen is not
					particularly complex, and plenty of optimizations and shortcuts are used to make this
					sustainable, but it remains an incredibly expensive simulation. Cities Skylines is one of
					the very few games left today which actually require decent hardware to run. As a
					cost-conscious developer hoping to run this simulation on a cloud platform, this is a
					problem.
				</p>

				<p>
					The trend of individualizing citizens started with SimCity 2000, which ran off of a much
					more simplified model. Citizens were not persistent, and were not representative of the
					actual population. Instead, they acted as a proxy for the population: would the citizens
					who live in this area have job opportunities nearby? Are their needs for beauty and
					entertainment met? Are they suffering from pollution or crime? It served as a first step
					from the raw mathematical modeling of SimCity to the pachinko machine modeling we see
					today. Though it was a far cry from the obscene complexity of Cities Skylines, the design
					philosophy is identical: the easiest and most realistic way to simulate a city is to
					simulate the people who live in it. It is the Austrian economics of systems theory.
				</p>
				<p>
					Even so, we can imagine a simulation which works in the opposite direction: we could
					derive the behavior of citizens from the social and economic conditions of the city. This
					is how most simulations -- and indeed most games -- choose to structure their systems. A
					3D game engine is a simulation of the physical world which uses vector math to calculate
					what you would see if you were standing in the game world. You could, of course, calculate
					the position and orientation of every object in the game world, cast a series of rays from
					each light source, and render the scene through each pixel which reaches the player's
					eyes. This would be an incredibly accurate simulation of the physical world, but would be
					so computationally expensive that it would be impossible to run on anything but the most
					powerful computers. Instead, we use a series of approximations and shortcuts to make the
					simulation run on a wide variety of hardware. These approximations and shortcuts are not
					even much of a compromise -- each step towards "realism" (ray tracing, ambient occlusion,
					etc) in new game engines sees diminishing returns. It's no contest: the mathematical
					models used to simulate 3D space are pretty much always more useful than an "Austrian"
					simulation. Of course, these mathematical models are incredibly complex and the result of
					decades of innovation. Let's imagine a world where computers are a million times more
					powerful than they are today. Let's also imagine that, in this world, nobody has ever
					thought to render 3D graphics before, and you are the first person to ever try. In this
					world, you would probably start by creating the "Austrian" simulation: every object in the
					world, every light source, every pixel. You would find some good optimizations (only cast
					rays from nearby light sources, lower resolution for distant objects, etc) and you would
					probably get an excellent simulation without requiring the decades of innovation that went
					into modern engines. Sure, the models are still theoretically "better", but the thing we
					have now is more than "good enough" and is less likely to suffer from bugs and innacurate
					system behavior.
				</p>
				<p>
					Let's flip this scenario: what if we lived in a world where computers didn't progress past
					1989? Would Cities Skylines still use the Austrian simulation? Almost certainly not. You
					might be able to strike a balance between the two approaches, as with SimCity 2000, but
					the easy, pachinko approach to grotesque realism would be impossible. In this world, we
					would instead have to rely purely on systems theory. We would have to derive models
					capable of predicting the broad economic and social trends based on the inputs of the
					simulation. The preffered approach to every problem would be more equational than
					procedural.
				</p>
				<p>
					People took this sort of thing very seriously back in the day. The original SimCity,
					released in 1989, was not looked at with the skepticism that we might have for something
					like Cities Skylines today. For one, it was a <i>weird</i> game for its time. Video games
					were about fighting bad guys or racing cars or whatever. They had win states, loss states,
					and points. SimCity had no win state or loss state. There wasn't even an identifiable
					character. It looked more like business software than a game. There were pie charts!
				</p>
				<p>
					In 1990, a local newspaper organized a SimCity competition with all of the Province, RI
					mayoral candidates. This could never happen today. There could never be widespread
					conflation of success in Cities Skylines with success in city planning. But this was a
					different time. Fresh off of the high of the 1980s, having boomed straight through two
					recessions, with neoconservative economics holding complete political and academic
					hegemony, entering the 3rd consecutive term of a Republican president, with the Soviet
					Union sputtering to a close and{" "}
					<a
						href='https://www.cato.org/policy-report/september/october-2017/little-known-story-milton-friedman-china'
						target='_blank'>
						Milton Friedman doing consulting work in China
					</a>
					, the world was different. The idea of a video game that could simulate the economic
					complexity of a city was not that far fetched. Academics believed that economics was close
					to being "solved", that we had the tools to roughly predict the future. When I think about
					the Fukuyamaist "End of History" argument, this mayoral competition is always my first
					thought. We felt so confident in our ability to predict the future that we gave a video
					game enough reverence to use in schools and universities. Academic articles were written
					about{" "}
					<a
						href='https://journals.sagepub.com/doi/abs/10.2190/119M-BRMU-J8HC-XM6F?journalCode=etsa'
						target='_blank'>
						educational applications
					</a>{" "}
					and{" "}
					<a href='https://www.jstor.org/stable/420191' target='_blank'>
						political biases
					</a>{" "}
					in the game. It got{" "}
					<a
						href='https://www.nytimes.com/1989/06/15/garden/making-city-planning-a-game.html'
						target='_blank'>
						a piece
					</a>{" "}
					in the New York Times. More than anything else, all the mayoral candidates in a local
					election felt that an esports competition was a reasonable stand-in for a debate.
					<br />
					<br />
					The candidate who won the competition went on to{" "}
					<a
						href='https://www.vice.com/en/article/ezv7wp/the-real-mayors-of-simcity'
						target='_blank'>
						win the election
					</a>
					. Is it overreaching to say that he won <i>because</i> of this competition? Maybe, who
					cares.
				</p>
				<p>Did you know that SimCity is open source now? Crazy!</p>
				<p>
					The license was relinquished 15 years ago in an apparent collaboration with something
					called the One Laptop Per Child program. The source code is disorganized and filled with
					quirks. The simulation itself was written in C, but the open sourced code is wrapped with
					TCL/TK. SimCity was designed so that the logic of the game was always separated from the
					interface, which allowed it to be ported to, as on British Journal put it, "every known
					computer format"
					<Footnote num={2}>
						<a
							href='https://www.researchgate.net/publication/237011011_Chiaradia_A_and_Yacoub_P_1994_Sim_City_AA_Files_-_Annals_of_the_Architectural_Association_School_of_Architecture_28_pp_86-89'
							target='_blank'>
							Here is that article. I'm not quite sure what the purpose of it is, nor why it's
							in a journal of architecture, but it's pretty thorough. Also "every known computer
							format" is an impossible claim. Even charitably assuming that they mean every
							8-bit or 16-bit consumer format currently in production, not every format could
							run C! Also, the word "known" is funny here. It implies the existence of
							yet-undiscovered, clandestine computer formats.
						</a>
					</Footnote>{" "}
					They also included a Python-wrapped C++ version of the simulation, but from what I can
					gather this is was a purely academic exercise. I can't find any evidence that it was ever
					released in a non-educational context.
				</p>
				<p>
					In the interest of staying within GCP's free tier, I'm going to see if I can figure out
					how Will Wright designed a city simulation that could run on a Commodore 64. Since the
					simulation code is clearly delineated from the interface, open source, and C, I see no
					reason not to just dive in. A lot has been written about the design of SimCity -- and I'll
					make use of this throughout the article -- but I had questions about specific systems (the
					traffic system more than anything else) that are underdocumented elsewhere.
				</p>
				<p>
					There are plenty of initialization steps, but we may as well skip ahead to the SimFrame
					function. Many functions call it, and it is one of the few simulation functions that can
					be called from the wrapper. It seems to simulate each tick of simulation within the
					engine.
				</p>
				<CodeBlock code={code1} />
				<p>
					After initializing a variable with a purpose that is unclear to me, it checks to see if
					the game is paused (SimSpeed == 0) and returns if so. It then iterates the current cycle
					after ensuring that doing so won’t cause an overflow. The way game speed is handled is
					clever. In the case that the Speed is 1, the simulation only runs every 5th frame. If
					speed is 2, it only runs 3rd frame. If speed is set to 3, it skips no frames.
					Interestingly, this means that the 4 speeds set the game to 0%, 20%, 33%, and 100% of
					processor speed respectively. Why not a Spdcycle % 2?
				</p>

				<p>
					The last part is completely Greek to me. It iterates Fcycle – similar to Spdcycle except
					it only iterates on an "active" simulation frame – after ensuring no overflow, then runs
					the simulation with the input variable mod16, which is derived from a bitwise ‘and’
					between Fcycle and 15 (1111 in binary). I ran this through a quick python script to see
					the result.
				</p>
				<CodeBlock code={code2} language='Python' />
				<p>
					The results showed that in 1024 cycles, mod16 will return each value between 0 and 15
					exactly 64 times. Cool alternative to nested loops / multiple iterator variables. Also,
					converting a bitwise operation to a string felt weird. Like wearing a suit to a track
					meet.
				</p>

				<p>
					After this is a beautiful function, <i>Simulate</i>
				</p>
				<CodeBlock code={code3} />
				<p>
					{" "}
					This a lot to go through, but it should hold pretty much everything that matters. I'll
					move piece by piece.{" "}
				</p>
				<CodeBlock code={code4} />
				<p>
					The shortened naming convention makes things a harder than they need to be, and they
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
					I can’t find anything useful on WORLD_X, but from this snippet in the ClearMap() function
					in s_gen.c:{" "}
				</p>
				<CodeBlock code={code7} />
				<p>
					It definitely looks like it’s a constant representing the width of the map measured in
					tiles. I happen to know that the SimCity map is 120x100, so Let’s replace WORLD_X by 120.
					Therefore, the scans become:
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
					project to figure out how Will Wright dealt with traffic, so this is a huge blessing.
					Here’s the code:
				</p>
				<CodeBlock code={code9} />
				<p>Misspelled “successful” – that’s another pull request. FindPRoad() looks like this:</p>
				<CodeBlock code={code10} />
				<p>
					{" "}
					Some quick comments: the values for where to find a road perimeter is hardcoded to 3x3
					zones! Very interesting. It starts on the left end of the bottom and works
					counterclockwise. Interestingly, this would have real gameplay consequences: you can
					increase your buildings max searchable distance by only placing roads in the desired
					direction. TryDrive() looks like this:
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
				<p>
					The function begins by increasing the ResZPop (residential zone population) variable. Then
					it checks if the current tile is a free zone (which isn’t subject to zoning policies) or
					not. If it is, it adds the population from the DoFreePop() function. Otherwise, it adds
					the population from the RZPop() function. Then it checks if the population is greater than
					a random number (35) - if it is, it calls MakeTraf(), which finds a road and sets the
					traffic density along it.
				</p>
				<p>
					Next, it evaluates the current tile using the EvalRes() function. This function checks the
					traffic conditions, pollution levels, and other factors to determine a score for the tile.
					This score is then compared to a random number - if the score is greater than the random
					number, the tile is zoned for residential use and the population is added. If the score is
					less than the random number, the tile is zoned out and the population is removed. Finally,
					there’s a small chance that the tile will be zoned for a hospital instead of residential.
					We could keep going building by building, but it would be a lot of the same. I think now
					that we've seen the general lifecycle of the simulation, we can start accelerating towards
					the bigger picture.
				</p>
				<hr />
				<p>
					{" "}
					Chaim Gingold, a developer who worked with Will Wright on Spore, wrote on the design of
					SimCity as part of his PhD dissertation. Here’s a link, the relevant section starts on
					page 297
					<Footnote num={3}>
						On the PDF it's page 323. I hate it when the PDF numbers aren't synced with the
						hardcoded numbers.
					</Footnote>
				</p>
				<p>
					Gingold opens with a high-level representation of the simulation
					<img src={systemDiagram1} alt='High-level representation of the simulation' />
					He also includes a handy visual representation of the 16-step simulation structure. This includes
					the 8 map scan steps as well as the 8 simulation steps.
					<img src={systemDiagram2} alt='High-level representation of the simulation' />
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
					First, what’s up with CChr9? This was a question which was beating me up for a while.
					However, I’m proud to say I’ve figured it out (due to someone else figuring it
					out for me).
				</p>
				<p>
					Each tile on the SimCity map uses 16 bits.
					<img src={systemDiagram3} alt='High-level representation of the simulation' />
					16 bits! The first 10 are a reference and everything else the game needs to know is in
					the last 6. My map tiles use 16 bits just for the index. Ridiculous.
				</p>
				<p>
					The first 10 correspond to one of the 956 possible tile sprites, and the last 6 correspond
					to various boolean variables about the tile. Based on this “Masking off status bits” can
					be reasonably assumed to mean isolating the first 10 bits, and in this case LOMASK must
					look something like 1111111111 (1023) or 1111111111000000 (65472) depending on how C's
					masking works.
				</p>
				<img src={codeImg1} alt='High-level representation of the simulation' />
				<p>
					{" "}
					That clears that up. So CChr9 is just the spritemap location of each tile. Tile data is organized in such a
					way that groups of similar behavior are adjacent, so rather than assigning each ID a
					separate behavior we can just check a range. In the example above, we check if the ID is
					greater than “FLOOD” before giving a chance of catching fire. The ID map around FLOOD looks like this:
				</p>
				<img src={codeImg2} alt='High-level representation of the simulation' />

				<p>
					Since FLOOD is 48, all tiles below it are fireproof. I would argue that woods and trees should be in the flammable category, but the behavior is clear:
					anything naturally generated by the world won’t catch on fire, but anything the
					player places can.{" "}
				</p>

				<p>
					Even crazier than the fact that there are only 16 bits per tile is that the tiles do not
					point to anything. This was the biggest revelation to me in this whole investigation: the
					original simcity did not keep track of what buildings were where. When buildings were
					demolished, they ran a function which found all the other tiles in the building and
					deleted them that way. There is a tile at the center of every zone which has ZONEBIT on,
					so when you need to operate only once per building (like to check power, create traffic,
					etc) you have a single tile to check. This is a bit inefficient because it means that
					every time you need to check buildings you have to check every tile in the map, but this
					could be easly solved by maintaining a list of all ZONEBIT tile coordinates. Maybe this already
					exists somewhere in the code, but I never found one.
				</p>

				<p>
					I finally come to the answer to my original question, and it isn’t pretty.
					<img src={systemDiagram5} alt='High-level representation of the simulation' />I doubt I can
					do this justice, but I can try. For a better (and much more granular) explanation,
					check out the dissertation.
				</p>

				<p>
					What is a valve? According to Gingold, it regulates and limits the flow of information
					between different simulation agents. This concept comes from Jay Forrester, an early
					influential computer engineer and the system dynamicist. The concept makes intuitive
					sense: if every time you added something to your city it immediately reached its economic
					equilibrium, it wouldn’t feel like much of a simulation at all. A valve is a way to
					simulate the slow, imperfect way that economic systems try to reach their end-point.
					You configure the reaction speed to new stimuli. RValve CValve and IValve
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
					Here’s my problem with this: what happened to modularity? The cellular automata structure
					was so elegant, and now it seems like the RCI structure is moving back in the direction of
					whole-set calculation. The confidence of the cellular automata philosophy seems broken by this
					manual adjustment away from the suppy and demand structures present within each building.
					I’m sure this is a result of hardware limitation, but it does seem
					like a step backwards. The philosophy of a cellular automata model is very promising, particularly
					for scalability. In my project I hope to make a theoretically infinite map of interoperable cities,
					and whole set calculation would increase the complexity of the simulation significantly.
					However, removing whole set calculation from this model is no easy task. It requires a localization
					of all the economic forces of the city. Of course, this itself is similar to the SimCity 2000 model
					of simulating individual agents as a proxy for macroeconomic forces.
					All roads lead back to Austria apparently.
					<br />

					My ideal configuration might look like this:
				</p>

				<p>
					Every zone gets its valve score by itself, the same way it might contribute to traffic.
					You have a set of commercial, industrial, and residential agents. Whether they are
					individual tiles or abstract objects shouldn’t matter too much. [3/30/2023: It ended up mattering a lot]
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
							linear<Footnote num={4}><>We could say instead that Commercial zones “need to sell to customers in order
								to buy goods from industry”, but Residential zones could NOT say that they
								“need to buy goods from commercial zones in order to get employed at commercial and
								industrial zones”<Footnote num={4.5}>I guess that you could say this in an abstract way, but not in a way relevant to
									sub-simulations</Footnote></></Footnote>
						</li>
					</ul>
				</p>

				<p>
					So we naturally want to start with residential zones. We start with individual node
					searches:
					<ol>
						<li>
							Residential zones search for jobs in their vicinity. The number of residents willing to work
							is dependent on distance<Footnote num={5} punctuation=", ">For example, 100% of residents are willing to work
								within 5 tiles, 90% within 10, 66% within 20, 33% within 30, 10% within 40 and so on,</Footnote>and the percentage employed is then taken as an input.
							You end up with 4 distinct variables that must be stored, updated, and made accessible to other buildings:
							<ol type='a'>
								<li>
									Employment rate is the population divided by jobs found. When this is suitably
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
							industrial zone. You get 4 variables here too:
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
							Commercial zones record when they are pinged by residential and industrial zones. Because of the dual nature of commerial zones, you need 6 variables:
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
				<p>
					This system is a noted simplification of the SimCity model using SimCity 2000 design principles.
					However, it is a good starting point for a simulation that can be scaled up to a theoretically
					infinite number of zones. The modularity also means that additional features, like power or water,
					can be added without too much trouble. Of course, this is an untested system and system theory problems
					are notoriously unpredictable. The only way to know for sure is to try it out.
				</p>
			</div>
		);
	},
};

export default SimCity;
