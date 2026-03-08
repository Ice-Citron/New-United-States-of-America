# Project Automaton -- Deep Codebase Summary

This document provides a detailed summary of the Project-Automaton repository for use when updating the Isaac Sim / SO-101 portfolio page.

---

## Repository Overview

**Repository:** `/Users/administrator/Black Projects/Project-Automaton/`

Project-Automaton is a comprehensive robotics project aimed at training a Reinforcement Learning agent to autonomously assemble Lego sets using a custom-modified SO-101 robotic arm. It combines hardware design, physics simulation (NVIDIA Isaac Sim), and cloud-based RL training.

---

## Directory Structure and Contents

### 1. README.md -- Project Vision and Roadmap

The project has a 3-phase roadmap:

**Phase 1: Infrastructure & Foundations (Current)**
- Automated sync pipelines between local Windows workstation (RTX 5090) and cloud Linux servers (Vast.ai, Tensordock -- RTX 6000 Pro, L40)
- Foundational Isaac Sim training via Lychee AI tutorials
- Setting up core RL environments and physics parameters

**Phase 2: Hardware Design & Simulation Research**
- CAD and prototype hardware modifications for SO-100 arm for high-precision Lego manipulation
- Reproduce SOTA robotics research papers in Isaac Sim
- Import digital twin of customized SO-100 arm
- ROS2 integration with Isaac Sim for sim-to-real communication

**Phase 3: The Capstone (Lego Assembly)**
- Custom RL reward functions for spatial awareness, precision gripping, structural Lego snapping
- Train agent using cloud compute clusters
- Deploy trained model to physical hardware

---

### 2. Intrinsic-AI/ -- AIC ROS2 Competition Graph

Contains a sophisticated Python script (`aic_ros2_graph.py`, 383 lines) that generates a comprehensive visualization of the entire ROS 2 computation graph for the **AI for Industry Challenge (AIC)** -- a robotics competition involving autonomous cable insertion (fiber optic SFP, LC, SC connectors) into simulated server hardware using a UR5e arm with Robotiq Hand-E gripper.

The visualization maps out:
- **Gazebo Simulation** cluster (gz_server, ScoringPlugin, CablePlugin, OffLimitContacts)
- **Evaluation Stack** (aic_engine trial orchestrator, aic_controller with Cartesian + Joint impedance control, aic_adapter sensor fusion at 20 Hz, aic_scoring tier system)
- **Participant Model** (aic_model LifecycleNode where the custom policy lives)
- Full topic network (sensor data, command channels, composite observations, TF frames, scoring topics)
- Services and Actions (change_target_mode, cancel_task, reset_joints, insert_cable action)

This indicates the author is actively participating in (or studying) the Intrinsic AI industry challenge for autonomous cable insertion in data centers.

The generated output includes PNG, PDF, and DOT source files.

---

### 3. Lychee-AI/ -- Isaac Sim Tutorial Progression

Contains hands-on tutorial code organized by date, tracking progressive learning of NVIDIA Isaac Lab (built on Isaac Sim):

**2026-02-28:**
- **Tutorial 1: `create_empty.py`** -- Creating a basic empty simulation stage. Uses `AppLauncher`, `SimulationCfg`, `SimulationContext`. Sets up a camera view, runs `sim.reset()` then continuous `sim.step()` loop. Teaches the fundamental simulation lifecycle.
- **Tutorial 2: `spawn_prims.py`** -- Spawning primitives (ground plane, lights, cones, deformable cuboids, USD table assets). Uses configuration-driven spawning (`ConeCfg`, `GroundPlaneCfg`, `MeshCuboidCfg`), introduces rigid body and deformable body physics properties, and importing assets from NVIDIA Nucleus server.

**2026-03-01:**
- **Tutorial 2 (continued):** Same spawn_prims with USD file output (test-01.usd)
- **Tutorial 3:**
  - `run_articulation.py` -- Spawning and interacting with a cart-pole articulation. Uses regex paths (`/World/Origin.*/Robot`) to spawn multiple instances. Implements the full simulation loop: reset root state, apply random joint efforts, step simulation, update buffers. Demonstrates parallel environment spawning.
  - `run_rigid_object.py` -- Working with rigid physics objects (cones). Implements the 5-step update cycle (write_root_state_to_sim -> reset -> write_data_to_sim -> sim.step -> update). Uses cylindrical random spawning for position randomization.
  - `run_deformable_object.py` -- Working with deformable objects (soft cubes). Introduces nodal kinematic targets, vertex-level physics constraints, and deformable body materials (Poisson's ratio, Young's modulus).

