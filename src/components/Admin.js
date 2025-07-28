// import React, { useState, useEffect } from 'react';
// import { Plus, Edit2, Trash2, Eye, Upload, MessageCircle, Megaphone, Image, X, Check, AlertCircle, Monitor ,Palette} from 'lucide-react';
// import BASE_URL from '../config';
// const AdminPanel = () => {
//   const [activeTab, setActiveTab] = useState('gallery');
//   const [galleryItems, setGalleryItems] = useState([]);
//   const [announcements, setAnnouncements] = useState([]);
//   const [contactMessages, setContactMessages] = useState([]);
//   const [slides, setSlides] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [modalType, setModalType] = useState('');
//   const [editingItem, setEditingItem] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [notification, setNotification] = useState(null);
//   const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
//   const [deleteItem, setDeleteItem] = useState(null);
//   const [artworks, setArtworks] = useState([]);


//   // Fetch data
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const [galleryRes, announcementsRes, contactRes, slidesRes,artworksRes] = await Promise.all([
//         fetch(`${BASE_URL}/gallery`),
//         fetch(`${BASE_URL}/announcements`),
//         fetch(`${BASE_URL}/contact`),
//         fetch(`${BASE_URL}/slides`),
//         fetch(`${BASE_URL}/artworks`)


//       ]);

//       if (galleryRes.ok) setGalleryItems(await galleryRes.json());
//       if (announcementsRes.ok) setAnnouncements(await announcementsRes.json());
//       if (contactRes.ok) setContactMessages(await contactRes.json());
//       if (slidesRes.ok) setSlides(await slidesRes.json());
//       if (artworksRes.ok) setArtworks(await artworksRes.json());

//     } catch (error) {
//       showNotification('Error fetching data', 'error');
//     }
//   };

//   const showNotification = (message, type = 'success') => {
//     setNotification({ message, type });
//     setTimeout(() => setNotification(null), 3000);
//   };

//   const handleAddNew = (type) => {
//     setModalType(type);
//     setEditingItem(null);
//     setShowModal(true);
//   };

//   const handleEdit = (item, type) => {
//     setModalType(type);
//     setEditingItem(item);
//     setShowModal(true);
//   };

//   const handleDeleteClick = (id, type) => {
//     setDeleteItem({ id, type });
//     setShowDeleteConfirm(true);
//   };

//   const confirmDelete = async () => {
//     if (!deleteItem) return;
    
//     try {
//       const response = await fetch(`${BASE_URL}/${deleteItem.type}/${deleteItem.id}`, {
//         method: 'DELETE'
//       });
      
//       if (response.ok) {
//         fetchData();
//         showNotification('Item deleted successfully');
//       }
//     } catch (error) {
//       showNotification('Error deleting item', 'error');
//     }
    
//     setShowDeleteConfirm(false);
//     setDeleteItem(null);
//   };

//   const cancelDelete = () => {
//     setShowDeleteConfirm(false);
//     setDeleteItem(null);
//   };

//   const ArtworkForm = () => {
//     const [formData, setFormData] = useState({
//       title: editingItem?.title || '',
//       artist: editingItem?.artist || '',
//       description: editingItem?.description || '',
//       likes: editingItem?.likes || 0,
//       views: editingItem?.views || 0,
//       image: null
//     });
  
//     const handleSubmit = async () => {
//       if (!formData.title || !formData.artist) {
//         showNotification('Title and artist are required', 'error');
//         return;
//       }
      
//       if (!editingItem && !formData.image) {
//         showNotification('Image is required', 'error');
//         return;
//       }
  
//       setLoading(true);
  
//       try {
//         const formDataObj = new FormData();
//         Object.keys(formData).forEach(key => {
//           if (formData[key] !== null && formData[key] !== '') {
//             formDataObj.append(key, formData[key]);
//           }
//         });
  
//         const url = editingItem 
//           ? `${BASE_URL}/artworks/${editingItem._id}`
//           : `${BASE_URL}/artworks`;
        
//         const method = editingItem ? 'PUT' : 'POST';
  
//         const response = await fetch(url, {
//           method,
//           body: formDataObj
//         });
  
//         if (response.ok) {
//           setShowModal(false);
//           fetchData();
//           showNotification(`Artwork ${editingItem ? 'updated' : 'created'} successfully`);
//         } else {
//           showNotification('Error saving artwork', 'error');
//         }
//       } catch (error) {
//         showNotification('Error saving artwork', 'error');
//       }
//       setLoading(false);
//     };
  
//     return (
//       <div className="space-y-6">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">Image *</label>
//           <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
//             <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) => setFormData({...formData, image: e.target.files[0]})}
//               className="hidden"
//               id="artwork-image-upload"
//             />
//             <label htmlFor="artwork-image-upload" className="cursor-pointer text-blue-600 hover:text-blue-800">
//               Choose artwork image
//             </label>
//             {formData.image && (
//               <p className="mt-2 text-sm text-gray-600">Selected: {formData.image.name}</p>
//             )}
//             {editingItem && !formData.image && (
//               <p className="mt-2 text-sm text-gray-500">Keep current image if no new image selected</p>
//             )}
//           </div>
//         </div>
  
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
//             <input
//               type="text"
//               value={formData.title}
//               onChange={(e) => setFormData({...formData, title: e.target.value})}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               placeholder="Enter artwork title"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Artist *</label>
//             <input
//               type="text"
//               value={formData.artist}
//               onChange={(e) => setFormData({...formData, artist: e.target.value})}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               placeholder="Enter artist name"
//             />
//           </div>
//         </div>
  
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
//           <textarea
//             value={formData.description}
//             onChange={(e) => setFormData({...formData, description: e.target.value})}
//             rows={4}
//             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             placeholder="Enter artwork description"
//           />
//         </div>
  
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Likes</label>
//             <input
//               type="number"
//               value={formData.likes}
//               onChange={(e) => setFormData({...formData, likes: parseInt(e.target.value) || 0})}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               placeholder="0"
//               min="0"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Views</label>
//             <input
//               type="number"
//               value={formData.views}
//               onChange={(e) => setFormData({...formData, views: parseInt(e.target.value) || 0})}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               placeholder="0"
//               min="0"
//             />
//           </div>
//         </div>
  
//         <div className="flex justify-end space-x-3">
//           <button
//             type="button"
//             onClick={() => setShowModal(false)}
//             className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
//           >
//             Cancel
//           </button>
//           <button
//             type="button"
//             onClick={handleSubmit}
//             disabled={loading}
//             className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
//           >
//             {loading ? 'Saving...' : editingItem ? 'Update' : 'Create'}
//           </button>
//         </div>
//       </div>
//     );
//   };

//   const GalleryForm = () => {
//     const [formData, setFormData] = useState({
//       title: editingItem?.title || '',
//       subtitle: editingItem?.subtitle || '',
//       description: editingItem?.description || '',
//       buttonText: editingItem?.buttonText || '',
//       image: null
//     });

//     const handleSubmit = async () => {
//       if (!formData.title) {
//         showNotification('Title is required', 'error');
//         return;
//       }
      
//       if (!editingItem && !formData.image) {
//         showNotification('Image is required', 'error');
//         return;
//       }

//       setLoading(true);

//       try {
//         const formDataObj = new FormData();
//         Object.keys(formData).forEach(key => {
//           if (formData[key] !== null && formData[key] !== '') {
//             formDataObj.append(key, formData[key]);
//           }
//         });

//         const response = await fetch(`${BASE_URL}/gallery`, {
//           method: 'POST',
//           body: formDataObj
//         });

//         if (response.ok) {
//           setShowModal(false);
//           fetchData();
//           showNotification('Gallery item saved successfully');
//         } else {
//           showNotification('Error saving gallery item', 'error');
//         }
//       } catch (error) {
//         showNotification('Error saving gallery item', 'error');
//       }
//       setLoading(false);
//     };

//     return (
//       <div className="space-y-6">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">Image</label>
//           <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
//             <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) => setFormData({...formData, image: e.target.files[0]})}
//               className="hidden"
//               id="image-upload"
//             />
//             <label htmlFor="image-upload" className="cursor-pointer text-blue-600 hover:text-blue-800">
//               Choose image file
//             </label>
//             {formData.image && (
//               <p className="mt-2 text-sm text-gray-600">Selected: {formData.image.name}</p>
//             )}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
//             <input
//               type="text"
//               value={formData.title}
//               onChange={(e) => setFormData({...formData, title: e.target.value})}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               placeholder="Enter title"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
//             <input
//               type="text"
//               value={formData.subtitle}
//               onChange={(e) => setFormData({...formData, subtitle: e.target.value})}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               placeholder="Enter subtitle"
//             />
//           </div>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
//           <textarea
//             value={formData.description}
//             onChange={(e) => setFormData({...formData, description: e.target.value})}
//             rows={4}
//             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             placeholder="Enter description"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">Button Text</label>
//           <input
//             type="text"
//             value={formData.buttonText}
//             onChange={(e) => setFormData({...formData, buttonText: e.target.value})}
//             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             placeholder="Enter button text"
//           />
//         </div>

//         <div className="flex justify-end space-x-3">
//           <button
//             type="button"
//             onClick={() => setShowModal(false)}
//             className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
//           >
//             Cancel
//           </button>
//           <button
//             type="button"
//             onClick={handleSubmit}
//             disabled={loading}
//             className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
//           >
//             {loading ? 'Saving...' : 'Save'}
//           </button>
//         </div>
//       </div>
//     );
//   };

//   const AnnouncementForm = () => {
//     const [formData, setFormData] = useState({
//       icon: editingItem?.icon || '',
//       title: editingItem?.title || '',
//       description: editingItem?.description || '',
//       buttonText: editingItem?.buttonText || ''
//     });

//     const handleSubmit = async () => {
//       if (!formData.title || !formData.description || !formData.icon) {
//         showNotification('Title, description, and icon are required', 'error');
//         return;
//       }

//       setLoading(true);

//       try {
//         const response = await fetch(`${BASE_URL}/announcements`, {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(formData)
//         });

//         if (response.ok) {
//           setShowModal(false);
//           fetchData();
//           showNotification('Announcement saved successfully');
//         } else {
//           showNotification('Error saving announcement', 'error');
//         }
//       } catch (error) {
//         showNotification('Error saving announcement', 'error');
//       }
//       setLoading(false);
//     };

//     return (
//       <div className="space-y-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Icon *</label>
//             <input
//               type="text"
//               value={formData.icon}
//               onChange={(e) => setFormData({...formData, icon: e.target.value})}
//               placeholder="e.g., 🎉, 📢, ⚡"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
//             <input
//               type="text"
//               value={formData.title}
//               onChange={(e) => setFormData({...formData, title: e.target.value})}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               placeholder="Enter announcement title"
//             />
//           </div>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
//           <textarea
//             value={formData.description}
//             onChange={(e) => setFormData({...formData, description: e.target.value})}
//             rows={4}
//             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             placeholder="Enter announcement description"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">Button Text</label>
//           <input
//             type="text"
//             value={formData.buttonText}
//             onChange={(e) => setFormData({...formData, buttonText: e.target.value})}
//             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             placeholder="Enter button text (optional)"
//           />
//         </div>

//         <div className="flex justify-end space-x-3">
//           <button
//             type="button"
//             onClick={() => setShowModal(false)}
//             className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
//           >
//             Cancel
//           </button>
//           <button
//             type="button"
//             onClick={handleSubmit}
//             disabled={loading}
//             className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
//           >
//             {loading ? 'Saving...' : 'Save'}
//           </button>
//         </div>
//       </div>
//     );
//   };

//   const SlideForm = () => {
//     const [formData, setFormData] = useState({
//       title: editingItem?.title || '',
//       subtitle: editingItem?.subtitle || '',
//       image: null
//     });

//     const handleSubmit = async () => {
//       if (!formData.title) {
//         showNotification('Title is required', 'error');
//         return;
//       }
      
//       if (!editingItem && !formData.image) {
//         showNotification('Image is required', 'error');
//         return;
//       }

//       setLoading(true);

//       try {
//         const formDataObj = new FormData();
//         formDataObj.append('title', formData.title);
//         if (formData.subtitle) formDataObj.append('subtitle', formData.subtitle);
//         if (formData.image) formDataObj.append('image', formData.image);

//         const url = editingItem 
//           ? `${BASE_URL}/slides/${editingItem._id}`
//           : `${BASE_URL}/slides`;
        
//         const method = editingItem ? 'PUT' : 'POST';

//         const response = await fetch(url, {
//           method,
//           body: formDataObj
//         });

//         if (response.ok) {
//           setShowModal(false);
//           fetchData();
//           showNotification(`Slide ${editingItem ? 'updated' : 'created'} successfully`);
//         } else {
//           showNotification('Error saving slide', 'error');
//         }
//       } catch (error) {
//         showNotification('Error saving slide', 'error');
//       }
//       setLoading(false);
//     };

//     return (
//       <div className="space-y-6">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">Image *</label>
//           <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
//             <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) => setFormData({...formData, image: e.target.files[0]})}
//               className="hidden"
//               id="slide-image-upload"
//             />
//             <label htmlFor="slide-image-upload" className="cursor-pointer text-blue-600 hover:text-blue-800">
//               Choose slide image
//             </label>
//             {formData.image && (
//               <p className="mt-2 text-sm text-gray-600">Selected: {formData.image.name}</p>
//             )}
//             {editingItem && !formData.image && (
//               <p className="mt-2 text-sm text-gray-500">Current image will be kept if no new image is selected</p>
//             )}
//           </div>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
//           <input
//             type="text"
//             value={formData.title}
//             onChange={(e) => setFormData({...formData, title: e.target.value})}
//             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             placeholder="Enter slide title"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
//           <input
//             type="text"
//             value={formData.subtitle}
//             onChange={(e) => setFormData({...formData, subtitle: e.target.value})}
//             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             placeholder="Enter slide subtitle (optional)"
//           />
//         </div>

//         <div className="flex justify-end space-x-3">
//           <button
//             type="button"
//             onClick={() => setShowModal(false)}
//             className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
//           >
//             Cancel
//           </button>
//           <button
//             type="button"
//             onClick={handleSubmit}
//             disabled={loading}
//             className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
//           >
//             {loading ? 'Saving...' : editingItem ? 'Update' : 'Create'}
//           </button>
//         </div>
//       </div>
//     );
//   };

//   const tabs = [
//     { id: 'slides', label: 'Slides', icon: Monitor, count: slides.length },
//     { id: 'gallery', label: 'Gallery', icon: Image, count: galleryItems.length },
//     { id: 'artworks', label: 'Artworks', icon: Palette, count: artworks.length },
//     { id: 'announcements', label: 'Announcements', icon: Megaphone, count: announcements.length },
//     { id: 'contact', label: 'Contact Messages', icon: MessageCircle, count: contactMessages.length }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-white shadow-sm border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-6">
//             <div>
//               <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
//               <p className="text-gray-600 mt-1">Manage your content and messages</p>
//             </div>
//             <div className="flex items-center space-x-4">
//               <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
//                 2025 Dashboard
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Notification */}
//       {notification && (
//         <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 ${
//           notification.type === 'error' ? 'bg-red-500' : 'bg-green-500'
//         } text-white`}>
//           <div className="flex items-center space-x-2">
//             {notification.type === 'error' ? <AlertCircle size={20} /> : <Check size={20} />}
//             <span>{notification.message}</span>
//           </div>
//         </div>
//       )}

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Tabs */}
//         <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
//           <div className="border-b border-gray-200">
//             <nav className="flex space-x-8 px-6">
//               {tabs.map((tab) => (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
//                     activeTab === tab.id
//                       ? 'border-blue-500 text-blue-600'
//                       : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                   }`}
//                 >
//                   <tab.icon size={20} />
//                   <span>{tab.label}</span>
//                   <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
//                     {tab.count}
//                   </span>
//                 </button>
//               ))}
//             </nav>
//           </div>

