---
layout: page
title: Projects
permalink: /projects/
---

## AI & Machine Learning Projects

### 🎨 Generative AI & Computer Vision

#### Video Colorization via Adapted WAN 3D VAE Architecture
Adapted pretrained 3D VAE encoder to accept grayscale input with custom causal padding. Built pipeline for supervised training with grayscale-color paired clips. Achieved PSNR: 38.82 dB and SSIM: 0.9885.

**Technologies:** PyTorch, 3D VAE, L1+LPIPS Loss, Lab Color Space  
**Type:** UPWORK Project | **Year:** 2024

---

#### Virtual Try-On Clothes App Using Stable Diffusion
Developed a virtual try-on application using IDM-Vton and Stable Diffusion models, deployed via Flask to support 300+ simultaneous users.

**Technologies:** Stable Diffusion, IDM-Vton, Flask, PyTorch  
**Demo:** [Blog](https://k7alid.github.io/clothes-fitting-app/)  
**Type:** Graduation Project | **Year:** 2024

---

#### Mining Area Segmentation from Satellite Imagery
Developed a mining area segmentation system using SegFormer (MIT-b2) for satellite imagery analysis, achieving 98.19% accuracy. Designed custom ResidualAdapter for 12-channel to 3-channel conversion and implemented custom binary DiceLoss.

**Technologies:** SegFormer, PyTorch, Computer Vision, Satellite Imagery  
**Demo:** [Blog](https://k7alid.github.io/mine-satellite-segformer/)  
**Type:** UPWORK Project | **Year:** 2024

---

#### Face Restoration Model Optimization
Optimized GFPGAN and compared 8+ face restoration models (CodeFormer, GPEN-BFR, RestoreFormer). Implemented batch processing and converted models to TensorRT for enhanced performance.

**Technologies:** GFPGAN, TensorRT, PyTorch, Computer Vision  
**Type:** UPWORK Project | **Year:** 2024

---

### 🤖 AI Agents & LLM Systems

#### Multi-Agent AI Conversation System
Built a modular Flask-based AI assistant system powered by Claude-3, featuring specialized agents like Elysium (marketing), Muse (writing), Aegis (life coaching), and Zima (visual prompts with FLUX AI). Used structured prompts and chain-of-thought reasoning with MongoDB for persistent conversations.

**Technologies:** Claude-3, Flask, MongoDB, FLUX AI, Multi-Agent Systems  
**Live Demo:** [xminds.ai](https://www.xminds.ai/)  
**Type:** UPWORK Project | **Year:** 2024

---

#### AI Phone Agent with Twilio Integration
Developed an AI Phone Agent using Python, integrating OpenAI API for real-time NLP. Utilized Twilio for voice calling in the real estate sector. Implemented Eleven Labs for voice synthesis and FastAPI with WebSocket for real-time interactions.

**Technologies:** OpenAI API, Twilio, Eleven Labs, FastAPI, WebSocket  
**Type:** UPWORK Project | **Year:** 2024

---

#### Medical Query Assistant with RAG
Developed a medical query assistant using a RAG pipeline with ChromaDB and Hugging Face models, featuring a Gradio interface for text and audio interaction. Enhanced accessibility with text-to-speech functionality.

**Technologies:** RAG, ChromaDB, Hugging Face, Gradio, TTS  
**Demo:** [Blog](https://k7alid.github.io/medico-chatbot/)  
**Type:** Personal Project | **Year:** 2024

---

#### Vector Database & Knowledge Graph Systems
Engineered a unified data architecture integrating vector databases (Chroma, FAISS, Weaviate) with Neo4j graph database, combining similarity search with knowledge graph modeling for advanced semantic search and relationship analysis.

**Technologies:** ChromaDB, FAISS, Weaviate, Neo4j, Graph Databases  
**Type:** UPWORK Project | **Year:** 2024

---

### 🔍 Computer Vision & Detection

#### Coffee Fruit Maturity Detection and Counting System
Developed a YOLOv8-based coffee fruit detection system with dual implementation: TFLite for on-device Flutter processing and Python backend with Firebase real-time integration for remote analysis.

**Technologies:** YOLOv8, TFLite, Flutter, Firebase, Python  
**Type:** UPWORK Project | **Year:** 2024

---

#### Real-Time Emotion Detection with TensorFlow and OpenCV
Created an emotion detection platform achieving 95% accuracy in real-time using TensorFlow and OpenCV.

**Technologies:** TensorFlow, OpenCV, CNN, Computer Vision  
**Type:** Personal Project | **Year:** 2024

---

#### Face Detection with OpenCV and Dlib
Created a benchmarking framework for face detection techniques across 1,000+ images, guiding the selection of efficient algorithms for real-time applications.

**Technologies:** OpenCV, Dlib, Python, Computer Vision  
**Type:** Personal Project | **Year:** 2023

---

#### Cat vs. Dog Image Classification with EfficientNet
Implemented an EfficientNet-based binary image classification model achieving 99% accuracy, utilizing data augmentation and transfer learning.

**Technologies:** EfficientNet, Transfer Learning, Data Augmentation, PyTorch  
**Type:** Personal Project | **Year:** 2023

---

### 💬 NLP & Text Analysis

#### Sentiment Analyzer with Bidirectional LSTM and Transformers
Built a sentiment analysis model with Bidirectional LSTM and Transformers, reducing processing time by 50% and analyzing 200,000+ customer interactions weekly.

**Technologies:** LSTM, Transformers, NLP, PyTorch  
**Type:** Personal Project | **Year:** 2024

---

#### Named Entity Recognition Using Custom BERT
Fine-tuned a BERT model for NER on the CoNLL-2003 dataset, enhancing accuracy and efficiency in entity recognition tasks.

**Technologies:** BERT, NER, Hugging Face, Fine-tuning  
**Type:** Personal Project | **Year:** 2023

---

#### Transformers: From Scratch to Fine-Tuning
Developed and fine-tuned transformer models for NLP tasks, integrating pre-trained frameworks to boost productivity and data-driven decision-making.

**Technologies:** Transformers, BERT, GPT, PyTorch, Hugging Face  
**Type:** Personal Project | **Year:** 2023

---

#### YouTube Comments Sentiment Analysis
Built a YouTube comment scraper with sentiment analysis using DistilRoBERTa, providing actionable insights from video comments.

**Technologies:** DistilRoBERTa, Selenium, NLP, Sentiment Analysis  
**Type:** Personal Project | **Year:** 2023

---

## 📱 Mobile Development Projects

### TubeGPT - AI-Powered YouTube Video Analyzer
Developed a cross-platform Flutter application for analyzing YouTube videos using Google Gemini AI, supporting Android and Linux desktop with responsive design. Integrated YouTube Data API and youtube_explode_dart for multi-language transcript extraction from 70%+ of videos.

**Technologies:** Flutter, Google Gemini AI, YouTube API, Riverpod  
**Platforms:** Android, Linux Desktop  
**Type:** Personal Project | **Year:** 2025

---

### Ellista - E-Commerce Platform
Developed an advanced e-commerce platform for 2B Company, designed to streamline the shopping experience across a wide range of consumer products with intuitive UI and smart filtering features.

**Technologies:** Flutter, RESTful APIs, Cubit (Bloc), Clean Architecture, Google Maps  
**Available on:** [Android](https://play.google.com/store/apps/details?id=com.ellista.ecommerce) | [iOS](https://apps.apple.com/kw/app/ellista/id6478894949)  
**Type:** Injaz Company | **Year:** 2022-2024

---

### Injaz.Go - Business Management App
Developed a business application to manage accessory stores and product transportation. Enabled efficient inventory tracking and delivery coordination through map-based visualization.

**Technologies:** Flutter, RESTful APIs, Cubit (Bloc), HMVC Architecture, Google Maps  
**Type:** Injaz Company | **Year:** 2022-2024

---

### HRSystem - Employee Management System
Developed a fingerprint-based employee management app handling check-ins, check-outs, permissions, and requests. Implemented mock location detection and trusted location verification to prevent fraudulent sign-ins.

**Technologies:** Flutter, Clean Architecture, Google Maps, Mock Location Detection  
**Available on:** [Android](https://play.google.com/store/apps/details?id=com.nec.myc) | [iOS](https://apps.apple.com/us/app/مركزي/id6449775787)  
**Type:** National Events Center | **Year:** 2023

---

### HetetSukar - Nutrition Tracking App
Developed a nutrition-focused mobile app helping diabetics track food calories and nutritional info. Enabled offline access via local SQLite caching and ensured data syncing when online.

**Technologies:** Flutter, SQLite, Parse Server (Back4App), Clean Architecture  
**Available on:** [Android](https://play.google.com/store/apps/details?id=com.elgohary.hetatesukar) | [iOS](https://apps.apple.com/sa/app/حتة-سكر/id6456571855)  
**Type:** National Events Center | **Year:** 2023

---

### Banque Misr Food Ordering App
Developed a food ordering app with NTG Company during internship, ranked among top 3 in graduation projects.

**Technologies:** iOS Native, Storyboard, MVC, MVP  
**Source:** [GitHub](https://github.com/K7alid/BanqueMisrFoodApp)  
**Type:** Banque Misr Internship | **Year:** 2022

---

<div class="back-to-top">
  <a href="#top">↑ Back to Top</a>
</div>