---

### 4. Liberty-Notes/ -- Detailed Learning Notes

#### Nvidia-Isaac-Lab/ (Jupyter Notebooks)

**Feb-04.ipynb** -- Extensive foundational notes on ROS 2, covering:
- ROS 2 as distributed robotics middleware (nodes, topics, services, actions)
- DDS (Data Distribution Service) for discovery and transport
- Quality of Service (QoS) configuration
- Detailed analogy system: OS = Automatic Nervous System, DDS = Central Nervous System, Actuators = Muscles, Application Code = Conscious Mind
- Real-world Unitree Go2 example (CycloneDDS, specific topics like `rt/sportmodestate`)
- How Isaac Sim's ROS2 Bridge enables sim-to-real transfer (same code controls both virtual and real robot)
- Pub/Sub patterns, 4D LiDAR explanation

**Feb-28.ipynb** -- Notes on first two tutorials:
- Isaac Lab's factory pattern with `ConeCfg`/`.func` (delayed execution)
- Mapping to Kotlin equivalent (Companion Object factory)
- Why the factory pattern exists: parallel AI training with 4096 simultaneous environments

**March-01.ipynb** -- Deep notes on rigid objects, prims, and kinematics:
- OpenUSD Prim hierarchy (IsA Schemas vs API Schemas)
- UsdPrim -> UsdTyped -> UsdGeomImageable -> UsdGeomXformable hierarchy
- API Schemas as mix-ins (UsdPhysicsRigidBodyAPI, CollisionAPI, ArticulationRootAPI)
- OpenUSD joint creation (RevoluteJoint with Body0Rel/Body1Rel)
- Detailed breakdown of PyTorch tensor slicing for root states (13-element state vector: position[3] + quaternion[4] + linear_vel[3] + angular_vel[3])
- The 5-step update cycle explained in detail

**March-03.ipynb** -- Notes on the AIC competition:
- UR5e + Robotiq Hand-E setup with 3x Basler cameras and Axia80 F/T sensor
- Complete repository structure breakdown (organizer side vs participant side)
- Detailed analysis of all 8 core packages (aic_model, aic_interfaces, aic_engine, aic_controller, aic_adapter, aic_gazebo, aic_scoring, aic_description)
- File format explanations (.glb, .xacro, .sdf)
- Scoring system details (3-tier: model validity, performance metrics, task success -- 100 pts max)
- Example policies analyzed (WaveArm, CheatCode, RunACT, GentleGiant, SpeedDemon, WallToucher)
- ACT (Action Chunking with Transformers) explained
- Kinematic chains (serial vs closed) and their relevance to Lego assembly
- SFP, SC, LC connector types and rail systems
- Docker submission requirements
- Extensive ROS 2 concept glossary (lifecycle nodes, impedance control, admittance control, F/T sensors, serialization, etc.)

**March-04.ipynb** -- Very large (2.5MB), continues AIC competition study and detailed ROS 2 graph analysis

**March-05.ipynb** -- Latest notes, continuing the learning progression

#### Nvidia-Webinars/

**Dec-2.cpp** -- Notes from "Introduction to Physical AI" webinar:
- Synthetic data generation importance
- Isaac Sim features overview (SimReady Assets, robot models, high-fidelity physics)
- Isaac Lab for parallel RL training
- GROOT N1.5 Robot Foundation Model (VLA architecture)
- Isaac ROS library
- Jetson platform (AGX Thor)
- Newton physics engine
- Action items: try HuggingFace $100 robotic arm, post-train with GR00T N1.5

**Dec-12.cpp** -- Notes on Nvidia robotics stack:
- Simulation/digital twin (Omniverse/Cosmos)
- Deployment (AGX Thor)
- Training (DGX)
- Robotics demand layers: High-level reasoning (1-5 Hz) -> Perception (30 Hz) -> Real-time control (100-1000 Hz) -> Hardware Abstraction Layer
- Jetson Thor transformer engine architecture, Multi-instance GPU support