//           {/* Tab Content */}
//           <div className="p-6">
//             {/* Slides Tab */}
//             {activeTab === 'slides' && (
//               <div>
//                 <div className="flex justify-between items-center mb-6">
//                   <h2 className="text-xl font-semibold text-gray-900">Carousel Slides</h2>
//                   <button
//                     onClick={() => handleAddNew('slides')}
//                     className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
//                   >
//                     <Plus size={20} />
//                     <span>Add New Slide</span>
//                   </button>
//                 </div>

//                 {slides.length === 0 ? (
//                   <div className="text-center py-12">
//                     <Monitor className="mx-auto h-12 w-12 text-gray-400 mb-4" />
//                     <p className="text-gray-500">No slides yet. Create your first carousel slide!</p>
//                   </div>
//                 ) : (
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {slides.map((slide) => (
//                       <div key={slide._id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
//                         <div className="relative">
//                           <img
//                             src={slide.image}
//                             alt={slide.title}
//                             className="w-full h-48 object-cover"
//                           />
//                           <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
//                             Slide
//                           </div>
//                         </div>
//                         <div className="p-4">
//                           <h3 className="font-semibold text-gray-900 mb-1">{slide.title}</h3>
//                           {slide.subtitle && (
//                             <p className="text-gray-600 text-sm mb-3">{slide.subtitle}</p>
//                           )}
//                           <div className="flex justify-between items-center">
//                             <span className="text-xs text-gray-500">
//                               {new Date(slide.createdAt).toLocaleDateString()}
//                             </span>
//                             <div className="flex space-x-2">
//                               <button
//                                 onClick={() => handleEdit(slide, 'slides')}
//                                 className="text-blue-600 hover:text-blue-800 transition-colors"
//                               >
//                                 <Edit2 size={16} />
//                               </button>
//                               <button
//                                 onClick={() => handleDeleteClick(slide._id, 'slides')}
//                                 className="text-red-600 hover:text-red-800 transition-colors"
//                               >
//                                 <Trash2 size={16} />
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* Gallery Tab */}
//             {activeTab === 'gallery' && (
//               <div>
//                 <div className="flex justify-between items-center mb-6">
//                   <h2 className="text-xl font-semibold text-gray-900">Gallery Items</h2>
//                   <button
//                     onClick={() => handleAddNew('gallery')}
//                     className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
//                   >
//                     <Plus size={20} />
//                     <span>Add New Item</span>
//                   </button>
//                 </div>

//                 {galleryItems.length === 0 ? (
//                   <div className="text-center py-12">
//                     <Image className="mx-auto h-12 w-12 text-gray-400 mb-4" />
//                     <p className="text-gray-500">No gallery items yet. Add your first one!</p>
//                   </div>
//                 ) : (
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {galleryItems.map((item) => (
//                       <div key={item._id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
//                         <img
//                           src={item.image}
//                           alt={item.title}
//                           className="w-full h-48 object-cover"
//                         />
//                         <div className="p-4">
//                           <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
//                           <p className="text-gray-600 text-sm mb-2">{item.subtitle}</p>
//                           <p className="text-gray-500 text-xs mb-4 line-clamp-2">{item.description}</p>
//                           <div className="flex justify-between items-center">
//                             <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
//                               {item.buttonText}
//                             </span>
//                             <div className="flex space-x-2">
//                               <button
//                                 onClick={() => handleEdit(item, 'gallery')}
//                                 className="text-blue-600 hover:text-blue-800 transition-colors"
//                               >
//                                 <Edit2 size={16} />
//                               </button>
//                               <button
//                                 onClick={() => handleDeleteClick(item._id, 'gallery')}
//                                 className="text-red-600 hover:text-red-800 transition-colors"
//                               >
//                                 <Trash2 size={16} />
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             )}
// {/* Artworks Tab */}
// {activeTab === 'artworks' && (
//   <div>
//     <div className="flex justify-between items-center mb-6">
//       <h2 className="text-xl font-semibold text-gray-900">Artworks</h2>
//       <button
//         onClick={() => handleAddNew('artworks')}
//         className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
//       >
//         <Plus size={20} />
//         <span>Add New Artwork</span>
//       </button>
//     </div>

//     {artworks.length === 0 ? (
//       <div className="text-center py-12">
//         <Palette className="mx-auto h-12 w-12 text-gray-400 mb-4" />
//         <p className="text-gray-500">No artworks yet. Add your first artwork!</p>
//       </div>
//     ) : (
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {artworks.map((artwork) => (
//           <div key={artwork._id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
//             <img
//               src={artwork.imageUrl}
//               alt={artwork.title}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="font-semibold text-gray-900 mb-1">{artwork.title}</h3>
//               <p className="text-gray-600 text-sm mb-2">by {artwork.artist}</p>
//               <p className="text-gray-500 text-xs mb-3 line-clamp-2">{artwork.description}</p>
//               <div className="flex justify-between items-center mb-3">
//                 <div className="flex space-x-4 text-xs text-gray-500">
//                   <span>❤️ {artwork.likes}</span>
//                   <span>👁️ {artwork.views}</span>
//                 </div>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-xs text-gray-500">
//                   {new Date(artwork.createdAt).toLocaleDateString()}
//                 </span>
//                 <div className="flex space-x-2">
//                   <button
//                     onClick={() => handleEdit(artwork, 'artworks')}
//                     className="text-blue-600 hover:text-blue-800 transition-colors"
//                   >
//                     <Edit2 size={16} />
//                   </button>
//                   <button
//                     onClick={() => handleDeleteClick(artwork._id, 'artworks')}
//                     className="text-red-600 hover:text-red-800 transition-colors"
//                   >
//                     <Trash2 size={16} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     )}
//   </div>
// )}
//             {/* Announcements Tab */}
//             {activeTab === 'announcements' && (
//               <div>
//                 <div className="flex justify-between items-center mb-6">
//                   <h2 className="text-xl font-semibold text-gray-900">Announcements</h2>
//                   <button
//                     onClick={() => handleAddNew('announcements')}
//                     className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
//                   >
//                     <Plus size={20} />
//                     <span>Add Announcement</span>
//                   </button>
//                 </div>

//                 {announcements.length === 0 ? (
//                   <div className="text-center py-12">
//                     <Megaphone className="mx-auto h-12 w-12 text-gray-400 mb-4" />
//                     <p className="text-gray-500">No announcements yet. Create your first one!</p>
//                   </div>
//                 ) : (
//                   <div className="space-y-4">
//                     {announcements.map((item) => (
//                       <div key={item._id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
//                         <div className="flex items-start justify-between">
//                           <div className="flex items-start space-x-4">
//                             <div className="text-3xl">{item.icon}</div>
//                             <div className="flex-1">
//                               <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
//                               <p className="text-gray-600 mb-3">{item.description}</p>
//                               {item.buttonText && (
//                                 <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
//                                   {item.buttonText}
//                                 </span>
//                               )}
//                             </div>
//                           </div>
//                           <div className="flex space-x-2 ml-4">
//                             <button
//                               onClick={() => handleEdit(item, 'announcements')}
//                               className="text-blue-600 hover:text-blue-800 transition-colors"
//                             >
//                               <Edit2 size={18} />
//                             </button>
//                             <button
//                               onClick={() => handleDeleteClick(item._id, 'announcements')}
//                               className="text-red-600 hover:text-red-800 transition-colors"
//                             >
//                               <Trash2 size={18} />
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* Contact Messages Tab */}
//             {activeTab === 'contact' && (
//               <div>
//                 <div className="flex justify-between items-center mb-6">
//                   <h2 className="text-xl font-semibold text-gray-900">Contact Messages</h2>
//                   <div className="text-sm text-gray-500">
//                     {contactMessages.length} messages received
//                   </div>
//                 </div>

//                 {contactMessages.length === 0 ? (
//                   <div className="text-center py-12">
//                     <MessageCircle className="mx-auto h-12 w-12 text-gray-400 mb-4" />
//                     <p className="text-gray-500">No contact messages yet.</p>
//                   </div>
//                 ) : (
//                   <div className="space-y-4">
//                     {contactMessages.map((message) => (
//                       <div key={message._id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
//                         <div className="flex justify-between items-start mb-4">
//                           <div className="flex items-center space-x-3">
//                           <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
//                               <MessageCircle className="w-5 h-5 text-blue-600" />
//                             </div>
//                             <div>
//                               <h3 className="font-semibold text-gray-900">{message.name}</h3>
//                               <p className="text-sm text-gray-500">{message.email}</p>
//                             </div>
//                           </div>
//                           <div className="text-sm text-gray-400">
//                             {new Date(message.createdAt).toLocaleDateString()}
//                           </div>
//                         </div>
//                         <div className="mb-4">
//                           <p className="text-gray-700">{message.message}</p>
//                         </div>
//                         <div className="flex justify-end">
//                           <button
//                             onClick={() => handleDeleteClick(message._id, 'contact')}
//                             className="text-red-600 hover:text-red-800 transition-colors flex items-center space-x-1"
//                           >
//                             <Trash2 size={16} />
//                             <span>Delete</span>
//                           </button>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="flex justify-between items-center p-6 border-b border-gray-200">
//               <h3 className="text-lg font-semibold text-gray-900">
//                 {editingItem ? 'Edit' : 'Add New'} {
//                   modalType === 'gallery' ? 'Gallery Item' :
//                   modalType === 'announcements' ? 'Announcement' :
//                   modalType === 'slides' ? 'Slide' :
//                   modalType === 'artworks' ? 'Artwork' : ''

                  
//                 },
//               </h3>
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="text-gray-400 hover:text-gray-600 transition-colors"
//               >
//                 <X size={24} />
//               </button>
//             </div>
//             <div className="p-6">
//               {modalType === 'gallery' && <GalleryForm />}
//               {modalType === 'announcements' && <AnnouncementForm />}
//               {modalType === 'slides' && <SlideForm />}
//               {modalType === 'artworks' && <ArtworkForm />}

//             </div>
//           </div>
//         </div>
//       )}

//       {/* Delete Confirmation Modal */}
//       {showDeleteConfirm && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-xl shadow-2xl max-w-md w-full">
//             <div className="p-6">
//               <div className="flex items-center space-x-3 mb-4">
//                 <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
//                   <AlertCircle className="w-5 h-5 text-red-600" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900">Confirm Delete</h3>
//                   <p className="text-sm text-gray-500">This action cannot be undone.</p>
//                 </div>
//               </div>
//               <p className="text-gray-600 mb-6">
//                 Are you sure you want to delete this item?
//               </p>
//               <div className="flex justify-end space-x-3">
//                 <button
//                   onClick={cancelDelete}
//                   className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={confirmDelete}
//                   className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminPanel;


import React, { useState, useEffect ,useCallback} from 'react';
import { 
  User, ImageIcon, Bell, MessageCircle, Presentation, Palette,
  Menu, X, Plus, Edit, Trash2, Search, Compass,
  AlertTriangle, CheckCircle, Heart, Eye 
} from 'lucide-react';
import BASE_URL from '../config';

const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [data, setData] = useState({
    gallery: [],
    announcements: [],
    contacts: [],
    slides: [],
    journeys: []
  });
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalMessages: 0,
    hasNext: false,
    hasPrev: false
  });
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [notification, setNotification] = useState(null);

  // API Base URL - adjust this to your backend URL

  // Updated API functions to match backend routes
  const api = {
    gallery: {
      get: async () => {
        const response = await fetch(`${BASE_URL}/gallery`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
      },
      create: async (formData) => {
        const response = await fetch(`${BASE_URL}/gallery`, {
          method: 'POST',
          body: formData
        });
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || 'Failed to create gallery item');
        }
        return response.json();
      },
      update: async (id, formData) => {
        const response = await fetch(`${BASE_URL}/gallery/${id}`, {
          method: 'PUT',
          body: formData
        });
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || 'Failed to update gallery item');
        }
        return response.json();
      },
      delete: async (id) => {
        const response = await fetch(`${BASE_URL}/gallery/${id}`, {
          method: 'DELETE'
        });
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || 'Failed to delete gallery item');
        }
        return response.json();
      }
    },
    announcements: {
      get: async () => {
        const response = await fetch(`${BASE_URL}/announcements`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
      },
      create: async (data) => {
        const response = await fetch(`${BASE_URL}/announcements`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || 'Failed to create announcement');
        }
        return response.json();
      },
      update: async (id, data) => {
        const response = await fetch(`${BASE_URL}/announcements/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || 'Failed to update announcement');
        }
        return response.json();
      },
      delete: async (id) => {
        const response = await fetch(`${BASE_URL}/announcements/${id}`, {
          method: 'DELETE'
        });
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || 'Failed to delete announcement');
        }
        return response.json();
      }
    },
    contacts: {
      get: async (page = 1, limit = 10, filters = {}) => {
        const params = new URLSearchParams({
          page: page.toString(),
          limit: limit.toString(),
          ...filters
        });
        
        const response = await fetch(`${BASE_URL}/contact?${params}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
      },
      getById: async (id) => {
        const response = await fetch(`${BASE_URL}/contact/${id}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
      },
      update: async (id, data) => {
        const response = await fetch(`${BASE_URL}/contact/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || 'Failed to update contact');
        }
        return response.json();
      },
      delete: async (id) => {
        const response = await fetch(`${BASE_URL}/contact/${id}`, {
          method: 'DELETE'
        });
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || 'Failed to delete contact');
        }
        return response.json();
      }
    },
    slides: {
      get: async () => {
        const response = await fetch(`${BASE_URL}/slides`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
      },
      create: async (formData) => {
        const response = await fetch(`${BASE_URL}/slides`, {
          method: 'POST',
          body: formData
        });
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || 'Failed to create slide');
        }
        return response.json();
      },
      update: async (id, formData) => {
        const response = await fetch(`${BASE_URL}/slides/${id}`, {
          method: 'PUT',
          body: formData
        });
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || 'Failed to update slide');
        }
        return response.json();
      },
      delete: async (id) => {
        const response = await fetch(`${BASE_URL}/slides/${id}`, {
          method: 'DELETE'
        });
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || 'Failed to delete slide');
        }
        return response.json();
      }
    },
    journeys: {
      get: async () => {
        const response = await fetch(`${BASE_URL}/journeys`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
      },
      create: async (formData) => {
        const response = await fetch(`${BASE_URL}/journeys`, {
          method: 'POST',
          body: formData
        });
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || 'Failed to create journey');
        }
        return response.json();
      },
      update: async (id, formData) => {
        const response = await fetch(`${BASE_URL}/journeys/${id}`, {
          method: 'PUT',
          body: formData
        });
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || 'Failed to update journey');
        }
        return response.json();
      },
      delete: async (id) => {
        const response = await fetch(`${BASE_URL}/journeys/${id}`, {
          method: 'DELETE'
        });
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || 'Failed to delete journey');
        }
        return response.json();
      }
    }
  };

  // FIXED: Use useCallback to prevent unnecessary re-renders and re-fetches
  const loadData = useCallback(async () => {
    if (loading) return; // Prevent multiple simultaneous calls
    
    if (activeSection === 'dashboard') {
      setLoading(true);
      try {
        const [gallery, announcements, contactsData, slides, journeys] = await Promise.all([
          api.gallery.get(),
          api.announcements.get(),
          api.contacts.get(1, 10),
          api.slides.get(),
          api.journeys.get()
        ]);
        setData({
          gallery,
          announcements,
          contacts: contactsData.messages || [],
          slides,
          journeys
        });
        if (contactsData.pagination) {
          setPagination(contactsData.pagination);
        }
      } catch (error) {
        showNotification('Error loading dashboard data', 'error');
        console.error('Error loading dashboard data:', error);
      }
      setLoading(false);
    } else if (activeSection === 'contacts') {
      setLoading(true);
      try {
        const result = await api.contacts.get(pagination.currentPage, 10, filters);
        setData(prev => ({ ...prev, contacts: result.messages || [] }));
        setPagination(result.pagination);
      } catch (error) {
        showNotification('Error loading contacts data', 'error');
        console.error('Error loading contacts data:', error);
      }
      setLoading(false);
    } else {
      setLoading(true);
      try {
        const result = await api[activeSection]?.get();
        setData(prev => ({ ...prev, [activeSection]: result || [] }));
      } catch (error) {
        showNotification(`Error loading ${activeSection} data`, 'error');
        console.error(`Error loading ${activeSection} data:`, error);
      }
      setLoading(false);
    }
  }, [activeSection, pagination.currentPage, filters, loading]); // FIXED: Added proper dependencies

  // FIXED: Use dependency array properly to prevent unnecessary calls
  useEffect(() => {
    loadData();
  }, [activeSection]); // FIXED: Removed loadData from dependencies to prevent loops

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleContactUpdate = async (id, updateData) => {
    if (loading) return; // Prevent multiple calls
    
    try {
      setLoading(true);
      await api.contacts.update(id, updateData);
      
      // FIXED: Only reload if successful
      const result = await api.contacts.get(pagination.currentPage, 10, filters);
      setData(prev => ({ ...prev, contacts: result.messages || [] }));
      setPagination(result.pagination);
      showNotification('Contact updated successfully');
    } catch (error) {
      showNotification(error.message || 'Error updating contact', 'error');
      console.error('Error updating contact:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = async (newPage) => {
    if (newPage >= 1 && newPage <= pagination.totalPages && !loading) { // FIXED: Check loading state
      setLoading(true);
      try {
        const result = await api.contacts.get(newPage, 10, filters);
        setData(prev => ({ ...prev, contacts: result.messages || [] }));
        setPagination(result.pagination);
      } catch (error) {
        showNotification('Error loading page', 'error');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleFilterChange = async (newFilters) => {
    if (loading) return; // Prevent multiple calls
    
    setFilters(newFilters);
    setLoading(true);
    try {
      const result = await api.contacts.get(1, 10, newFilters);
      setData(prev => ({ ...prev, contacts: result.messages || [] }));
      setPagination(result.pagination);
    } catch (error) {
      showNotification('Error applying filters', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (formData) => {
    if (loading) return; // FIXED: Prevent multiple submissions
    
    try {
      setLoading(true);
      const result = await api[activeSection].create(formData);
      const newItem = result.item || result.slide || result.journey || result;
      
      // FIXED: Check if item already exists before adding
      setData(prev => {
        const existingItems = prev[activeSection];
        const itemExists = existingItems.some(item => item._id === newItem._id);
        
        if (!itemExists) {
          return { 
            ...prev, 
            [activeSection]: [newItem, ...existingItems] 
          };
        }
        return prev; // Don't add if already exists
      });
      
      setShowForm(false);
      setEditingItem(null); // FIXED: Clear editing state
      showNotification('Item created successfully');
    } catch (error) {
      showNotification(error.message || 'Error creating item', 'error');
      console.error('Error creating:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (id, formData) => {
    if (loading) return; // FIXED: Prevent multiple submissions
    
    try {
      setLoading(true);
      const result = await api[activeSection].update(id, formData);
      const updatedItem = result.item || result.slide || result.journey || result;
      
      setData(prev => ({
        ...prev,
        [activeSection]: prev[activeSection].map(item => 
          item._id === id ? updatedItem : item
        )
      }));
      
      setEditingItem(null);
      setShowForm(false); // FIXED: Close form after update
      showNotification('Item updated successfully');
    } catch (error) {
      showNotification(error.message || 'Error updating item', 'error');
      console.error('Error updating:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this item?') || loading) return;
    
    try {
      setLoading(true);
      await api[activeSection].delete(id);
      
      // FIXED: Only update state if deletion was successful
      setData(prev => ({
        ...prev,
        [activeSection]: prev[activeSection].filter(item => item._id !== id)
      }));
      
      showNotification('Item deleted successfully');
    } catch (error) {
      showNotification(error.message || 'Error deleting item', 'error');
      console.error('Error deleting:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredData = data[activeSection]?.filter(item => {
    if (!searchTerm) return true;
    const searchLower = searchTerm.toLowerCase();
    return (
      item.title?.toLowerCase().includes(searchLower) ||
      item.name?.toLowerCase().includes(searchLower) ||
      item.email?.toLowerCase().includes(searchLower) ||
      item.message?.toLowerCase().includes(searchLower) ||
      item.description?.toLowerCase().includes(searchLower) ||
      item.subtitle?.toLowerCase().includes(searchLower) ||
      item.label?.toLowerCase().includes(searchLower)
    );
  }) || [];

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: User },
    { id: 'gallery', label: 'Gallery', icon: ImageIcon },
    { id: 'announcements', label: 'Announcements', icon: Bell },
    { id: 'contacts', label: 'Contacts', icon: MessageCircle },
    { id: 'slides', label: 'Slides', icon: Presentation },
    { id: 'journeys', label: 'Journeys', icon: Compass }
  ];

  const renderForm = () => {
    if (activeSection === 'dashboard' || activeSection === 'contacts') return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">
              {editingItem ? 'Edit' : 'Create'} {activeSection.slice(0, -1)}
            </h2>
            <button
              onClick={() => {
                setShowForm(false);
                setEditingItem(null);
              }}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
          </div>
          
          <form onSubmit={(e) => {
            e.preventDefault();
            
            // FIXED: Prevent multiple submissions
            if (loading) return;
            
            // Handle different form data types correctly
            let formData;
            if (activeSection === 'announcements') {
              // For announcements, use regular JSON
              formData = Object.fromEntries(new FormData(e.target));
            } else {
              // For sections with file uploads, use FormData
              formData = new FormData(e.target);
            }
            
            if (activeSection === 'contacts' && editingItem) {
              const contactData = Object.fromEntries(new FormData(e.target));
              handleContactUpdate(editingItem._id, contactData);
            } else if (editingItem) {
              handleUpdate(editingItem._id, formData);
            } else {
              handleCreate(formData);
            }
          }}>
            
            {/* Your existing form fields remain the same */}
            {activeSection === 'gallery' && (
              <>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    defaultValue={editingItem?.title || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subtitle
                  </label>
                  <input
                    type="text"
                    name="subtitle"
                    defaultValue={editingItem?.subtitle || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    defaultValue={editingItem?.description || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="3"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Button Text
                  </label>
                  <input
                    type="text"
                    name="buttonText"
                    defaultValue={editingItem?.buttonText || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Image
                  </label>
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...(!editingItem && { required: true })}
                  />
                  {editingItem && editingItem.image && (
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">Current image:</p>
                      <img 
                        src={editingItem.image} 
                        alt="Current" 
                        className="mt-1 w-20 h-20 object-cover rounded"
                      />
                    </div>
                  )}
                </div>
              </>
            )}
            
            {activeSection === 'announcements' && (
              <>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Icon
                  </label>
                  <input
                    type="text"
                    name="icon"
                    defaultValue={editingItem?.icon || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Icon name (e.g., bell, info)"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    defaultValue={editingItem?.title || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    defaultValue={editingItem?.description || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Button Text
                  </label>
                  <input
                    type="text"
                    name="buttonText"
                    defaultValue={editingItem?.buttonText || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </>
            )}
            
            {activeSection === 'slides' && (
              <>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    defaultValue={editingItem?.title || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subtitle
                  </label>
                  <input
                    type="text"
                    name="subtitle"
                    defaultValue={editingItem?.subtitle || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Image
                  </label>
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...(!editingItem && { required: true })}
                  />
                  {editingItem && editingItem.image && (
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">Current image:</p>
                      <img 
                        src={editingItem.image} 
                        alt="Current" 
                        className="mt-1 w-20 h-20 object-cover rounded"
                      />
                    </div>
                  )}
                </div>
              </>
            )}

            {activeSection === 'journeys' && ( // Updated form for journeys
              <>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    defaultValue={editingItem?.title || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    defaultValue={editingItem?.description || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="3"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Label
                  </label>
                  <input
                    type="text"
                    name="label"
                    defaultValue={editingItem?.label || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                {/* <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Background Color
                  </label>
                  <input
                    type="color"
                    name="bgColor"
                    defaultValue={editingItem?.bgColor || '#ffffff'}
                    className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Text Color
                  </label>
                  <input
                    type="color"
                    name="textColor"
                    defaultValue={editingItem?.textColor || '#000000'}
                    className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div> */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Image
                  </label>
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...(!editingItem && { required: true })}
                  />
                  {editingItem && editingItem.imageUrl && (
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">Current image:</p>
                      <img 
                        src={editingItem.imageUrl} 
                        alt="Current" 
                        className="mt-1 w-20 h-20 object-cover rounded"
                      />
                    </div>
                  )}
                </div>
              </>
            )}
            
         <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setEditingItem(null);
                }}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Saving...' : (editingItem ? 'Update' : 'Create')}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const renderDashboard = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <ImageIcon className="h-8 w-8 text-blue-600" />
          <div className="ml-4">
            <h3 className="text-lg font-semibold">Gallery</h3>
            <p className="text-3xl font-bold text-blue-600">{data.gallery.length}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <Bell className="h-8 w-8 text-green-600" />
          <div className="ml-4">
            <h3 className="text-lg font-semibold">Announcements</h3>
            <p className="text-3xl font-bold text-green-600">{data.announcements.length}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <MessageCircle className="h-8 w-8 text-purple-600" />
          <div className="ml-4">
            <h3 className="text-lg font-semibold">Contacts</h3>
            <p className="text-3xl font-bold text-purple-600">{data.contacts.length}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <Presentation className="h-8 w-8 text-orange-600" />
          <div className="ml-4">
            <h3 className="text-lg font-semibold">Slides</h3>
            <p className="text-3xl font-bold text-orange-600">{data.slides.length}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <Compass className="h-8 w-8 text-indigo-600" />
          <div className="ml-4">
            <h3 className="text-lg font-semibold">Journeys</h3>
            <p className="text-3xl font-bold text-indigo-600">{data.journeys.length}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGalleryCard = (item) => (
    <div key={item._id} className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={item.imageUrl}
        alt={item.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
        {item.subtitle && <p className="text-gray-500 text-sm mb-2">{item.subtitle}</p>}
        <p className="text-gray-600 text-sm mb-3">{item.description}</p>
        {item.buttonText && (
          <p className="text-blue-600 text-sm mb-3">Button: {item.buttonText}</p>
        )}
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <span>{new Date(item.createdAt).toLocaleDateString()}</span>
        </div>
        
        <div className="flex justify-end space-x-2">
          {/* <button
            onClick={() => {
              setEditingItem(item);
              setShowForm(true);
            }}
            className="p-2 text-green-600 hover:bg-green-50 rounded"
          >
            <Edit size={16} />
          </button> */}
          <button
            onClick={() => handleDelete(item._id)}
            className="p-2 text-red-600 hover:bg-red-50 rounded"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );

  const renderAnnouncementCard = (item) => (
    <div key={item._id} className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        {item.icon && (
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
            {item.icon}
          </span>
        )}
      </div>
      
      <p className="text-gray-600 mb-4">{item.description}</p>
      
      {item.buttonText && (
        <p className="text-blue-600 text-sm mb-3">Button: {item.buttonText}</p>
      )}
      
      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
        <span>{new Date(item.createdAt).toLocaleDateString()}</span>
      </div>
      
      <div className="flex justify-end space-x-2">
        <button
          onClick={() => {
            setEditingItem(item);
            setShowForm(true);
          }}
          className="p-2 text-green-600 hover:bg-green-50 rounded"
        >
          <Edit size={16} />
        </button>
        <button
          onClick={() => handleDelete(item._id)}
          className="p-2 text-red-600 hover:bg-red-50 rounded"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );

const renderContactCard = (item) => (
  <div key={item._id} className="bg-white rounded-lg shadow-md p-6">
    <div className="flex items-center justify-between mb-3">
      <h3 className="text-lg font-semibold">{item.name}</h3>
      <div className="flex items-center space-x-2">
        <span className={`px-2 py-1 text-xs rounded ${
          item.status === 'new' ? 'bg-blue-100 text-blue-800' :
          item.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
          item.status === 'resolved' ? 'bg-green-100 text-green-800' :
          'bg-gray-100 text-gray-800'
        }`}>
          {item.status || 'new'}
        </span>
        <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
          {new Date(item.createdAt).toLocaleDateString()}
        </span>
      </div>
    </div>
    
    <div className="space-y-2 mb-4">
      <p className="text-gray-600 text-sm">
        <strong>Email:</strong> {item.email}
      </p>
      <p className="text-gray-600 text-sm">
        <strong>Phone:</strong> {item.mobile}
      </p>
      {item.state && (
        <p className="text-gray-600 text-sm">
          <strong>State:</strong> {item.state}
        </p>
      )}
      {item.city && (
        <p className="text-gray-600 text-sm">
          <strong>City:</strong> {item.city}
        </p>
      )}
      {item.school && (
        <p className="text-gray-600 text-sm">
          <strong>School:</strong> {item.school}
        </p>
      )}
      {item.grade && (
        <p className="text-gray-600 text-sm">
          <strong>Grade:</strong> {item.grade}
        </p>
      )}
      {/* <p className="text-gray-600 text-sm">
        <strong>Message:</strong> {item.message}
      </p>
      {item.notes && (
        <p className="text-gray-600 text-sm">
          <strong>Notes:</strong> {item.notes}
        </p>
      )
      } */}
    </div>
    
    <div className="flex justify-between items-center">
      <div className="flex space-x-2">
        <select 
          value={item.status || 'new'}
          onChange={(e) => handleContactUpdate(item._id, { status: e.target.value })}
          className="px-2 py-1 border border-gray-300 rounded text-sm"
        >
          <option value="new">New</option>
          <option value="in-progress">In Progress</option>
          <option value="resolved">Resolved</option>
        </select>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => {
            setEditingItem(item);
            setShowForm(true);
          }}
          className="p-2 text-green-600 hover:bg-green-50 rounded"
        >
          {/* <Edit size={16} />
        </button>
        <button
          onClick={() => handleDelete(item._id)}
          className="p-2 text-red-600 hover:bg-red-50 rounded"
        > */}
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  </div>
);
  const renderSlideCard = (item) => (
    <div key={item._id} className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
        {item.subtitle && <p className="text-gray-500 text-sm mb-2">{item.subtitle}</p>}
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <span>{new Date(item.createdAt).toLocaleDateString()}</span>
        </div>
        
        <div className="flex justify-end space-x-2">
          <button
            onClick={() => {
              setEditingItem(item);
              setShowForm(true);
            }}
            className="p-2 text-green-600 hover:bg-green-50 rounded"
          >
            <Edit size={16} />
          </button>
          <button
            onClick={() => handleDelete(item._id)}
            className="p-2 text-red-600 hover:bg-red-50 rounded"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );

//   const renderContactFilters = () => (
//   <div className="bg-white rounded-lg shadow p-4 mb-4">
//     <h3 className="text-lg font-semibold mb-3">Filters</h3>
//     <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
//         <input
//           type="text"
//           placeholder="Filter by state"
//           value={filters.state || ''}
//           onChange={(e) => handleFilterChange({ ...filters, state: e.target.value })}
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
//         <input
//           type="text"
//           placeholder="Filter by city"
//           value={filters.city || ''}
//           onChange={(e) => handleFilterChange({ ...filters, city: e.target.value })}
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-1">School</label>
//         <input
//           type="text"
//           placeholder="Filter by school"
//           value={filters.school || ''}
//           onChange={(e) => handleFilterChange({ ...filters, school: e.target.value })}
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-1">Grade</label>
//         <input
//           type="text"
//           placeholder="Filter by grade"
//           value={filters.grade || ''}
//           onChange={(e) => handleFilterChange({ ...filters, grade: e.target.value })}
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>
//     </div>
//     <div className="mt-3 flex justify-end">
//       <button
//         onClick={() => handleFilterChange({})}
//         className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
//       >
//         Clear Filters
//       </button>
//     </div>
//   </div>
// );

const renderPagination = () => (
  <div className="flex justify-between items-center mt-6">
    <div className="text-sm text-gray-500">
      Showing {((pagination.currentPage - 1) * 10) + 1} to {Math.min(pagination.currentPage * 10, pagination.totalMessages)} of {pagination.totalMessages} contacts
    </div>
    <div className="flex space-x-2">
      <button
        onClick={() => handlePageChange(pagination.currentPage - 1)}
        disabled={!pagination.hasPrev}
        className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Previous
      </button>
      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-md">
        {pagination.currentPage} of {pagination.totalPages}
      </span>
      <button
        onClick={() => handlePageChange(pagination.currentPage + 1)}
        disabled={!pagination.hasNext}
        className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  </div>
);

  const renderJourneyCard = (item) => (
    <div key={item._id} className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={item.imageUrl}
        alt={item.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
        {item.description && <p className="text-gray-600 text-sm mb-2">{item.description}</p>}
        {item.label && (
          <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded mb-2">
            {item.label}
          </span>
        )}
        
        <div className="flex items-center space-x-2 mb-3">
          <div 
            className="w-4 h-4 rounded border"
            style={{ backgroundColor: item.bgColor }}
          />
          <span className="text-xs text-gray-500">BG: {item.bgColor}</span>
          <div 
            className="w-4 h-4 rounded border"
            style={{ backgroundColor: item.textColor }}
          />
          <span className="text-xs text-gray-500">Text: {item.textColor}</span>
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <span>{new Date(item.createdAt).toLocaleDateString()}</span>
        </div>
        
        <div className="flex justify-end space-x-2">
          <button
            onClick={() => {
              setEditingItem(item);
              setShowForm(true);
            }}
            className="p-2 text-green-600 hover:bg-green-50 rounded"
          >
            <Edit size={16} />
          </button>
          <button
            onClick={() => handleDelete(item._id)}
            className="p-2 text-red-600 hover:bg-red-50 rounded"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      );
    }

    if (activeSection === 'dashboard') {
      return renderDashboard();
    }

  return (
  <div className="space-y-4">
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold capitalize">{activeSection}</h2>
      {activeSection !== 'contacts' && (
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center space-x-2"
        >
          <Plus size={20} />
          <span>Add New</span>
        </button>
      )}
    </div>

    {/* {activeSection === 'contacts' && renderContactFilters()} */}

    {activeSection !== 'contacts' && (
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder={`Search ${activeSection}...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    )}

    {filteredData.length === 0 ? (
      <div className="text-center py-12">
        <p className="text-gray-500">No {activeSection} found.</p>
      </div>
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map(item => {
          switch (activeSection) {
            case 'gallery':
              return renderGalleryCard(item);
            case 'announcements':
              return renderAnnouncementCard(item);
            case 'contacts':
              return renderContactCard(item);
            case 'slides':
              return renderSlideCard(item);
            case 'journeys':
              return renderJourneyCard(item);
            default:
              return null;
          }
        })}
      </div>
    )}

    {activeSection === 'contacts' && renderPagination()}
  </div>
);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Notification */}
      {notification && (
        <div className={`fixed top-4 right-4 z-50 px-4 py-2 rounded-md ${
          notification.type === 'error' ? 'bg-red-500' : 'bg-green-500'
        } text-white`}>
          {notification.message}
        </div>
      )}

      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="bg-white p-2 rounded-md shadow-md"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
        </div>
        
        <nav className="mt-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                setSidebarOpen(false);
                setSearchTerm('');
              }}
              className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-50 ${
                activeSection === item.id ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' : 'text-gray-700'
              }`}
            >
              <item.icon size={20} className="mr-3" />
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="lg:ml-64 p-6">
        <div className="max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Form Modal */}
      {showForm && renderForm()}
    </div>
  );
};

// Required imports for the component


export default AdminPanel;