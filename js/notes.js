// RBB Level 5 IT Assistant Study Notes Database
window.studyNotes = {
  1: {
    title: "Chapter 1: Introduction of Computer",
    topics: [
      {
        id: "1.1",
        title: "Types of Computers: Analog, Digital, Hybrid, Mainframe & Super Computer",
        notes: `<p>Computers are categorized by their data representation methods and physical capabilities. Understanding their differences is essential for banking infrastructure design:</p>
        <ul>
          <li><strong>Analog Computers:</strong> Process continuous physical quantities (voltages, currents, pressure, rotations). They operate in real-time without converting inputs to numerical digits, making them highly responsive but less precise.</li>
          <li><strong>Digital Computers:</strong> Work exclusively on discrete numerical data in binary format (0s and 1s). They offer high precision, storage capacity, and logical programmability.</li>
          <li><strong>Hybrid Computers:</strong> Contain elements of both analog and digital designs. They measure physical variables continuously (analog) and convert them to discrete values (digital) for logical processing.</li>
          <li><strong>Mainframe Computers:</strong> Multi-user computers optimized for high security, massive storage capacity, and extreme transaction input/output (I/O) processing speeds. Speed is measured in MIPS (Million Instructions Per Second).</li>
          <li><strong>Supercomputers:</strong> The fastest computers in the world, optimized for execution of complex scientific, floating-point calculations rather than database transactions. Speed is measured in FLOPS (Floating Point Operations Per Second).</li>
        </ul>
        <div class="nepal-example-box">
          <strong>🇳🇵 Real-Life Nepal Applications:</strong>
          <ul>
            <li><strong>Analog:</strong> Traditional needle speedometers inside microbuses on the Prithvi Highway, or mechanical water meters of KUKL.</li>
            <li><strong>Digital:</strong> Core banking terminals of RBB executing customer deposits, or the Nagarik App on your mobile.</li>
            <li><strong>Hybrid:</strong> Digital petrol dispensers at Nepal Oil Corporation (NOC) dealer pumps, where the analog nozzle measures fluid flow and an internal digital processor calculates the exact price and volume display. Also, ECG monitors in Bir Hospital.</li>
            <li><strong>Mainframe:</strong> Central interbank clearing hubs of Nepal Clearing House Limited (NCHL) and central subscriber databases at Nepal Telecom (NTC).</li>
            <li><strong>Supercomputer:</strong> High-performance computing (HPC) system at Kathmandu University (KU) used for climate modeling and glacial lake flood simulations in the Himalayas.</li>
          </ul>
        </div>`
      },
      {
        id: "1.2",
        title: "Basic Knowledge of Internet/Email System & Web Design",
        notes: `<p>Electronic communication and web design form the backbone of modern remote banking portals:</p>
        <ul>
          <li><strong>SMTP (Simple Mail Transfer Protocol):</strong> The standard protocol used to push/send emails from client programs (like Outlook) to mail servers. Default unencrypted port is <strong>25</strong> (secure SSL/TLS uses <strong>465/587</strong>).</li>
          <li><strong>POP3 (Post Office Protocol version 3):</strong> Downloads mail files from the mail server to the local client hard drive, and by default, immediately deletes them from the server. Best for single-user offline reading. Port: <strong>110</strong>.</li>
          <li><strong>IMAP (Internet Message Access Protocol):</strong> Synchronizes email state between server and clients, leaving messages stored on the server. Allows multi-device access. Port: <strong>143</strong>.</li>
          <li><strong>URL (Uniform Resource Locator):</strong> The global reference format used to locate resources on the web (e.g. protocol + domain + path).</li>
          <li><strong>HTML CSS Box Model:</strong> Layout system where every web element is represented as a box:
            <ul>
              <li><strong>Content:</strong> The text or image itself.</li>
              <li><strong>Padding:</strong> Transparent area immediately surrounding the content (inside the border).</li>
              <li><strong>Border:</strong> Outline wrapping the padding and content.</li>
              <li><strong>Margin:</strong> Spacing outside the border, creating distance between adjacent HTML elements.</li>
            </ul>
          </li>
        </ul>
        <div class="nepal-example-box">
          <strong>🇳🇵 Real-Life Nepal Applications:</strong>
          When RBB sets up email accounts for branch managers, they configure <strong>IMAP</strong> so the managers can securely read the same emails on their branch desktops and official smartphones without emails getting deleted. The RBB online banking website uses <strong>CSS Margins</strong> to keep security alert boxes separated from login fields to ensure a clean user interface.
        </div>`
      },
      {
        id: "1.3",
        title: "Basic Knowledge of Physical Security of IT Infrastructure",
        notes: `<p>Physical security controls protect data center hardware from physical entry, theft, and environmental disasters:</p>
        <ul>
          <li><strong>Access Control:</strong> Restricting access to server vaults using smart identity cards, physical keypad locks, or **Biometric scanners** (fingerprint, face, or iris recognition).</li>
          <li><strong>Mantrap:</strong> A physical entryway configuration consisting of two interlocking doors. The second door will not unlock until the first entry door is fully closed and the user's identity is authenticated inside the vestibule, preventing tailgating (unauthorized people slipping in behind an employee).</li>
          <li><strong>Gaseous Fire Suppression:</strong> Water or foam destroys server chips. Data centers use clean gaseous agents (such as <strong>FM-200</strong> or <strong>Novec 1230</strong>). These gases extinguish fires by absorbing heat energy and disrupting combustion at the molecular level, leaving zero residue.</li>
        </ul>
        <div class="nepal-example-box">
          <strong>🇳🇵 Real-Life Nepal Applications:</strong>
          Commercial banks like RBB secure their primary production data center in Kathmandu and their Disaster Recovery (DR) site in Hetauda using <strong>mantraps</strong> at server room entrances. Their server racks are protected by **FM-200 gas systems** which automatically flood the sealed server rooms if smoke is detected, protecting the multi-million rupee server hardware from both fire and water damage.
        </div>`
      },
      {
        id: "1.4",
        title: "Basic Knowledge of Artificial Intelligence (AI), Machine Learning (ML) & Blockchain",
        notes: `<p>Disruptive software technologies driving automated automation, data analytics, and transaction security:</p>
        <ul>
          <li><strong>Artificial Intelligence (AI):</strong> Building systems capable of performing tasks that traditionally require human intelligence (problem solving, pattern recognition, learning).</li>
          <li><strong>Machine Learning (ML):</strong> A subfield of AI where models learn patterns from historical datasets:
            <ul>
              <li><strong>Supervised:</strong> Trained on labeled data (mapping inputs to known correct outputs).</li>
              <li><strong>Unsupervised:</strong> Trained on unlabeled data, finding hidden clusters or patterns on its own.</li>
              <li><strong>Reinforcement:</strong> Agent learns by trial and error using reward and penalty feedback signals.</li>
            </ul>
          </li>
          <li><strong>Blockchain:</strong> A distributed, immutable database ledger. Blocks are chained together using **cryptographic hashes**. It is protected by consensus protocols like **Proof of Work (PoW)**, which requires mining rigs to solve complex mathematical puzzles to validate blocks. <strong>Smart Contracts</strong> are self-executing code logic stored directly on the blockchain nodes that trigger transactions automatically when set criteria are met.</li>
        </ul>
        <div class="nepal-example-box">
          <strong>🇳🇵 Real-Life Nepal Applications:</strong>
          <ul>
            <li><strong>ML:</strong> Nepalese banks use supervised machine learning algorithms to predict customer loan defaults by checking credit bureau records.</li>
            <li><strong>AI:</strong> E-commerce platforms like Daraz use AI chatbots to handle customer queries in Nepal.</li>
            <li><strong>Blockchain:</strong> Import processes can use smart contracts where payments (via Letter of Credit) are automatically released to global suppliers the moment Nepal Customs logs the shipment arrival at the Birgunj dry port.</li>
          </ul>
        </div>`
      }
    ]
  },
  2: {
    title: "Chapter 2: Computer Architecture",
    topics: [
      {
        id: "2.1",
        title: "Basic Computer Architecture, Registers & Memory Management",
        notes: `<p>Computer architecture defines the functional connection of CPU, memory, and bus lines. Registers are the highest speed memory locations situated directly inside the processor chip:</p>
        <ul>
          <li><strong>Program Counter (PC):</strong> Register that holds the memory address of the next instruction to be fetched and executed.</li>
          <li><strong>Memory Address Register (MAR):</strong> Holds the physical memory address currently being read from or written to by the CPU.</li>
          <li><strong>Memory Buffer Register (MBR) / Memory Data Register (MDR):</strong> Holds the actual data block read from or written to the memory address located in the MAR.</li>
          <li><strong>Instruction Register (IR):</strong> Stores the binary machine code instruction currently being decoded and executed.</li>
          <li><strong>Accumulator (AC):</strong> Register that temporarily stores intermediate logical and arithmetic results from the ALU.</li>
          <li><strong>Virtual Memory:</strong> A memory management technique that uses a portion of the secondary hard drive (pagefile/swap space) to extend physical RAM. When RAM is full, the OS swaps idle pages to the disk. If swapping happens excessively, it causes **Thrashing** (CPU spends more time swapping than executing).</li>
        </ul>
        <div class="nepal-example-box">
          <strong>🇳🇵 Real-Life Nepal Applications:</strong>
          When an RBB teller opens their Core Banking System (Pumori/Finacle), Microsoft Excel, and multiple browser tabs at the same time, the system RAM might get filled. The Windows OS uses **Virtual Memory** on the local C: drive to keep the computer running without crashing, though the teller will notice the system slows down due to hard disk swap file delays.
        </div>`
      },
      {
        id: "2.2",
        title: "Organization of Hard Disk",
        notes: `<p>Magnetic hard disks organize data logically and physically to optimize disk access speeds:</p>
        <ul>
          <li><strong>Physical Platters:</strong> Magnetic platters spin on a central spindle. Read/write heads float on an arm above the surface.</li>
          <li><strong>Tracks:</strong> Concentric circular rings formatted on the platter surfaces.</li>
          <li><strong>Sectors:</strong> Smallest addressable physical block on a track. Traditional sectors store **512 bytes** of data. Modern Advanced Format (AF) drives store **4096 bytes (4 KB)** to reduce ECC overhead.</li>
          <li><strong>Cylinder:</strong> The set of all tracks of the same diameter across all platter surfaces. Cylinders allow reading multiple tracks without moving the physical read/write head arm, reducing seek time.</li>
          <li><strong>NTFS (New Technology File System):</strong> Standard file system for Windows OS, supporting file permissions (ACLs), encryption (EFS), disk quotas, compression, and file journaling (preventing corruptions).</li>
        </ul>
        <div class="nepal-example-box">
          <strong>🇳🇵 Real-Life Nepal Applications:</strong>
          When formatting RBB branch desktop hard drives, IT assistants partition them using <strong>NTFS</strong> rather than older FAT32. This ensures that folders containing salary records can have strict Windows user permission settings, and files larger than 4GB (such as database backup files) can be saved successfully.
        </div>`
      },
      {
        id: "2.3",
        title: "CPU Architecture: ALU, CU & System Bus",
        notes: `<p>The CPU consists of three core components that manage the instruction execution cycle:</p>
        <ul>
          <li><strong>Arithmetic Logic Unit (ALU):</strong> Executes calculations (addition, subtraction, multiplication) and logical comparisons (equal to, greater than, AND/OR conditions).</li>
          <li><strong>Control Unit (CU):</strong> The operational brain. It fetches instructions from memory, interprets (decodes) them, and sends sync pulses (control signals) to other hardware components.</li>
          <li><strong>System Bus:</strong> Parallel copper lines connecting CPU, memory, and I/O devices:
            <ul>
              <li><strong>Data Bus:</strong> Bidirectional lines that carry actual data values.</li>
              <li><strong>Address Bus:</strong> Unidirectional lines carrying the address of memory locations. A 32-bit address bus can access up to $2^{32}$ bytes (4 GB) of RAM.</li>
              <li><strong>Control Bus:</strong> Carries control signals (Memory Read, Memory Write, I/O Interrupts).</li>
            </ul>
          </li>
        </ul>
        <div class="nepal-example-box">
          <strong>🇳🇵 Real-Life Nepal Applications:</strong>
          When RBB's core database checks if a customer has sufficient balance for an ATM withdrawal, the **ALU** performs the logical comparison ($Balance \\ge Withdrawal$). The **Control Unit** routes this check request from memory, and the **Address Bus** specifies the exact RAM coordinates where the customer's account balance variable is stored.
        </div>`
      },
      {
        id: "2.4",
        title: "I/O Management & Interfaces: Programmed, Interrupt & DMA",
        notes: `<p>Operating systems communicate with physical peripherals using distinct input/output management styles:</p>
        <ul>
          <li><strong>Programmed I/O:</strong> The CPU directly controls the transfer. The CPU must continuously query (poll) the device status in a loop to check if data is ready. Wastes massive CPU cycles.</li>
          <li><strong>Interrupt-Driven I/O:</strong> The CPU sends commands to the device and continues running other programs. When the device completes the task, it sends an electrical **Interrupt** signal to the CPU. The CPU temporarily stops its work, runs the Interrupt Service Routine (ISR) to handle the data, and returns to its previous task.</li>
          <li><strong>Direct Memory Access (DMA):</strong> Used for high-speed devices (like hard disks). The DMA controller takes over the system bus, transferring blocks of data directly between the device and RAM without routing it through the CPU core, interrupting the CPU only when the entire block transfer is complete.</li>
        </ul>
        <div class="nepal-example-box">
          <strong>🇳🇵 Real-Life Nepal Applications:</strong>
          When an RBB teller prints a statement on a passbook printer:
          - A keystroke on the keyboard triggers an **Interrupt** to capture input.
          - The printer transfer of thousands of characters uses **DMA** to write data directly to the printer controller, allowing the teller's computer to remain responsive rather than freezing during printing.
        </div>`
      }
    ]
  },
  3: {
    title: "Chapter 3: Communication & Networks",
    topics: [
      {
        id: "3.1",
        title: "Networking Devices: Repeater, Hub, Switch & Router",
        notes: `<p>Networking hardware connects nodes across local and wide-area environments. They operate at distinct layers of the OSI model:</p>
        <ul>
          <li><strong>Repeater (OSI Layer 1 - Physical):</strong> Receives weakened electrical or optical signals, amplifies/regenerates them, and sends them out. Does not read addresses.</li>
          <li><strong>Hub (OSI Layer 1):</strong> A multiport repeater. It broadcasts all incoming data frames to every connected port. This creates massive traffic collision issues and security risks.</li>
          <li><strong>Switch (OSI Layer 2 - Data Link):</strong> Learns the physical MAC addresses of connected devices and populates a CAM table. It forwards incoming frames strictly to the port where the destination MAC resides, eliminating network collisions.</li>
          <li><strong>Router (OSI Layer 3 - Network):</strong> Connects different IP subnets. It reads logical IP headers to determine the best path to route packets across networks.</li>
        </ul>
        <div class="nepal-example-box">
          <strong>🇳🇵 Real-Life Nepal Applications:</strong>
          In an RBB branch in Pokhara:
          - A **Switch** connects local teller desktops together so they can share local files without network collisions.
          - A **Router** connects the Pokhara branch network over a secure VPN leased line to RBB's central head office servers in Singhadurbar, Kathmandu.
        </div>`
      },
      {
        id: "3.2",
        title: "Switching Technologies, Modems & Error Detection/Correction",
        notes: `<p>Data transmission across networks requires efficient routing paths and error-free delivery frameworks:</p>
        <ul>
          <li><strong>Circuit Switching:</strong> Establishes a dedicated, continuous physical pathway between sender and receiver before transmission (e.g. analog telephone lines). Guaranteed bandwidth but inefficient resource use.</li>
          <li><strong>Packet Switching:</strong> Splits data into small packets containing header addresses. Packets are routed dynamically across shared lines, allowing optimal line utilization.</li>
          <li><strong>Modem (Modulator-Demodulator):</strong> Converts digital signals from computer buses into analog signals for telephone copper lines (modulation), and translates analog back to digital at the receiving end (demodulation).</li>
          <li><strong>Parity Check:</strong> Adds an extra bit to a byte to make the total count of 1s even or odd. Can only detect single-bit errors. Fails if an even number of bits flip.</li>
          <li><strong>CRC (Cyclic Redundancy Check):</strong> Divides data bits by a generator polynomial and appends the remainder as a checksum. Excellent for detecting burst errors on network lines.</li>
          <li><strong>Hamming Code:</strong> An error-correcting code (ECC) that uses redundant parity bits to detect double-bit errors and locate and correct single-bit errors in real-time without requesting retransmission.</li>
        </ul>
        <div class="nepal-example-box">
          <strong>🇳🇵 Real-Life Nepal Applications:</strong>
          Banking transactions use **Packet Switching** over the internet (TCP/IP) to send transfer requests. If noise on a dial-up modem line in a remote Rallipath branch flips a transaction bit, the network card detects it using **CRC** and drops the packet, requesting a clean retransmission to prevent corrupting transaction data.
        </div>`
      },
      {
        id: "3.3",
        title: "Internet Services & IP Addressing: Subnetting & CIDR",
        notes: `<p>IP addressing uniquely identifies nodes on TCP/IP networks. Subnetting segments large networks into smaller broadcast domains to improve security and performance:</p>
        <ul>
          <li><strong>IPv4:</strong> 32-bit logical address, written in dotted-decimal format (e.g., 192.168.10.1). Class C addresses use the default mask <strong>255.255.255.0</strong> (/24), leaving 8 bits for host allocations.</li>
          <li><strong>CIDR (Classless Inter-Domain Routing):</strong> Uses a slash prefix (e.g., /26) to denote network bits, allowing flexible subnetting:
            <ul>
              <li><strong>Subnet host calculation:</strong> $Usable\\ Hosts = 2^{(32 - Prefix)} - 2$. (The network address and broadcast address are subtracted).</li>
              <li><strong>/26 Subnet:</strong> $32 - 26 = 6$ host bits. $2^6 = 64$ addresses. Subtracting 2 leaves **62 usable host IPs**. Subnet mask: **255.255.255.192**.</li>
              <li><strong>/29 Subnet:</strong> $32 - 29 = 3$ host bits. $2^3 = 8$ addresses. Subtracting 2 leaves **6 usable host IPs**. Subnet mask: **255.255.255.248**.</li>
            </ul>
          </li>
          <li><strong>IPv6:</strong> 128-bit address represented in 8 hexadecimal blocks separated by colons (e.g., 2001:db8::1), designed to resolve IPv4 depletion.</li>
        </ul>
        <div class="nepal-example-box">
          <strong>🇳🇵 Real-Life Nepal Applications:</strong>
          An RBB network engineer dividing branch office networks uses a CIDR block of **/29** for a small sub-branch with only 4 computers. This assigns 6 usable host IPs, preventing the waste of IP addresses, which would happen if they assigned a full Class C subnet mask (255.255.255.0) to every small office.
        </div>`
      },
      {
        id: "3.4",
        title: "Network Security & Cryptography: Symmetric, Asymmetric & Firewalls",
        notes: `<p>Securing networks requires protecting data in transit and controlling entry points:</p>
        <ul>
          <li><strong>Symmetric Cryptography:</strong> Uses a single shared secret key to both encrypt and decrypt data (e.g. AES, DES). Extremely fast but requires secure key exchange.</li>
          <li><strong>Asymmetric Cryptography:</strong> Uses a key pair (Public Key and Private Key). Data encrypted with the public key can only be decrypted by the matching private key (e.g. RSA). Essential for secure key exchange over public networks.</li>
          <li><strong>Firewall:</strong> A software or hardware device that filters incoming and outgoing network traffic based on port numbers, IP addresses, or protocol rules.</li>
        </ul>
        <div class="nepal-example-box">
          <strong>🇳🇵 Real-Life Nepal Applications:</strong>
          When you log into RBB mobile banking:
          - **Asymmetric Encryption (RSA)** establishes a secure tunnel.
          - The actual transfer of data uses **Symmetric Encryption (AES)** for speed.
          - RBB's central servers are protected by **Firewalls** that block all traffic except secure web traffic on port **443** (HTTPS), keeping database ports hidden from external attackers.
        </div>`
      }
    ]
  },
  4: {
    title: "Chapter 4: Operating System",
    topics: [
      {
        id: "4.1",
        title: "Basic Knowledge of Operating System & Kernel",
        notes: `<p>Operating systems manage computer hardware and provide a platform for software execution:</p>
        <ul>
          <li><strong>Kernel:</strong> The absolute core component of the OS. It is loaded into RAM at boot-up and directly controls system hardware, memory allocation, process schedules, and file structures.</li>
          <li><strong>Volatile Memory (RAM):</strong> Primary memory that requires continuous electrical power to maintain stored state. Wiped clean during reboot.</li>
          <li><strong>Non-Volatile Storage (SSD/HDD/ROM):</strong> Secondary storage that retains data permanently when system power is switched off.</li>
        </ul>
        <div class="nepal-example-box">
          <strong>🇳🇵 Real-Life Nepal Applications:</strong>
          When you turn on a desktop at an RBB branch, the BIOS first runs a Power-On Self-Test (POST), then loads the Windows **Kernel** from the non-volatile C: drive SSD into the volatile **RAM**. Once loaded, the kernel manages the teller's print commands and mouse clicks.
        </div>`
      },
      {
        id: "4.2",
        title: "Process Management & Scheduling: States, Deadlock & Algorithms",
        notes: `<p>Processes must be scheduled efficiently to ensure optimal CPU utilization:</p>
        <ul>
          <li><strong>Process States:</strong> <strong>New</strong> (created), <strong>Ready</strong> (loaded in RAM, waiting for CPU), <strong>Running</strong> (executing instructions on CPU), <strong>Blocked/Waiting</strong> (waiting for I/O event like disk read), <strong>Terminated</strong> (completed).</li>
          <li><strong>Deadlock:</strong> A state where a set of processes are blocked because each holds a resource and waits for another resource held by another process in a circular loop. The four necessary conditions are: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait.</li>
          <li><strong>FCFS (First-Come, First-Served):</strong> Non-preemptive scheduling. Executes processes in order of arrival. Can cause the **Convoy Effect** (short tasks get delayed behind a single very long CPU-bound task).</li>
          <li><strong>Shortest Job First (SJF):</strong> Non-preemptive scheduling that prioritizes the shortest CPU burst. Can cause **Starvation** where long tasks wait indefinitely if short tasks keep arriving.</li>
          <li><strong>Round Robin (RR):</strong> Preemptive scheduling designed for time-sharing. It assigns a fixed time quantum (e.g. 10ms) to each process. When the quantum expires, the process is preempted and sent to the back of the queue.</li>
        </ul>
        <div class="nepal-example-box">
          <strong>🇳🇵 Real-Life Nepal Applications:</strong>
          If RBB's database server runs a massive monthly interest calculation script (large task) using **FCFS**, it could block teller transaction queries (short tasks), causing long queues at cash counters. To prevent this, database query processes are scheduled using **Round Robin** or priority queues to ensure short queries get CPU time quickly.
        </div>`
      },
      {
        id: "4.3",
        title: "DOS, UNIX & Windows Operating System Commands",
        notes: `<p>IT assistants must be fluent in operating system CLI commands for configuration and administration:</p>
        <ul>
          <li><strong>UNIX / Linux Commands:</strong>
            <ul>
              <li><code>ls</code>: Lists directory contents.</li>
              <li><code>cd [dir]</code>: Changes directory.</li>
              <li><code>pwd</code>: Print Working Directory (shows full path).</li>
              <li><code>chmod [permissions] [file]</code>: Changes file permissions (e.g., chmod 755 makes a script executable).</li>
              <li><code>grep [pattern] [file]</code>: Searches for lines matching a pattern in a text file.</li>
            </ul>
          </li>
          <li><strong>MS-DOS Commands:</strong>
            <ul>
              <li><code>DIR</code>: Lists directory files.</li>
              <li><code>CLS</code>: Clears the screen.</li>
              <li><code>ATTRIB</code>: Displays or changes file attributes. Options: <code>+R</code> (Read-only), <code>+H</code> (Hidden), <code>+S</code> (System), <code>+A</code> (Archive).</li>
              <li><code>VOL</code>: Displays disk volume label and serial number.</li>
            </ul>
          </li>
        </ul>
        <div class="nepal-example-box">
          <strong>🇳🇵 Real-Life Nepal Applications:</strong>
          An RBB IT assistant troubleshooting an automated database update failure on a Linux database server uses <code>cat error.log | grep "Failed"</code> to find the specific error lines instantly. On Windows teller PCs, they can run <code>ATTRIB +H +R C:\\secret_key.key</code> to hide and write-protect key security files.
        </div>`
      },
      {
        id: "4.4",
        title: "Identifying and Managing Security Threats in OS",
        notes: `<p>Operating systems must be protected from memory corruption and access privilege exploits:</p>
        <ul>
          <li><strong>Buffer Overflow:</strong> A software bug where input data exceeds a memory buffer's boundaries, overwriting stack memory and return addresses. Attackers exploit this to execute malicious code with system privileges. Can be managed by using safe libraries and bounds-checking code.</li>
          <li><strong>Privilege Escalation:</strong> An attack where a user exploits a system vulnerability or configuration error to gain higher access permissions (like administrative/root access) than they are authorized to have.</li>
        </ul>
        <div class="nepal-example-box">
          <strong>🇳🇵 Real-Life Nepal Applications:</strong>
          If a banking terminal software at an RBB branch contains a **Buffer Overflow** vulnerability, an attacker could exploit it to run arbitrary commands on the system. To prevent this, the IT department enforces regular OS security updates and disables administrative rights on teller accounts to block **Privilege Escalation** attempts.
        </div>`
      }
    ]
  },
  5: {
    title: "Chapter 5: DBMS & Web Tech",
    topics: [
      {
        id: "5.1",
        title: "Database Management System (DBMS) & ACID Properties",
        notes: `<p>DBMS manages structured datasets, enforcing transactional properties to ensure data reliability:</p>
        <ul>
          <li><strong>ACID Properties:</strong>
            <ul>
              <li><strong>Atomicity:</strong> All-or-nothing execution. If a transaction fails mid-way, all changes are rolled back, leaving the database unchanged.</li>
              <li><strong>Consistency:</strong> Transactions must transform the database from one valid state to another, maintaining all schema constraints and foreign key rules.</li>
              <li><strong>Isolation:</strong> Concurrent transactions run without interfering with each other. Uncommitted changes of a transaction are not visible to other transactions.</li>
              <li><strong>Durability:</strong> Once a transaction commits, its updates are written to non-volatile storage and will persist even during power failures.</li>
            </ul>
          </li>
        </ul>
        <div class="nepal-example-box">
          <strong>🇳🇵 Real-Life Nepal Applications:</strong>
          If you transfer Rs. 10,000 from your RBB account to another bank via mobile banking, two operations occur: debiting your account and crediting the recipient's. If the network drops mid-way, **Atomicity** ensures your Rs. 10,000 is refunded (rolled back) rather than lost.
        </div>`
      },
      {
        id: "5.2",
        title: "Tables, Records, Relationships & Indexing",
        notes: `<p>Relational databases organize datasets using tables, keys, and fast lookup indexes:</p>
        <ul>
          <li><strong>Structure:</strong> Tables contain rows (**records / tuples**) and columns (**fields / attributes**).</li>
          <li><strong>Primary Key:</strong> A column that uniquely identifies each row. Cannot contain duplicate or NULL values.</li>
          <li><strong>Foreign Key:</strong> A column that references the primary key of another table to maintain **referential integrity**, preventing orphaned records.</li>
          <li><strong>Clustered Index:</strong> Physically re-orders the actual data rows of the table on the disk to match the index key order. Since data can only be physically sorted in one way, a table can have only **one** clustered index.</li>
          <li><strong>Non-Clustered Index:</strong> Creates a separate search index pointing to the physical data rows. Multiple non-clustered indexes are allowed per table.</li>
        </ul>
        <div class="nepal-example-box">
          <strong>🇳🇵 Real-Life Nepal Applications:</strong>
          In RBB's database, the <code>Customer</code> table has a Primary Key of <code>CustomerID</code>. The <code>Transactions</code> table has a Foreign Key <code>CustomerID</code> referencing it. A **Clustered Index** is set on <code>CustomerID</code> in the <code>Customer</code> table, physically grouping customer records on the database disk to make profile searches very fast.
        </div>`
      },
      {
        id: "5.3",
        title: "Data Warehousing & Data Mining: OLAP, OLTP & Schemas",
        notes: `<p>Data warehouses aggregate historical transactional datasets from multiple business systems for analysis:</p>
        <ul>
          <li><strong>OLTP (Online Transaction Processing):</strong> Database systems optimized for fast, day-to-day write operations (inserts, updates, deletes). Normalized to remove redundancies.</li>
          <li><strong>OLAP (Online Analytical Processing):</strong> Systems optimized for read-heavy, complex data queries and trend analysis. Uses denormalized structures.</li>
          <li><strong>ETL (Extract, Transform, Load):</strong> The process of extracting raw data from operational systems, transforming/cleaning it, and loading it into the warehouse.</li>
          <li><strong>Star Schema:</strong> Simple design where a central fact table (containing business metrics) connects directly to multiple flat dimension tables.</li>
          <li><strong>Snowflake Schema:</strong> An extension of the Star schema where dimension tables are normalized (split into sub-tables), reducing disk space but increasing query join complexity.</li>
        </ul>
        <div class="nepal-example-box">
          <strong>🇳🇵 Real-Life Nepal Applications:</strong>
          RBB runs an **OLTP** database to log every daily ATM withdrawal. At midnight, an **ETL** process copies this transaction data, transforms it, and loads it into an **OLAP Data Warehouse**. Business analysts then run complex queries on this data warehouse to identify which branches in Nepal have the highest cash usage trends.
        </div>`
      },
      {
        id: "5.4",
        title: "Web Technologies: HTML, XML, Web Server & Proxy Servers",
        notes: `<p>Web services allow users to interact with remote databases across local and public networks:</p>
        <ul>
          <li><strong>HTML Anchor Tag:</strong> The <code>&lt;a href="url"&gt;Text&lt;/a&gt;</code> tag creates hyperlinks to navigate web pages.</li>
          <li><strong>XML Rules:</strong> Extensible Markup Language. Unlike HTML, XML requires strict syntax: tags are case-sensitive, all tags must be closed, and elements must nest properly. Used for data exchange.</li>
          <li><strong>Web Server:</strong> Software (like Apache, Nginx, or IIS) that stores and serves web pages (HTML, CSS, JS) to clients over HTTP.</li>
          <li><strong>Proxy Servers:</strong>
            <ul>
              <li><strong>Forward Proxy:</strong> Sits in front of clients inside a private network. It intercepts outgoing requests to cache web content, filter URLs, and mask client IPs.</li>
              <li><strong>Reverse Proxy:</strong> Sits in front of backend web servers. It intercepts incoming client requests to balance traffic loads, handle SSL decryption, and cache static pages.</li>
            </ul>
          </li>
        </ul>
        <div class="nepal-example-box">
          <strong>🇳🇵 Real-Life Nepal Applications:</strong>
          When RBB staff access the internet, their traffic routes through a **Forward Proxy** that blocks access to unauthorized sites to secure the branch. Externally, when users visit RBB's official website, they connect to a **Reverse Proxy** (like Nginx) which load balances their requests to several backend web servers to prevent the site from crashing during peak hours.
        </div>`
      },
      {
        id: "5.5",
        title: "Disaster Recovery Planning (DRP)",
        notes: `<p>Disaster Recovery plans protect databases and services from physical and network outages:</p>
        <ul>
          <li><strong>RPO (Recovery Point Objective):</strong> The maximum acceptable age of data that can be lost due to an outage (defines backup frequency. E.g., if RPO is 4 hours, backup snapshots must occur at least every 4 hours).</li>
          <li><strong>RTO (Recovery Time Objective):</strong> The maximum acceptable downtime allowed to restore systems and services after a disaster.</li>
        </ul>
        <div class="nepal-example-box">
          <strong>🇳🇵 Real-Life Nepal Applications:</strong>
          RBB's primary data center in Kathmandu replicates transactions to their DR site in Hetauda. They set an **RPO of 15 minutes** (maximum database data loss) and an **RTO of 2 hours** (maximum downtime before backup systems must be brought online), ensuring minimal disruption to banking operations across Nepal.
        </div>`
      }
    ]
  },
  6: {
    title: "Chapter 6: Cyber & Policies",
    topics: [
      {
        id: "6.1",
        title: "Cyber Security intro & Access Control mechanisms",
        notes: `<p>Information security frameworks protect system assets and data confidentiality:</p>
        <ul>
          <li><strong>Authentication vs Authorization:</strong> Authentication verifies *who* the user is (e.g. passwords, biometrics). Authorization checks *what* resources they have permissions to access (e.g. read/write permissions).</li>
          <li><strong>Multi-Factor Authentication (MFA):</strong> Security process requiring two or more independent factors:
            <ul>
              <li><strong>Something you know:</strong> Passwords, PINs.</li>
              <li><strong>Something you have:</strong> Smart tokens, SMS OTP codes.</li>
              <li><strong>Something you are:</strong> Fingerprints, iris scans.</li>
            </ul>
          </li>
        </ul>
        <div class="nepal-example-box">
          <strong>🇳🇵 Real-Life Nepal Applications:</strong>
          When an RBB administrator logs into the core banking system, they authenticate using their password (**something they know**) and a physical USB token (**something they have**). Once logged in, the system **authorizes** them to edit customer database tables, but blocks them from modifying transaction logs.
        </div>`
      },
      {
        id: "6.2",
        title: "Common Security Threats: Social Engineering, Malwares & Phishing",
        notes: `<p>Malicious software and social exploits target human and system vulnerabilities:</p>
        <ul>
          <li><strong>Social Engineering:</strong> Manipulating people to perform actions or reveal confidential information. Includes **Phishing** (deceptive emails), and **Tailgating** (physically following employees through secure doors).</li>
          <li><strong>Computer Worm:</strong> A self-replicating malware program that spreads automatically over local networks or the internet, exploiting security holes without requiring a user to run a host file.</li>
          <li><strong>Trojan Horse:</strong> Malicious program disguised as useful software. Requires manual user execution to run.</li>
          <li><strong>Logic Bomb:</strong> Malicious code inserted into a program that remains dormant until triggered by a specific event or calendar date.</li>
          <li><strong>DoS vs DDoS:</strong> Denial of Service floods a server with traffic from a single IP to exhaust its resources. Distributed DoS launches this flood using a coordinated network of compromised machines (**botnet**).</li>
        </ul>
        <div class="nepal-example-box">
          <strong>🇳🇵 Real-Life Nepal Applications:</strong>
          An attacker sends fake emails to RBB customers claiming their accounts will be suspended unless they enter their passwords on a cloned banking link (**Phishing**). Simultaneously, a coordinated **DDoS** attack might flood RBB's internet gateway, causing mobile banking logins to fail due to service timeouts.
        </div>`
      },
      {
        id: "6.3",
        title: "ICT Policy of Nepal, 2072",
        notes: `<p>The ICT Policy 2072 sets the national framework to transform Nepal into an information and knowledge-based society:</p>
        <ul>
          <li><strong>Core Target (by 2020):</strong>
            <ul>
              <li>Provide **75% of the population** with digital literacy.</li>
              <li>Provide **90% of the population** with broadband access.</li>
              <li>Provide **100% of the population** with internet services.</li>
            </ul>
          </li>
          <li><strong>GDP Target:</strong> Increase the direct and indirect contribution of the ICT sector to the national GDP to **7.5%** by 2020.</li>
          <li><strong>Apex Body:</strong> The high-level **National Information Technology Development Council** is chaired directly by the **Prime Minister of Nepal** to oversee policy implementation.</li>
        </ul>
        <div class="nepal-example-box">
          <strong>🇳🇵 Real-Life Nepal Applications:</strong>
          To implement these targets, the Nepal Telecommunications Authority (NTA) utilizes the Rural Telecommunication Development Fund (RTDF) to build optical fiber backbones along mid-hill highways, connecting rural municipalities across Nepal to broadband networks.
        </div>`
      },
      {
        id: "6.4",
        title: "IT Guidelines (issued by Nepal Rastra Bank)",
        notes: `<p>Regulatory guidelines issued by the central bank to manage IT risk in the banking sector:</p>
        <ul>
          <li><strong>IS Audit Frequency:</strong> All licensed banks and financial institutions must carry out a comprehensive independent **Information System (IS) Audit annually (at least once a year)**.</li>
          <li><strong>Outsourcing Accountability:</strong> Banks can outsource IS audits to third-party expert firms if they lack internal staff, but the bank's **Board of Directors** and management remain ultimately accountable for all IT compliance and security failures.</li>
          <li><strong>Information Security Officer (ISO):</strong> Banks must appoint a dedicated ISO to monitor security frameworks independent of the daily IT operations department.</li>
        </ul>
        <div class="nepal-example-box">
          <strong>🇳🇵 Real-Life Nepal Applications:</strong>
          Every year, RBB hires an external IT auditing firm to perform a comprehensive **IS Audit** of its core banking database, networks, and DR center. The audit report, along with management responses, must be submitted to Nepal Rastra Bank to ensure regulatory compliance.
        </div>`
      },
      {
        id: "6.5",
        title: "Cyber Resilience Guidelines, 2023 (issued by Nepal Rastra Bank)",
        notes: `<p>Directives issued in August 2023 to build cyber defense and recovery capabilities in Nepalese financial market infrastructures:</p>
        <ul>
          <li><strong>Recovery Time Objective (RTO):</strong> Licensed commercial banks, payment operators (PSOs), and payment networks must target a Recovery Time Objective of resuming critical operations **within 2 hours** of a cyber incident.</li>
          <li><strong>Incident Reporting:</strong> Any critical cyber incident, database breach, or major system failure must be reported **immediately** to the concerned supervision department of Nepal Rastra Bank. Non-critical incidents are reported quarterly.</li>
          <li><strong>Board Supervision:</strong> The guidelines mandate that cyber risk must be discussed regularly by the board, elevating cyber resilience to a board-level governance requirement.</li>
        </ul>
        <div class="nepal-example-box">
          <strong>🇳🇵 Real-Life Nepal Applications:</strong>
          If a ransomware attack hits RBB's clearing database, the bank's incident response plan must immediately isolate the affected servers and restore operations from clean backups at the DR site. Under the **Cyber Resilience Guidelines 2023**, clearing operations must resume **within 2 hours**, and the breach must be reported **immediately** to the NRB supervision team.
        </div>`
      }
    ]
  }
};