#### PythonRobotics/
- Drone 3D trajectory following code (Quadrotor.py, TrajectoryGenerator.py, drone_3d_trajectory_following.py)
- Rocket powered landing simulation code

---

### 5. SO-101/ -- Hardware and Software

#### Print Files/
Contains 3D printing STL files for the SO-101 arm:
- `Ender_Follower_SO101.stl` (24.8 MB) -- Follower arm for teleoperation
- `Ender_Leader_SO101.stl` (25.5 MB) -- Leader arm for demonstration
- Gauge STL files for calibration

#### lerobot/
A full clone of **HuggingFace's LeRobot** library -- the state-of-the-art open-source robotics framework in PyTorch. LeRobot provides:
- **Unified Robot interface** -- hardware-agnostic control across SO-100, Koch, HopeJR, Unitree G1, and more
- **LeRobotDataset format** -- Parquet + MP4 for efficient robotic dataset storage on HuggingFace Hub
- **State-of-the-art policies:**
  - Imitation Learning: ACT, Diffusion, VQ-BeT
  - Reinforcement Learning: HIL-SERL, TDMPC
  - VLA Models: Pi0.5, GR00T N1.5, SmolVLA, XVLA
- **Evaluation benchmarks:** LIBERO, MetaWorld
- Training as simple as `lerobot-train --policy=act --dataset.repo_id=...`

The SO-101 directory also has a lerobot-venv for the Python virtual environment.

---

### 6. References/ -- Research Materials

#### Intrinsic AI Notes/
Contains 12+ screenshots (PNG) from March 3, 2026, likely documenting the AIC challenge interface, documentation, or competition setup.

#### aic/
Contains the full cloned AIC (AI for Industry Challenge) competition repository with 29 items -- the complete competition codebase being studied in the Liberty-Notes notebooks.

---

## Tech Stack Summary

| Category | Technologies |
|----------|-------------|
| **Simulation** | NVIDIA Isaac Sim, Isaac Lab, Omniverse, Gazebo |
| **AI/ML** | Reinforcement Learning, PyTorch, ACT (Action Chunking with Transformers) |
| **Robotics** | ROS 2, CycloneDDS, LeRobot, URDF/SDF/OpenUSD |
| **Hardware** | SO-101 arm (3D printed), Servo motors, Custom gripper design |
| **Compute** | RTX 5090 (local), RTX 6000 Pro / L40 (cloud via Vast.ai, Tensordock) |
| **Competition** | Intrinsic AI AIC Challenge (UR5e + Robotiq, cable insertion) |
| **Other** | Python, C++, Kotlin, Graphviz, Jupyter |

---

## Key Insights for Portfolio Page

1. **Multi-layered project**: Combines hardware (3D printing, servo modifications), simulation (Isaac Sim digital twin), and AI (RL training) into a single capstone project.

2. **Active learning documented**: The Liberty-Notes show an incredibly detailed and systematic learning approach -- each concept is broken down, annotated with personal understanding, and connected back to the project goals. The notes include ASCII art decorations showing personality.

3. **Cloud infrastructure**: Has set up automated sync pipelines between local RTX 5090 workstation and cloud GPU instances for scalable training.

4. **Competition participation**: Actively studying/participating in the Intrinsic AI AIC challenge for autonomous cable insertion, demonstrating real-world industrial robotics application beyond the Lego project.

5. **LeRobot integration**: Using HuggingFace's cutting-edge LeRobot framework, which supports the SO-100/SO-101 arms natively and provides access to state-of-the-art policies like ACT, Pi0.5, and GR00T N1.5.

6. **Sim-to-real pipeline**: The entire architecture is designed for sim-to-real transfer -- same code runs in Isaac Sim and on physical hardware via ROS 2 bridge.

7. **Scale of learning**: The notebooks contain thousands of lines of detailed notes covering ROS 2, OpenUSD, physics simulation, kinematic chains, robot control strategies, and more -- representing deep domain expertise being built rapidly.
