'use strict';

/** 
 * X86 Registers .
 */
var REG_AH = 1;
var REG_AL = 2;
var REG_AX = 3;
var REG_BH = 4;
var REG_BL = 5;
var REG_BP = 6;
var REG_BPL = 7;
var REG_BX = 8;
var REG_CH = 9;
var REG_CL = 10;
var REG_CS = 11;
var REG_CX = 12;
var REG_DH = 13;
var REG_DI = 14;
var REG_DIL = 15;
var REG_DL = 16;
var REG_DS = 17;
var REG_DX = 18;
var REG_EAX = 19;
var REG_EBP = 20;
var REG_EBX = 21;
var REG_ECX = 22;
var REG_EDI = 23;
var REG_EDX = 24;
var REG_EFLAGS = 25;
var REG_EIP = 26;
var REG_EIZ = 27;
var REG_ES = 28;
var REG_ESI = 29;
var REG_ESP = 30;
var REG_FPSW = 31;
var REG_FS = 32;
var REG_GS = 33;
var REG_IP = 34;
var REG_RAX = 35;
var REG_RBP = 36;
var REG_RBX = 37;
var REG_RCX = 38;
var REG_RDI = 39;
var REG_RDX = 40;
var REG_RIP = 41;
var REG_RIZ = 42;
var REG_RSI = 43;
var REG_RSP = 44;
var REG_SI = 45;
var REG_SIL = 46;
var REG_SP = 47;
var REG_SPL = 48;
var REG_SS = 49;
var REG_CR0 = 50;
var REG_CR1 = 51;
var REG_CR2 = 52;
var REG_CR3 = 53;
var REG_CR4 = 54;
var REG_CR5 = 55;
var REG_CR6 = 56;
var REG_CR7 = 57;
var REG_CR8 = 58;
var REG_CR9 = 59;
var REG_CR10 = 60;
var REG_CR11 = 61;
var REG_CR12 = 62;
var REG_CR13 = 63;
var REG_CR14 = 64;
var REG_CR15 = 65;
var REG_DR0 = 66;
var REG_DR1 = 67;
var REG_DR2 = 68;
var REG_DR3 = 69;
var REG_DR4 = 70;
var REG_DR5 = 71;
var REG_DR6 = 72;
var REG_DR7 = 73;
var REG_DR8 = 74;
var REG_DR9 = 75;
var REG_DR10 = 76;
var REG_DR11 = 77;
var REG_DR12 = 78;
var REG_DR13 = 79;
var REG_DR14 = 80;
var REG_DR15 = 81;
var REG_FP0 = 82;
var REG_FP1 = 83;
var REG_FP2 = 84;
var REG_FP3 = 85;
var REG_FP4 = 86;
var REG_FP5 = 87;
var REG_FP6 = 88;
var REG_FP7 = 89;
var REG_K0 = 90;
var REG_K1 = 91;
var REG_K2 = 92;
var REG_K3 = 93;
var REG_K4 = 94;
var REG_K5 = 95;
var REG_K6 = 96;
var REG_K7 = 97;
var REG_MM0 = 98;
var REG_MM1 = 99;
var REG_MM2 = 100;
var REG_MM3 = 101;
var REG_MM4 = 102;
var REG_MM5 = 103;
var REG_MM6 = 104;
var REG_MM7 = 105;
var REG_R8 = 106;
var REG_R9 = 107;
var REG_R10 = 108;
var REG_R11 = 109;
var REG_R12 = 110;
var REG_R13 = 111;
var REG_R14 = 112;
var REG_R15 = 113;
var REG_ST0 = 114;
var REG_ST1 = 115;
var REG_ST2 = 116;
var REG_ST3 = 117;
var REG_ST4 = 118;
var REG_ST5 = 119;
var REG_ST6 = 120;
var REG_ST7 = 121;
var REG_XMM0 = 122;
var REG_XMM1 = 123;
var REG_XMM2 = 124;
var REG_XMM3 = 125;
var REG_XMM4 = 126;
var REG_XMM5 = 127;
var REG_XMM6 = 128;
var REG_XMM7 = 129;
var REG_XMM8 = 130;
var REG_XMM9 = 131;
var REG_XMM10 = 132;
var REG_XMM11 = 133;
var REG_XMM12 = 134;
var REG_XMM13 = 135;
var REG_XMM14 = 136;
var REG_XMM15 = 137;
var REG_XMM16 = 138;
var REG_XMM17 = 139;
var REG_XMM18 = 140;
var REG_XMM19 = 141;
var REG_XMM20 = 142;
var REG_XMM21 = 143;
var REG_XMM22 = 144;
var REG_XMM23 = 145;
var REG_XMM24 = 146;
var REG_XMM25 = 147;
var REG_XMM26 = 148;
var REG_XMM27 = 149;
var REG_XMM28 = 150;
var REG_XMM29 = 151;
var REG_XMM30 = 152;
var REG_XMM31 = 153;
var REG_YMM0 = 154;
var REG_YMM1 = 155;
var REG_YMM2 = 156;
var REG_YMM3 = 157;
var REG_YMM4 = 158;
var REG_YMM5 = 159;
var REG_YMM6 = 160;
var REG_YMM7 = 161;
var REG_YMM8 = 162;
var REG_YMM9 = 163;
var REG_YMM10 = 164;
var REG_YMM11 = 165;
var REG_YMM12 = 166;
var REG_YMM13 = 167;
var REG_YMM14 = 168;
var REG_YMM15 = 169;
var REG_YMM16 = 170;
var REG_YMM17 = 171;
var REG_YMM18 = 172;
var REG_YMM19 = 173;
var REG_YMM20 = 174;
var REG_YMM21 = 175;
var REG_YMM22 = 176;
var REG_YMM23 = 177;
var REG_YMM24 = 178;
var REG_YMM25 = 179;
var REG_YMM26 = 180;
var REG_YMM27 = 181;
var REG_YMM28 = 182;
var REG_YMM29 = 183;
var REG_YMM30 = 184;
var REG_YMM31 = 185;
var REG_ZMM0 = 186;
var REG_ZMM1 = 187;
var REG_ZMM2 = 188;
var REG_ZMM3 = 189;
var REG_ZMM4 = 190;
var REG_ZMM5 = 191;
var REG_ZMM6 = 192;
var REG_ZMM7 = 193;
var REG_ZMM8 = 194;
var REG_ZMM9 = 195;
var REG_ZMM10 = 196;
var REG_ZMM11 = 197;
var REG_ZMM12 = 198;
var REG_ZMM13 = 199;
var REG_ZMM14 = 200;
var REG_ZMM15 = 201;
var REG_ZMM16 = 202;
var REG_ZMM17 = 203;
var REG_ZMM18 = 204;
var REG_ZMM19 = 205;
var REG_ZMM20 = 206;
var REG_ZMM21 = 207;
var REG_ZMM22 = 208;
var REG_ZMM23 = 209;
var REG_ZMM24 = 210;
var REG_ZMM25 = 211;
var REG_ZMM26 = 212;
var REG_ZMM27 = 213;
var REG_ZMM28 = 214;
var REG_ZMM29 = 215;
var REG_ZMM30 = 216;
var REG_ZMM31 = 217;
var REG_R8B = 218;
var REG_R9B = 219;
var REG_R10B = 220;
var REG_R11B = 221;
var REG_R12B = 222;
var REG_R13B = 223;
var REG_R14B = 224;
var REG_R15B = 225;
var REG_R8D = 226;
var REG_R9D = 227;
var REG_R10D = 228;
var REG_R11D = 229;
var REG_R12D = 230;
var REG_R13D = 231;
var REG_R14D = 232;
var REG_R15D = 233;
var REG_R8W = 234;
var REG_R9W = 235;
var REG_R10W = 236;
var REG_R11W = 237;
var REG_R12W = 238;
var REG_R13W = 239;
var REG_R14W = 240;
var REG_R15W = 241;
var REG_IDTR = 242;
var REG_GDTR = 243;
var REG_LDTR = 244;
var REG_TR = 245;
var REG_FPCW = 246;
var REG_FPTAG = 247;
var REG_MSR = 248;

/** 
 * FLAGS 1Bit .
*/
var FLAG_CF = 1;    // Carry flag .
var FLAG_PF = 2;    // Parity flag .
var FLAG_AF = 3;    // Adjust flag .
var FLAG_ZF = 4;    // Zero flag .
var FLAG_SF = 5;    // Sign flag .
var FLAG_TF = 6;    // Trap flag (single step) .
var FLAG_IF = 7;    // Interrupt enable flag .
var FLAG_DF = 8;    // Direction flag .
var FLAG_OF = 9;    // Overflow flag .
var FLAG_NT = 10;   // Nested task flag (286+ only), always 1 on 8086 and 186 .
var FLAG_IOPL = 11; // {2Bits} I/O privilege level (286+ only), always 1 on 8086 and 186 .
/** 
 * EFLAGS 1 Bit.
 */
var FLAG_RF = 12;  // Resume flag (386+ only) .
var FLAG_VM = 13;  // Virtual 8086 mode flag (386+ only) .
var FLAG_AC = 14;  // Alignment check (486SX+ only) .
var FLAG_VIF= 15;  // Virtual interrupt flag (Pentium+) .
var FLAG_ID = 16;  // Able to use CPUID instruction (Pentium+).
var FLAG_VIP = 17; // Virtual interrupt pending (Pentium+).
var FLAG_ID2 = 18; // Able to use CPUID instruction (Pentium+).
var FLAG_VAD = 19; // {2Bits} VAD Flag .