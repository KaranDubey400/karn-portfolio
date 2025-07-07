
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, ArrowLeft, Plus, Eye, EyeOff, Trash2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../hooks/use-toast';

const MyReads = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Clean Code",
      author: "Robert C. Martin",
      category: "Programming",
      year: "2023"
    },
    {
      id: 2,
      title: "The Pragmatic Programmer",
      author: "David Thomas & Andrew Hunt",
      category: "Programming",
      year: "2023"
    },
    {
      id: 3,
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      category: "Programming",
      year: "2022"
    },
    {
      id: 4,
      title: "Atomic Habits",
      author: "James Clear",
      category: "Self Development",
      year: "2022"
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(null);
  const [password, setPassword] = useState('');
  const [deletePassword, setDeletePassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showDeletePassword, setShowDeletePassword] = useState(false);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    category: '',
    year: new Date().getFullYear().toString()
  });

  const correctPassword = "karan@123";

  const handleAddReads = () => {
    if (password !== correctPassword) {
      toast({
        title: "Access Denied",
        description: "Incorrect password. Please try again.",
        variant: "destructive",
      });
      return;
    }

    if (!newBook.title || !newBook.author) {
      toast({
        title: "Missing Information",
        description: "Please fill in at least the title and author.",
        variant: "destructive",
      });
      return;
    }

    const bookWithId = {
      ...newBook,
      id: Date.now() // Simple ID generation
    };

    setBooks([...books, bookWithId]);
    setNewBook({
      title: '',
      author: '',
      category: '',
      year: new Date().getFullYear().toString()
    });
    setPassword('');
    setShowAddForm(false);
    
    toast({
      title: "Book Added",
      description: `"${newBook.title}" has been added to your reading list.`,
      variant: "default",
    });
  };

  const handleDeleteBook = (bookId) => {
    if (deletePassword !== correctPassword) {
      toast({
        title: "Access Denied",
        description: "Incorrect password. Please try again.",
        variant: "destructive",
      });
      return;
    }

    const bookToDelete = books.find(book => book.id === bookId);
    setBooks(books.filter(book => book.id !== bookId));
    setDeletePassword('');
    setShowDeleteForm(null);
    
    toast({
      title: "Book Deleted",
      description: `"${bookToDelete.title}" has been removed from your reading list.`,
      variant: "default",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="flex items-center mb-8"
            variants={itemVariants}
          >
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="mr-4"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Portfolio
            </Button>
          </motion.div>

          <motion.div 
            className="flex items-center justify-center mb-12"
            variants={itemVariants}
          >
            <Book size={36} className="text-primary mr-4" />
            <h1 className="text-3xl md:text-4xl font-bold">My Reading List</h1>
          </motion.div>

          {/* Add Book Section */}
          <motion.div 
            className="mb-8"
            variants={itemVariants}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Add New Book</span>
                  <Button
                    onClick={() => setShowAddForm(!showAddForm)}
                    variant="outline"
                    size="sm"
                  >
                    <Plus size={16} className="mr-2" />
                    {showAddForm ? 'Cancel' : 'Add Book'}
                  </Button>
                </CardTitle>
              </CardHeader>
              {showAddForm && (
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Book Title</label>
                      <Input
                        type="text"
                        placeholder="Enter book title"
                        value={newBook.title}
                        onChange={(e) => setNewBook({...newBook, title: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Author</label>
                      <Input
                        type="text"
                        placeholder="Enter author name"
                        value={newBook.author}
                        onChange={(e) => setNewBook({...newBook, author: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Category</label>
                      <Input
                        type="text"
                        placeholder="Enter category"
                        value={newBook.category}
                        onChange={(e) => setNewBook({...newBook, category: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Year Read</label>
                      <Input
                        type="text"
                        placeholder="Enter year"
                        value={newBook.year}
                        onChange={(e) => setNewBook({...newBook, year: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-2">Password</label>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter password to add book"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </Button>
                      </div>
                    </div>
                    <div className="pt-6">
                      <Button onClick={handleAddReads} className="bg-primary hover:bg-primary/90">
                        Add Reads
                      </Button>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
          >
            {books.map((book, index) => (
              <motion.div key={book.id} variants={itemVariants}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{book.title}</CardTitle>
                        <p className="text-muted-foreground">by {book.author}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowDeleteForm(book.id)}
                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="px-3 py-1 rounded-full text-sm bg-muted">
                          {book.category}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          Read in {book.year}
                        </span>
                      </div>
                      
                      {showDeleteForm === book.id && (
                        <div className="border-t pt-4 space-y-3">
                          <div className="relative">
                            <Input
                              type={showDeletePassword ? "text" : "password"}
                              placeholder="Enter password to delete"
                              value={deletePassword}
                              onChange={(e) => setDeletePassword(e.target.value)}
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                              onClick={() => setShowDeletePassword(!showDeletePassword)}
                            >
                              {showDeletePassword ? <EyeOff size={16} /> : <Eye size={16} />}
                            </Button>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => handleDeleteBook(book.id)}
                            >
                              Delete
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                setShowDeleteForm(null);
                                setDeletePassword('');
                              }}
                            >
                              Cancel
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default MyReads;
