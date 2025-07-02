import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Download, Mail, Smartphone } from 'lucide-react';

const EnrollmentModal = ({ isOpen, onClose, course }) => {
  const handlePaymentComplete = () => {
    alert(
      `Payment initiated for ${course?.title || 'Course'}! Course details will be sent to Growwithrs25@gmail.com once payment is verified.`
    );
    onClose();
  };

  if (!course) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">{`Enroll in ${course.title}`}</DialogTitle>
          <DialogDescription className="text-center">
            Scan the QR code to complete your payment
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Course Details */}
          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                <p className="text-3xl font-bold text-green-600 mb-2">{course.price}</p>
                <p className="text-sm text-gray-600">One-time payment</p>
              </div>
            </CardContent>
          </Card>

          {/* QR Code */}
          <div className="text-center">
            <div className="bg-white p-4 rounded-lg border-2 border-green-200 inline-block">
              <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Smartphone size={48} className="text-green-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">GPay QR Code</p>
                  <p className="text-xs text-gray-500 mt-1">Scan with Google Pay</p>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900">Payment Instructions:</h4>
            <div className="space-y-2">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-semibold text-green-600">1</span>
                </div>
                <p className="text-sm text-gray-600">Open Google Pay on your phone</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-semibold text-green-600">2</span>
                </div>
                <p className="text-sm text-gray-600">Scan the QR code above</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-semibold text-green-600">3</span>
                </div>
                <p className="text-sm text-gray-600">Complete the payment of {course.price}</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-semibold text-green-600">4</span>
                </div>
                <p className="text-sm text-gray-600">Course access will be sent to your email within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Email Notice */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <Mail className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-sm font-medium text-blue-900">Course Delivery</p>
                  <p className="text-xs text-blue-700 mt-1">
                    After payment verification, course materials and access details will be sent to{' '}
                    Growwithrs25@gmail.com
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="space-y-3">
            <Button onClick={handlePaymentComplete} className="w-full btn-primary">
              I've Completed Payment
            </Button>
            <Button onClick={onClose} variant="outline" className="w-full">
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EnrollmentModal;